import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, RevealCinema, Eyebrow } from "./primitives";
import { waLink } from "@/lib/business";
import { CATEGORIES } from "@/lib/catalog";

export function Categories() {
  return (
    <Section id="products" labelledBy="products-heading" className="md:py-36">
      <RevealCinema>
        <Eyebrow>What we stock</Eyebrow>
        <div className="mt-5 grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end">
          <h2 id="products-heading" className="text-display-sm">
            Everything for the bathroom,
            <span className="block italic text-muted-foreground">wall and ceiling.</span>
          </h2>
          <p className="text-muted-foreground">
            Browse the categories, then message us on WhatsApp — we&apos;ll tell you what&apos;s
            currently available and share pricing for exactly what you need.
          </p>
        </div>
      </RevealCinema>

      <ul className="mt-16 grid gap-8 md:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <RevealCinema as="li" key={cat.title} delay={(i % 2) * 110}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-cinema)]">
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.08]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundImage: "var(--gradient-cinematic)" }}
                />
                <span className="absolute left-5 top-5 rounded-full glass-dark px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{cat.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cat.copy}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    to="/products/$category"
                    params={{ category: cat.slug }}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    See availability
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                  <a
                    href={waLink(cat.topic.toLowerCase())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </RevealCinema>
        ))}
      </ul>
    </Section>
  );
}
