"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

interface HeroCarouselProps {
  onSlideChange?: (index: number) => void;
}

export default function HeroCarousel({ onSlideChange }: HeroCarouselProps) {
  const { getImage, loading } = useSiteImages();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // 3 slides fixes depuis les clés admin hero-carousel-1/2/3
  const images = React.useMemo(() => [
    getImage("hero-carousel-1"),
    getImage("hero-carousel-2"),
    getImage("hero-carousel-3"),
  ], [getImage]);

  // Défilement automatique toutes les 5s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        onSlideChange?.(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, onSlideChange]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    onSlideChange?.(index);
  };

  if (loading) {
    return <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Images avec transition fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {images[currentIndex] ? (
            <Image
              src={images[currentIndex]}
              alt={`AZ Construction - ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay unique — alégé */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/75 via-navy-dark/45 to-navy-dark/20" />

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-cyan-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
