import { ralCollections } from "@/lib/data/thermolaquage-items";
import { CollectionPage } from "../_CollectionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patina Collection — Effets Oxyde & Corten | AZ Construction Thermolaquage",
  description: "Découvrez la Patina Collection Adaptacolor : effets oxyde, rouille et corten pour vos projets de thermolaquage. Finitions authentiques sur mesure.",
};

export default function PatinaPage() {
  const collection = ralCollections.find((c) => c.id === "patina")!;
  return <CollectionPage collection={collection} />;
}
