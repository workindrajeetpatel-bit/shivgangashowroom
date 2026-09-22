import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { PanelsShowcase } from "@/components/site/PanelsShowcase";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Inquiry } from "@/components/site/Inquiry";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppLinkHandler } from "@/components/site/WhatsAppLinkHandler";
import { BUSINESS } from "@/lib/business";

const TITLE = "Shivganga Sanitary Ware & Panels — Varanasi Sanitary Ware & Panels";
const DESCRIPTION =
  "We deal in retail & wholesale of showroom-grade and modern home interior sanitary ware, wall fittings, and wall & ceiling panels in Varanasi — chosen with us in person or confirmed over WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": BUSINESS.name,
            "alternateName": ["Shivganga", "Shivganga Sanitary"],
            "url": "https://shivgangasanitaryware.shop/",
          },
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": BUSINESS.name,
            "url": "https://shivgangasanitaryware.shop/",
            "logo": "https://shivgangasanitaryware.shop/logo.png",
            "image": "https://shivgangasanitaryware.shop/logo.png",
            "description": DESCRIPTION,
            "email": BUSINESS.email,
            "telephone": BUSINESS.phones.map((p) => p.dial),
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Varanasi",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN",
            },
          },
        ]),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppLinkHandler />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <PanelsShowcase />
        <WhyUs />
        <Gallery />
        <Inquiry />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
