import { a as normalizeImageUrl } from "./products.shared-DKyMzatF.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
// dist/server/assets/products.server-CpE1xna9.js
function shapeProduct(row) {
	return {
		id: row.id,
		name: row.name,
		description: row.description ?? "",
		imageUrl: normalizeImageUrl(row.image_url ?? ""),
		imageRef: row.image_url ?? "",
		category: row.category,
		inStock: row.in_stock
	};
}
/** Publishable-key client for public, read-only catalog reads during SSR. */
function publicClient() {
	const url = process.env["SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
function assertAdmin(password) {
	const expected = process.env["ADMIN_PASSWORD"];
	if (!expected) throw new Error("Admin password is not configured yet.");
	if (password !== expected) throw new Error("Incorrect admin password.");
}
var STORAGE_PREFIX = "storage:";
var PRODUCT_BUCKET = "product-images";
var SIGNED_URL_TTL = 604800;
/** Turn `storage:<path>` references into temporary signed URLs; leave plain URLs untouched. */
async function withSignedImages(products) {
	const paths = Array.from(new Set(products.map((p) => p.imageUrl).filter((url) => url.startsWith(STORAGE_PREFIX)).map((url) => url.slice(8))));
	if (paths.length === 0) return products;
	const { supabaseAdmin } = await import("./client.server-C-T-U9xy.mjs");
	const { data, error } = await supabaseAdmin.storage.from(PRODUCT_BUCKET).createSignedUrls(paths, SIGNED_URL_TTL);
	if (error) {
		console.error("[products:sign]", error);
		return products.map((p) => p.imageUrl.startsWith("storage:") ? {
			...p,
			imageUrl: ""
		} : p);
	}
	const map = /* @__PURE__ */ new Map();
	for (const item of data ?? []) if (item.path && item.signedUrl) map.set(item.path, item.signedUrl);
	return products.map((p) => p.imageUrl.startsWith("storage:") ? {
		...p,
		imageUrl: map.get(p.imageUrl.slice(8)) ?? ""
	} : p);
}
async function uploadImage(fileName, contentType, bytes) {
	const { supabaseAdmin } = await import("./client.server-C-T-U9xy.mjs");
	const ext = (fileName.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
	const path = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
	const { error } = await supabaseAdmin.storage.from(PRODUCT_BUCKET).upload(path, bytes, {
		contentType,
		upsert: false
	});
	if (error) {
		console.error("[products:upload]", error);
		throw new Error("Could not upload the image. Please try again.");
	}
	const { data, error: signError } = await supabaseAdmin.storage.from(PRODUCT_BUCKET).createSignedUrl(path, SIGNED_URL_TTL);
	if (signError || !data?.signedUrl) {
		console.error("[products:upload-sign]", signError);
		throw new Error("Could not upload the image. Please try again.");
	}
	return {
		storageRef: `${STORAGE_PREFIX}${path}`,
		previewUrl: data.signedUrl
	};
}
export { assertAdmin, publicClient, shapeProduct, uploadImage, withSignedImages };
