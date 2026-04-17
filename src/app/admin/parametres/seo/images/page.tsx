"use client";

import * as React from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Loader2,
  RefreshCw,
  Check,
  Info,
  DoorOpen,
  TrendingUp,
  Fence,
  Flame,
  LayoutGrid,
  Wind,
  Square,
  ArrowUpRight,
  Sun,
  Shield,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ── Compression côté client (copié de /admin/parametres/images) ───
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
      canvas.toBlob((blob) => {
        if (!blob) { resolve(file); return; }
        const c = new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg", lastModified: Date.now() });
        resolve(c.size < file.size ? c : file);
      }, "image/jpeg", quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

// ── Structure par famille produit ─────────────────────────────────
type Slot = { key: string; label: string; description: string };
type Family = {
  id: string;
  label: string;
  icon: LucideIcon;
  mainSlot: Slot;
  subSlots?: Slot[];
};

const FAMILIES: Family[] = [
  {
    id: "garde-corps",
    label: "Garde-corps",
    icon: Shield,
    mainSlot: {
      key: "product-garde-corps",
      label: "Hero principal — Garde-corps",
      description: "Photo utilisée sur /garde-corps/[dept]/[ville] et toutes les variantes segments. Format paysage recommandé (16:9 ou 4:3), min 1600px de large.",
    },
    subSlots: [
      {
        key: "product-garde-corps-verre",
        label: "Sous-produit — Garde-corps verre",
        description: "Photo dédiée pour /garde-corps-verre/[dept]/[ville]. Si vide, hérite du hero principal.",
      },
    ],
  },
  {
    id: "escaliers",
    label: "Escaliers",
    icon: TrendingUp,
    mainSlot: {
      key: "product-escaliers",
      label: "Hero principal — Escaliers",
      description: "Photo utilisée sur /escaliers/[dept]/[ville] et variantes segments.",
    },
    subSlots: [
      {
        key: "product-escalier-helicoidal",
        label: "Sous-produit — Escalier hélicoïdal",
        description: "Photo dédiée pour /escalier-helicoidal/[dept]/[ville]. Si vide, hérite du hero principal.",
      },
    ],
  },
  {
    id: "portails",
    label: "Portails",
    icon: Fence,
    mainSlot: {
      key: "product-portails",
      label: "Hero principal — Portails",
      description: "Photo utilisée sur /portails/[dept]/[ville] et variantes segments.",
    },
    subSlots: [
      {
        key: "product-portail-coulissant",
        label: "Sous-produit — Portail coulissant",
        description: "Photo dédiée pour /portail-coulissant/[dept]/[ville]. Si vide, hérite du hero principal.",
      },
      {
        key: "product-portail-autoportant",
        label: "Sous-produit — Portail autoportant",
        description: "Photo dédiée pour /portail-autoportant/[dept]/[ville]. Si vide, hérite du hero principal.",
      },
    ],
  },
  {
    id: "clotures",
    label: "Clôtures",
    icon: Fence,
    mainSlot: {
      key: "product-clotures",
      label: "Hero principal — Clôtures",
      description: "Photo utilisée sur /clotures/[dept]/[ville] et variantes segments.",
    },
  },
  {
    id: "portes",
    label: "Portes",
    icon: DoorOpen,
    mainSlot: {
      key: "product-portes",
      label: "Hero principal — Portes",
      description: "Photo utilisée sur /portes/[dept]/[ville] et variantes segments.",
    },
  },
  {
    id: "fenetres",
    label: "Fenêtres",
    icon: Square,
    mainSlot: {
      key: "product-fenetres",
      label: "Hero principal — Fenêtres",
      description: "Photo utilisée sur /fenetres/[dept]/[ville] et variantes segments.",
    },
  },
  {
    id: "verrieres",
    label: "Verrières",
    icon: LayoutGrid,
    mainSlot: {
      key: "product-verrieres",
      label: "Hero principal — Verrières",
      description: "Photo utilisée sur /verrieres/[dept]/[ville] et variantes segments.",
    },
    subSlots: [
      {
        key: "product-verriere-atelier",
        label: "Sous-produit — Verrière atelier",
        description: "Photo dédiée pour /verriere-atelier/[dept]/[ville]. Si vide, hérite du hero principal.",
      },
    ],
  },
  {
    id: "pergolas",
    label: "Pergolas",
    icon: Sun,
    mainSlot: {
      key: "product-pergolas",
      label: "Hero principal — Pergolas",
      description: "Photo utilisée sur /pergolas/[dept]/[ville] et variantes segments.",
    },
  },
  {
    id: "marquises",
    label: "Marquises",
    icon: ArrowUpRight,
    mainSlot: {
      key: "product-marquises",
      label: "Hero principal — Marquises",
      description: "Photo utilisée sur /marquises/[dept]/[ville] et variantes segments.",
    },
  },
  {
    id: "grilles-ventilation",
    label: "Grilles ventilation",
    icon: Wind,
    mainSlot: {
      key: "product-grilles",
      label: "Hero principal — Grilles",
      description: "Photo utilisée sur /grilles-ventilation/[dept]/[ville] (clé legacy alignée).",
    },
  },
  {
    id: "thermolaquage",
    label: "Thermolaquage",
    icon: Flame,
    mainSlot: {
      key: "product-thermolaquage",
      label: "Hero principal — Thermolaquage",
      description: "Photo utilisée sur /services/thermolaquage/[dept]/[ville] (pages SEO).",
    },
  },
];

// ── Types ─────────────────────────────────────────────────────────
type SiteImageRow = {
  key: string;
  imageUrl: string | null;
  fallbackUrl: string;
  updatedAt: Date | null;
};

// ── Slot card (upload / preview / remove) ─────────────────────────
function SlotCard({
  slot,
  row,
  uploading,
  onUpload,
  onRemove,
}: {
  slot: Slot;
  row: SiteImageRow | undefined;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const url = row?.imageUrl || null;
  const customized = !!url;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-cyan-300 transition-colors">
      <div className="relative aspect-[16/10] bg-gray-50 group">
        {url ? (
          <Image src={url} alt={slot.label} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
            <Upload className="w-10 h-10 mb-2" />
            <p className="text-xs">Pas encore d&apos;image</p>
          </div>
        )}
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-navy-dark rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors disabled:opacity-60"
          >
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {url ? "Remplacer" : "Uploader"}
          </button>
          {url && (
            <button
              onClick={onRemove}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Retirer
            </button>
          )}
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider",
              customized ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
            )}
          >
            {customized ? (
              <>
                <Check className="w-3 h-3" /> Perso
              </>
            ) : (
              "Défaut"
            )}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-navy-dark text-sm mb-1">{slot.label}</p>
        <p className="text-xs text-gray-500 leading-relaxed mb-2">{slot.description}</p>
        <p className="text-[10px] text-gray-400 font-mono">
          {slot.key}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onUpload(file);
          if (inputRef.current) inputRef.current.value = "";
        }}
      />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function SEOImagesPage() {
  const [activeFamily, setActiveFamily] = React.useState<string>(FAMILIES[0].id);
  const [rows, setRows] = React.useState<Record<string, SiteImageRow>>({});
  const [loading, setLoading] = React.useState(true);
  const [uploading, setUploading] = React.useState<string | null>(null);

  const loadImages = React.useCallback(async () => {
    try {
      const res = await fetch("/api/site-images");
      if (!res.ok) return;
      const data = await res.json();
      const map: Record<string, SiteImageRow> = {};
      for (const cat of Object.values(data.images ?? {}) as Array<Array<SiteImageRow>>) {
        for (const img of cat) {
          map[img.key] = img;
        }
      }
      setRows(map);
    } catch (e) {
      console.error("Load images error:", e);
      toast.error("Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleUpload = async (key: string, file: File) => {
    setUploading(key);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "site-images");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Erreur upload");
      const upData = await upRes.json();
      const imageUrl = upData.files?.[0]?.url;
      if (!imageUrl) throw new Error("Pas d'URL retournée");
      const saveRes = await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, imageUrl }),
      });
      if (!saveRes.ok) throw new Error("Erreur sauvegarde");
      await loadImages();
      toast.success("Image uploadée — elle apparaîtra sur les pages SEO dans ~7 jours (ISR cache) ou instantanément après purge.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally {
      setUploading(null);
    }
  };

  const handleRemove = async (key: string) => {
    try {
      await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, imageUrl: null }),
      });
      await loadImages();
      toast.success("Image retirée — fallback sur visual généré");
    } catch {
      toast.error("Erreur");
    }
  };

  const family = FAMILIES.find((f) => f.id === activeFamily)!;
  const allSlots = [family.mainSlot, ...(family.subSlots ?? [])];
  const customizedCount = FAMILIES.reduce((acc, f) => {
    const keys = [f.mainSlot.key, ...(f.subSlots?.map((s) => s.key) ?? [])];
    return acc + keys.filter((k) => rows[k]?.imageUrl).length;
  }, 0);
  const totalSlots = FAMILIES.reduce((acc, f) => acc + 1 + (f.subSlots?.length ?? 0), 0);

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
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Images SEO — Pages géolocalisées</h1>
          <p className="text-gray-500 mt-1">
            Uploade une photo par produit : elle sera utilisée sur les ~280 000 pages SEO dept/ville.
            Les sous-produits héritent du parent si aucune photo dédiée.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            <span className="font-bold text-emerald-600">{customizedCount}</span> / {totalSlots} personnalisées
          </span>
          <button
            onClick={() => {
              setLoading(true);
              loadImages();
            }}
            className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" /> Actualiser
          </button>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900">
        <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Comment ça marche :</strong> chaque photo uploadée ici est utilisée automatiquement
          sur toutes les pages SEO de la famille (produit × dept × ville + segments).
          <br />
          <strong>Format recommandé :</strong> paysage 16:9 ou 4:3, min 1600px de large, poids &lt; 500 Ko.
          Si aucune photo n&apos;est uploadée, un visuel généré (gradient magazine-cover) s&apos;affiche automatiquement.
          <br />
          <strong>Délai de mise à jour :</strong> ISR cache 7 jours. Pour forcer la propagation immédiate,
          utilise l&apos;endpoint <code className="px-1 bg-white rounded text-[11px]">/api/admin/revalidate-seo</code>.
        </div>
      </div>

      {/* Family tabs */}
      <div className="flex flex-wrap gap-2">
        {FAMILIES.map((f) => {
          const Icon = f.icon;
          const keys = [f.mainSlot.key, ...(f.subSlots?.map((s) => s.key) ?? [])];
          const count = keys.filter((k) => rows[k]?.imageUrl).length;
          const total = keys.length;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFamily(f.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                activeFamily === f.id
                  ? "bg-navy-dark text-white border-navy-dark shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              <Icon className="w-4 h-4" />
              {f.label}
              {count > 0 && (
                <span
                  className={cn(
                    "text-xs px-1.5 py-0.5 rounded-full font-semibold",
                    activeFamily === f.id ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
                  )}
                >
                  {count}/{total}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Slots grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allSlots.map((slot) => (
          <SlotCard
            key={slot.key}
            slot={slot}
            row={rows[slot.key]}
            uploading={uploading === slot.key}
            onUpload={(f) => handleUpload(slot.key, f)}
            onRemove={() => handleRemove(slot.key)}
          />
        ))}
      </div>
    </div>
  );
}
