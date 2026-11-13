var CATEGORIES = [
	{
		slug: "sanitary-ware",
		title: "Sanitary Ware",
		copy: "Water closets, wash basins and pedestal options in a range of shapes and finishes.",
		topic: "sanitary ware",
		image: "/assets/cat-sanitary-NohLUya8.jpg",
		alt: "White wall-hung toilet and washbasin set"
	},
	{
		slug: "bathroom-fittings",
		title: "Bathroom Fittings",
		copy: "Taps, mixers, showers, health faucets and related bathroom hardware.",
		topic: "bathroom fittings",
		image: "/assets/cat-fittings-RDFBZKLL.jpg",
		alt: "Chrome basin mixer tap on a white ceramic washbasin"
	},
	{
		slug: "wall-panels",
		title: "Wall Panels",
		copy: "Decorative wall panelling in wood-look, stone-look and plain modern finishes.",
		topic: "wall panels",
		image: "/assets/cat-wall-panels-DsEPio91.jpg",
		alt: "Wood-finish decorative wall panels behind a television console"
	},
	{
		slug: "ceiling-panels",
		title: "Ceiling Panels",
		copy: "Panel options for ceilings that give rooms a clean, finished look.",
		topic: "ceiling panels",
		image: "/assets/cat-ceiling-panels-B9NP62rI.jpg",
		alt: "Modern panelled ceiling with cove lighting and recessed spotlights"
	},
	{
		slug: "shower-fittings",
		title: "Showers & Enclosure Fittings",
		copy: "Overhead showers, hand showers and allied shower area accessories.",
		topic: "shower fittings",
		image: "/assets/gallery-shower-rZZcX8Id.jpg",
		alt: "Chrome rain shower head with running water in a dark tiled shower"
	},
	{
		slug: "plumbing-accessories",
		title: "Plumbing & Accessories",
		copy: "Everyday plumbing items and bathroom accessories to complete the setup.",
		topic: "plumbing items and bathroom accessories",
		image: "/assets/gallery-vanity-BQ9UgL2y.jpg",
		alt: "Marble bathroom vanity with twin basins and brass fittings"
	}
];
function categoryBySlug(slug) {
	return CATEGORIES.find((c) => c.slug === slug);
}
var categorySlugs = new Set(CATEGORIES.map((category) => category.slug));
function sanitizeText(value, max) {
	if (typeof value !== "string") return "";
	return value.trim().slice(0, max);
}
/**
* Google Drive share links are HTML pages, not images. Convert them to a
* direct-image endpoint so <img src> works. Other URLs pass through.
*/
function normalizeImageUrl(value) {
	const url = value.trim();
	if (!url) return "";
	if (!/drive\.google\.com|docs\.google\.com/i.test(url)) return url;
	const id = url.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/)?.[1] ?? url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/)?.[1] ?? url.match(/\/d\/([a-zA-Z0-9_-]{10,})/)?.[1];
	if (!id) return url;
	return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
}
function validateListProductsInput(data) {
	const category = typeof data?.category === "string" ? data.category : void 0;
	if (category && !categorySlugs.has(category)) throw new Error("Invalid category");
	return { category };
}
function validateAdminListInput(data) {
	return { password: typeof data?.password === "string" ? data.password : "" };
}
function validateProductInput(data) {
	const product = data?.product;
	const name = sanitizeText(product?.name, 120);
	const category = sanitizeText(product?.category, 64);
	if (!name) throw new Error("Product name is required");
	if (!categorySlugs.has(category)) throw new Error("Invalid category");
	const id = typeof product?.id === "string" && product.id.trim() ? product.id.trim().slice(0, 64) : void 0;
	return {
		password: typeof data?.password === "string" ? data.password : "",
		product: {
			...id ? { id } : {},
			name,
			description: sanitizeText(product?.description, 1e3),
			imageUrl: normalizeImageUrl(sanitizeText(product?.imageUrl, 500)),
			category,
			inStock: Boolean(product?.inStock)
		}
	};
}
function validateDeleteProductInput(data) {
	const id = sanitizeText(data?.id, 64);
	if (!id) throw new Error("Product id is required");
	return {
		password: typeof data?.password === "string" ? data.password : "",
		id
	};
}
var ALLOWED_IMAGE_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif"
];
function validateUploadImageInput(data) {
	const contentType = sanitizeText(data?.contentType, 100).toLowerCase();
	if (!ALLOWED_IMAGE_TYPES.includes(contentType)) throw new Error("Please choose a JPG, PNG, WEBP or GIF image.");
	const dataBase64 = typeof data?.dataBase64 === "string" ? data.dataBase64 : "";
	if (!dataBase64) throw new Error("No image data received.");
	if (dataBase64.length * .75 > 5242880) throw new Error("Image is too large. Please use a file under 5 MB.");
	return {
		password: typeof data?.password === "string" ? data.password : "",
		fileName: sanitizeText(data?.fileName, 120) || "upload.jpg",
		contentType,
		dataBase64
	};
}
function logProductError(scope, error) {
	console.error(`[products:${scope}]`, error);
}
export { normalizeImageUrl as a, validateListProductsInput as c, logProductError as i, validateProductInput as l, CATEGORIES as n, validateAdminListInput as o, categoryBySlug as r, validateDeleteProductInput as s, ALLOWED_IMAGE_TYPES as t, validateUploadImageInput as u };
