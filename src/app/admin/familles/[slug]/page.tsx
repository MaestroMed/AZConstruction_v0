"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Loader2,
  FileText,
  Sparkles,
  Image as ImageIcon,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AssetUploader,
  type Asset,
  type AssetType,
} from "@/components/admin/products/AssetUploader";
import { uploadAssetFile } from "@/components/admin/products/uploadAssetFile";
import { CatalogueTab } from "./_components/CatalogueTab";
import { LandingTab } from "./_components/LandingTab";
import { VariantsTab } from "./_components/VariantsTab";
import type { FamilyData } from "./_components/types";

const TABS = [
  { id: "catalog", label: "Catalogue", icon: FileText },
  { id: "landing", label: "Landing page", icon: Sparkles },
  { id: "assets", label: "Assets Hero", icon: ImageIcon },
  { id: "variants", label: "Sous-familles", icon: Layers },
] as const;
type TabId = (typeof TABS)[number]["id"];

export default function FamilyEditPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug as string;

  const [family, setFamily] = React.useState<FamilyData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<TabId>("catalog");

  const loadFamily = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/families/${slug}`, { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Famille introuvable");
      }
      setFamily(data.family as FamilyData);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  React.useEffect(() => {
    if (slug) loadFamily();
  }, [slug, loadFamily]);

  // --- Asset handlers (family-level) ---

  const onUpload = async (file: File, type: AssetType, role: Asset["role"]) => {
    try {
      const { url } = await uploadAssetFile(file, type, `families/${slug}`);
      const res = await fetch(`/api/families/${slug}/assets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, role, url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Enregistrement échoué");
      await loadFamily();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      throw new Error(msg);
    }
  };

  const onDeleteAsset = async (assetId: string) => {
    const res = await fetch(`/api/families/${slug}/assets/${assetId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Suppression échouée");
    }
    await loadFamily();
  };

  const onUpdateAlt = async (assetId: string, alt: string) => {
    const res = await fetch(`/api/families/${slug}/assets/${assetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alt }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Mise à jour alt échouée");
    }
    // Do not reload entire family here; AssetCard keeps its local value.
  };

  const onReorderAsset = async (assetId: string, newOrdre: number) => {
    const res = await fetch(`/api/families/${slug}/assets/${assetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ordre: newOrdre }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Réorganisation échouée");
    }
    await loadFamily();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <Loader2 className="w-8 h-8 text-cyan-500 mx-auto mb-4 animate-spin" />
        <p className="text-gray-500">Chargement de la famille…</p>
      </div>
    );
  }

  if (error || !family) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Famille introuvable
        </h3>
        <p className="text-gray-500 mb-6">{error || "Aucune donnée reçue."}</p>
        <Link
          href="/admin/familles"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la liste
        </Link>
      </div>
    );
  }

  const heroAssets = family.assets.filter((a) => a.role === "HERO");
  const cardAssets = family.assets.filter((a) => a.role === "CARD");
  const galleryAssets = family.assets.filter((a) => a.role === "GALLERY");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <Link
            href="/admin/familles"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Toutes les familles
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">{family.nom}</h1>
            <span
              className={cn(
                "text-xs font-semibold px-2 py-1 rounded-full",
                family.active
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              {family.active ? "Active" : "Inactive"}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-1">/{family.slug}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`/produits/${family.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Voir en ligne
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl overflow-x-auto">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                isActive
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="space-y-6"
        >
          {activeTab === "catalog" && (
            <CatalogueTab family={family} onSaved={loadFamily} />
          )}

          {activeTab === "landing" && (
            <LandingTab family={family} onSaved={loadFamily} />
          )}

          {activeTab === "assets" && (
            <div className="space-y-6">
              <AssetUploader
                title="Hero (image ou vidéo)"
                helpText="Arrière-plan du hero sur /produits/[slug]. Une vidéo remplace les images."
                assets={heroAssets}
                role="HERO"
                allowedTypes={["IMAGE", "VIDEO"]}
                onUpload={(file, type) => onUpload(file, type, "HERO")}
                onDelete={onDeleteAsset}
                onUpdateAlt={onUpdateAlt}
                onReorder={onReorderAsset}
              />
              <AssetUploader
                title="Card (thumbnail)"
                helpText="Image utilisée sur la page /produits listing."
                assets={cardAssets}
                role="CARD"
                allowedTypes={["IMAGE"]}
                maxAssets={1}
                onUpload={(file, type) => onUpload(file, type, "CARD")}
                onDelete={onDeleteAsset}
                onUpdateAlt={onUpdateAlt}
              />
              <AssetUploader
                title="Galerie"
                helpText="Images supplémentaires pour la page famille."
                assets={galleryAssets}
                role="GALLERY"
                allowedTypes={["IMAGE"]}
                onUpload={(file, type) => onUpload(file, type, "GALLERY")}
                onDelete={onDeleteAsset}
                onUpdateAlt={onUpdateAlt}
                onReorder={onReorderAsset}
              />
            </div>
          )}

          {activeTab === "variants" && (
            <VariantsTab family={family} onChange={loadFamily} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

