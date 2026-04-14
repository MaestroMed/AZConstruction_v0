"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Save, Trash2, Loader2, Eye, EyeOff, Edit2, X, Database } from "lucide-react";
import { toast } from "sonner";

interface DemandItem {
  id: string;
  label: string;
  imageUrl: string;
  href?: string | null;
  size: string;
  ordre: number;
  active: boolean;
}

const SIZE_OPTIONS = [
  { value: "default", label: "Défaut (1×1)" },
  { value: "wide", label: "Large (2×1)" },
  { value: "tall", label: "Haut (1×2)" },
  { value: "large", label: "Grand (2×2)" },
];

function ItemRow({ item, onSave, onDelete, onToggle }: {
  item: DemandItem;
  onSave: (item: DemandItem) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string, active: boolean) => Promise<void>;
}) {
  const [editing, setEditing] = React.useState(item.id.startsWith("new-"));
  const [form, setForm] = React.useState(item);
  const [saving, setSaving] = React.useState(false);

  const handleSave = async () => {
    if (!form.label || !form.imageUrl) { toast.error("Label et URL image requis"); return; }
    setSaving(true);
    try { await onSave(form); setEditing(false); toast.success("Vignette sauvegardée"); }
    catch { toast.error("Erreur sauvegarde"); }
    finally { setSaving(false); }
  };

  if (!editing) {
    return (
      <div className={`flex items-center gap-4 p-4 bg-white rounded-xl border ${item.active ? "border-gray-200" : "border-gray-100 opacity-60"}`}>
        <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
          <Image src={item.imageUrl} alt={item.label} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{item.label}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{item.size}</span>
            {item.href && <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded truncate max-w-[120px]">{item.href}</span>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => onToggle(item.id, !item.active)} className={`p-2 rounded-lg transition-colors ${item.active ? "text-green-600 hover:bg-green-50" : "text-gray-400 hover:bg-gray-100"}`}>
            {item.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button onClick={() => setEditing(true)} className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4" />
          </button>
          <button onClick={() => onDelete(item.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-blue-900">Modifier la vignette</p>
        <button onClick={() => { if (!item.id.startsWith("new-")) setEditing(false); }} className="p-1 text-blue-400 hover:text-blue-700 rounded">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Label / Titre *</label>
          <input type="text" value={form.label} onChange={e => setForm({ ...form, label: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Jantes Auto" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Taille</label>
          <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none bg-white">
            {SIZE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Image *</label>
        {/* Upload button */}
        <div className="flex gap-2 mb-2">
          <button
            type="button"
            onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/jpeg,image/png,image/webp,image/gif,image/svg+xml";
              input.onchange = async (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (!file) return;
                // Validate client-side before upload
                const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
                if (!allowedTypes.includes(file.type)) {
                  toast.error(`Format non supporté : ${file.type}. Utilisez JPG, PNG, WebP, GIF ou SVG.`);
                  return;
                }
                if (file.size > 50 * 1024 * 1024) {
                  toast.error("Fichier trop volumineux (max 50MB).");
                  return;
                }
                const fd = new FormData();
                fd.append("files", file);
                fd.append("folder", "thermolaquage");
                try {
                  const res = await fetch("/api/upload", { method: "POST", body: fd });
                  const data = await res.json();
                  if (!res.ok) throw new Error(data.error || "Upload échoué");
                  const url = data.files?.[0]?.url || data.url || data.imageUrl;
                  if (url) {
                    setForm({ ...form, imageUrl: url });
                    toast.success("Image uploadée !");
                  } else {
                    throw new Error("Aucune URL retournée par le serveur");
                  }
                } catch (err) {
                  toast.error(err instanceof Error ? err.message : "Erreur upload");
                }
              };
              input.click();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-xs font-semibold hover:bg-cyan-600 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            Choisir une image
          </button>
          <span className="text-gray-400 text-xs flex items-center">ou</span>
        </div>
        <input type="url" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
          placeholder="https://images.unsplash.com/..." />
        {form.imageUrl && (
          <div className="mt-2 relative h-24 rounded-lg overflow-hidden bg-gray-100 w-full">
            <Image src={form.imageUrl} alt="preview" fill className="object-cover" onError={() => {}} />
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Lien (optionnel)</label>
        <input type="text" value={form.href || ""} onChange={e => setForm({ ...form, href: e.target.value || null })}
          className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
          placeholder="/services/thermolaquage/jantes" />
      </div>

      <div className="flex items-center justify-between pt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.active} onChange={e => setForm({ ...form, active: e.target.checked })} className="rounded" />
          <span className="text-sm text-gray-700">Afficher sur le site</span>
        </label>
        <button onClick={handleSave} disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 disabled:opacity-50">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default function ThermolaquageDemandesAdminPage() {
  const [items, setItems] = React.useState<DemandItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/thermolaquage-demands")
      .then(r => r.json())
      .then(data => {
        if (data.success) setItems(data.items);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const saveItem = async (item: DemandItem) => {
    const isNew = item.id.startsWith("new-") || item.id.startsWith("static-");
    if (isNew) {
      const { id: _, ...body } = item;
      const res = await fetch("/api/thermolaquage-demands", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(prev => prev.map(i => i.id === item.id ? data.item : i));
    } else {
      const res = await fetch("/api/thermolaquage-demands", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(prev => prev.map(i => i.id === item.id ? data.item : i));
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Supprimer cette vignette ?")) return;
    if (!id.startsWith("new-") && !id.startsWith("static-")) {
      await fetch(`/api/thermolaquage-demands?id=${id}`, { method: "DELETE" });
    }
    setItems(prev => prev.filter(i => i.id !== id));
    toast.success("Vignette supprimée");
  };

  const toggleItem = async (id: string, active: boolean) => {
    if (!id.startsWith("static-")) {
      await fetch("/api/thermolaquage-demands", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, active }) });
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, active } : i));
  };

  const addItem = () => {
    const newItem: DemandItem = { id: `new-${Date.now()}`, label: "", imageUrl: "", href: null, size: "default", ordre: items.length, active: true };
    setItems(prev => [...prev, newItem]);
  };

  const seedItems = async () => {
    if (!confirm("Importer toutes les vignettes par défaut en base de données ? Elles seront ensuite modifiables librement.")) return;
    try {
      // Récupérer les défauts statiques depuis l'API (quand DB est vide)
      const res = await fetch("/api/thermolaquage-demands?forceDefault=true");
      const data = await res.json();
      if (!data.success || !data.items?.length) {
        toast.error("Impossible de récupérer les données par défaut");
        return;
      }
      const defaultItems: DemandItem[] = data.items.filter((i: DemandItem) => i.id.startsWith("static-"));
      if (defaultItems.length === 0) {
        toast.info("Toutes les vignettes par défaut sont déjà importées");
        return;
      }
      const created: DemandItem[] = [];
      for (const item of defaultItems) {
        const { id: _, ...body } = item;
        const r = await fetch("/api/thermolaquage-demands", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (r.ok) { const d = await r.json(); created.push(d.item); }
      }
      // Remplacer les items statiques par les items DB créés + les items DB existants non-statiques
      setItems(prev => {
        const dbItems = prev.filter(i => !i.id.startsWith("static-") && !i.id.startsWith("new-"));
        return [...dbItems, ...created];
      });
      toast.success(`${created.length} vignette(s) importée(s) en base de données !`);
    } catch {
      toast.error("Erreur lors de l'importation");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Vignettes Thermolaquage</h1>
            <p className="text-gray-500 text-sm mt-1">Section &quot;Ce que demandent nos clients&quot; — page Thermolaquage</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={seedItems} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
            <Database className="w-4 h-4" /> Importer les défauts
          </button>
          <button onClick={addItem} className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors">
            <Plus className="w-4 h-4" /> Ajouter une vignette
          </button>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
        <strong>Important :</strong> Si aucune vignette n&apos;est en base de données, les vignettes statiques par défaut sont affichées. Dès que vous créez une vignette, <strong>seules les vignettes en base sont affichées</strong>. Cliquez sur <strong>Importer les défauts</strong> pour d&apos;abord enregistrer toutes les vignettes par défaut en base, puis ajoutez les vôtres.
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
        </div>
      ) : (
        <div className="space-y-3">
          {items.map(item => (
            <ItemRow key={item.id} item={item} onSave={saveItem} onDelete={deleteItem} onToggle={toggleItem} />
          ))}
          {items.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="mb-4">Aucune vignette — les données statiques sont utilisées.</p>
              <button onClick={addItem} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl text-sm font-semibold">
                <Plus className="w-4 h-4" /> Créer ma première vignette
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
