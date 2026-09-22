import { createServerFn } from "@tanstack/react-start";
import type { Product } from "./catalog";
import {
  GENERIC_PRODUCT_ERROR,
  GENERIC_PRODUCT_SAVE_ERROR,
  logProductError,
  validateAdminListInput,
  validateDeleteProductInput,
  validateListProductsInput,
  validateProductInput,
  validateUploadImageInput,
  type ProductsResult,
} from "./products.shared";

export type { ProductInput, ProductsResult } from "./products.shared";
export { ALLOWED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "./products.shared";

export const listProducts = createServerFn({ method: "GET" })
  .validator(validateListProductsInput)
  .handler(async ({ data }): Promise<ProductsResult> => {
    try {
      const { publicClient, shapeProduct, withSignedImages } = await import("./products.server");
      const client = publicClient();
      let query = client
        .from("products")
        .select("id, name, description, image_url, category, in_stock")
        .order("created_at", { ascending: false });
      if (data.category) query = query.eq("category", data.category);
      const { data: rows, error } = await query;
      if (error) {
        logProductError("list", error);
        return { configured: true, products: [], error: GENERIC_PRODUCT_ERROR };
      }
      const products = await withSignedImages((rows ?? []).map(shapeProduct));
      return { configured: true, products };
    } catch (error) {
      logProductError("list-init", error);
      return { configured: true, products: [], error: GENERIC_PRODUCT_ERROR };
    }
  });

export const adminListProducts = createServerFn({ method: "POST" })
  .validator(validateAdminListInput)
  .handler(async ({ data }): Promise<ProductsResult> => {
    const { assertAdmin, shapeProduct, withSignedImages } = await import("./products.server");
    assertAdmin(data.password);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("products")
      .select("id, name, description, image_url, category, in_stock")
      .order("created_at", { ascending: false });
    if (error) {
      logProductError("adminList", error);
      throw new Error(GENERIC_PRODUCT_ERROR);
    }
    const products = await withSignedImages((rows ?? []).map(shapeProduct));
    return { configured: true, products };
  });

export const uploadProductImage = createServerFn({ method: "POST" })
  .validator(validateUploadImageInput)
  .handler(async ({ data }): Promise<{ storageRef: string; previewUrl: string }> => {
    const { assertAdmin, uploadImage } = await import("./products.server");
    assertAdmin(data.password);
    const binary = atob(data.dataBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return uploadImage(data.fileName, data.contentType, bytes);
  });


export const saveProduct = createServerFn({ method: "POST" })
  .validator(validateProductInput)
  .handler(async ({ data }): Promise<Product> => {
    const { assertAdmin, shapeProduct } = await import("./products.server");
    assertAdmin(data.password);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { id, name, description, imageUrl, category, inStock } = data.product;
    const values = {
      name,
      description,
      image_url: imageUrl,
      category,
      in_stock: inStock,
    };
    const query = id
      ? supabaseAdmin.from("products").update(values).eq("id", id)
      : supabaseAdmin.from("products").insert(values);
    const { data: row, error } = await query
      .select("id, name, description, image_url, category, in_stock")
      .single();
    if (error) {
      logProductError("save", error);
      throw new Error(GENERIC_PRODUCT_SAVE_ERROR);
    }
    return shapeProduct(row);
  });

export const deleteProduct = createServerFn({ method: "POST" })
  .validator(validateDeleteProductInput)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const { assertAdmin } = await import("./products.server");
    assertAdmin(data.password);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("products").delete().eq("id", data.id);
    if (error) {
      logProductError("delete", error);
      throw new Error(GENERIC_PRODUCT_SAVE_ERROR);
    }
    return { ok: true };
  });
