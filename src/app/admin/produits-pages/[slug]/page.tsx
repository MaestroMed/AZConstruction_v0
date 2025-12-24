"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
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
  GripVertical,
  Upload,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/admin/ui/FormFields";
import { Card, CardContent } from "@/components/ui/Card";
import { toast } from "sonner";
import { getProductFamilyBySlug, type ProductFamily } from "@/lib/data/product-families";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [family, setFamily] = React.useState<ProductFamily | null>(null);
  const [heroImages, setHeroImages] = React.useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = React.useState("");

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
    
    // First try to load from API
    try {
      const response = await fetch(`/api/product-families?slug=${slug}`);
      if (response.ok) {
        const data = await response.json();
        if (data.family) {
          const f = data.family;
          setFormData({
            tagline: f.tagline || "",
            description: f.description || "",
            longDescription: f.longDescription || "",
            startingPrice: f.startingPrice || "",
            unit: f.unit || "pièce",
            seoTitle: f.seoTitle || "",
            seoDescription: f.seoDescription || "",
          });
          setHeroImages(f.heroImages?.map((img: { imageUrl: string }) => img.imageUrl) || []);
          setFamily(f);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to load from API:", error);
    }

    // Fallback to static data
    const staticFamily = getProductFamilyBySlug(slug);
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
      setFamily(staticFamily as unknown as ProductFamily);
    }
    
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Note: This would save to database when fully implemented
      toast.success("Modifications enregistrées (mode statique - modifiez le fichier source pour persister)");
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Erreur lors de la sauvegarde");
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
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
        <p className="text-blue-800 text-sm">
          <strong>Mode statique:</strong> Les modifications apportées ici ne seront pas persistées
          automatiquement. Pour modifier le contenu de façon permanente, éditez le fichier{" "}
          <code className="bg-blue-100 px-1 rounded">src/lib/data/product-families.ts</code>.
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
                        variant="destructive"
                        size="sm"
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
                  <span>{family.variants?.length || 0}</span>
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


