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

// Durée par défaut d'affichage d'un slide quand il n'y a pas de vidéo (ou si onEnded ne fire pas)
const IMAGE_SLIDE_DURATION_MS = 6000;
// Fallback max si une vidéo est longue ou ne déclenche pas onEnded
const VIDEO_MAX_DURATION_MS = 15000;

export default function HeroCarousel({ slides, onSlideChange, currentIndex, onIndexChange }: HeroCarouselProps) {
  const { getImage, getVideo } = useSiteImages();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const currentSlide = slides[currentIndex];
  const currentVideoUrl = currentSlide ? getVideo(currentSlide.imageKey) : null;
  const currentImageUrl = currentSlide ? getImage(currentSlide.imageKey) : null;

  const advance = React.useCallback(() => {
    if (slides.length <= 1) return;
    const next = (currentIndex + 1) % slides.length;
    onIndexChange(next);
    onSlideChange?.(next);
  }, [slides.length, currentIndex, onIndexChange, onSlideChange]);

  // ── Advance logic ────────────────────────────────────────────────
  // Image slide → interval 6s
  // Video slide → advance on video 'ended', OR fallback timeout 15s si la video loop/ne finit pas
  React.useEffect(() => {
    if (slides.length <= 1) return;

    if (currentVideoUrl) {
      // Fallback timeout pour vidéos longues / boucles (onEnded fire en priorité si dispo)
      const fallbackTimer = setTimeout(advance, VIDEO_MAX_DURATION_MS);
      return () => clearTimeout(fallbackTimer);
    }

    // Image slide → defilement regulier
    const interval = setInterval(advance, IMAGE_SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, [currentIndex, currentVideoUrl, slides.length, advance]);

  const goToSlide = (index: number) => {
    onIndexChange(index);
    onSlideChange?.(index);
  };

  if (slides.length === 0) {
    return <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 7, ease: "linear" }, // Ken Burns: slow zoom-out sur toute la durée du slide
          }}
          className="absolute inset-0"
        >
          {currentVideoUrl ? (
            <video
              ref={videoRef}
              key={currentVideoUrl}
              src={currentVideoUrl}
              poster={currentImageUrl || undefined}
              autoPlay
              muted
              playsInline
              preload="metadata"
              // Pas de loop: on veut onEnded pour passer au slide suivant.
              // Si la video fait moins que VIDEO_MAX_DURATION_MS, onEnded declenche advance.
              onEnded={() => {
                if (slides.length > 1) advance();
              }}
              aria-label={`AZ Construction - ${currentSlide.headline}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          ) : currentImageUrl ? (
            <Image
              src={currentImageUrl}
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

      {/* Overlay sombre pour lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/75 via-navy-dark/45 to-navy-dark/20 pointer-events-none" />

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
