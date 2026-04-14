"use client";

import { TabNav } from "@/components/admin/ui/TabNav";
import { Package, FolderOpen, Image, Star, Settings } from "lucide-react";

const PRODUITS_TABS = [
  { label: "Catalogue", href: "/admin/produits", icon: Package },
  { label: "Familles", href: "/admin/produits/familles", icon: FolderOpen },
  { label: "Images", href: "/admin/produits/images", icon: Image },
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
