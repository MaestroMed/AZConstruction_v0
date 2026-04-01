"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Award,
  Loader2,
  Building2,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { MeshGradient, GradientOrb } from "@/components/ui/MeshGradient";
import { cn } from "@/lib/utils";

interface RealizationDetail {
  id: string;
  titre: string;
  description?: string;
  categorie: string;
  ville?: string;
  dateRealisation?: string;
  imageUrl?: string;
  images: string[];
  published: boolean;
  clientName?: string | null;
  clientLogoUrl?: string | null;
}

export default function RealisationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [realization, setRealization] = React.useState<RealizationDetail | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [imgIndex, setImgIndex] = React.useState(0);

  React.useEffect(() => {
    if (!id) return;
    fetch("/api/realizations")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.realizations) {
          const found = data.realizations.find((r: RealizationDetail) => r.id === id);
          if (found) setRealization(found);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!realization) return;
      if (e.key === "ArrowLeft") setImgIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setImgIndex((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realization]);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-dark flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-cyan-glow" />
      </div>
    );
  }

  if (!realization) {
    notFound();
  }

  const images =
    realization.images.length > 0
      ? realization.images
      : realization.imageUrl
      ? [realization.imageUrl]
      : [];

  const prevImg = () => setImgIndex((i) => Math.max(0, i - 1));
  const nextImg = () => setImgIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero image ── */}
      <section className="relative h-[70vh] min-h-[500px] bg-navy-dark overflow-hidden">
        {images.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[imgIndex]}
                  alt={`${realization.titre} — photo ${imgIndex + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />

            {/* Image navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  disabled={imgIndex === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-black/70 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImg}
                  disabled={imgIndex === images.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-black/70 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={cn(
                        "rounded-full transition-all",
                        i === imgIndex ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/50 hover:bg-white/70"
                      )}
                    />
                  ))}
                </div>
                {/* Counter */}
                <div className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs flex items-center gap-1.5 border border-white/10">
                  <ZoomIn className="w-3.5 h-3.5" />
                  {imgIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Building2 className="w-24 h-24 text-white/10" />
          </div>
        )}

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 text-white/80 rounded-full text-sm hover:bg-black/60 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Nos réalisations
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 container mx-auto px-6 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-cyan-glow/80 text-navy-dark text-xs font-bold rounded-full">
                {realization.categorie}
              </span>
              {realization.dateRealisation && (
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                  {new Date(realization.dateRealisation).getFullYear()}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{realization.titre}</h1>
            {realization.ville && (
              <p className="text-white/60 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-glow" />
                {realization.ville}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Thumbnails strip ── */}
      {images.length > 1 && (
        <div className="bg-gray-900 py-3 px-6 overflow-x-auto">
          <div className="flex gap-2 justify-center max-w-5xl mx-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={cn(
                  "relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                  i === imgIndex ? "border-cyan-400 opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {realization.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy-dark mb-4">À propos de ce projet</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{realization.description}</p>
                </motion.div>
              )}

              {/* Meta info */}
              <div className="grid sm:grid-cols-3 gap-4 mt-10">
                <div className="bg-gray-50 rounded-2xl p-5 text-center">
                  <Award className="w-6 h-6 text-cyan-glow mx-auto mb-2" />
                  <p className="text-xs text-gray-400 mb-1">Catégorie</p>
                  <p className="font-semibold text-navy-dark">{realization.categorie}</p>
                </div>
                {realization.ville && (
                  <div className="bg-gray-50 rounded-2xl p-5 text-center">
                    <MapPin className="w-6 h-6 text-cyan-glow mx-auto mb-2" />
                    <p className="text-xs text-gray-400 mb-1">Localisation</p>
                    <p className="font-semibold text-navy-dark">{realization.ville}</p>
                  </div>
                )}
                {realization.dateRealisation && (
                  <div className="bg-gray-50 rounded-2xl p-5 text-center">
                    <Calendar className="w-6 h-6 text-cyan-glow mx-auto mb-2" />
                    <p className="text-xs text-gray-400 mb-1">Réalisé en</p>
                    <p className="font-semibold text-navy-dark">
                      {new Date(realization.dateRealisation).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
                    </p>
                  </div>
                )}
              </div>

              {/* Client logo */}
              {(realization.clientLogoUrl || realization.clientName) && (
                <div className="mt-8 flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                  {realization.clientLogoUrl && (
                    <div className="relative w-[120px] h-12 flex-shrink-0">
                      <Image src={realization.clientLogoUrl} alt={realization.clientName || "Logo client"} fill className="object-contain" />
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Client</p>
                    <p className="font-semibold text-navy-dark">{realization.clientName || "Client confidentiel"}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-navy-dark rounded-3xl p-8 text-center sticky top-24"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Un projet similaire ?</h3>
                <p className="text-white/60 text-sm mb-6">
                  Nous réalisons chaque ouvrage sur mesure dans notre atelier en Île-de-France.
                </p>
                <Link href="/contact" className="block mb-3">
                  <GlowButton className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    Demander un devis
                  </GlowButton>
                </Link>
                <PhoneLink variant="button" className="w-full justify-center" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back button ── */}
      <section className="pb-16">
        <div className="container mx-auto px-6 text-center">
          <Link href="/realisations">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Voir toutes nos réalisations
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
