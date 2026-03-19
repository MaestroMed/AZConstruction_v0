"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Save, Trash2, Eye, EyeOff, Loader2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

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
  ordre: 0,
  active: true,
  imageKey: "hero-carousel-1",
  headline: "",
  headlineAccent: "",
  subheadline: "",
  ctaText: "Découvrir",
  ctaLink: "/produits",
};

function SlideEditor({ slide, index, onSave, onDelete, onToggle, getImage }: {
  slide: HeroSlide;
  index: number;
  onSave: (slide: HeroSlide) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string, active: boolean) => Promise<void>;
  getImage: (key: string) => string;
}) {
  const [form, setForm] = React.useState(slide);
  const [saving, setSaving] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleSave = async () => {
    setSaving(true);
    try { await onSave(form); toast.success("Slide sauvegardé"); }
    catch { toast.error("Erreur sauvegarde"); }
    finally { setSaving(false); }
  };

  return (
    <div className={`border rounded-2xl overflow-hidden ${slide.active ? "border-gray-200" : "border-gray-100 opacity-60"}`}>
      {/* Header row */}
      <div className="flex items-center gap-3 px-5 py-4 bg-white">
        <GripVertical className="w-5 h-5 text-gray-300 flex-shrink-0" />
        <div className="relative w-16 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
          <Image src={getImage(slide.imageKey)} alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 truncate">{slide.headline} <span className="text-cyan-600">{slide.headlineAccent}</span></p>
          <p className="text-xs text-gray-400">Image : {slide.imageKey}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full ${slide.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
            {slide.active ? "Actif" : "Inactif"}
          </span>
          <button onClick={() => onToggle(slide.id, !slide.active)} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
            {slide.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button onClick={() => setExpanded(!expanded)} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded editor */}
      {expanded && (
        <div className="px-5 pb-5 pt-2 bg-gray-50 border-t border-gray-100 space-y-4">
          {/* Image selector */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Image (clé)</label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {IMAGE_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => setForm({ ...form, imageKey: key })}
                  className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all ${form.imageKey === key ? "border-cyan-500 ring-2 ring-cyan-200" : "border-gray-200 hover:border-gray-400"}`}
                >
                  <Image src={getImage(key)} alt={key} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-1">
                    <span className="text-white text-[9px] font-bold">{key.replace("hero-carousel-", "#")}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">Gérez les images dans Admin → Paramètres → Images → Hero Carousel</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Titre principal</label>
              <input type="text" value={form.headline} onChange={e => setForm({ ...form, headline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                placeholder="Garde-corps" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Accent (en couleur)</label>
              <input type="text" value={form.headlineAccent} onChange={e => setForm({ ...form, headlineAccent: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                placeholder="sur mesure." />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Sous-titre</label>
            <textarea rows={2} value={form.subheadline} onChange={e => setForm({ ...form, subheadline: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
              placeholder="Description courte..." />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Texte du bouton</label>
              <input type="text" value={form.ctaText} onChange={e => setForm({ ...form, ctaText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                placeholder="Découvrir" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Lien du bouton</label>
              <input type="text" value={form.ctaLink} onChange={e => setForm({ ...form, ctaLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                placeholder="/produits/garde-corps" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button onClick={() => onDelete(slide.id)}
              className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors">
              <Trash2 className="w-4 h-4" /> Supprimer
            </button>
            <button onClick={handleSave} disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors disabled:opacity-50">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Sauvegarder
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HeroSlidesAdminPage() {
  const { getImage } = useSiteImages();
  const [slides, setSlides] = React.useState<HeroSlide[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [adding, setAdding] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/hero-slides")
      .then(r => r.json())
      .then(data => {
        if (data.success) setSlides(data.slides.filter((s: HeroSlide) => !s.id?.startsWith("d")));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const saveSlide = async (slide: HeroSlide) => {
    const isNew = slide.id.startsWith("new-");
    const method = isNew ? "POST" : "PUT";
    const body = isNew ? (({ id: _, ...rest }) => rest)(slide) : slide;
    const res = await fetch("/api/hero-slides", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (isNew) {
      setSlides(prev => prev.map(s => s.id === slide.id ? data.slide : s));
    } else {
      setSlides(prev => prev.map(s => s.id === slide.id ? data.slide : s));
    }
  };

  const deleteSlide = async (id: string) => {
    if (!confirm("Supprimer ce slide ?")) return;
    if (!id.startsWith("new-")) {
      await fetch(`/api/hero-slides?id=${id}`, { method: "DELETE" });
    }
    setSlides(prev => prev.filter(s => s.id !== id));
    toast.success("Slide supprimé");
  };

  const toggleSlide = async (id: string, active: boolean) => {
    const res = await fetch("/api/hero-slides", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, active }) });
    if (res.ok) {
      setSlides(prev => prev.map(s => s.id === id ? { ...s, active } : s));
    }
  };

  const addSlide = () => {
    const newSlide: HeroSlide = {
      ...EMPTY_SLIDE,
      id: `new-${Date.now()}`,
      ordre: slides.length,
    };
    setSlides(prev => [...prev, newSlide]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Slides Hero Homepage</h1>
            <p className="text-gray-500 text-sm mt-1">Gérez le carousel de la page d&apos;accueil — jusqu&apos;à 6 slides</p>
          </div>
        </div>
        <button
          onClick={addSlide}
          disabled={slides.length >= 6}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors disabled:opacity-40"
        >
          <Plus className="w-4 h-4" />
          Ajouter un slide
        </button>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700">
        <strong>Conseil :</strong> Activez/désactivez chaque slide sans le supprimer. Les slides désactivés n&apos;apparaissent pas sur le site. Les images sont configurées dans <Link href="/admin/parametres/images" className="underline font-semibold">Paramètres → Images → Hero Carousel 1-6</Link>.
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
        </div>
      ) : slides.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="mb-4">Aucun slide configuré — les slides par défaut sont utilisés.</p>
          <button onClick={addSlide} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600">
            <Plus className="w-4 h-4" /> Créer mon premier slide
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {slides.map((slide, index) => (
            <SlideEditor
              key={slide.id}
              slide={slide}
              index={index}
              onSave={saveSlide}
              onDelete={deleteSlide}
              onToggle={toggleSlide}
              getImage={getImage}
            />
          ))}
        </div>
      )}

      {slides.length > 0 && slides.length < 6 && (
        <div className="text-center">
          <button onClick={addSlide} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-600 transition-colors">
            <Plus className="w-4 h-4" /> Ajouter un slide ({slides.length}/6)
          </button>
        </div>
      )}
    </div>
  );
}
