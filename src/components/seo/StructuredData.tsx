/**
 * Composants de balisage Schema.org pour le SEO
 * https://schema.org/LocalBusiness
 */

// Données de l'entreprise (à synchroniser avec les paramètres du site)
const companyData = {
  name: "AZ Construction",
  legalName: "AZ Construction SARL",
  description: "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails, clôtures et grilles de ventilation. Spécialiste thermolaquage. Profilés Jansen.",
  url: "https://azconstruction.fr",
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
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-12:00",
  ],
  priceRange: "€€",
  image: "https://azconstruction.fr/og-image.jpg",
  logo: "https://azconstruction.fr/logo.png",
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
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de métallerie",
      itemListElement: companyData.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
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
