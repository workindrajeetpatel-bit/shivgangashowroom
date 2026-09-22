import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { waLink } from "@/lib/business";
import { cn } from "@/lib/utils";

const LINKS = [
  { hash: "home", label: "Home" },
  { hash: "products", label: "Products" },
  { hash: "panels", label: "Panels" },
  { hash: "why-us", label: "Why Us" },
  { hash: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3 sm:py-4",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <nav
          aria-label="Main"
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500",
            scrolled ? "surface-glass" : "border border-transparent",
            overHero && "text-on-ink",
          )}
        >
          <Link
            to="/"
            hash="home"
            className="min-w-0"
            aria-label="Shivganga Sanitary Ware and Panels — home"
          >
            <Logo onDark={overHero} />
          </Link>

          <div className="flex items-center gap-1">
            <ul className="mr-2 hidden items-center gap-1 lg:flex">
              {LINKS.map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/"
                    hash={link.hash}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                      overHero
                        ? "text-on-ink/80 hover:bg-on-ink/10 hover:text-on-ink"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
                overHero ? "glass-dark" : "border-border bg-card/80 text-foreground",
              )}
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="surface-glass mt-2 rounded-2xl p-3 lg:hidden"
          >
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <ul className="grid gap-1">
              {LINKS.map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/"
                    hash={link.hash}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-sm font-bold text-whatsapp-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
