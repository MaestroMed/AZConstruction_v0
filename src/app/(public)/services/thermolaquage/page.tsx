"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
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
];

const advantages = [
  {
    icon: Shield,
    title: "Protection Maximale",
    description: "Résistance exceptionnelle à la corrosion, aux UV et aux intempéries. Durée de vie 25+ ans.",
  },
  {
    icon: Palette,
    title: "200+ Couleurs RAL",
    description: "Toutes les teintes RAL disponibles : mat, satiné, brillant, texturé, métallisé.",
  },
  {
    icon: ThermometerSun,
    title: "Cuisson à 200°C",
    description: "Polymérisation haute température pour une adhérence et une dureté incomparables.",
  },
  {
    icon: Droplets,
    title: "Zéro COV",
    description: "Procédé 100% écologique sans solvants, sans émissions nocives pour l'environnement.",
  },
  {
    icon: Zap,
    title: "Délais Express",
    description: "Traitement en 48-72h pour les urgences. Planning flexible selon vos besoins.",
  },
  {
    icon: Factory,
    title: "Capacité Industrielle",
    description: "Cabine de 7m, four de cuisson XXL. Grandes séries et pièces hors-normes.",
  },
];

const process = [
  {
    step: 1,
    title: "Préparation",
    description: "Dégraissage, sablage ou grenaillage pour une surface parfaitement propre et adhérente.",
  },
  {
    step: 2,
    title: "Application",
    description: "Projection électrostatique de la poudre epoxy-polyester. Épaisseur contrôlée 60-120 microns.",
  },
  {
    step: 3,
    title: "Cuisson",
    description: "Polymérisation au four à 180-200°C pendant 15-20 minutes. La poudre fusionne en film protecteur.",
  },
  {
    step: 4,
    title: "Contrôle",
    description: "Vérification épaisseur, adhérence, aspect. Chaque pièce est inspectée avant livraison.",
  },
];

const applications = [
  "Portes & fenêtres",
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
  },
  {
    title: "Jantes",
    description: "Rénovation et personnalisation de vos jantes.",
    href: "/services/thermolaquage/jantes",
    icon: "🔘",
  },
  {
    title: "Moto Art",
    description: "Carcasses de moto et sculptures métalliques artistiques.",
    href: "/services/thermolaquage/moto-art",
    icon: "🏍️",
  },
  {
    title: "Pièces Métalliques",
    description: "Portails, garde-corps, mobilier et structures.",
    href: "/services/thermolaquage/pieces-metalliques",
    icon: "🔧",
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
      "Le délai standard est de 5 à 7 jours ouvrés selon la quantité et la complexité des pièces. Pour les urgences, nous proposons un service express en 48-72h. Enlèvement et livraison disponibles sur toute l'Île-de-France.",
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
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy-dark pr-8 group-hover:text-blue-corporate transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180 text-cyan-glow" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function ThermolaquagePage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);
  const { getImage } = useSiteImages();
  
  // Image dynamique depuis le back-office
  const heroImage = getImage("hero-thermolaquage");
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background avec overlay */}
        <div className="absolute inset-0">
          {/* Image dynamique */}
          <Image
            src={heroImage}
            alt="Thermolaquage - AZ Construction"
            fill
            priority
            className="object-cover object-center"
            quality={85}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/60" />
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-glow/20 backdrop-blur-sm border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">
                  Service Professionnel
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Thermolaquage{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                  Poudre Epoxy
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Protection et finition haut de gamme pour tous vos ouvrages métalliques.
                Plus de <strong className="text-cyan-glow">200 teintes RAL</strong>, 
                résistance maximale aux intempéries et 
                <strong className="text-cyan-glow">durabilité exceptionnelle</strong>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-1">25+</div>
                  <div className="text-sm text-white/60">Années de durabilité</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-1">200+</div>
                  <div className="text-sm text-white/60">Couleurs RAL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-1">48h</div>
                  <div className="text-sm text-white/60">Délai express</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale w-full sm:w-auto"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                    icon={<Phone className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    01 23 45 67 89
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi Choisir le Thermolaquage ?
            </h2>
            <p className="text-gray-600 text-lg">
              Une finition industrielle de qualité supérieure, alliant esthétique 
              et protection longue durée pour tous types de métaux.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mb-6">
                      <advantage.icon className="w-7 h-7 text-blue-corporate" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Spécialisés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nos Services Spécialisés
            </h2>
            <p className="text-gray-600 text-lg">
              Des solutions adaptées à chaque usage, pour particuliers et professionnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card variant="elevated" hover className="h-full group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-navy-dark mb-2 group-hover:text-cyan-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                      <div className="mt-4 text-cyan-700 text-sm font-medium flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        En savoir plus
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Notre Processus en 4 Étapes
            </h2>
            <p className="text-gray-600 text-lg">
              Un procédé rigoureux pour une qualité irréprochable, 
              du dégraissage à la livraison.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-glow to-blue-corporate/30" />
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg text-center">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-glow to-blue-corporate flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-cyan-glow/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Palette de Couleurs RAL
            </h2>
            <p className="text-white/70 text-lg">
              Du classique au plus audacieux, trouvez la teinte parfaite 
              pour vos projets. Finitions mat, satiné ou brillant.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
            {popularColors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="aspect-square rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-medium">{color.name}</span>
                  </div>
                </div>
                <p className="text-white/80 text-xs text-center font-medium">
                  {color.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-6">
              + de 200 autres teintes disponibles sur demande
            </p>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-cyan-glow/50 text-cyan-glow hover:bg-cyan-glow/10"
              >
                Demander un nuancier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
                Applications
              </h2>
              <p className="text-gray-600 text-lg mb-8">
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
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
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
              {/* Placeholder for image */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center text-gray-400 p-8">
                  <Factory className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Image atelier thermolaquage</p>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark">Qualité Pro</p>
                    <p className="text-sm text-gray-500">Finition haut de gamme</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-glow/10 border border-cyan-glow/20 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-700 text-sm font-medium">
                  Questions fréquentes
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Tout Savoir sur le Thermolaquage
              </h2>
              <p className="text-gray-600 text-lg">
                Les réponses à vos questions les plus courantes sur notre service
                de peinture poudre epoxy.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
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

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-500 mb-4">
                Vous avez d'autres questions ?
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-corporate text-blue-corporate">
                  Contactez-nous
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à Protéger Vos Ouvrages ?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Contactez-nous pour un devis gratuit sous 24h.
                Enlèvement et livraison sur toute la région.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis gratuit
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    icon={<Phone className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    01 23 45 67 89
                  </Button>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
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
          </div>
        </div>
      </section>
    </div>
  );
}

