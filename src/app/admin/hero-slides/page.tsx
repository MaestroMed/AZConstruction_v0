"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus, Save, Trash2, Eye, EyeOff, Loader2, GripVertical,
  Database, Monitor, Smartphone, ArrowRight,
} from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ConfirmDialog } from "@/components/admin/ui/Modal";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { PageSkeleton } from "@/components/admin/ui/PageSkeleton";
import { toast } from "sonner";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { cn } from "@/lib/utils";

const IMAGE_KEYS = ["hero-carousel-1", "hero-carousel-2", "hero-carousel-3", "hero-carousel-4", "hero-carousel-5", "hero-carousel-6"];

interface HeroSlide {
  id: string;
  ordre: number;
  active: boolean;
  imageKey: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const EMPTY_SLIDE: Omit<HeroSlide, "id"> = {
  ordre: 0, active: true, imageKey: "hero-carousel-1",
  headline: "", headlineAccent: "", subheadline: "",
  ctaText: "Découvrir", ctaLink: "/produits",
};

// ── Sortable slide card ─────────────────────────────────────
function SortableSlideCard({
  slide, isSelected, onClick, onToggle, getImage,
}: {
  slide: HeroSlide;
  isSelected: boolean;
  onClick: () => void;
  onToggle: () => void;
  getImage: (key: string) => string;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: slide.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all border-2",
        isSelected
          ? "border-cyan-500 bg-cyan-50/50 shadow-sm"
          : "border-transparent hover:border-gray-200 hover:bg-gray-50",
        !slide.active && "opacity-50"
      )}
    >
      <button {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1 text-gray-300 hover:text-gray-500 touch-none">
        <GripVertical className="w-4 h-4" />
      </button>
      <div className="relative w-14 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image src={getImage(slide.imageKey)} alt="" fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">
          {slide.headline || "Sans titre"}{" "}
          <span className="text-cyan-600">{slide.headlineAccent}</span>
        </p>
        <p className="text-xs text-gray-400">{slide.imageKey.replace("hero-carousel-", "Image #")}</p>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={cn("p-1.5 rounded-lg transition-colors", slide.active ? "text-green-600 hover:bg-green-50" : "text-gray-400 hover:bg-gray-100")}
      >
        {slide.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
      </button>
    </div>
  );
}

// ── Live preview ────────────────────────────────────────────
function SlidePreview({ slide, getImage, previewMode }: {
  slide: HeroSlide | null;
  getImage: (key: string) => string;
  previewMode: "desktop" | "mobile";
}) {
  if (!slide) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <p className="text-sm">Sélectionnez un slide pour le prévisualiser</p>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-navy-dark", previewMode === "mobile" ? "max-w-[375px] mx-auto aspect-[9/16]" : "w-full aspect-video")}>
      <Image src={getImage(slide.imageKey)} alt="" fill className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <h2 className={cn("font-bold text-white mb-2 leading-tight", previewMode === "mobile" ? "text-2xl" : "text-4xl")}>
          {slide.headline || "Titre"}{" "}
          <span className="text-cyan-400">{slide.headlineAccent || "accent"}</span>
        </h2>
        <p className={cn("text-white/60 mb-4 max-w-lg", previewMode === "mobile" ? "text-sm" : "text-lg")}>
          {slide.subheadline || "Sous-titre du slide..."}
        </p>
        <div className="flex gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400 text-navy-dark text-sm font-bold rounded-lg">
            {slide.ctaText || "CTA"} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
      {!slide.active && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-red-500/80 text-white text-xs rounded-full font-medium">
          Inactif
        </div>
      )}
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────
const DEFAULT_SLIDES_DATA = [
  { ordre: 0, active: true, imageKey: "hero-carousel-1", headline: "Garde-corps", headlineAccent: "sur mesure.", subheadline: "Verre feuilleté, câbles acier, barreaux design — fabriqués dans notre atelier de 1 800m² à Bruyères-sur-Oise.", ctaText: "Découvrir les garde-corps", ctaLink: "/produits/garde-corps" },
  { ordre: 1, active: true, imageKey: "hero-carousel-2", headline: "Escaliers", headlineAccent: "d'exception.", subheadline: "Droits, hélicoïdaux, quart-tournant — chaque escalier est une pièce unique conçue sur mesure.", ctaText: "Voir nos escaliers", ctaLink: "/produits/escaliers" },
  { ordre: 2, active: true, imageKey: "hero-carousel-3", headline: "L'acier", headlineAccent: "à votre image.", subheadline: "Portails, clôtures, portes Jansen, verrières — tout fabriqué sur mesure depuis 2018.", ctaText: "Explorer nos produits", ctaLink: "/produits" },
];

export default function HeroSlidesAdminPage() {
  const { getImage } = useSiteImages();
  const [slides, setSlides] = React.useState<HeroSlide[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [seeding, setSeeding] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [form, setForm] = React.useState<HeroSlide | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [previewMode, setPreviewMode] = React.useState<"desktop" | "mobile">("desktop");
  const [confirmSeed, setConfirmSeed] = React.useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = React.useState<string | null>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  React.useEffect(() => {
    fetch("/api/hero-slides").then(r => r.json()).then(data => {
      if (data.success) {
        const dbSlides = data.slides.filter((s: HeroSlide) => !s.id?.startsWith("default-"));
        setSlides(dbSlides);
        if (dbSlides.length > 0) { setSelectedId(dbSlides[0].id); setForm(dbSlides[0]); }
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const selectSlide = (slide: HeroSlide) => {
    setSelectedId(slide.id);
    setForm({ ...slide });
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIdx = slides.findIndex(s => s.id === active.id);
    const newIdx = slides.findIndex(s => s.id === over.id);
    const reordered = arrayMove(slides, oldIdx, newIdx).map((s, i) => ({ ...s, ordre: i }));
    setSlides(reordered);
    // Save order to DB
    for (const s of reordered) {
      if (!s.id.startsWith("new-")) {
        await fetch("/api/hero-slides", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: s.id, ordre: s.ordre }) });
      }
    }
    toast.success("Ordre mis à jour");
  };

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      const isNew = form.id.startsWith("new-");
      const method = isNew ? "POST" : "PUT";
      const body = isNew ? (({ id: _, ...rest }) => rest)(form) : form;
      const res = await fetch("/api/hero-slides", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSlides(prev => prev.map(s => s.id === form.id ? data.slide : s));
      setSelectedId(data.slide.id);
      setForm(data.slide);
      toast.success("Slide sauvegardé");
    } catch { toast.error("Erreur"); }
    finally { setSaving(false); }
  };

  const seedSlides = async () => {
    setSeeding(true);
    try {
      const created: HeroSlide[] = [];
      for (const s of DEFAULT_SLIDES_DATA) {
        const res = await fetch("/api/hero-slides", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(s) });
        if (res.ok) { const data = await res.json(); created.push(data.slide); }
      }
      setSlides(prev => [...prev, ...created]);
      if (created.length > 0) { setSelectedId(created[0].id); setForm(created[0]); }
      toast.success(`${created.length} slides créés !`);
    } catch { toast.error("Erreur"); }
    finally { setSeeding(false); }
  };

  const deleteSlide = async (id: string) => {
    if (!id.startsWith("new-")) await fetch(`/api/hero-slides?id=${id}`, { method: "DELETE" });
    setSlides(prev => prev.filter(s => s.id !== id));
    if (selectedId === id) { setSelectedId(null); setForm(null); }
    toast.success("Slide supprimé");
    setConfirmDeleteId(null);
  };

  const toggleSlide = async (id: string) => {
    const slide = slides.find(s => s.id === id);
    if (!slide) return;
    const newActive = !slide.active;
    setSlides(prev => prev.map(s => s.id === id ? { ...s, active: newActive } : s));
    if (form?.id === id) setForm(prev => prev ? { ...prev, active: newActive } : prev);
    await fetch("/api/hero-slides", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, active: newActive }) });
  };

  const addSlide = () => {
    const newSlide: HeroSlide = { ...EMPTY_SLIDE, id: `new-${Date.now()}`, ordre: slides.length };
    setSlides(prev => [...prev, newSlide]);
    setSelectedId(newSlide.id);
    setForm(newSlide);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Slides Hero Homepage"
        description={`${slides.length}/6 slides — Gérez le carousel de la page d'accueil`}
        backHref="/admin"
        actions={[
          { label: "Initialiser", icon: Database, onClick: () => setConfirmSeed(true), variant: "secondary", disabled: seeding },
          { label: "Ajouter un slide", icon: Plus, onClick: addSlide, disabled: slides.length >= 6 },
        ]}
      />

      {loading ? (
        <PageSkeleton variant="grid" />
      ) : slides.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
          <Database className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p className="text-gray-600 font-medium mb-2">Aucun slide en base de données</p>
          <p className="text-gray-400 text-sm mb-6">Les slides par défaut sont utilisés sur le site.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setConfirmSeed(true)} disabled={seeding}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 disabled:opacity-50">
              <Database className="w-4 h-4" /> Initialiser
            </button>
            <button onClick={addSlide} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600">
              <Plus className="w-4 h-4" /> Créer un slide
            </button>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-5 gap-6">
          {/* ── Left: Slide list (draggable) ──────────── */}
          <div className="lg:col-span-2 space-y-2">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={slides} strategy={verticalListSortingStrategy}>
                {slides.map(slide => (
                  <SortableSlideCard
                    key={slide.id}
                    slide={slide}
                    isSelected={selectedId === slide.id}
                    onClick={() => selectSlide(slide)}
                    onToggle={() => toggleSlide(slide.id)}
                    getImage={getImage}
                  />
                ))}
              </SortableContext>
            </DndContext>

            {slides.length < 6 && (
              <button onClick={addSlide}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-200 text-gray-400 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-600 transition-colors">
                <Plus className="w-4 h-4" /> Ajouter ({slides.length}/6)
              </button>
            )}
          </div>

          {/* ── Right: Preview + Editor ───────────────── */}
          <div className="lg:col-span-3 space-y-4">
            {/* Preview tabs */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Aperçu en direct</h3>
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                <button onClick={() => setPreviewMode("desktop")}
                  className={cn("p-1.5 rounded-md transition-colors", previewMode === "desktop" ? "bg-white shadow-sm text-gray-900" : "text-gray-400")}>
                  <Monitor className="w-4 h-4" />
                </button>
                <button onClick={() => setPreviewMode("mobile")}
                  className={cn("p-1.5 rounded-md transition-colors", previewMode === "mobile" ? "bg-white shadow-sm text-gray-900" : "text-gray-400")}>
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Live preview */}
            <SlidePreview slide={form} getImage={getImage} previewMode={previewMode} />

            {/* Editor form */}
            {form && (
              <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Image</label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {IMAGE_KEYS.map(key => (
                      <button key={key} onClick={() => setForm({ ...form, imageKey: key })}
                        className={cn("relative h-14 rounded-xl overflow-hidden border-2 transition-all",
                          form.imageKey === key ? "border-cyan-500 ring-2 ring-cyan-200" : "border-gray-200 hover:border-gray-400")}>
                        <Image src={getImage(key)} alt={key} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-0.5">
                          <span className="text-white text-[8px] font-bold">{key.replace("hero-carousel-", "#")}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Titre</label>
                    <input type="text" value={form.headline} onChange={e => setForm({ ...form, headline: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none" placeholder="Garde-corps" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Accent <span className="text-cyan-500">(en couleur)</span></label>
                    <input type="text" value={form.headlineAccent} onChange={e => setForm({ ...form, headlineAccent: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none" placeholder="sur mesure." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Sous-titre</label>
                  <textarea rows={2} value={form.subheadline} onChange={e => setForm({ ...form, subheadline: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none" placeholder="Description courte..." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Texte bouton</label>
                    <input type="text" value={form.ctaText} onChange={e => setForm({ ...form, ctaText: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none" placeholder="Découvrir" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Lien bouton</label>
                    <input type="text" value={form.ctaLink} onChange={e => setForm({ ...form, ctaLink: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none" placeholder="/produits/garde-corps" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <button onClick={() => setConfirmDeleteId(form.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm transition-colors">
                    <Trash2 className="w-4 h-4" /> Supprimer
                  </button>
                  <button onClick={handleSave} disabled={saving}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors disabled:opacity-50">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Sauvegarder
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ConfirmDialog isOpen={!!confirmDeleteId} onClose={() => setConfirmDeleteId(null)}
        onConfirm={() => confirmDeleteId && deleteSlide(confirmDeleteId)}
        title="Supprimer le slide" message="Ce slide sera définitivement supprimé."
        confirmText="Supprimer" variant="danger" />

      <ConfirmDialog isOpen={confirmSeed} onClose={() => setConfirmSeed(false)}
        onConfirm={() => { setConfirmSeed(false); seedSlides(); }}
        title="Initialiser les slides"
        message={slides.length > 0 ? `Ajouter 3 slides par défaut aux ${slides.length} existant(s) ?` : "Créer les 3 slides par défaut ?"}
        confirmText="Initialiser" variant="info" />
    </div>
  );
}
