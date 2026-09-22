import { CATEGORIES, type Product } from "./catalog";

export const GENERIC_PRODUCT_ERROR = "Could not load products right now. Please try again.";
export const GENERIC_PRODUCT_SAVE_ERROR = "Could not save changes right now. Please try again.";

const categorySlugs = new Set(CATEGORIES.map((category) => category.slug as string));

function sanitizeText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/**
 * Google Drive share links are HTML pages, not images. Convert them to a
 * direct-image endpoint so <img src> works. Other URLs pass through.
 */
export function normalizeImageUrl(value: string): string {
  const url = value.trim();
  if (!url) return "";
  if (!/drive\.google\.com|docs\.google\.com/i.test(url)) return url;
  const id =
    url.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/)?.[1] ??
    url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/)?.[1] ??
    url.match(/\/d\/([a-zA-Z0-9_-]{10,})/)?.[1];
  if (!id) return url;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
}

export type ProductInput = {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
};

export type ProductsResult = {
  configured: boolean;
  products: Product[];
  error?: string;
};

export function validateListProductsInput(data: { category?: string } | undefined) {
  const category = typeof data?.category === "string" ? data.category : undefined;
  if (category && !categorySlugs.has(category)) throw new Error("Invalid category");
  return { category };
}

export function validateAdminListInput(data: { password: string }) {
  return { password: typeof data?.password === "string" ? data.password : "" };
}

export function validateProductInput(data: { password: string; product: ProductInput }) {
  const product = data?.product;
  const name = sanitizeText(product?.name, 120);
  const category = sanitizeText(product?.category, 64);
  if (!name) throw new Error("Product name is required");
  if (!categorySlugs.has(category)) throw new Error("Invalid category");
  const id =
    typeof product?.id === "string" && product.id.trim()
      ? product.id.trim().slice(0, 64)
      : undefined;
  return {
    password: typeof data?.password === "string" ? data.password : "",
    product: {
      ...(id ? { id } : {}),
      name,
      description: sanitizeText(product?.description, 1000),
      imageUrl: normalizeImageUrl(sanitizeText(product?.imageUrl, 500)),
      category,
      inStock: Boolean(product?.inStock),
    } satisfies ProductInput,
  };
}

export function validateDeleteProductInput(data: { password: string; id: string }) {
  const id = sanitizeText(data?.id, 64);
  if (!id) throw new Error("Product id is required");
  return { password: typeof data?.password === "string" ? data.password : "", id };
}

export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

export type UploadImageInput = {
  password: string;
  fileName: string;
  contentType: string;
  dataBase64: string;
};

export function validateUploadImageInput(data: UploadImageInput) {
  const contentType = sanitizeText(data?.contentType, 100).toLowerCase();
  if (!ALLOWED_IMAGE_TYPES.includes(contentType)) {
    throw new Error("Please choose a JPG, PNG, WEBP or GIF image.");
  }
  const dataBase64 = typeof data?.dataBase64 === "string" ? data.dataBase64 : "";
  if (!dataBase64) throw new Error("No image data received.");
  // base64 expands bytes by ~4/3
  if (dataBase64.length * 0.75 > MAX_IMAGE_BYTES) {
    throw new Error("Image is too large. Please use a file under 5 MB.");
  }
  return {
    password: typeof data?.password === "string" ? data.password : "",
    fileName: sanitizeText(data?.fileName, 120) || "upload.jpg",
    contentType,
    dataBase64,
  };
}

export function logProductError(scope: string, error: unknown) {
  console.error(`[products:${scope}]`, error);
}
