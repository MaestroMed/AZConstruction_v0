"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trash2,
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
  GripVertical,
  ChevronUp,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type AssetType = "IMAGE" | "VIDEO";
export type AssetRole = "HERO" | "GALLERY" | "CARD";

export interface Asset {
  id: string;
  type: AssetType;
  role: AssetRole;
  url: string;
  alt?: string | null;
  posterUrl?: string | null;
  ordre: number;
}

interface AssetCardProps {
  asset: Asset;
  index: number;
  total: number;
  onDelete: (assetId: string) => Promise<void>;
  onUpdateAlt?: (assetId: string, alt: string) => Promise<void>;
  onReorder?: (assetId: string, newOrdre: number) => Promise<void>;
  dragHandleProps?: React.HTMLAttributes<HTMLButtonElement>;
}

export function AssetCard({
  asset,
  index,
  total,
  onDelete,
  onUpdateAlt,
  onReorder,
  dragHandleProps,
}: AssetCardProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const [altValue, setAltValue] = React.useState(asset.alt ?? "");
  const [altSaving, setAltSaving] = React.useState(false);
  const [altDirty, setAltDirty] = React.useState(false);
  const altDebounce = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync alt value if asset.alt changes (re-fetch from parent)
  React.useEffect(() => {
    setAltValue(asset.alt ?? "");
    setAltDirty(false);
  }, [asset.alt]);

  const isVideo = asset.type === "VIDEO";
  const thumbUrl = isVideo ? asset.posterUrl || null : asset.url;

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      // Auto-reset confirm state after 3s
      setTimeout(() => setConfirmDelete(false), 3000);
      return;
    }
    setDeleting(true);
    try {
      await onDelete(asset.id);
    } finally {
      setDeleting(false);
      setConfirmDelete(false);
    }
  };

  const handleAltChange = (val: string) => {
    setAltValue(val);
    setAltDirty(true);
    if (altDebounce.current) clearTimeout(altDebounce.current);
    if (!onUpdateAlt) return;
    altDebounce.current = setTimeout(async () => {
      setAltSaving(true);
      try {
        await onUpdateAlt(asset.id, val);
        setAltDirty(false);
      } finally {
        setAltSaving(false);
      }
    }, 600);
  };

  const handleVideoEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => {});
  };
  const handleVideoLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const canMoveUp = !!onReorder && index > 0;
  const canMoveDown = !!onReorder && index < total - 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.18 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Thumbnail */}
      <div
        className="relative bg-gray-100 aspect-video overflow-hidden"
        onMouseEnter={isVideo ? handleVideoEnter : undefined}
        onMouseLeave={isVideo ? handleVideoLeave : undefined}
      >
        {isVideo ? (
          <>
            {thumbUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbUrl}
                alt={asset.alt ?? "Poster vidéo"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <VideoIcon className="w-10 h-10 text-gray-500" />
              </div>
            )}
            <video
              ref={videoRef}
              src={asset.url}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
              </div>
            </div>
          </>
        ) : thumbUrl ? (
          <Image
            src={thumbUrl}
            alt={asset.alt ?? "Image"}
            fill
            className="object-cover"
            unoptimized={thumbUrl.startsWith("data:")}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="w-10 h-10 text-gray-300" />
          </div>
        )}

        {/* Type badge */}
        <div
          className={cn(
            "absolute top-2 left-2 inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase",
            isVideo
              ? "bg-purple-500/90 text-white"
              : "bg-cyan-500/90 text-white"
          )}
        >
          {isVideo ? <VideoIcon className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
          {isVideo ? "Vidéo" : "Image"}
        </div>

        {/* Order index */}
        <div className="absolute top-2 right-11 text-[10px] px-1.5 py-0.5 rounded-full font-mono bg-white/90 text-gray-600 border border-gray-200">
          #{index + 1}
        </div>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={cn(
            "absolute top-2 right-2 p-1.5 rounded-lg transition-all disabled:opacity-50",
            confirmDelete
              ? "bg-red-600 text-white shadow-lg"
              : "bg-white/90 text-red-500 hover:bg-red-50 border border-gray-200"
          )}
          title={confirmDelete ? "Confirmer la suppression" : "Supprimer"}
          aria-label={confirmDelete ? "Confirmer la suppression" : "Supprimer"}
        >
          {confirmDelete ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
        </button>

        {/* Drag handle (reorder via drag) */}
        {onReorder && dragHandleProps && (
          <button
            {...dragHandleProps}
            className="absolute bottom-2 left-2 p-1.5 rounded-lg bg-white/90 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-white cursor-grab active:cursor-grabbing"
            title="Glisser pour réordonner"
            aria-label="Glisser pour réordonner"
          >
            <GripVertical className="w-4 h-4" />
          </button>
        )}

        {/* Reorder buttons fallback (no drag handle provided) */}
        {onReorder && !dragHandleProps && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            <button
              onClick={() => canMoveUp && onReorder(asset.id, asset.ordre - 1)}
              disabled={!canMoveUp}
              className="p-1.5 rounded-lg bg-white/90 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
              title="Monter"
              aria-label="Monter"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => canMoveDown && onReorder(asset.id, asset.ordre + 1)}
              disabled={!canMoveDown}
              className="p-1.5 rounded-lg bg-white/90 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
              title="Descendre"
              aria-label="Descendre"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Footer with alt input */}
      {onUpdateAlt && (
        <div className="p-3 border-t border-gray-100">
          <label
            htmlFor={`alt-${asset.id}`}
            className="flex items-center justify-between text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1"
          >
            <span>Texte alternatif (alt)</span>
            {altDirty && !altSaving && <span className="text-amber-500 normal-case font-normal">non enregistré</span>}
            {altSaving && <span className="text-cyan-600 normal-case font-normal">enregistrement…</span>}
            {!altDirty && !altSaving && altValue && (
              <span className="text-emerald-600 normal-case font-normal inline-flex items-center gap-0.5">
                <Check className="w-3 h-3" />
                enregistré
              </span>
            )}
          </label>
          <input
            id={`alt-${asset.id}`}
            type="text"
            value={altValue}
            onChange={(e) => handleAltChange(e.target.value)}
            placeholder="Décrire l'image pour l'accessibilité"
            className="w-full px-2.5 py-1.5 text-xs text-gray-900 border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
          />
        </div>
      )}

      {/* Confirm-delete helper label */}
      {confirmDelete && (
        <button
          onClick={() => setConfirmDelete(false)}
          className="absolute inset-x-0 bottom-0 text-[10px] py-1 bg-red-50 text-red-600 font-medium flex items-center justify-center gap-1 hover:bg-red-100 transition-colors border-t border-red-100"
        >
          <X className="w-3 h-3" />
          Cliquer à nouveau sur la corbeille pour confirmer
        </button>
      )}
    </motion.div>
  );
}
