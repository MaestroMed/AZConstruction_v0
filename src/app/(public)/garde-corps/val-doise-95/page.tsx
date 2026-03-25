import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "95",
  name: "Val-d'Oise",
  slug: "val-doise-95",
  fullName: "Val-d'Oise (95)",
  region: "Île-de-France",
  description:
    "Le Val-d'Oise est le département où AZ Construction a ses ateliers (Bruyères-sur-Oise). Nous connaissons parfaitement le marché local et intervenons dans toutes les communes.",
  cities: [
    "Cergy", "Argenteuil", "Sarcelles", "Pontoise", "Franconville",
    "Garges-lès-Gonesse", "Villiers-le-Bel", "Ermont", "Enghien-les-Bains",
    "Herblay", "Saint-Gratien", "Taverny", "Cormeilles-en-Parisis",
    "Gonesse", "Bruyères-sur-Oise", "L'Isle-Adam", "Marines",
    "Écouen", "Goussainville", "Deuil-la-Barre",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Val-d'Oise (95) — Fabricant local | AZ Construction",
  description:
    "AZ Construction fabrique vos garde-corps sur mesure dans le Val-d'Oise (95) depuis Bruyères-sur-Oise. Acier, verre, câbles. Devis gratuit sous 48h.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
