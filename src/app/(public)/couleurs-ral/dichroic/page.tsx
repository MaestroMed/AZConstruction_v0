import { ralCollections } from "@/lib/data/thermolaquage-items";
import { CollectionPage } from "../_CollectionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dichroic Collection — Reflets Changeants Thermolaquage",
  description: "Découvrez la Dichroic Collection Adaptacolor : finitions aux reflets changeants selon la lumière — effet irisé spectaculaire pour projets uniques.",
};

export default function DichroicPage() {
  const collection = ralCollections.find((c) => c.id === "dichroic")!;
  return <CollectionPage collection={collection} />;
}
