import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "92",
  name: "Hauts-de-Seine",
  slug: "hauts-de-seine-92",
  fullName: "Hauts-de-Seine (92)",
  region: "Île-de-France",
  description:
    "Le département des Hauts-de-Seine concentre de nombreuses résidences de standing et projets architecturaux ambitieux nécessitant des garde-corps haut de gamme sur mesure.",
  cities: [
    "Neuilly-sur-Seine", "Levallois-Perret", "Boulogne-Billancourt", "Issy-les-Moulineaux",
    "Clichy", "Courbevoie", "Puteaux", "Nanterre", "Rueil-Malmaison", "Colombes",
    "Antony", "Châtenay-Malabry", "Clamart", "Meudon", "Vanves", "Malakoff",
    "Montrouge", "Châtillon", "Sèvres", "Saint-Cloud",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Hauts-de-Seine (92) | AZ Construction",
  description:
    "Garde-corps acier et verre sur mesure dans les Hauts-de-Seine (92). Neuilly, Boulogne, Courbevoie... Fabrication française, devis gratuit sous 48h.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
