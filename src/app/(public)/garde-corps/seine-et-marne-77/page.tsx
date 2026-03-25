import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "77",
  name: "Seine-et-Marne",
  slug: "seine-et-marne-77",
  fullName: "Seine-et-Marne (77)",
  region: "Île-de-France",
  description:
    "La Seine-et-Marne, le plus grand département d'Île-de-France, combine zones périurbaines et rurales avec de nombreuses maisons individuelles et projets architecturaux nécessitant des garde-corps sur mesure.",
  cities: [
    "Meaux", "Melun", "Chelles", "Torcy", "Pontault-Combault",
    "Villepinte", "Montereau-Fault-Yonne", "Savigny-le-Temple",
    "Marne-la-Vallée", "Noisiel", "Lagny-sur-Marne", "Fontainebleau",
    "Provins", "Coulommiers", "Avon", "Moret-sur-Loing",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Seine-et-Marne (77) | AZ Construction",
  description:
    "Garde-corps acier et verre sur mesure en Seine-et-Marne (77). Meaux, Melun, Chelles, Marne-la-Vallée... Devis gratuit, fabrication française.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
