"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
  Eye,
  Phone,
} from "lucide-react";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";

/* ─────────────────────────────────────────────────
   VERSION B — "Le Catalogue"
   Blanc dominant, éditorial luxury residential.
   Inspiré Boffi / Armani Casa.
───────────────────────────────────────────────── */

const services = [
  {
    icon: Shield,
    title: "Garde-corps & Balustrades",
    description:
      "Protégez vos terrasses et balcons avec des garde-corps alliant sécurité maximale et design contemporain. Profilés Jansen pour une finition architecturale irréprochable.",
    features: ["Verre feuilleté", "Câbles acier", "Barreaux design", "Sur mesure"],
    price: "À partir de 290€/ml",
    imageKey: "product-garde-corps",
    configLink: "garde-corps",
  },
  {
    icon: Wrench,
    title: "Escaliers",
    description:
      "Des escaliers droits aux hélicoïdaux, nous réalisons l'escalier de vos rêves. Chaque marche est fabriquée dans notre atelier de Bruyères-sur-Oise.",
    features: ["Droits", "Quart-tournant", "Hélicoïdaux", "Extérieurs"],
    price: "À partir de 4 500€",
    imageKey: "product-escaliers",
    configLink: "escaliers",
  },
  {
    icon: Home,
    title: "Portes & Fenêtres Jansen",
    description:
      "Portes d'entrée et fenêtres en profilés acier Jansen. Design élégant, performances thermiques de haut niveau, durabilité exceptionnelle.",
    features: ["Portes design", "Fenêtres atelier", "Oscillo-battantes", "Coupe-feu"],
    price: "À partir de 890€",
    imageKey: "product-portes",
    configLink: "portes",
  },
  {
    icon: Palette,
    title: "Grilles de ventilation",
    description:
      "Grilles techniques et décoratives pour bâtiments résidentiels. Solutions caliboutis pour intégrations architecturales sur mesure.",
    features: ["Décoratives", "Techniques", "Caliboutis", "Sur mesure"],
    price: "À partir de 180€",
    imageKey: "product-grilles",
    configLink: "grilles-ventilation",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Rencontrons-nous pour définir votre projet." },
  { step: "02", title: "Devis gratuit", description: "Devis détaillé sous 48h avec plan technique." },
  { step: "03", title: "Fabrication", description: "Votre ouvrage fabriqué dans notre atelier 1 800m²." },
  { step: "04", title: "Installation", description: "Pose par nos équipes qualifiées avec le plus grand soin." },
];

const heroStats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "10 ans", label: "D'expérience" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "1 800m²", label: "D'atelier" },
];

const guarantees = [
  { icon: Award, title: "Qualité premium", description: "Matériaux sélectionnés, finitions irréprochables." },
  { icon: Shield, title: "Assurance décennale", description: "Tous vos travaux sont couverts." },
  { icon: Clock, title: "Délais respectés", description: "Engagement contractuel sur chaque projet." },
  { icon: Truck, title: "Pose incluse*", description: "Installation en Île-de-France par nos équipes." },
];

const faqs = [
  {
    question: "Intervenez-vous en dehors de l'Île-de-France ?",
    answer: "Oui, nous livrons dans toute la France. Pour la pose, nous intervenons principalement en Île-de-France et départements limitrophes.",
  },
  {
    question: "Combien de temps dure une installation ?",
    answer: "1-2 jours pour une porte, 2-3 jours pour des fenêtres, jusqu'à 1 semaine pour un escalier complexe.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, paiement en 3 fois sans frais pour les commandes supérieures à 1 500€.",
  },
];

export default function ParticuliersBPage() {
  const { getImage } = useSiteImages();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ─── BANDEAU PREVIEW ─── */}
      <div className="bg-amber-400 text-amber-900 text-center py-2 text-sm font-semibold sticky top-0 z-50">
        PRÉVISUALISATION — Version B "Le Catalogue" &nbsp;|&nbsp;
        <Link href="/particuliers" className="underline">Version A</Link> &nbsp;·&nbsp;
        <Link href="/particuliers-c" className="underline">Version C</Link>
      </div>

      {/* ─── HERO ÉDITORIAL ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-14">
        {/* Grande typo éditoriale gauche */}
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[85vh]">

            {/* Left — texte editorial */}
            <motion.div
              className="pr-0 lg:pr-16 flex flex-col justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gray-900" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                  Solutions Résidentielles
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.92] mb-8 tracking-tight">
                Votre<br />
                <span className="italic font-light text-blue-700">maison.</span><br />
                Votre<br />
                style.
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-md">
                Garde-corps, escaliers, portes — chaque ouvrage est une
                pièce unique conçue et fabriquée sur mesure dans notre atelier français.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/produits">
                  <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors">
                    Découvrir nos produits
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/realisations">
                  <button className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-700 transition-colors">
                    Voir les réalisations
                    <Eye className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Trust inline */}
              <div className="flex flex-wrap gap-6">
                {["Fabrication française", "Devis gratuit", "200+ couleurs RAL", "Depuis 2018"].map((b, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — image portrait avec cadre graphique */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Cadre décoratif décalé */}
              <div className="absolute -top-8 -right-8 w-[calc(100%-32px)] h-[calc(100%-32px)] border border-gray-200 pointer-events-none z-0" />
              <div className="relative h-[75vh] overflow-hidden">
                <Image
                  src={getImage("hero-particuliers")}
                  alt="Métallerie résidentielle premium"
                  fill
                  className="object-cover grayscale-[10%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
              {/* Badge prix flottant */}
              <div className="absolute bottom-8 -left-12 bg-white border border-gray-100 shadow-2xl p-6">
                <div className="text-3xl font-bold text-gray-900">290€</div>
                <div className="text-sm text-gray-500">/ml à partir de</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ─── STATS BANDE FULL-WIDTH ─── */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID MASONRY ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gray-900" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Nos services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nos solutions<br /><span className="italic font-light text-blue-700">pour votre maison</span>
            </h2>
          </motion.div>

          {/* Grid 2 colonnes → cartes photo pleine hauteur */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                style={{ height: index % 3 === 0 ? "480px" : "400px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Photo pleine hauteur */}
                <Image
                  src={getImage(service.imageKey)}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                {/* Contenu overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-3">
                        {service.features.slice(0, 2).join(" · ")}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/70 text-sm max-w-xs line-clamp-2">{service.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-white/60 text-xs mb-1">à partir de</div>
                      <div className="text-xl font-bold text-white">{service.price.replace("À partir de ", "")}</div>
                    </div>
                  </div>

                  {/* CTA hover reveal */}
                  <Link href={`/produits/${service.configLink}`}>
                    <div className="mt-4 flex items-center gap-2 text-white/0 group-hover:text-white transition-colors duration-300 text-sm font-semibold">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS HORIZONTAL ─── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-gray-900" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Notre processus</span>
          </div>

          <div className="grid md:grid-cols-4 gap-0 divide-x divide-gray-100">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="px-8 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-gray-100 mb-4 leading-none">{step.step}</div>
                <div className="w-8 h-px bg-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GARANTIES ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-500">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-3xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-gray-900" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">FAQ</span>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full py-6 text-left flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.p
                    className="pb-6 text-gray-500 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm text-blue-700 font-semibold hover:underline">
              Voir toutes les FAQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA SPLIT 2 COLONNES ─── */}
      <section className="grid md:grid-cols-2 min-h-[320px]">
        {/* Gauche — texte dark */}
        <div className="bg-gray-900 flex flex-col justify-center px-12 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à démarrer<br />votre projet ?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Devis gratuit sous 48h. Notre équipe est à votre écoute
            pour transformer votre habitat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/produits">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors">
                Démarrer mon projet <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Droite — navy avec bouton cyan */}
        <div className="bg-blue-900 flex flex-col justify-center px-12 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-6 h-6 text-cyan-400" />
            <span className="text-white/70 text-sm">Ligne directe</span>
          </div>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Préférez-vous nous parler directement ?<br />Notre équipe est disponible du lundi au vendredi.
          </p>
          <PhoneLink variant="button" className="justify-start" />
        </div>
      </section>
    </div>
  );
}
