import { redirect } from "next/navigation";

// Page legacy — redirection vers le nouveau hub Familles (refactor Megaswarm).
export default function LegacyProduitsFamillesRedirect() {
  redirect("/admin/familles");
}
