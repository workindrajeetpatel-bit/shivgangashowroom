// dist/server/assets/analytics-BYLoJx05.js
/**
* Lightweight, dependency-free click tracking for WhatsApp CTAs.
*
* - Forwards each click to Google Analytics / PostHog when either is present
*   on the page (so hooking up an analytics tool later needs no code change).
* - Always keeps a local tally in localStorage so counts are visible even
*   without an analytics provider.
*/
var STORAGE_KEY = "shivganga.wa-clicks.v1";
var EMPTY = {
	total: 0,
	bySource: {},
	firstAt: null,
	lastAt: null
};
function readWhatsAppClicks() {
	if (typeof window === "undefined") return EMPTY;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return EMPTY;
		const parsed = JSON.parse(raw);
		return {
			...EMPTY,
			...parsed,
			bySource: parsed.bySource ?? {}
		};
	} catch {
		return EMPTY;
	}
}
function resetWhatsAppClicks() {
	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch {}
}
/** Record a WhatsApp CTA click. `source` describes which button was used. */
function trackWhatsAppClick(source, extra) {
	if (typeof window === "undefined") return;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	try {
		const current = readWhatsAppClicks();
		const next = {
			total: current.total + 1,
			bySource: {
				...current.bySource,
				[source]: (current.bySource[source] ?? 0) + 1
			},
			firstAt: current.firstAt ?? now,
			lastAt: now
		};
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		window.dispatchEvent(new CustomEvent("shivganga:wa-click", { detail: next }));
	} catch {}
	const w = window;
	const payload = {
		event_category: "engagement",
		cta_source: source,
		...extra
	};
	try {
		w.gtag?.("event", "whatsapp_click", payload);
		w.posthog?.capture?.("whatsapp_click", payload);
		if (!w.gtag && Array.isArray(w.dataLayer)) w.dataLayer.push({
			event: "whatsapp_click",
			...payload
		});
	} catch {}
}
/** Derive a readable source label from the clicked anchor. */
function labelForAnchor(anchor) {
	return anchor.dataset["cta"] || anchor.getAttribute("aria-label") || anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || "unlabelled";
}
export { trackWhatsAppClick as i, readWhatsAppClicks as n, resetWhatsAppClicks as r, labelForAnchor as t };
