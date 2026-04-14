// ─── SEO Programmatic Types ─────────────────────────────────────────
// Foundation types for the 45,000+ page SEO engine

export interface Department {
  code: string;        // "75", "92", "60"
  name: string;        // "Paris", "Hauts-de-Seine"
  slug: string;        // "paris-75", "hauts-de-seine-92"
  fullName: string;    // "Paris (75)"
  region: string;      // "Île-de-France" | "Hauts-de-France"
  prefecture: string;  // "Paris", "Nanterre"
}

export interface Commune {
  name: string;        // "Boulogne-Billancourt"
  slug: string;        // "boulogne-billancourt"
  codePostal: string;  // "92100"
  departement: string; // "92"
  population?: number; // ~120 000 — for unique content generation
}

export interface SEOProduct {
  slug: string;         // "garde-corps"
  name: string;         // "Garde-corps"
  namePlural: string;   // "garde-corps"
  nameWithArticle: string; // "de garde-corps"
  preposition: string;  // "de" — used in "fabricant de garde-corps"
  metaTitle: (dept: Department, ville?: Commune) => string;
  metaDescription: (dept: Department, ville?: Commune) => string;
  heroTitle: (dept: Department, ville?: Commune) => string;
  heroSubtitle: (dept: Department, ville?: Commune) => string;
  introParagraph: (dept: Department, ville?: Commune) => string;
  ctaLabel: string;     // "Demander un devis"
  features: string[];
  benefits: string[];
  variants: { name: string; description: string; href: string }[];
  faq: { question: string; answer: string }[];
}

export interface SEOSegment {
  slug: string;         // "particuliers"
  name: string;         // "Particuliers"
  nameWithPrep: string; // "pour les particuliers"
  description: string;
  icon: string;
  keywords: string[];
  metaTitleSuffix: string;  // " | Particuliers"
  introParagraph: (product: SEOProduct, dept: Department, ville?: Commune) => string;
}
