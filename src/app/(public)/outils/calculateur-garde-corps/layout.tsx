import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Prix Garde-corps 2025 | Estimation Gratuite | AZ Construction",
  description:
    "Calculez le prix de votre garde-corps sur mesure en quelques clics. Barreaudé, câbles, verre. Fourniture + pose en Île-de-France. Estimation instantanée, devis gratuit sous 48h.",
  alternates: { canonical: "https://www.azconstruction.fr/outils/calculateur-garde-corps" },
  openGraph: {
    title: "Calculateur de prix garde-corps sur mesure | AZ Construction",
    description: "Estimez le coût de votre garde-corps en quelques secondes. Outil gratuit, résultat instantané.",
    url: "https://www.azconstruction.fr/outils/calculateur-garde-corps",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
