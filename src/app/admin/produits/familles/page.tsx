"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft, Plus, GripVertical, Edit, Trash2, Eye, EyeOff, Save, Loader2, ImageIcon,
} from "lucide-react";
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
import { Input, Textarea } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

interface VariantItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl?: string;
  startingPrice?: string;
}

interface Family {
  id: string;
  nom: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  ordre: number;
  active: boolean;
  productsCount?: number;
  variants?: VariantItem[];
}

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
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: family.id });
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 };

  const variantCount = (family.variants ?? []).length;
  const variantImgCount = (family.variants ?? []).filter((v) => v.imageUrl).length;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 p-4 bg-white rounded-xl border ${isDragging ? "border-cyan-500 shadow-lg" : "border-gray-200"}`}
    >
      <button {...attributes} {...listeners} className="p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
        <GripVertical className="w-5 h-5" />
      </button>

      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
        {family.imageUrl ? (
          <img src={family.imageUrl} alt={family.nom} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-bold text-gray-300">{family.nom.charAt(0)}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-gray-900">{family.nom}</h3>
          {!family.active && (
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Inactif</span>
          )}
        </div>
        <p className="text-sm text-gray-500 truncate">{family.description}</p>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-xs text-gray-400">
            {variantCount} modèle{variantCount !== 1 ? "s" : ""}
          </p>
          {variantCount > 0 && (
            <p className={`text-xs ${variantImgCount === variantCount ? "text-emerald-500" : "text-orange-400"}`}>
              {variantImgCount}/{variantCount} photos
            </p>
          )}
          {family.imageUrl && (
            <p className="text-xs text-emerald-500">Hero configuré</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1">
        {/* Images button — links to dedicated images page */}
        <Link
          href={`/admin/produits/images#${family.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-xs font-medium transition-colors"
          title="Gérer les images"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          Images
        </Link>

        <button
          onClick={() => onToggle(family.id)}
          className={`p-2 rounded-lg transition-colors ${family.active ? "text-emerald-600 hover:bg-emerald-50" : "text-gray-400 hover:bg-gray-100"}`}
          title={family.active ? "Désactiver" : "Activer"}
        >
          {family.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
        <button onClick={() => onEdit(family)} className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Modifier infos">
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(family.id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Supprimer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function FamiliesPage() {
  const [families, setFamilies] = React.useState<Family[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [editingFamily, setEditingFamily] = React.useState<Family | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [hasChanges, setHasChanges] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  React.useEffect(() => {
    fetch("/api/product-families?all=true")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.families) {
          setFamilies(
            data.families.map((f: Family) => ({
              ...f,
              productsCount: 0,
              variants: f.variants ?? [],
            }))
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFamilies((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex).map((item, idx) => ({ ...item, ordre: idx + 1 }));
      });
      setHasChanges(true);
    }
  };

  const handleToggle = async (id: string) => {
    const family = families.find((f) => f.id === id);
    if (!family) return;
    const newActive = !family.active;
    setFamilies((items) => items.map((f) => (f.id === id ? { ...f, active: newActive } : f)));
    try {
      await fetch("/api/product-families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, active: newActive }),
      });
      toast.success(newActive ? "Famille activée" : "Famille désactivée");
    } catch {
      toast.error("Erreur lors de la mise à jour");
      setFamilies((items) => items.map((f) => (f.id === id ? { ...f, active: !newActive } : f)));
    }
  };

  const handleEdit = (family: Family) => {
    setEditingFamily(family);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette famille ?")) return;
    try {
      await fetch(`/api/product-families?id=${id}`, { method: "DELETE" });
      setFamilies((items) => items.filter((f) => f.id !== id));
      toast.success("Famille supprimée");
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  const handleSaveOrder = async () => {
    setSaving(true);
    try {
      await Promise.all(
        families.map((f) =>
          fetch("/api/product-families", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: f.id, ordre: f.ordre }),
          })
        )
      );
      setHasChanges(false);
      toast.success("Ordre enregistré");
    } catch {
      toast.error("Erreur lors de l'enregistrement");
    } finally {
      setSaving(false);
    }
  };

  const handleModalSave = (data: Partial<Family>) => {
    if (editingFamily) {
      setFamilies((items) =>
        items.map((f) => f.id === editingFamily.id ? { ...f, ...data } : f)
      );
    } else {
      const newFamily: Family = {
        id: data.id || String(Date.now()),
        nom: data.nom || "",
        slug: data.slug || "",
        description: data.description,
        imageUrl: data.imageUrl,
        ordre: families.length + 1,
        active: true,
        productsCount: 0,
        variants: [],
      };
      setFamilies([...families, newFamily]);
    }
    setIsModalOpen(false);
    setEditingFamily(null);
    toast.success(editingFamily ? "Famille mise à jour" : "Famille créée");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/produits" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Familles de produits</h1>
            <p className="text-gray-500 mt-1">Organisez vos catégories de produits</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/produits/images"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
            Gérer les images
          </Link>
          {hasChanges && (
            <button
              onClick={handleSaveOrder}
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Enregistrer l&apos;ordre
            </button>
          )}
          <button
            onClick={() => { setEditingFamily(null); setIsModalOpen(true); }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouvelle famille
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            Glissez-déposez les familles pour modifier leur ordre d&apos;affichage sur le site.
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <p className="text-sm text-indigo-700">
            Pour gérer les photos du carrousel hero et les images par modèle, cliquez sur{" "}
            <Link href="/admin/produits/images" className="font-semibold underline">
              Gérer les images
            </Link>
            .
          </p>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={families} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {families.map((family) => (
              <SortableFamily key={family.id} family={family} onEdit={handleEdit} onToggle={handleToggle} onDelete={handleDelete} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {families.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="mb-4">Aucune famille trouvée.</p>
          <button
            onClick={() => { setEditingFamily(null); setIsModalOpen(true); }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl text-sm font-semibold"
          >
            <Plus className="w-4 h-4" /> Créer une famille
          </button>
        </div>
      )}

      <FamilyModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingFamily(null); }}
        family={editingFamily}
        onSave={handleModalSave}
      />
    </div>
  );
}

// ─── Simplified Modal — Info only ───────────────────────────

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
  const [formData, setFormData] = React.useState<Partial<Family>>({ nom: "", slug: "", description: "" });
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (family) {
      setFormData({ nom: family.nom, slug: family.slug, description: family.description });
    } else {
      setFormData({ nom: "", slug: "", description: "" });
    }
  }, [family, isOpen]);

  const generateSlug = (name: string) =>
    name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSave = async () => {
    if (!formData.nom || !formData.slug) { toast.error("Nom et slug requis"); return; }
    setSaving(true);
    try {
      const body = {
        ...(family ? { id: family.id } : {}),
        nom: formData.nom,
        slug: formData.slug,
        description: formData.description,
        active: family?.active ?? true,
        ordre: family?.ordre ?? 0,
        variants: family?.variants ?? [],
      };
      const res = await fetch("/api/product-families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Sauvegarde échouée");
      const data = await res.json();
      onSave({ ...body, id: data.family?.id ?? family?.id });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={family ? `Modifier — ${family.nom}` : "Nouvelle famille"}
      footer={
        <>
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Annuler
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
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
            setFormData({ ...formData, nom, slug: family ? formData.slug : generateSlug(nom) });
          }}
          placeholder="Ex: Garde-corps"
          required
        />
        <Input
          label="Slug (URL)"
          value={formData.slug || ""}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          placeholder="garde-corps"
          hint="Utilisé dans l'URL : /produits/garde-corps"
          required
        />
        <Textarea
          label="Description"
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description de la famille..."
          rows={3}
        />

        {/* Link to images page */}
        {family && (
          <div className="flex items-center gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
            <ImageIcon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
            <p className="text-sm text-indigo-700">
              Pour gérer les photos du carrousel et des modèles :{" "}
              <Link
                href={`/admin/produits/images#${family.slug}`}
                onClick={onClose}
                className="font-semibold underline hover:text-indigo-900"
              >
                Gérer les images de {family.nom} →
              </Link>
            </p>
          </div>
        )}

        {!family && (
          <p className="text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded-lg p-3">
            Créez d&apos;abord la famille, puis gérez ses images et modèles depuis la page dédiée.
          </p>
        )}
      </div>
    </Modal>
  );
}
