import { redirect } from "next/navigation";

// Page legacy — la gestion des images produits est désormais intégrée
// dans le hub Familles > tab "Assets Hero" (refactor Megaswarm).
export default function LegacyProduitsImagesRedirect() {
  redirect("/admin/familles");
}
