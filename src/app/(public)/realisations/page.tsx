"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Search,
  Grid3X3,
  LayoutList,
  Eye,
  Award,
  CheckCircle2,
  Building2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Realization {
  id: string;
  titre: string;
  description?: string;
  categorie: string;
  ville?: string;
  dateRealisation?: string;
  imageUrl?: string;
  images: string[];
  published: boolean;
  ordre: number;
}

const stats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "10", label: "Années d'expérience" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "1 800m²", label: "D'atelier" },
];

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "Garde-corps", label: "Garde-corps" },
  { id: "Escaliers", label: "Escaliers" },
  { id: "Portails", label: "Portails" },
  { id: "Clôtures", label: "Clôtures" },
  { id: "Portes", label: "Portes" },
  { id: "Fenêtres", label: "Fenêtres" },
  { id: "Grilles", label: "Grilles de ventilation" },
  { id: "Bâtiment", label: "Bâtiment" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export default function RealisationsPage() {
  const [realizations, setRealizations] = React.useState<Realization[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  // Charger les réalisations depuis l'API
  React.useEffect(() => {
    const fetchRealizations = async () => {
      try {
        const response = await fetch("/api/realizations");
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.realizations) {
            const withImages = data.realizations.filter((r: Realization) => r.imageUrl);
            setRealizations(withImages);
          }
        }
      } catch (error) {
        console.error("Erreur chargement réalisations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRealizations();
  }, []);

  const filteredRealizations = realizations.filter((r) => {
    const matchesCategory =
      selectedCategory === "all" || r.categorie === selectedCategory;
    const matchesSearch =
      r.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.ville && r.ville.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Obtenir les comptages par catégorie
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return realizations.length;
    return realizations.filter((r) => r.categorie === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Portfolio de nos réalisations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Réalisations{" "}
              <span className="font-serif italic text-cyan-pale">d&apos;exception</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Découvrez nos projets réalisés à travers la France. Chaque ouvrage
              est unique, conçu et fabriqué sur mesure dans nos ateliers.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const count = getCategoryCount(category.id);
                if (count === 0 && category.id !== "all") return null;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedCategory === category.id
                        ? "bg-blue-corporate text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                    )}
                  >
                    {category.label}
                    <span className="ml-1 opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "grid" ? "bg-blue-corporate text-white" : "text-gray-500 hover:bg-gray-100"
                )}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "list" ? "bg-blue-corporate text-white" : "text-gray-500 hover:bg-gray-100"
                )}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="container mx-auto px-6 py-6">
        <p className="text-gray-500">
          <span className="font-semibold text-navy-dark">{filteredRealizations.length}</span> projet(s) trouvé(s)
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-glow" />
        </div>
      )}

      {/* Realizations Grid/List */}
      {!loading && (
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${searchTerm}-${viewMode}`}
                className={cn(
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "flex flex-col gap-6"
                )}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredRealizations.map((realization) => (
                  <motion.div key={realization.id} variants={cardVariants} layout>
                    <div
                      className={cn(
                        "group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white",
                        viewMode === "list" && "flex"
                      )}
                    >
                      {/* Image */}
                      <div
                        className={cn(
                          "relative bg-gradient-to-br from-blue-corporate via-navy-medium to-navy-dark overflow-hidden",
                          viewMode === "grid" ? "h-64" : "w-72 h-48 flex-shrink-0"
                        )}
                      >
                        {realization.imageUrl ? (
                          <Image
                            src={realization.imageUrl}
                            alt={realization.titre}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Building2 className="w-16 h-16 text-white/30" />
                          </div>
                        )}

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-navy-dark">
                            {realization.categorie}
                          </span>
                        </div>

                        {/* Year badge */}
                        {realization.dateRealisation && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 bg-cyan-glow/90 backdrop-blur-sm rounded-full text-xs font-bold text-navy-dark">
                              {new Date(realization.dateRealisation).getFullYear()}
                            </span>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Images count */}
                        {realization.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded flex items-center gap-1">
                            📷 {realization.images.length}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={cn("p-6", viewMode === "list" && "flex-1")}>
                        <h3 className="text-xl font-semibold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">
                          {realization.titre}
                        </h3>
                        {realization.description && (
                          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                            {realization.description}
                          </p>
                        )}

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          {realization.ville && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {realization.ville}
                            </span>
                          )}
                          {realization.dateRealisation && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(realization.dateRealisation).toLocaleDateString("fr-FR", {
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state */}
            {!loading && filteredRealizations.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">
                  {realizations.length === 0
                    ? "Aucune réalisation pour le moment"
                    : "Aucun projet trouvé"}
                </h3>
                <p className="text-gray-500 mb-6">
                  {realizations.length === 0
                    ? "Nos réalisations seront bientôt disponibles."
                    : "Essayez de modifier vos critères de recherche."}
                </p>
                {realizations.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-blue-corporate to-navy-dark rounded-3xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Votre projet mérite le meilleur
                </h2>
                <p className="text-white/70 max-w-xl mb-8 lg:mb-0">
                  Rejoignez nos clients satisfaits et confiez-nous la réalisation
                  de votre ouvrage métallique sur mesure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/produits">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Voir nos produits
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
