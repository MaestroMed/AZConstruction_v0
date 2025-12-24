"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Save,
  Loader2,
  Upload,
  Trash2,
  Check,
  X,
  ImageIcon,
  Palette,
  Car,
  Disc,
  Bike,
  DoorOpen,
} from "lucide-react";
import { toast } from "sonner";

// Types
interface RALColor {
  code: string;
  name: string;
  label: string;
  hex: string;
}

interface RALModelImage {
  id: string;
  modelId: string;
  ralCode: string;
  imageUrl: string;
}

interface RALModel {
  id: string;
  name: string;
  label: string;
  images: RALModelImage[];
  defaultImage?: string;
  description?: string;
}

// Icons pour les modèles
const modelIcons: Record<string, React.ElementType> = {
  coccinelle: Car,
  jante: Disc,
  moto: Bike,
  portail: DoorOpen,
};

export default function RALModelsAdminPage() {
  const [models, setModels] = React.useState<RALModel[]>([]);
  const [colors, setColors] = React.useState<RALColor[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);
  const [uploadingCell, setUploadingCell] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [pendingUpload, setPendingUpload] = React.useState<{ modelId: string; ralCode: string } | null>(null);

  // Charger les données
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/ral-models");
        if (response.ok) {
          const data = await response.json();
          setModels(data.models || []);
          setColors(data.colors || []);
          if (data.models?.length > 0) {
            setSelectedModel(data.models[0].id);
          }
        }
      } catch (error) {
        console.error("Erreur chargement modèles:", error);
        toast.error("Erreur lors du chargement des modèles");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Obtenir l'image pour un modèle et une couleur
  const getImageForCell = (modelId: string, ralCode: string): string | null => {
    const model = models.find((m) => m.id === modelId);
    if (!model) return null;
    const image = model.images.find((img) => img.ralCode === ralCode);
    return image?.imageUrl || null;
  };

  // Gérer le clic sur une cellule pour upload
  const handleCellClick = (modelId: string, ralCode: string) => {
    setPendingUpload({ modelId, ralCode });
    fileInputRef.current?.click();
  };

  // Gérer l'upload de fichier
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !pendingUpload) return;

    const { modelId, ralCode } = pendingUpload;
    const cellKey = `${modelId}-${ralCode}`;
    setUploadingCell(cellKey);

    try {
      // Créer FormData pour l'upload
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", `ral-models/${modelId}`);

      // Upload vers Cloudinary via notre API
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Erreur upload");
      }

      const uploadData = await uploadResponse.json();
      const imageUrl = uploadData.url;

      // Sauvegarder l'association modèle/couleur/image
      const saveResponse = await fetch("/api/ral-models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modelId,
          ralCode,
          imageUrl,
        }),
      });

      if (!saveResponse.ok) {
        throw new Error("Erreur sauvegarde");
      }

      // Mettre à jour l'état local
      setModels((prev) =>
        prev.map((model) => {
          if (model.id !== modelId) return model;
          const existingImageIndex = model.images.findIndex((img) => img.ralCode === ralCode);
          if (existingImageIndex >= 0) {
            const updatedImages = [...model.images];
            updatedImages[existingImageIndex] = { ...updatedImages[existingImageIndex], imageUrl };
            return { ...model, images: updatedImages };
          } else {
            return {
              ...model,
              images: [...model.images, { id: `${modelId}-${ralCode}`, modelId, ralCode, imageUrl }],
            };
          }
        })
      );

      toast.success("Image uploadée avec succès");
    } catch (error) {
      console.error("Erreur upload:", error);
      toast.error("Erreur lors de l'upload");
    } finally {
      setUploadingCell(null);
      setPendingUpload(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Supprimer une image
  const handleDeleteImage = async (modelId: string, ralCode: string) => {
    if (!confirm("Supprimer cette image ?")) return;

    try {
      const response = await fetch(`/api/ral-models?model=${modelId}&ral=${ralCode}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur suppression");
      }

      // Mettre à jour l'état local
      setModels((prev) =>
        prev.map((model) => {
          if (model.id !== modelId) return model;
          return {
            ...model,
            images: model.images.filter((img) => img.ralCode !== ralCode),
          };
        })
      );

      toast.success("Image supprimée");
    } catch (error) {
      console.error("Erreur suppression:", error);
      toast.error("Erreur lors de la suppression");
    }
  };

  // Compter les images par modèle
  const countImagesForModel = (modelId: string): number => {
    const model = models.find((m) => m.id === modelId);
    return model?.images.length || 0;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-600" />
      </div>
    );
  }

  const currentModel = models.find((m) => m.id === selectedModel);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/pages"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Images Modèles RAL
            </h1>
            <p className="text-gray-500 mt-1">
              {models.length} modèles × {colors.length} couleurs = {models.length * colors.length} images possibles
            </p>
          </div>
        </div>
      </div>

      {/* Input file caché */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Model Tabs */}
      <div className="flex flex-wrap gap-3">
        {models.map((model) => {
          const Icon = modelIcons[model.id] || Palette;
          const imageCount = countImagesForModel(model.id);
          const isComplete = imageCount === colors.length;

          return (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                selectedModel === model.id
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-cyan-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{model.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedModel === model.id
                    ? isComplete
                      ? "bg-green-400 text-green-900"
                      : "bg-white/20 text-white"
                    : isComplete
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {imageCount}/{colors.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Color Grid */}
      {currentModel && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Images pour {currentModel.label}
              </h2>
              <p className="text-sm text-gray-500">
                Cliquez sur une couleur pour uploader une image
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>Image uploadée</span>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <div className="w-3 h-3 bg-gray-200 rounded-full" />
                <span>À ajouter</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {colors.map((color) => {
              const imageUrl = getImageForCell(currentModel.id, color.code);
              const isUploading = uploadingCell === `${currentModel.id}-${color.code}`;

              return (
                <div
                  key={color.code}
                  className="group relative"
                >
                  <button
                    onClick={() => handleCellClick(currentModel.id, color.code)}
                    disabled={isUploading}
                    className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      imageUrl
                        ? "border-green-400 hover:border-green-500"
                        : "border-dashed border-gray-300 hover:border-cyan-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Image ou placeholder */}
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={`${currentModel.label} en ${color.label}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Upload className="w-6 h-6 text-white/70" />
                      </div>
                    )}

                    {/* Loading overlay */}
                    {isUploading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                      </div>
                    )}

                    {/* Success indicator */}
                    {imageUrl && !isUploading && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>

                  {/* Delete button on hover */}
                  {imageUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteImage(currentModel.id, color.code);
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}

                  {/* Color label */}
                  <div className="mt-2 text-center">
                    <p className="text-xs font-medium text-gray-900">{color.name}</p>
                    <p className="text-xs text-gray-500 truncate">{color.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-cyan-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Conseils pour les images
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Format recommandé : JPG ou PNG, 800×600 pixels minimum</li>
              <li>• Les images doivent montrer le modèle dans la couleur RAL correspondante</li>
              <li>• Fond neutre ou transparent pour un meilleur rendu</li>
              <li>• Les images sont automatiquement optimisées lors de l&apos;upload</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


