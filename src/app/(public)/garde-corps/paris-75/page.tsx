import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "75",
  name: "Paris",
  slug: "paris-75",
  fullName: "Paris (75)",
  region: "Île-de-France",
  description:
    "Paris concentre une forte demande en garde-corps pour terrasses haussmanniennes, verrières et balcons d'immeubles modernes. Nous intervenons dans tous les arrondissements parisiens.",
  cities: [
    "Paris 1er", "Paris 2e", "Paris 3e", "Paris 4e", "Paris 5e", "Paris 6e",
    "Paris 7e", "Paris 8e", "Paris 9e", "Paris 10e", "Paris 11e", "Paris 12e",
    "Paris 13e", "Paris 14e", "Paris 15e", "Paris 16e", "Paris 17e", "Paris 18e",
    "Paris 19e", "Paris 20e", "Boulogne-Billancourt", "Vincennes", "Saint-Mandé",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Paris (75) | Fabricant Île-de-France | AZ Construction",
  description:
    "Fabricant de garde-corps acier, verre et câbles sur mesure à Paris (75). Balcons, terrasses, escaliers. Norme NF P01-012. Devis gratuit sous 48h.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
