"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

// Partner logos - Jansen en priorité comme fournisseur principal de profilés acier
// Puis les maîtres d'ouvrage partenaires
const partners = [
  // Fournisseur principal
  { id: "jansen", name: "JANSEN", color: "#C41E3A", highlight: true, imageKey: "partner-jansen" },
  // Maîtres d'ouvrage partenaires
  { id: "demathieu-bard", name: "Demathieu Bard", color: "#1E3A8A", imageKey: "partner-demathieu-bard" },
  { id: "spie-batignolles", name: "Spie Batignolles", color: "#DC2626", imageKey: "partner-spie-batignolles" },
  { id: "rabot-dutilleul", name: "Rabot Dutilleul", color: "#059669", imageKey: "partner-rabot-dutilleul" },
  { id: "bouygues", name: "Bouygues Construction", color: "#00539C", imageKey: "partner-bouygues" },
  { id: "vinci", name: "VINCI", color: "#003366", imageKey: "partner-vinci" },
  { id: "eiffage", name: "EIFFAGE", color: "#E30613", imageKey: "partner-eiffage" },
  { id: "urbaine-travaux", name: "Urbaine de Travaux", color: "#7C3AED", imageKey: "partner-urbaine-travaux" },
  { id: "saint-gobain", name: "SAINT-GOBAIN", color: "#004990", imageKey: "partner-saint-gobain" },
];

export default function PartnersCarousel() {
  const { getImage, isPlaceholder } = useSiteImages();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  
  // Nombre de logos visibles selon la taille d'écran (géré par CSS)
  const visibleCount = 5;
  const totalPartners = partners.length;

  // Auto-play
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPartners);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPartners]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalPartners);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalPartners) % totalPartners);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Get visible partners with wrap-around
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalPartners;
      visible.push({ ...partners[index], displayIndex: i });
    }
    return visible;
  };

  const visiblePartners = getVisiblePartners();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Ils nous font confiance
          </h3>
          <p className="text-gray-600">
            Maîtres d&apos;ouvrage et partenaires de référence
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white rounded-[40px] shadow-lg py-8 px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
            aria-label="Partenaires précédents"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
            aria-label="Partenaires suivants"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Partners logos */}
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visiblePartners.map((partner) => {
                const imageUrl = getImage(partner.imageKey);
                const hasCustomImage = !isPlaceholder(partner.imageKey);

                return (
                  <motion.div
                    key={`${partner.id}-${partner.displayIndex}`}
                    className="flex-shrink-0 flex items-center justify-center w-24 md:w-32 lg:w-40"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center h-12 w-full">
                      {hasCustomImage ? (
                        /* Image logo from back-office */
                        <div className="relative h-full w-full">
                          <Image
                            src={imageUrl}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        /* Text-based fallback logo */
                        <div
                          className="font-bold text-center flex items-center justify-center h-full w-full"
                          style={{ color: partner.color }}
                        >
                          {partner.name === "JANSEN" ? (
                            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-700 to-red-600 px-3 py-1.5 rounded-lg">
                              <span className="text-base md:text-lg font-black text-white tracking-widest leading-tight">JANSEN</span>
                              <span className="text-[7px] md:text-[9px] text-white/80 tracking-wider leading-tight">STEEL SYSTEMS</span>
                            </div>
                          ) : partner.name === "Bouygues Construction" ? (
                            <div className="flex flex-col items-center justify-center leading-tight">
                              <span className="text-sm md:text-base font-black">BOUYGUES</span>
                              <span className="text-[9px] md:text-[10px] tracking-wider">Construction</span>
                            </div>
                          ) : partner.name === "VINCI" ? (
                            <div className="flex items-center justify-center gap-1">
                              <span className="text-lg md:text-xl font-black">VINCI</span>
                              <div className="flex flex-col gap-0.5">
                                <div className="w-1.5 h-1.5 bg-current" />
                                <div className="w-1.5 h-1.5 bg-current" />
                              </div>
                            </div>
                          ) : partner.name === "EIFFAGE" ? (
                            <span className="text-lg md:text-xl font-black italic">EIFFAGE</span>
                          ) : partner.name === "SAINT-GOBAIN" ? (
                            <span className="text-sm md:text-base font-black">SAINT-GOBAIN</span>
                          ) : partner.name === "Demathieu Bard" ? (
                            <div className="flex flex-col items-center justify-center leading-tight">
                              <span className="text-xs md:text-sm font-black">DEMATHIEU</span>
                              <span className="text-xs md:text-sm font-black">BARD</span>
                            </div>
                          ) : partner.name === "Spie Batignolles" ? (
                            <div className="flex flex-col items-center justify-center leading-tight">
                              <span className="text-sm md:text-base font-black">SPIE</span>
                              <span className="text-[9px] md:text-[10px] tracking-wider">BATIGNOLLES</span>
                            </div>
                          ) : partner.name === "Rabot Dutilleul" ? (
                            <div className="flex flex-col items-center justify-center leading-tight">
                              <span className="text-xs md:text-sm font-black">RABOT</span>
                              <span className="text-xs md:text-sm font-black">DUTILLEUL</span>
                            </div>
                          ) : partner.name === "Urbaine de Travaux" ? (
                            <div className="flex flex-col items-center justify-center leading-tight">
                              <span className="text-[10px] md:text-xs font-black">URBAINE DE</span>
                              <span className="text-[10px] md:text-xs font-black">TRAVAUX</span>
                            </div>
                          ) : (
                            <span className="text-sm md:text-base font-black">{partner.name.toUpperCase()}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-cyan-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au partenaire ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
