"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Plus, GripVertical, Edit, Trash2, Eye, EyeOff, Save } from "lucide-react";
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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Modal } from "@/components/admin/ui/Modal";
import { Input, Textarea, Switch, FileUpload } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

interface Family {
  id: string;
  nom: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  ordre: number;
  active: boolean;
  productsCount: number;
}

const initialFamilies: Family[] = [
  { id: "1", nom: "Garde-corps", slug: "garde-corps", description: "Garde-corps et balustrades", ordre: 1, active: true, productsCount: 12 },
  { id: "2", nom: "Garde-corps", slug: "garde-corps", description: "Garde-corps intérieurs et extérieurs", ordre: 2, active: true, productsCount: 8 },
  { id: "3", nom: "Escaliers", slug: "escaliers", description: "Escaliers droits, hélicoïdaux et sur mesure", ordre: 3, active: true, productsCount: 6 },
  { id: "4", nom: "Fenêtres", slug: "fenetres", description: "Fenêtres en profilés Jansen", ordre: 4, active: true, productsCount: 10 },
  { id: "5", nom: "Grilles de ventilation", slug: "grilles-ventilation", description: "Grilles techniques et décoratives", ordre: 5, active: true, productsCount: 8 },
  { id: "6", nom: "Portails", slug: "portails", description: "Portails battants et coulissants", ordre: 6, active: true, productsCount: 12 },
  { id: "7", nom: "Clôtures", slug: "clotures", description: "Clôtures en acier et aluminium", ordre: 7, active: true, productsCount: 10 },
];

function SortableFamily({
  family,
  onEdit,
  onToggle,
  onDelete,
}: {
  family: Family;
  onEdit: (family: Family) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: family.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 p-4 bg-white rounded-xl border ${
        isDragging ? "border-cyan-500 shadow-lg" : "border-gray-200"
      }`}
    >
      <button
        {...attributes}
        {...listeners}
        className="p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-5 h-5" />
      </button>

      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
        {family.imageUrl ? (
          <img src={family.imageUrl} alt={family.nom} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-bold text-gray-300">
            {family.nom.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{family.nom}</h3>
          {!family.active && (
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              Inactif
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 truncate">{family.description}</p>
        <p className="text-xs text-gray-400 mt-1">
          {family.productsCount} produit{family.productsCount > 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onToggle(family.id)}
          className={`p-2 rounded-lg transition-colors ${
            family.active
              ? "text-emerald-600 hover:bg-emerald-50"
              : "text-gray-400 hover:bg-gray-100"
          }`}
          title={family.active ? "Désactiver" : "Activer"}
        >
          {family.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
        <button
          onClick={() => onEdit(family)}
          className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
          title="Modifier"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(family.id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Supprimer"
          disabled={family.productsCount > 0}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function FamiliesPage() {
  const [families, setFamilies] = React.useState<Family[]>(initialFamilies);
  const [editingFamily, setEditingFamily] = React.useState<Family | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [hasChanges, setHasChanges] = React.useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFamilies((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
          ...item,
          ordre: index + 1,
        }));
        setHasChanges(true);
        return newItems;
      });
    }
  };

  const handleToggle = (id: string) => {
    setFamilies((items) =>
      items.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
    setHasChanges(true);
  };

  const handleEdit = (family: Family) => {
    setEditingFamily(family);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const family = families.find((f) => f.id === id);
    if (family && family.productsCount > 0) {
      toast.error("Impossible de supprimer une famille contenant des produits");
      return;
    }
    setFamilies((items) => items.filter((item) => item.id !== id));
    setHasChanges(true);
    toast.success("Famille supprimée");
  };

  const handleSave = async () => {
    // TODO: API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setHasChanges(false);
    toast.success("Modifications enregistrées");
  };

  const handleModalSave = (data: Partial<Family>) => {
    if (editingFamily) {
      setFamilies((items) =>
        items.map((item) =>
          item.id === editingFamily.id ? { ...item, ...data } : item
        )
      );
    } else {
      // New family
      const newFamily: Family = {
        id: String(families.length + 1),
        nom: data.nom || "",
        slug: data.slug || "",
        description: data.description,
        imageUrl: data.imageUrl,
        ordre: families.length + 1,
        active: true,
        productsCount: 0,
      };
      setFamilies([...families, newFamily]);
    }
    setHasChanges(true);
    setIsModalOpen(false);
    setEditingFamily(null);
    toast.success(editingFamily ? "Famille mise à jour" : "Famille créée");
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
            <h1 className="text-2xl font-bold text-gray-900">Familles de produits</h1>
            <p className="text-gray-500 mt-1">
              Organisez vos catégories de produits
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
            >
              <Save className="w-4 h-4" />
              Enregistrer l&apos;ordre
            </button>
          )}
          <button
            onClick={() => {
              setEditingFamily(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouvelle famille
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          💡 Glissez-déposez les familles pour modifier leur ordre d&apos;affichage sur le site.
        </p>
      </div>

      {/* Families list */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={families} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {families.map((family) => (
              <SortableFamily
                key={family.id}
                family={family}
                onEdit={handleEdit}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* Edit Modal */}
      <FamilyModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingFamily(null);
        }}
        family={editingFamily}
        onSave={handleModalSave}
      />
    </div>
  );
}

function FamilyModal({
  isOpen,
  onClose,
  family,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  family: Family | null;
  onSave: (data: Partial<Family>) => void;
}) {
  const [formData, setFormData] = React.useState<Partial<Family>>({
    nom: "",
    slug: "",
    description: "",
  });

  React.useEffect(() => {
    if (family) {
      setFormData({
        nom: family.nom,
        slug: family.slug,
        description: family.description,
      });
    } else {
      setFormData({ nom: "", slug: "", description: "" });
    }
  }, [family]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={family ? "Modifier la famille" : "Nouvelle famille"}
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
            className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600"
          >
            {family ? "Mettre à jour" : "Créer"}
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Nom de la famille"
          value={formData.nom || ""}
          onChange={(e) => {
            const nom = e.target.value;
            setFormData({
              ...formData,
              nom,
              slug: family ? formData.slug : generateSlug(nom),
            });
          }}
          placeholder="Ex: Garde-corps"
          required
        />
        <Input
          label="Slug"
          value={formData.slug || ""}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          placeholder="garde-corps"
          hint="Utilisé dans l'URL"
          required
        />
        <Textarea
          label="Description"
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description de la famille..."
          rows={3}
        />
        <FileUpload
          label="Image"
          accept="image/*"
          hint="Image représentative de la famille"
        />
      </div>
    </Modal>
  );
}


