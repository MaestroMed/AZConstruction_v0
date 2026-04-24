"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Palette, ArrowRight, ExternalLink, ChevronRight, X } from "lucide-react";
import { ralColorsAll, ralColors20, ralCollections, RAL_FAMILIES, type RALFamily } from "@/lib/data/thermolaquage-items";
import { GlowButton } from "@/components/ui/GlowButton";

export default function CouleurRalPage() {
  const [search, setSearch] = React.useState("");
  const [activeFamily, setActiveFamily] = React.useState<RALFamily | "all">("all");
  const [selectedColor, setSelectedColor] = React.useState(ralColors20[0]);
  const [hoveredCode, setHoveredCode] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    let list = ralColorsAll;
    if (activeFamily !== "all") list = list.filter((c) => c.family === activeFamily);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) => c.code.toLowerCase().includes(q) || c.label.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeFamily]);

  // Group by family for display
  const grouped = React.useMemo(() => {
    if (activeFamily !== "all" || search.trim()) return null;
    const map: Record<string, typeof filtered> = {};
    RAL_FAMILIES.forEach((f) => { map[f] = []; });
    ralColorsAll.forEach((c) => {
      if (map[c.family]) map[c.family].push(c);
    });
    return map;
  }, [activeFamily, search]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-blue-corporate/30" />

        {/* Animated color strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          <motion.div
            className="h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `linear-gradient(90deg, ${ralColors20.map((c) => c.hex).join(", ")}, ${ralColors20[0].hex})`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm mb-6">
              <Palette className="w-4 h-4 text-cyan-400" />
              Thermolaquage AZ Construction
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Nuancier{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                RAL Classique
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              {ralColorsAll.length}+ couleurs RAL disponibles en thermolaquage poudre époxy. Finition brillante, satinée ou mate.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher RAL 7016, Gris Anthracite..."
                className="w-full bg-white/10 border border-white/15 text-white placeholder-white/30 rounded-2xl py-3.5 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Selected color preview ── */}
      {selectedColor && !search && (
        <div
          className="py-5 px-6 flex items-center justify-between sticky top-0 z-20 shadow-md transition-colors"
          style={{ backgroundColor: selectedColor.hex }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl ring-2 ring-white/30" style={{ backgroundColor: selectedColor.hex }} />
            <div>
              <p
                className="font-bold text-lg"
                style={{ color: isLightColor(selectedColor.hex) ? "#1a1a1a" : "#ffffff" }}
              >
                {selectedColor.name}
              </p>
              <p
                className="text-sm opacity-70"
                style={{ color: isLightColor(selectedColor.hex) ? "#1a1a1a" : "#ffffff" }}
              >
                {selectedColor.label}
              </p>
            </div>
          </div>
          <Link href="/contact">
            <button
              className="px-5 py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{
                backgroundColor: "transparent",
                borderColor: isLightColor(selectedColor.hex) ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
                color: isLightColor(selectedColor.hex) ? "#1a1a1a" : "#ffffff",
              }}
            >
              Demander un devis
            </button>
          </Link>
        </div>
      )}

      {/* ── Filters ── */}
      <section className="py-6 bg-gray-50 border-b border-gray-200 sticky top-[72px] z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFamily("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeFamily === "all"
                  ? "bg-navy-dark text-white border-navy-dark"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              Toutes ({ralColorsAll.length})
            </button>
            {RAL_FAMILIES.map((family) => {
              const count = ralColorsAll.filter((c) => c.family === family).length;
              const sample = ralColorsAll.find((c) => c.family === family);
              return (
                <button
                  key={family}
                  onClick={() => setActiveFamily(family)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                    activeFamily === family
                      ? "bg-navy-dark text-white border-navy-dark"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {sample && (
                    <span className="w-3.5 h-3.5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: sample.hex }} />
                  )}
                  {family}
                  <span className="text-xs opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Color grid ── */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Search / filter results */}
          {(search || activeFamily !== "all") && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${search}-${activeFamily}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <p className="text-gray-500 text-sm mb-1">
                  {filtered.length} couleur{filtered.length !== 1 ? "s" : ""} trouvée{filtered.length !== 1 ? "s" : ""}
                  {search && <> pour &quot;<strong className="text-gray-800">{search}</strong>&quot;</>}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                  {filtered.map((color) => (
                    <ColorSwatch
                      key={color.code}
                      color={color}
                      isSelected={selectedColor?.code === color.code}
                      isHovered={hoveredCode === color.code}
                      onClick={() => setSelectedColor(color)}
                      onMouseEnter={() => setHoveredCode(color.code)}
                      onMouseLeave={() => setHoveredCode(null)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Grouped by family */}
          {grouped && (
            <div className="space-y-12">
              {RAL_FAMILIES.map((family) => {
                const colors = grouped[family];
                if (!colors?.length) return null;
                return (
                  <div key={family}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex gap-1">
                        {colors.slice(0, 5).map((c) => (
                          <span
                            key={c.code}
                            className="w-5 h-5 rounded-full ring-1 ring-black/10"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">{family}</h2>
                      <span className="text-sm text-gray-400">{colors.length} teintes</span>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                      {colors.map((color) => (
                        <ColorSwatch
                          key={color.code}
                          color={color}
                          isSelected={selectedColor?.code === color.code}
                          isHovered={hoveredCode === color.code}
                          onClick={() => setSelectedColor(color)}
                          onMouseEnter={() => setHoveredCode(color.code)}
                          onMouseLeave={() => setHoveredCode(null)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Collections spéciales ── */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4">
              Au-delà du RAL Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Collections spéciales
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Nos partenaires Adaptacolor proposent des finitions uniques — effets oxyde, métalliques, anodisés et dichroïques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ralCollections.map((col) => (
              <motion.div
                key={col.id}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link href={`/couleurs-ral/${col.slug}`}>
                  <div className={`relative h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${col.bgGradient} mb-4`}>
                    {/* Finishes image preview */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-3 opacity-80">
                      {col.finishes.slice(0, 8).map((f) => (
                        <div
                          key={f.id}
                          className="relative rounded-md overflow-hidden ring-1 ring-white/20"
                          style={f.imageUrl ? undefined : { backgroundColor: f.hex || "#888" }}
                          title={f.name}
                        >
                          {f.imageUrl && (
                            <Image
                              src={f.imageUrl}
                              alt={`Finition ${f.name} — collection ${col.nom}`}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-xl border border-white/20">
                        Découvrir →
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                    {col.nom}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">{col.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {col.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy-dark mb-3">
            Votre couleur n&apos;est pas dans la liste ?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Nous travaillons sur commande avec plus de 200 teintes RAL et les collections spéciales Adaptacolor. Contactez-nous pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <GlowButton icon={<ArrowRight className="w-4 h-4" />}>
                Demander un devis
              </GlowButton>
            </Link>
            <Link href="/services/thermolaquage">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
                En savoir plus sur le thermolaquage
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Color Swatch Component ──
function ColorSwatch({
  color,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  color: { code: string; name: string; label: string; hex: string };
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="group text-left"
    >
      <div
        className={`w-full aspect-square rounded-xl mb-1.5 transition-all ${
          isSelected ? "ring-3 ring-offset-2 ring-cyan-500 scale-105" : "ring-1 ring-black/10"
        }`}
        style={{ backgroundColor: color.hex }}
      />
      <p className="text-[10px] font-mono text-gray-500 leading-tight truncate">RAL {color.code}</p>
      <p className="text-[10px] text-gray-400 leading-tight truncate">{color.label}</p>
    </motion.button>
  );
}

// ── Utility: detect if color is light ──
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}
