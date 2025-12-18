"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ImageIcon,
  Upload,
  Trash2,
  Loader2,
  RefreshCw,
  Check,
  Building,
  CreditCard,
  Mail,
  Search as SearchIcon,
  Palette,
  LayoutGrid,
  Home,
  Layers,
} from "lucide-react";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "images", label: "Images du site", icon: ImageIcon, href: "/admin/parametres/images" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: SearchIcon, href: "/admin/parametres/seo" },
];

const categoryIcons: Record<string, React.ElementType> = {
  hero: Home,
  products: LayoutGrid,
  pages: Layers,
  configurators: Palette,
};

const categoryLabels: Record<string, string> = {
  hero: "🏠 Sections Hero",
  products: "📦 Images Produits / Familles",
  pages: "📄 Pages du site",
  configurators: "⚙️ Configurateurs",
};

interface SiteImage {
  key: string;
  category: string;
  label: string;
  description: string;
  imageUrl: string | null;
  fallbackUrl: string;
  url: string;
  updatedAt?: string;
}

export default function ImagesSettingsPage() {
  const [images, setImages] = React.useState<SiteImage[]>([]);
  const [grouped, setGrouped] = React.useState<Record<string, SiteImage[]>>({});
  const [loading, setLoading] = React.useState(true);
  const [uploading, setUploading] = React.useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>(["hero", "products"]);
  const fileInputRefs = React.useRef<Record<string, HTMLInputElement | null>>({});

  // Charger les images
  const loadImages = async () => {
    try {
      const response = await fetch("/api/site-images");
      if (response.ok) {
        const data = await response.json();
        setImages(data.images || []);
        setGrouped(data.grouped || {});
      }
    } catch (error) {
      console.error("Erreur chargement images:", error);
      toast.error("Erreur de chargement");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadImages();
  }, []);

  const handleUpload = async (key: string, file: File) => {
    setUploading(key);
    const formData = new FormData();
    formData.append("files", file);
    formData.append("folder", "site-images");

    try {
      // 1. Upload le fichier
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error("Erreur upload");

      const uploadData = await uploadResponse.json();
      const imageUrl = uploadData.files[0]?.url;

      if (!imageUrl) throw new Error("Pas d'URL retournée");

      // 2. Sauvegarder la référence
      const saveResponse = await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, imageUrl }),
      });

      if (!saveResponse.ok) throw new Error("Erreur sauvegarde");

      // 3. Recharger la liste
      await loadImages();
      toast.success("Image mise à jour !");
    } catch (error) {
      console.error("Erreur upload:", error);
      toast.error("Erreur lors de l'upload");
    } finally {
      setUploading(null);
    }
  };

  const handleRemove = async (key: string) => {
    try {
      // Remettre à null pour revenir au fallback
      await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, imageUrl: null }),
      });

      await loadImages();
      toast.success("Image réinitialisée (fallback)");
    } catch (error) {
      console.error("Erreur suppression:", error);
      toast.error("Erreur lors de la suppression");
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Images du site</h1>
          <p className="text-gray-500 mt-1">
            Gérez toutes les images affichées sur le site (heros, produits, pages...)
          </p>
        </div>
        <button
          onClick={() => {
            setLoading(true);
            loadImages();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24">
            {settingsSections.map((section) => {
              const isActive = section.id === "images";
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 transition-colors ${
                    isActive
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Légende */}
          <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Légende</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-600">Image personnalisée</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-gray-600">Image par défaut (fallback)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {Object.entries(grouped).map(([category, categoryImages]) => {
            const IconComponent: React.ElementType = categoryIcons[category] ?? ImageIcon;
            const isExpanded = expandedCategories.includes(category);

            return (
              <div
                key={category}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {categoryLabels[category] || category}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {categoryImages.length} image{categoryImages.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`transform transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Category Images */}
                {isExpanded && (
                  <div className="border-t border-gray-100 p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {categoryImages.map((img) => {
                        const isCustom = !!img.imageUrl;
                        const isUploading = uploading === img.key;

                        return (
                          <div
                            key={img.key}
                            className="relative bg-gray-50 rounded-xl p-4 border border-gray-100"
                          >
                            {/* Status badge */}
                            <div
                              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                                isCustom
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {isCustom ? "✓ Personnalisée" : "↺ Fallback"}
                            </div>

                            {/* Image Preview */}
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3">
                              <Image
                                src={img.url}
                                alt={img.label}
                                fill
                                className="object-cover"
                                unoptimized={img.url.startsWith("data:")}
                              />
                              {isUploading && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                  <Loader2 className="w-8 h-8 animate-spin text-white" />
                                </div>
                              )}
                            </div>

                            {/* Info */}
                            <h3 className="font-semibold text-gray-900 text-sm mb-1">
                              {img.label}
                            </h3>
                            <p className="text-xs text-gray-500 mb-3">
                              {img.description}
                            </p>

                            {/* Actions */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => fileInputRefs.current[img.key]?.click()}
                                disabled={isUploading}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-cyan-500 text-white rounded-lg text-xs font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
                              >
                                <Upload className="w-3 h-3" />
                                {isCustom ? "Remplacer" : "Uploader"}
                              </button>
                              {isCustom && (
                                <button
                                  onClick={() => handleRemove(img.key)}
                                  className="inline-flex items-center justify-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Revenir au fallback"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                              <input
                                ref={(el) => {
                                  fileInputRefs.current[img.key] = el;
                                }}
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleUpload(img.key, file);
                                }}
                                className="hidden"
                              />
                            </div>

                            {/* Key for dev */}
                            <p className="text-[10px] text-gray-400 mt-2 font-mono">
                              key: {img.key}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Info box */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">
                  Comment ça marche ?
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Chaque image a un <strong>fallback</strong> par défaut (image gratuite Unsplash)</li>
                  <li>• Uploadez vos propres images pour les personnaliser</li>
                  <li>• Cliquez sur 🗑️ pour revenir à l'image par défaut</li>
                  <li>• Les images sont automatiquement optimisées via Cloudinary</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

