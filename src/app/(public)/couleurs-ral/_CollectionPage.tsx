"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Tag, CheckCircle2 } from "lucide-react";
import { ralCollections, type RALCollection } from "@/lib/data/thermolaquage-items";
import { GlowButton } from "@/components/ui/GlowButton";

interface CollectionPageProps {
  collection: RALCollection;
}

export function CollectionPage({ collection }: CollectionPageProps) {
  const [selectedFinish, setSelectedFinish] = React.useState(collection.finishes[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className={`relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br ${collection.bgGradient}`}>
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Color swatches decorative */}
        <div className="absolute top-12 right-12 flex flex-col gap-2 opacity-40">
          {collection.finishes.slice(0, 6).map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-10 h-10 rounded-xl ring-1 ring-white/20"
              style={{ backgroundColor: f.hex || "#888" }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 pb-16 pt-32 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/couleurs-ral" className="hover:text-white/70 transition-colors">
              Nuancier RAL
            </Link>
            <span>/</span>
            <span className="text-white/70">{collection.nom}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs mb-6">
              {collection.subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {collection.nom}
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mb-8">
              {collection.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs border border-white/10"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <GlowButton icon={<ArrowRight className="w-4 h-4" />}>
                  Demander un devis
                </GlowButton>
              </Link>
              <a
                href={collection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-colors text-sm font-medium"
              >
                Voir le catalogue Adaptacolor
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">À propos de cette collection</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{collection.longDescription}</p>
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold text-sm">Collection disponible sur demande</p>
                <p className="text-amber-700 text-sm">
                  Ces finitions sont disponibles en supplément sur devis. Contactez-nous pour vérifier la disponibilité et les délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Finishes grid ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark">
                Finitions disponibles
              </h2>
              <p className="text-gray-500 mt-1">
                {collection.finishes.length} teintes · Données basées sur le catalogue Adaptacolor
              </p>
            </div>
            <a
              href={collection.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Catalogue complet
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Selected finish preview */}
          <div className="mb-10 p-6 rounded-2xl border border-gray-200 flex items-center gap-6 bg-white shadow-sm">
            <div
              className="w-24 h-24 rounded-2xl ring-2 ring-black/10 flex-shrink-0"
              style={{ backgroundColor: selectedFinish.hex || "#888" }}
            />
            <div>
              <p className="font-bold text-navy-dark text-xl">{selectedFinish.name}</p>
              {selectedFinish.description && (
                <p className="text-gray-500 mt-1">{selectedFinish.description}</p>
              )}
              <Link href="/contact" className="mt-3 inline-flex items-center gap-2 text-cyan-600 text-sm font-medium hover:underline">
                Demander cette finition <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Finishes grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {collection.finishes.map((finish) => (
              <motion.button
                key={finish.id}
                onClick={() => setSelectedFinish(finish)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group text-left"
              >
                <div
                  className={`w-full aspect-square rounded-xl mb-2 transition-all ${
                    selectedFinish.id === finish.id
                      ? "ring-3 ring-offset-2 ring-cyan-500 scale-105"
                      : "ring-1 ring-black/10 group-hover:ring-black/20"
                  }`}
                  style={{ backgroundColor: finish.hex || "#888" }}
                />
                <p className="text-[10px] text-gray-500 leading-tight truncate font-medium">{finish.name}</p>
                {finish.description && (
                  <p className="text-[9px] text-gray-400 leading-tight truncate">{finish.description}</p>
                )}
              </motion.button>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center">
            * Les couleurs affichées sont indicatives. Nous vous conseillons de demander un échantillon physique avant validation.
          </p>
        </div>
      </section>

      {/* ── Other collections ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold text-navy-dark mb-6">Autres collections</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ralCollections
              .filter((c) => c.id !== collection.id)
              .map((col) => (
                <Link key={col.id} href={`/couleurs-ral/${col.slug}`}>
                  <div className={`relative h-32 rounded-2xl overflow-hidden bg-gradient-to-br ${col.bgGradient} group`}>
                    <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                      {col.finishes.slice(0, 6).map((f) => (
                        <span
                          key={f.id}
                          className="w-5 h-5 rounded-md ring-1 ring-white/20"
                          style={{ backgroundColor: f.hex || "#888" }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                  </div>
                  <p className="font-semibold text-navy-dark mt-2 group-hover:text-cyan-600 transition-colors">{col.nom}</p>
                  <p className="text-sm text-gray-500">{col.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-navy-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-3">Intéressé par cette collection ?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Demandez un devis gratuit. Nous vous répondons sous 24h avec un échantillon si nécessaire.
          </p>
          <Link href="/contact">
            <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Demander un devis gratuit
            </GlowButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
