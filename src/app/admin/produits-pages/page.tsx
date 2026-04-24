import { redirect } from "next/navigation";

// Page legacy — redirection vers le nouveau hub Familles (refactor Megaswarm).
// L'ancienne UI a été remplacée par /admin/familles avec tabs Catalogue / Landing / Assets / Sous-familles.
export default function LegacyProduitsPagesRedirect() {
  redirect("/admin/familles");
}
