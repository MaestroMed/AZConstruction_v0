"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Upload,
  Trash2,
  Loader2,
  RefreshCw,
  Check,
  Plus,
  ImageIcon,
  Film,
  LayoutGrid,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ── Client-side compression (same as parametres/images) ───
async function compressImage(file: File, maxWidth = 1920, quality = 0.85): Promise<File> {
  if (file.type === "image/svg+xml" || file.size < 500 * 1024) return file;
  return new Promise((resolve) => {
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(file); return; }
          const c = new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
          resolve(c.size < file.size ? c : file);
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

// ── Types ──────────────────────────────────────────────────
interface HeroImage {
  id: string;
  imageUrl: string;
  alt?: string | null;
  ordre: number;
}

interface VariantItem {
  id: string;
  name: string;
  description?: string;
  features?: string[];
  imageUrl?: string;
  startingPrice?: string;
}

interface Family {
  id: string;
  nom: string;
  slug: string;
  imageUrl?: string;
  active: boolean;
  variants?: VariantItem[];
}

// ── Hero Image Card ────────────────────────────────────────
function HeroImageCard({
  image,
  index,
  uploading,
  onReplace,
  onDelete,
}: {
  image: HeroImage;
  index: number;
  uploading: boolean;
  onReplace: (file: File) => void;
  onDelete: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image
          src={image.imageUrl}
          alt={image.alt || `Image hero ${index + 1}`}
          fill
          className="object-cover"
          unoptimized={image.imageUrl.startsWith("data:")}
          onError={() => {}}
        />
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-1">
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full font-semibold",
            index === 0 ? "bg-cyan-500 text-white" : "bg-white/90 text-gray-700 shadow-sm"
          )}>
            {index === 0 ? "Principale" : `Image ${index + 1}`}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm mb-1">
          {index === 0 ? "Image principale du carrousel" : `Image carrousel ${index + 1}`}
        </p>
        <p className="text-xs text-gray-400 mb-3">
          {index === 0 ? "Affiché en premier — aussi la miniature dans la liste" : "Diapositive du carrousel hero"}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-xl text-xs font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50"
          >
            <Upload className="w-3 h-3" />
            Remplacer
          </button>
          <button
            onClick={onDelete}
            disabled={uploading}
            className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
            title="Supprimer cette image"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onReplace(f); e.target.value = ""; }}
        />
      </div>
    </div>
  );
}

// ── Add Hero Image Card ───────────────────────────────────
function AddHeroCard({ uploading, onAdd }: { uploading: boolean; onAdd: (file: File) => void }) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => !uploading && fileRef.current?.click()}
      className={cn(
        "bg-white rounded-2xl border-2 border-dashed overflow-hidden transition-all cursor-pointer",
        uploading
          ? "border-cyan-300 bg-cyan-50"
          : "border-gray-200 hover:border-cyan-400 hover:bg-cyan-50/30"
      )}
    >
      <div className="aspect-video flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-cyan-500 transition-colors p-4">
        {uploading ? (
          <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
        ) : (
          <>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">Ajouter une image</p>
              <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WebP — max 10 Mo</p>
            </div>
          </>
        )}
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onAdd(f); e.target.value = ""; }}
      />
    </div>
  );
}

// ── Variant Image Card ────────────────────────────────────
function VariantImageCard({
  variant,
  uploading,
  onUpload,
  onRemove,
}: {
  variant: VariantItem;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const hasImage = !!variant.imageUrl;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {hasImage ? (
          <Image
            src={variant.imageUrl!}
            alt={variant.name}
            fill
            className="object-cover"
            onError={() => {}}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 to-blue-corporate/60 flex items-center justify-center">
            <span className="text-5xl font-bold text-white/10 select-none">
              {variant.name?.charAt(0) || "?"}
            </span>
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full font-semibold",
            hasImage ? "bg-green-500/90 text-white" : "bg-orange-400/90 text-white"
          )}>
            {hasImage ? "✓ Configurée" : "Défaut"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm mb-0.5 truncate">{variant.name}</p>
        <p className="text-xs text-gray-400 mb-3 line-clamp-1">{variant.description || "Variante du produit"}</p>
        <div className="flex gap-2">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-xl text-xs font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50"
          >
            <Upload className="w-3 h-3" />
            {hasImage ? "Remplacer" : "Uploader"}
          </button>
          {hasImage && (
            <button
              onClick={onRemove}
              disabled={uploading}
              className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
              title="Supprimer l'image"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }}
        />
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────
export default function ProduitsImagesPage() {
  const [families, setFamilies] = React.useState<Family[]>([]);
  const [activeFamilySlug, setActiveFamilySlug] = React.useState<string>("");
  const [heroImages, setHeroImages] = React.useState<HeroImage[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [uploadingHero, setUploadingHero] = React.useState<string | null>(null); // "new" or image id
  const [uploadingVariant, setUploadingVariant] = React.useState<string | null>(null); // variant id
  const [savingVariant, setSavingVariant] = React.useState(false);

  const activeFamily = families.find((f) => f.slug === activeFamilySlug);
  const variants: VariantItem[] = activeFamily?.variants ?? [];

  // Load families
  const loadFamilies = async () => {
    try {
      const res = await fetch("/api/product-families?all=true");
      const data = await res.json();
      if (data.success && data.families?.length) {
        const fams: Family[] = data.families;
        setFamilies(fams);
        if (!activeFamilySlug && fams.length > 0) {
          setActiveFamilySlug(fams[0].slug);
        }
      }
    } catch {
      toast.error("Erreur lors du chargement des familles");
    } finally {
      setLoading(false);
    }
  };

  // Load hero images for active family
  const loadHeroImages = async (slug: string) => {
    if (!slug) return;
    try {
      const res = await fetch(`/api/product-families/images?familySlug=${slug}`);
      const data = await res.json();
      if (data.success) setHeroImages(data.images || []);
    } catch {
      setHeroImages([]);
    }
  };

  React.useEffect(() => { loadFamilies(); }, []);
  React.useEffect(() => { if (activeFamilySlug) loadHeroImages(activeFamilySlug); }, [activeFamilySlug]);

  // ── Hero image actions ──────────────────────────────────

  const handleAddHeroImage = async (file: File) => {
    setUploadingHero("new");
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "product-heroes");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");

      const saveRes = await fetch("/api/product-families/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familySlug: activeFamilySlug, imageUrl, ordre: heroImages.length }),
      });
      if (!saveRes.ok) throw new Error("Sauvegarde échouée");

      // If first image, also set as imageUrl on the family
      if (heroImages.length === 0 && activeFamily) {
        await fetch("/api/product-families", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: activeFamily.id, imageUrl }),
        });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl } : f));
      }

      await loadHeroImages(activeFamilySlug);
      toast.success("Image ajoutée");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingHero(null);
    }
  };

  const handleReplaceHeroImage = async (image: HeroImage, file: File) => {
    setUploadingHero(image.id);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "product-heroes");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");

      // Delete old, create new at same position
      await fetch(`/api/product-families/images?id=${image.id}`, { method: "DELETE" });
      const saveRes = await fetch("/api/product-families/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familySlug: activeFamilySlug, imageUrl, ordre: image.ordre }),
      });
      if (!saveRes.ok) throw new Error("Sauvegarde échouée");

      // Update imageUrl on family if this was the first image
      if (image.ordre === 0 && activeFamily) {
        await fetch("/api/product-families", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: activeFamily.id, imageUrl }),
        });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl } : f));
      }

      await loadHeroImages(activeFamilySlug);
      toast.success("Image remplacée");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingHero(null);
    }
  };

  const handleDeleteHeroImage = async (image: HeroImage) => {
    try {
      await fetch(`/api/product-families/images?id=${image.id}`, { method: "DELETE" });

      // If was the first image and there are others, update imageUrl on family
      if (image.ordre === 0 && activeFamily) {
        const remaining = heroImages.filter((i) => i.id !== image.id);
        const newFirst = remaining.sort((a, b) => a.ordre - b.ordre)[0];
        await fetch("/api/product-families", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: activeFamily.id, imageUrl: newFirst?.imageUrl ?? null }),
        });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl: newFirst?.imageUrl } : f));
      }

      await loadHeroImages(activeFamilySlug);
      toast.success("Image supprimée");
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  // ── Variant image actions ───────────────────────────────

  const saveVariants = async (updatedVariants: VariantItem[]) => {
    if (!activeFamily) return;
    setSavingVariant(true);
    try {
      await fetch("/api/product-families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: activeFamily.id, variants: updatedVariants }),
      });
      setFamilies((prev) =>
        prev.map((f) => f.id === activeFamily.id ? { ...f, variants: updatedVariants } : f)
      );
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSavingVariant(false);
    }
  };

  const handleVariantImageUpload = async (variant: VariantItem, file: File) => {
    setUploadingVariant(variant.id);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "product-variants");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");

      const updatedVariants = variants.map((v) =>
        v.id === variant.id ? { ...v, imageUrl } : v
      );
      await saveVariants(updatedVariants);
      toast.success("Photo du modèle mise à jour");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingVariant(null);
    }
  };

  const handleVariantImageRemove = async (variant: VariantItem) => {
    const updatedVariants = variants.map((v) =>
      v.id === variant.id ? { ...v, imageUrl: undefined } : v
    );
    await saveVariants(updatedVariants);
    toast.success("Image supprimée");
  };

  // Count configured images per family for badges
  const getHeroCount = (slug: string) => {
    // We don't have per-family hero counts loaded, show 0/? based on imageUrl
    const fam = families.find((f) => f.slug === slug);
    return fam?.imageUrl ? 1 : 0;
  };

  const getVariantImageCount = (fam: Family) => {
    return (fam.variants ?? []).filter((v) => v.imageUrl).length;
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
        <div className="flex items-center gap-4">
          <Link
            href="/admin/produits"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Images des familles de produits</h1>
            <p className="text-gray-500 mt-1">
              Gérez le carrousel hero et les photos de chaque modèle
            </p>
          </div>
        </div>
        <button
          onClick={() => { setLoading(true); loadFamilies().then(() => loadHeroImages(activeFamilySlug)); }}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      {/* Family tabs */}
      {families.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Aucune famille de produits trouvée.</p>
          <Link href="/admin/produits/familles" className="text-cyan-600 text-sm mt-2 inline-block hover:underline">
            Créer des familles →
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {families.map((fam) => {
              const heroCount = getHeroCount(fam.slug);
              const variantCount = getVariantImageCount(fam);
              const totalConfigured = heroCount + variantCount;
              const totalSlots = 1 + (fam.variants?.length ?? 0);
              return (
                <button
                  key={fam.id}
                  onClick={() => setActiveFamilySlug(fam.slug)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                    activeFamilySlug === fam.slug
                      ? "bg-navy-dark text-white border-navy-dark shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                >
                  {/* Miniature */}
                  <div className="w-6 h-6 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    {fam.imageUrl ? (
                      <img src={fam.imageUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-dark/50 to-blue-corporate/50 flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">{fam.nom.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  {fam.nom}
                  {!fam.active && (
                    <span className="text-[10px] opacity-60">(inactif)</span>
                  )}
                  {totalConfigured > 0 && (
                    <span className={cn(
                      "text-xs px-1.5 py-0.5 rounded-full font-semibold",
                      activeFamilySlug === fam.slug
                        ? "bg-white/20 text-white"
                        : "bg-cyan-100 text-cyan-700"
                    )}>
                      {totalConfigured}/{totalSlots}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active family content */}
          {activeFamily && (
            <div className="space-y-10">

              {/* ── Section 1: Hero carousel ── */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                    <Film className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Carrousel hero</h2>
                    <p className="text-xs text-gray-500">
                      Ces images forment le diaporama pleine page sur <code className="bg-gray-100 px-1 rounded">/produits/{activeFamily.slug}</code>.
                      La première est aussi la miniature dans la liste.
                    </p>
                  </div>
                </div>

                {heroImages.length === 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AddHeroCard uploading={uploadingHero === "new"} onAdd={handleAddHeroImage} />
                    {/* Placeholder slots */}
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 aspect-video flex items-center justify-center"
                      >
                        <div className="text-center text-gray-300">
                          <ImageIcon className="w-8 h-8 mx-auto mb-1" />
                          <p className="text-xs">Image {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {heroImages
                      .sort((a, b) => a.ordre - b.ordre)
                      .map((img, idx) => (
                        <HeroImageCard
                          key={img.id}
                          image={img}
                          index={idx}
                          uploading={uploadingHero === img.id}
                          onReplace={(file) => handleReplaceHeroImage(img, file)}
                          onDelete={() => handleDeleteHeroImage(img)}
                        />
                      ))}
                    <AddHeroCard uploading={uploadingHero === "new"} onAdd={handleAddHeroImage} />
                  </div>
                )}

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-700 mt-4">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" />
                  <span>
                    Conseil : ajoutez 3 à 5 photos de haute qualité (min. 1920×1080px) pour un effet optimal sur le carrousel.
                    La première image est prioritaire.
                  </span>
                </div>
              </div>

              {/* ── Section 2: Variant images ── */}
              {variants.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                        <LayoutGrid className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Photos des modèles</h2>
                        <p className="text-xs text-gray-500">
                          Une photo par variante — affichée comme mini-hero sur la page produit.
                        </p>
                      </div>
                    </div>
                    {savingVariant && (
                      <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Sauvegarde...
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {variants.map((variant) => (
                      <VariantImageCard
                        key={variant.id}
                        variant={variant}
                        uploading={uploadingVariant === variant.id}
                        onUpload={(file) => handleVariantImageUpload(variant, file)}
                        onRemove={() => handleVariantImageRemove(variant)}
                      />
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/admin/produits/familles"
                      className="text-xs text-gray-400 hover:text-cyan-600 transition-colors"
                    >
                      Gérer les noms et descriptions des modèles dans Familles de produits →
                    </Link>
                  </div>
                </div>
              )}

              {variants.length === 0 && (
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center">
                  <LayoutGrid className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm mb-2">Aucune variante configurée pour cette famille.</p>
                  <Link
                    href="/admin/produits/familles"
                    className="text-cyan-600 text-sm hover:underline"
                  >
                    Ajouter des variantes dans la gestion des familles →
                  </Link>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Tips */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
        <div>
          Images compressées automatiquement (max 1920px, qualité 85%). Badge vert = image personnalisée,
          badge orange = image par défaut.{" "}
          <span className="text-gray-400">
            Les modifications sont appliquées immédiatement sur le site.
          </span>
        </div>
      </div>
    </div>
  );
}
