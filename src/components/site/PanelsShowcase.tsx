import { Sparkles, Brush, Palette, MessageCircle } from "lucide-react";
import { RevealCinema, Eyebrow, Cta, useParallax } from "./primitives";
import { waLink } from "@/lib/business";
import panelsCinematic from "@/assets/panels-cinematic.jpg";
import catCeiling from "@/assets/cat-ceiling-panels.jpg";
import panelDetail from "@/assets/gallery-panel-detail.jpg";

const BENEFITS = [
  {
    icon: Brush,
    title: "Easy to maintain",
    copy: "Smooth panel surfaces are simple to wipe down as part of regular cleaning.",
  },
  {
    icon: Sparkles,
    title: "Modern finish",
    copy: "An instantly updated look for feature walls, living rooms, shops and ceilings.",
  },
  {
    icon: Palette,
    title: "Multiple design options",
    copy: "Wood-look, stone-look and plain finishes — come see the samples in person.",
  },
];

export function PanelsShowcase() {
  const { ref, offset } = useParallax(0.14);

  return (
    <section
      id="panels"
      aria-labelledby="panels-heading"
      className="relative isolate scroll-mt-24 overflow-hidden ink-panel"
    >
      <div ref={ref} aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={panelsCinematic}
          alt=""
          width={1600}
          height={1104}
          loading="lazy"
          className="h-[125%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-cinematic)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <RevealCinema>
            <Eyebrow>Wall &amp; ceiling</Eyebrow>
            <h2 id="panels-heading" className="mt-5 text-display-sm text-on-ink">
              Panels that transform
              <span className="block italic text-on-ink-muted">walls &amp; ceilings.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-on-ink-muted">
              A panelled wall or ceiling changes how a whole room reads — without the mess of a full
              renovation. Visit the showroom to see finishes side by side, or send a photo of your
              space on WhatsApp and we&apos;ll suggest options.
            </p>

            <ul className="mt-10 grid gap-4">
              {BENEFITS.map((b, i) => (
                <RevealCinema as="li" key={b.title} delay={120 + i * 90}>
                  <div className="glass-dark flex gap-4 rounded-2xl p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-on-ink/12">
                      <b.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-on-ink">{b.title}</h3>
                      <p className="mt-1 text-sm text-on-ink-muted">{b.copy}</p>
                    </div>
                  </div>
                </RevealCinema>
              ))}
            </ul>

            <div className="mt-10">
              <Cta href={waLink("wall and ceiling panels")} className="px-7 py-4">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Discuss panels on WhatsApp
              </Cta>
            </div>
          </RevealCinema>

          <RevealCinema delay={160}>
            <div className="scene-3d">
              <div
                className="relative transition-transform duration-700 [transform:rotateY(12deg)_rotateX(5deg)] hover:[transform:rotateY(5deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <figure className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-cinema)]">
                  <img
                    src={catCeiling}
                    alt="Panelled ceiling with concealed cove lighting in a modern room"
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="glass-dark px-5 py-3 text-sm font-semibold">
                    Ceiling application
                  </figcaption>
                </figure>

                <figure
                  className="float-slow glass-dark absolute -bottom-12 -left-6 w-40 overflow-hidden rounded-2xl p-2 sm:w-52"
                  style={{ transform: "translateZ(110px)" }}
                >
                  <img
                    src={panelDetail}
                    alt="Close-up texture of a wood-look panel surface"
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <figcaption className="px-1 py-1.5 text-xs font-bold">Finish detail</figcaption>
                </figure>
              </div>
            </div>
          </RevealCinema>
        </div>
      </div>
    </section>
  );
}
