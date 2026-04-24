"use client";

import * as React from "react";
import { toast } from "sonner";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { SaveBar } from "./SaveBar";
import type { FamilyData } from "./types";

interface Props {
  family: FamilyData;
  onSaved: () => Promise<void> | void;
}

export function CatalogueTab({ family, onSaved }: Props) {
  const [form, setForm] = React.useState({
    nom: family.nom,
    description: family.description ?? "",
    ordre: family.ordre,
    active: family.active,
    seoTitle: family.seoTitle ?? "",
    seoDescription: family.seoDescription ?? "",
  });
  const [saving, setSaving] = React.useState(false);

  // Re-sync if parent reloads family data
  React.useEffect(() => {
    setForm({
      nom: family.nom,
      description: family.description ?? "",
      ordre: family.ordre,
      active: family.active,
      seoTitle: family.seoTitle ?? "",
      seoDescription: family.seoDescription ?? "",
    });
  }, [family]);

  const dirty =
    form.nom !== family.nom ||
    (form.description || "") !== (family.description ?? "") ||
    form.ordre !== family.ordre ||
    form.active !== family.active ||
    (form.seoTitle || "") !== (family.seoTitle ?? "") ||
    (form.seoDescription || "") !== (family.seoDescription ?? "");

  const handleSave = async () => {
    if (!form.nom.trim()) {
      toast.error("Le nom est obligatoire");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/families/${family.slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom.trim(),
          description: form.description.trim() || null,
          ordre: form.ordre,
          active: form.active,
          seoTitle: form.seoTitle.trim() || null,
          seoDescription: form.seoDescription.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur mise à jour");
      toast.success("Catalogue enregistré");
      await onSaved();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(msg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <header className="p-5 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900">Informations catalogue</h2>
        <p className="text-sm text-gray-500 mt-1">
          Nom, visibilité, SEO. Le slug n&apos;est pas éditable après création.
        </p>
      </header>

      <div className="p-5 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Slug (lecture seule)"
            value={family.slug}
            readOnly
            disabled
          />
          <Input
            label="Nom"
            required
            value={form.nom}
            onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
          />
        </div>

        <Textarea
          label="Description courte"
          placeholder="Résumé utilisé sur la page listing et les meta description de fallback."
          rows={3}
          value={form.description}
          onChange={(e) =>
            setForm((f) => ({ ...f, description: e.target.value }))
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Ordre d'affichage"
            type="number"
            value={form.ordre}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                ordre: Number.parseInt(e.target.value || "0", 10) || 0,
              }))
            }
            hint="Plus petit = affiché en premier."
          />
          <div className="flex items-center pt-7">
            <Switch
              label="Active"
              description="Visible sur le site public."
              checked={form.active}
              onChange={(v) => setForm((f) => ({ ...f, active: v }))}
            />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5 space-y-4">
          <h3 className="text-sm font-semibold text-gray-900">SEO</h3>
          <Input
            label="Titre SEO"
            placeholder="Ex. Garde-corps aluminium sur mesure | AZ Construction"
            value={form.seoTitle}
            onChange={(e) =>
              setForm((f) => ({ ...f, seoTitle: e.target.value }))
            }
            hint="Recommandé : 50-60 caractères."
          />
          <Textarea
            label="Meta description"
            placeholder="Description visible dans les résultats Google."
            rows={3}
            maxLength={180}
            value={form.seoDescription}
            onChange={(e) =>
              setForm((f) => ({ ...f, seoDescription: e.target.value }))
            }
          />
        </div>

        <SaveBar
          dirty={dirty}
          saving={saving}
          onSave={handleSave}
          onReset={() =>
            setForm({
              nom: family.nom,
              description: family.description ?? "",
              ordre: family.ordre,
              active: family.active,
              seoTitle: family.seoTitle ?? "",
              seoDescription: family.seoDescription ?? "",
            })
          }
        />
      </div>
    </section>
  );
}
