import catSanitary from "@/assets/cat-sanitary.jpg";
import catFittings from "@/assets/cat-fittings.jpg";
import catWallPanels from "@/assets/cat-wall-panels.jpg";
import catCeiling from "@/assets/cat-ceiling-panels.jpg";
import galleryShower from "@/assets/gallery-shower.jpg";
import galleryVanity from "@/assets/gallery-vanity.jpg";

export type CategorySlug =
  | "sanitary-ware"
  | "bathroom-fittings"
  | "wall-panels"
  | "ceiling-panels"
  | "shower-fittings"
  | "plumbing-accessories";

export type Category = {
  slug: CategorySlug;
  title: string;
  copy: string;
  topic: string;
  image: string;
  alt: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "sanitary-ware",
    title: "Sanitary Ware",
    copy: "Water closets, wash basins and pedestal options in a range of shapes and finishes.",
    topic: "sanitary ware",
    image: catSanitary,
    alt: "White wall-hung toilet and washbasin set",
  },
  {
    slug: "bathroom-fittings",
    title: "Bathroom Fittings",
    copy: "Taps, mixers, showers, health faucets and related bathroom hardware.",
    topic: "bathroom fittings",
    image: catFittings,
    alt: "Chrome basin mixer tap on a white ceramic washbasin",
  },
  {
    slug: "wall-panels",
    title: "Wall Panels",
    copy: "Decorative wall panelling in wood-look, stone-look and plain modern finishes.",
    topic: "wall panels",
    image: catWallPanels,
    alt: "Wood-finish decorative wall panels behind a television console",
  },
  {
    slug: "ceiling-panels",
    title: "Ceiling Panels",
    copy: "Panel options for ceilings that give rooms a clean, finished look.",
    topic: "ceiling panels",
    image: catCeiling,
    alt: "Modern panelled ceiling with cove lighting and recessed spotlights",
  },
  {
    slug: "shower-fittings",
    title: "Showers & Enclosure Fittings",
    copy: "Overhead showers, hand showers and allied shower area accessories.",
    topic: "shower fittings",
    image: galleryShower,
    alt: "Chrome rain shower head with running water in a dark tiled shower",
  },
  {
    slug: "plumbing-accessories",
    title: "Plumbing & Accessories",
    copy: "Everyday plumbing items and bathroom accessories to complete the setup.",
    topic: "plumbing items and bathroom accessories",
    image: galleryVanity,
    alt: "Marble bathroom vanity with twin basins and brass fittings",
  },
];

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Display URL (public link, or a signed URL for uploaded images). */
  imageUrl: string;
  /** Stored value: either a plain URL or a `storage:<path>` reference. */
  imageRef?: string;
  category: string;
  inStock: boolean;
};
