"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

export interface HeroSlide {
  id: string;
  ordre: number;
  active: boolean;
  imageKey: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  onSlideChange?: (index: number) => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function HeroCarousel({ slides, onSlideChange, currentIndex, onIndexChange }: HeroCarouselProps) {
  const { getImage } = useSiteImages();

  // Défilement automatique toutes les 5s
  React.useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      onIndexChange(next);
      onSlideChange?.(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, currentIndex, onIndexChange, onSlideChange]);

  const goToSlide = (index: number) => {
    onIndexChange(index);
    onSlideChange?.(index);
  };

  if (slides.length === 0) {
    return <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />;
  }

  const currentSlide = slides[currentIndex];
  const imageUrl = getImage(currentSlide.imageKey);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`AZ Construction - ${currentSlide.headline}`}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay unique allégé */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/75 via-navy-dark/45 to-navy-dark/20" />

      {/* Navigation dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
