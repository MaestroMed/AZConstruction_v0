"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Upload,
  Image as ImageIcon,
  Video as VideoIcon,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { AssetCard, type Asset, type AssetRole, type AssetType } from "./AssetCard";

export type { Asset, AssetRole, AssetType };

export interface AssetUploaderProps {
  /** Header title, e.g. "Assets — Garde-corps". */
  title: string;
  /** Short description displayed under the title. */
  helpText?: string;
  /** Existing assets (already filtered by role, but we re-filter defensively). */
  assets: Asset[];
  /** The role this uploader manages. Used to filter and tag uploads. */
  role: AssetRole;
  /** Which types the user can upload. */
  allowedTypes: Array<AssetType>;
  /** Hard cap on number of assets (optional). */
  maxAssets?: number;

  /** Uploads a file to the backend. Parent handles API call + re-fetch. */
  onUpload: (file: File, type: AssetType) => Promise<void>;
  /** Deletes an asset by id. */
  onDelete: (assetId: string) => Promise<void>;
  /** Reorders: sets a new `ordre` value for the given asset. */
  onReorder?: (assetId: string, newOrdre: number) => Promise<void>;
  /** Updates the alt-text. */
  onUpdateAlt?: (assetId: string, alt: string) => Promise<void>;
}

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100 MB
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

function detectType(file: File): AssetType | null {
  if (file.type.startsWith("image/")) return "IMAGE";
  if (file.type.startsWith("video/") || VIDEO_EXT.test(file.name)) return "VIDEO";
  return null;
}

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(1)} Mo`;
}

function validateFile(file: File, allowedTypes: AssetType[]): { ok: true; type: AssetType } | { ok: false; reason: string } {
  const detected = detectType(file);
  if (!detected) {
    return { ok: false, reason: "Format de fichier non supporté (ni image, ni vidéo)." };
  }
  if (!allowedTypes.includes(detected)) {
    return {
      ok: false,
      reason: `Type "${detected}" non autorisé ici. Attendu : ${allowedTypes.join(" ou ")}.`,
    };
  }
  const maxSize = detected === "IMAGE" ? MAX_IMAGE_SIZE : MAX_VIDEO_SIZE;
  if (file.size > maxSize) {
    return {
      ok: false,
      reason: `Fichier trop volumineux (${formatSize(file.size)}). Maximum : ${formatSize(maxSize)}.`,
    };
  }
  return { ok: true, type: detected };
}

export function AssetUploader({
  title,
  helpText,
  assets,
  role,
  allowedTypes,
  maxAssets,
  onUpload,
  onDelete,
  onReorder,
  onUpdateAlt,
}: AssetUploaderProps) {
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const videoInputRef = React.useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [uploadLabel, setUploadLabel] = React.useState<string>("");

  // Defensive filter — parent ideally already filters by role.
  const visibleAssets = React.useMemo(
    () =>
      [...assets]
        .filter((a) => a.role === role)
        .sort((a, b) => a.ordre - b.ordre),
    [assets, role]
  );

  const allowsImage = allowedTypes.includes("IMAGE");
  const allowsVideo = allowedTypes.includes("VIDEO");
  const atCapacity = typeof maxAssets === "number" && visibleAssets.length >= maxAssets;

  const runUpload = async (file: File) => {
    if (atCapacity) {
      toast.error(
        `Limite atteinte (${maxAssets} asset${(maxAssets ?? 0) > 1 ? "s" : ""} maximum pour "${role}").`
      );
      return;
    }
    const result = validateFile(file, allowedTypes);
    if (!result.ok) {
      toast.error(result.reason);
      return;
    }

    setUploading(true);
    setUploadLabel(`Upload ${result.type === "IMAGE" ? "image" : "vidéo"} (${formatSize(file.size)})…`);
    const toastId = `asset-upload-${Date.now()}`;
    toast.loading(`Upload en cours — ${file.name}`, { id: toastId });
    try {
      await onUpload(file, result.type);
      toast.success(
        result.type === "IMAGE" ? "Image ajoutée avec succès" : "Vidéo ajoutée avec succès",
        { id: toastId }
      );
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(`Erreur d'upload : ${msg}`, { id: toastId });
    } finally {
      setUploading(false);
      setUploadLabel("");
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length === 0) return;
    // Sequential upload to avoid race conditions on server re-fetch
    (async () => {
      for (const file of files) {
        // Stop on cap mid-batch
        if (typeof maxAssets === "number" && visibleAssets.length + 1 > maxAssets) {
          toast.error(`Limite atteinte (${maxAssets}). Certains fichiers ont été ignorés.`);
          break;
        }
        // eslint-disable-next-line no-await-in-loop
        await runUpload(file);
      }
    })();
  };

  const handleReorder = onReorder
    ? async (assetId: string, newOrdre: number) => {
        try {
          await onReorder(assetId, newOrdre);
        } catch (e) {
          const msg = e instanceof Error ? e.message : "Erreur inconnue";
          toast.error(`Erreur réorganisation : ${msg}`);
        }
      }
    : undefined;

  const handleDelete = async (assetId: string) => {
    const toastId = `asset-delete-${assetId}`;
    toast.loading("Suppression…", { id: toastId });
    try {
      await onDelete(assetId);
      toast.success("Asset supprimé", { id: toastId });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      toast.error(`Erreur suppression : ${msg}`, { id: toastId });
      throw e;
    }
  };

  const handleUpdateAlt = onUpdateAlt
    ? async (assetId: string, alt: string) => {
        try {
          await onUpdateAlt(assetId, alt);
        } catch (e) {
          const msg = e instanceof Error ? e.message : "Erreur inconnue";
          toast.error(`Erreur sauvegarde alt : ${msg}`);
          throw e;
        }
      }
    : undefined;

  return (
    <section
      className={cn(
        "relative bg-white rounded-2xl border border-gray-200 shadow-sm transition-colors",
        dragOver && !uploading && "ring-2 ring-cyan-400 border-cyan-400 bg-cyan-50/30"
      )}
      onDragOver={(e) => {
        e.preventDefault();
        if (!uploading) setDragOver(true);
      }}
      onDragLeave={(e) => {
        // Only leave when exiting the full container
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
        setDragOver(false);
      }}
      onDrop={onDrop}
      aria-label={title}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start gap-3 p-5 border-b border-gray-100">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-semibold text-gray-900">{title}</h2>
            <span className="text-[10px] font-mono uppercase tracking-wide px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
              {role}
            </span>
          </div>
          {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
        </div>
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0",
            atCapacity
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-cyan-50 text-cyan-700 border border-cyan-100"
          )}
        >
          {typeof maxAssets === "number"
            ? `${visibleAssets.length} / ${maxAssets}`
            : `${visibleAssets.length} asset${visibleAssets.length > 1 ? "s" : ""}`}
        </span>
      </div>

      {/* Grid of assets */}
      <div className="p-5">
        {visibleAssets.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-10 flex flex-col items-center justify-center text-center">
            {allowsVideo && !allowsImage ? (
              <VideoIcon className="w-8 h-8 text-gray-300 mb-2" />
            ) : (
              <ImageIcon className="w-8 h-8 text-gray-300 mb-2" />
            )}
            <p className="text-sm text-gray-500 font-medium">Aucun asset pour l&apos;instant</p>
            <p className="text-xs text-gray-400 mt-1">
              Glissez un fichier ici ou utilisez les boutons ci-dessous
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false}>
              {visibleAssets.map((asset, i) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  index={i}
                  total={visibleAssets.length}
                  onDelete={handleDelete}
                  onReorder={handleReorder}
                  onUpdateAlt={handleUpdateAlt}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Upload progress */}
        <AnimatePresence>
          {uploading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl border border-cyan-100">
                <Loader2 className="w-5 h-5 animate-spin text-cyan-600 flex-shrink-0" />
                <span className="text-sm text-cyan-700 font-medium">
                  {uploadLabel || "Upload en cours…"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Capacity warning */}
        {atCapacity && !uploading && (
          <div className="mt-4 flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-700">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              Limite de {maxAssets} asset{(maxAssets ?? 0) > 1 ? "s" : ""} atteinte. Supprimez un
              asset pour pouvoir en ajouter.
            </span>
          </div>
        )}
      </div>

      {/* Footer — upload actions */}
      <div className="flex flex-wrap items-center gap-2 p-5 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
        {allowsImage && (
          <>
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              disabled={uploading || atCapacity}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                "bg-cyan-600 text-white hover:bg-cyan-700"
              )}
            >
              <Upload className="w-4 h-4" />
              {allowsImage && allowsVideo ? "Ajouter une image" : "Ajouter"}
            </button>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) runUpload(f);
                e.target.value = "";
              }}
            />
          </>
        )}
        {allowsVideo && (
          <>
            <button
              type="button"
              onClick={() => videoInputRef.current?.click()}
              disabled={uploading || atCapacity}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                "bg-purple-600 text-white hover:bg-purple-700"
              )}
            >
              <VideoIcon className="w-4 h-4" />
              {allowsImage && allowsVideo ? "Ajouter une vidéo" : "Ajouter"}
            </button>
            <input
              ref={videoInputRef}
              type="file"
              accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) runUpload(f);
                e.target.value = "";
              }}
            />
          </>
        )}
        <div className="ml-auto text-[11px] text-gray-400 leading-relaxed text-right">
          {allowsImage && <span>Images : JPG, PNG, WebP · max 5 Mo</span>}
          {allowsImage && allowsVideo && <span> · </span>}
          {allowsVideo && <span>Vidéos : MP4, WebM, MOV · max 100 Mo</span>}
        </div>
      </div>

      {/* Drag overlay */}
      <AnimatePresence>
        {dragOver && !uploading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-500/10 border-2 border-dashed border-cyan-400 flex items-center justify-center"
          >
            <div className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-3 text-cyan-700">
              <Upload className="w-6 h-6" />
              <span className="font-semibold">Déposer pour uploader</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
