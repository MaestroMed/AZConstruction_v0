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
  ChevronLeft,
  ChevronRight,
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
      "Oui, nous proposons des facilités de paiement pour vos projets. Contactez-nous pour connaître les solutions disponibles.",
  },
];

const COMPANY_FOUNDED_YEAR = 2018;
const yearsActive = new Date().getFullYear() - COMPANY_FOUNDED_YEAR;

const heroStats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: `${yearsActive}`, label: "Années d'expérience" },
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

  // CMS sections override (from backoffice)
  const [cmsData, setCmsData] = React.useState<Record<string, Record<string, unknown>>>({});

  React.useEffect(() => {
    fetch("/api/sections?page=particuliers")
      .then(r => r.json())
      .then(data => {
        if (data.success && data.sections?.length) {
          const map: Record<string, Record<string, unknown>> = {};
          data.sections.forEach((s: { sectionKey: string; content: Record<string, unknown> }) => {
            map[s.sectionKey] = s.content;
          });
          setCmsData(map);
        }
      })
      .catch(() => {});
  }, []);

  // Merge CMS data with hardcoded defaults
  const cmsServices = cmsData.services?.items as Array<Record<string, string>> | undefined;
  const activeServices = cmsServices?.length
    ? cmsServices.map((s, i) => ({
        icon: services[i]?.icon ?? Shield,
        title: s.title || services[i]?.title || "",
        description: s.description || services[i]?.description || "",
        features: (s.features || "").split("\n").filter(Boolean).length > 0
          ? (s.features || "").split("\n").filter(Boolean)
          : services[i]?.features || [],
        imageKey: services[i]?.imageKey || `product-${i}`,
        configLink: services[i]?.configLink || null,
        href: s.href || services[i]?.href,
        accent: services[i]?.accent || "from-cyan-glow to-blue-400",
      }))
    : services;

  const cmsFaqs = cmsData.faq?.items as Array<Record<string, string>> | undefined;
  const activeFaqs = cmsFaqs?.length
    ? cmsFaqs.map(f => ({ question: f.question, answer: f.answer }))
    : faqs;

  const cmsGuarantees = cmsData.guarantees?.items as Array<Record<string, string>> | undefined;
  const activeGuarantees = cmsGuarantees?.length
    ? cmsGuarantees.map((g, i) => ({
        icon: guarantees[i]?.icon ?? Shield,
        title: g.title || guarantees[i]?.title || "",
        description: g.description || guarantees[i]?.description || "",
      }))
    : guarantees;

  const cmsStats = cmsData.stats?.items as Array<Record<string, string>> | undefined;
  const activeStats = cmsStats?.length
    ? cmsStats.map(s => ({ number: s.value, label: s.label }))
    : heroStats;

  // Familles de produits pour le carrousel
  const [families, setFamilies] = React.useState<{ id: string; nom: string; slug: string; imageUrl?: string }[]>([]);
  const [carouselIdx, setCarouselIdx] = React.useState(0);

  // Images de hero par famille pour les sections services (carrousel)
  const [familyHeroImages, setFamilyHeroImages] = React.useState<Record<string, string[]>>({});
  const [svcImgIdx, setSvcImgIdx] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    // Load families for the top carousel
    fetch("/api/product-families")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.families?.length) {
          setFamilies(data.families);
        }
      })
      .catch(() => {});

    // Load hero images for each service's configLink
    const slugs = services
      .map((s) => s.configLink)
      .filter((slug): slug is string => !!slug);

    slugs.forEach((slug) => {
      fetch(`/api/product-families/images?familySlug=${slug}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.success && data.images?.length) {
            setFamilyHeroImages((prev) => ({
              ...prev,
              [slug]: data.images.map((img: { imageUrl: string }) => img.imageUrl),
            }));
          }
        })
        .catch(() => {});
    });
  }, []);

  const advanceSvcImg = (slug: string, total: number) => {
    setSvcImgIdx((prev) => ({ ...prev, [slug]: ((prev[slug] ?? 0) + 1) % total }));
  };
  const prevSvcImg = (slug: string, total: number) => {
    setSvcImgIdx((prev) => ({ ...prev, [slug]: ((prev[slug] ?? 0) - 1 + total) % total }));
  };

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
            {activeStats.map((stat, i) => (
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
      {activeServices.map((service, index) => (
        <section
          key={index}
          className="relative overflow-hidden bg-white"
        >
          <div className={`grid lg:grid-cols-2 min-h-[520px] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
            {/* Image full-height — carousel si images DB disponibles */}
            <div className="relative h-72 lg:h-auto min-h-[320px] group">
              {(() => {
                const slug = service.configLink;
                const heroImgs = (slug && familyHeroImages[slug]) || [];
                const allImgs = heroImgs.length > 0 ? heroImgs : [getImage(service.imageKey)];
                const idx = slug ? (svcImgIdx[slug] ?? 0) : 0;
                const currentImg = allImgs[idx % allImgs.length];
                return (
                  <>
                    <Image
                      src={currentImg}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 1 ? "r" : "l"} from-transparent to-white/30`} />
                    {/* Sur devis badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className={`px-5 py-2.5 bg-gradient-to-r ${service.accent} text-white text-sm font-bold rounded-full shadow-xl`}>
                        Sur devis
                      </span>
                    </div>
                    {/* Carousel controls — shown only when multiple images */}
                    {allImgs.length > 1 && slug && (
                      <>
                        <button
                          onClick={() => prevSvcImg(slug, allImgs.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => advanceSvcImg(slug, allImgs.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {allImgs.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setSvcImgIdx((prev) => ({ ...prev, [slug]: i }))}
                              className={`rounded-full transition-all ${i === idx % allImgs.length ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
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
          CARROUSEL FAMILLES DE PRODUITS
      ═══════════════════════════════════════════════════════ */}
      {families.length > 0 && (
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
                Nos produits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Toute la métallerie{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-corporate to-cyan-600">
                  sur mesure
                </span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                De la conception à la pose, nous fabriquons chaque pièce dans notre atelier en Île-de-France.
              </p>
            </motion.div>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: `-${carouselIdx * (100 / Math.min(families.length, 3))}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {families.map((family) => (
                    <Link
                      key={family.id}
                      href={`/produits/${family.slug}`}
                      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="relative h-64 bg-gradient-to-br from-navy-dark to-blue-corporate">
                          {family.imageUrl ? (
                            <Image src={family.imageUrl} alt={family.nom} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-6xl font-bold text-white/10">{family.nom.charAt(0)}</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="text-white font-bold text-lg mb-1">{family.nom}</h3>
                          <span className="inline-flex items-center gap-1 text-cyan-glow text-xs font-medium">
                            Découvrir <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
              {families.length > 3 && (
                <>
                  <button onClick={() => setCarouselIdx((i) => Math.max(0, i - 1))} disabled={carouselIdx === 0}
                    className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 disabled:opacity-30 transition-all z-10">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => setCarouselIdx((i) => Math.min(families.length - 3, i + 1))} disabled={carouselIdx >= families.length - 3}
                    className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 disabled:opacity-30 transition-all z-10">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              {families.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: Math.max(1, families.length - 2) }).map((_, i) => (
                    <button key={i} onClick={() => setCarouselIdx(i)}
                      className={`transition-all duration-300 rounded-full ${i === carouselIdx ? "w-8 h-2 bg-cyan-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`} />
                  ))}
                </div>
              )}
            </div>
            <div className="text-center mt-10">
              <Link href="/produits">
                <GlowButton icon={<ArrowRight className="w-4 h-4" />}>Voir tous nos produits</GlowButton>
              </Link>
            </div>
          </div>
        </section>
      )}

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
            {activeGuarantees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="dark" padding="none" className="h-full text-center">
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-5">
                      <item.icon className="w-7 h-7 text-cyan-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-dark mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
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
            {activeFaqs.map((faq, index) => (
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

    </div>
  );
}
