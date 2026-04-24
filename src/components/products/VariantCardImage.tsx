"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { type VariantWithImages, getVariantImages } from "./variant-utils";

interface VariantCardImageProps {
  variant: VariantWithImages;
  onOpenGallery: () => void;
}

/**
 * Affichage dynamique de l'image du variant :
 *  - Le container adopte l'aspect ratio NATUREL de la première image
 *    (capturé via onLoadingComplete sur next/image)
 *  - Plus de blur-backdrop / bandes noires : object-cover colle au conteneur
 *  - Sur images suivantes (gallery), l'aspect reste celui de la première
 *    (évite les sauts de layout entre slides)
 *  - Si aucune image : aspect 4/3 + gradient + lettre initiale (look Apple-ish)
 */
export function VariantCardImage({ variant, onOpenGallery }: VariantCardImageProps) {
  const imgs = getVariantImages(variant);
  const [idx, setIdx] = React.useState(0);
  const [aspectRatio, setAspectRatio] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (imgs.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  const handleImageLoad = React.useCallback(
    (img: HTMLImageElement) => {
      if (aspectRatio !== null) return;
      if (img.naturalWidth && img.naturalHeight) {
        setAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    },
    [aspectRatio]
  );

  if (imgs.length === 0) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800 flex items-center justify-center"
        style={{ aspectRatio: 4 / 3 }}
      >
        <span className="text-8xl font-bold text-white/10 select-none">
          {variant.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-navy-dark"
      style={{ aspectRatio: aspectRatio ?? 4 / 3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={imgs[idx]}
            alt={`${variant.name} ${idx + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            onLoadingComplete={handleImageLoad}
            priority={idx === 0}
          />
        </motion.div>
      </AnimatePresence>

      {imgs.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              aria-label={`Image ${i + 1}`}
              className={cn(
                "rounded-full transition-all",
                i === idx ? "w-5 h-1.5 bg-white shadow-lg" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}

      {imgs.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenGallery();
          }}
          className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 bg-black/45 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20 hover:bg-black/65 transition-all"
        >
          <Images className="w-3.5 h-3.5" />
          {imgs.length}
        </button>
      )}
    </div>
  );
}
