import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "93",
  name: "Seine-Saint-Denis",
  slug: "seine-saint-denis-93",
  fullName: "Seine-Saint-Denis (93)",
  region: "Île-de-France",
  description:
    "La Seine-Saint-Denis est en pleine transformation urbaine avec de nombreux projets de rénovation et de construction neuve nécessitant des garde-corps conformes aux normes en vigueur.",
  cities: [
    "Saint-Denis", "Montreuil", "Aubervilliers", "Noisy-le-Grand", "Argenteuil",
    "Bobigny", "Saint-Ouen", "Drancy", "Pantin", "Vincennes", "Bagnolet",
    "Les Lilas", "Le Raincy", "Noisy-le-Sec", "Romainville", "Rosny-sous-Bois",
    "Villepinte", "Bondy", "Aulnay-sous-Bois", "Livry-Gargan",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Seine-Saint-Denis (93) | AZ Construction",
  description:
    "Fabrication de garde-corps sur mesure en Seine-Saint-Denis (93). Acier thermolaqué, verre, câbles. Normes NF P01-012. Devis gratuit sous 48h.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
