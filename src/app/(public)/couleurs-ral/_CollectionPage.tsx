"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Tag, CheckCircle2 } from "lucide-react";
import {
  ralCollections,
  type RALCollection,
  type CollectionFinish,
  type SubCollection,
} from "@/lib/data/thermolaquage-items";
import { GlowButton } from "@/components/ui/GlowButton";
import { CollectionHeroMosaic } from "./_CollectionHeroMosaic";

interface CollectionPageProps {
  collection: RALCollection;
}

function FinishTile({
  finish,
  isSelected,
  onSelect,
}: {
  finish: CollectionFinish;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group text-left"
    >
      <div
        className={`relative w-full aspect-square rounded-xl overflow-hidden mb-2 transition-all ${
          isSelected
            ? "ring-3 ring-offset-2 ring-cyan-500 scale-105"
            : "ring-1 ring-black/10 group-hover:ring-black/20"
        }`}
        style={finish.imageUrl ? undefined : { backgroundColor: finish.hex || "#888" }}
      >
        {finish.imageUrl && (
          <Image
            src={finish.imageUrl}
            alt={finish.name}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 12vw"
            quality={65}
            className="object-cover"
            loading="lazy"
          />
        )}
      </div>
      <p className="text-[11px] text-gray-600 leading-tight truncate font-medium">
        {finish.name}
      </p>
      {finish.description && (
        <p className="text-[10px] text-gray-400 leading-tight truncate">
          {finish.description}
        </p>
      )}
    </motion.button>
  );
}

function FinishGrid({
  finishes,
  selectedFinish,
  onSelect,
}: {
  finishes: CollectionFinish[];
  selectedFinish: CollectionFinish;
  onSelect: (f: CollectionFinish) => void;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {finishes.map((finish) => (
        <FinishTile
          key={finish.id}
          finish={finish}
          isSelected={selectedFinish.id === finish.id}
          onSelect={() => onSelect(finish)}
        />
      ))}
    </div>
  );
}

function SubCollectionSection({
  sub,
  selectedFinish,
  onSelect,
}: {
  sub: SubCollection;
  selectedFinish: CollectionFinish;
  onSelect: (f: CollectionFinish) => void;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between mb-4 pb-3 border-b border-gray-200">
        <div>
          <h3 className="text-xl font-bold text-navy-dark">{sub.name}</h3>
          {sub.description && (
            <p className="text-sm text-gray-500 mt-0.5">{sub.description}</p>
          )}
        </div>
        <span className="text-xs text-gray-400">{sub.finishes.length} finitions</span>
      </div>
      <FinishGrid
        finishes={sub.finishes}
        selectedFinish={selectedFinish}
        onSelect={onSelect}
      />
    </div>
  );
}

export function CollectionPage({ collection }: CollectionPageProps) {
  const [selectedFinish, setSelectedFinish] = React.useState<CollectionFinish>(
    collection.finishes[0],
  );
  const hasSubs = (collection.subCollections?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section
        className={`relative min-h-[80vh] lg:min-h-[88vh] flex items-end overflow-hidden bg-gradient-to-br ${collection.bgGradient}`}
      >
        {/* Cinematic background mosaic */}
        <CollectionHeroMosaic
          finishes={collection.finishes}
          accentColor={collection.accentColor}
        />

        {/* Subtle dot pattern on top of mosaic */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Big "ghost" finish count, decorative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -bottom-10 -left-6 lg:-left-12 select-none pointer-events-none z-[2]"
          aria-hidden
        >
          <span className="font-display text-[14rem] lg:text-[20rem] font-bold leading-none text-white/[0.04] tracking-tighter">
            {String(collection.finishes.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className="container mx-auto px-6 pb-20 pt-32 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/couleurs-ral" className="hover:text-white/70 transition-colors">
              Nuancier RAL
            </Link>
            <span>/</span>
            <span className="text-white/70">{collection.nom}</span>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="max-w-2xl"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-white/80 text-xs mb-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: collection.accentColor }}
              />
              {collection.subtitle}
              <span className="text-white/40">·</span>
              <span className="text-white/60">{collection.finishes.length} finitions</span>
            </motion.div>

            {/* Title — word-by-word reveal */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] tracking-tight drop-shadow-2xl">
              {collection.nom.split(" ").map((word, i, arr) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block mr-3"
                >
                  {i === arr.length - 1 ? (
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${collection.accentColor}, white 70%)`,
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-white/75 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow-lg"
            >
              {collection.description}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-md text-white/70 rounded-full text-xs border border-white/15"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <GlowButton icon={<ArrowRight className="w-4 h-4" />}>
                  Demander un devis
                </GlowButton>
              </Link>
              <a
                href={collection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/15 transition-colors text-sm font-medium"
              >
                Catalogue Adaptacolor
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              À propos de cette collection
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {collection.longDescription}
            </p>
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold text-sm">
                  Collection disponible sur demande
                </p>
                <p className="text-amber-700 text-sm">
                  Ces finitions sont disponibles en supplément sur devis.
                  Contactez-nous pour vérifier la disponibilité et les délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Finishes ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between mb-10 gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark">
                Finitions disponibles
              </h2>
              <p className="text-gray-500 mt-1">
                {collection.finishes.length} teintes
                {hasSubs && ` · ${collection.subCollections!.length} sous-collections`}{" "}
                · Images officielles Adaptacolor
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
          <div className="mb-10 p-6 rounded-2xl border border-gray-200 flex items-center gap-6 bg-white shadow-sm sticky top-24 z-20 backdrop-blur-sm bg-white/90">
            <div
              className="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-black/10 flex-shrink-0"
              style={
                selectedFinish.imageUrl
                  ? undefined
                  : { backgroundColor: selectedFinish.hex || "#888" }
              }
            >
              {selectedFinish.imageUrl && (
                <Image
                  src={selectedFinish.imageUrl}
                  alt={selectedFinish.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-navy-dark text-xl truncate">
                {selectedFinish.name}
              </p>
              {selectedFinish.description && (
                <p className="text-gray-500 mt-1 truncate">
                  {selectedFinish.description}
                </p>
              )}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 text-cyan-600 text-sm font-medium hover:underline"
              >
                Demander cette finition <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid — grouped by sub-collection if present, otherwise flat */}
          {hasSubs ? (
            collection.subCollections!.map((sub) => (
              <SubCollectionSection
                key={sub.id}
                sub={sub}
                selectedFinish={selectedFinish}
                onSelect={setSelectedFinish}
              />
            ))
          ) : (
            <FinishGrid
              finishes={collection.finishes}
              selectedFinish={selectedFinish}
              onSelect={setSelectedFinish}
            />
          )}

          <p className="text-xs text-gray-400 mt-6 text-center">
            * Les images proviennent du catalogue Adaptacolor officiel. Pour une
            validation finale, nous vous recommandons de demander un échantillon
            physique.
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
                  <div
                    className={`relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${col.bgGradient} group`}
                  >
                    <div className="absolute inset-0 grid grid-cols-3 gap-1 p-3 opacity-70 group-hover:opacity-90 transition-opacity">
                      {col.finishes.slice(0, 6).map((f) => (
                        <div
                          key={f.id}
                          className="relative rounded-md overflow-hidden ring-1 ring-white/20"
                          style={
                            f.imageUrl
                              ? undefined
                              : { backgroundColor: f.hex || "#888" }
                          }
                        >
                          {f.imageUrl && (
                            <Image
                              src={f.imageUrl}
                              alt=""
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold">{col.nom}</p>
                      <p className="text-white/70 text-xs line-clamp-1">
                        {col.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-navy-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Intéressé par cette collection ?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Demandez un devis gratuit. Nous vous répondons sous 24h avec un
            échantillon si nécessaire.
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
