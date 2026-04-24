"use client";

import * as React from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";
import { Input, Textarea } from "@/components/admin/ui/FormFields";
import { TagInput } from "./TagInput";
import { SaveBar } from "./SaveBar";
import type { Benefit, FamilyData, Specification } from "./types";

interface Props {
  family: FamilyData;
  onSaved: () => Promise<void> | void;
}

function emptyBenefit(): Benefit {
  return { icon: "", title: "", description: "" };
}

function emptySpec(): Specification {
  return { label: "", value: "" };
}

function normalizeBenefits(raw: unknown): Benefit[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((b) => ({
    icon: typeof b?.icon === "string" ? b.icon : "",
    title: typeof b?.title === "string" ? b.title : "",
    description: typeof b?.description === "string" ? b.description : "",
  }));
}

function normalizeSpecs(raw: unknown): Specification[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((s) => ({
    label: typeof s?.label === "string" ? s.label : "",
    value: typeof s?.value === "string" ? s.value : "",
  }));
}

export function LandingTab({ family, onSaved }: Props) {
  const [form, setForm] = React.useState(() => ({
    tagline: family.tagline ?? "",
    longDescription: family.longDescription ?? "",
    startingPrice: family.startingPrice ?? "",
    unit: family.unit ?? "",
    features: family.features ?? [],
    benefits: normalizeBenefits(family.benefits),
    specifications: normalizeSpecs(family.specifications),
  }));
  const [saving, setSaving] = React.useState(false);

  // Snapshot used for dirty detection; updated after saves.
  const [snapshot, setSnapshot] = React.useState(() => JSON.stringify(form));

  React.useEffect(() => {
    const next = {
      tagline: family.tagline ?? "",
      longDescription: family.longDescription ?? "",
      startingPrice: family.startingPrice ?? "",
      unit: family.unit ?? "",
      features: family.features ?? [],
      benefits: normalizeBenefits(family.benefits),
      specifications: normalizeSpecs(family.specifications),
    };
    setForm(next);
    setSnapshot(JSON.stringify(next));
  }, [family]);

  const dirty = JSON.stringify(form) !== snapshot;

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        tagline: form.tagline.trim() || null,
        longDescription: form.longDescription.trim() || null,
        startingPrice: form.startingPrice.trim() || null,
        unit: form.unit.trim() || null,
        features: form.features,
        benefits: form.benefits.filter(
          (b) => (b.title || "").trim() || (b.description || "").trim()
        ),
        specifications: form.specifications.filter(
          (s) => (s.label || "").trim() || (s.value || "").trim()
        ),
      };
      const res = await fetch(`/api/families/${family.slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur mise à jour");
      toast.success("Landing page enregistrée");
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
        <h2 className="font-semibold text-gray-900">Contenu landing page</h2>
        <p className="text-sm text-gray-500 mt-1">
          Contenu affiché sur <code className="font-mono text-xs">/produits/{family.slug}</code>.
        </p>
      </header>

      <div className="p-5 space-y-6">
        <Input
          label="Tagline (accroche hero)"
          placeholder="Ex. Sécurité et élégance aluminium"
          value={form.tagline}
          onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
        />

        <Textarea
          label="Description longue"
          rows={6}
          placeholder="Bloc de texte affiché sous le hero."
          value={form.longDescription}
          onChange={(e) =>
            setForm((f) => ({ ...f, longDescription: e.target.value }))
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Prix d'appel"
            placeholder="290"
            value={form.startingPrice}
            onChange={(e) =>
              setForm((f) => ({ ...f, startingPrice: e.target.value }))
            }
            hint='Affiché comme "À partir de …".'
          />
          <Input
            label="Unité"
            placeholder="ml, pièce…"
            value={form.unit}
            onChange={(e) => setForm((f) => ({ ...f, unit: e.target.value }))}
          />
        </div>

        <TagInput
          label="Features (tags)"
          placeholder="Ex. Norme NF P01-012"
          hint="Entrée ou virgule pour ajouter un tag."
          value={form.features}
          onChange={(features) => setForm((f) => ({ ...f, features }))}
        />

        {/* Benefits editor */}
        <BenefitsEditor
          benefits={form.benefits}
          onChange={(benefits) => setForm((f) => ({ ...f, benefits }))}
        />

        {/* Specifications editor */}
        <SpecificationsEditor
          specs={form.specifications}
          onChange={(specifications) =>
            setForm((f) => ({ ...f, specifications }))
          }
        />

        <SaveBar
          dirty={dirty}
          saving={saving}
          onSave={handleSave}
          onReset={() => {
            setForm(JSON.parse(snapshot));
          }}
        />
      </div>
    </section>
  );
}

/* ---------- Benefits sub-editor ---------- */

function BenefitsEditor({
  benefits,
  onChange,
}: {
  benefits: Benefit[];
  onChange: (next: Benefit[]) => void;
}) {
  const setAt = (i: number, patch: Partial<Benefit>) => {
    const next = benefits.slice();
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };
  const removeAt = (i: number) => onChange(benefits.filter((_, idx) => idx !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= benefits.length) return;
    const next = benefits.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Avantages (benefits)
        </label>
        <button
          type="button"
          onClick={() => onChange([...benefits, emptyBenefit()])}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100 hover:bg-cyan-100"
        >
          <Plus className="w-3.5 h-3.5" />
          Ajouter
        </button>
      </div>

      {benefits.length === 0 ? (
        <p className="text-xs text-gray-400 italic">
          Aucun avantage défini. Cliquez sur &laquo; Ajouter &raquo;.
        </p>
      ) : (
        <div className="space-y-2">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_2fr_auto] gap-2 items-start p-3 rounded-xl border border-gray-100 bg-gray-50/50"
            >
              <div className="flex flex-col gap-1 pt-1 text-gray-400">
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="hover:text-gray-700 disabled:opacity-40"
                  title="Monter"
                >
                  <GripVertical className="w-4 h-4" />
                </button>
              </div>
              <Input
                placeholder="Icon (ex. shield)"
                value={b.icon ?? ""}
                onChange={(e) => setAt(i, { icon: e.target.value })}
              />
              <div className="space-y-2">
                <Input
                  placeholder="Titre"
                  value={b.title ?? ""}
                  onChange={(e) => setAt(i, { title: e.target.value })}
                />
                <Textarea
                  placeholder="Description"
                  rows={2}
                  value={b.description ?? ""}
                  onChange={(e) => setAt(i, { description: e.target.value })}
                />
              </div>
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                title="Supprimer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Specifications sub-editor ---------- */

function SpecificationsEditor({
  specs,
  onChange,
}: {
  specs: Specification[];
  onChange: (next: Specification[]) => void;
}) {
  const setAt = (i: number, patch: Partial<Specification>) => {
    const next = specs.slice();
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };
  const removeAt = (i: number) => onChange(specs.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Spécifications techniques
        </label>
        <button
          type="button"
          onClick={() => onChange([...specs, emptySpec()])}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100 hover:bg-cyan-100"
        >
          <Plus className="w-3.5 h-3.5" />
          Ajouter
        </button>
      </div>

      {specs.length === 0 ? (
        <p className="text-xs text-gray-400 italic">
          Aucune spécification définie.
        </p>
      ) : (
        <div className="space-y-2">
          {specs.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1fr_auto] gap-2 items-start p-3 rounded-xl border border-gray-100 bg-gray-50/50"
            >
              <Input
                placeholder="Label (ex. Norme)"
                value={s.label ?? ""}
                onChange={(e) => setAt(i, { label: e.target.value })}
              />
              <Input
                placeholder="Valeur (ex. NF P01-012)"
                value={s.value ?? ""}
                onChange={(e) => setAt(i, { value: e.target.value })}
              />
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                title="Supprimer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
