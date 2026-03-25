import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "78",
  name: "Yvelines",
  slug: "yvelines-78",
  fullName: "Yvelines (78)",
  region: "Île-de-France",
  description:
    "Les Yvelines regroupent des communes résidentielles aisées et de nombreuses maisons avec terrasses et balcons nécessitant des garde-corps élégants et sécurisants.",
  cities: [
    "Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Sartrouville",
    "Poissy", "Guyancourt", "Chatou", "Vélizy-Villacoublay", "Plaisir",
    "Les Mureaux", "Conflans-Sainte-Honorine", "Houilles", "Élancourt",
    "Maurepas", "La Celle-Saint-Cloud", "Rambouillet", "Marly-le-Roi",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Yvelines (78) | AZ Construction",
  description:
    "Garde-corps acier et verre sur mesure dans les Yvelines (78). Versailles, Saint-Germain, Poissy... Norme NF P01-012, devis gratuit sous 48h.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
