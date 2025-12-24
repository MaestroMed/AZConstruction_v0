"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Realization {
  id: string;
  titre: string;
  imageUrl: string;
  images: string[];
  categorie: string;
  ville?: string;
}

// Images placeholder Unsplash si aucune réalisation
const placeholderImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80", // Atelier métallerie
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", // Travail du métal
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&q=80", // Soudure
];

export default function HeroCarousel() {
  const [images, setImages] = React.useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Charger les images depuis les réalisations (API ou localStorage)
  React.useEffect(() => {
    const loadImages = async () => {
      try {
        // Essayer d'abord l'API
        const response = await fetch("/api/realizations");
        if (response.ok) {
          const data = await response.json();
          if (data.realizations && data.realizations.length > 0) {
            const apiImages = data.realizations
              .filter((r: Realization) => r.imageUrl || (r.images && r.images.length > 0))
              .flatMap((r: Realization) => 
                r.images && r.images.length > 0 ? r.images : [r.imageUrl]
              )
              .filter(Boolean)
              .slice(0, 5); // Max 5 images

            if (apiImages.length > 0) {
              setImages(apiImages);
              setIsLoaded(true);
              return;
            }
          }
        }
      } catch (e) {
        console.error("Erreur chargement API realizations:", e);
      }

      // Fallback localStorage
      try {
        const saved = localStorage.getItem("az_realizations");
        if (saved) {
          const realizations: Realization[] = JSON.parse(saved);
          const publishedImages = realizations
            .filter((r) => r.imageUrl || (r.images && r.images.length > 0))
            .flatMap((r) => (r.images && r.images.length > 0 ? r.images : [r.imageUrl]))
            .filter(Boolean)
            .slice(0, 5);

          if (publishedImages.length > 0) {
            setImages(publishedImages);
            setIsLoaded(true);
            return;
          }
        }
      } catch (error) {
        console.error("Erreur chargement localStorage:", error);
      }

      // Fallback images placeholder
      setImages(placeholderImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Défilement automatique
  React.useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Navigation manuelle
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />
    );
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
              alt={`AZ Construction - Réalisation ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              onError={(e) => {
                // Fallback si l'image ne charge pas
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient sombre */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 via-navy-medium/70 to-navy-dark/80" />

      {/* Overlay additionnel pour lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/50" />

      {/* Effet de vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(10, 22, 40, 0.4) 100%)",
        }}
      />

      {/* Navigation dots */}
      {images.length > 1 && (
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
      )}
    </div>
  );
}

