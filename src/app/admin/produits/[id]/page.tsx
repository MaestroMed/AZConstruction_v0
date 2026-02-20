"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Trash2, Eye, Upload, X, Plus } from "lucide-react";
import { Input, Textarea, Select, Switch, FileUpload, ColorPicker } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

const families = [
  { value: "1", label: "Garde-corps" },
  { value: "2", label: "Garde-corps" },
  { value: "3", label: "Escaliers" },
  { value: "4", label: "Fenêtres" },
  { value: "5", label: "Grilles de ventilation" },
  { value: "6", label: "Portails" },
  { value: "7", label: "Clôtures" },
];

// Mock product data
const mockProduct = {
  id: "1",
  slug: "porte-jansen-design",
  nom: "Porte Jansen Design",
  description: "Porte d'entrée en profilés Jansen avec finition premium. Structure renforcée pour une durabilité exceptionnelle.",
  familleId: "1",
  prixBaseHT: 2850,
  poidsBase: 120,
  delaiFabrication: 21,
  actif: true,
  imageUrl: "",
  model3dUrl: "",
  promptIA: "Porte d'entrée moderne en profilés acier Jansen avec design épuré, vitrage feuilleté, couleur anthracite, poignée acier thermolaqué",
};

export default function ProductEditPage() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === "nouveau";

  const [formData, setFormData] = React.useState(isNew ? {
    slug: "",
    nom: "",
    description: "",
    familleId: "",
    prixBaseHT: 0,
    poidsBase: 0,
    delaiFabrication: 14,
    actif: true,
    imageUrl: "",
    model3dUrl: "",
    promptIA: "",
  } : mockProduct);

  const [files, setFiles] = React.useState<File[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: API call to save product
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(isNew ? "Produit créé avec succès" : "Produit mis à jour");
      router.push("/admin/produits");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

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
            <h1 className="text-2xl font-bold text-gray-900">
              {isNew ? "Nouveau produit" : formData.nom}
            </h1>
            <p className="text-gray-500 mt-1">
              {isNew ? "Créer un nouveau produit" : "Modifier les informations du produit"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!isNew && (
            <>
              <Link
                href={`/produits/${formData.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Voir
              </Link>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-red-200 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
                Supprimer
              </button>
            </>
          )}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {loading ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Informations générales
            </h2>
            <div className="space-y-4">
              <Input
                label="Nom du produit"
                value={formData.nom}
                onChange={(e) => {
                  const nom = e.target.value;
                  setFormData({
                    ...formData,
                    nom,
                    slug: isNew ? generateSlug(nom) : formData.slug,
                  });
                }}
                placeholder="Ex: Porte Jansen Premium"
                required
              />
              <Input
                label="Slug (URL)"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="porte-jansen-premium"
                hint="Utilisé dans l'URL du produit"
                required
              />
              <Textarea
                label="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description détaillée du produit..."
                rows={4}
              />
              <Select
                label="Famille de produits"
                value={formData.familleId}
                options={families}
                onChange={(value) => setFormData({ ...formData, familleId: value })}
                required
              />
            </div>
          </div>

          {/* Pricing & specs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Prix et spécifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Prix de base HT"
                type="number"
                value={formData.prixBaseHT}
                onChange={(e) => setFormData({ ...formData, prixBaseHT: parseFloat(e.target.value) })}
                rightIcon={<span className="text-gray-400">€</span>}
                required
              />
              <Input
                label="Poids (kg)"
                type="number"
                value={formData.poidsBase}
                onChange={(e) => setFormData({ ...formData, poidsBase: parseFloat(e.target.value) })}
                rightIcon={<span className="text-gray-400">kg</span>}
              />
              <Input
                label="Délai de fabrication"
                type="number"
                value={formData.delaiFabrication}
                onChange={(e) => setFormData({ ...formData, delaiFabrication: parseInt(e.target.value) })}
                rightIcon={<span className="text-gray-400">jours</span>}
              />
            </div>
          </div>

          {/* Media */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Médias
            </h2>
            <div className="space-y-6">
              <FileUpload
                label="Images du produit"
                accept="image/*"
                multiple
                value={files}
                onChange={setFiles}
                hint="Formats acceptés: JPG, PNG, WebP. Max 5MB par image."
              />
              <FileUpload
                label="Modèle 3D"
                accept=".glb,.gltf"
                hint="Format GLB ou GLTF pour la visualisation 3D"
              />
            </div>
          </div>

          {/* AI Prompt */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Génération IA
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Prompt utilisé pour générer des images du produit si le modèle 3D n&apos;est pas disponible
            </p>
            <Textarea
              value={formData.promptIA}
              onChange={(e) => setFormData({ ...formData, promptIA: e.target.value })}
              placeholder="Décrivez le produit pour la génération d'images IA..."
              rows={3}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Publication
            </h2>
            <Switch
              label="Produit actif"
              description="Les produits inactifs ne sont pas visibles sur le site"
              checked={formData.actif}
              onChange={(checked) => setFormData({ ...formData, actif: checked })}
            />
          </div>

          {/* Options preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Options</h2>
              <Link
                href={`/admin/produits/${params.id}/options`}
                className="text-sm text-cyan-600 hover:text-cyan-700"
              >
                Gérer
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { nom: "Largeur", type: "Nombre" },
                { nom: "Hauteur", type: "Nombre" },
                { nom: "Couleur RAL", type: "Couleur" },
                { nom: "Motorisation", type: "Choix" },
              ].map((option) => (
                <div key={option.nom} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{option.nom}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    {option.type}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
              <Plus className="w-4 h-4" />
              Ajouter une option
            </button>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Aperçu
            </h2>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              {files.length > 0 ? (
                <img
                  src={URL.createObjectURL(files[0])}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <Upload className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Aucune image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


