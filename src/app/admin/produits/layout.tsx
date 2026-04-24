"use client";

import { TabNav } from "@/components/admin/ui/TabNav";
import { Package, FolderOpen, Star, Settings } from "lucide-react";

// "Familles" et "Images" sont désormais gérées dans le hub /admin/familles (refactor Megaswarm).
// Les tabs ci-dessous concernent uniquement les SKU individuels et options.
const PRODUITS_TABS = [
  { label: "SKU individuels", href: "/admin/produits", icon: Package },
  { label: "Familles & Sous-familles", href: "/admin/familles", icon: FolderOpen },
  { label: "Vedettes", href: "/admin/produits/vedettes", icon: Star },
  { label: "Options", href: "/admin/produits/options", icon: Settings },
];

export default function ProduitsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TabNav tabs={PRODUITS_TABS} />
      {children}
    </div>
  );
}
