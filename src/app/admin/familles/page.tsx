"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Package,
  ExternalLink,
  Edit,
  ImageIcon,
  Layers,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { Modal } from "@/components/admin/ui/Modal";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { cn } from "@/lib/utils";

type AssetType = "IMAGE" | "VIDEO";
type AssetRole = "HERO" | "GALLERY" | "CARD";

interface AssetLite {
  id: string;
  type: AssetType;
  role: AssetRole;
  url: string;
  alt?: string | null;
  posterUrl?: string | null;
  ordre: number;
}

interface VariantLite {
  id: string;
  slug: string;
  name: string;
  assets?: AssetLite[];
}

interface Family {
  id: string;
  slug: string;
  nom: string;
  description?: string | null;
  tagline?: string | null;
  ordre: number;
  active: boolean;
  productVariants?: VariantLite[];
  assets?: AssetLite[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function FamiliesListPage() {
  const [families, setFamilies] = React.useState<Family[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [creating, setCreating] = React.useState(false);
  const [createOpen, setCreateOpen] = React.useState(false);

  // Create modal state
  const [form, setForm] = React.useState({
    slug: "",
    nom: "",
    description: "",
    tagline: "",
    active: true,
  });
  const [slugManual, setSlugManual] = React.useState(false);

  const loadFamilies = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "/api/families?active=all&withVariants=true&withAssets=true",
        { cache: "no-store" }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Impossible de charger les familles");
      }
      setFamilies(Array.isArray(data.families) ? data.families : []);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadFamilies();
  }, [loadFamilies]);

  const resetForm = () => {
    setForm({ slug: "", nom: "", description: "", tagline: "", active: true });
    setSlugManual(false);
  };

  const handleOpenCreate = () => {
    resetForm();
    setCreateOpen(true);
  };

  const handleCreate = async () => {
    if (!form.nom.trim()) {
      toast.error("Le nom est obligatoire");
      return;
    }
    if (!form.slug.trim()) {
      toast.error("Le slug est obligatoire");
      return;
    }
    setCreating(true);
    try {
      const res = await fetch("/api/families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: form.slug.trim(),
          nom: form.nom.trim(),
          description: form.description.trim() || null,
          tagline: form.tagline.trim() || null,
          active: form.active,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Erreur création");
      }
      toast.success("Famille créée");
      setCreateOpen(false);
      resetForm();
      await loadFamilies();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(msg);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Produits &amp; Familles
          </h1>
          <p className="text-gray-500 mt-1">
            Gérez le catalogue : familles, sous-familles et médias.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouvelle famille
          </button>
        </div>
      </div>

      {/* States */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <Loader2 className="w-8 h-8 text-cyan-500 mx-auto mb-4 animate-spin" />
          <p className="text-gray-500">Chargement des familles…</p>
        </div>
      ) : families.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Aucune famille
          </h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            Commencez par créer votre première famille produit.
          </p>
          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Créer une famille
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {families.map((family, index) => (
            <FamilyCard key={family.id} family={family} index={index} />
          ))}
        </div>
      )}

      {/* Create Modal */}
      <Modal
        isOpen={createOpen}
        onClose={() => (creating ? null : setCreateOpen(false))}
        title="Nouvelle famille"
        description="Créez une famille de produits (garde-corps, portails, etc.)."
        size="md"
        closeOnOverlay={!creating}
        footer={
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCreateOpen(false)}
              disabled={creating}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleCreate}
              disabled={creating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50"
            >
              {creating && <Loader2 className="w-4 h-4 animate-spin" />}
              Créer la famille
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Nom"
            placeholder="ex. Garde-corps"
            required
            value={form.nom}
            onChange={(e) => {
              const nom = e.target.value;
              setForm((f) => ({
                ...f,
                nom,
                slug: slugManual ? f.slug : slugify(nom),
              }));
            }}
          />
          <Input
            label="Slug"
            placeholder="ex. garde-corps"
            required
            value={form.slug}
            onChange={(e) => {
              setSlugManual(true);
              setForm((f) => ({ ...f, slug: slugify(e.target.value) }));
            }}
            hint="Utilisé dans l'URL : /produits/[slug]."
          />
          <Input
            label="Tagline (accroche)"
            placeholder="ex. Sécurité et élégance aluminium"
            value={form.tagline}
            onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
          />
          <Textarea
            label="Description courte"
            placeholder="Brève description affichée sur les cards listing."
            rows={3}
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <Switch
            label="Active"
            description="Visible sur le site public."
            checked={form.active}
            onChange={(v) => setForm((f) => ({ ...f, active: v }))}
          />
        </div>
      </Modal>
    </div>
  );
}

/* ---------- Family card (list item) ---------- */

function FamilyCard({ family, index }: { family: Family; index: number }) {
  const cardAsset = family.assets?.find((a) => a.role === "CARD") ?? null;
  const heroAsset = family.assets?.find((a) => a.role === "HERO") ?? null;
  const thumb =
    (cardAsset?.type === "IMAGE" && cardAsset.url) ||
    cardAsset?.posterUrl ||
    (heroAsset?.type === "IMAGE" && heroAsset.url) ||
    heroAsset?.posterUrl ||
    null;

  const variantsCount = family.productVariants?.length ?? 0;
  const familyAssetsCount = family.assets?.length ?? 0;
  const variantAssetsCount =
    family.productVariants?.reduce(
      (sum, v) => sum + (v.assets?.length ?? 0),
      0
    ) ?? 0;
  const totalAssets = familyAssetsCount + variantAssetsCount;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={cardAsset?.alt ?? family.nom}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <ImageIcon className="w-10 h-10" />
          </div>
        )}
        <span
          className={cn(
            "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full",
            family.active
              ? "bg-emerald-500 text-white"
              : "bg-gray-400 text-white"
          )}
        >
          {family.active ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <header>
          <div className="flex items-start gap-2 justify-between">
            <h2 className="font-semibold text-gray-900 truncate">
              {family.nom}
            </h2>
            <span className="text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-gray-50 border border-gray-100 whitespace-nowrap">
              #{family.ordre}
            </span>
          </div>
          <p className="text-xs text-gray-400 font-mono mt-0.5">
            /{family.slug}
          </p>
          {family.tagline && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {family.tagline}
            </p>
          )}
        </header>

        {/* Counters */}
        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
            <Layers className="w-3 h-3" />
            {variantsCount} sous-famille{variantsCount > 1 ? "s" : ""}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            <ImageIcon className="w-3 h-3" />
            {totalAssets} asset{totalAssets > 1 ? "s" : ""}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2 pt-4 border-t border-gray-100">
          <Link
            href={`/admin/familles/${family.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          >
            <Edit className="w-3.5 h-3.5" />
            Modifier
          </Link>
          <a
            href={`/produits/${family.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Voir en ligne
          </a>
        </div>
      </div>
    </motion.article>
  );
}
