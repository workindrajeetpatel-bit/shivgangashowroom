import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, PackageCheck, PackageX } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppLinkHandler } from "@/components/site/WhatsAppLinkHandler";
import { Section, Reveal, Eyebrow } from "@/components/site/primitives";
import { categoryBySlug } from "@/lib/catalog";
import { listProducts } from "@/lib/products.functions";
import { waLink } from "@/lib/business";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$category")({
  loader: async ({ params }) => {
    const category = categoryBySlug(params.category);
    if (!category) throw notFound();
    const result = await listProducts({ data: { category: category.slug } });
    return { category, result };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.category.title} in Varanasi — Shivganga Sanitary Ware & Panels`
      : "Products — Shivganga Sanitary Ware & Panels";
    const description = loaderData
      ? `${loaderData.category.copy} Check current availability at Shivganga Sanitary Ware & Panels, Varanasi, and ask on WhatsApp.`
      : "Browse products available at Shivganga Sanitary Ware & Panels, Varanasi.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryProducts,
});

function CategoryProducts() {
  const { category, result } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppLinkHandler />
      <Navbar />
      <main>
        <Section labelledBy="category-heading" className="pt-32">
          <Reveal>
            <Link
              to="/"
              hash="products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All categories
            </Link>
            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
              <div>
                <Eyebrow>Current availability</Eyebrow>
                <h1 id="category-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                  {category.title}
                </h1>
              </div>
              <p className="text-muted-foreground">{category.copy}</p>
            </div>
          </Reveal>

          {!result.configured || result.error ? (
            <Reveal>
              <div className="surface-card mt-12 rounded-3xl p-8 text-center">
                <h2 className="text-xl font-semibold">Stock list is being updated</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  Message us on WhatsApp and we&apos;ll tell you exactly what&apos;s available in{" "}
                  {category.title.toLowerCase()} right now.
                </p>
                <a
                  href={waLink(category.topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          ) : result.products.length === 0 ? (
            <Reveal>
              <div className="surface-card mt-12 rounded-3xl p-8 text-center">
                <h2 className="text-xl font-semibold">No items listed here yet</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  New stock is added regularly. Ask us on WhatsApp for what you need.
                </p>
                <a
                  href={waLink(category.topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-float)]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          ) : (
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {result.products.map((product, i) => (
                <li key={product.id || product.name}>
                  <Reveal delay={i * 60}>
                    <article className="surface-card lift-on-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative overflow-hidden bg-secondary">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            loading="lazy"
                            className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          />
                        ) : (
                          <div className="aspect-[5/4] w-full bg-secondary" aria-hidden />
                        )}
                        <span
                          className={cn(
                            "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur",
                            product.inStock
                              ? "bg-whatsapp/90 text-whatsapp-foreground"
                              : "bg-foreground/80 text-background",
                          )}
                        >
                          {product.inStock ? (
                            <PackageCheck className="h-3.5 w-3.5" aria-hidden />
                          ) : (
                            <PackageX className="h-3.5 w-3.5" aria-hidden />
                          )}
                          {product.inStock ? "In stock" : "Out of stock"}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        {product.description && (
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                          </p>
                        )}
                        <a
                          href={waLink(`"${product.name}" (${category.title})`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden />
                          Ask about this product
                        </a>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
