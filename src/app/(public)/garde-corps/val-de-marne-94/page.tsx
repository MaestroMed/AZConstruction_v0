import type { Metadata } from "next";
import { GardeCorpsLocalPage } from "@/components/garde-corps/GardeCorpsLocalPage";

const DEPT = {
  code: "94",
  name: "Val-de-Marne",
  slug: "val-de-marne-94",
  fullName: "Val-de-Marne (94)",
  region: "Île-de-France",
  description:
    "Le Val-de-Marne offre un tissu résidentiel dense avec de nombreux besoins en garde-corps pour appartements, maisons individuelles et projets collectifs.",
  cities: [
    "Créteil", "Vitry-sur-Seine", "Champigny-sur-Marne", "Ivry-sur-Seine",
    "Vincennes", "Saint-Maur-des-Fossés", "Fontenay-sous-Bois", "Alfortville",
    "Maisons-Alfort", "Charenton-le-Pont", "Saint-Maurice", "Villejuif",
    "Cachan", "Arcueil", "Gentilly", "Nogent-sur-Marne", "Le Kremlin-Bicêtre",
    "Thiais", "Orly", "Rungis",
  ],
};

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Val-de-Marne (94) | AZ Construction",
  description:
    "Fabricant de garde-corps acier, verre et câbles dans le Val-de-Marne (94). Créteil, Vincennes, Champigny... Devis gratuit, pose professionnelle.",
  alternates: { canonical: `https://azconstruction.fr/garde-corps/${DEPT.slug}` },
};

export default function Page() {
  return <GardeCorpsLocalPage dept={DEPT} />;
}
