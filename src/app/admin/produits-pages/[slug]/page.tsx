"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Save,
  Image as ImageIcon,
  Plus,
  Trash,
  Eye,
  Upload,
  ExternalLink,
  Film,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/admin/ui/FormFields";
import { Card, CardContent } from "@/components/ui/Card";
import { toast } from "sonner";
import { getProductFamilyBySlug, type ProductFamily, type ProductVariant } from "@/lib/data/product-families";

export default function EditProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [family, setFamily] = React.useState<ProductFamily | null>(null);
  const [familyDbId, setFamilyDbId] = React.useState<string | null>(null);
  const [heroImages, setHeroImages] = React.useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = React.useState("");
  const [heroVideoUrl, setHeroVideoUrl] = React.useState<string | null>(null);
  const [videoUploading, setVideoUploading] = React.useState(false);
  const [variants, setVariants] = React.useState<ProductVariant[]>([]);
  const [variantVideoUploading, setVariantVideoUploading] = React.useState<string | null>(null);

  // Form state
  const [formData, setFormData] = React.useState({
    tagline: "",
    description: "",
    longDescription: "",
    startingPrice: "",
    unit: "",
    seoTitle: "",
    seoDescription: "",
  });

  React.useEffect(() => {
    loadFamily();
  }, [slug]);

  const loadFamily = async () => {
    setLoading(true);
    
    const staticFamily = getProductFamilyBySlug(slug);

    // First try to load from API
    try {
      const response = await fetch(`/api/product-families?slug=${slug}`);
      if (response.ok) {
        const data = await response.json();
        if (data.family) {
          const f = data.family;
          setFormData({
            tagline: f.tagline || staticFamily?.tagline || "",
            description: f.description || staticFamily?.description || "",
            longDescription: f.longDescription || staticFamily?.longDescription || "",
            startingPrice: f.startingPrice || staticFamily?.startingPrice || "",
            unit: f.unit || staticFamily?.unit || "pièce",
            seoTitle: f.seoTitle || staticFamily?.seoTitle || "",
            seoDescription: f.seoDescription || staticFamily?.seoDescription || "",
          });
          setHeroImages(f.heroImages?.map((img: { imageUrl: string }) => img.imageUrl) || []);
          setHeroVideoUrl(f.heroVideoUrl ?? null);
          setFamilyDbId(f.id ?? null);
          // Merge variants: DB variants override static (keep static ones not in DB)
          const dbVariants = (f.variants ?? []) as ProductVariant[];
          const merged = staticFamily
            ? staticFamily.variants.map((sv) => {
                const dbV = dbVariants.find((v) => v.id === sv.id);
                return dbV ? { ...sv, ...dbV } : sv;
              })
            : dbVariants;
          // Append DB-only variants not in static
          const extraDb = dbVariants.filter(
            (dbV) => !staticFamily?.variants.some((sv) => sv.id === dbV.id)
          );
          setVariants([...merged, ...extraDb]);
          setFamily((staticFamily as unknown as ProductFamily) ?? f);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to load from API:", error);
    }

    // Fallback to static data
    if (staticFamily) {
      setFormData({
        tagline: staticFamily.tagline,
        description: staticFamily.description,
        longDescription: staticFamily.longDescription,
        startingPrice: staticFamily.startingPrice,
        unit: staticFamily.unit,
        seoTitle: staticFamily.seoTitle,
        seoDescription: staticFamily.seoDescription,
      });
      setHeroImages(staticFamily.heroImages);
      setHeroVideoUrl(staticFamily.heroVideoUrl ?? null);
      setVariants(staticFamily.variants);
      setFamily(staticFamily as unknown as ProductFamily);
    }

    setLoading(false);
  };

  const uploadVideoFile = async (file: File, keyPrefix: string): Promise<string> => {
    const { upload } = await import("@vercel/blob/client");
    const blob = await upload(
      `product-videos/${keyPrefix}-${Date.now()}.${file.name.split(".").pop() || "mp4"}`,
      file,
      {
        access: "public",
        handleUploadUrl: "/api/upload/video",
      }
    );
    if (!blob.url) throw new Error("Pas d'URL vidéo retournée");
    return blob.url;
  };

  const handleFamilyVideoUpload = async (file: File) => {
    setVideoUploading(true);
    try {
      toast.loading(`Upload vidéo (${(file.size / 1024 / 1024).toFixed(1)} Mo)...`, { id: "fam-video" });
      const url = await uploadVideoFile(file, `family-${slug}`);
      setHeroVideoUrl(url);
      toast.dismiss("fam-video");
      toast.success("Vidéo uploadée — n'oubliez pas d'enregistrer");
    } catch (e) {
      toast.dismiss("fam-video");
      console.error("[family-video] error:", e);
      toast.error(e instanceof Error ? e.message : "Erreur upload vidéo");
    } finally {
      setVideoUploading(false);
    }
  };

  const handleVariantVideoUpload = async (variantId: string, file: File) => {
    setVariantVideoUploading(variantId);
    try {
      toast.loading(`Upload vidéo (${(file.size / 1024 / 1024).toFixed(1)} Mo)...`, { id: `var-${variantId}` });
      const url = await uploadVideoFile(file, `variant-${slug}-${variantId}`);
      setVariants((prev) =>
        prev.map((v) => (v.id === variantId ? { ...v, heroVideoUrl: url } : v))
      );
      toast.dismiss(`var-${variantId}`);
      toast.success("Vidéo uploadée — n'oubliez pas d'enregistrer");
    } catch (e) {
      toast.dismiss(`var-${variantId}`);
      console.error("[variant-video] error:", e);
      toast.error(e instanceof Error ? e.message : "Erreur upload vidéo");
    } finally {
      setVariantVideoUploading(null);
    }
  };

  const updateVariantVideoUrl = (variantId: string, url: string) => {
    setVariants((prev) =>
      prev.map((v) => (v.id === variantId ? { ...v, heroVideoUrl: url || undefined } : v))
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const nom = (family as unknown as { name?: string; nom?: string })?.name
        || (family as unknown as { nom?: string })?.nom
        || slug;
      const payload = {
        id: familyDbId || undefined,
        slug,
        nom,
        description: formData.description,
        tagline: formData.tagline,
        longDescription: formData.longDescription,
        heroVideoUrl,
        startingPrice: formData.startingPrice,
        unit: formData.unit,
        seoTitle: formData.seoTitle,
        seoDescription: formData.seoDescription,
        variants,
      };
      const res = await fetch("/api/product-families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      if (data?.family?.id) setFamilyDbId(data.family.id);
      toast.success("Modifications enregistrées");
    } catch (error) {
      console.error("Error saving:", error);
      toast.error(error instanceof Error ? error.message : "Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const addHeroImage = () => {
    if (newImageUrl.trim()) {
      setHeroImages([...heroImages, newImageUrl.trim()]);
      setNewImageUrl("");
    }
  };

  const removeHeroImage = (index: number) => {
    setHeroImages(heroImages.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-6 text-center text-gray-500">
        Chargement...
      </div>
    );
  }

  if (!family) {
    return (
      <div className="container mx-auto py-10 px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page produit non trouvée</h1>
        <Link href="/admin/produits-pages">
          <Button icon={<ArrowLeft className="w-4 h-4" />}>
            Retour
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/produits-pages">
            <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Retour
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Édition: {family.name || (family as { nom?: string }).nom}
            </h1>
            <p className="text-gray-500 text-sm">
              /produits/{slug}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href={`/produits/${slug}`} target="_blank">
            <Button variant="outline" icon={<Eye className="w-4 h-4" />}>
              Prévisualiser
            </Button>
          </Link>
          <Button
            onClick={handleSave}
            disabled={saving}
            icon={<Save className="w-4 h-4" />}
          >
            {saving ? "Enregistrement..." : "Enregistrer"}
          </Button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
        <p className="text-emerald-800 text-sm">
          <strong>Persistance DB activée.</strong> Les modifications (vidéo hero famille &amp; variants, textes, SEO)
          sont enregistrées dans la base de données via le bouton <em>Enregistrer</em>.
          Les images du carrousel hero sont gérées séparément côté médiathèque.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Images */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-corporate" />
                Images Hero (Carrousel)
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {heroImages.map((url, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={url}
                      alt={`Hero image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-red-600 text-white hover:bg-red-700"
                        onClick={() => removeHeroImage(index)}
                        icon={<Trash className="w-4 h-4" />}
                      >
                        Supprimer
                      </Button>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="URL de l'image (https://...)"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={addHeroImage}
                  disabled={!newImageUrl.trim()}
                  icon={<Plus className="w-4 h-4" />}
                >
                  Ajouter
                </Button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Ajoutez des URLs d'images pour le carrousel hero. Recommandé: 1920x1080px minimum.
              </p>
            </CardContent>
          </Card>

          {/* Hero Video (family) */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <Film className="w-5 h-5 text-blue-corporate" />
                Vidéo Hero (famille)
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Vidéo d'arrière-plan pour le hero de la page famille. Si définie, elle remplace le carrousel d'images.
                Formats acceptés : MP4, WebM, MOV. Max 100 Mo. Muted + autoplay + loop.
              </p>

              {heroVideoUrl ? (
                <div className="relative rounded-xl overflow-hidden bg-gray-900 mb-4">
                  <video
                    src={heroVideoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-80 object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setHeroVideoUrl(null)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700"
                    title="Retirer la vidéo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-4">
                  <Film className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Aucune vidéo. Le carrousel d'images sera utilisé.</p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 px-4 py-2 bg-blue-corporate text-white rounded-lg cursor-pointer hover:bg-blue-700 text-sm font-medium">
                  <Upload className="w-4 h-4" />
                  {videoUploading ? "Upload..." : heroVideoUrl ? "Remplacer la vidéo" : "Uploader une vidéo"}
                  <input
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    className="hidden"
                    disabled={videoUploading}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleFamilyVideoUpload(f);
                      e.target.value = "";
                    }}
                  />
                </label>
                <Input
                  value={heroVideoUrl ?? ""}
                  onChange={(e) => setHeroVideoUrl(e.target.value || null)}
                  placeholder="ou URL vidéo (https://...)"
                  className="flex-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Variants — per-variant hero video */}
          {variants.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <Film className="w-5 h-5 text-blue-corporate" />
                  Vidéos Hero par sous-famille
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Chaque variante peut avoir sa propre vidéo hero. Si vide, la vidéo de la famille (ou le carrousel) est utilisée.
                </p>

                <div className="space-y-4">
                  {variants.map((v) => (
                    <div key={v.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">{v.name}</p>
                          <p className="text-xs text-gray-500 truncate">/produits/{slug}/{v.id}</p>
                        </div>
                        {v.heroVideoUrl && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-500/90 text-white flex-shrink-0">
                            ✓ Vidéo
                          </span>
                        )}
                      </div>

                      {v.heroVideoUrl && (
                        <div className="relative rounded-lg overflow-hidden bg-gray-900 mb-3">
                          <video
                            src={v.heroVideoUrl}
                            muted
                            playsInline
                            controls
                            preload="metadata"
                            className="w-full h-auto max-h-48 object-contain"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-2 flex-wrap">
                        <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 text-xs font-medium">
                          <Upload className="w-3.5 h-3.5" />
                          {variantVideoUploading === v.id ? "Upload..." : v.heroVideoUrl ? "Remplacer" : "Uploader vidéo"}
                          <input
                            type="file"
                            accept="video/mp4,video/webm,video/quicktime"
                            className="hidden"
                            disabled={variantVideoUploading === v.id}
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) handleVariantVideoUpload(v.id, f);
                              e.target.value = "";
                            }}
                          />
                        </label>
                        <Input
                          value={v.heroVideoUrl ?? ""}
                          onChange={(e) => updateVariantVideoUrl(v.id, e.target.value)}
                          placeholder="ou URL vidéo (https://...)"
                          className="flex-1 min-w-[200px]"
                        />
                        {v.heroVideoUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateVariantVideoUrl(v.id, "")}
                            icon={<X className="w-3.5 h-3.5" />}
                          >
                            Retirer
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Content */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Contenu de la page
              </h2>

              <div className="space-y-4">
                <Input
                  label="Tagline (accroche)"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Ex: Sécurité & Design"
                />

                <Textarea
                  label="Description courte"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Description brève pour les listes..."
                  rows={2}
                />

                <Textarea
                  label="Description longue"
                  value={formData.longDescription}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  placeholder="Description détaillée pour la page produit..."
                  rows={4}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Prix de départ"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                    placeholder="290"
                  />
                  <Input
                    label="Unité"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    placeholder="ml, pièce, m²..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                SEO
              </h2>

              <div className="space-y-4">
                <Input
                  label="Titre SEO"
                  value={formData.seoTitle}
                  onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                  placeholder="Titre pour les moteurs de recherche"
                />

                <Textarea
                  label="Description SEO"
                  value={formData.seoDescription}
                  onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                  placeholder="Description pour les moteurs de recherche (150-160 caractères)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Preview */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Aperçu
              </h2>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                  {heroImages[0] ? (
                    <Image
                      src={heroImages[0]}
                      alt="Preview"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>

                {formData.tagline && (
                  <span className="inline-block text-cyan-600 text-xs font-medium mb-1">
                    {formData.tagline}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 mb-1">
                  {family.name || (family as { nom?: string }).nom}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {formData.description || "Pas de description"}
                </p>
                {formData.startingPrice && (
                  <p className="text-sm font-semibold mt-2">
                    À partir de {formData.startingPrice}€/{formData.unit || "u"}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Actions rapides
              </h2>

              <div className="space-y-2">
                <Link href={`/produits/${slug}`} target="_blank" className="block">
                  <Button variant="outline" className="w-full justify-start" icon={<ExternalLink className="w-4 h-4" />}>
                    Voir la page en ligne
                  </Button>
                </Link>
                <Link href="/admin/parametres/images" className="block">
                  <Button variant="outline" className="w-full justify-start" icon={<Upload className="w-4 h-4" />}>
                    Uploader des images
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Infos */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Informations
              </h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Slug:</span>
                  <span className="font-mono">{slug}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Variantes:</span>
                  <span>{variants.length || family.variants?.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Images hero:</span>
                  <span>{heroImages.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}


