"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Loader2,
  Trash2,
  ExternalLink,
  ImageIcon,
  Video,
  Layers,
} from "lucide-react";
import { toast } from "sonner";
import { Modal, ConfirmDialog } from "@/components/admin/ui/Modal";
import { Input } from "@/components/admin/ui/FormFields";
import { cn } from "@/lib/utils";
import type { FamilyData, VariantData } from "./types";

interface Props {
  family: FamilyData;
  onChange: () => Promise<void> | void;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function VariantsTab({ family, onChange }: Props) {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [creating, setCreating] = React.useState(false);
  const [deleting, setDeleting] = React.useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = React.useState<VariantData | null>(
    null
  );

  const [form, setForm] = React.useState({ slug: "", name: "" });
  const [slugManual, setSlugManual] = React.useState(false);

  const handleCreate = async () => {
    if (!form.name.trim() || !form.slug.trim()) {
      toast.error("Nom et slug sont obligatoires");
      return;
    }
    setCreating(true);
    try {
      const res = await fetch(`/api/families/${family.slug}/variants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: form.slug.trim(),
          name: form.name.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur création variant");
      toast.success("Sous-famille créée");
      setCreateOpen(false);
      setForm({ slug: "", name: "" });
      setSlugManual(false);
      await onChange();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(msg);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (variant: VariantData) => {
    setDeleting(variant.id);
    try {
      const res = await fetch(
        `/api/families/${family.slug}/variants/${variant.slug}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Erreur suppression");
      }
      toast.success("Sous-famille supprimée");
      setConfirmDelete(null);
      await onChange();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(msg);
    } finally {
      setDeleting(null);
    }
  };

  const variants = family.productVariants;

  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <header className="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h2 className="font-semibold text-gray-900">Sous-familles (variants)</h2>
          <p className="text-sm text-gray-500 mt-1">
            {variants.length === 0
              ? "Aucune sous-famille pour l'instant."
              : `${variants.length} sous-famille${variants.length > 1 ? "s" : ""}.`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCreateOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700"
        >
          <Plus className="w-4 h-4" />
          Nouveau variant
        </button>
      </header>

      <div className="p-5">
        {variants.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-center">
            <Layers className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500 font-medium">
              Aucune sous-famille
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Créez un variant pour distinguer vos déclinaisons (ex. Verre, Inox,
              Aluminium).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {variants.map((v, i) => (
              <VariantCard
                key={v.id}
                variant={v}
                index={i}
                familySlug={family.slug}
                onDelete={() => setConfirmDelete(v)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create modal */}
      <Modal
        isOpen={createOpen}
        onClose={() => (creating ? null : setCreateOpen(false))}
        title="Nouvelle sous-famille"
        description={`Sous la famille "${family.nom}".`}
        size="md"
        closeOnOverlay={!creating}
        footer={
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCreateOpen(false)}
              disabled={creating}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleCreate}
              disabled={creating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50"
            >
              {creating && <Loader2 className="w-4 h-4 animate-spin" />}
              Créer
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Nom"
            required
            placeholder="Ex. Garde-corps Verre"
            value={form.name}
            onChange={(e) => {
              const name = e.target.value;
              setForm((f) => ({
                ...f,
                name,
                slug: slugManual ? f.slug : slugify(name),
              }));
            }}
          />
          <Input
            label="Slug"
            required
            placeholder="Ex. verre"
            value={form.slug}
            onChange={(e) => {
              setSlugManual(true);
              setForm((f) => ({ ...f, slug: slugify(e.target.value) }));
            }}
            hint="Unique dans la famille."
          />
        </div>
      </Modal>

      <ConfirmDialog
        isOpen={!!confirmDelete}
        onClose={() => (deleting ? null : setConfirmDelete(null))}
        onConfirm={() => confirmDelete && handleDelete(confirmDelete)}
        title="Supprimer cette sous-famille ?"
        message={
          confirmDelete
            ? `"${confirmDelete.name}" et tous ses assets seront supprimés définitivement.`
            : ""
        }
        confirmText="Supprimer"
        variant="danger"
        loading={!!deleting}
      />
    </section>
  );
}

/* ---------- Variant card ---------- */

function VariantCard({
  variant,
  index,
  familySlug,
  onDelete,
}: {
  variant: VariantData;
  index: number;
  familySlug: string;
  onDelete: () => void;
}) {
  const card = variant.assets.find((a) => a.role === "CARD");
  const heroCount = variant.assets.filter((a) => a.role === "HERO").length;
  const galleryCount = variant.assets.filter((a) => a.role === "GALLERY").length;
  const heroIsVideo = variant.assets.some(
    (a) => a.role === "HERO" && a.type === "VIDEO"
  );
  const thumb =
    (card?.type === "IMAGE" && card.url) || card?.posterUrl || null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-video bg-gray-100">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={card?.alt ?? variant.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <ImageIcon className="w-8 h-8" />
          </div>
        )}
        <span
          className={cn(
            "absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full",
            variant.active
              ? "bg-emerald-500/90 text-white"
              : "bg-gray-500/80 text-white"
          )}
        >
          {variant.active ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 truncate">{variant.name}</h3>
        <p className="text-xs text-gray-400 font-mono">/{variant.slug}</p>
        {variant.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {variant.description}
          </p>
        )}

        {variant.features.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {variant.features.slice(0, 4).map((f) => (
              <span
                key={f}
                className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
              >
                {f}
              </span>
            ))}
            {variant.features.length > 4 && (
              <span className="text-[10px] text-gray-400">
                +{variant.features.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-500">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100">
            {heroIsVideo ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
            HERO {heroCount}
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-100">
            <ImageIcon className="w-3 h-3" />
            GALLERY {galleryCount}
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">
            <ImageIcon className="w-3 h-3" />
            CARD {card ? 1 : 0}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100">
          <Link
            href={`/admin/familles/${familySlug}/variants/${variant.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-cyan-600 text-white hover:bg-cyan-700"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Gérer les assets
          </Link>
          <button
            type="button"
            onClick={onDelete}
            className="ml-auto p-2 rounded-lg text-red-500 hover:bg-red-50"
            title="Supprimer"
            aria-label="Supprimer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
