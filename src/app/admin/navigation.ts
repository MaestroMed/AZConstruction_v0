import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  Users,
  Image,
  Palette,
  FileEdit,
  Settings,
  FolderOpen,
  MessageSquare,
  BookOpen,
  Flame,
  LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  exact?: boolean;
  subItems?: NavSubItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Tableau de bord",
    href: "/admin",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    title: "Hero / Accueil",
    href: "/admin/hero",
    icon: Image,
    subItems: [
      { title: "Slides Hero", href: "/admin/hero-slides" },
      { title: "Paramètres Hero", href: "/admin/hero" },
    ],
  },
  {
    title: "Produits",
    icon: Package,
    href: "/admin/produits",
    subItems: [
      { title: "Tous les produits", href: "/admin/produits" },
      { title: "Familles", href: "/admin/produits/familles" },
      { title: "Images produits", href: "/admin/produits/images" },
      { title: "Produits vedettes", href: "/admin/produits/vedettes" },
      { title: "Options", href: "/admin/produits/options" },
    ],
  },
  {
    title: "Commandes",
    href: "/admin/commandes",
    icon: ShoppingCart,
  },
  {
    title: "Devis",
    href: "/admin/devis",
    icon: FileText,
  },
  {
    title: "Clients",
    href: "/admin/clients",
    icon: Users,
    subItems: [
      { title: "Tous les clients", href: "/admin/clients" },
      { title: "Particuliers", href: "/admin/clients?type=particulier" },
      { title: "Professionnels", href: "/admin/clients?type=pro" },
      { title: "En attente", href: "/admin/clients?status=pending" },
    ],
  },
  {
    title: "Messages",
    href: "/admin/contact",
    icon: MessageSquare,
  },
  {
    title: "Blog",
    href: "/admin/blog",
    icon: BookOpen,
  },
  {
    title: "Réalisations",
    href: "/admin/realisations",
    icon: Image,
  },
  {
    title: "Thermolaquage",
    href: "/admin/thermolaquage/demandes",
    icon: Flame,
    subItems: [
      { title: "Vignettes mosaïque", href: "/admin/thermolaquage/demandes" },
    ],
  },
  {
    title: "Médiathèque",
    href: "/admin/medias",
    icon: FolderOpen,
  },
  {
    title: "Pages CMS",
    href: "/admin/pages",
    icon: FileEdit,
  },
  {
    title: "Couleurs RAL",
    href: "/admin/couleurs",
    icon: Palette,
  },
  {
    title: "Paramètres",
    icon: Settings,
    href: "/admin/parametres",
    subItems: [
      { title: "Général", href: "/admin/parametres" },
      { title: "Images du site", href: "/admin/parametres/images" },
      { title: "Images SEO (familles)", href: "/admin/parametres/seo/images" },
      { title: "SEO Premium+ (URLs)", href: "/admin/seo/premium" },
      { title: "Réalisations Pro", href: "/admin/parametres/realisations-pro" },
      { title: "Stripe (Paiement)", href: "/admin/parametres/stripe" },
      { title: "E-commerce", href: "/admin/parametres/ecommerce" },
      { title: "Emails", href: "/admin/parametres/emails" },
      { title: "SEO (meta)", href: "/admin/parametres/seo" },
    ],
  },
];

// Breadcrumb label overrides for cleaner display
export const breadcrumbLabels: Record<string, string> = {
  admin: "Back-office",
  produits: "Produits",
  familles: "Familles",
  vedettes: "Vedettes",
  commandes: "Commandes",
  devis: "Devis",
  clients: "Clients",
  contact: "Messages",
  blog: "Blog",
  realisations: "Réalisations",
  thermolaquage: "Thermolaquage",
  demandes: "Vignettes",
  medias: "Médiathèque",
  pages: "Pages CMS",
  couleurs: "Couleurs RAL",
  parametres: "Paramètres",
  images: "Images du site",
  seo: "SEO",
  emails: "Emails",
  ecommerce: "E-commerce",
  stripe: "Stripe",
  hero: "Hero",
  "hero-slides": "Slides Hero",
  "ral-models": "Modèles RAL",
  nouveau: "Nouveau",
};
