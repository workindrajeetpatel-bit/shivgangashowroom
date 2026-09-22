import { MessageCircle, ArrowDown, MapPin, ShowerHead, LayoutPanelTop } from "lucide-react";
import { Cta } from "./primitives";
import { waLink, BUSINESS } from "@/lib/business";
import heroCinematic from "@/assets/hero-cinematic.jpg";
import catFittings from "@/assets/cat-fittings.jpg";
import catWallPanels from "@/assets/cat-wall-panels.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[92svh] overflow-hidden ink-panel"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed cinematic backdrop */}
      <img
        src={heroCinematic}
        alt="Luxury showroom bathroom with a stone basin, freestanding bath and warm dramatic lighting"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="slow-zoom absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-cinematic)" }}
      />

      <div className="mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_auto]">
          <div className="reveal-cinema max-w-3xl" data-visible="true">
            <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-on-ink-muted">
              <span aria-hidden className="inline-block h-px w-10 bg-on-ink-muted/60" />
              Varanasi · Retail &amp; Wholesale · Sanitary Ware &amp; Panels
            </p>

            <h1 id="hero-heading" className="mt-6 text-display text-on-ink">
              Bathrooms
              <span className="block italic text-on-ink-muted">worth</span>
              <span className="block">walking into.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-on-ink-muted sm:text-lg">
              We deal in retail &amp; wholesale of showroom-grade and modern home interior sanitary ware, wall fittings, and wall &amp; ceiling panels in Varanasi — chosen with us in person or confirmed over WhatsApp.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Cta href={waLink("a bathroom setup")} className="px-7 py-4 text-[0.9rem]">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Get a Quote on WhatsApp
              </Cta>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-full glass-dark px-7 py-4 text-[0.9rem] font-bold tracking-wide transition-all duration-300 hover:bg-on-ink/15"
              >
                Explore Products
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-on-ink-muted">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                {BUSINESS.location}
              </li>
              <li className="flex items-center gap-2">
                <ShowerHead className="h-4 w-4" aria-hidden />
                Bathroom &amp; fittings
              </li>
              <li className="flex items-center gap-2">
                <LayoutPanelTop className="h-4 w-4" aria-hidden />
                Wall &amp; ceiling panels
              </li>
            </ul>
          </div>

          {/* Layered 3D product cards */}
          <div className="scene-3d hidden w-[19rem] lg:block">
            <div
              className="relative transition-transform duration-700 [transform:rotateY(-16deg)_rotateX(7deg)] hover:[transform:rotateY(-8deg)_rotateX(3deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="float-slow glass-dark w-full rounded-3xl p-3"
                style={{ transform: "translateZ(60px)" }}
              >
                <img
                  src={catFittings}
                  alt="Chrome basin mixer tap on a white ceramic washbasin"
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <p className="px-1 pb-0.5 pt-3 text-sm font-bold">Bathroom Fittings</p>
                <p className="px-1 pb-1 text-xs text-on-ink-muted">Taps, showers, mixers</p>
              </div>

              <div
                className="float-slow glass-dark absolute -bottom-14 -left-16 w-52 rounded-3xl p-3"
                style={{ transform: "translateZ(120px)", animationDelay: "1.4s" }}
              >
                <img
                  src={catWallPanels}
                  alt="Warm wood-finish decorative wall panels on a feature wall"
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <p className="px-1 pb-0.5 pt-3 text-sm font-bold">Wall Panels</p>
                <p className="px-1 pb-1 text-xs text-on-ink-muted">Multiple design options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="scroll-hint absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-on-ink-muted sm:block"
      >
        Scroll
      </span>
    </section>
  );
}
