"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

// Partner logos - Jansen en priorité comme fournisseur principal de profilés acier
const partners = [
  { id: "jansen", name: "JANSEN", color: "#C41E3A", highlight: true, imageKey: "partner-jansen" },
  { id: "bouygues", name: "Bouygues Construction", color: "#00539C", imageKey: "partner-bouygues" },
  { id: "vinci", name: "VINCI", color: "#003366", imageKey: "partner-vinci" },
  { id: "eiffage", name: "EIFFAGE", color: "#E30613", imageKey: "partner-eiffage" },
  { id: "saint-gobain", name: "SAINT-GOBAIN", color: "#004990", imageKey: "partner-saint-gobain" },
];

export default function PartnersCarousel() {
  const { getImage, isPlaceholder } = useSiteImages();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleCount = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative bg-white rounded-[40px] shadow-lg py-8 px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Partners logos */}
          <div className="flex items-center justify-center gap-12 overflow-hidden">
            {partners.slice(0, visibleCount).map((partner, index) => {
              const imageUrl = getImage(partner.imageKey);
              const hasCustomImage = !isPlaceholder(partner.imageKey);
              
              return (
                <motion.div
                  key={partner.id}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {hasCustomImage ? (
                    /* Image logo from back-office */
                    <div className="relative h-12 w-36">
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
                      className="font-bold text-lg tracking-tight"
                      style={{ color: partner.color }}
                    >
                      {partner.name === "JANSEN" ? (
                        <div className="flex flex-col items-center bg-gradient-to-r from-red-700 to-red-600 px-4 py-2 rounded-lg">
                          <span className="text-2xl font-black text-white tracking-widest">JANSEN</span>
                          <span className="text-[10px] text-white/80 tracking-wider">STEEL SYSTEMS</span>
                        </div>
                      ) : partner.name === "Bouygues Construction" ? (
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-black">BOUYGUES</span>
                          <span className="text-xs tracking-wider">Construction</span>
                        </div>
                      ) : partner.name === "VINCI" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-black">VINCI</span>
                          <div className="flex flex-col">
                            <div className="w-2 h-2 bg-current" />
                            <div className="w-2 h-2 bg-current mt-0.5" />
                          </div>
                        </div>
                      ) : partner.name === "EIFFAGE" ? (
                        <span className="text-2xl font-black italic">EIFFAGE</span>
                      ) : (
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-black">SAINT-GOBAIN</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



