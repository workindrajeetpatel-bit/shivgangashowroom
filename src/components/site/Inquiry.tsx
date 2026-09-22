import { useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import { Section, Reveal, Eyebrow } from "./primitives";
import { waLink } from "@/lib/business";
import { cn } from "@/lib/utils";

const CHIPS = [
  { label: "Bathroom setup", topic: "a complete bathroom setup" },
  { label: "Sanitary ware", topic: "sanitary ware" },
  { label: "Bathroom fittings", topic: "bathroom fittings" },
  { label: "Wall panels", topic: "wall panels" },
  { label: "Ceiling panels", topic: "ceiling panels" },
  { label: "Need pricing", topic: "pricing for a few items" },
];

export function Inquiry() {
  const [selected, setSelected] = useState<string[]>(["Bathroom setup"]);

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );

  const topics = CHIPS.filter((c) => selected.includes(c.label)).map((c) => c.topic);
  const topicText =
    topics.length === 0
      ? undefined
      : topics.length === 1
        ? topics[0]
        : `${topics.slice(0, -1).join(", ")} and ${topics.at(-1)}`;

  return (
    <Section labelledBy="inquiry-heading">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-primary-foreground shadow-[var(--shadow-deep)] sm:px-12 sm:py-16 [background-image:var(--gradient-ink)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <Eyebrow>Quick inquiry</Eyebrow>
            <h2 id="inquiry-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
              Tell us what you need — we&apos;ll reply on WhatsApp
            </h2>
            <p className="mt-4 text-primary-foreground/75">
              Pick one or more topics and your message is written for you. No forms, no waiting.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Inquiry topics">
              {CHIPS.map((chip) => {
                const active = selected.includes(chip.label);
                return (
                  <li key={chip.label}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(chip.label)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                        active
                          ? "border-transparent bg-primary-foreground text-foreground shadow-[var(--shadow-soft)]"
                          : "border-primary-foreground/25 text-primary-foreground/85 hover:border-primary-foreground/60",
                      )}
                    >
                      {active && <Check className="h-3.5 w-3.5" aria-hidden />}
                      {chip.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href={waLink(topicText)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Send inquiry on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
