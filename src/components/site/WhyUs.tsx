import { Store, Boxes, Compass, MessageSquareText } from "lucide-react";
import { Section, RevealCinema as Reveal, Eyebrow } from "./primitives";

const REASONS = [
  {
    icon: Store,
    title: "A local showroom you can visit",
    copy: "See and handle products in person in Varanasi before deciding — finishes always look different in real life.",
  },
  {
    icon: Boxes,
    title: "Variety across categories",
    copy: "Sanitary ware, fittings, wall panels and ceiling panels together, so one visit covers the whole job.",
  },
  {
    icon: Compass,
    title: "Practical guidance",
    copy: "Tell us the room size, budget range and look you want, and we'll point you to options that fit.",
  },
  {
    icon: MessageSquareText,
    title: "Easy WhatsApp communication",
    copy: "Send photos or a list, get answers on availability and pricing without a trip — visit only when you're ready.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us" labelledBy="why-heading">
      <Reveal>
        <Eyebrow>Why Shivganga</Eyebrow>
        <h2 id="why-heading" className="mt-5 max-w-3xl text-display-sm">
          Why customers in Varanasi choose Shivganga
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {REASONS.map((r, i) => (
          <li key={r.title}>
            <Reveal delay={i * 80}>
              <article className="surface-card lift-on-hover h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground [background-image:var(--gradient-ink)]">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
