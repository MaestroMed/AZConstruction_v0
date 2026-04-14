"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle2,
  Star,
  Shield,
  Award,
  Palette,
  Ruler,
  Wrench,
  Home,
  Eye,
  Sparkles,
  Zap,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  ZoomIn,
} from "lucide-react";
import { GlowButton, GlassCard, MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { getProductFamilyBySlug } from "@/lib/data/product-families";
import { cn } from "@/lib/utils";

// Icon map for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Award,
  Palette,
  Ruler,
  Wrench,
  Home,
  Eye,
  Sparkles,
  Zap,
  Heart,
};

// ── Variant type with multi-images ──────────────────────────
interface VariantWithImages {
  id: string;
  name: string;
  description?: string;
  features?: string[];
  imageUrl?: string;
  images?: string[];
  startingPrice?: string;
}

function getVariantImages(variant: VariantWithImages): string[] {
  if (variant.images?.length) return variant.images;
  if (variant.imageUrl) return [variant.imageUrl];
  return [];
}

// ── Variant mini-carousel on card ───────────────────────────
function VariantCardImage({
  variant,
  onOpenGallery,
}: {
  variant: VariantWithImages;
  onOpenGallery: () => void;
}) {
  const imgs = getVariantImages(variant);
  const [idx, setIdx] = React.useState(0);

  // Auto-advance if multiple images
  React.useEffect(() => {
    if (imgs.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  if (imgs.length === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800 flex items-center justify-center">
        <span className="text-7xl font-bold text-white/10 select-none">{variant.name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={imgs[idx]}
            alt={`${variant.name} ${idx + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots for multiple images */}
      {imgs.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={cn("rounded-full transition-all", i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40")}
            />
          ))}
        </div>
      )}

      {/* Gallery button */}
      {imgs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onOpenGallery(); }}
          className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs border border-white/20 hover:bg-black/60 transition-all"
        >
          <Images className="w-3 h-3" />
          {imgs.length}
        </button>
      )}
    </>
  );
}

// ── Gallery popup ────────────────────────────────────────────
function VariantGalleryModal({
  variant,
  onClose,
}: {
  variant: VariantWithImages;
  onClose: () => void;
}) {
  const imgs = getVariantImages(variant);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + imgs.length) % imgs.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % imgs.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [imgs.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden bg-navy-dark"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main image */}
        <div className="relative aspect-[4/3] w-full bg-gray-900">
          <Image src={imgs[idx]} alt={`${variant.name} ${idx + 1}`} fill className="object-contain" />

          {/* Navigation */}
          {imgs.length > 1 && (
            <>
              <button
                onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % imgs.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 rounded-full text-white text-xs">
            <ZoomIn className="w-3 h-3 inline mr-1" />
            {idx + 1} / {imgs.length}
          </div>
        </div>

        {/* Info bar */}
        <div className="p-5 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">{variant.name}</h3>
            {variant.description && <p className="text-white/60 text-sm mt-0.5">{variant.description}</p>}
          </div>
          <Link href="/contact" onClick={onClose}>
            <GlowButton icon={<ArrowRight className="w-4 h-4" />}>Demander un devis</GlowButton>
          </Link>
        </div>

        {/* Thumbnails */}
        {imgs.length > 1 && (
          <div className="flex gap-2 px-5 pb-5 overflow-x-auto">
            {imgs.map((img, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={cn("relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all", i === idx ? "border-cyan-400" : "border-transparent opacity-60 hover:opacity-100")}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ProductFamilyPage() {
  const params = useParams();
  const slug = params.family as string;

  const product = getProductFamilyBySlug(slug);

  if (!product) {
    notFound();
  }

  // Hero images: load from DB first, fallback to static
  const [heroImages, setHeroImages] = React.useState<string[]>(product.heroImages);
  const [heroIndex, setHeroIndex] = React.useState(0);

  // DB variants (may have imageUrl/images)
  const [dbVariants, setDbVariants] = React.useState<VariantWithImages[]>(product.variants);

  // DB specs and benefits (fallback to static)
  const [dbSpecs, setDbSpecs] = React.useState(product.specifications);
  const [dbBenefits, setDbBenefits] = React.useState(product.benefits);

  // Other families for "Découvrez aussi" carousel
  const [otherFamilies, setOtherFamilies] = React.useState<{ id: string; nom: string; slug: string; imageUrl?: string }[]>([]);

  // Gallery popup state
  const [galleryVariant, setGalleryVariant] = React.useState<VariantWithImages | null>(null);

  React.useEffect(() => {
    // Load hero images from DB
    fetch(`/api/product-families/images?familySlug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.images?.length) {
          setHeroImages(data.images.map((img: { imageUrl: string }) => img.imageUrl));
        }
      })
      .catch(() => {});

    // Load DB family (for variant images, specs, benefits)
    fetch(`/api/product-families?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.family) {
          const fam = data.family;

          // DB is authoritative for variants if explicitly set (even empty array)
          if (fam.variants !== null && fam.variants !== undefined) {
            const dbVars = fam.variants as VariantWithImages[];
            setDbVariants(
              dbVars.map((dbV) => {
                const staticV = product.variants.find((sv) => sv.id === dbV.id);
                return staticV ? { ...staticV, ...dbV } : dbV;
              })
            );
          }
          // If null/undefined → keep static variants (family not yet synced)

          // Use DB specs if available
          if (fam.specifications?.length) {
            setDbSpecs(fam.specifications as typeof product.specifications);
          }

          // Use DB benefits if available
          if (fam.benefits?.length) {
            setDbBenefits(fam.benefits as typeof product.benefits);
          }
        }
      })
      .catch(() => {});

    // Load other families for carousel
    fetch("/api/product-families")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.families) {
          setOtherFamilies(data.families.filter((f: { slug: string }) => f.slug !== slug));
        }
      })
      .catch(() => {});
  }, [slug]);

  // Auto-advance hero
  React.useEffect(() => {
    if (heroImages.length <= 1) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO — Pleine page avec image de fond
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[heroIndex]}
                alt={`${product.name} - AZ Construction`}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/88 via-navy-dark/65 to-navy-dark/25" />
        </div>

        {/* Atmospheric effects */}
        <MeshGradient variant="aurora" className="absolute inset-0 opacity-20 mix-blend-overlay" />
        <ParticleBackground count={12} />
        <GradientOrb color="cyan" size="xl" position={{ top: "10%", right: "-10%" }} blur="xl" opacity={0.1} />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/produits" className="hover:text-cyan-glow transition-colors">
                Produits
              </Link>
              <span>/</span>
              <span className="text-cyan-glow">{product.name}</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium tracking-wide uppercase">
                {product.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {product.name}{" "}
              <span className="text-gradient-premium">Sur Mesure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-white/70 mb-6 leading-relaxed"
            >
              {product.longDescription}
            </motion.p>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="glass-card px-4 py-2 text-white/90 text-sm font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* Info strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-4 inline-flex items-center gap-6 mb-8"
            >
              <div>
                <p className="text-white/50 text-xs mb-1">Assurance</p>
                <p className="text-base font-semibold text-cyan-glow">Décennale</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-white/50 text-xs mb-1">Livraison & pose</p>
                <p className="text-base font-semibold text-cyan-glow">Disponible</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-white/50 text-xs mb-1">Fabrication</p>
                <p className="text-base font-semibold text-cyan-glow">Française</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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

        {/* Carousel navigation */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === heroIndex ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase rotate-90 origin-center">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ============================================
          BENEFITS SECTION
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi choisir nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-corporate to-cyan-600">
                {product.name}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des ouvrages sur mesure, fabriqués en France avec des matériaux premium.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dbBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Shield;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" hover className="h-full text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-corporate" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          VARIANTS / MODELS — mini-hero cards avec carousel
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
              Nos Modèles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Choisissez votre style de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-corporate to-cyan-600">
                {product.nameSingular}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plusieurs modèles pour répondre à tous vos besoins et envies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dbVariants.map((variant, index) => (
              <motion.div
                key={variant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="h-full group overflow-hidden">
                  {/* Mini-hero image — object-contain pour voir l'image entière */}
                  <div
                    className="relative h-56 overflow-hidden bg-navy-dark cursor-pointer"
                    onClick={() => {
                      const imgs = getVariantImages(variant);
                      if (imgs.length > 0) setGalleryVariant(variant);
                    }}
                  >
                    <VariantCardImage
                      variant={variant}
                      onOpenGallery={() => setGalleryVariant(variant)}
                    />
                    {/* Bottom gradient for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                    {/* Badge "Sur devis" */}
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <span className="inline-flex items-center px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                        Sur devis
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-navy-dark group-hover:text-blue-corporate transition-colors mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-gray-500 mb-5 text-sm leading-relaxed">{variant.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(variant.features ?? []).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-glow/10 text-cyan-700 rounded-full text-xs font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/produits/${slug}/${variant.id}`} className="flex-1">
                        <Button
                          variant="secondary"
                          className="w-full group-hover:bg-blue-corporate group-hover:text-white transition-colors"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Découvrir
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="px-4">
                          Devis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SPECIFICATIONS SECTION
          ============================================ */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <MeshGradient variant="aurora" className="absolute inset-0 opacity-30" />
        <GradientOrb color="cyan" size="lg" position={{ top: "20%", right: "10%" }} blur="xl" opacity={0.1} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-glow font-semibold text-sm tracking-wider uppercase mb-4">
                Caractéristiques Techniques
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Spécifications de nos{" "}
                <span className="text-gradient-premium">{product.name}</span>
              </h2>
              <p className="text-white/70 mb-8">
                Des produits conçus et fabriqués selon les normes les plus exigeantes.
              </p>

              <div className="space-y-4">
                {dbSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-4 flex justify-between items-center"
                  >
                    <span className="text-white/70">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard variant="spotlight" padding="xl">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-glow/30">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Qualité Garantie</h3>
                  <p className="text-white/70 mb-6">
                    Tous nos {product.name.toLowerCase()} sont garantis 10 ans et fabriqués
                    dans notre atelier de 1800m² en Île-de-France.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass-card p-4 text-center">
                      <p className="text-3xl font-bold text-cyan-glow">1500+</p>
                      <p className="text-white/60 text-sm">Projets réalisés</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-3xl font-bold text-cyan-glow">4.9/5</p>
                      <p className="text-white/60 text-sm">Satisfaction client</p>
                    </div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <p className="text-white/60 text-sm mb-1">Garantie décennale incluse</p>
                    <p className="text-white font-semibold">Fabrication atelier 1800m² — Île-de-France</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-corporate to-navy-dark rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' fill='none' stroke='%2300d4ff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 48h garantie.
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

      {/* ============================================
          SEO — Disponible par département
          ============================================ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-dark mb-2">
            {product.name} par département
          </h2>
          <p className="text-gray-500 mb-8">
            Retrouvez nos {product.name.toLowerCase()} sur mesure dans votre département.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Paris (75)', slug: 'paris-75' },
              { name: 'Seine-et-Marne (77)', slug: 'seine-et-marne-77' },
              { name: 'Yvelines (78)', slug: 'yvelines-78' },
              { name: 'Essonne (91)', slug: 'essonne-91' },
              { name: 'Hauts-de-Seine (92)', slug: 'hauts-de-seine-92' },
              { name: 'Seine-Saint-Denis (93)', slug: 'seine-saint-denis-93' },
              { name: 'Val-de-Marne (94)', slug: 'val-de-marne-94' },
              { name: "Val-d'Oise (95)", slug: 'val-doise-95' },
              { name: 'Oise (60)', slug: 'oise-60' },
            ].map(dept => (
              <Link
                key={dept.slug}
                href={`/${slug}/${dept.slug}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-navy-dark group-hover:text-blue-corporate transition-colors">
                  {product.name} {dept.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          OTHER PRODUCTS — Carrousel familles
          ============================================ */}
      {otherFamilies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-navy-dark mb-3">Découvrez aussi</h2>
              <p className="text-gray-600">Nos autres familles de produits sur mesure.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {otherFamilies.slice(0, 8).map((fam, index) => (
                <motion.div
                  key={fam.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/produits/${fam.slug}`}>
                    <div className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer">
                      {fam.imageUrl ? (
                        <Image
                          src={fam.imageUrl}
                          alt={fam.nom}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-bold text-sm">{fam.nom}</p>
                        <p className="text-cyan-glow text-xs flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          Découvrir <ArrowRight className="w-3 h-3" />
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/produits">
                <Button variant="outline" size="lg" icon={<ArrowLeft className="w-5 h-5" />} iconPosition="left">
                  Voir tous nos produits
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Gallery popup */}
      <AnimatePresence>
        {galleryVariant && (
          <VariantGalleryModal
            variant={galleryVariant}
            onClose={() => setGalleryVariant(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
