/**
 * Lightweight, dependency-free click tracking for WhatsApp CTAs.
 *
 * - Forwards each click to Google Analytics / PostHog when either is present
 *   on the page (so hooking up an analytics tool later needs no code change).
 * - Always keeps a local tally in localStorage so counts are visible even
 *   without an analytics provider.
 */

const STORAGE_KEY = "shivganga.wa-clicks.v1";

export type WhatsAppClickCounts = {
  total: number;
  bySource: Record<string, number>;
  firstAt: string | null;
  lastAt: string | null;
};

const EMPTY: WhatsAppClickCounts = { total: 0, bySource: {}, firstAt: null, lastAt: null };

export function readWhatsAppClicks(): WhatsAppClickCounts {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as WhatsAppClickCounts;
    return { ...EMPTY, ...parsed, bySource: parsed.bySource ?? {} };
  } catch {
    return EMPTY;
  }
}

export function resetWhatsAppClicks() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  posthog?: { capture?: (event: string, props?: Record<string, unknown>) => void };
};

/** Record a WhatsApp CTA click. `source` describes which button was used. */
export function trackWhatsAppClick(source: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const now = new Date().toISOString();

  try {
    const current = readWhatsAppClicks();
    const next: WhatsAppClickCounts = {
      total: current.total + 1,
      bySource: { ...current.bySource, [source]: (current.bySource[source] ?? 0) + 1 },
      firstAt: current.firstAt ?? now,
      lastAt: now,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("shivganga:wa-click", { detail: next }));
  } catch {
    /* storage may be unavailable — analytics forwarding below still runs */
  }

  const w = window as AnalyticsWindow;
  const payload = { event_category: "engagement", cta_source: source, ...extra };
  try {
    w.gtag?.("event", "whatsapp_click", payload);
    w.posthog?.capture?.("whatsapp_click", payload);
    if (!w.gtag && Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: "whatsapp_click", ...payload });
    }
  } catch {
    /* never let tracking break a CTA */
  }
}

/** Derive a readable source label from the clicked anchor. */
export function labelForAnchor(anchor: HTMLAnchorElement): string {
  return (
    anchor.dataset["cta"] ||
    anchor.getAttribute("aria-label") ||
    anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) ||
    "unlabelled"
  );
}
