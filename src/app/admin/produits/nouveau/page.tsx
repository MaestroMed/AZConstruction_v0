"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Package,
  Upload,
  Trash2,
  Loader2,
  Euro,
  Tag,
} from "lucide-react";
import { Input, Switch, Textarea, Select } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";
import Image from "next/image";

const productFamilies = [
  { value: "garde-corps", label: "Garde-corps" },
  { value: "escaliers", label: "Escaliers" },
  { value: "portes", label: "Portes" },
  { value: "fenetres", label: "Fenêtres" },
  { value: "portails", label: "Portails" },
  { value: "clotures", label: "Clôtures" },
  { value: "grilles-ventilation", label: "Grilles de ventilation" },
];

interface ProductForm {
  nom: string;
  slug: string;
  description: string;
  famille: string;
  prixBaseHT: number;
  actif: boolean;
  imageUrl: string;
  dimensions: {
    largeurMin: number;
    largeurMax: number;
    hauteurMin: number;
    hauteurMax: number;
  };
  options: string[];
}

const defaultForm: ProductForm = {
  nom: "",
  slug: "",
  description: "",
  famille: "",
  prixBaseHT: 0,
  actif: true,
  imageUrl: "",
  dimensions: {
    largeurMin: 50,
    largeurMax: 300,
    hauteurMin: 50,
    hauteurMax: 250,
  },
  options: [],
};

export default function NouveauProduitPage() {
  const router = useRouter();
  const [form, setForm] = React.useState<ProductForm>(defaultForm);
  const [saving, setSaving] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ProductForm, string>>>({});
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Génération automatique du slug
  React.useEffect(() => {
    if (form.nom && !form.slug) {
      const slug = form.nom
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setForm((f) => ({ ...f, slug }));
    }
  }, [form.nom, form.slug]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ProductForm, string>> = {};

    if (!form.nom) newErrors.nom = "Le nom est requis";
    if (!form.famille) newErrors.famille = "La famille est requise";
    if (!form.prixBaseHT || form.prixBaseHT <= 0) {
      newErrors.prixBaseHT = "Le prix doit être supérieur à 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur upload");

      const data = await response.json();
      const url = data.files[0]?.url;

      if (url) {
        setForm({ ...form, imageUrl: url });
        toast.success("Image uploadée");
      }
    } catch (error) {
      toast.error("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Veuillez corriger les erreurs");
      return;
    }

    setSaving(true);

    try {
      // Simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sauvegarder dans localStorage pour démo
      const products = JSON.parse(localStorage.getItem("az_products") || "[]");
      const newProduct = {
        id: Date.now().toString(),
        ...form,
        createdAt: new Date().toISOString(),
      };
      products.push(newProduct);
      localStorage.setItem("az_products", JSON.stringify(products));

      toast.success("Produit créé avec succès");
      router.push("/admin/produits");
    } catch (error) {
      toast.error("Erreur lors de la création");
    } finally {
      setSaving(false);
    }
  };

  const updateField = <K extends keyof ProductForm>(field: K, value: ProductForm[K]) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/produits"
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nouveau produit</h1>
          <p className="text-gray-500 mt-1">Ajoutez un produit à votre catalogue</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations générales */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informations générales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Nom du produit *"
              value={form.nom}
              onChange={(e) => updateField("nom", e.target.value)}
              error={errors.nom}
              placeholder="Garde-corps Design Inox"
              leftIcon={<Package className="w-4 h-4" />}
            />
            <Input
              label="Slug (URL)"
              value={form.slug}
              onChange={(e) => updateField("slug", e.target.value)}
              placeholder="garde-corps-design-inox"
              leftIcon={<Tag className="w-4 h-4" />}
            />
            <Select
              label="Famille de produit *"
              value={form.famille}
              onChange={(e) => updateField("famille", e.target.value)}
              error={errors.famille}
              options={[{ value: "", label: "Sélectionner une famille" }, ...productFamilies]}
            />
            <Input
              label="Prix de base HT *"
              type="number"
              min={0}
              step={0.01}
              value={form.prixBaseHT}
              onChange={(e) => updateField("prixBaseHT", Number(e.target.value))}
              error={errors.prixBaseHT}
              placeholder="0.00"
              leftIcon={<Euro className="w-4 h-4" />}
            />
          </div>
          <div className="mt-4">
            <Textarea
              label="Description"
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Description détaillée du produit..."
              rows={4}
            />
          </div>
        </div>

        {/* Image */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Image principale</h2>
          {form.imageUrl ? (
            <div className="relative w-full max-w-md">
              <Image
                src={form.imageUrl}
                alt="Produit"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
              <button
                type="button"
                onClick={() => updateField("imageUrl", "")}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                uploading ? "border-cyan-500 bg-cyan-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {uploading ? (
                <Loader2 className="w-8 h-8 animate-spin text-cyan-500 mx-auto" />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">
                    <span className="text-cyan-600 font-medium">Cliquez</span> pour uploader
                  </p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP</p>
                </>
              )}
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
            className="hidden"
          />
        </div>

        {/* Dimensions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dimensions configurables</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Largeur (cm)</p>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Min"
                  type="number"
                  value={form.dimensions.largeurMin}
                  onChange={(e) =>
                    updateField("dimensions", {
                      ...form.dimensions,
                      largeurMin: Number(e.target.value),
                    })
                  }
                />
                <Input
                  label="Max"
                  type="number"
                  value={form.dimensions.largeurMax}
                  onChange={(e) =>
                    updateField("dimensions", {
                      ...form.dimensions,
                      largeurMax: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Hauteur (cm)</p>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Min"
                  type="number"
                  value={form.dimensions.hauteurMin}
                  onChange={(e) =>
                    updateField("dimensions", {
                      ...form.dimensions,
                      hauteurMin: Number(e.target.value),
                    })
                  }
                />
                <Input
                  label="Max"
                  type="number"
                  value={form.dimensions.hauteurMax}
                  onChange={(e) =>
                    updateField("dimensions", {
                      ...form.dimensions,
                      hauteurMax: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statut */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Statut</h2>
          <Switch
            label="Produit actif"
            description="Le produit sera visible sur le site et dans le configurateur"
            checked={form.actif}
            onChange={(checked) => updateField("actif", checked)}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Link
            href="/admin/produits"
            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? "Création..." : "Créer le produit"}
          </button>
        </div>
      </form>
    </div>
  );
}


