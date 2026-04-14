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
  Save,
  Grid3X3,
  Edit3,
  X,
} from "lucide-react";
import { ConfirmDialog } from "@/components/admin/ui/Modal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ConfirmDialog } from "@/components/admin/ui/Modal";

// ── Client-side compression ──────────────────────────────
async function compressImage(file: File, maxWidth = 1920, quality = 0.85): Promise<File> {
  if (file.type === "image/svg+xml" || file.size < 500 * 1024) return file;
  return new Promise((resolve) => {
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(file); return; }
          const c = new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg", lastModified: Date.now() });
          resolve(c.size < file.size ? c : file);
        },
        "image/jpeg", quality
      );
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

// ── Types ────────────────────────────────────────────────
interface HeroImage { id: string; imageUrl: string; alt?: string | null; ordre: number; }
interface VariantItem {
  id: string; name: string; description?: string;
  features?: string[]; imageUrl?: string; images?: string[]; startingPrice?: string;
}
interface Family { id: string; nom: string; slug: string; imageUrl?: string; active: boolean; variants?: VariantItem[]; }
interface SiteImageEntry {
  key: string; label: string; description: string;
  imageUrl: string | null; fallbackUrl: string; url: string;
}

// ── Vignettes catalogue config ────────────────────────────
const VIGNETTE_KEYS: { key: string; label: string; slug: string }[] = [
  { key: "product-garde-corps", label: "Garde-corps", slug: "garde-corps" },
  { key: "product-escaliers", label: "Escaliers", slug: "escaliers" },
  { key: "product-portails", label: "Portails", slug: "portails" },
  { key: "product-clotures", label: "Clôtures", slug: "clotures" },
  { key: "product-marquises", label: "Marquises", slug: "marquises" },
  { key: "product-portes", label: "Portes", slug: "portes" },
  { key: "product-fenetres", label: "Fenêtres", slug: "fenetres" },
  { key: "product-verrieres", label: "Verrières", slug: "verrieres" },
  { key: "product-grilles", label: "Grilles de ventilation", slug: "grilles-ventilation" },
];

// ── Vignette Card (same pattern as Paramètres > Images) ──
function VignetteCard({
  entry,
  uploading,
  onUpload,
  onRemove,
}: {
  entry: SiteImageEntry;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const isCustom = !!entry.imageUrl;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image src={entry.url} alt={entry.label} fill className="object-cover" onError={() => {}} />
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}
        <div className={cn(
          "absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-semibold",
          isCustom ? "bg-green-500/90 text-white" : "bg-orange-400/90 text-white"
        )}>
          {isCustom ? "✓ Personnalisée" : "Défaut"}
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm mb-0.5">{entry.label}</p>
        <p className="text-xs text-gray-400 mb-3">Vignette sur la page /produits</p>
        <div className="flex gap-2">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-xl text-xs font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50"
          >
            <Upload className="w-3 h-3" />
            {isCustom ? "Remplacer" : "Uploader"}
          </button>
          {isCustom && (
            <button onClick={onRemove} disabled={uploading} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-[9px] text-gray-300 mt-1.5 font-mono">{entry.key}</p>
        <input ref={fileRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }} />
      </div>
    </div>
  );
}

// ── Hero Image Card ───────────────────────────────────────
function HeroImageCard({ image, index, uploading, onReplace, onDelete }: {
  image: HeroImage; index: number; uploading: boolean;
  onReplace: (file: File) => void; onDelete: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image src={image.imageUrl} alt={`Image hero ${index + 1}`} fill className="object-cover" onError={() => {}} />
        {uploading && <div className="absolute inset-0 bg-black/50 flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-white" /></div>}
        <span className={cn("absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-semibold", index === 0 ? "bg-cyan-500 text-white" : "bg-white/90 text-gray-700 shadow-sm")}>
          {index === 0 ? "Principale" : `Image ${index + 1}`}
        </span>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm mb-1">{index === 0 ? "Image principale du carrousel" : `Image carrousel ${index + 1}`}</p>
        <p className="text-xs text-gray-400 mb-3">{index === 0 ? "Aussi la miniature dans la liste admin" : "Diapositive du carrousel hero"}</p>
        <div className="flex gap-2">
          <button onClick={() => fileRef.current?.click()} disabled={uploading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-xl text-xs font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50">
            <Upload className="w-3 h-3" /> Remplacer
          </button>
          <button onClick={onDelete} disabled={uploading} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onReplace(f); e.target.value = ""; }} />
      </div>
    </div>
  );
}

// ── Add Hero Image Card ───────────────────────────────────
function AddHeroCard({ uploading, onAdd }: { uploading: boolean; onAdd: (file: File) => void }) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div onClick={() => !uploading && fileRef.current?.click()}
      className={cn("bg-white rounded-2xl border-2 border-dashed overflow-hidden transition-all cursor-pointer",
        uploading ? "border-cyan-300 bg-cyan-50" : "border-gray-200 hover:border-cyan-400 hover:bg-cyan-50/30")}>
      <div className="aspect-video flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-cyan-500 transition-colors p-4">
        {uploading ? <Loader2 className="w-8 h-8 animate-spin text-cyan-500" /> : (
          <><div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"><Plus className="w-6 h-6" /></div>
          <div className="text-center"><p className="text-sm font-medium">Ajouter une image</p><p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WebP — max 10 Mo</p></div></>
        )}
      </div>
      <input ref={fileRef} type="file" accept="image/*" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onAdd(f); e.target.value = ""; }} />
    </div>
  );
}

// ── Variant Editor Card (full: image + data + delete) ─────
function VariantEditorCard({
  variant,
  uploading,
  saving,
  onUpload,
  onRemoveImage,
  onRemoveImageByIndex,
  onSave,
  onDelete,
}: {
  variant: VariantItem;
  uploading: boolean;
  saving: boolean;
  onUpload: (file: File) => void;
  onRemoveImage: () => void;
  onRemoveImageByIndex: (index: number) => void;
  onSave: (updated: VariantItem) => void;
  onDelete: () => void;
}) {
  const addFileRef = React.useRef<HTMLInputElement>(null);
  const [editing, setEditing] = React.useState(false);
  const [name, setName] = React.useState(variant.name || "");
  const [description, setDescription] = React.useState(variant.description || "");
  const [features, setFeatures] = React.useState((variant.features ?? []).join("\n"));

  // Compute all images (prefer images[] array, fallback imageUrl)
  const allImages = variant.images?.length ? variant.images : (variant.imageUrl ? [variant.imageUrl] : []);

  // Keep form in sync when variant changes
  React.useEffect(() => {
    setName(variant.name || "");
    setDescription(variant.description || "");
    setFeatures((variant.features ?? []).join("\n"));
  }, [variant.name, variant.description, variant.features]);

  const handleSave = () => {
    onSave({ ...variant, name, description, features: features.split("\n").filter((f) => f.trim()) });
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Multi-image grid */}
      <div className="p-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Photos ({allImages.length})</span>
          <button
            onClick={() => addFileRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-500 text-white rounded-lg text-xs font-medium hover:bg-cyan-600 disabled:opacity-50 transition-colors"
          >
            {uploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Plus className="w-3 h-3" />}
            Ajouter
          </button>
        </div>

        {allImages.length === 0 ? (
          <div
            className="border-2 border-dashed border-gray-200 rounded-xl h-20 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-cyan-400 hover:bg-cyan-50/30 transition-all"
            onClick={() => addFileRef.current?.click()}
          >
            <ImageIcon className="w-5 h-5 text-gray-300" />
            <span className="text-xs text-gray-400">Cliquer pour ajouter une photo</span>
          </div>
        ) : (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {allImages.map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden group border border-gray-200 bg-gray-100">
                <Image src={img} alt="" fill className="object-contain" sizes="80px" />
                {i === 0 && (
                  <span className="absolute top-0.5 left-0.5 text-[9px] bg-cyan-500 text-white px-1.5 rounded-full font-semibold">Principale</span>
                )}
                <button
                  onClick={() => onRemoveImageByIndex(i)}
                  className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {/* Add more */}
            <button
              onClick={() => addFileRef.current?.click()}
              disabled={uploading}
              className="flex-shrink-0 w-20 h-16 rounded-lg border-2 border-dashed border-gray-200 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        )}
        <input ref={addFileRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }} />
      </div>

      {/* Data zone */}
      <div className="p-4">
        {!editing ? (
          <>
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{name || <span className="text-gray-400 italic">Sans nom</span>}</p>
                <p className="text-xs text-gray-400 line-clamp-2 mt-0.5">{description || "Aucune description"}</p>
              </div>
              <div className="flex gap-1 ml-2 flex-shrink-0">
                <button onClick={() => setEditing(true)} className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Modifier les données">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button onClick={onDelete} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Supprimer ce modèle">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            {(variant.features ?? []).length > 0 && (
              <div className="flex flex-wrap gap-1">
                {(variant.features ?? []).slice(0, 3).map((f) => (
                  <span key={f} className="text-[10px] px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-100">{f}</span>
                ))}
                {(variant.features ?? []).length > 3 && (
                  <span className="text-[10px] text-gray-400">+{(variant.features ?? []).length - 3}</span>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Nom *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                placeholder="Garde-corps Verre & Acier" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
                placeholder="Description courte du modèle..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Caractéristiques (une par ligne)</label>
              <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={3}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-cyan-300 outline-none resize-none font-mono"
                placeholder={"Verre 8+8 feuilleté\nMain courante acier\nFixations invisibles"} />
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={handleSave} disabled={saving || !name.trim()}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-lg text-xs font-medium hover:bg-cyan-700 disabled:opacity-50 transition-colors">
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                Sauvegarder
              </button>
              <button onClick={() => { setEditing(false); setName(variant.name || ""); setDescription(variant.description || ""); setFeatures((variant.features ?? []).join("\n")); }}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Page mode type ────────────────────────────────────────
type PageMode = "vignettes" | "familles";

// ── Main Page ─────────────────────────────────────────────
export default function ProduitsImagesPage() {
  const [pageMode, setPageMode] = React.useState<PageMode>("vignettes");

  // Vignettes state
  const [vignetteImages, setVignetteImages] = React.useState<Record<string, SiteImageEntry>>({});
  const [uploadingVignette, setUploadingVignette] = React.useState<string | null>(null);

  // Familles state
  const [families, setFamilies] = React.useState<Family[]>([]);
  const [activeFamilySlug, setActiveFamilySlug] = React.useState<string>("");
  const [heroImages, setHeroImages] = React.useState<HeroImage[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [uploadingHero, setUploadingHero] = React.useState<string | null>(null);
  const [uploadingVariant, setUploadingVariant] = React.useState<string | null>(null);
  const [savingVariant, setSavingVariant] = React.useState(false);
  const [confirmDeleteVariantId, setConfirmDeleteVariantId] = React.useState<string | null>(null);

  const activeFamily = families.find((f) => f.slug === activeFamilySlug);
  const variants: VariantItem[] = activeFamily?.variants ?? [];

  // ── Load vignettes ──────────────────────────────────────
  const loadVignettes = async () => {
    try {
      const res = await fetch("/api/site-images");
      if (!res.ok) return;
      const data = await res.json();
      const map: Record<string, SiteImageEntry> = {};
      (data.images || []).forEach((img: SiteImageEntry) => { map[img.key] = img; });
      setVignetteImages(map);
    } catch { /* ignore */ }
  };

  // ── Load families ───────────────────────────────────────
  const loadFamilies = async () => {
    try {
      const res = await fetch("/api/product-families?all=true");
      const data = await res.json();
      if (data.success && data.families?.length) {
        const fams: Family[] = data.families;
        setFamilies(fams);
        if (!activeFamilySlug && fams.length > 0) setActiveFamilySlug(fams[0].slug);
      }
    } catch { toast.error("Erreur lors du chargement des familles"); }
    finally { setLoading(false); }
  };

  const loadHeroImages = async (slug: string) => {
    if (!slug) return;
    try {
      const res = await fetch(`/api/product-families/images?familySlug=${slug}`);
      const data = await res.json();
      if (data.success) setHeroImages(data.images || []);
    } catch { setHeroImages([]); }
  };

  React.useEffect(() => { loadVignettes(); loadFamilies(); }, []);
  React.useEffect(() => { if (activeFamilySlug) loadHeroImages(activeFamilySlug); }, [activeFamilySlug]);

  // ── Vignette actions ────────────────────────────────────
  const handleVignetteUpload = async (key: string, file: File) => {
    setUploadingVignette(key);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "site-images");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");
      await fetch("/api/site-images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key, imageUrl }) });
      await loadVignettes();
      toast.success("Vignette mise à jour");
    } catch (err) { toast.error(err instanceof Error ? err.message : "Erreur upload"); }
    finally { setUploadingVignette(null); }
  };

  const handleVignetteRemove = async (key: string) => {
    try {
      await fetch("/api/site-images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key, imageUrl: null }) });
      await loadVignettes();
      toast.success("Image réinitialisée");
    } catch { toast.error("Erreur"); }
  };

  // ── Hero actions ────────────────────────────────────────
  const handleAddHeroImage = async (file: File) => {
    setUploadingHero("new");
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed); fd.append("folder", "product-heroes");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");
      const saveRes = await fetch("/api/product-families/images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ familySlug: activeFamilySlug, imageUrl, ordre: heroImages.length }) });
      if (!saveRes.ok) throw new Error("Sauvegarde échouée");
      if (heroImages.length === 0 && activeFamily) {
        await fetch("/api/product-families", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: activeFamily.id, imageUrl }) });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl } : f));
      }
      await loadHeroImages(activeFamilySlug);
      toast.success("Image ajoutée");
    } catch (err) { toast.error(err instanceof Error ? err.message : "Erreur upload"); }
    finally { setUploadingHero(null); }
  };

  const handleReplaceHeroImage = async (image: HeroImage, file: File) => {
    setUploadingHero(image.id);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed); fd.append("folder", "product-heroes");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");
      await fetch(`/api/product-families/images?id=${image.id}`, { method: "DELETE" });
      await fetch("/api/product-families/images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ familySlug: activeFamilySlug, imageUrl, ordre: image.ordre }) });
      if (image.ordre === 0 && activeFamily) {
        await fetch("/api/product-families", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: activeFamily.id, imageUrl }) });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl } : f));
      }
      await loadHeroImages(activeFamilySlug);
      toast.success("Image remplacée");
    } catch (err) { toast.error(err instanceof Error ? err.message : "Erreur upload"); }
    finally { setUploadingHero(null); }
  };

  const handleDeleteHeroImage = async (image: HeroImage) => {
    try {
      await fetch(`/api/product-families/images?id=${image.id}`, { method: "DELETE" });
      if (image.ordre === 0 && activeFamily) {
        const remaining = heroImages.filter((i) => i.id !== image.id);
        const newFirst = remaining.sort((a, b) => a.ordre - b.ordre)[0];
        await fetch("/api/product-families", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: activeFamily.id, imageUrl: newFirst?.imageUrl ?? null }) });
        setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, imageUrl: newFirst?.imageUrl } : f));
      }
      await loadHeroImages(activeFamilySlug);
      toast.success("Image supprimée");
    } catch { toast.error("Erreur lors de la suppression"); }
  };

  // ── Variant actions ─────────────────────────────────────
  const saveVariants = async (updatedVariants: VariantItem[]) => {
    if (!activeFamily) return;
    setSavingVariant(true);
    try {
      await fetch("/api/product-families", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: activeFamily.id, variants: updatedVariants }) });
      setFamilies((prev) => prev.map((f) => f.id === activeFamily.id ? { ...f, variants: updatedVariants } : f));
    } catch { toast.error("Erreur lors de la sauvegarde"); }
    finally { setSavingVariant(false); }
  };

  const handleVariantImageUpload = async (variant: VariantItem, file: File) => {
    setUploadingVariant(variant.id);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed); fd.append("folder", "product-variants");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Upload échoué");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url || upData.url || upData.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");
      // Add to images array (multi-image support)
      const existingImages = variant.images ?? (variant.imageUrl ? [variant.imageUrl] : []);
      const newImages = [...existingImages, imageUrl];
      await saveVariants(variants.map((v) => v.id === variant.id ? { ...v, images: newImages, imageUrl: newImages[0] } : v));
      toast.success("Photo ajoutée");
    } catch (err) { toast.error(err instanceof Error ? err.message : "Erreur upload"); }
    finally { setUploadingVariant(null); }
  };

  const handleVariantImageRemoveByIndex = async (variant: VariantItem, index: number) => {
    const existingImages = variant.images ?? (variant.imageUrl ? [variant.imageUrl] : []);
    const newImages = existingImages.filter((_, i) => i !== index);
    await saveVariants(variants.map((v) => v.id === variant.id ? { ...v, images: newImages, imageUrl: newImages[0] ?? undefined } : v));
    toast.success("Image supprimée");
  };

  const handleVariantImageRemove = async (variant: VariantItem) => {
    await saveVariants(variants.map((v) => v.id === variant.id ? { ...v, imageUrl: undefined, images: [] } : v));
    toast.success("Image supprimée");
  };

  const handleVariantSave = async (updated: VariantItem) => {
    await saveVariants(variants.map((v) => v.id === updated.id ? updated : v));
    toast.success("Modèle mis à jour");
  };

  const handleVariantDelete = async (id: string) => {
    await saveVariants(variants.filter((v) => v.id !== id));
    toast.success("Modèle supprimé");
  };

  const handleVariantAdd = async () => {
    const newVariant: VariantItem = {
      id: `variant-${Date.now()}`,
      name: "Nouveau modèle",
      description: "",
      features: [],
    };
    await saveVariants([...variants, newVariant]);
    toast.success("Modèle ajouté — modifiez ses informations ci-dessous");
  };

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-cyan-500" /></div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/produits" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Images — Catalogue produits</h1>
            <p className="text-gray-500 mt-1">Gérez toutes les images produits de A à Z</p>
          </div>
        </div>
        <button onClick={() => { loadVignettes(); loadFamilies().then(() => loadHeroImages(activeFamilySlug)); }}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <RefreshCw className="w-4 h-4" /> Actualiser
        </button>
      </div>

      {/* Mode tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setPageMode("vignettes")}
          className={cn("inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all", pageMode === "vignettes" ? "bg-white text-navy-dark shadow-sm" : "text-gray-500 hover:text-gray-700")}
        >
          <Grid3X3 className="w-4 h-4" />
          Vignettes catalogue
        </button>
        <button
          onClick={() => setPageMode("familles")}
          className={cn("inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all", pageMode === "familles" ? "bg-white text-navy-dark shadow-sm" : "text-gray-500 hover:text-gray-700")}
        >
          <LayoutGrid className="w-4 h-4" />
          Hero + Modèles par famille
        </button>
      </div>

      {/* ══ MODE: VIGNETTES ══ */}
      {pageMode === "vignettes" && (
        <div className="space-y-5">
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 text-sm text-amber-700">
            <Grid3X3 className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
            <div>
              <strong>Vignettes de la page /produits</strong> — Ces images s'affichent sur les cartes de la page catalogue principale. Badge orange = image par défaut (Unsplash), badge vert = image personnalisée.
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VIGNETTE_KEYS.map(({ key, label }) => {
              const entry = vignetteImages[key] ?? {
                key, label, description: `Vignette ${label}`,
                imageUrl: null, fallbackUrl: "", url: `https://via.placeholder.com/800x450/1e3a5f/ffffff?text=${encodeURIComponent(label)}`,
              };
              return (
                <VignetteCard
                  key={key}
                  entry={entry}
                  uploading={uploadingVignette === key}
                  onUpload={(f) => handleVignetteUpload(key, f)}
                  onRemove={() => handleVignetteRemove(key)}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ══ MODE: HERO + MODÈLES ══ */}
      {pageMode === "familles" && (
        <>
          {families.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Aucune famille trouvée.</p>
              <Link href="/admin/produits/familles" className="text-cyan-600 text-sm mt-2 inline-block hover:underline">Créer des familles →</Link>
            </div>
          ) : (
            <>
              {/* Family tabs */}
              <div className="flex flex-wrap gap-2">
                {families.map((fam) => {
                  const variantCount = (fam.variants ?? []).filter((v) => v.imageUrl).length;
                  const totalV = fam.variants?.length ?? 0;
                  return (
                    <button key={fam.id} onClick={() => setActiveFamilySlug(fam.slug)}
                      className={cn("inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                        activeFamilySlug === fam.slug ? "bg-navy-dark text-white border-navy-dark shadow-md" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50")}>
                      <div className="w-6 h-6 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        {fam.imageUrl ? <img src={fam.imageUrl} alt="" className="w-full h-full object-cover" /> :
                          <div className="w-full h-full bg-gradient-to-br from-navy-dark/50 to-blue-corporate/50 flex items-center justify-center"><span className="text-white text-[8px] font-bold">{fam.nom.charAt(0)}</span></div>}
                      </div>
                      {fam.nom}
                      {!fam.active && <span className="text-[10px] opacity-60">(inactif)</span>}
                      {totalV > 0 && (
                        <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-semibold",
                          activeFamilySlug === fam.slug ? "bg-white/20 text-white" : "bg-cyan-100 text-cyan-700")}>
                          {variantCount}/{totalV}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {activeFamily && (
                <div className="space-y-10">
                  {/* Hero carousel */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                        <Film className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Carrousel hero</h2>
                        <p className="text-xs text-gray-500">Diaporama pleine page sur <code className="bg-gray-100 px-1 rounded">/produits/{activeFamily.slug}</code>. La 1ère est aussi la miniature.</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {heroImages.sort((a, b) => a.ordre - b.ordre).map((img, idx) => (
                        <HeroImageCard key={img.id} image={img} index={idx} uploading={uploadingHero === img.id}
                          onReplace={(f) => handleReplaceHeroImage(img, f)} onDelete={() => handleDeleteHeroImage(img)} />
                      ))}
                      <AddHeroCard uploading={uploadingHero === "new"} onAdd={handleAddHeroImage} />
                      {heroImages.length === 0 && [1, 2].map((i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 aspect-video flex items-center justify-center">
                          <div className="text-center text-gray-300"><ImageIcon className="w-8 h-8 mx-auto mb-1" /><p className="text-xs">Image {i + 1}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Variants / models editor */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                          <LayoutGrid className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900">Modèles / Sous-familles</h2>
                          <p className="text-xs text-gray-500">Gérez les données et photos de chaque modèle. Cliquez sur ✏ pour modifier.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {savingVariant && <div className="inline-flex items-center gap-2 text-xs text-gray-500"><Loader2 className="w-3 h-3 animate-spin" /> Sauvegarde...</div>}
                        <button onClick={handleVariantAdd}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-500 text-white rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors">
                          <Plus className="w-4 h-4" /> Ajouter un modèle
                        </button>
                      </div>
                    </div>

                    {variants.length === 0 ? (
                      <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-10 text-center">
                        <LayoutGrid className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 text-sm mb-4">Aucun modèle configuré pour cette famille.</p>
                        <button onClick={handleVariantAdd}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors">
                          <Plus className="w-4 h-4" /> Créer le premier modèle
                        </button>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {variants.map((variant) => (
                          <VariantEditorCard
                            key={variant.id}
                            variant={variant}
                            uploading={uploadingVariant === variant.id}
                            saving={savingVariant}
                            onUpload={(f) => handleVariantImageUpload(variant, f)}
                            onRemoveImage={() => handleVariantImageRemove(variant)}
                            onRemoveImageByIndex={(idx) => handleVariantImageRemoveByIndex(variant, idx)}
                            onSave={handleVariantSave}
                            onDelete={() => setConfirmDeleteVariantId(variant.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* Tips */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
        <div>
          Images compressées automatiquement (max 1920px, qualité 85%). Modifications appliquées immédiatement.
        </div>
      </div>

      <ConfirmDialog
        isOpen={!!confirmDeleteVariantId}
        onClose={() => setConfirmDeleteVariantId(null)}
        onConfirm={() => { if (confirmDeleteVariantId) handleVariantDelete(confirmDeleteVariantId); setConfirmDeleteVariantId(null); }}
        title="Supprimer le modèle"
        message="Supprimer ce modèle ? Cette action est irréversible."
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}
