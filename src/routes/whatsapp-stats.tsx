import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  readWhatsAppClicks,
  resetWhatsAppClicks,
  type WhatsAppClickCounts,
} from "@/lib/analytics";
import { BUSINESS } from "@/lib/business";

const TITLE = "WhatsApp Inquiry Clicks — Shivganga Sanitary Ware & Panels";
const DESCRIPTION =
  "Internal dashboard showing how many visitors on this device started a WhatsApp inquiry with Shivganga Sanitary Ware & Panels.";

export const Route = createFileRoute("/whatsapp-stats")({
  component: StatsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function StatsPage() {
  const [counts, setCounts] = useState<WhatsAppClickCounts | null>(null);

  useEffect(() => {
    const sync = () => setCounts(readWhatsAppClicks());
    sync();
    window.addEventListener("shivganga:wa-click", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("shivganga:wa-click", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  const sources = counts ? Object.entries(counts.bySource).sort((a, b) => b[1] - a[1]) : [];

  return (
    <main className="mx-auto min-h-dvh w-full max-w-2xl px-5 py-14">
      <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
        WhatsApp inquiry clicks
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Every WhatsApp CTA on the {BUSINESS.shortName} site is tracked. Counts below are stored on
        this device; the same events are also sent to Google Analytics or PostHog automatically if
        one is connected later.
      </p>

      <div className="mt-8 rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Total clicks</p>
        <p className="mt-2 font-display text-5xl text-foreground">{counts?.total ?? 0}</p>
        {counts?.lastAt ? (
          <p className="mt-2 text-xs text-muted-foreground">
            Last click {new Date(counts.lastAt).toLocaleString()}
          </p>
        ) : null}
      </div>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        By button
      </h2>
      <ul className="mt-4 space-y-2">
        {sources.length === 0 ? (
          <li className="text-sm text-muted-foreground">No WhatsApp clicks recorded yet.</li>
        ) : (
          sources.map(([source, count]) => (
            <li
              key={source}
              className="flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm"
            >
              <span className="text-foreground">{source}</span>
              <span className="font-semibold text-primary">{count}</span>
            </li>
          ))
        )}
      </ul>

      <button
        type="button"
        onClick={() => {
          resetWhatsAppClicks();
          setCounts(readWhatsAppClicks());
        }}
        className="mt-8 rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Reset counts on this device
      </button>
    </main>
  );
}
