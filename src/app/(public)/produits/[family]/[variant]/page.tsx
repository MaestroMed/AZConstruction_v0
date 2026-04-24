"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Award,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { GlowButton, GlassCard, MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { getProductFamilyBySlug } from "@/lib/data/product-families";
import { HeroMedia } from "@/components/products/HeroMedia";

interface VariantData {
  id: string;
  name: string;
  description?: string;
  features?: string[];
  imageUrl?: string;
  images?: string[];
  heroVideoUrl?: string;
}

// ── DB shapes returned by /api/families/[slug] ───────────────────
interface DbAsset {
  id: string;
  type: "IMAGE" | "VIDEO";
  role: "HERO" | "GALLERY" | "CARD";
  url: string;
  alt?: string | null;
  posterUrl?: string | null;
  ordre: number;
}

interface DbProductVariant {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  features: string[];
  startingPrice?: string | null;
  ordre: number;
  active: boolean;
  assets: DbAsset[];
}

function assetsByRole(
  assets: DbAsset[] | undefined,
  role: DbAsset["role"],
  type?: DbAsset["type"]
): DbAsset[] {
  if (!assets) return [];
  return assets
    .filter((a) => a.role === role && (type ? a.type === type : true))
    .sort((a, b) => a.ordre - b.ordre);
}

function mapDbVariant(v: DbProductVariant): VariantData {
  const cardAssets = assetsByRole(v.assets, "CARD", "IMAGE");
  const galleryAssets = assetsByRole(v.assets, "GALLERY", "IMAGE");
  const heroVideoAsset = assetsByRole(v.assets, "HERO", "VIDEO")[0];
  return {
    id: v.slug,
    name: v.name,
    description: v.description ?? undefined,
    features: v.features ?? [],
    imageUrl: cardAssets[0]?.url,
    images: galleryAssets.length > 0 ? galleryAssets.map((a) => a.url) : undefined,
    heroVideoUrl: heroVideoAsset?.url,
  };
}

export default function VariantPage() {
  const params = useParams();
  const familySlug = params.family as string;
  const variantId = params.variant as string;

  // Static data as base
  const family = getProductFamilyBySlug(familySlug);
  const staticVariant = family?.variants.find((v) => v.id === variantId);

  // DB data (overrides static)
  const [variant, setVariant] = React.useState<VariantData | null>(staticVariant ?? null);
  const [familyHeroImages, setFamilyHeroImages] = React.useState<string[]>(family?.heroImages ?? []);
  const [familyHeroVideoUrl, setFamilyHeroVideoUrl] = React.useState<string | null>(family?.heroVideoUrl ?? null);
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [allVariants, setAllVariants] = React.useState<VariantData[]>(family?.variants ?? []);

  React.useEffect(() => {
    // Load family + variants + assets from DB (nouvelle source de vérité)
    fetch(`/api/families/${familySlug}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.success || !data.family) return;
        const fam = data.family;

        // Family hero images depuis assets role=HERO type=IMAGE
        const heroImageAssets = assetsByRole(fam.assets, "HERO", "IMAGE");
        if (heroImageAssets.length > 0) {
          setFamilyHeroImages(heroImageAssets.map((a: DbAsset) => a.url));
        }

        // Family hero video depuis assets role=HERO type=VIDEO
        const heroVideoAsset = assetsByRole(fam.assets, "HERO", "VIDEO")[0];
        if (heroVideoAsset) {
          setFamilyHeroVideoUrl(heroVideoAsset.url);
        }

        // Variants DB : mapper ProductVariant + assets
        const dbVariants = Array.isArray(fam.productVariants)
          ? (fam.productVariants as DbProductVariant[]).map(mapDbVariant)
          : [];
        if (dbVariants.length > 0) {
          setAllVariants(dbVariants);
          const found = dbVariants.find((v) => v.id === variantId);
          if (found) setVariant(found);
        }
      })
      .catch(() => {});
  }, [familySlug, variantId]);

  // Resolve active video: variant video takes precedence over family video
  const activeVideoUrl = (variant ?? staticVariant)?.heroVideoUrl ?? familyHeroVideoUrl;

  // Auto-advance gallery (disabled when a video is active)
  React.useEffect(() => {
    if (activeVideoUrl) return;
    const variantImgs = (variant?.images?.length ? variant.images : variant?.imageUrl ? [variant.imageUrl] : []);
    const images = variantImgs.length > 0 ? [...variantImgs, ...familyHeroImages.filter(u => !variantImgs.includes(u))] : familyHeroImages;
    if (images.length <= 1) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [variant?.imageUrl, variant?.images?.length, familyHeroImages.length, activeVideoUrl]);

  if (!family || (!variant && !staticVariant)) {
    notFound();
  }

  const currentVariant = variant ?? staticVariant!;
  const variantImgs = (currentVariant.images?.length ? currentVariant.images : currentVariant.imageUrl ? [currentVariant.imageUrl] : []);
  const galleryImages = variantImgs.length > 0
    ? [...variantImgs, ...familyHeroImages.filter(u => !variantImgs.includes(u))]
    : familyHeroImages;
  const otherVariants = allVariants.filter((v) => v.id !== variantId);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero pleine page ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <HeroMedia
            videoUrl={activeVideoUrl}
            imageUrl={galleryImages.length > 0 ? galleryImages[heroIndex % galleryImages.length] : undefined}
            imageIndexKey={heroIndex}
            alt={currentVariant.name}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/65 to-navy-dark/25" />
        </div>

        <MeshGradient variant="aurora" className="absolute inset-0 opacity-15 mix-blend-overlay" />
        <ParticleBackground count={10} />
        <GradientOrb color="cyan" size="lg" position={{ top: "15%", right: "-5%" }} blur="xl" opacity={0.08} />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/produits" className="hover:text-white/70 transition-colors">Produits</Link>
              <span>/</span>
              <Link href={`/produits/${familySlug}`} className="hover:text-white/70 transition-colors">{family.name}</Link>
              <span>/</span>
              <span className="text-cyan-glow">{currentVariant.name}</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium tracking-wide uppercase">{family.tagline}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            >
              {currentVariant.name}
            </motion.h1>

            {currentVariant.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-white/70 mb-7 leading-relaxed"
              >
                {currentVariant.description}
              </motion.p>
            )}

            {/* Features */}
            {(currentVariant.features ?? []).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {(currentVariant.features ?? []).map((f) => (
                  <span key={f} className="glass-card px-4 py-2 text-white/90 text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                    {f}
                  </span>
                ))}
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Demander un devis gratuit
                </GlowButton>
              </Link>
              <PhoneLink variant="button" className="w-full sm:w-auto" />
            </motion.div>
          </div>
        </div>

        {/* Carousel nav (hidden when hero video is active) */}
        {!activeVideoUrl && galleryImages.length > 1 && (
          <>
            <button
              onClick={() => setHeroIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setHeroIndex((i) => (i + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {galleryImages.map((_, i) => (
                <button key={i} onClick={() => setHeroIndex(i)}
                  className={`transition-all rounded-full ${i === heroIndex ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/40"}`} />
              ))}
            </div>
          </>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-2 text-white/30 text-xs"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── Description + specs ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
              {family.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
              {currentVariant.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {currentVariant.description || family.longDescription}
            </p>
            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {(currentVariant.features ?? family.features).map((f) => (
                <span key={f} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs table from family ── */}
      {family.specifications.length > 0 && (
        <section className="py-20 bg-navy-dark relative overflow-hidden">
          <MeshGradient variant="aurora" className="absolute inset-0 opacity-20" />
          <GradientOrb color="cyan" size="lg" position={{ top: "20%", right: "10%" }} blur="xl" opacity={0.08} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-cyan-glow font-semibold text-sm tracking-wider uppercase mb-4">
                  Caractéristiques
                </span>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Spécifications techniques
                </h2>
                <div className="space-y-3">
                  {family.specifications.map((spec) => (
                    <div key={spec.label} className="glass-card p-4 flex justify-between items-center">
                      <span className="text-white/70">{spec.label}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <GlassCard variant="spotlight" padding="xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-glow/30">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Fabrication Française</h3>
                  <p className="text-white/60 mb-6 text-sm">
                    Chaque {family.nameSingular.toLowerCase()} est fabriqué sur mesure dans notre atelier de 1800m² en Île-de-France.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="glass-card p-3 text-center">
                      <p className="text-2xl font-bold text-cyan-glow">1500+</p>
                      <p className="text-white/50 text-xs">Projets réalisés</p>
                    </div>
                    <div className="glass-card p-3 text-center">
                      <p className="text-2xl font-bold text-cyan-glow">Décennale</p>
                      <p className="text-white/50 text-xs">Garantie</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <GlowButton icon={<ArrowRight className="w-4 h-4" />} className="w-full">
                      Devis gratuit
                    </GlowButton>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* ── Other variants ── */}
      {otherVariants.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
                Autres modèles
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-dark">
                Découvrez aussi nos autres {family.name.toLowerCase()}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVariants.slice(0, 3).map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/produits/${familySlug}/${v.id}`}>
                    <div className="group relative h-52 rounded-2xl overflow-hidden">
                      {v.imageUrl ? (
                        <Image src={v.imageUrl} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800 flex items-center justify-center">
                          <span className="text-5xl font-bold text-white/10">{v.name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">{v.name}</h3>
                        <span className="text-cyan-glow text-xs flex items-center gap-1 mt-1">
                          Découvrir <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href={`/produits/${familySlug}`}>
                <Button variant="outline" size="lg" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
                  Voir tous les {family.name.toLowerCase()}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-corporate to-navy-dark rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Intéressé par ce modèle ?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Obtenez un devis gratuit personnalisé pour votre projet. Réponse garantie sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis
                  </GlowButton>
                </Link>
                <PhoneLink variant="button" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
