import { Section, RevealCinema, Eyebrow } from "./primitives";
import heroShowroom from "@/assets/hero-showroom.jpg";
import galleryShower from "@/assets/gallery-shower.jpg";
import galleryVanity from "@/assets/gallery-vanity.jpg";
import panelDetail from "@/assets/gallery-panel-detail.jpg";
import catCeiling from "@/assets/cat-ceiling-panels.jpg";

const SHOTS = [
  {
    src: heroShowroom,
    alt: "Stone-finish bathroom with wall-hung vanity and freestanding basin",
    span: "sm:col-span-2 sm:row-span-2",
    w: 1280,
    h: 1600,
  },
  { src: galleryVanity, alt: "Marble vanity with twin basins and brass fittings", span: "", w: 1200, h: 900 },
  { src: galleryShower, alt: "Rain shower head with running water in a dark tiled shower", span: "", w: 900, h: 1200 },
  { src: panelDetail, alt: "Close-up of wood-look wall panel texture in warm light", span: "", w: 900, h: 1200 },
  { src: catCeiling, alt: "Panelled ceiling with cove lighting in a bright room", span: "", w: 900, h: 900 },
];

export function Gallery() {
  return (
    <Section labelledBy="gallery-heading" className="md:py-36">
      <RevealCinema>
        <Eyebrow>Inspiration</Eyebrow>
        <h2 id="gallery-heading" className="mt-5 max-w-3xl text-display-sm">
          Showroom-style looks
          <span className="block italic text-muted-foreground">to borrow from.</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          A feel for the finishes and combinations you can put together. Found something you like?
          Send it to us on WhatsApp.
        </p>
      </RevealCinema>

      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
        {SHOTS.map((shot, i) => (
          <RevealCinema key={shot.alt} delay={i * 90} className={`${shot.span} h-full`}>
            <figure className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-secondary shadow-[var(--shadow-soft)] transition-shadow duration-700 hover:shadow-[var(--shadow-cinema)]">
              <img
                src={shot.src}
                alt={shot.alt}
                width={shot.w}
                height={shot.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.09]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ backgroundImage: "var(--gradient-cinematic)" }}
              />
            </figure>
          </RevealCinema>
        ))}
      </div>
    </Section>
  );
}
