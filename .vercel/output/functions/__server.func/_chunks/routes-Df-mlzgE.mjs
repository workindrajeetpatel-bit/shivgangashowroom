import { i as __toESM } from "../_runtime.mjs";
import { a as Navbar, c as Section, i as Footer, l as WhatsAppLinkHandler, n as Eyebrow, o as Reveal, r as FloatingWhatsApp, s as RevealCinema, t as Cta, u as useParallax } from "./WhatsAppLinkHandler-sj1ldZIy.mjs";
import { i as waLink, r as BUSINESS } from "./router-B0fH_cAW.mjs";
import { n as CATEGORIES } from "./products.shared-DKyMzatF.mjs";
import { t as cn } from "./utils-DWGjSd5x.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
// dist/server/assets/routes-Df-mlzgE.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var hero_cinematic_default = "/assets/hero-cinematic-CqjPVuJ-.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate min-h-[92svh] overflow-hidden ink-panel",
		"aria-labelledby": "hero-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_cinematic_default,
				alt: "Luxury showroom bathroom with a stone basin, freestanding bath and warm dramatic lighting",
				width: 1920,
				height: 1088,
				fetchPriority: "high",
				decoding: "async",
				className: "slow-zoom absolute inset-0 -z-10 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { backgroundImage: "var(--gradient-cinematic)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-12 lg:grid-cols-[1.15fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-cinema max-w-3xl",
						"data-visible": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-on-ink-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "inline-block h-px w-10 bg-on-ink-muted/60"
								}), "Varanasi · Retail & Wholesale · Sanitary Ware & Panels"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								id: "hero-heading",
								className: "mt-6 text-display text-on-ink",
								children: [
									"Bathrooms",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block italic text-on-ink-muted",
										children: "worth"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: "walking into."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-xl text-base leading-relaxed text-on-ink-muted sm:text-lg",
								children: "We deal in retail & wholesale of showroom-grade and modern home interior sanitary ware, wall fittings, and wall & ceiling panels in Varanasi — chosen with us in person or confirmed over WhatsApp."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Cta, {
									href: waLink("a bathroom setup"),
									className: "px-7 py-4 text-[0.9rem]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
										className: "h-4 w-4",
										"aria-hidden": true
									}), "Get a Quote on WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#products",
									className: "group inline-flex items-center justify-center gap-2 rounded-full glass-dark px-7 py-4 text-[0.9rem] font-bold tracking-wide transition-all duration-300 hover:bg-on-ink/15",
									children: ["Explore Products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowDown, {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5",
										"aria-hidden": true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-on-ink-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MapPin, {
											className: "h-4 w-4",
											"aria-hidden": true
										}), BUSINESS.location]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ShowerHead, {
											className: "h-4 w-4",
											"aria-hidden": true
										}), "Bathroom & fittings"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.LayoutPanelTop, {
											className: "h-4 w-4",
											"aria-hidden": true
										}), "Wall & ceiling panels"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scene-3d hidden w-[19rem] lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative transition-transform duration-700 [transform:rotateY(-16deg)_rotateX(7deg)] hover:[transform:rotateY(-8deg)_rotateX(3deg)]",
							style: { transformStyle: "preserve-3d" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "float-slow glass-dark w-full rounded-3xl p-3",
								style: { transform: "translateZ(60px)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/cat-fittings-RDFBZKLL.jpg",
										alt: "Chrome basin mixer tap on a white ceramic washbasin",
										width: 900,
										height: 900,
										loading: "lazy",
										className: "aspect-[4/3] w-full rounded-2xl object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-1 pb-0.5 pt-3 text-sm font-bold",
										children: "Bathroom Fittings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-1 pb-1 text-xs text-on-ink-muted",
										children: "Taps, showers, mixers"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "float-slow glass-dark absolute -bottom-14 -left-16 w-52 rounded-3xl p-3",
								style: {
									transform: "translateZ(120px)",
									animationDelay: "1.4s"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/cat-wall-panels-DsEPio91.jpg",
										alt: "Warm wood-finish decorative wall panels on a feature wall",
										width: 900,
										height: 900,
										loading: "lazy",
										className: "aspect-[4/3] w-full rounded-2xl object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-1 pb-0.5 pt-3 text-sm font-bold",
										children: "Wall Panels"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-1 pb-1 text-xs text-on-ink-muted",
										children: "Multiple design options"
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "scroll-hint absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-on-ink-muted sm:block",
				children: "Scroll"
			})
		]
	});
}
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "products",
		labelledBy: "products-heading",
		className: "md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealCinema, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we stock" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "products-heading",
				className: "text-display-sm",
				children: ["Everything for the bathroom,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block italic text-muted-foreground",
					children: "wall and ceiling."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Browse the categories, then message us on WhatsApp — we'll tell you what's currently available and share pricing for exactly what you need."
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-16 grid gap-8 md:grid-cols-2",
			children: CATEGORIES.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCinema, {
				as: "li",
				delay: i % 2 * 110,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-cinema)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden bg-secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: cat.alt,
								width: 900,
								height: 900,
								loading: "lazy",
								className: "aspect-[16/11] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.08]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
								style: { backgroundImage: "var(--gradient-cinematic)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-5 top-5 rounded-full glass-dark px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em]",
								children: String(i + 1).padStart(2, "0")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-7 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold tracking-tight",
								children: cat.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: cat.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products/$category",
									params: { category: cat.slug },
									className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] transition-transform duration-300 hover:-translate-y-0.5",
									children: ["See availability", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5",
										"aria-hidden": true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink(cat.topic.toLowerCase()),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
										className: "h-4 w-4",
										"aria-hidden": true
									}), "Ask on WhatsApp"]
								})]
							})
						]
					})]
				})
			}, cat.title))
		})]
	});
}
var panels_cinematic_default = "/assets/panels-cinematic-jqVK0CGn.jpg";
var gallery_panel_detail_default = "/assets/gallery-panel-detail-3ARR3ovZ.jpg";
var BENEFITS = [
	{
		icon: import_lucide_react.Brush,
		title: "Easy to maintain",
		copy: "Smooth panel surfaces are simple to wipe down as part of regular cleaning."
	},
	{
		icon: import_lucide_react.Sparkles,
		title: "Modern finish",
		copy: "An instantly updated look for feature walls, living rooms, shops and ceilings."
	},
	{
		icon: import_lucide_react.Palette,
		title: "Multiple design options",
		copy: "Wood-look, stone-look and plain finishes — come see the samples in person."
	}
];
function PanelsShowcase() {
	const { ref, offset } = useParallax(.14);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "panels",
		"aria-labelledby": "panels-heading",
		className: "relative isolate scroll-mt-24 overflow-hidden ink-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			"aria-hidden": true,
			className: "absolute inset-0 -z-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: panels_cinematic_default,
				alt: "",
				width: 1600,
				height: 1104,
				loading: "lazy",
				className: "h-[125%] w-full object-cover",
				style: {
					transform: `translate3d(0, ${offset}px, 0)`,
					willChange: "transform"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { backgroundImage: "var(--gradient-cinematic)" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealCinema, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Wall & ceiling" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "panels-heading",
						className: "mt-5 text-display-sm text-on-ink",
						children: ["Panels that transform", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic text-on-ink-muted",
							children: "walls & ceilings."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg leading-relaxed text-on-ink-muted",
						children: "A panelled wall or ceiling changes how a whole room reads — without the mess of a full renovation. Visit the showroom to see finishes side by side, or send a photo of your space on WhatsApp and we'll suggest options."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-4",
						children: BENEFITS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCinema, {
							as: "li",
							delay: 120 + i * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-dark flex gap-4 rounded-2xl p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-on-ink/12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, {
										className: "h-5 w-5",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold text-on-ink",
										children: b.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-on-ink-muted",
										children: b.copy
									})]
								})]
							})
						}, b.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Cta, {
							href: waLink("wall and ceiling panels"),
							className: "px-7 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "Discuss panels on WhatsApp"]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCinema, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scene-3d",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative transition-transform duration-700 [transform:rotateY(12deg)_rotateX(5deg)] hover:[transform:rotateY(5deg)]",
							style: { transformStyle: "preserve-3d" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-[2rem] shadow-[var(--shadow-cinema)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/cat-ceiling-panels-B9NP62rI.jpg",
									alt: "Panelled ceiling with concealed cove lighting in a modern room",
									width: 900,
									height: 900,
									loading: "lazy",
									className: "aspect-[4/3] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "glass-dark px-5 py-3 text-sm font-semibold",
									children: "Ceiling application"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "float-slow glass-dark absolute -bottom-12 -left-6 w-40 overflow-hidden rounded-2xl p-2 sm:w-52",
								style: { transform: "translateZ(110px)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gallery_panel_detail_default,
									alt: "Close-up texture of a wood-look panel surface",
									width: 900,
									height: 1200,
									loading: "lazy",
									className: "aspect-[4/3] w-full rounded-xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "px-1 py-1.5 text-xs font-bold",
									children: "Finish detail"
								})]
							})]
						})
					})
				})]
			})
		})]
	});
}
var REASONS = [
	{
		icon: import_lucide_react.Store,
		title: "A local showroom you can visit",
		copy: "See and handle products in person in Varanasi before deciding — finishes always look different in real life."
	},
	{
		icon: import_lucide_react.Boxes,
		title: "Variety across categories",
		copy: "Sanitary ware, fittings, wall panels and ceiling panels together, so one visit covers the whole job."
	},
	{
		icon: import_lucide_react.Compass,
		title: "Practical guidance",
		copy: "Tell us the room size, budget range and look you want, and we'll point you to options that fit."
	},
	{
		icon: import_lucide_react.MessageSquareText,
		title: "Easy WhatsApp communication",
		copy: "Send photos or a list, get answers on availability and pricing without a trip — visit only when you're ready."
	}
];
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "why-us",
		labelledBy: "why-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealCinema, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Shivganga" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: "why-heading",
			className: "mt-5 max-w-3xl text-display-sm",
			children: "Why customers in Varanasi choose Shivganga"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-6 sm:grid-cols-2",
			children: REASONS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCinema, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card lift-on-hover h-full rounded-3xl p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground [background-image:var(--gradient-ink)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
								className: "h-5 w-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-semibold",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: r.copy
						})
					]
				})
			}) }, r.title))
		})]
	});
}
var SHOTS = [
	{
		src: "/assets/hero-showroom-BTMPCL4i.jpg",
		alt: "Stone-finish bathroom with wall-hung vanity and freestanding basin",
		span: "sm:col-span-2 sm:row-span-2",
		w: 1280,
		h: 1600
	},
	{
		src: "/assets/gallery-vanity-BQ9UgL2y.jpg",
		alt: "Marble vanity with twin basins and brass fittings",
		span: "",
		w: 1200,
		h: 900
	},
	{
		src: "/assets/gallery-shower-rZZcX8Id.jpg",
		alt: "Rain shower head with running water in a dark tiled shower",
		span: "",
		w: 900,
		h: 1200
	},
	{
		src: gallery_panel_detail_default,
		alt: "Close-up of wood-look wall panel texture in warm light",
		span: "",
		w: 900,
		h: 1200
	},
	{
		src: "/assets/cat-ceiling-panels-B9NP62rI.jpg",
		alt: "Panelled ceiling with cove lighting in a bright room",
		span: "",
		w: 900,
		h: 900
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		labelledBy: "gallery-heading",
		className: "md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealCinema, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Inspiration" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "gallery-heading",
				className: "mt-5 max-w-3xl text-display-sm",
				children: ["Showroom-style looks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block italic text-muted-foreground",
					children: "to borrow from."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-muted-foreground",
				children: "A feel for the finishes and combinations you can put together. Found something you like? Send it to us on WhatsApp."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4",
			children: SHOTS.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCinema, {
				delay: i * 90,
				className: `${shot.span} h-full`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-secondary shadow-[var(--shadow-soft)] transition-shadow duration-700 hover:shadow-[var(--shadow-cinema)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.src,
						alt: shot.alt,
						width: shot.w,
						height: shot.h,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.09]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
						style: { backgroundImage: "var(--gradient-cinematic)" }
					})]
				})
			}, shot.alt))
		})]
	});
}
var CHIPS = [
	{
		label: "Bathroom setup",
		topic: "a complete bathroom setup"
	},
	{
		label: "Sanitary ware",
		topic: "sanitary ware"
	},
	{
		label: "Bathroom fittings",
		topic: "bathroom fittings"
	},
	{
		label: "Wall panels",
		topic: "wall panels"
	},
	{
		label: "Ceiling panels",
		topic: "ceiling panels"
	},
	{
		label: "Need pricing",
		topic: "pricing for a few items"
	}
];
function Inquiry() {
	const [selected, setSelected] = (0, import_react.useState)(["Bathroom setup"]);
	const toggle = (label) => setSelected((prev) => prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]);
	const topics = CHIPS.filter((c) => selected.includes(c.label)).map((c) => c.topic);
	const topicText = topics.length === 0 ? void 0 : topics.length === 1 ? topics[0] : `${topics.slice(0, -1).join(", ")} and ${topics.at(-1)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		labelledBy: "inquiry-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-primary-foreground shadow-[var(--shadow-deep)] sm:px-12 sm:py-16 [background-image:var(--gradient-ink)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Quick inquiry" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "inquiry-heading",
						className: "mt-4 text-3xl font-semibold sm:text-4xl",
						children: "Tell us what you need — we'll reply on WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-primary-foreground/75",
						children: "Pick one or more topics and your message is written for you. No forms, no waiting."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2.5",
						role: "group",
						"aria-label": "Inquiry topics",
						children: CHIPS.map((chip) => {
							const active = selected.includes(chip.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => toggle(chip.label),
								className: cn("inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300", active ? "border-transparent bg-primary-foreground text-foreground shadow-[var(--shadow-soft)]" : "border-primary-foreground/25 text-primary-foreground/85 hover:border-primary-foreground/60"),
								children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, {
									className: "h-3.5 w-3.5",
									"aria-hidden": true
								}), chip.label]
							}) }, chip.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(topicText),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), "Send inquiry on WhatsApp"]
					})
				]
			})]
		}) })
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLinkHandler, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsShowcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inquiry, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
export { Index as component };
