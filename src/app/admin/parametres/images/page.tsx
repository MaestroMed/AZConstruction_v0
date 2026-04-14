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
  Save,
  FileText,
  User,
  MapPin,
  Home,
  Users,
  Building2,
  Flame,
  Phone,
  Globe,
  Share2,
  Plus,
  Video,
  Play,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ── Compression côté client ────────────────────────────────
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

// ── Mapping page → image keys ──────────────────────────────
const PAGE_TABS = [
  {
    id: "identite",
    label: "Identité",
    icon: Globe,
    description: "Logo, favicon, image de partage",
    keys: [],
  },
  {
    id: "accueil",
    label: "Accueil",
    icon: Home,
    description: "Images de la page d'accueil",
    keys: ["hero-homepage", "hero-carousel-1", "hero-carousel-2", "hero-carousel-3"],
  },
  {
    id: "particuliers",
    label: "Particuliers",
    icon: Home,
    description: "Page Particuliers",
    keys: ["hero-particuliers", "product-garde-corps", "product-escaliers", "product-portes", "product-grilles", "page-atelier"],
  },
  {
    id: "professionnels",
    label: "Professionnels",
    icon: Building2,
    description: "Page Professionnels",
    keys: [
      "hero-professionnels",
      "realisation-b2b-1", "realisation-b2b-2", "realisation-b2b-3",
      "sector-btp", "sector-architecte", "sector-artisan", "sector-industrie",
    ],
  },
  {
    id: "thermolaquage",
    label: "Thermolaquage",
    icon: Flame,
    description: "Page Thermolaquage",
    keys: ["hero-thermolaquage", "thermolaquage-process", "thermolaquage-applications"],
  },
  {
    id: "apropos",
    label: "À propos",
    icon: Users,
    description: "Page À propos et équipe",
    keys: ["hero-a-propos", "page-equipe", "team-member-1", "team-member-2", "team-member-3", "team-member-4"],
  },
  {
    id: "contact",
    label: "Contact",
    icon: Phone,
    description: "Page Contact",
    keys: ["hero-contact"],
  },
  {
    id: "global",
    label: "Global",
    icon: ImageIcon,
    description: "Produits, processus",
    keys: [
      "product-portails", "product-clotures", "product-pergolas", "product-marquises",
      "product-fenetres", "product-verrieres", "product-grilles",
      "process-consultation", "process-devis", "process-fabrication", "process-installation",
    ],
  },
  {
    id: "partenaires",
    label: "Logos Partenaires",
    icon: Share2,
    description: "Logos des partenaires et fournisseurs",
    keys: [
      "partner-jansen", "partner-bouygues", "partner-vinci", "partner-eiffage",
      "partner-saint-gobain", "partner-demathieu-bard", "partner-spie-batignolles",
      "partner-rabot-dutilleul", "partner-urbaine-travaux",
    ],
  },
];

// ── B2B card keys ──────────────────────────────────────────
const B2B_IMAGE_KEYS: Record<string, number> = {
  "realisation-b2b-1": 0, "realisation-b2b-2": 1, "realisation-b2b-3": 2,
};
const DEFAULT_B2B_CARDS = [
  { title: "Garde-corps collectif", client: "Promoteur IDF", location: "Île-de-France", imageKey: "realisation-b2b-1" },
  { title: "Escalier industriel", client: "Usine automobile", location: "Seine-et-Marne (77)", imageKey: "realisation-b2b-2" },
  { title: "Portails résidence", client: "Collectivité locale", location: "Val-d'Oise (95)", imageKey: "realisation-b2b-3" },
];

interface SiteImage {
  key: string; category: string; label: string; description: string;
  imageUrl: string | null; videoUrl?: string | null; fallbackUrl: string; url: string; zoom?: number; updatedAt?: string;
}
interface B2BCard { title: string; client: string; location: string; imageKey: string; }
interface BrandingSettings {
  logoUrl?: string | null; logoLightUrl?: string | null;
  faviconUrl?: string | null; ogImageUrl?: string | null;
}

// ── Zoom slider with local state + debounced save ──────────
function ZoomSlider({ initialZoom, onZoomChange }: { initialZoom: number; onZoomChange: (z: number) => void }) {
  const [localZoom, setLocalZoom] = React.useState(initialZoom);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync if parent updates
  React.useEffect(() => { setLocalZoom(initialZoom); }, [initialZoom]);

  const handleChange = (val: number) => {
    setLocalZoom(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => onZoomChange(val), 400);
  };

  return (
    <div className="mb-3 pt-2 border-t border-gray-100">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-semibold text-gray-500">Zoom affichage</label>
        <span className="text-xs font-mono text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded">{(localZoom * 100).toFixed(0)}%</span>
      </div>
      <input
        type="range"
        min={50}
        max={300}
        step={10}
        value={Math.round(localZoom * 100)}
        onChange={(e) => handleChange(parseInt(e.target.value) / 100)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
      />
      <div className="flex justify-between text-[9px] text-gray-400 mt-1">
        <span>50%</span>
        <span>150%</span>
        <span>300%</span>
      </div>
    </div>
  );
}

// ── Image card component ───────────────────────────────────
function ImageCard({
  img,
  uploading,
  onUpload,
  onRemove,
  onZoomChange,
  b2bCard,
  b2bIndex,
  onB2bUpdate,
}: {
  img: SiteImage;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
  onZoomChange?: (zoom: number) => void;
  b2bCard?: B2BCard;
  b2bIndex?: number;
  onB2bUpdate?: (idx: number, field: keyof B2BCard, val: string) => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const isCustom = !!img.imageUrl;
  const isOgFormat = img.key.includes("og") || img.label.toLowerCase().includes("og");
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image preview */}
      <div className={cn("relative bg-gray-100 overflow-hidden", isOgFormat ? "aspect-[1200/630]" : "aspect-video")}>
        <Image
          src={img.url} alt={img.label} fill
          className="object-cover"
          unoptimized={img.url.startsWith("data:")}
          onError={() => {}}
        />
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}
        <div className={cn(
          "absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium",
          isCustom ? "bg-green-500/90 text-white" : "bg-orange-400/90 text-white"
        )}>
          {isCustom ? "✓ Personnalisée" : "Défaut"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm">{img.label}</p>
        <p className="text-xs text-gray-500 mt-0.5 mb-3">{img.description}</p>

        {/* Zoom slider — shown for partner logos */}
        {onZoomChange && img.key.startsWith("partner-") && (
          <ZoomSlider initialZoom={img.zoom ?? 1.0} onZoomChange={onZoomChange} />
        )}

        {/* B2B text fields */}
        {b2bCard !== undefined && b2bIndex !== undefined && onB2bUpdate && (
          <div className="mb-3 space-y-2 pt-3 border-t border-gray-100">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Texte affiché</p>
            <div>
              <label className="flex items-center gap-1 text-xs text-gray-500 mb-1"><FileText className="w-3 h-3" /> Titre</label>
              <input type="text" value={b2bCard.title}
                onChange={(e) => onB2bUpdate(b2bIndex, "title", e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-500 outline-none" />
            </div>
            <div>
              <label className="flex items-center gap-1 text-xs text-gray-500 mb-1"><User className="w-3 h-3" /> Client</label>
              <input type="text" value={b2bCard.client}
                onChange={(e) => onB2bUpdate(b2bIndex, "client", e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-500 outline-none" />
            </div>
            <div>
              <label className="flex items-center gap-1 text-xs text-gray-500 mb-1"><MapPin className="w-3 h-3" /> Localisation</label>
              <input type="text" value={b2bCard.location}
                onChange={(e) => onB2bUpdate(b2bIndex, "location", e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-500 outline-none" />
            </div>
          </div>
        )}

        {/* Actions */}
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
            <button onClick={onRemove} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors" title="Supprimer">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }}
            className="hidden" />
        </div>
        <p className="text-[9px] text-gray-300 mt-1.5 font-mono">{img.key}</p>
      </div>
    </div>
  );
}

// ── Video upload card for hero sections ────────────────────
function VideoUploadCard({
  siteImageKey,
  videoUrl,
  posterUrl,
  uploading,
  onUpload,
  onRemove,
}: {
  siteImageKey: string;
  videoUrl: string | null;
  posterUrl: string;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const videoPreviewRef = React.useRef<HTMLVideoElement>(null);
  const [converting, setConverting] = React.useState(false);
  const [progress, setProgress] = React.useState("");
  const [dragOver, setDragOver] = React.useState(false);

  const handleFile = (file: File) => {
    // Skip client-side re-encoding — upload directly to Vercel Blob
    // A 720p/1080p MP4 under 50MB is already web-optimized
    if (file.size > 50 * 1024 * 1024) {
      toast.error(`Vidéo trop volumineuse (${(file.size / 1024 / 1024).toFixed(0)} Mo). Maximum : 50 Mo.`);
      return;
    }
    onUpload(file);
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-md transition-all col-span-full",
        dragOver ? "border-cyan-400 bg-cyan-50/30" : "border-gray-200"
      )}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f && (f.type.startsWith("video/") || /\.(mp4|webm|mov)$/i.test(f.name))) handleFile(f);
      }}
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <Video className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Vidéo Hero</p>
            <p className="text-xs text-gray-500">Vidéo d'arrière-plan pour la section hero. Optimisée automatiquement pour le web.</p>
          </div>
          {videoUrl && (
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium bg-green-500/90 text-white">
              ✓ Active
            </span>
          )}
        </div>

        {/* Video preview */}
        {videoUrl ? (
          <div className="relative rounded-xl overflow-hidden bg-gray-900 mb-4">
            <video
              ref={videoPreviewRef}
              src={videoUrl}
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
              onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
              onMouseLeave={(e) => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
              <Play className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <p className="absolute bottom-2 left-3 text-xs text-white/70 bg-black/40 px-2 py-0.5 rounded">
              Survolez pour prévisualiser
            </p>
          </div>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center mb-4">
            <Video className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Aucune vidéo configurée</p>
            <p className="text-xs text-gray-300 mt-1">Glissez-déposez un fichier ou cliquez pour uploader</p>
          </div>
        )}

        {/* Progress */}
        {(converting || uploading) && (
          <div className="flex items-center gap-3 mb-4 p-3 bg-cyan-50 rounded-xl border border-cyan-100">
            <Loader2 className="w-5 h-5 animate-spin text-cyan-600 flex-shrink-0" />
            <div className="text-sm text-cyan-700 font-medium">
              {converting ? progress : "Upload en cours..."}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading || converting}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            {videoUrl ? "Remplacer la vidéo" : "Uploader une vidéo"}
          </button>
          {videoUrl && (
            <button
              onClick={onRemove}
              disabled={uploading || converting}
              className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              title="Supprimer la vidéo"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.target.value = "";
            }}
            className="hidden"
          />
        </div>

        {/* Info */}
        <div className="mt-3 flex items-start gap-2 text-[11px] text-gray-400">
          <span className="leading-relaxed">
            Formats acceptés : MP4, WebM, MOV. Taille max : 100 MB.
            La vidéo sera automatiquement ré-encodée et optimisée pour le web (1080p, 2.5 Mbps).
          </span>
        </div>
        <p className="text-[9px] text-gray-300 mt-1.5 font-mono">{siteImageKey}</p>
      </div>
    </div>
  );
}

// ── Branding upload card ───────────────────────────────────
function BrandingCard({
  label,
  description,
  url,
  uploading,
  darkBg,
  aspectRatio,
  onUpload,
  onRemove,
}: {
  label: string; description: string; url?: string | null;
  uploading: boolean; darkBg?: boolean; aspectRatio?: string;
  onUpload: (file: File) => void; onRemove: () => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className={cn(
        "relative overflow-hidden flex items-center justify-center",
        aspectRatio || "aspect-video",
        darkBg ? "bg-gray-900" : "bg-gray-50 border-b border-gray-100"
      )}>
        {url ? (
          <Image src={url} alt={label} fill className="object-contain p-4" unoptimized />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <ImageIcon className="w-10 h-10" />
            <p className="text-xs">Aucun fichier</p>
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}
        {url && (
          <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium bg-green-500/90 text-white">
            ✓ Configuré
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5 mb-3">{description}</p>
        <div className="flex gap-2">
          <button onClick={() => fileRef.current?.click()} disabled={uploading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyan-600 text-white rounded-xl text-xs font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50">
            <Upload className="w-3 h-3" />{url ? "Remplacer" : "Uploader"}
          </button>
          {url && (
            <button onClick={onRemove} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*,.ico,.svg"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }}
            className="hidden" />
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────
export default function ImagesSettingsPage() {
  const [images, setImages] = React.useState<SiteImage[]>([]);
  const [allImages, setAllImages] = React.useState<Record<string, SiteImage>>({});
  const [loading, setLoading] = React.useState(true);
  const [uploading, setUploading] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState("identite");
  const [branding, setBranding] = React.useState<BrandingSettings>({});
  const [brandingUploading, setBrandingUploading] = React.useState<string | null>(null);
  const [b2bCards, setB2bCards] = React.useState<B2BCard[]>(DEFAULT_B2B_CARDS);
  const [b2bSaving, setB2bSaving] = React.useState(false);

  const loadImages = async () => {
    try {
      const [imgRes, settingsRes, b2bRes] = await Promise.all([
        fetch("/api/site-images"),
        fetch("/api/settings"),
        fetch("/api/b2b-cards"),
      ]);
      if (imgRes.ok) {
        const data = await imgRes.json();
        const imgs: SiteImage[] = data.images || [];
        setImages(imgs);
        const map: Record<string, SiteImage> = {};
        imgs.forEach((i) => { map[i.key] = i; });
        // Add custom partner logos to the partenaires tab dynamically
        const partnersTab = PAGE_TABS.find(t => t.id === "partenaires");
        if (partnersTab) {
          const customPartnerKeys = imgs
            .filter(i => i.category === "partners" && !partnersTab.keys.includes(i.key))
            .map(i => i.key);
          partnersTab.keys.push(...customPartnerKeys);
        }
        setAllImages(map);
      }
      if (settingsRes.ok) {
        const s = await settingsRes.json();
        setBranding({ logoUrl: s.logoUrl, logoLightUrl: s.logoLightUrl, faviconUrl: s.faviconUrl, ogImageUrl: s.ogImageUrl });
      }
      if (b2bRes.ok) {
        const b = await b2bRes.json();
        if (b.success && b.cards?.length) {
          setB2bCards(b.cards.map((c: Partial<B2BCard>, i: number) => ({ ...DEFAULT_B2B_CARDS[i], ...c })));
        }
      }
    } catch { toast.error("Erreur de chargement"); }
    finally { setLoading(false); }
  };

  React.useEffect(() => { loadImages(); }, []);

  // Upload image du site (clé/valeur)
  const handleUpload = async (key: string, file: File) => {
    setUploading(key);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData(); fd.append("files", compressed); fd.append("folder", "site-images");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) { const e = await upRes.json().catch(() => ({})); throw new Error(e.error || "Erreur upload"); }
      const upData = await upRes.json();
      const imageUrl = upData.files[0]?.url;
      if (!imageUrl) throw new Error("Pas d'URL");
      const saveRes = await fetch("/api/site-images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key, imageUrl }) });
      if (!saveRes.ok) throw new Error("Erreur sauvegarde");
      await loadImages();
      toast.success("Image mise à jour !");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally { setUploading(null); }
  };

  const handleRemove = async (key: string) => {
    try {
      await fetch("/api/site-images", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key, imageUrl: null }) });
      await loadImages();
      toast.success("Image réinitialisée");
    } catch { toast.error("Erreur"); }
  };

  const handleZoomChange = async (key: string, zoom: number) => {
    // Optimistic update
    setImages(prev => prev.map(img => img.key === key ? { ...img, zoom } : img));
    try {
      await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, zoom }),
      });
    } catch { toast.error("Erreur sauvegarde zoom"); }
  };

  // Upload vidéo hero
  const [videoUploading, setVideoUploading] = React.useState<string | null>(null);

  const handleVideoUpload = async (key: string, file: File) => {
    setVideoUploading(key);
    try {
      // Upload via dedicated video route (server-side put() to Vercel Blob)
      toast.loading(`Upload vidéo (${(file.size / 1024 / 1024).toFixed(1)} Mo)...`, { id: "video-upload" });
      const fd = new FormData();
      fd.append("file", file);
      const upRes = await fetch("/api/upload/video", { method: "POST", body: fd });
      toast.dismiss("video-upload");

      if (!upRes.ok) {
        const e = await upRes.json().catch(() => ({}));
        throw new Error(e.error || "Erreur upload vidéo");
      }

      const { url: videoUrl } = await upRes.json();
      if (!videoUrl) throw new Error("Pas d'URL vidéo retournée");

      toast.loading("Enregistrement...", { id: "video-save" });
      const saveRes = await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, videoUrl }),
      });
      if (!saveRes.ok) throw new Error("Erreur sauvegarde");
      toast.dismiss("video-save");
      await loadImages();
      toast.success("Vidéo hero mise à jour !");
    } catch (e) {
      toast.dismiss("video-upload");
      toast.dismiss("video-save");
      console.error("[video-upload] error:", e);
      toast.error(e instanceof Error ? e.message : "Erreur upload vidéo");
    } finally {
      setVideoUploading(null);
    }
  };

  const handleVideoRemove = async (key: string) => {
    try {
      await fetch("/api/site-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, videoUrl: null }),
      });
      await loadImages();
      toast.success("Vidéo supprimée");
    } catch {
      toast.error("Erreur suppression vidéo");
    }
  };

  const handleAddPartnerLogo = async () => {
    const name = prompt("Nom du partenaire (ex: Bouygues, Vinci...) :");
    if (!name || !name.trim()) return;
    const slug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const key = `partner-${slug}`;

    // Check if already exists
    if (images.find(i => i.key === key)) {
      toast.error(`Le logo "${name}" existe déjà.`);
      return;
    }

    try {
      // Create via API — will be added to DB with default placeholder
      await fetch("/api/site-images/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key,
          category: "partners",
          label: `Logo ${name.trim()}`,
          description: `Logo du partenaire ${name.trim()}`,
          fallbackUrl: `https://via.placeholder.com/200x80/333333/FFFFFF?text=${encodeURIComponent(name.trim().toUpperCase())}`,
        }),
      });
      // Also add to the partners tab keys so it shows up
      const partnersTab = PAGE_TABS.find(t => t.id === "partenaires");
      if (partnersTab && !partnersTab.keys.includes(key)) {
        partnersTab.keys.push(key);
      }
      await loadImages();
      toast.success(`Logo "${name}" ajouté ! Uploadez maintenant l'image.`);
    } catch {
      toast.error("Erreur lors de l'ajout");
    }
  };

  // Upload branding (logo/favicon)
  const handleBrandingUpload = async (field: keyof BrandingSettings, file: File) => {
    setBrandingUploading(field);
    try {
      const fd = new FormData(); fd.append("files", file); fd.append("folder", "branding");
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) throw new Error("Erreur upload");
      const upData = await upRes.json();
      const url = upData.files[0]?.url;
      if (!url) throw new Error("Pas d'URL");
      const newBranding = { ...branding, [field]: url };
      await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newBranding) });
      setBranding(newBranding);
      toast.success("Identité mise à jour !");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally { setBrandingUploading(null); }
  };

  const handleBrandingRemove = async (field: keyof BrandingSettings) => {
    const newBranding = { ...branding, [field]: null };
    await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newBranding) });
    setBranding(newBranding);
    toast.success("Supprimé");
  };

  const updateB2bCard = (idx: number, field: keyof B2BCard, val: string) => {
    setB2bCards((prev) => prev.map((c, i) => i === idx ? { ...c, [field]: val } : c));
  };

  const saveB2bCards = async () => {
    setB2bSaving(true);
    try {
      await fetch("/api/b2b-cards", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ cards: b2bCards }) });
      toast.success("Textes sauvegardés !");
    } catch { toast.error("Erreur"); }
    finally { setB2bSaving(false); }
  };

  const currentTab = PAGE_TABS.find((t) => t.id === activeTab);
  const tabImages = currentTab?.keys.map((k) => allImages[k]).filter(Boolean) as SiteImage[];
  const hasB2b = activeTab === "professionnels";

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-cyan-500" /></div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Images du site</h1>
          <p className="text-gray-500 mt-1">Gérez les visuels de chaque page et votre identité de marque</p>
        </div>
        <button onClick={() => { setLoading(true); loadImages(); }}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <RefreshCw className="w-4 h-4" /> Actualiser
        </button>
      </div>

      {/* Page tabs */}
      <div className="flex flex-wrap gap-2">
        {PAGE_TABS.map((tab) => {
          const Icon = tab.icon;
          const customCount = tab.keys.filter((k) => allImages[k]?.imageUrl).length;
          const isIdentite = tab.id === "identite";
          const identiteCount = [branding.logoUrl, branding.logoLightUrl, branding.faviconUrl].filter(Boolean).length;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                activeTab === tab.id
                  ? "bg-navy-dark text-white border-navy-dark shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              {(isIdentite ? identiteCount : customCount) > 0 && (
                <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-semibold",
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-cyan-100 text-cyan-700"
                )}>
                  {isIdentite ? identiteCount : customCount}/{isIdentite ? 3 : tab.keys.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab description */}
      {currentTab && (
        <p className="text-sm text-gray-500">{currentTab.description}</p>
      )}

      {/* ── IDENTITÉ tab ── */}
      {activeTab === "identite" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <BrandingCard
              label="Logo principal"
              description="Fond sombre — header du site. SVG ou PNG transparent recommandé."
              url={branding.logoUrl}
              uploading={brandingUploading === "logoUrl"}
              darkBg
              onUpload={(f) => handleBrandingUpload("logoUrl", f)}
              onRemove={() => handleBrandingRemove("logoUrl")}
            />
            <BrandingCard
              label="Logo fond clair"
              description="Fond blanc — footer ou contextes clairs. Variante sombre du logo."
              url={branding.logoLightUrl}
              uploading={brandingUploading === "logoLightUrl"}
              onUpload={(f) => handleBrandingUpload("logoLightUrl", f)}
              onRemove={() => handleBrandingRemove("logoLightUrl")}
            />
            <BrandingCard
              label="Favicon"
              description="Icône onglet navigateur. PNG 512×512 recommandé — le navigateur génère les tailles."
              url={branding.faviconUrl}
              uploading={brandingUploading === "faviconUrl"}
              aspectRatio="aspect-square max-w-[180px]"
              onUpload={(f) => handleBrandingUpload("faviconUrl", f)}
              onRemove={() => handleBrandingRemove("faviconUrl")}
            />
            <BrandingCard
              label="Image de partage (OG)"
              description="Aperçu sur Facebook, LinkedIn, WhatsApp... Format 1200×630px recommandé."
              url={branding.ogImageUrl}
              uploading={brandingUploading === "ogImageUrl"}
              aspectRatio="aspect-[1200/630]"
              onUpload={(f) => handleBrandingUpload("ogImageUrl", f)}
              onRemove={() => handleBrandingRemove("ogImageUrl")}
            />
          </div>
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-700">
            <Share2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
            <div>
              <strong>Formats recommandés :</strong> Logo → SVG ou PNG transparent. Favicon → PNG 512×512. OG Image → JPG 1200×630px, max 200KB.
            </div>
          </div>
        </div>
      )}

      {/* ── Images tabs ── */}
      {activeTab !== "identite" && tabImages && (
        <div className="space-y-6">
          {tabImages.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Aucune image configurée pour cette section</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Video upload cards for hero images */}
              {tabImages.filter((img) => img.key.startsWith("hero-") && img.category === "hero").map((img) => (
                <VideoUploadCard
                  key={`video-${img.key}`}
                  siteImageKey={img.key}
                  videoUrl={img.videoUrl || null}
                  posterUrl={img.url}
                  uploading={videoUploading === img.key}
                  onUpload={(f) => handleVideoUpload(img.key, f)}
                  onRemove={() => handleVideoRemove(img.key)}
                />
              ))}
              {/* Image cards */}
              {tabImages.map((img) => {
                const b2bIdx = B2B_IMAGE_KEYS[img.key];
                return (
                  <ImageCard
                    key={img.key}
                    img={img}
                    uploading={uploading === img.key}
                    onUpload={(f) => handleUpload(img.key, f)}
                    onRemove={() => handleRemove(img.key)}
                    onZoomChange={(z) => handleZoomChange(img.key, z)}
                    b2bCard={b2bIdx !== undefined ? b2bCards[b2bIdx] : undefined}
                    b2bIndex={b2bIdx}
                    onB2bUpdate={updateB2bCard}
                  />
                );
              })}
            </div>
          )}

          {/* Add new partner logo button */}
          {activeTab === "partenaires" && (
            <div className="flex items-center gap-4">
              <button
                onClick={handleAddPartnerLogo}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-600 text-white rounded-xl text-sm font-semibold hover:bg-cyan-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Ajouter un logo partenaire
              </button>
              <p className="text-xs text-gray-400">Les nouveaux logos apparaîtront automatiquement sur le site.</p>
            </div>
          )}

          {/* Save B2B texts button */}
          {hasB2b && (
            <div className="flex justify-end">
              <button
                onClick={saveB2bCards}
                disabled={b2bSaving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
              >
                {b2bSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Sauvegarder les textes
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
        <div>
          Images compressées automatiquement (max 1920px, qualité 85%). Stockage local en développement,
          Cloudinary ou Vercel Blob en production. Badge vert = image personnalisée, badge orange = image par défaut.
        </div>
      </div>
    </div>
  );
}
