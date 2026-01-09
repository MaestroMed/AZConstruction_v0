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
  ChevronLeft,
  ChevronRight,
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
  Play,
  Pause,
} from "lucide-react";
import { GlowButton, GlassCard, MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { getProductFamilyBySlug, type ProductFamily } from "@/lib/data/product-families";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

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

// Hero Carousel Component
function HeroCarousel({ images, productName }: { images: string[]; productName: string }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [direction, setDirection] = React.useState(0);

  // Auto-advance carousel
  React.useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-cyan-glow w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="ml-2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label={isAutoPlaying ? "Pause" : "Lecture"}
          >
            {isAutoPlaying ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductFamilyPage() {
  const params = useParams();
  const slug = params.family as string;
  const { getImage } = useSiteImages();

  const product = getProductFamilyBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get hero images from back-office or use defaults
  const heroImages = product.heroImages;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO SECTION - Carrousel Immersif
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy-dark">
          <MeshGradient variant="aurora" className="absolute inset-0 opacity-50" />
          <ParticleBackground count={15} />
        </div>

        {/* Gradient Orbs */}
        <GradientOrb
          color="cyan"
          size="xl"
          position={{ top: "10%", right: "-10%" }}
          blur="xl"
          opacity={0.15}
        />
        <GradientOrb
          color="blue"
          size="lg"
          position={{ bottom: "20%", left: "-5%" }}
          blur="lg"
          opacity={0.1}
        />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {product.name}{" "}
                <span className="text-gradient-premium">Sur Mesure</span>
              </h1>

              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="glass-card px-4 py-2 text-white/90 text-sm font-medium flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                    {feature}
                  </motion.span>
                ))}
              </div>

              {/* Info badges */}
              <div className="glass-card p-4 inline-flex items-center gap-4 mb-8">
                <div>
                  <p className="text-white/60 text-sm">Assurance</p>
                  <p className="text-lg font-semibold text-cyan-glow">Décennale</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-white/60 text-sm">Livraison & pose</p>
                  <p className="text-lg font-semibold text-cyan-glow">Disponible</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis gratuit
                  </GlowButton>
                </Link>
                <PhoneLink
                  variant="button"
                  className="w-full sm:w-auto"
                />
              </div>
            </motion.div>

            {/* Right Content - Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-glow/10 ring-1 ring-white/10">
                <HeroCarousel images={heroImages} productName={product.name} />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-card-light p-4 flex items-center gap-3 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-navy-dark text-sm">Fabrication Française</p>
                  <p className="text-xs text-gray-500">Atelier 1800m² en IDF</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
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
            {product.benefits.map((benefit, index) => {
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
                      <h3 className="text-lg font-bold text-navy-dark mb-2">
                        {benefit.title}
                      </h3>
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
          VARIANTS / MODELS SECTION
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
            {product.variants.map((variant, index) => (
              <motion.div
                key={variant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="h-full group">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-navy-dark group-hover:text-blue-corporate transition-colors">
                        {variant.name}
                      </h3>
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Sur devis
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-6">{variant.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {variant.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-glow/10 text-cyan-700 rounded-full text-xs font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button
                        variant="secondary"
                        className="w-full group-hover:bg-blue-corporate group-hover:text-white transition-colors"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Demander un devis
                      </Button>
                    </Link>
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
        <GradientOrb
          color="cyan"
          size="lg"
          position={{ top: "20%", right: "10%" }}
          blur="xl"
          opacity={0.1}
        />

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
                {product.specifications.map((spec, index) => (
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
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Qualité Garantie
                  </h3>
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
                  <Link href="/contact">
                    <GlowButton icon={<ArrowRight className="w-4 h-4" />} className="w-full">
                      Demander un devis gratuit
                    </GlowButton>
                  </Link>
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
                Contactez-nous pour un devis gratuit et personnalisé. 
                Réponse sous 48h garantie.
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
          OTHER PRODUCTS
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Découvrez aussi
            </h2>
            <p className="text-gray-600">
              Nos autres familles de produits sur mesure.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Link href="/produits">
              <Button
                variant="outline"
                size="lg"
                icon={<ArrowLeft className="w-5 h-5" />}
                iconPosition="left"
              >
                Voir tous nos produits
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


