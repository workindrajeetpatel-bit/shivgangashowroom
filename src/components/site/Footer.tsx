import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS, waLink } from "@/lib/business";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border bg-secondary/50 px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Retail &amp; wholesale dealer of sanitary ware, bathroom fittings and wall &amp; ceiling panels in Varanasi. Message us
              for product availability and quotes — we&apos;re happy to guide you.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              {BUSINESS.phones.map((p) => (
                <li key={p.dial}>
                  <a
                    href={`tel:${p.dial}`}
                    className="inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" aria-hidden />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2.5 break-all font-semibold transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden />
                {BUSINESS.location}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-5 grid gap-2.5 text-sm font-semibold">
              {[
                { hash: "home", label: "Home" },
                { hash: "products", label: "Products" },
                { hash: "panels", label: "Panels" },
                { hash: "why-us", label: "Why Us" },
              ].map((l) => (
                <li key={l.hash}>
                  <Link to="/" hash={l.hash} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
