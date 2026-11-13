import { i as __toESM } from "../_runtime.mjs";
import { a as adminListProducts, c as uploadProductImage, o as deleteProduct, s as saveProduct } from "./router-B0fH_cAW.mjs";
import { a as normalizeImageUrl, n as CATEGORIES, t as ALLOWED_IMAGE_TYPES } from "./products.shared-DKyMzatF.mjs";
import { t as cn } from "./utils-DWGjSd5x.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
// dist/server/assets/admin-7bF-8PNV.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var EMPTY = {
	name: "",
	description: "",
	imageUrl: "",
	category: CATEGORIES[0].slug,
	inStock: true
};
var inputClass = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
function readAsBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that file."));
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
	const fileRef = (0, import_react.useRef)(null);
	const [password, setPassword] = (0, import_react.useState)("");
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [products, setProducts] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [preview, setPreview] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [uploadError, setUploadError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)(null);
	const resetForm = () => {
		setForm(EMPTY);
		setPreview("");
		setUploadError(null);
		if (fileRef.current) fileRef.current.value = "";
	};
	const onPickFile = async (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		setUploadError(null);
		if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
			setUploadError("Please choose a JPG, PNG, WEBP or GIF image.");
			return;
		}
		if (file.size > 5242880) {
			setUploadError("Image is too large. Please use a file under 5 MB.");
			return;
		}
		setUploading(true);
		try {
			const dataBase64 = await readAsBase64(file);
			const result = await upload({ data: {
				password,
				fileName: file.name,
				contentType: file.type,
				dataBase64
			} });
			setForm((current) => ({
				...current,
				imageUrl: result.storageRef
			}));
			setPreview(result.previewUrl);
		} catch (error) {
			setUploadError(error instanceof Error ? error.message : "Upload failed. Please try again.");
		} finally {
			setUploading(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	};
	const refresh = async (pw) => {
		const result = await load({ data: { password: pw } });
		setProducts(result.products);
		if (!result.configured) setMessage("Your products API URL isn't configured yet — add it and reload.");
	};
	const signIn = async (event) => {
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
	const submit = async (event) => {
		event.preventDefault();
		setBusy(true);
		setMessage(null);
		try {
			await save({ data: {
				password,
				product: form
			} });
			resetForm();
			await refresh(password);
			setMessage("Saved.");
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Could not save the product.");
		} finally {
			setBusy(false);
		}
	};
	const del = async (id) => {
		setBusy(true);
		try {
			await remove({ data: {
				password,
				id
			} });
			await refresh(password);
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Could not delete the product.");
		} finally {
			setBusy(false);
		}
	};
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-background px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: signIn,
			className: "surface-card w-full max-w-sm rounded-3xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Product admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Enter your admin password to manage stock."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					value: password,
					onChange: (e) => setPassword(e.target.value),
					placeholder: "Admin password",
					"aria-label": "Admin password",
					className: cn(inputClass, "mt-6")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: busy || !password,
					className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] disabled:opacity-50",
					children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, {
						className: "h-4 w-4 animate-spin",
						"aria-hidden": true
					}), "Sign in"]
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-destructive",
					children: message
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-background px-5 py-12 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold",
						children: "Products & stock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setAuthed(false);
							setPassword("");
							setProducts([]);
						},
						className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.LogOut, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), "Sign out"]
					})]
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "surface-card mt-8 grid gap-4 rounded-3xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: form.id ? "Edit product" : "Add a new product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								placeholder: "Product name",
								"aria-label": "Product name",
								className: inputClass
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								"aria-label": "Category",
								className: inputClass,
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.slug,
									children: c.title
								}, c.slug))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.description,
							onChange: (e) => setForm({
								...form,
								description: e.target.value
							}),
							placeholder: "Short description",
							"aria-label": "Short description",
							rows: 3,
							className: inputClass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 rounded-2xl border border-border/70 bg-secondary/40 p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-card",
										children: preview || form.imageUrl && !form.imageUrl.startsWith("storage:") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: preview || form.imageUrl,
											alt: "Selected product preview",
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 text-center text-[0.65rem] text-muted-foreground",
											children: "No image"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 flex-wrap items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: fileRef,
												type: "file",
												accept: ALLOWED_IMAGE_TYPES.join(","),
												onChange: (e) => void onPickFile(e),
												className: "hidden",
												"aria-label": "Upload product image from your computer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												disabled: uploading,
												onClick: () => fileRef.current?.click(),
												className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground [background-image:var(--gradient-ink)] disabled:opacity-50",
												children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, {
													className: "h-4 w-4 animate-spin",
													"aria-hidden": true
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Upload, {
													className: "h-4 w-4",
													"aria-hidden": true
												}), uploading ? "Uploading…" : "Upload image"]
											}),
											(preview || form.imageUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													setForm({
														...form,
														imageUrl: ""
													});
													setPreview("");
													setUploadError(null);
												},
												className: "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {
													className: "h-4 w-4",
													"aria-hidden": true
												}), "Remove"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "w-full text-xs text-muted-foreground",
												children: "JPG, PNG, WEBP or GIF · up to 5 MB"
											})
										]
									})]
								}),
								uploadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-destructive",
									children: uploadError
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.imageUrl.startsWith("storage:") ? "" : form.imageUrl,
									onChange: (e) => {
										setForm({
											...form,
											imageUrl: normalizeImageUrl(e.target.value)
										});
										setPreview("");
									},
									onBlur: (e) => setForm({
										...form,
										imageUrl: normalizeImageUrl(e.target.value)
									}),
									placeholder: "…or paste a photo or Google Drive link",
									"aria-label": "Photo URL",
									className: inputClass
								}),
								form.imageUrl.startsWith("storage:") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Using the uploaded image. Remove it to use a link instead."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "inline-flex items-center gap-3 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.inStock,
								onChange: (e) => setForm({
									...form,
									inStock: e.target.checked
								}),
								className: "h-4 w-4"
							}), "In stock"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: busy,
								className: "inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground disabled:opacity-50",
								children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, {
									className: "h-4 w-4 animate-spin",
									"aria-hidden": true
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Plus, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), form.id ? "Update product" : "Add product"]
							}), form.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: resetForm,
								className: "rounded-xl border border-border px-5 py-3 text-sm font-semibold",
								children: "Cancel"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-10 grid gap-4",
					children: [products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "surface-card flex flex-wrap items-center gap-4 rounded-2xl p-4",
						children: [
							product.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.imageUrl,
								alt: product.name,
								className: "h-16 w-16 rounded-xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-40 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										product.category,
										" · ",
										product.inStock ? "In stock" : "Out of stock"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setForm({
										id: product.id,
										name: product.name,
										description: product.description,
										imageUrl: product.imageRef ?? product.imageUrl,
										category: product.category,
										inStock: product.inStock
									});
									setPreview(product.imageUrl);
									setUploadError(null);
								},
								className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Pencil, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), "Edit"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void del(product.id),
								className: "inline-flex items-center gap-2 rounded-full border border-destructive/40 px-4 py-2 text-sm font-semibold text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Trash2, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), "Delete"]
							})
						]
					}, product.id)), products.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted-foreground",
						children: "No products added yet."
					})]
				})
			]
		})
	});
}
export { AdminPage as component };
