"use client";

import * as React from "react";
import Image from "next/image";
import { Upload, Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadPreviewProps {
  imageUrl?: string | null;
  onUpload: (file: File) => void;
  onRemove?: () => void;
  uploading?: boolean;
  aspect?: string;
  placeholder?: string;
  accept?: string;
}

export function ImageUploadPreview({
  imageUrl,
  onUpload,
  onRemove,
  uploading = false,
  aspect = "aspect-video",
  placeholder = "Aucune image",
  accept = "image/*",
}: ImageUploadPreviewProps) {
  const fileRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative group">
      <div className={cn("relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200", aspect)}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Preview"
            fill
            className="object-cover"
            unoptimized={imageUrl.startsWith("data:")}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-400 text-sm">{placeholder}</p>
          </div>
        )}

        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-white" />
          </div>
        )}

        {/* Hover overlay with actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="p-2.5 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            title={imageUrl ? "Remplacer" : "Uploader"}
          >
            <Upload className="w-5 h-5 text-gray-700" />
          </button>
          {imageUrl && onRemove && (
            <button
              onClick={onRemove}
              className="p-2.5 bg-white rounded-xl shadow-lg hover:bg-red-50 transition-colors"
              title="Supprimer"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          )}
        </div>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept={accept}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onUpload(f);
          e.target.value = "";
        }}
        className="hidden"
      />
    </div>
  );
}
