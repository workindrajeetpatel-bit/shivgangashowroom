import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Plus, Trash2, Pencil, LogOut, Upload, X } from "lucide-react";
import {
  adminListProducts,
  saveProduct,
  deleteProduct,
  uploadProductImage,
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_BYTES,
  type ProductInput,
} from "@/lib/products.functions";
import type { Product } from "@/lib/catalog";
import { CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { normalizeImageUrl } from "@/lib/products.shared";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Product Admin — Shivganga Sanitary Ware & Panels" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Private product and stock management panel." },
    ],
  }),
  component: AdminPage,
});

const EMPTY: ProductInput = {
  name: "",
  description: "",
  imageUrl: "",
  category: CATEGORIES[0]!.slug,
  inStock: true,
};

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.readAsDataURL(file);
  });
}

function AdminPage() {
  const load = useServerFn(adminListProducts);
  const save = useServerFn(saveProduct);
  const remove = useServerFn(deleteProduct);
  const upload = useServerFn(uploadProductImage);

  const fileRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<ProductInput>(EMPTY);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const resetForm = () => {
    setForm(EMPTY);
    setPreview("");
    setUploadError(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onPickFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setUploadError("Please choose a JPG, PNG, WEBP or GIF image.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setUploadError("Image is too large. Please use a file under 5 MB.");
      return;
    }
    setUploading(true);
    try {
      const dataBase64 = await readAsBase64(file);
      const result = await upload({
        data: { password, fileName: file.name, contentType: file.type, dataBase64 },
      });
      setForm((current) => ({ ...current, imageUrl: result.storageRef }));
      setPreview(result.previewUrl);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };


  const refresh = async (pw: string) => {
    const result = await load({ data: { password: pw } });
    setProducts(result.products);
    if (!result.configured) {
      setMessage("Your products API URL isn't configured yet — add it and reload.");
    }
  };

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      await refresh(password);
      setAuthed(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Sign in failed.");
    } finally {
      setBusy(false);
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      await save({ data: { password, product: form } });
      resetForm();
      await refresh(password);
      setMessage("Saved.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not save the product.");
    } finally {
      setBusy(false);
    }
  };

  const del = async (id: string) => {
    setBusy(true);
    try {
      await remove({ data: { password, id } });
      await refresh(password);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not delete the product.");
    } finally {
      setBusy(false);
    }
  };

  if (!authed) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5">
        <form onSubmit={signIn} className="surface-card w-full max-w-sm rounded-3xl p-8">
          <h1 className="text-2xl font-semibold">Product admin</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your admin password to manage stock.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            aria-label="Admin password"
            className={cn(inputClass, "mt-6")}
          />
          <button
            type="submit"
            disabled={busy || !password}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] disabled:opacity-50"
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            Sign in
          </button>
          {message && <p className="mt-4 text-sm text-destructive">{message}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-5 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold">Products &amp; stock</h1>
          <button
            type="button"
            onClick={() => {
              setAuthed(false);
              setPassword("");
              setProducts([]);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold"
          >
            <LogOut className="h-4 w-4" aria-hidden />
            Sign out
          </button>
        </div>

        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}

        <form onSubmit={submit} className="surface-card mt-8 grid gap-4 rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold">
            {form.id ? "Edit product" : "Add a new product"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Product name"
              aria-label="Product name"
              className={inputClass}
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              aria-label="Category"
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Short description"
            aria-label="Short description"
            rows={3}
            className={inputClass}
          />
          <div className="grid gap-4 rounded-2xl border border-border/70 bg-secondary/40 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-card">
                {preview || (form.imageUrl && !form.imageUrl.startsWith("storage:")) ? (
                  <img
                    src={preview || form.imageUrl}
                    alt="Selected product preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="px-2 text-center text-[0.65rem] text-muted-foreground">
                    No image
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-wrap items-center gap-3">
                <input
                  ref={fileRef}
                  type="file"
                  accept={ALLOWED_IMAGE_TYPES.join(",")}
                  onChange={(e) => void onPickFile(e)}
                  className="hidden"
                  aria-label="Upload product image from your computer"
                />
                <button
                  type="button"
                  disabled={uploading}
                  onClick={() => fileRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] disabled:opacity-50"
                >
                  {uploading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    <Upload className="h-4 w-4" aria-hidden />
                  )}
                  {uploading ? "Uploading…" : "Upload image"}
                </button>
                {(preview || form.imageUrl) && (
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ ...form, imageUrl: "" });
                      setPreview("");
                      setUploadError(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold"
                  >
                    <X className="h-4 w-4" aria-hidden />
                    Remove
                  </button>
                )}
                <p className="w-full text-xs text-muted-foreground">
                  JPG, PNG, WEBP or GIF · up to 5 MB
                </p>
              </div>
            </div>
            {uploadError && <p className="text-sm text-destructive">{uploadError}</p>}
            <input
              value={form.imageUrl.startsWith("storage:") ? "" : form.imageUrl}
              onChange={(e) => {
                setForm({ ...form, imageUrl: normalizeImageUrl(e.target.value) });
                setPreview("");
              }}
              onBlur={(e) => setForm({ ...form, imageUrl: normalizeImageUrl(e.target.value) })}
              placeholder="…or paste a photo or Google Drive link"
              aria-label="Photo URL"
              className={inputClass}
            />
            {form.imageUrl.startsWith("storage:") && (
              <p className="text-xs text-muted-foreground">
                Using the uploaded image. Remove it to use a link instead.
              </p>
            )}
          </div>

          <label className="inline-flex items-center gap-3 text-sm font-semibold">
            <input
              type="checkbox"
              checked={form.inStock}
              onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
              className="h-4 w-4"
            />
            In stock
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground disabled:opacity-50"
            >
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Plus className="h-4 w-4" aria-hidden />
              )}
              {form.id ? "Update product" : "Add product"}
            </button>
            {form.id && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-border px-5 py-3 text-sm font-semibold"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <ul className="mt-10 grid gap-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="surface-card flex flex-wrap items-center gap-4 rounded-2xl p-4"
            >
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-16 w-16 rounded-xl object-cover"
                />
              )}
              <div className="min-w-40 flex-1">
                <p className="font-semibold">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.category} · {product.inStock ? "In stock" : "Out of stock"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setForm({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    imageUrl: product.imageRef ?? product.imageUrl,
                    category: product.category,
                    inStock: product.inStock,
                  });
                  setPreview(product.imageUrl);
                  setUploadError(null);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                <Pencil className="h-4 w-4" aria-hidden />
                Edit
              </button>
              <button
                type="button"
                onClick={() => void del(product.id)}
                className="inline-flex items-center gap-2 rounded-full border border-destructive/40 px-4 py-2 text-sm font-semibold text-destructive"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                Delete
              </button>
            </li>
          ))}
          {products.length === 0 && (
            <li className="text-sm text-muted-foreground">No products added yet.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
