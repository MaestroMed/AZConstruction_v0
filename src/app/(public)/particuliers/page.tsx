"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
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
  Eye,
  Layers,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui/MeshGradient";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";

const services = [
  {
    icon: Shield,
    title: "Garde-corps & Balustrades",
    description:
      "Protégez vos terrasses, balcons et escaliers avec des garde-corps alliant sécurité maximale et design contemporain. Profilés Jansen pour une finition architecturale irréprochable.",
    features: ["Verre feuilleté", "Câbles acier", "Barreaux design", "Sur mesure"],
    price: "À partir de 290€/ml",
    imageKey: "product-garde-corps",
    configLink: "garde-corps",
    accent: "from-cyan-glow to-blue-400",
  },
  {
    icon: Wrench,
    title: "Escaliers",
    description:
      "Des escaliers droits aux hélicoïdaux, nous réalisons l'escalier de vos rêves. Chaque marche, chaque limon est fabriqué dans notre atelier de Bruyères-sur-Oise.",
    features: ["Droits", "Quart-tournant", "Hélicoïdaux", "Extérieurs"],
    price: "À partir de 4 500€",
    imageKey: "product-escaliers",
    configLink: "escaliers",
    accent: "from-blue-400 to-blue-corporate",
  },
  {
    icon: Home,
    title: "Portes & Fenêtres Jansen",
    description:
      "Portes d'entrée et fenêtres en profilés acier Jansen. Design élégant, performances thermiques de haut niveau, durabilité exceptionnelle sur le long terme.",
    features: ["Portes design", "Fenêtres atelier", "Oscillo-battantes", "Coupe-feu"],
    price: "À partir de 890€",
    imageKey: "product-portes",
    configLink: "portes",
    accent: "from-blue-corporate to-navy-medium",
  },
  {
    icon: Palette,
    title: "Grilles de ventilation",
    description:
      "Grilles de ventilation techniques et décoratives pour bâtiments résidentiels. Solutions sur mesure esthétiques incluant les grilles caillebotis pour intégrations architecturales.",
    features: ["Décoratives", "Techniques", "Caillebotis", "Sur mesure"],
    price: "À partir de 180€",
    imageKey: "product-grilles",
    configLink: "grilles-ventilation",
    accent: "from-navy-medium to-cyan-glow",
  },
  {
    icon: Layers,
    title: "Pliage sur mesure",
    description:
      "Pliage de tôles et profilés acier réalisé dans notre atelier de Bruyères-sur-Oise. Pièces unitaires ou petites séries, tolérances précises, finition thermolaquage disponible.",
    features: ["Tôle acier & alu", "Pliage CNC", "Finition thermolaquage", "Petites séries"],
    price: "Sur devis",
    imageKey: "page-atelier",
    configLink: null,
    href: "/contact",
    accent: "from-slate-600 to-navy-dark",
  },
];

const guarantees = [
  {
    icon: Award,
    title: "Qualité garantie",
    description: "Tous nos ouvrages sont fabriqués avec des matériaux premium sélectionnés.",
  },
  {
    icon: Shield,
    title: "Assurance décennale",
    description: "Travaux couverts par notre assurance décennale professionnelle.",
  },
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Engagement contractuel sur les délais de fabrication et de pose.",
  },
  {
    icon: Truck,
    title: "Pose incluse*",
    description: "Installation par nos équipes qualifiées en Île-de-France.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Découvrez nos produits et discutons de votre projet sur mesure lors d'un rendez-vous dédié.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Devis gratuit",
    description: "Recevez votre devis détaillé sous 48h avec plan technique et visualisation.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Votre ouvrage est fabriqué dans notre atelier de 1 800m² à Bruyères-sur-Oise.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Installation",
    description: "Nos équipes installent votre réalisation avec le plus grand soin et précision.",
    icon: Truck,
  },
];

const faqs = [
  {
    question: "Intervenez-vous en dehors de l'Île-de-France ?",
    answer:
      "Oui, nous livrons dans toute la France. Pour la pose, nous intervenons principalement en Île-de-France et départements limitrophes. Contactez-nous pour connaître nos conditions.",
  },
  {
    question: "Combien de temps dure une installation ?",
    answer:
      "La durée varie selon le projet : 1-2 jours pour une porte, 2-3 jours pour des fenêtres, jusqu'à 1 semaine pour un escalier complexe.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, nous proposons un paiement en 3 fois sans frais pour les commandes supérieures à 1 500€. D'autres solutions sont disponibles sur demande.",
  },
];

const heroStats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "10", label: "Années d'expérience" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "1 800m²", label: "D'atelier" },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        className="w-full text-left glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-glow/30 transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-cyan-glow flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
        {open && (
          <p className="text-white/60 text-sm mt-4 leading-relaxed">{faq.answer}</p>
        )}
      </button>
    </motion.div>
  );
}

function ProcessStep({ item, index, total }: { item: typeof processSteps[0]; index: number; total: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-px overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-glow/60 to-cyan-glow/10"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      )}

      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Step number circle */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-navy-medium border border-cyan-glow/30 flex items-center justify-center relative z-10">
            <item.icon className="w-7 h-7 text-cyan-glow" />
          </div>
          <span className="absolute -top-4 -right-4 text-6xl font-bold text-white/5 pointer-events-none select-none leading-none">
            {item.step}
          </span>
        </div>

        <div className="inline-block px-3 py-1 bg-cyan-glow/10 rounded-full text-cyan-glow text-xs font-bold mb-3 tracking-widest">
          {item.step}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
}

export default function ParticuliersPage() {
  const { getImage } = useSiteImages();

  return (
    <div className="min-h-screen bg-navy-dark">

      {/* ═══════════════════════════════════════════════════════
          HERO — Dark premium avec overlay sombre
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src={getImage("hero-particuliers")}
            alt="Métallerie pour particuliers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/75 via-navy-dark/55 to-navy-medium/40" />
        </div>

        {/* Decorative orbs */}
        <GradientOrb color="cyan" size="lg" position={{ top: "10%", right: "5%" }} opacity={0.12} animate />
        <GradientOrb color="blue" size="md" position={{ bottom: "20%", left: "5%" }} opacity={0.1} />

        {/* Particle background */}
        <ParticleBackground count={15} />

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-glow/15 border border-cyan-glow/30 text-cyan-glow rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Home className="w-4 h-4" />
              Solutions pour particuliers
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Donnez du{" "}
              <span className="font-serif italic text-gradient-cyan">caractère</span>
              <br />à votre maison
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ouvrages métalliques sur mesure. Qualité artisanale française,
              design contemporain, finitions irréprochables.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/produits">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Découvrir nos produits
                </GlowButton>
              </Link>
              <Link href="/realisations">
                <GlowButton variant="outline" size="lg" icon={<Eye className="w-5 h-5" />}>
                  Voir nos réalisations
                </GlowButton>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {["Fabrication française", "Depuis 2018", "Devis gratuit", "200+ couleurs RAL"].map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats glassmorphism */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-cyan-glow mb-1">{stat.number}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES — Sections pleine largeur, fond blanc partout
      ═══════════════════════════════════════════════════════ */}
      {services.map((service, index) => (
        <section
          key={index}
          className="relative overflow-hidden bg-white"
        >
          <div className={`grid lg:grid-cols-2 min-h-[520px] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
            {/* Image full-height */}
            <div className="relative h-72 lg:h-auto min-h-[320px]">
              <Image
                src={getImage(service.imageKey)}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 1 ? "r" : "l"} from-transparent to-white/30`} />
              {/* Price badge */}
              <div className="absolute bottom-6 left-6">
                <span className={`px-5 py-2.5 bg-gradient-to-r ${service.accent} text-white text-sm font-bold rounded-full shadow-xl`}>
                  {service.price}
                </span>
              </div>
            </div>

            {/* Content — toujours fond blanc */}
            <motion.div
              className="flex flex-col justify-center px-10 py-16 md:px-16 bg-white"
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Icon + numéro */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, rgba(0,212,255,0.15), rgba(30,90,160,0.2))` }}
                >
                  <service.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-corporate/60">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-dark">
                {service.title}
              </h2>
              <p className="leading-relaxed mb-8 text-gray-600">
                {service.description}
              </p>

              {/* Features pills claires */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-dark">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <Link href={"href" in service && service.href ? service.href : `/produits/${service.configLink}`}>
                  <GlowButton
                    variant="outline"
                    className="border-navy-dark/30 text-navy-dark hover:bg-navy-dark/5"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {"href" in service && service.href ? "Nous contacter" : "Découvrir"}
                  </GlowButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════════
          AVANTAGES — Glassmorphism sur aurora gradient
      ═══════════════════════════════════════════════════════ */}
      <MeshGradient variant="aurora" className="py-24">
        <GradientOrb color="cyan" size="xl" position={{ top: "-10%", right: "-5%" }} opacity={0.08} />
        <GradientOrb color="blue" size="lg" position={{ bottom: "-10%", left: "-5%" }} opacity={0.1} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Nos engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi choisir AZ Construction ?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Des garanties concrètes pour vous accompagner sereinement dans votre projet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="glow" padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mx-auto mb-5 ring-1 ring-cyan-glow/20">
                    <item.icon className="w-7 h-7 text-cyan-glow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </MeshGradient>

      {/* ═══════════════════════════════════════════════════════
          PROCESS — Timeline horizontale épurée
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-medium relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,212,255,0.3) 80px, rgba(0,212,255,0.3) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(0,212,255,0.3) 80px, rgba(0,212,255,0.3) 81px)`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/60 rounded-full text-sm font-medium mb-6 tracking-widest uppercase">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              De l&apos;idée à la{" "}
              <span className="text-gradient-cyan font-serif italic">réalisation</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Un processus simple et transparent, de la conception à l&apos;installation.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            {processSteps.map((item, index) => (
              <ProcessStep key={index} item={item} index={index} total={processSteps.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ — Dark card style
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Toutes les réponses à vos questions avant de vous lancer.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
            <div className="text-center pt-6">
              <Link href="/faq">
                <GlowButton variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                  Voir toutes les FAQ
                </GlowButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL — Full-width dark avec particles
      ═══════════════════════════════════════════════════════ */}
      <MeshGradient variant="animated" className="py-32 relative overflow-hidden">
        <ParticleBackground count={20} />
        <GradientOrb color="cyan" size="xl" position={{ top: "-20%", left: "10%" }} opacity={0.12} animate />
        <GradientOrb color="blue" size="lg" position={{ bottom: "-10%", right: "10%" }} opacity={0.1} />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Votre projet commence ici
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à transformer{" "}
              <span className="font-serif italic text-gradient-cyan">votre habitat ?</span>
            </h2>

            <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Configurez votre projet en quelques clics et recevez un devis
              gratuit sous 48h. Notre équipe est à votre écoute.
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
      </MeshGradient>
    </div>
  );
}
