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

export function VariantCardImage({ variant, onOpenGallery }: VariantCardImageProps) {
  const imgs = getVariantImages(variant);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (imgs.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  if (imgs.length === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800 flex items-center justify-center">
        <span className="text-7xl font-bold text-white/10 select-none">{variant.name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Blurred backdrop — fills frame, no black bars whatever the orientation */}
          <Image
            src={imgs[idx]}
            alt=""
            aria-hidden
            fill
            className="object-cover scale-110 blur-2xl opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-navy-dark/30" />
          {/* Foreground — full image, no crop */}
          <Image
            src={imgs[idx]}
            alt={`${variant.name} ${idx + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {imgs.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={cn("rounded-full transition-all", i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40")}
            />
          ))}
        </div>
      )}

      {imgs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onOpenGallery(); }}
          className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs border border-white/20 hover:bg-black/60 transition-all"
        >
          <Images className="w-3 h-3" />
          {imgs.length}
        </button>
      )}
    </>
  );
}
