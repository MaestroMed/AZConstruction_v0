"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Droplets,
  Palette,
  Factory,
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
  Zap,
  ThermometerSun,
  Sparkles,
  BadgeCheck,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Flame,
  Layers,
  Eye,
  Leaf,
} from "lucide-react";
import {
  GlassCard,
  GlassCardIcon,
  GlassCardTitle,
  GlassCardDescription,
  GlowButton,
  MeshGradient,
  ParticleBackground,
  GradientOrb,
  BentoGrid,
  BentoCard,
  Timeline,
  TimelineStep,
  AnimatedCounter,
} from "@/components/ui";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

// Données RAL populaires
const popularColors = [
  { name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42" },
  { name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A" },
  { name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7" },
  { name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7" },
  { name: "RAL 3004", label: "Rouge Bordeaux", hex: "#6B1C23" },
  { name: "RAL 5003", label: "Bleu Saphir", hex: "#1E3A5F" },
  { name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243" },
  { name: "RAL 1015", label: "Ivoire Clair", hex: "#E6D2B5" },
  { name: "RAL 2004", label: "Orange Pur", hex: "#E75B12" },
  { name: "RAL 8017", label: "Brun Chocolat", hex: "#442F29" },
  { name: "RAL 1021", label: "Jaune Colza", hex: "#EEC900" },
  { name: "RAL 4005", label: "Lilas Bleu", hex: "#6C4675" },
];

const advantages = [
  {
    icon: Shield,
    title: "Protection 25+ ans",
    description: "Résistance exceptionnelle à la corrosion, aux UV et aux intempéries. La finition la plus durable du marché.",
    size: "large" as const,
    highlight: true,
  },
  {
    icon: Palette,
    title: "200+ Teintes RAL",
    description: "Mat, satiné, brillant, texturé ou métallisé. Toutes les finitions disponibles.",
    size: "default" as const,
  },
  {
    icon: ThermometerSun,
    title: "Cuisson 200°C",
    description: "Polymérisation haute température pour une dureté incomparable.",
    size: "default" as const,
  },
  {
    icon: Leaf,
    title: "100% Écologique",
    description: "Zéro COV, zéro solvant. Procédé respectueux de l'environnement.",
    size: "wide" as const,
  },
  {
    icon: Zap,
    title: "Express 48h",
    description: "Service urgent disponible pour vos projets pressants.",
    size: "default" as const,
  },
  {
    icon: Factory,
    title: "Cabine 7m",
    description: "Four XXL pour grandes séries et pièces hors-normes.",
    size: "default" as const,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Préparation",
    description: "Dégraissage, sablage ou grenaillage pour une surface parfaitement propre. C'est la clé d'une adhérence optimale et d'une finition durable.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    step: 2,
    title: "Application",
    description: "Projection électrostatique de la poudre epoxy-polyester. Épaisseur contrôlée entre 60 et 120 microns pour une protection maximale.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    step: 3,
    title: "Cuisson",
    description: "Polymérisation au four à 180-200°C pendant 15-20 minutes. La poudre fusionne en un film protecteur ultra-résistant.",
    icon: <Flame className="w-5 h-5" />,
  },
  {
    step: 4,
    title: "Contrôle Qualité",
    description: "Vérification de l'épaisseur, de l'adhérence et de l'aspect. Chaque pièce est inspectée avant livraison.",
    icon: <Eye className="w-5 h-5" />,
  },
];

const applications = [
  "Portes & fenêtres acier",
  "Garde-corps & rampes",
  "Escaliers métalliques",
  "Grilles de ventilation",
  "Mobilier urbain",
  "Structures industrielles",
  "Pièces automobiles",
  "Équipements agricoles",
];

// Services spécialisés thermolaquage
const specializedServices = [
  {
    title: "Rénovation Voiture",
    description: "Capots, ailes, pare-chocs et pièces de carrosserie.",
    href: "/services/thermolaquage/renovation-voiture",
    icon: "🚗",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Jantes",
    description: "Rénovation et personnalisation de vos jantes.",
    href: "/services/thermolaquage/jantes",
    icon: "🔘",
    gradient: "from-gray-500/20 to-zinc-500/20",
  },
  {
    title: "Moto Art",
    description: "Carcasses de moto et sculptures métalliques.",
    href: "/services/thermolaquage/moto-art",
    icon: "🏍️",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Pièces Métalliques",
    description: "Portails, garde-corps, mobilier et structures.",
    href: "/services/thermolaquage/pieces-metalliques",
    icon: "🔧",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

// FAQ SEO optimisée
const faqItems = [
  {
    question: "Qu'est-ce que le thermolaquage ?",
    answer:
      "Le thermolaquage est un procédé de peinture industrielle par poudre époxy-polyester. La poudre est appliquée électrostatiquement sur le métal, puis polymérisée au four à 180-200°C pendant 15-20 minutes. Ce procédé crée un film protecteur ultra-résistant, offrant une protection supérieure à la peinture liquide traditionnelle.",
  },
  {
    question: "Combien coûte le thermolaquage au m² ?",
    answer:
      "Le prix du thermolaquage varie selon la complexité des pièces, la quantité et la couleur choisie. Comptez en moyenne 15 à 40€/m² pour des pièces standards. Pour un devis précis adapté à votre projet, contactez-nous gratuitement. Nous vous répondons sous 24h.",
  },
  {
    question: "Quelle est la durée de vie du thermolaquage ?",
    answer:
      "Le thermolaquage offre une durée de vie exceptionnelle de 25 ans et plus, bien supérieure à la peinture liquide (5-10 ans). Ce procédé assure une résistance optimale contre l'écaillage et la décoloration.",
  },
  {
    question: "Thermolaquage ou peinture liquide : que choisir ?",
    answer:
      "Le thermolaquage surpasse la peinture liquide sur tous les critères : résistance aux UV, à la corrosion et aux chocs (5x supérieure), durabilité (25+ ans vs 5-10 ans), aspect uniforme sans coulures, et procédé 100% écologique sans solvants. C'est le choix professionnel pour une finition durable.",
  },
  {
    question: "Quels métaux peuvent être thermolaqués ?",
    answer:
      "Le thermolaquage convient à tous les métaux ferreux et non-ferreux : acier, fer, fonte, aluminium, zinc, inox. Chaque métal nécessite une préparation adaptée (dégraissage, sablage, grenaillage) pour garantir une adhérence optimale de la poudre.",
  },
  {
    question: "Quel est le délai de traitement ?",
    answer:
      "Le délai standard est de 5 à 7 jours ouvrés selon la quantité et la complexité des pièces. Pour les urgences, nous proposons un service express en 48-72h. Enlèvement et livraison disponibles sur toute la région.",
  },
];

// Composant FAQ Accordion
function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200/50 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy-dark pr-8 group-hover:text-cyan-700 transition-colors text-lg">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 mt-1 ${
            isOpen ? "rotate-180 text-cyan-glow" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

// Hero Stats Component
function HeroStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        <AnimatedCounter value={value} suffix={suffix} duration={2.5} />
      </div>
      <p className="text-white/60 text-sm">{label}</p>
    </motion.div>
  );
}

export default function ThermolaquagePage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);
  const [selectedColor, setSelectedColor] = React.useState(popularColors[0]);
  const { getImage } = useSiteImages();
  const heroImage = getImage("hero-thermolaquage");

  // Parallax effect for hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ============================================
          HERO SECTION - Full Impact
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Mesh Gradient Background */}
        <MeshGradient variant="animated" className="absolute inset-0" />
        
        {/* Gradient Orbs for depth */}
        <GradientOrb
          color="cyan"
          size="xl"
          position={{ top: "10%", right: "-10%" }}
          blur="xl"
          opacity={0.2}
          animate
        />
        <GradientOrb
          color="blue"
          size="lg"
          position={{ bottom: "20%", left: "-5%" }}
          blur="lg"
          opacity={0.15}
        />
        
        {/* Particles */}
        <ParticleBackground count={15} />
        
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src={heroImage}
            alt="Thermolaquage Professionnel - AZ Construction"
            fill
            priority
            className="object-cover object-center opacity-20"
            quality={85}
          />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium tracking-wide">
                SERVICE PROFESSIONNEL
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Thermolaquage{" "}
              <span className="text-gradient-premium">
                Poudre Epoxy
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Protection et finition <span className="text-cyan-glow font-semibold">haut de gamme</span> pour 
              tous vos ouvrages métalliques. <span className="text-white font-medium">200+ teintes RAL</span>, 
              résistance maximale.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto mb-12"
            >
              <HeroStat value={25} suffix="+" label="Années durabilité" delay={0.4} />
              <HeroStat value={200} suffix="+" label="Couleurs RAL" delay={0.5} />
              <HeroStat value={48} suffix="h" label="Délai express" delay={0.6} />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Demander un devis gratuit
                </GlowButton>
              </Link>
              <a href="tel:+33494000000">
                <GlowButton
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                  glow={false}
                >
                  04 94 XX XX XX
                </GlowButton>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-cyan-glow rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          AVANTAGES - Bento Grid
          ============================================ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
              La finition qui fait la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                différence
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Une qualité industrielle supérieure pour tous types de métaux,
              alliant esthétique et protection longue durée.
            </p>
          </motion.div>

          <BentoGrid>
            {advantages.map((advantage, index) => (
              <BentoCard
                key={advantage.title}
                icon={<advantage.icon className="w-7 h-7" />}
                title={advantage.title}
                description={advantage.description}
                size={advantage.size}
                highlight={advantage.highlight}
                index={index}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ============================================
          SERVICES SPÉCIALISÉS
          ============================================ */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <MeshGradient variant="subtle" className="absolute inset-0" />
        <ParticleBackground count={8} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-glow font-semibold text-sm tracking-wider uppercase mb-4">
              Nos expertises
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services Spécialisés
            </h2>
            <p className="text-white/70 text-lg">
              Des solutions adaptées à chaque usage, pour particuliers et professionnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <GlassCard
                    variant="spotlight"
                    padding="lg"
                    className="h-full group cursor-pointer"
                  >
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    
                    <GlassCardTitle className="group-hover:text-cyan-glow transition-colors">
                      {service.title}
                    </GlassCardTitle>
                    <GlassCardDescription className="mt-2">
                      {service.description}
                    </GlassCardDescription>

                    <div className="mt-6 flex items-center gap-2 text-cyan-glow text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Découvrir</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESSUS - Timeline Interactive
          ============================================ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
              Notre processus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
              4 étapes vers la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                perfection
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Un procédé rigoureux pour une qualité irréprochable,
              du dégraissage à la livraison.
            </p>
          </motion.div>

          <Timeline>
            {processSteps.map((step, index) => (
              <TimelineStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                position={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            ))}
          </Timeline>
        </div>
      </section>

      {/* ============================================
          PALETTE COULEURS RAL - Interactive
          ============================================ */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <MeshGradient variant="aurora" className="absolute inset-0" />
        
        <GradientOrb
          color="cyan"
          size="lg"
          position={{ top: "20%", left: "10%" }}
          blur="xl"
          opacity={0.1}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-glow font-semibold text-sm tracking-wider uppercase mb-4">
              Personnalisation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              200+ Couleurs RAL
            </h2>
            <p className="text-white/70 text-lg">
              Du classique au plus audacieux, trouvez la teinte parfaite.
              Finitions mat, satiné, brillant ou texturé.
            </p>
          </motion.div>

          {/* Color Preview */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="glow" padding="xl" className="text-center">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Color swatch large */}
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-2xl ring-4 ring-white/10"
                  style={{ backgroundColor: selectedColor.hex }}
                  animate={{ backgroundColor: selectedColor.hex }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="text-left">
                  <p className="text-cyan-glow text-sm font-medium mb-1">
                    {selectedColor.name}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedColor.label}
                  </h3>
                  <p className="text-white/60">
                    Code hex: {selectedColor.hex}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Color Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-12">
            {popularColors.map((color, index) => (
              <motion.button
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setSelectedColor(color)}
                className={`aspect-square rounded-xl shadow-lg transition-all duration-300 hover:scale-110 relative group ${
                  selectedColor.name === color.name
                    ? "ring-3 ring-cyan-glow scale-110"
                    : "ring-1 ring-white/10"
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  {color.name}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/50 mb-6">
              + 200 autres teintes disponibles sur demande
            </p>
            <Link href="/contact">
              <GlowButton variant="outline" glow={false}>
                Demander le nuancier complet
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          APPLICATIONS
          ============================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
                Domaines d'application
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
                Tous métaux,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  toutes pièces
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Le thermolaquage convient à tous les métaux ferreux et non-ferreux :
                acier, aluminium, inox, fonte, zinc...
              </p>

              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{app}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image placeholder with glassmorphism overlay */}
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/5 to-cyan-500/5" />
                <div className="text-center text-gray-400 p-8 relative z-10">
                  <Factory className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Image atelier thermolaquage</p>
                </div>
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 glass-card-light p-6 max-w-xs shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <BadgeCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark text-lg">Qualité Pro</p>
                    <p className="text-sm text-gray-500">Finition haut de gamme</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ Section
          ============================================ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 glass-card-light px-5 py-2.5 mb-6">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 text-sm font-medium">
                  Questions fréquentes
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
                Tout savoir sur le{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  thermolaquage
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="glass-card-light p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL - Aurora Effect
          ============================================ */}
      <section className="py-24 relative overflow-hidden">
        <MeshGradient variant="aurora" className="absolute inset-0" />
        
        {/* Particles */}
        <ParticleBackground count={12} />
        
        {/* Gradient orbs */}
        <GradientOrb
          color="cyan"
          size="xl"
          position={{ top: "-20%", right: "-10%" }}
          blur="xl"
          opacity={0.2}
        />
        <GradientOrb
          color="blue"
          size="lg"
          position={{ bottom: "-10%", left: "20%" }}
          blur="lg"
          opacity={0.15}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <GlassCard variant="glow" padding="xl" className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Prêt à protéger vos ouvrages ?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                  Demandez votre devis gratuit dès maintenant.
                  Réponse sous 24h, enlèvement et livraison sur toute la région.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link href="/contact">
                    <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                      Demander un devis gratuit
                    </GlowButton>
                  </Link>
                  <a href="tel:+33494000000">
                    <GlowButton
                      variant="outline"
                      size="lg"
                      icon={<Phone className="w-5 h-5" />}
                      iconPosition="left"
                      glow={false}
                    >
                      04 94 XX XX XX
                    </GlowButton>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Devis sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Traitement express 48h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Qualité professionnelle</span>
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
