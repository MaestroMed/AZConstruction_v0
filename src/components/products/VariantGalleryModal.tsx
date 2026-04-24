"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";
import { type VariantWithImages, getVariantImages } from "./variant-utils";

interface VariantGalleryModalProps {
  variant: VariantWithImages;
  onClose: () => void;
}

export function VariantGalleryModal({ variant, onClose }: VariantGalleryModalProps) {
  const imgs = getVariantImages(variant);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + imgs.length) % imgs.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % imgs.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [imgs.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden bg-navy-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full bg-gray-900">
          <Image src={imgs[idx]} alt={`${variant.name} ${idx + 1}`} fill className="object-contain" />

          {imgs.length > 1 && (
            <>
              <button
                onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % imgs.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 rounded-full text-white text-xs">
            <ZoomIn className="w-3 h-3 inline mr-1" />
            {idx + 1} / {imgs.length}
          </div>
        </div>

        <div className="p-5 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">{variant.name}</h3>
            {variant.description && <p className="text-white/60 text-sm mt-0.5">{variant.description}</p>}
          </div>
          <Link href="/contact" onClick={onClose}>
            <GlowButton icon={<ArrowRight className="w-4 h-4" />}>Demander un devis</GlowButton>
          </Link>
        </div>

        {imgs.length > 1 && (
          <div className="flex gap-2 px-5 pb-5 overflow-x-auto">
            {imgs.map((img, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={cn("relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all", i === idx ? "border-cyan-400" : "border-transparent opacity-60 hover:opacity-100")}
              >
                <Image src={img} alt="" aria-hidden="true" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
