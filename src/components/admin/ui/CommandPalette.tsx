"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, LayoutDashboard, Package, FileText, MessageSquare,
  BookOpen, Image, Settings, Palette, FolderOpen, Flame,
  Plus, ArrowRight, X, Command,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  category: "navigation" | "create" | "action";
  keywords?: string[];
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = React.useMemo(() => [
    // Navigation
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard, action: () => router.push("/admin"), category: "navigation", keywords: ["accueil", "home", "kpi"] },
    { id: "produits", label: "Produits", icon: Package, action: () => router.push("/admin/produits"), category: "navigation", keywords: ["catalogue", "familles"] },
    { id: "produits-familles", label: "Familles & sous-familles", icon: Package, action: () => router.push("/admin/familles"), category: "navigation", keywords: ["famille", "variants", "assets", "produits"] },
    { id: "devis", label: "Devis", icon: FileText, action: () => router.push("/admin/devis"), category: "navigation", keywords: ["quotes", "chiffrage"] },
    { id: "messages", label: "Messages de contact", icon: MessageSquare, action: () => router.push("/admin/contact"), category: "navigation", keywords: ["contact", "email"] },
    { id: "blog", label: "Blog", icon: BookOpen, action: () => router.push("/admin/blog"), category: "navigation", keywords: ["articles", "contenu"] },
    { id: "realisations", label: "Réalisations", icon: Image, action: () => router.push("/admin/realisations"), category: "navigation", keywords: ["portfolio", "projets"] },
    { id: "hero-slides", label: "Slides Hero", icon: Image, action: () => router.push("/admin/hero-slides"), category: "navigation", keywords: ["carousel", "homepage"] },
    { id: "thermolaquage", label: "Thermolaquage", icon: Flame, action: () => router.push("/admin/thermolaquage/demandes"), category: "navigation", keywords: ["peinture", "vignettes"] },
    { id: "medias", label: "Médiathèque", icon: FolderOpen, action: () => router.push("/admin/medias"), category: "navigation", keywords: ["fichiers", "upload"] },
    { id: "couleurs", label: "Couleurs RAL", icon: Palette, action: () => router.push("/admin/couleurs"), category: "navigation", keywords: ["nuancier", "ral"] },
    { id: "parametres", label: "Paramètres", icon: Settings, action: () => router.push("/admin/parametres"), category: "navigation", keywords: ["config", "settings"] },
    { id: "parametres-images", label: "Images du site", icon: Image, action: () => router.push("/admin/parametres/images"), category: "navigation", keywords: ["logos", "hero"] },
    { id: "parametres-seo", label: "SEO", icon: Settings, action: () => router.push("/admin/parametres/seo"), category: "navigation", keywords: ["meta", "sitemap"] },
    { id: "pages-cms", label: "Pages CMS", icon: FileText, action: () => router.push("/admin/pages"), category: "navigation", keywords: ["contenu", "sections"] },

    // Create actions
    { id: "new-article", label: "Nouvel article", description: "Créer un article de blog", icon: Plus, action: () => router.push("/admin/blog/nouveau"), category: "create" },
    { id: "new-devis", label: "Nouveau devis", description: "Créer un devis", icon: Plus, action: () => router.push("/admin/devis/nouveau"), category: "create" },
    { id: "new-slide", label: "Nouveau slide hero", description: "Ajouter un slide au carousel", icon: Plus, action: () => router.push("/admin/hero-slides"), category: "create" },

    // Quick actions
    { id: "view-site", label: "Voir le site", description: "Ouvrir azconstruction.fr", icon: ArrowRight, action: () => window.open("https://www.azconstruction.fr", "_blank"), category: "action" },
    { id: "view-blog", label: "Voir le blog", description: "Ouvrir le blog public", icon: ArrowRight, action: () => window.open("https://www.azconstruction.fr/blog", "_blank"), category: "action" },
  ], [router]);

  const filtered = React.useMemo(() => {
    if (!query) return commands;
    const q = query.toLowerCase();
    return commands.filter(c =>
      c.label.toLowerCase().includes(q) ||
      c.description?.toLowerCase().includes(q) ||
      c.keywords?.some(k => k.includes(q)) ||
      c.id.includes(q)
    );
  }, [query, commands]);

  // Reset selection on filter change
  React.useEffect(() => { setSelectedIdx(0); }, [query]);

  // Keyboard shortcut to open
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && filtered[selectedIdx]) {
      filtered[selectedIdx].action();
      setOpen(false);
    }
    if (e.key === "Escape") setOpen(false);
  };

  const categoryLabels = { navigation: "Navigation", create: "Créer", action: "Actions" };
  const groupedResults = React.useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filtered.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filtered]);

  let flatIndex = -1;

  return (
    <>
      {/* Trigger button in header */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-500 hover:bg-gray-200 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Rechercher...</span>
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white rounded text-[10px] font-mono text-gray-400 border border-gray-200">
          <Command className="w-3 h-3" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100]">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="relative mx-auto mt-[15vh] w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Rechercher une page, une action..."
                  className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                />
                <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600 rounded">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <p className="text-center py-8 text-gray-400 text-sm">Aucun résultat pour &quot;{query}&quot;</p>
                ) : (
                  Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category}>
                      <p className="px-5 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {categoryLabels[category as keyof typeof categoryLabels] || category}
                      </p>
                      {items.map(item => {
                        flatIndex++;
                        const idx = flatIndex;
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => { item.action(); setOpen(false); }}
                            onMouseEnter={() => setSelectedIdx(idx)}
                            className={cn(
                              "w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors",
                              selectedIdx === idx ? "bg-cyan-50 text-cyan-700" : "text-gray-700 hover:bg-gray-50"
                            )}
                          >
                            <Icon className={cn("w-4 h-4 flex-shrink-0", selectedIdx === idx ? "text-cyan-500" : "text-gray-400")} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{item.label}</p>
                              {item.description && <p className="text-xs text-gray-400 truncate">{item.description}</p>}
                            </div>
                            {selectedIdx === idx && (
                              <kbd className="text-[10px] text-cyan-400 font-mono">Entrée ↵</kbd>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-2.5 border-t border-gray-100 bg-gray-50 text-[10px] text-gray-400">
                <div className="flex items-center gap-3">
                  <span>↑↓ naviguer</span>
                  <span>↵ sélectionner</span>
                  <span>esc fermer</span>
                </div>
                <span>{filtered.length} résultat{filtered.length !== 1 ? "s" : ""}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
