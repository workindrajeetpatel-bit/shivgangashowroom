import { i as __toESM } from "../_runtime.mjs";
import { n as readWhatsAppClicks, r as resetWhatsAppClicks } from "./analytics-BYLoJx05.mjs";
import { r as BUSINESS } from "./router-B0fH_cAW.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
// dist/server/assets/whatsapp-stats-BVBcDqaP.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function StatsPage() {
	const [counts, setCounts] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const sync = () => setCounts(readWhatsAppClicks());
		sync();
		window.addEventListener("shivganga:wa-click", sync);
		window.addEventListener("focus", sync);
		return () => {
			window.removeEventListener("shivganga:wa-click", sync);
			window.removeEventListener("focus", sync);
		};
	}, []);
	const sources = counts ? Object.entries(counts.bySource).sort((a, b) => b[1] - a[1]) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-dvh w-full max-w-2xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl tracking-tight text-foreground sm:text-4xl",
				children: "WhatsApp inquiry clicks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					"Every WhatsApp CTA on the ",
					BUSINESS.shortName,
					" site is tracked. Counts below are stored on this device; the same events are also sent to Google Analytics or PostHog automatically if one is connected later."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "Total clicks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-5xl text-foreground",
						children: counts?.total ?? 0
					}),
					counts?.lastAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: ["Last click ", new Date(counts.lastAt).toLocaleString()]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground",
				children: "By button"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: sources.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-foreground",
					children: "No WhatsApp clicks recorded yet."
				}) : sources.map(([source, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: source
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-primary",
						children: count
					})]
				}, source))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					resetWhatsAppClicks();
					setCounts(readWhatsAppClicks());
				},
				className: "mt-8 rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: "Reset counts on this device"
			})
		]
	});
}
export { StatsPage as component };
