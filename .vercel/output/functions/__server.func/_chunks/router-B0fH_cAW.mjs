import { a as TSS_SERVER_FUNCTION, i as createServerFn, o as getServerFnById, s as __exportAll } from "./server-DLsacW7I.mjs";
import { c as validateListProductsInput, l as validateProductInput, o as validateAdminListInput, r as categoryBySlug, s as validateDeleteProductInput, u as validateUploadImageInput } from "./products.shared-DKyMzatF.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, k as notFound, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
// dist/server/assets/products.functions-DWwkYo0G.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listProducts = createServerFn({ method: "GET" }).validator(validateListProductsInput).handler(createSsrRpc("51ad93d03c52987e0e52d0164e41771f8765a8919d8a537367eaf795dff9b9d8"));
var adminListProducts = createServerFn({ method: "POST" }).validator(validateAdminListInput).handler(createSsrRpc("c546103eb5801689de8c113dedf53fd443c01cfcd0f9c3ddcf3c8fd1e6722d81"));
var uploadProductImage = createServerFn({ method: "POST" }).validator(validateUploadImageInput).handler(createSsrRpc("e53edb590cdede1b6df614338eace66db41095ce85d985e32e21134939fb3118"));
var saveProduct = createServerFn({ method: "POST" }).validator(validateProductInput).handler(createSsrRpc("fd48d8e7f7c90b4652cb120e1fbc2f4516fd20ebf0f8a46aff010e2f1a0eea27"));
var deleteProduct = createServerFn({ method: "POST" }).validator(validateDeleteProductInput).handler(createSsrRpc("154b8633eea94111b40f7036631572cb49e5f458d27dce468c3338ae0c0dc0db"));
// dist/server/assets/router-B0fH_cAW.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-z0yGE3iM.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shivganga Sanitary Ware & Panels" },
			{
				name: "author",
				content: "Shivganga Sanitary Ware & Panels"
			},
			{
				property: "og:site_name",
				content: "Shivganga Sanitary Ware & Panels"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Shivganga"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico?v=2",
				type: "image/x-icon"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico?v=2"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var BUSINESS = {
	name: "Shivganga Sanitary Ware & Panels",
	shortName: "Shivganga",
	email: "shivgangasanitaryware@gmail.com",
	location: "Varanasi, Uttar Pradesh",
	phones: [{
		display: "+91 95694 12653",
		dial: "+919569412653",
		wa: "919569412653"
	}, {
		display: "+91 99194 03832",
		dial: "+919919403832",
		wa: "919919403832"
	}]
};
var PRIMARY_WA = BUSINESS.phones[0].wa;
/** Build a wa.me link with a contextual, prefilled inquiry message. */
function waLink(topic, number = PRIMARY_WA) {
	const message = topic ? `Hello ${BUSINESS.name}, I'm interested in ${topic}. Please share available options and pricing.` : `Hello ${BUSINESS.name}, I'd like to know more about your sanitary ware and panels. Please guide me.`;
	return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
var $$splitComponentImporter$3 = () => import("./routes-Df-mlzgE.mjs");
var TITLE$1 = "Shivganga Sanitary Ware & Panels — Varanasi Sanitary Ware & Panels";
var DESCRIPTION$1 = "We deal in retail & wholesale of showroom-grade and modern home interior sanitary ware, wall fittings, and wall & ceiling panels in Varanasi — chosen with us in person or confirmed over WhatsApp.";
var Route$3 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: TITLE$1 },
			{
				name: "description",
				content: DESCRIPTION$1
			},
			{
				property: "og:title",
				content: TITLE$1
			},
			{
				property: "og:description",
				content: DESCRIPTION$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify([{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": BUSINESS.name,
				"alternateName": ["Shivganga", "Shivganga Sanitary"],
				"url": "https://shivgangasanitaryware.shop/"
			}, {
				"@context": "https://schema.org",
				"@type": "HomeAndConstructionBusiness",
				"name": BUSINESS.name,
				"url": "https://shivgangasanitaryware.shop/",
				"logo": "https://shivgangasanitaryware.shop/logo.png",
				"image": "https://shivgangasanitaryware.shop/logo.png",
				"description": DESCRIPTION$1,
				"email": BUSINESS.email,
				"telephone": BUSINESS.phones.map((p) => p.dial),
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Varanasi",
					"addressRegion": "Uttar Pradesh",
					"addressCountry": "IN"
				}
			}])
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./admin-7bF-8PNV.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Product Admin — Shivganga Sanitary Ware & Panels" },
		{
			name: "robots",
			content: "noindex"
		},
		{
			name: "description",
			content: "Private product and stock management panel."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./whatsapp-stats-BVBcDqaP.mjs");
var TITLE = "WhatsApp Inquiry Clicks — Shivganga Sanitary Ware & Panels";
var DESCRIPTION = "Internal dashboard showing how many visitors on this device started a WhatsApp inquiry with Shivganga Sanitary Ware & Panels.";
var Route$1 = createFileRoute("/whatsapp-stats")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] })
});
var $$splitComponentImporter = () => import("./products._category-3vR4cj3G.mjs");
var Route = createFileRoute("/products/$category")({
	loader: async ({ params }) => {
		const category = categoryBySlug(params.category);
		if (!category) throw notFound();
		return {
			category,
			result: await listProducts({ data: { category: category.slug } })
		};
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.category.title} in Varanasi — Shivganga Sanitary Ware & Panels` : "Products — Shivganga Sanitary Ware & Panels";
		const description = loaderData ? `${loaderData.category.copy} Check current availability at Shivganga Sanitary Ware & Panels, Varanasi, and ask on WhatsApp.` : "Browse products available at Shivganga Sanitary Ware & Panels, Varanasi.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AdminRoute: Route$2.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$4
	}),
	WhatsappStatsRoute: Route$1.update({
		id: "/whatsapp-stats",
		path: "/whatsapp-stats",
		getParentRoute: () => Route$4
	}),
	ProductsCategoryRoute: Route.update({
		id: "/products/$category",
		path: "/products/$category",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { adminListProducts as a, uploadProductImage as c, waLink as i, Route as n, deleteProduct as o, BUSINESS as r, saveProduct as s, router_exports as t };
