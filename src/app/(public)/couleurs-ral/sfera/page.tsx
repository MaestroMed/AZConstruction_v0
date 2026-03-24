import { ralCollections } from "@/lib/data/thermolaquage-items";
import { CollectionPage } from "../_CollectionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sfera Collection — Effets Anodisés | AZ Construction Thermolaquage",
  description: "Découvrez la Sfera Collection Adaptacolor : effets anodisés et Cosmos double couche. Cuivre, bronze, aluminium anodisé — finitions premium.",
};

export default function SferaPage() {
  const collection = ralCollections.find((c) => c.id === "sfera")!;
  return <CollectionPage collection={collection} />;
}
