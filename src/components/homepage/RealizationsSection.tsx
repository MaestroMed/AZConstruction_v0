"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Realization {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}

// Données par défaut si localStorage vide
const defaultRealizations: Realization[] = [
  {
    id: "1",
    title: "Hangar Industriel",
    location: "Lyon",
    imageUrl: "/uploads/1734349915098-villa-marseille.jpg",
    category: "Industriel",
  },
  {
    id: "2",
    title: "Fenêtres Jansen",
    location: "Bordeaux",
    imageUrl: "/uploads/1734349915099-residence-lyon.jpg",
    category: "Résidentiel",
  },
  {
    id: "3",
    title: "Escalier Monumental",
    location: "Paris",
    imageUrl: "/uploads/1734349915100-loft-paris.jpg",
    category: "Architecture",
  },
  {
    id: "4",
    title: "Porte d'entrée Design",
    location: "Marseille",
    imageUrl: "/uploads/1734349915101-maison-bordeaux.jpg",
    category: "Résidentiel",
  },
  {
    id: "5",
    title: "Structure Métallique",
    location: "Nice",
    imageUrl: "/uploads/1734349915102-restaurant-nice.jpg",
    category: "Commercial",
  },
];

export default function RealizationsSection() {
  const [realizations, setRealizations] = React.useState<Realization[]>(defaultRealizations);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  // Charger depuis localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("az_realizations");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRealizations(parsed.filter((r: Realization) => r.imageUrl));
        }
      }
    } catch (e) {
      console.error("Erreur chargement réalisations:", e);
    }
  }, []);

  const slidesPerView = 3;
  const maxIndex = Math.max(0, realizations.length - slidesPerView);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleRealizations = realizations.slice(currentIndex, currentIndex + slidesPerView);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-cyan-glow font-medium text-sm uppercase tracking-wider mb-2 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-dark">
              Nos réalisations
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
              Découvrez nos derniers projets et laissez-vous inspirer pour votre future création.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-navy-dark hover:text-white hover:border-navy-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-navy-dark hover:text-white hover:border-navy-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleRealizations.map((realization, index) => (
                <motion.div
                  key={realization.id}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  layout
                >
                  <Link href={`/realisations/${realization.id}`}>
                    <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                      {/* Image */}
                      <div className="absolute inset-0 bg-navy-dark">
                        {realization.imageUrl ? (
                          <Image
                            src={realization.imageUrl}
                            alt={realization.title || "Réalisation AZ Construction"}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-corporate to-navy-dark" />
                        )}
                      </div>

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                          {realization.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {realization.title}
                        </h3>
                        <p className="text-white/60 text-sm flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {realization.location}
                        </p>

                        {/* View button - hidden by default, shows on hover */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                            Voir le projet
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(realizations.length / slidesPerView) }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > Math.floor(currentIndex / slidesPerView) ? 1 : -1);
                  setCurrentIndex(i * slidesPerView);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / slidesPerView) === i
                    ? "w-8 bg-cyan-glow"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-dark text-white font-semibold rounded-full hover:bg-blue-corporate transition-colors group"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
