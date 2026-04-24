import { redirect } from "next/navigation";

// Page legacy — redirection vers le nouveau hub famille (refactor Megaswarm).
export default async function LegacyProduitsPageRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/admin/familles/${slug}`);
}
