"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Eye, Edit, Trash2, GripVertical, MapPin, Calendar, EyeOff, Upload, X, Loader2, Building2, Sparkles } from "lucide-react";
import { Modal, ConfirmDialog } from "@/components/admin/ui/Modal";
import { Input, Textarea, Select } from "@/components/admin/ui/FormFields";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Realization {
  id: string;
  titre: string;
  description?: string;
  categorie: string;
  dateRealisation?: Date | string;
  ville?: string;
  imageUrl: string | null;
  images: string[];
  published: boolean;
  ordre: number;
}

const categories = [
  { value: "all", label: "Toutes les catégories" },
  { value: "Garde-corps", label: "Garde-corps" },
  { value: "Escaliers", label: "Escaliers" },
  { value: "Portails", label: "Portails" },
  { value: "Clôtures", label: "Clôtures" },
  { value: "Portes", label: "Portes" },
  { value: "Fenêtres", label: "Fenêtres" },
  { value: "Grilles", label: "Grilles de ventilation" },
  { value: "Bâtiment", label: "Bâtiment" },
];

// Bouton pour injecter les 17 chantiers clients
function SeedButton({ onSeedComplete }: { onSeedComplete: () => void }) {
  const [loading, setLoading] = React.useState(false);
  const [seeded, setSeeded] = React.useState(false);

  const handleSeed = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch("/api/realizations/seed", { method: "POST" });
      const data = await response.json();
      if (data.success) {
        toast.success(`${data.added} chantier(s) ajouté(s) !`);
        setSeeded(true);
        onSeedComplete();
      } else {
        toast.error("Erreur lors de l'ajout");
      }
    } catch {
      toast.error("Erreur lors de l'ajout des chantiers");
    } finally {
      setLoading(false);
    }
  };

  if (seeded) return null;

  return (
    <button
      onClick={handleSeed}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
      title="Ajouter les 17 chantiers clients"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Sparkles className="w-4 h-4" />
      )}
      Injecter chantiers
    </button>
  );
}

function SortableRealization({
  realization,
  onEdit,
  onDelete,
  onTogglePublish,
}: {
  realization: Realization;
  onEdit: (r: Realization) => void;
  onDelete: (id: string) => void;
  onTogglePublish: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: realization.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-xl border overflow-hidden group ${
        isDragging ? "border-cyan-500 shadow-lg" : "border-gray-200"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        {realization.imageUrl ? (
          <Image
            src={realization.imageUrl}
            alt={realization.titre || "Réalisation AZ Construction"}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "";
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Building2 className="w-12 h-12" />
          </div>
        )}
        
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit(realization)}
            className="p-2 bg-white rounded-lg text-gray-700 hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <Link
            href={`/realisations`}
            target="_blank"
            className="p-2 bg-white rounded-lg text-gray-700 hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onDelete(realization.id)}
            className="p-2 bg-white rounded-lg text-gray-700 hover:bg-red-500 hover:text-white transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Drag handle */}
        <button
          {...attributes}
          {...listeners}
          className="absolute top-2 left-2 p-1.5 bg-white/80 rounded-lg text-gray-600 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <GripVertical className="w-4 h-4" />
        </button>

        {/* Status badge */}
        {!realization.published && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded">
            Brouillon
          </div>
        )}

        {/* Images count */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded flex items-center gap-1">
          📷 {realization.images.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{realization.titre}</h3>
          <button
            onClick={() => onTogglePublish(realization.id)}
            className={`p-1 rounded ${
              realization.published
                ? "text-emerald-600 hover:bg-emerald-50"
                : "text-gray-400 hover:bg-gray-100"
            }`}
            title={realization.published ? "Dépublier" : "Publier"}
          >
            {realization.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>
        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded mb-2">
          {realization.categorie}
        </span>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {realization.ville && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {realization.ville}
            </span>
          )}
          {realization.dateRealisation && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(realization.dateRealisation), "MMM yyyy", { locale: fr })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RealizationsPage() {
  const [realizations, setRealizations] = React.useState<Realization[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingRealization, setEditingRealization] = React.useState<Realization | null>(null);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Charger les réalisations depuis l'API
  const fetchRealizations = React.useCallback(async () => {
    try {
      const response = await fetch("/api/realizations?admin=true");
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setRealizations(data.realizations);
        }
      }
    } catch (error) {
      console.error("Erreur chargement réalisations:", error);
      toast.error("Erreur lors du chargement des réalisations");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchRealizations();
  }, [fetchRealizations]);

  const filteredRealizations = selectedCategory === "all"
    ? realizations
    : realizations.filter((r) => r.categorie === selectedCategory);

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = realizations.findIndex((item) => item.id === active.id);
      const newIndex = realizations.findIndex((item) => item.id === over.id);
      const reordered = arrayMove(realizations, oldIndex, newIndex).map((item, index) => ({
        ...item,
        ordre: index + 1,
      }));
      
      setRealizations(reordered);

      // Mettre à jour l'ordre via l'API
      try {
        const updateItem = reordered[newIndex];
        await fetch("/api/realizations", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: updateItem.id, ordre: updateItem.ordre }),
        });
        toast.success("Ordre mis à jour");
      } catch {
        toast.error("Erreur lors de la mise à jour de l'ordre");
      }
    }
  };

  const handleEdit = (realization: Realization) => {
    setEditingRealization(realization);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      try {
        const response = await fetch(`/api/realizations?id=${deleteId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setRealizations(realizations.filter((item) => item.id !== deleteId));
          toast.success("Réalisation supprimée");
        } else {
          toast.error("Erreur lors de la suppression");
        }
      } catch {
        toast.error("Erreur lors de la suppression");
      }
      setDeleteId(null);
    }
  };

  const handleTogglePublish = async (id: string) => {
    const item = realizations.find((r) => r.id === id);
    if (!item) return;

    try {
      const response = await fetch("/api/realizations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, published: !item.published }),
      });
      
      if (response.ok) {
        setRealizations(realizations.map((r) =>
          r.id === id ? { ...r, published: !r.published } : r
        ));
        toast.success(item.published ? "Réalisation dépubliée" : "Réalisation publiée");
      }
    } catch {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const handleSave = async (data: Partial<Realization> & { images: string[] }) => {
    try {
      if (editingRealization) {
        // Mise à jour
        const response = await fetch("/api/realizations", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingRealization.id,
            ...data,
          }),
        });
        
        if (response.ok) {
          await fetchRealizations();
          toast.success("Réalisation mise à jour");
        } else {
          toast.error("Erreur lors de la mise à jour");
        }
      } else {
        // Création
        const response = await fetch("/api/realizations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        
        if (response.ok) {
          await fetchRealizations();
          toast.success("Réalisation créée");
        } else {
          toast.error("Erreur lors de la création");
        }
      }
    } catch {
      toast.error("Erreur lors de l'enregistrement");
    }
    
    setIsModalOpen(false);
    setEditingRealization(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Réalisations</h1>
          <p className="text-gray-500 mt-1">
            Gérez votre portfolio de projets ({realizations.length} réalisations)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SeedButton onSeedComplete={fetchRealizations} />
          <button
            onClick={() => {
              setEditingRealization(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouvelle réalisation
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === cat.value
                ? "bg-cyan-500 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          💡 Glissez-déposez les réalisations pour modifier leur ordre d&apos;affichage sur le site.
        </p>
      </div>

      {/* Empty state */}
      {realizations.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Aucune réalisation
          </h3>
          <p className="text-gray-500 mb-6">
            Commencez par ajouter votre première réalisation
          </p>
          <button
            onClick={() => {
              setEditingRealization(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600"
          >
            <Plus className="w-4 h-4" />
            Nouvelle réalisation
          </button>
        </div>
      ) : (
        /* Grid */
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={filteredRealizations} strategy={rectSortingStrategy}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRealizations.map((realization) => (
                <SortableRealization
                  key={realization.id}
                  realization={realization}
                  onEdit={handleEdit}
                  onDelete={(id) => setDeleteId(id)}
                  onTogglePublish={handleTogglePublish}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {/* Edit Modal */}
      <RealizationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingRealization(null);
        }}
        realization={editingRealization}
        onSave={handleSave}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Supprimer la réalisation"
        message="Êtes-vous sûr de vouloir supprimer cette réalisation ? Cette action est irréversible."
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}

function RealizationModal({
  isOpen,
  onClose,
  realization,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  realization: Realization | null;
  onSave: (data: Partial<Realization> & { images: string[] }) => void;
}) {
  const [formData, setFormData] = React.useState({
    titre: "",
    description: "",
    categorie: "Garde-corps",
    ville: "",
    images: [] as string[],
  });
  const [uploading, setUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (realization) {
      setFormData({
        titre: realization.titre,
        description: realization.description || "",
        categorie: realization.categorie,
        ville: realization.ville || "",
        images: realization.images || [],
      });
    } else {
      setFormData({ titre: "", description: "", categorie: "Garde-corps", ville: "", images: [] });
    }
  }, [realization]);

  const handleFileUpload = async (files: FileList) => {
    setUploading(true);
    const uploadData = new FormData();
    
    Array.from(files).forEach((file) => {
      uploadData.append("files", file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'upload");
      }

      const data = await response.json();
      const newUrls = data.files.map((f: { url: string }) => f.url);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newUrls],
      }));
      toast.success(`${data.files.length} image(s) uploadée(s)`);
    } catch (error) {
      console.error("Erreur upload:", error);
      toast.error("Erreur lors de l'upload des images");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={realization ? "Modifier la réalisation" : "Nouvelle réalisation"}
      size="lg"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            onClick={() => onSave(formData)}
            disabled={!formData.titre || uploading}
            className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            {realization ? "Mettre à jour" : "Créer"}
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Titre"
          value={formData.titre}
          onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
          placeholder="Ex: Villa contemporaine Marseille"
          required
        />
        <Textarea
          label="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description du projet, maître d'ouvrage..."
          rows={3}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <Select
            label="Catégorie"
            value={formData.categorie}
            options={categories.filter((c) => c.value !== "all")}
            onChange={(value) => setFormData({ ...formData, categorie: value })}
            required
          />
          <Input
            label="Ville"
            value={formData.ville}
            onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
            placeholder="Ex: Paris (75)"
          />
        </div>

        {/* Upload zone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Images du projet
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
              uploading ? "border-cyan-500 bg-cyan-50" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
                <p className="text-sm text-cyan-600">Upload en cours...</p>
              </div>
            ) : (
              <>
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  <span className="text-cyan-600 font-medium">Cliquez pour ajouter</span> des images
                </p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP (max 5MB par image)</p>
              </>
            )}
          </div>

          {/* Image previews */}
          {formData.images.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mt-3">
              {formData.images.map((url, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={url}
                    alt={`${formData.titre || "Réalisation"} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {index === 0 && (
                    <div className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-cyan-500 text-white text-xs rounded">
                      Principale
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
