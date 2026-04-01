"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Trash2, Save, Loader2, Upload, GripVertical, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface VedetteItem {
  id: string;
  titre: string;
  description: string;
  imageUrl?: string;
  href: string;
  badge?: string;
}

async function compressImage(file: File, maxWidth = 1200, quality = 0.85): Promise<File> {
  if (file.type === "image/svg+xml" || file.size < 500 * 1024) return file;
  return new Promise((resolve) => {
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(file); return; }
          resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg", lastModified: Date.now() }));
        },
        "image/jpeg", quality
      );
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

export default function VedettesAdminPage() {
  const [items, setItems] = React.useState<VedetteItem[]>([]);
  const [sectionActive, setSectionActive] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [uploadingId, setUploadingId] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("/api/produits-vedettes")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setItems(data.items || []);
          setSectionActive(data.active ?? true);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const addItem = () => {
    setItems([...items, { id: `item-${Date.now()}`, titre: "", description: "", imageUrl: "", href: "/produits", badge: "" }]);
  };

  const removeItem = (id: string) => {
    if (!confirm("Supprimer cet item ?")) return;
    setItems(items.filter((i) => i.id !== id));
  };

  const updateItem = (id: string, field: keyof VedetteItem, value: string) => {
    setItems(items.map((i) => i.id === id ? { ...i, [field]: value } : i));
  };

  const handleImageUpload = async (id: string, file: File) => {
    setUploadingId(id);
    try {
      const compressed = await compressImage(file);
      const fd = new FormData();
      fd.append("files", compressed);
      fd.append("folder", "produits-vedettes");
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload échoué");
      const data = await res.json();
      const imageUrl = data.files?.[0]?.url || data.url || data.imageUrl;
      if (!imageUrl) throw new Error("URL manquante");
      updateItem(id, "imageUrl", imageUrl);
      toast.success("Image uploadée");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur upload");
    } finally {
      setUploadingId(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/produits-vedettes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, active: sectionActive }),
      });
      if (!res.ok) throw new Error("Sauvegarde échouée");
      toast.success("Produits vedettes sauvegardés");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/produits" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Produits vedettes</h1>
            <p className="text-gray-500 mt-1">Section mise en avant sur la page /produits</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSectionActive(!sectionActive)}
            className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
              sectionActive ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100" : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100")}
          >
            {sectionActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            {sectionActive ? "Section visible" : "Section masquée"}
          </button>
          <button onClick={addItem}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors">
            <Plus className="w-4 h-4" /> Ajouter un item
          </button>
          <button onClick={handleSave} disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 disabled:opacity-50 transition-colors">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Sauvegarder
          </button>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
        Ces produits s&apos;affichent dans une section dédiée en bas de la page &quot;Nos produits&quot;, séparément des familles de produits.
        Idéal pour mettre en avant des produits spéciaux, des réalisations, ou des offres particulières.
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
          <p className="text-gray-400 mb-4">Aucun produit vedette configuré.</p>
          <button onClick={addItem}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-colors">
            <Plus className="w-4 h-4" /> Créer le premier item
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const fileRef = React.createRef<HTMLInputElement>();
            return (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="flex gap-4 p-4">
                  {/* Image preview */}
                  <div className="relative w-32 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 group">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.titre || "Item"} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-dark/40 to-blue-corporate/40 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-white/40" />
                      </div>
                    )}
                    {uploadingId === item.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                      </div>
                    )}
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xs font-medium"
                    >
                      Changer
                    </button>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(item.id, f); e.target.value = ""; }}
                    />
                  </div>

                  {/* Fields */}
                  <div className="flex-1 grid grid-cols-2 gap-3 min-w-0">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Titre *</label>
                      <input
                        type="text"
                        value={item.titre}
                        onChange={(e) => updateItem(item.id, "titre", e.target.value)}
                        placeholder="Ex: Portail Aluminium Prestige"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Lien (href)</label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => updateItem(item.id, "href", e.target.value)}
                        placeholder="/produits/portails"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Description</label>
                      <textarea
                        value={item.description}
                        onChange={(e) => updateItem(item.id, "description", e.target.value)}
                        placeholder="Courte description..."
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Badge (optionnel)</label>
                      <input
                        type="text"
                        value={item.badge || ""}
                        onChange={(e) => updateItem(item.id, "badge", e.target.value)}
                        placeholder="Ex: Nouveau, Sur mesure..."
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <button onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
