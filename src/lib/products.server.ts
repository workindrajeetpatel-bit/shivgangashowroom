import { createClient } from "@supabase/supabase-js";
import type { Product } from "./catalog";
import { normalizeImageUrl } from "./products.shared";

type Row = {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  category: string;
  in_stock: boolean;
};

export function shapeProduct(row: Row): Product {
  return {
    id: row.id,
    name: row.name,
    description: row.description ?? "",
    imageUrl: normalizeImageUrl(row.image_url ?? ""),
    imageRef: row.image_url ?? "",
    category: row.category,
    inStock: row.in_stock,
  };
}

/** Publishable-key client for public, read-only catalog reads during SSR. */
export function publicClient() {
  const url = process.env["SUPABASE_URL"]!;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

export function assertAdmin(password: string) {
  const expected = process.env["ADMIN_PASSWORD"];
  if (!expected) throw new Error("Admin password is not configured yet.");
  if (password !== expected) throw new Error("Incorrect admin password.");
}

export const STORAGE_PREFIX = "storage:";
export const PRODUCT_BUCKET = "product-images";
const SIGNED_URL_TTL = 60 * 60 * 24 * 7;

/** Turn `storage:<path>` references into temporary signed URLs; leave plain URLs untouched. */
export async function withSignedImages(products: Product[]): Promise<Product[]> {
  const paths = Array.from(
    new Set(
      products
        .map((p) => p.imageUrl)
        .filter((url) => url.startsWith(STORAGE_PREFIX))
        .map((url) => url.slice(STORAGE_PREFIX.length)),
    ),
  );
  if (paths.length === 0) return products;

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.storage
    .from(PRODUCT_BUCKET)
    .createSignedUrls(paths, SIGNED_URL_TTL);
  if (error) {
    console.error("[products:sign]", error);
    return products.map((p) => (p.imageUrl.startsWith(STORAGE_PREFIX) ? { ...p, imageUrl: "" } : p));
  }
  const map = new Map<string, string>();
  for (const item of data ?? []) {
    if (item.path && item.signedUrl) map.set(item.path, item.signedUrl);
  }
  return products.map((p) =>
    p.imageUrl.startsWith(STORAGE_PREFIX)
      ? { ...p, imageUrl: map.get(p.imageUrl.slice(STORAGE_PREFIX.length)) ?? "" }
      : p,
  );
}

export async function uploadImage(
  fileName: string,
  contentType: string,
  bytes: Uint8Array,
): Promise<{ storageRef: string; previewUrl: string }> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const ext = (fileName.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
  const { error } = await supabaseAdmin.storage
    .from(PRODUCT_BUCKET)
    .upload(path, bytes, { contentType, upsert: false });
  if (error) {
    console.error("[products:upload]", error);
    throw new Error("Could not upload the image. Please try again.");
  }
  const { data, error: signError } = await supabaseAdmin.storage
    .from(PRODUCT_BUCKET)
    .createSignedUrl(path, SIGNED_URL_TTL);
  if (signError || !data?.signedUrl) {
    console.error("[products:upload-sign]", signError);
    throw new Error("Could not upload the image. Please try again.");
  }
  return { storageRef: `${STORAGE_PREFIX}${path}`, previewUrl: data.signedUrl };
}

