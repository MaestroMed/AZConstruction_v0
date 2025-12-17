import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit Métallerie & Thermolaquage - AZ Construction",
  description:
    "Contactez AZ Construction pour un devis gratuit. Métallerie sur mesure, thermolaquage professionnel. Réponse sous 24h. ☎️ 01 23 45 67 89 - Bruyères-sur-Oise (95)",
  keywords: [
    "contact AZ Construction",
    "devis métallerie",
    "devis thermolaquage",
    "devis gratuit",
    "métallerie ile de france",
    "contact thermolaquage",
  ],
  alternates: {
    canonical: "https://azconstruction.fr/contact",
  },
  openGraph: {
    title: "Contactez-nous | AZ Construction",
    description:
      "Devis gratuit sous 24h. Métallerie sur mesure et thermolaquage professionnel.",
    url: "https://azconstruction.fr/contact",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

// Schema.org LocalBusiness pour la page contact
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://azconstruction.fr/#organization",
  name: "AZ Construction",
  description:
    "Expert en métallerie sur mesure et thermolaquage professionnel en Île-de-France",
  url: "https://azconstruction.fr",
  telephone: "+33123456789",
  email: "contact@azconstruction.fr",
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
  image: "/images/atelier-az-construction.jpg",
  sameAs: [
    "https://www.facebook.com/azconstruction",
    "https://www.instagram.com/azconstruction",
    "https://www.linkedin.com/company/azconstruction",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
