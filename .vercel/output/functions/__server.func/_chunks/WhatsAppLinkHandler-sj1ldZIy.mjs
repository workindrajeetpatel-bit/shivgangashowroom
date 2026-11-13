import { i as __toESM } from "../_runtime.mjs";
import { i as waLink, r as BUSINESS } from "./router-B0fH_cAW.mjs";
import { t as cn } from "./utils-DWGjSd5x.mjs";
import { i as trackWhatsAppClick, t as labelForAnchor } from "./analytics-BYLoJx05.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
// dist/server/assets/WhatsAppLinkHandler-sj1ldZIy.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		alt: "Shivganga Sanitary Ware & Panels Logo",
		className: cn("h-10 w-10 shrink-0 object-contain", className)
	});
}
function Logo({ className, compact, onDark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex min-w-0 items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: cn("h-10 w-10 shrink-0", onDark ? "text-on-ink" : "text-primary") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate font-display text-base font-semibold tracking-tight sm:text-lg",
				children: "Shivganga"
			}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block truncate text-[0.62rem] font-semibold uppercase tracking-[0.18em]", onDark ? "text-on-ink/70" : "text-muted-foreground"),
				children: "Sanitary Ware & Panels"
			})]
		})]
	});
}
var LINKS = [
	{
		hash: "home",
		label: "Home"
	},
	{
		hash: "products",
		label: "Products"
	},
	{
		hash: "panels",
		label: "Panels"
	},
	{
		hash: "why-us",
		label: "Why Us"
	},
	{
		hash: "contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const overHero = useRouterState({ select: (st) => st.location.pathname }) === "/" && !scrolled;
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-3 sm:py-4"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Main",
				className: cn("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500", scrolled ? "surface-glass" : "border border-transparent", overHero && "text-on-ink"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "home",
					className: "min-w-0",
					"aria-label": "Shivganga Sanitary Ware and Panels — home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { onDark: overHero })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mr-2 hidden items-center gap-1 lg:flex",
							children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: link.hash,
								className: cn("rounded-full px-3.5 py-2 text-sm font-semibold transition-colors", overHero ? "text-on-ink/80 hover:bg-on-ink/10 hover:text-on-ink" : "text-muted-foreground hover:bg-secondary hover:text-foreground"),
								children: link.label
							}) }, link.hash))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "WhatsApp Us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "mobile-menu",
							"aria-label": open ? "Close menu" : "Open menu",
							className: cn("inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden", overHero ? "glass-dark" : "border-border bg-card/80 text-foreground"),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {
								className: "h-5 w-5",
								"aria-hidden": true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, {
								className: "h-5 w-5",
								"aria-hidden": true
							})
						})
					]
				})]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-menu",
				className: "surface-glass mt-2 rounded-2xl p-3 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Close menu",
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {
								className: "h-4 w-4",
								"aria-hidden": true
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-1",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: link.hash,
							onClick: () => setOpen(false),
							className: "block rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary",
							children: link.label
						}) }, link.hash))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-2 flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-sm font-bold text-whatsapp-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), "WhatsApp Us"]
					})
				]
			})]
		})
	});
}
/** Section wrapper with consistent rhythm and container width. */
function Section({ id, className, children, labelledBy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		"aria-labelledby": labelledBy,
		className: cn("scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
/** Fades content up when it enters the viewport. */
function Reveal({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-eyebrow flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "inline-block h-px w-6 bg-primary/50"
		}), children]
	});
}
/** Primary link-style call to action. */
function Cta({ href, children, variant = "whatsapp", className, external = true, ariaLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		"aria-label": ariaLabel,
		className: cn("group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98]", {
			whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-float)] hover:-translate-y-0.5 hover:brightness-105",
			ink: "text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 [background-image:var(--gradient-ink)]",
			ghost: "border border-border bg-card/70 text-foreground backdrop-blur hover:border-primary/50 hover:text-primary"
		}[variant], className),
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
/** Cinematic blur+rise reveal used across the redesigned sections. */
function RevealCinema({ children, delay = 0, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -80px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal-cinema", className),
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
/** Returns a translateY offset driven by scroll position, for parallax depth. */
function useParallax(strength = .12) {
	const ref = (0, import_react.useRef)(null);
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const node = ref.current;
			if (!node) return;
			const rect = node.getBoundingClientRect();
			const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
			setOffset(-progress * strength * 100);
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [strength]);
	return {
		ref,
		offset
	};
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contact",
		className: "scroll-mt-24 border-t border-border bg-secondary/50 px-5 py-16 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Retail & wholesale dealer of sanitary ware, bathroom fittings and wall & ceiling panels in Varanasi. Message us for product availability and quotes — we're happy to guide you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "Chat on WhatsApp"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 grid gap-3 text-sm",
						children: [
							BUSINESS.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${p.dial}`,
								className: "inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Phone, {
									className: "h-4 w-4 text-primary",
									"aria-hidden": true
								}), p.display]
							}) }, p.dial)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${BUSINESS.email}`,
								className: "inline-flex items-center gap-2.5 break-all font-semibold transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Mail, {
									className: "h-4 w-4 shrink-0 text-primary",
									"aria-hidden": true
								}), BUSINESS.email]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MapPin, {
									className: "h-4 w-4 text-primary",
									"aria-hidden": true
								}), BUSINESS.location]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-2.5 text-sm font-semibold",
						children: [
							{
								hash: "home",
								label: "Home"
							},
							{
								hash: "products",
								label: "Products"
							},
							{
								hash: "panels",
								label: "Panels"
							},
							{
								hash: "why-us",
								label: "Why Us"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: l.hash,
							className: "transition-colors hover:text-primary",
							children: l.label
						}) }, l.hash))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 border-t border-border pt-6 text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BUSINESS.name,
					". All rights reserved."
				]
			})]
		})
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with Shivganga Sanitary Ware and Panels on WhatsApp",
		className: "group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-4 text-whatsapp-foreground shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1 sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.8s]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
				className: "h-6 w-6",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-sm font-bold sm:inline",
				children: "WhatsApp Us"
			})
		]
	});
}
/** Track WhatsApp CTA clicks while leaving navigation to the browser.
* Native anchor navigation is important here: preview browsers can route an
* external link to a real tab, while scripted window.open calls may try to
* render WhatsApp inside the preview frame (which WhatsApp correctly blocks).
*/
function WhatsAppLinkHandler() {
	(0, import_react.useEffect)(() => {
		const onClick = (event) => {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
			const anchor = event.target?.closest?.("a");
			if (!anchor) return;
			const href = anchor.getAttribute("href");
			if (!href || !href.includes("wa.me")) return;
			trackWhatsAppClick(labelForAnchor(anchor), { href });
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	return null;
}
export { Navbar as a, Section as c, Footer as i, WhatsAppLinkHandler as l, Eyebrow as n, Reveal as o, FloatingWhatsApp as r, RevealCinema as s, Cta as t, useParallax as u };
