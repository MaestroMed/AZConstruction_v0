"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { AssetUploader, type Asset, type AssetType } from "@/components/admin/products/AssetUploader";
import { uploadAssetFile } from "@/components/admin/products/uploadAssetFile";
import { SaveBar } from "../../_components/SaveBar";
import { TagInput } from "../../_components/TagInput";
import { cn } from "@/lib/utils";

interface VariantData {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  features: string[];
  startingPrice: string | null;
  ordre: number;
  active: boolean;
  assets: Asset[];
}

export default function VariantEditPage() {
  const params = useParams<{ slug: string; variantSlug: string }>();
  const familySlug = params?.slug as string;
  const variantSlug = params?.variantSlug as string;

  const [variant, setVariant] = React.useState<VariantData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadVariant = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/families/${familySlug}/variants/${variantSlug}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Sous-famille introuvable");
      setVariant(data.variant as VariantData);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [familySlug, variantSlug]);

  React.useEffect(() => {
    if (familySlug && variantSlug) loadVariant();
  }, [familySlug, variantSlug, loadVariant]);

  // --- Asset handlers (variant-level) ---

  const onUpload = async (file: File, type: AssetType, role: Asset["role"]) => {
    try {
      const { url } = await uploadAssetFile(
        file,
        type,
        `families/${familySlug}/${variantSlug}`
      );
      const res = await fetch(
        `/api/families/${familySlug}/variants/${variantSlug}/assets`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, role, url }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Enregistrement échoué");
      await loadVariant();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      throw new Error(msg);
    }
  };

  const onDeleteAsset = async (assetId: string) => {
    const res = await fetch(
      `/api/families/${familySlug}/variants/${variantSlug}/assets/${assetId}`,
      { method: "DELETE" }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Suppression échouée");
    }
    await loadVariant();
  };

  const onUpdateAlt = async (assetId: string, alt: string) => {
    const res = await fetch(
      `/api/families/${familySlug}/variants/${variantSlug}/assets/${assetId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alt }),
      }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Mise à jour alt échouée");
    }
  };

  const onReorderAsset = async (assetId: string, newOrdre: number) => {
    const res = await fetch(
      `/api/families/${familySlug}/variants/${variantSlug}/assets/${assetId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ordre: newOrdre }),
      }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || "Réorganisation échouée");
    }
    await loadVariant();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <Loader2 className="w-8 h-8 text-cyan-500 mx-auto mb-4 animate-spin" />
        <p className="text-gray-500">Chargement du variant…</p>
      </div>
    );
  }

  if (error || !variant) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Variant introuvable
        </h3>
        <p className="text-gray-500 mb-6">{error || "Aucune donnée."}</p>
        <Link
          href={`/admin/familles/${familySlug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la famille
        </Link>
      </div>
    );
  }

  const heroAssets = variant.assets.filter((a) => a.role === "HERO");
  const cardAssets = variant.assets.filter((a) => a.role === "CARD");
  const galleryAssets = variant.assets.filter((a) => a.role === "GALLERY");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <Link
            href={`/admin/familles/${familySlug}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la famille
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">{variant.name}</h1>
            <span
              className={cn(
                "text-xs font-semibold px-2 py-1 rounded-full",
                variant.active
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              {variant.active ? "Active" : "Inactive"}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-1">
            {familySlug}/{variant.slug}
          </p>
        </div>
      </div>

      {/* Infos */}
      <VariantInfoForm
        variant={variant}
        familySlug={familySlug}
        onSaved={loadVariant}
      />

      {/* Assets */}
      <AssetUploader
        title="Hero (image ou vidéo)"
        helpText="Arrière-plan du hero sur /produits/[slug]/[variantSlug]. Une vidéo remplace les images."
        assets={heroAssets}
        role="HERO"
        allowedTypes={["IMAGE", "VIDEO"]}
        onUpload={(file, type) => onUpload(file, type, "HERO")}
        onDelete={onDeleteAsset}
        onUpdateAlt={onUpdateAlt}
        onReorder={onReorderAsset}
      />

      <AssetUploader
        title="Card (thumbnail)"
        helpText="Image utilisée sur les cards de sous-familles."
        assets={cardAssets}
        role="CARD"
        allowedTypes={["IMAGE"]}
        maxAssets={1}
        onUpload={(file, type) => onUpload(file, type, "CARD")}
        onDelete={onDeleteAsset}
        onUpdateAlt={onUpdateAlt}
      />

      <AssetUploader
        title="Galerie"
        helpText="Images supplémentaires pour la page variant."
        assets={galleryAssets}
        role="GALLERY"
        allowedTypes={["IMAGE"]}
        onUpload={(file, type) => onUpload(file, type, "GALLERY")}
        onDelete={onDeleteAsset}
        onUpdateAlt={onUpdateAlt}
        onReorder={onReorderAsset}
      />
    </div>
  );
}

/* ---------- Infos form ---------- */

function VariantInfoForm({
  variant,
  familySlug,
  onSaved,
}: {
  variant: VariantData;
  familySlug: string;
  onSaved: () => Promise<void> | void;
}) {
  const [form, setForm] = React.useState({
    name: variant.name,
    description: variant.description ?? "",
    features: variant.features,
    startingPrice: variant.startingPrice ?? "",
    ordre: variant.ordre,
    active: variant.active,
  });
  const [saving, setSaving] = React.useState(false);
  const [snapshot, setSnapshot] = React.useState(() => JSON.stringify(form));

  React.useEffect(() => {
    const next = {
      name: variant.name,
      description: variant.description ?? "",
      features: variant.features,
      startingPrice: variant.startingPrice ?? "",
      ordre: variant.ordre,
      active: variant.active,
    };
    setForm(next);
    setSnapshot(JSON.stringify(next));
  }, [variant]);

  const dirty = JSON.stringify(form) !== snapshot;

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Le nom est obligatoire");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(
        `/api/families/${familySlug}/variants/${variant.slug}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            description: form.description.trim() || null,
            features: form.features,
            startingPrice: form.startingPrice.trim() || null,
            ordre: form.ordre,
            active: form.active,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur mise à jour");
      toast.success("Sous-famille enregistrée");
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
        <h2 className="font-semibold text-gray-900">Informations</h2>
        <p className="text-sm text-gray-500 mt-1">
          Nom, description, features, prix d&apos;appel.
        </p>
      </header>
      <div className="p-5 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Slug (lecture seule)"
            value={variant.slug}
            readOnly
            disabled
          />
          <Input
            label="Nom"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>

        <Textarea
          label="Description"
          rows={3}
          value={form.description}
          onChange={(e) =>
            setForm((f) => ({ ...f, description: e.target.value }))
          }
        />

        <TagInput
          label="Features (tags)"
          placeholder="Ex. Transparence totale"
          hint="Entrée ou virgule pour ajouter un tag."
          value={form.features}
          onChange={(features) => setForm((f) => ({ ...f, features }))}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Input
            label="Prix d'appel"
            placeholder="Ex. 290"
            value={form.startingPrice}
            onChange={(e) =>
              setForm((f) => ({ ...f, startingPrice: e.target.value }))
            }
          />
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
          />
          <div className="flex items-center pt-7">
            <Switch
              label="Active"
              checked={form.active}
              onChange={(v) => setForm((f) => ({ ...f, active: v }))}
            />
          </div>
        </div>

        <SaveBar
          dirty={dirty}
          saving={saving}
          onSave={handleSave}
          onReset={() => setForm(JSON.parse(snapshot))}
        />
      </div>
    </section>
  );
}
