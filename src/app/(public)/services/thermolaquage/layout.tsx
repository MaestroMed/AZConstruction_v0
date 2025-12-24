import { Metadata } from "next";
import ClickToCallBanner from "@/components/ui/ClickToCallBanner";

export const metadata: Metadata = {
  title: "Thermolaquage Poudre Epoxy | 200+ Couleurs RAL | Garantie 10 ans - AZ Construction",
  description:
    "Thermolaquage professionnel en Île-de-France. Peinture poudre epoxy haute résistance, 200+ teintes RAL, finition haut de gamme. Devis gratuit sous 24h. ☎️ 01 23 45 67 89",
  keywords: [
    "thermolaquage",
    "peinture poudre",
    "peinture epoxy",
    "laquage poudre",
    "thermolaquage ile de france",
    "thermolaquage val d'oise",
    "peinture métal",
    "finition RAL",
    "couleurs RAL",
    "thermolaquage portail",
    "thermolaquage garde-corps",
    "peinture industrielle",
    "traitement anticorrosion",
  ],
  alternates: {
    canonical: "https://zaconstruction.fr/services/thermolaquage",
  },
  openGraph: {
    title: "Thermolaquage Professionnel | AZ Construction",
    description:
      "Service de thermolaquage poudre epoxy. 200+ couleurs RAL, garantie 10 ans, devis gratuit sous 24h.",
    url: "https://zaconstruction.fr/services/thermolaquage",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/thermolaquage-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier de thermolaquage AZ Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermolaquage Poudre Epoxy | AZ Construction",
    description:
      "200+ couleurs RAL, garantie 10 ans. Devis gratuit sous 24h.",
    images: ["/images/thermolaquage-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org JSON-LD pour le SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness
    {
      "@type": "LocalBusiness",
      "@id": "https://zaconstruction.fr/#organization",
      name: "AZ Construction",
      description:
        "Expert en métallerie sur mesure et thermolaquage professionnel en Île-de-France",
      url: "https://zaconstruction.fr",
      telephone: "+33123456789",
      email: "contact@zaconstruction.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "23 Chemin du Bac des Aubins",
        addressLocality: "Bruyères-sur-Oise",
        postalCode: "95820",
        addressCountry: "FR",
        addressRegion: "Île-de-France",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.1567,
        longitude: 2.3267,
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
      priceRange: "€€",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 49.1567,
          longitude: 2.3267,
        },
        geoRadius: "100000",
      },
    },
    // Service Thermolaquage
    {
      "@type": "Service",
      "@id": "https://zaconstruction.fr/services/thermolaquage/#service",
      name: "Thermolaquage Poudre Epoxy",
      description:
        "Service professionnel de thermolaquage poudre epoxy. Protection maximale anticorrosion, 200+ couleurs RAL disponibles, garantie 10 ans.",
      provider: {
        "@id": "https://zaconstruction.fr/#organization",
      },
      serviceType: "Thermolaquage",
      areaServed: [
        {
          "@type": "State",
          name: "Île-de-France",
        },
        {
          "@type": "AdministrativeArea",
          name: "Val-d'Oise",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Thermolaquage",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Thermolaquage portails et clôtures",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Thermolaquage garde-corps et rampes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Thermolaquage escaliers métalliques",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Thermolaquage pièces industrielles",
            },
          },
        ],
      },
    },
    // FAQPage
    {
      "@type": "FAQPage",
      "@id": "https://zaconstruction.fr/services/thermolaquage/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que le thermolaquage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le thermolaquage est un procédé de peinture industrielle par poudre époxy-polyester. La poudre est appliquée électrostatiquement puis polymérisée au four à 180-200°C, créant un film protecteur ultra-résistant contre la corrosion, les UV et les intempéries.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la durée de vie du thermolaquage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le thermolaquage offre une protection exceptionnelle de 25 ans et plus. Nous garantissons nos traitements 10 ans contre l'écaillage et la décoloration.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de couleurs RAL sont disponibles ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous proposons plus de 200 teintes RAL : mat, satiné, brillant, texturé ou métallisé. Les couleurs les plus populaires sont le RAL 7016 (Gris Anthracite), RAL 9005 (Noir), RAL 9010 (Blanc Pur).",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le délai de traitement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le délai standard est de 5 à 7 jours ouvrés. Nous proposons un service express en 48-72h pour les urgences. Devis gratuit sous 24h.",
          },
        },
        {
          "@type": "Question",
          name: "Le thermolaquage est-il écologique ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, le thermolaquage est un procédé 100% écologique : zéro COV (composés organiques volatils), pas de solvants, pas d'émissions nocives. La poudre non utilisée est récupérée et recyclée.",
          },
        },
      ],
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://zaconstruction.fr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://zaconstruction.fr/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Thermolaquage",
          item: "https://zaconstruction.fr/services/thermolaquage",
        },
      ],
    },
  ],
};

export default function ThermolaquageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      <ClickToCallBanner 
        phoneNumber="+33123456789"
        displayNumber="01 23 45 67 89"
        message="Thermolaquage - Devis gratuit sous 24h"
      />
    </>
  );
}







