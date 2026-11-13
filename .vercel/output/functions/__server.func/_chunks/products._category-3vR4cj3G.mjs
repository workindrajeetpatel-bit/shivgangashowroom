import { a as Navbar, c as Section, i as Footer, l as WhatsAppLinkHandler, n as Eyebrow, o as Reveal, r as FloatingWhatsApp } from "./WhatsAppLinkHandler-sj1ldZIy.mjs";
import { i as waLink, n as Route } from "./router-B0fH_cAW.mjs";
import { t as cn } from "./utils-DWGjSd5x.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
// dist/server/assets/products._category-3vR4cj3G.js
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
function CategoryProducts() {
	const { category, result } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLinkHandler, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				labelledBy: "category-heading",
				className: "pt-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "products",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), "All categories"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Current availability" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "category-heading",
						className: "mt-4 text-3xl font-semibold sm:text-4xl",
						children: category.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: category.copy
					})]
				})] }), !result.configured || result.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card mt-12 rounded-3xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Stock list is being updated"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground",
							children: [
								"Message us on WhatsApp and we'll tell you exactly what's available in",
								" ",
								category.title.toLowerCase(),
								" right now."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(category.topic),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "Ask on WhatsApp"]
						})
					]
				}) }) : result.products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card mt-12 rounded-3xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "No items listed here yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground",
							children: "New stock is added regularly. Ask us on WhatsApp for what you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(category.topic),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "Ask on WhatsApp"]
						})
					]
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: result.products.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "surface-card lift-on-hover group flex h-full flex-col overflow-hidden rounded-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden bg-secondary",
								children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.imageUrl,
									alt: product.name,
									loading: "lazy",
									className: "aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[5/4] w-full bg-secondary",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur", product.inStock ? "bg-whatsapp/90 text-whatsapp-foreground" : "bg-foreground/80 text-background"),
									children: [product.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.PackageCheck, {
										className: "h-3.5 w-3.5",
										"aria-hidden": true
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.PackageX, {
										className: "h-3.5 w-3.5",
										"aria-hidden": true
									}), product.inStock ? "In stock" : "Out of stock"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: product.name
									}),
									product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
										children: product.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: waLink(`"${product.name}" (${category.title})`),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {
											className: "h-4 w-4",
											"aria-hidden": true
										}), "Ask about this product"]
									})
								]
							})]
						})
					}) }, product.id || product.name))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
export { CategoryProducts as component };
