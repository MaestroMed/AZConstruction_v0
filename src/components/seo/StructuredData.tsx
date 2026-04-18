/**
 * Composants de balisage Schema.org pour le SEO
 * https://schema.org/LocalBusiness
 */

// Données de l'entreprise (à synchroniser avec les paramètres du site)
const companyData = {
  name: "AZ Construction",
  legalName: "AZ Construction SARL",
  description: "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails, clôtures et grilles de ventilation. Spécialiste thermolaquage. Profilés Jansen.",
  url: "https://www.azconstruction.fr",
  telephone: "+33 9 71 35 74 96",
  email: "contact@azconstruction.fr",
  address: {
    streetAddress: "23 Chemin du Bac des Aubins",
    addressLocality: "Bruyères-sur-Oise",
    postalCode: "95820",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    latitude: 49.0833,
    longitude: 2.3333,
  },
  openingHours: [
    "Mo-Fr 07:00-17:00",
  ],
  priceRange: "€€",
  image: "https://www.azconstruction.fr/og-image.jpg",
  logo: "https://www.azconstruction.fr/logo.png",
  sameAs: [
    "https://www.facebook.com/azconstruction",
    "https://www.instagram.com/azconstruction",
    "https://www.linkedin.com/company/azconstruction",
  ],
  areaServed: [
    "Île-de-France",
    "Val-d'Oise",
    "Paris",
    "Hauts-de-Seine",
    "Seine-Saint-Denis",
    "Yvelines",
    "Essonne",
    "Seine-et-Marne",
    "Val-de-Marne",
  ],
  services: [
    "Métallerie sur mesure",
    "Fabrication garde-corps",
    "Escaliers métalliques",
    "Portes et fenêtres acier",
    "Portails et clôtures",
    "Grilles de ventilation",
    "Thermolaquage",
    "Peinture poudre",
  ],
};

/**
 * Schema.org LocalBusiness pour l'entreprise
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyData.url}/#organization`,
    name: companyData.name,
    legalName: companyData.legalName,
    description: companyData.description,
    url: companyData.url,
    telephone: companyData.telephone,
    email: companyData.email,
    image: companyData.image,
    logo: companyData.logo,
    priceRange: companyData.priceRange,
    address: {
      "@type": "PostalAddress",
      ...companyData.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyData.geo.latitude,
      longitude: companyData.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    areaServed: companyData.areaServed.map((area) => ({
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: companyData.geo.latitude,
        longitude: companyData.geo.longitude,
      },
      geoRadius: "100000",
      name: area,
    })),
    sameAs: companyData.sameAs,
    // `makesOffer` avec priceSpecification sur chaque Offer (conforme Google Rich Results).
    // Précédemment `hasOfferCatalog` avec Offers sans price → rejet GSC "parent_node". Fix avril 2026.
    makesOffer: companyData.services.map((service) => ({
      "@type": "Offer",
      name: service,
      itemOffered: {
        "@type": "Service",
        name: service,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#Sell",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org WebSite pour le moteur de recherche
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${companyData.url}/#website`,
    url: companyData.url,
    name: companyData.name,
    description: companyData.description,
    publisher: {
      "@id": `${companyData.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${companyData.url}/recherche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "fr-FR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org BreadcrumbList
 */
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${companyData.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org Service pour les pages de service
 */
export function ServiceSchema({
  name,
  description,
  image,
  provider = companyData.name,
}: {
  name: string;
  description: string;
  image?: string;
  provider?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      "@id": `${companyData.url}/#organization`,
    },
    areaServed: companyData.areaServed,
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org Product pour les pages produit
 */
export function ProductSchema({
  name,
  description,
  image,
  sku,
  brand = companyData.name,
  offers,
}: {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  brand?: string;
  offers?: {
    price: number;
    priceCurrency?: string;
    availability?: "InStock" | "OutOfStock" | "PreOrder";
  };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(image && { image }),
    ...(sku && { sku }),
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency || "EUR",
        availability: `https://schema.org/${offers.availability || "InStock"}`,
        seller: {
          "@type": "Organization",
          name: companyData.name,
        },
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org FAQPage pour la page FAQ
 */
export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Composant combiné pour la homepage
 */
export function HomepageStructuredData() {
  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
    </>
  );
}

/**
 * Schema.org BlogPosting / Article pour les articles de blog
 * https://schema.org/BlogPosting
 */
export function ArticleSchema({
  title,
  description,
  image,
  author,
  datePublished,
  dateModified,
  url,
  category,
}: {
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  category?: string;
}) {
  const absoluteUrl = url.startsWith("http") ? url : `${companyData.url}${url}`;
  const absoluteImage = image.startsWith("http") ? image : `${companyData.url}${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: absoluteImage,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: companyData.name,
      logo: {
        "@type": "ImageObject",
        url: companyData.logo,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    url: absoluteUrl,
    ...(category && { articleSection: category }),
    inLanguage: "fr-FR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org Review + AggregateRating
 * S'attache à un LocalBusiness ou un Product.
 * https://schema.org/Review
 */
export function ReviewSchema({
  itemName,
  itemType = "LocalBusiness",
  reviews,
  aggregateRating,
}: {
  itemName: string;
  itemType?: "LocalBusiness" | "Product" | "Service";
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    datePublished?: string;
  }>;
  aggregateRating?: { value: number; count: number };
}) {
  if (!reviews || reviews.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": itemType,
    name: itemName,
    ...(itemType === "LocalBusiness" && {
      "@id": `${companyData.url}/#organization`,
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.value.toFixed(1),
        reviewCount: aggregateRating.count,
        bestRating: "5",
        worstRating: "1",
      },
    }),
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      ...(r.datePublished && { datePublished: r.datePublished }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema.org HowTo pour les guides étape-par-étape
 * https://schema.org/HowTo
 */
export function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  tool,
  supply,
  steps,
}: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: number };
  tool?: string[];
  supply?: string[];
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    ...(tool && tool.length > 0 && {
      tool: tool.map((t) => ({ "@type": "HowToTool", name: t })),
    }),
    ...(supply && supply.length > 0 && {
      supply: supply.map((s) => ({ "@type": "HowToSupply", name: s })),
    }),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
