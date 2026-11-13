import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-DLsacW7I.mjs";
import { c as validateListProductsInput, i as logProductError, l as validateProductInput, o as validateAdminListInput, s as validateDeleteProductInput, u as validateUploadImageInput } from "./products.shared-DKyMzatF.mjs";
// dist/server/assets/products.functions-6nqdfYPl.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listProducts_createServerFn_handler = createServerRpc({
	id: "51ad93d03c52987e0e52d0164e41771f8765a8919d8a537367eaf795dff9b9d8",
	name: "listProducts",
	filename: "src/lib/products.functions.ts"
}, (opts) => listProducts.__executeServer(opts));
var listProducts = createServerFn({ method: "GET" }).validator(validateListProductsInput).handler(listProducts_createServerFn_handler, async ({ data }) => {
	try {
		const { publicClient, shapeProduct, withSignedImages } = await import("./products.server-CpE1xna9.mjs");
		let query = publicClient().from("products").select("id, name, description, image_url, category, in_stock").order("created_at", { ascending: false });
		if (data.category) query = query.eq("category", data.category);
		const { data: rows, error } = await query;
		if (error) {
			logProductError("list", error);
			console.error("[products:list] Supabase error code:", error.code, "| message:", error.message, "| hint:", error.hint);
			return {
				configured: true,
				products: [],
				error: "Could not load products right now. Please try again."
			};
		}
		return {
			configured: true,
			products: await withSignedImages((rows ?? []).map(shapeProduct))
		};
	} catch (error) {
		logProductError("list-init", error);
		return {
			configured: true,
			products: [],
			error: "Could not load products right now. Please try again."
		};
	}
});
var adminListProducts_createServerFn_handler = createServerRpc({
	id: "c546103eb5801689de8c113dedf53fd443c01cfcd0f9c3ddcf3c8fd1e6722d81",
	name: "adminListProducts",
	filename: "src/lib/products.functions.ts"
}, (opts) => adminListProducts.__executeServer(opts));
var adminListProducts = createServerFn({ method: "POST" }).validator(validateAdminListInput).handler(adminListProducts_createServerFn_handler, async ({ data }) => {
	const { assertAdmin, shapeProduct, withSignedImages } = await import("./products.server-CpE1xna9.mjs");
	assertAdmin(data.password);
	const { supabaseAdmin } = await import("./client.server-C-T-U9xy.mjs");
	const { data: rows, error } = await supabaseAdmin.from("products").select("id, name, description, image_url, category, in_stock").order("created_at", { ascending: false });
	if (error) {
		logProductError("adminList", error);
		throw new Error("Could not load products right now. Please try again.");
	}
	return {
		configured: true,
		products: await withSignedImages((rows ?? []).map(shapeProduct))
	};
});
var uploadProductImage_createServerFn_handler = createServerRpc({
	id: "e53edb590cdede1b6df614338eace66db41095ce85d985e32e21134939fb3118",
	name: "uploadProductImage",
	filename: "src/lib/products.functions.ts"
}, (opts) => uploadProductImage.__executeServer(opts));
var uploadProductImage = createServerFn({ method: "POST" }).validator(validateUploadImageInput).handler(uploadProductImage_createServerFn_handler, async ({ data }) => {
	const { assertAdmin, uploadImage } = await import("./products.server-CpE1xna9.mjs");
	assertAdmin(data.password);
	const binary = atob(data.dataBase64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
	return uploadImage(data.fileName, data.contentType, bytes);
});
var saveProduct_createServerFn_handler = createServerRpc({
	id: "fd48d8e7f7c90b4652cb120e1fbc2f4516fd20ebf0f8a46aff010e2f1a0eea27",
	name: "saveProduct",
	filename: "src/lib/products.functions.ts"
}, (opts) => saveProduct.__executeServer(opts));
var saveProduct = createServerFn({ method: "POST" }).validator(validateProductInput).handler(saveProduct_createServerFn_handler, async ({ data }) => {
	const { assertAdmin, shapeProduct } = await import("./products.server-CpE1xna9.mjs");
	assertAdmin(data.password);
	const { supabaseAdmin } = await import("./client.server-C-T-U9xy.mjs");
	const { id, name, description, imageUrl, category, inStock } = data.product;
	const values = {
		name,
		description,
		image_url: imageUrl,
		category,
		in_stock: inStock
	};
	const { data: row, error } = await (id ? supabaseAdmin.from("products").update(values).eq("id", id) : supabaseAdmin.from("products").insert(values)).select("id, name, description, image_url, category, in_stock").single();
	if (error) {
		logProductError("save", error);
		throw new Error("Could not save changes right now. Please try again.");
	}
	return shapeProduct(row);
});
var deleteProduct_createServerFn_handler = createServerRpc({
	id: "154b8633eea94111b40f7036631572cb49e5f458d27dce468c3338ae0c0dc0db",
	name: "deleteProduct",
	filename: "src/lib/products.functions.ts"
}, (opts) => deleteProduct.__executeServer(opts));
var deleteProduct = createServerFn({ method: "POST" }).validator(validateDeleteProductInput).handler(deleteProduct_createServerFn_handler, async ({ data }) => {
	const { assertAdmin } = await import("./products.server-CpE1xna9.mjs");
	assertAdmin(data.password);
	const { supabaseAdmin } = await import("./client.server-C-T-U9xy.mjs");
	const { error } = await supabaseAdmin.from("products").delete().eq("id", data.id);
	if (error) {
		logProductError("delete", error);
		throw new Error("Could not save changes right now. Please try again.");
	}
	return { ok: true };
});
export { adminListProducts_createServerFn_handler, deleteProduct_createServerFn_handler, listProducts_createServerFn_handler, saveProduct_createServerFn_handler, uploadProductImage_createServerFn_handler };
