import type { Metadata } from "next";
import { getProductFamilyBySlug } from "@/lib/data/product-families";

interface Props {
  params: Promise<{ family: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { family } = await params;
  const product = getProductFamilyBySlug(family);

  if (!product) {
    return {
      title: "Produit non trouvé",
      description: "Cette famille de produits n'existe pas.",
    };
  }

  const title = product.seoTitle || `${product.name} Sur Mesure`;
  const description =
    product.seoDescription ||
    product.description ||
    `Découvrez nos ${product.name.toLowerCase()} sur mesure, fabriqués en Île-de-France. Devis gratuit sous 48h.`;

  const canonicalUrl = `https://www.azconstruction.fr/produits/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "AZ Construction",
      locale: "fr_FR",
      type: "website",
      images: product.heroImages?.[0]
        ? [{ url: product.heroImages[0], width: 1200, height: 630, alt: `${product.name} sur mesure — AZ Construction` }]
        : [],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

function ProductSchema({ family }: { family: string }) {
  const product = getProductFamilyBySlug(family);
  if (!product) return null;

  const canonicalUrl = `https://www.azconstruction.fr/produits/${product.slug}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.seoDescription || product.description,
    "url": canonicalUrl,
    "image": product.heroImages?.[0] || "",
    "brand": {
      "@type": "Brand",
      "name": "AZ Construction"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "AZ Construction",
      "url": "https://www.azconstruction.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "23 Chemin du Bac des Aubins",
        "addressLocality": "Bruyères-sur-Oise",
        "postalCode": "95820",
        "addressCountry": "FR"
      }
    },
    // Offer avec priceSpecification (conforme Google Rich Results — price/priceSpecification requis).
    // Précédemment sans priceSpecification → risque rejet GSC "parent_node". Fix avril 2026.
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR",
        "valueAddedTaxIncluded": true
      },
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "businessFunction": "https://purl.org/goodrelations/v1#Sell",
      "seller": {
        "@type": "Organization",
        "name": "AZ Construction"
      }
    },
    "additionalProperty": product.specifications?.map((spec) => ({
      "@type": "PropertyValue",
      "name": spec.label,
      "value": spec.value,
    })) || [],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.azconstruction.fr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Produits",
        "item": "https://www.azconstruction.fr/produits"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default async function ProductFamilyLayout({ params, children }: Props) {
  const { family } = await params;
  return (
    <>
      <ProductSchema family={family} />
      {children}
    </>
  );
}
