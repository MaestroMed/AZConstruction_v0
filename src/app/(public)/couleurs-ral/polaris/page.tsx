import { ralCollections } from "@/lib/data/thermolaquage-items";
import { CollectionPage } from "../_CollectionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polaris Collection — Design Industriel Thermolaquage",
  description: "Découvrez la Polaris Collection Adaptacolor : finitions métalliques dynamiques, effets martelés et palette industrielle haut de gamme.",
};

export default function PolarisPage() {
  const collection = ralCollections.find((c) => c.id === "polaris")!;
  return <CollectionPage collection={collection} />;
}
