import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "91",
  name: "Essonne",
  slug: "essonne-91",
  fullName: "Essonne (91)",
  region: "Île-de-France",
  description:
    "L'Essonne présente un parc immobilier diversifié, des pavillonnaires aux résidences collectives, avec une forte demande en garde-corps pour balcons, terrasses et escaliers.",
  cities: [
    "Évry-Courcouronnes", "Corbeil-Essonnes", "Massy", "Palaiseau",
    "Savigny-sur-Orge", "Athis-Mons", "Viry-Châtillon", "Ris-Orangis",
    "Brétigny-sur-Orge", "Draveil", "Juvisy-sur-Orge", "Longjumeau",
    "Sainte-Geneviève-des-Bois", "Montgeron", "Grigny", "Brunoy",
    "Yerres", "Chilly-Mazarin",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Essonne (91) | AZ Construction",
  description:
    "Fabricant de garde-corps acier, verre et câbles en Essonne (91). Évry, Massy, Palaiseau... Garantie décennale, norme NF P01-012, devis gratuit.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
