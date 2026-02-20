"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Shield,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Truck,
  ChevronDown,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { ParticleBackground, GradientOrb } from "@/components/ui/MeshGradient";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";

/* ─────────────────────────────────────────────────
   VERSION C — "Le Parcours"
   Immersif, scroll-driven, one-page narrative.
   Inspiré Apple / grandes marques.
───────────────────────────────────────────────── */

const services = [
  {
    icon: Shield,
    title: "Garde-corps & Balustrades",
    tagline: "La sécurité réinventée.",
    description:
      "Protégez vos terrasses et balcons avec des garde-corps alliant sécurité maximale et design contemporain. Profilés Jansen pour une finition architecturale irréprochable.",
    features: ["Verre feuilleté", "Câbles acier", "Barreaux design", "Sur mesure"],
    price: "À partir de 290€/ml",
    imageKey: "product-garde-corps",
    configLink: "garde-corps",
    color: "from-cyan-900 to-navy-dark",
  },
  {
    icon: Wrench,
    title: "Escaliers",
    tagline: "Montez en beauté.",
    description:
      "Des escaliers droits aux hélicoïdaux, nous réalisons l'escalier de vos rêves. Chaque marche est fabriquée dans notre atelier de Bruyères-sur-Oise.",
    features: ["Droits", "Quart-tournant", "Hélicoïdaux", "Extérieurs"],
    price: "À partir de 4 500€",
    imageKey: "product-escaliers",
    configLink: "escaliers",
    color: "from-blue-900 to-navy-dark",
  },
  {
    icon: Home,
    title: "Portes & Fenêtres Jansen",
    tagline: "L'entrée qui fait la différence.",
    description:
      "Portes d'entrée et fenêtres en profilés acier Jansen. Design élégant, performances thermiques de haut niveau, durabilité exceptionnelle.",
    features: ["Portes design", "Fenêtres atelier", "Oscillo-battantes", "Coupe-feu"],
    price: "À partir de 890€",
    imageKey: "product-portes",
    configLink: "portes",
    color: "from-navy-medium to-navy-dark",
  },
  {
    icon: Palette,
    title: "Grilles de ventilation",
    tagline: "L'invisible, magnifié.",
    description:
      "Grilles techniques et décoratives pour bâtiments résidentiels. Solutions caillebotis pour intégrations architecturales sur mesure.",
    features: ["Décoratives", "Techniques", "Caillebotis", "Sur mesure"],
    price: "À partir de 180€",
    imageKey: "product-grilles",
    configLink: "grilles-ventilation",
    color: "from-slate-800 to-navy-dark",
  },
];

const keyFigures = [
  { value: 1500, suffix: "+", label: "Projets réalisés", description: "Depuis 2018" },
  { value: 10, suffix: " ans", label: "D'expérience", description: "En métallerie sur mesure" },
  { value: 98, suffix: "%", label: "Clients satisfaits", description: "Score de recommandation" },
  { value: 1800, suffix: "m²", label: "D'atelier", description: "À Bruyères-sur-Oise" },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    icon: Sparkles,
    short: "Découverte de votre projet",
    detail: "Nous prenons le temps de comprendre vos besoins, votre style et votre budget. Un rendez-vous sur site est proposé pour évaluer les contraintes techniques.",
  },
  {
    step: "02",
    title: "Devis gratuit",
    icon: Clock,
    short: "Plan technique et tarif sous 48h",
    detail: "Vous recevez un devis détaillé avec plan technique, descriptif des matériaux et délais de fabrication. Tout est transparent, rien n'est caché.",
  },
  {
    step: "03",
    title: "Fabrication",
    icon: Wrench,
    short: "Votre ouvrage prend forme",
    detail: "Dans notre atelier de 1 800m² à Bruyères-sur-Oise, nos artisans fabriquent chaque pièce à la main. Acier, verre, bois — tout est assemblé avec précision.",
  },
  {
    step: "04",
    title: "Installation",
    icon: Truck,
    short: "Pose par nos équipes qualifiées",
    detail: "Nos équipes interviennent sur votre chantier avec le matériel adapté. La pose est soignée, le nettoyage est inclus. Vous n'avez plus qu'à profiter.",
  },
];

const faqs = [
  {
    question: "Intervenez-vous en dehors de l'Île-de-France ?",
    answer: "Oui, nous livrons dans toute la France. Pour la pose, nous intervenons principalement en Île-de-France et départements limitrophes. Contactez-nous pour connaître nos conditions.",
  },
  {
    question: "Combien de temps dure une installation ?",
    answer: "La durée varie selon le projet : 1-2 jours pour une porte, 2-3 jours pour des fenêtres, jusqu'à 1 semaine pour un escalier complexe.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, nous proposons un paiement en 3 fois sans frais pour les commandes supérieures à 1 500€. D'autres solutions sont disponibles sur demande.",
  },
];

/* Composant compteur animé au scroll */
function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* Section service sticky scroll */
function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const { getImage } = useSiteImages();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image fond avec parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={getImage(service.imageKey)}
          alt={service.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Overlay dark gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-85`} />

      {/* Contenu */}
      <div className="container mx-auto px-8 relative z-10">
        <div className={`max-w-2xl ${index % 2 === 0 ? "ml-0" : "ml-auto"}`}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">
              {String(index + 1).padStart(2, "0")} / {services.length}
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
              {service.title}
            </h2>
            <p className="text-2xl text-cyan-300 font-light italic mb-8">{service.tagline}</p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{service.description}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {service.features.map((f, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {f}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-white/50 text-xs mb-1">À partir de</div>
                <div className="text-2xl font-bold text-white">{service.price.replace("À partir de ", "")}</div>
              </div>
              <Link href={`/produits/${service.configLink}`}>
                <GlowButton icon={<ArrowRight className="w-4 h-4" />}>
                  Découvrir
                </GlowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Stepper process interactif */
function InteractiveStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-0">
        {processSteps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <div key={index} className="border-b border-white/10 last:border-0">
              <button
                className="w-full py-6 text-left flex items-center gap-6 group"
                onClick={() => setActiveStep(isActive ? -1 : index)}
              >
                <span className="text-sm font-bold text-cyan-400 w-8 flex-shrink-0">{step.step}</span>
                <step.icon className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-bold text-white text-lg">{step.title}</div>
                  {!isActive && <div className="text-white/40 text-sm mt-1">{step.short}</div>}
                </div>
                {isActive ? (
                  <Minus className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                )}
              </button>
              {isActive && (
                <motion.div
                  className="pl-20 pb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/60 leading-relaxed">{step.detail}</p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ParticuliersCPage() {
  return (
    <div className="min-h-screen bg-navy-dark">

      {/* ─── BANDEAU PREVIEW ─── */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold sticky top-0 z-50">
        PRÉVISUALISATION — Version C "Le Parcours" &nbsp;|&nbsp;
        <Link href="/particuliers" className="underline">Version A</Link> &nbsp;·&nbsp;
        <Link href="/particuliers-b" className="underline">Version B</Link>
      </div>

      {/* ─── HERO PLEIN ÉCRAN IMMERSIF ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground count={20} />
        <GradientOrb color="cyan" size="xl" position={{ top: "10%", left: "20%" }} opacity={0.1} animate />
        <GradientOrb color="blue" size="lg" position={{ bottom: "15%", right: "15%" }} opacity={0.08} />

        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/80 to-navy-dark" />

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Home className="w-4 h-4" />
            Solutions pour particuliers
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.0] tracking-tight">
            Votre maison.<br />
            <span className="text-gradient-cyan font-serif italic">Votre style.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto">
            Une expérience unique du sur-mesure. Du premier contact à la dernière vis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <GlowButton size="xl" icon={<ArrowRight className="w-5 h-5" />}>
              Commencer votre projet
            </GlowButton>
            <GlowButton variant="outline" size="xl" icon={<ChevronDown className="w-5 h-5" />}>
              Découvrir
            </GlowButton>
          </div>

          {/* Badges trust */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Fabrication française", "Devis gratuit", "200+ couleurs RAL", "Depuis 2018"].map((b, i) => (
              <span key={i} className="flex items-center gap-2 text-white/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase">Faites défiler</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ─── SERVICES — Sections scroll immersives ─── */}
      {services.map((service, index) => (
        <ServiceSection key={index} service={service} index={index} />
      ))}

      {/* ─── CHIFFRES CLÉS ANIMÉS ─── */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Les chiffres qui<br />
              <span className="text-gradient-cyan font-serif italic">parlent pour nous</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {keyFigures.map((fig, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedNumber value={fig.value} suffix={fig.suffix} />
                </div>
                <div className="text-cyan-400 font-semibold mb-1">{fig.label}</div>
                <div className="text-white/30 text-sm">{fig.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALERIE VIGNETTES ─── */}
      <section className="py-20 bg-navy-dark overflow-hidden">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/40 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Nos réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Une galerie qui <span className="text-gradient-cyan font-serif italic">inspire</span>
            </h2>
          </motion.div>

          {/* Grid de vignettes avec animation stagger */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "product-garde-corps", "product-escaliers", "product-portes",
              "product-grilles", "product-portails", "product-marquises",
            ].map((key, i) => {
              const { getImage } = useSiteImages();
              return (
                <motion.div
                  key={i}
                  className="relative aspect-square overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <Image
                    src={getImage(key)}
                    alt={key}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-dark/30 hover:bg-navy-dark/0 transition-colors" />
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/realisations">
              <GlowButton variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Voir toutes les réalisations
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GARANTIES ─── */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Qualité garantie", desc: "Matériaux premium sélectionnés avec soin." },
              { icon: Shield, title: "Assurance décennale", desc: "Tous vos travaux sont couverts." },
              { icon: Clock, title: "Délais respectés", desc: "Engagement contractuel sur chaque projet." },
              { icon: Truck, title: "Pose incluse*", desc: "Installation en Île-de-France." },
            ].map((g, i) => (
              <motion.div
                key={i}
                className="border border-white/10 p-8 hover:border-cyan-glow/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <g.icon className="w-8 h-8 text-cyan-glow mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                <p className="text-white/40 text-sm">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS STEPPER INTERACTIF ─── */}
      <section className="py-24 bg-navy-dark">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/40 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              De l&apos;idée à la <span className="text-gradient-cyan font-serif italic">réalisation</span>
            </h2>
          </motion.div>

          <InteractiveStepper />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-8 max-w-3xl">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const [open, setOpen] = React.useState(false);
              return (
                <motion.div
                  key={i}
                  className="border border-white/10 hover:border-cyan-glow/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    {open ? (
                      <Minus className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/40 flex-shrink-0" />
                    )}
                  </button>
                  {open && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <GlowButton variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Voir toutes les FAQ
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-900" />
        <ParticleBackground count={25} />
        <GradientOrb color="cyan" size="xl" position={{ top: "-20%", left: "10%" }} opacity={0.15} animate />
        <GradientOrb color="blue" size="xl" position={{ bottom: "-20%", right: "10%" }} opacity={0.1} />

        <div className="relative z-10 container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-10">
              <Sparkles className="w-4 h-4" />
              Votre projet commence ici
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Prêt à transformer<br />
              <span className="text-gradient-cyan font-serif italic">votre habitat ?</span>
            </h2>

            <p className="text-white/40 text-xl max-w-xl mx-auto mb-12">
              Devis gratuit sous 48h. Nos équipes sont à votre écoute pour faire de votre projet une réalité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/produits">
                <GlowButton size="xl" icon={<ArrowRight className="w-5 h-5" />}>
                  Démarrer mon projet
                </GlowButton>
              </Link>
              <PhoneLink variant="button" className="justify-center" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
