"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
  FolderOpen,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { AuthGuard, useAdminLogout } from "@/components/admin/AuthGuard";

// Navigation items with sub-items
const navigationItems = [
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
  },
  {
    title: "Produits",
    icon: Package,
    href: "/admin/produits",
    subItems: [
      { title: "Tous les produits", href: "/admin/produits" },
      { title: "Familles", href: "/admin/produits/familles" },
      { title: "Options", href: "/admin/produits/options" },
    ],
  },
  {
    title: "Commandes",
    href: "/admin/commandes",
    icon: ShoppingCart,
    badge: 12,
  },
  {
    title: "Devis",
    href: "/admin/devis",
    icon: FileText,
    badge: 5,
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
    title: "Réalisations",
    href: "/admin/realisations",
    icon: Image,
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
      { title: "Stripe (Paiement)", href: "/admin/parametres/stripe" },
      { title: "E-commerce", href: "/admin/parametres/ecommerce" },
      { title: "Emails", href: "/admin/parametres/emails" },
      { title: "SEO", href: "/admin/parametres/seo" },
    ],
  },
];

interface NavItemProps {
  item: (typeof navigationItems)[0];
  collapsed: boolean;
  pathname: string;
}

function NavItem({ item, collapsed, pathname }: NavItemProps) {
  const [expanded, setExpanded] = React.useState(false);
  const Icon = item.icon;
  const isActive = item.exact
    ? pathname === item.href
    : pathname.startsWith(item.href || "");
  const hasSubItems = item.subItems && item.subItems.length > 0;

  React.useEffect(() => {
    if (hasSubItems && item.subItems?.some((sub) => pathname.startsWith(sub.href.split("?")[0]))) {
      setExpanded(true);
    }
  }, [pathname, hasSubItems, item.subItems]);

  if (hasSubItems) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
            isActive
              ? "bg-cyan-500/10 text-cyan-400"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
          )}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left text-sm font-medium">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  expanded && "rotate-180"
                )}
              />
            </>
          )}
        </button>
        {!collapsed && expanded && (
          <div className="ml-8 mt-1 space-y-1">
            {item.subItems?.map((subItem) => {
              const subActive = pathname === subItem.href.split("?")[0];
              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                    subActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                  )}
                >
                  {subItem.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
        isActive
          ? "bg-cyan-500/10 text-cyan-400"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {!collapsed && (
        <span className="flex-1 text-sm font-medium">{item.title}</span>
      )}
      {item.badge && (
        <span
          className={cn(
            "bg-red-500 text-white text-xs font-bold rounded-full",
            collapsed ? "absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center" : "px-2 py-0.5"
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}

// Breadcrumbs component
function Breadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { href, label };
  });

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.href}>
          {index > 0 && <span>/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-900 font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-cyan-600 transition-colors">
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { handleLogout } = useAdminLogout();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-[#0a1628] z-50 transition-all duration-300 flex flex-col",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          {!collapsed && (
            <Link href="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AZ</span>
              </div>
              <span className="text-white font-semibold">Admin</span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">AZ</span>
            </div>
          )}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigationItems.map((item) => (
            <NavItem
              key={item.title}
              item={item}
              collapsed={collapsed}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* Collapse button */}
        <div className="p-3 border-t border-white/10 hidden lg:block">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Réduire</span>
              </>
            )}
          </button>
        </div>

        {/* User profile */}
        <div className="p-3 border-t border-white/10">
          <div
            className={cn(
              "flex items-center gap-3",
              collapsed && "justify-center"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-semibold">
              AD
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  Administrateur
                </p>
                <p className="text-xs text-gray-500 truncate">
                  contact@azconstruction.fr
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:pl-20" : "lg:pl-64"
        )}
      >
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Breadcrumbs */}
            <Breadcrumbs pathname={pathname} />
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-64 pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
              />
            </div>

            {/* Mobile search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Déconnexion</span>
            </button>
          </div>
        </header>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden p-4 bg-white border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0a1628",
            color: "#fff",
            border: "1px solid rgba(0, 212, 255, 0.2)",
          },
        }}
      />
    </div>
  );
}

// Wrapper avec authentification
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthGuard>
  );
}


