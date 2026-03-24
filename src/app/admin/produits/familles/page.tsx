"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, Plus, GripVertical, Edit, Trash2, Eye, EyeOff, Save, Loader2, X, ImageIcon, LayoutGrid,
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 p-4 bg-white rounded-xl border ${isDragging ? "border-cyan-500 shadow-lg" : "border-gray-200"}`}
    >
      <button {...attributes} {...listeners} className="p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
        <GripVertical className="w-5 h-5" />
      </button>

      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
        {family.imageUrl ? (
          <img src={family.imageUrl} alt={family.nom} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-bold text-gray-300">{family.nom.charAt(0)}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{family.nom}</h3>
          {!family.active && (
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Inactif</span>
          )}
        </div>
        <p className="text-sm text-gray-500 truncate">{family.description}</p>
        <p className="text-xs text-gray-400 mt-1">
          {(family.variants ?? []).length} variante{(family.variants ?? []).length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onToggle(family.id)}
          className={`p-2 rounded-lg transition-colors ${family.active ? "text-emerald-600 hover:bg-emerald-50" : "text-gray-400 hover:bg-gray-100"}`}
          title={family.active ? "Désactiver" : "Activer"}
        >
          {family.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
        <button onClick={() => onEdit(family)} className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Modifier">
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

  // Load families from DB
  React.useEffect(() => {
    fetch("/api/product-families")
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
        items.map((f) =>
          f.id === editingFamily.id
            ? { ...f, ...data, imageUrl: data.imageUrl ?? f.imageUrl }
            : f
        )
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          💡 Glissez-déposez les familles pour modifier leur ordre d&apos;affichage sur le site.
        </p>
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

// ─── Modal ──────────────────────────────────────────────────────────────────

type ModalTab = "info" | "images" | "variantes";

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
  const [tab, setTab] = React.useState<ModalTab>("info");
  const [formData, setFormData] = React.useState<Partial<Family>>({ nom: "", slug: "", description: "" });
  const [saving, setSaving] = React.useState(false);

  // Hero images
  const [heroImages, setHeroImages] = React.useState<{ id: string; imageUrl: string; ordre: number }[]>([]);
  const [uploadingHero, setUploadingHero] = React.useState(false);
  const heroFileRef = React.useRef<HTMLInputElement>(null);

  // Variants
  const [variants, setVariants] = React.useState<VariantItem[]>([]);
  const [uploadingVariantId, setUploadingVariantId] = React.useState<string | null>(null);
  const variantFileRefs = React.useRef<Record<string, HTMLInputElement | null>>({});

  React.useEffect(() => {
    if (isOpen) setTab("info");
  }, [isOpen]);

  React.useEffect(() => {
    if (family) {
      setFormData({ nom: family.nom, slug: family.slug, description: family.description });
      setVariants(family.variants ?? []);
      // Load hero images
      fetch(`/api/product-families/images?familySlug=${family.slug}`)
        .then((r) => r.json())
        .then((data) => { if (data.success) setHeroImages(data.images || []); })
        .catch(() => {});
    } else {
      setFormData({ nom: "", slug: "", description: "" });
      setVariants([]);
      setHeroImages([]);
    }
  }, [family]);

  const generateSlug = (name: string) =>
    name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // ── Hero image upload ──
  const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !family) return;
    setUploadingHero(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload échoué");
      const { url, imageUrl } = await res.json();
      const finalUrl = url || imageUrl;
      if (!finalUrl) throw new Error("URL manquante");
      const saveRes = await fetch("/api/product-families/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familySlug: family.slug, imageUrl: finalUrl, ordre: heroImages.length }),
      });
      if (!saveRes.ok) throw new Error("Sauvegarde échouée");
      const saveData = await saveRes.json();
      const newImages = [...heroImages, saveData.image];
      setHeroImages(newImages);
      // First image = thumbnail
      if (newImages.length === 1) {
        await fetch("/api/product-families", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: family.id, imageUrl: finalUrl }),
        });
        setFormData((d) => ({ ...d, imageUrl: finalUrl }));
      }
      toast.success("Image ajoutée");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingHero(false);
      if (heroFileRef.current) heroFileRef.current.value = "";
    }
  };

  const handleDeleteHeroImage = async (id: string) => {
    try {
      await fetch(`/api/product-families/images?id=${id}`, { method: "DELETE" });
      setHeroImages((prev) => prev.filter((img) => img.id !== id));
      toast.success("Image supprimée");
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  // ── Variant helpers ──
  const addVariant = () => {
    const newV: VariantItem = {
      id: `new-${Date.now()}`,
      name: "",
      description: "",
      features: [],
      imageUrl: undefined,
    };
    setVariants((v) => [...v, newV]);
  };

  const removeVariant = (id: string) => setVariants((v) => v.filter((item) => item.id !== id));

  const updateVariant = (id: string, patch: Partial<VariantItem>) =>
    setVariants((v) => v.map((item) => (item.id === id ? { ...item, ...patch } : item)));

  const handleVariantImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, variantId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingVariantId(variantId);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload échoué");
      const { url, imageUrl } = await res.json();
      const finalUrl = url || imageUrl;
      updateVariant(variantId, { imageUrl: finalUrl });
      toast.success("Photo ajoutée");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingVariantId(null);
      const ref = variantFileRefs.current[variantId];
      if (ref) ref.value = "";
    }
  };

  // ── Save ──
  const handleSave = async () => {
    if (!formData.nom || !formData.slug) { toast.error("Nom et slug requis"); return; }
    setSaving(true);
    try {
      const body = {
        ...(family ? { id: family.id } : {}),
        nom: formData.nom,
        slug: formData.slug,
        description: formData.description,
        imageUrl: heroImages[0]?.imageUrl ?? formData.imageUrl,
        variants,
        active: family?.active ?? true,
        ordre: family?.ordre ?? 0,
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

  const TABS: { id: ModalTab; label: string; icon: React.ReactNode }[] = [
    { id: "info", label: "Informations", icon: <Edit className="w-4 h-4" /> },
    { id: "images", label: "Images Hero", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "variantes", label: "Variantes", icon: <LayoutGrid className="w-4 h-4" /> },
  ];

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
      {/* Tab bar */}
      <div className="flex border-b border-gray-200 mb-5 -mt-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              tab === t.id
                ? "border-cyan-500 text-cyan-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Info ── */}
      {tab === "info" && (
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
          {!family && (
            <p className="text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded-lg p-3">
              Créez d&apos;abord la famille, puis revenez pour ajouter des images et des variantes.
            </p>
          )}
        </div>
      )}

      {/* ── Tab: Images Hero ── */}
      {tab === "images" && (
        <div className="space-y-4">
          {!family ? (
            <p className="text-sm text-gray-500 text-center py-8">Sauvegardez la famille avant d&apos;ajouter des images.</p>
          ) : (
            <>
              <p className="text-sm text-gray-500">
                Ces images forment le carrousel de la page produit. La première image est aussi la miniature dans la liste.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {heroImages.map((img, idx) => (
                  <div key={img.id} className="relative group aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <img src={img.imageUrl} alt="" className="w-full h-full object-cover" />
                    {idx === 0 && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full font-medium">
                        Principale
                      </span>
                    )}
                    <button
                      onClick={() => handleDeleteHeroImage(img.id)}
                      className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => heroFileRef.current?.click()}
                  disabled={uploadingHero}
                  className="aspect-video rounded-xl border-2 border-dashed border-gray-300 hover:border-cyan-400 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-cyan-500 transition-colors disabled:opacity-50"
                >
                  {uploadingHero ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Plus className="w-6 h-6" />
                      <span className="text-xs font-medium">Ajouter</span>
                    </>
                  )}
                </button>
              </div>
              <input ref={heroFileRef} type="file" accept="image/*" className="hidden" onChange={handleHeroUpload} />
              <p className="text-xs text-gray-400">
                {heroImages.length === 0 ? "Aucune image. Cliquez sur + pour en ajouter." : `${heroImages.length} image${heroImages.length > 1 ? "s" : ""}. Glissez-déposez pour réordonner.`}
              </p>
            </>
          )}
        </div>
      )}

      {/* ── Tab: Variantes ── */}
      {tab === "variantes" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Gérez les sous-catégories et ajoutez une photo pour chaque modèle.
            </p>
            <button
              onClick={addVariant}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-xs font-semibold hover:bg-cyan-600 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Ajouter
            </button>
          </div>

          {variants.length === 0 && (
            <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
              <LayoutGrid className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">Aucune variante. Cliquez sur &quot;Ajouter&quot;.</p>
            </div>
          )}

          <div className="space-y-4">
            {variants.map((variant) => (
              <div key={variant.id} className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Image mini-hero preview */}
                <div className="relative h-28 bg-gradient-to-br from-navy-dark to-blue-800 flex items-center justify-center group">
                  {variant.imageUrl ? (
                    <Image src={variant.imageUrl} alt={variant.name || "Variante"} fill className="object-cover" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-white/20" />
                  )}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => variantFileRefs.current[variant.id]?.click()}
                      disabled={uploadingVariantId === variant.id}
                      className="px-3 py-1.5 bg-white text-gray-800 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {uploadingVariantId === variant.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Changer la photo"
                      )}
                    </button>
                  </div>
                  {!variant.imageUrl && (
                    <button
                      onClick={() => variantFileRefs.current[variant.id]?.click()}
                      disabled={uploadingVariantId === variant.id}
                      className="absolute bottom-2 right-2 px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-lg text-xs font-medium border border-white/30 hover:bg-white/30 transition-colors"
                    >
                      + Photo
                    </button>
                  )}
                  <input
                    ref={(el) => { variantFileRefs.current[variant.id] = el; }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleVariantImageUpload(e, variant.id)}
                  />
                  {/* Delete variant */}
                  <button
                    onClick={() => removeVariant(variant.id)}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Fields */}
                <div className="p-4 space-y-3">
                  <input
                    type="text"
                    value={variant.name}
                    onChange={(e) => updateVariant(variant.id, { name: e.target.value })}
                    placeholder="Nom du modèle *"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                  />
                  <textarea
                    value={variant.description}
                    onChange={(e) => updateVariant(variant.id, { description: e.target.value })}
                    placeholder="Description courte"
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
                  />
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Caractéristiques (une par ligne)</p>
                    <textarea
                      value={(variant.features ?? []).join("\n")}
                      onChange={(e) =>
                        updateVariant(variant.id, {
                          features: e.target.value.split("\n").filter((f) => f.trim()),
                        })
                      }
                      placeholder="Verre 8+8 feuilleté&#10;Main courante acier&#10;Fixations invisibles"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-cyan-300 outline-none resize-none font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
