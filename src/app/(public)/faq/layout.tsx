import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions Fréquentes | FAQ Métallerie & Thermolaquage - AZ Construction",
  description:
    "Retrouvez les réponses à vos questions sur la métallerie, le thermolaquage, les délais, prix et garanties. Devis gratuit ☎️ 01 23 45 67 89",
  keywords: [
    "FAQ métallerie",
    "questions thermolaquage",
    "prix thermolaquage",
    "délai fabrication métallerie",
    "garantie thermolaquage",
    "couleurs RAL",
    "devis métallerie",
  ],
  alternates: {
    canonical: "https://zaconstruction.fr/faq",
  },
  openGraph: {
    title: "Questions Fréquentes | AZ Construction",
    description:
      "Toutes les réponses à vos questions sur nos services de métallerie et thermolaquage.",
    url: "https://zaconstruction.fr/faq",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

// Schema.org FAQPage pour le SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment obtenir un devis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez obtenir un devis gratuitement via notre configurateur en ligne, formulaire de contact, par téléphone au 01 23 45 67 89, ou en prenant rendez-vous. Réponse sous 48h ouvrées.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que le thermolaquage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le thermolaquage est un procédé de finition industrielle où une poudre époxy-polyester est appliquée électrostatiquement sur le métal, puis polymérisée au four à 180-200°C. Durabilité 5 fois supérieure à la peinture liquide.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte le thermolaquage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix du thermolaquage varie selon la taille des pièces, leur complexité et la couleur choisie. Comptez en moyenne 15 à 40€/m² pour des pièces standards.",
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
      name: "Quelles couleurs sont disponibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons plus de 200 teintes RAL en thermolaquage : mat, satiné, brillant, texturé ou métallisé. Les plus demandées sont RAL 7016, RAL 9005 et RAL 9010.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les délais de fabrication ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les délais varient : 2-3 semaines pour ouvrages simples, 4-6 semaines pour projets sur mesure, 6-10 semaines pour grandes structures. Délais précisés sur chaque devis.",
      },
    },
    {
      "@type": "Question",
      name: "Livrez-vous dans toute la France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous livrons dans toute la France métropolitaine. Tarifs préférentiels pour l'Île-de-France. Enlèvement et livraison disponibles.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la garantie sur vos produits ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garantie légale de conformité 2 ans. Le thermolaquage est garanti 10 ans contre l'écaillage et la décoloration. Garantie décennale pour les ouvrages posés.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}



