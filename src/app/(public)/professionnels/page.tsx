"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Clock,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  Truck,
  HeadphonesIcon,
  Send,
  User,
  Building,
  Briefcase,
  MessageSquare,
  Loader2,
  Hammer,
  Ruler,
  Factory,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui/MeshGradient";
import { PhoneLink, usePhone } from "@/components/ui/PhoneLink";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import PartnersCarousel from "@/components/homepage/PartnersCarousel";
import { toast } from "sonner";

/* ─── Types ─── */
interface B2BCard {
  title: string;
  client: string;
  location: string;
  imageKey: string;
}

/* ─── Static data ─── */
const advantages = [
  {
    icon: Clock,
    title: "Délai 24/48h",
    description: "Commandes traitées en priorité avec délais de fabrication optimisés pour les professionnels.",
    stat: "48h",
    accent: "text-cyan-600",
  },
  {
    icon: FileText,
    title: "Devis rapide",
    description: "Devis détaillés avec plans techniques, descriptifs matériaux et délais de fabrication.",
    stat: "Gratuit",
    accent: "text-blue-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Interlocuteur dédié",
    description: "Un chargé de compte unique vous accompagne de A à Z, du devis à la livraison.",
    stat: "1:1",
    accent: "text-indigo-600",
  },
  {
    icon: Truck,
    title: "Livraison sur chantier",
    description: "Livraison directe en Île-de-France et régions limitrophes selon vos plannings.",
    stat: "IDF",
    accent: "text-cyan-600",
  },
];

const sectors = [
  { step: "01", name: "Entreprises générales", description: "Constructions neuves ou rénovations, nous accompagnons tous vos projets.", icon: Building },
  { step: "02", name: "Architectes & Bureaux d'études", description: "Collaborons sur vos projets ambitieux avec plans d'exécution sur mesure.", icon: Ruler },
  { step: "03", name: "Artisans du bâtiment", description: "Sous-traitance métallerie avec délais adaptés à vos contraintes chantier.", icon: Hammer },
  { step: "04", name: "Industriels", description: "Structures, passerelles et équipements industriels fabriqués en atelier.", icon: Factory },
];

const heroStats = [
  { value: "200+", label: "Partenaires actifs" },
  { value: "24h", label: "Réponse devis" },
  { value: "1 800m²", label: "D'atelier" },
  { value: "2018", label: "Depuis" },
];

const DEFAULT_CARDS: B2BCard[] = [
  { title: "Garde-corps collectif", client: "Promoteur IDF", location: "Île-de-France", imageKey: "realisation-b2b-1" },
  { title: "Escalier industriel", client: "Usine automobile", location: "Seine-et-Marne (77)", imageKey: "realisation-b2b-2" },
  { title: "Portails résidence", client: "Collectivité locale", location: "Val-d'Oise (95)", imageKey: "realisation-b2b-3" },
];

export default function ProfessionnelsPage() {
  usePhone();
  const { getImage } = useSiteImages();
  const [b2bCards, setB2bCards] = React.useState<B2BCard[]>(DEFAULT_CARDS);
  const [formData, setFormData] = React.useState({
    entreprise: "",
    nom: "",
    email: "",
    telephone: "",
    secteur: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [attachmentUrls, setAttachmentUrls] = React.useState<string[]>([]);
  const [attachmentNames, setAttachmentNames] = React.useState<string[]>([]);
  const [uploadingFiles, setUploadingFiles] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/b2b-cards")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.cards?.length) {
          setB2bCards(
            data.cards.map((card: Partial<B2BCard>, i: number) => ({
              ...DEFAULT_CARDS[i],
              ...card,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploadingFiles(true);
    try {
      const fd = new FormData();
      files.forEach((f) => fd.append("files", f));
      fd.append("folder", "contact-pro");
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.files?.length) {
        setAttachmentUrls((prev) => [...prev, ...data.files.map((f: { url: string }) => f.url)]);
        setAttachmentNames((prev) => [...prev, ...files.map((f) => f.name)]);
      }
    } catch {
      toast.error("Erreur lors de l'upload des fichiers");
    } finally {
      setUploadingFiles(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: `Demande Pro - ${formData.secteur}`,
          message: formData.message || `Demande de contact professionnel.\nSecteur: ${formData.secteur}`,
          type: "professionnel",
          entreprise: formData.entreprise,
          attachments: attachmentUrls,
        }),
      });
      if (!response.ok) throw new Error((await response.json()).error || "Erreur");
      toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");
      setFormData({ entreprise: "", nom: "", email: "", telephone: "", secteur: "", message: "" });
      setAttachmentUrls([]);
      setAttachmentNames([]);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ═══ HERO — Dark glassmorphism ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image from admin (hero-professionnels) */}
        <div className="absolute inset-0">
          <Image
            src={getImage("hero-professionnels")}
            alt="Métallerie pour professionnels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 via-navy-dark/60 to-navy-medium/50" />
        </div>
        <MeshGradient variant="animated" className="absolute inset-0 opacity-30 mix-blend-overlay" />
        <GradientOrb color="cyan" size="xl" position={{ top: "5%", right: "-10%" }} blur="xl" opacity={0.12} />
        <GradientOrb color="blue" size="lg" position={{ bottom: "10%", left: "-5%" }} blur="lg" opacity={0.08} />
        <ParticleBackground count={12} />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div
                className="inline-flex items-center gap-3 glass-card-glow px-5 py-2.5 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Building2 className="w-5 h-5 text-cyan-glow" />
                <span className="text-cyan-glow font-medium tracking-wide text-sm">ESPACE PROFESSIONNEL</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Votre partenaire{" "}
                <span className="text-gradient-cyan font-serif italic">métallerie</span>
              </h1>

              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
                Depuis <span className="text-cyan-glow font-semibold">2018</span>, AZ Construction accompagne les professionnels du bâtiment. Fabrication acier, verre et bois sur mesure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact-pro">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis Pro
                  </GlowButton>
                </a>
                <PhoneLink variant="button" className="justify-center" />
              </div>

              <div className="flex flex-wrap gap-4">
                {["Réactivité garantie", "Devis sous 48h", "Livraison chantier", "Interlocuteur dédié"].map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-2 text-white/40 text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {heroStats.map((stat, i) => (
                <motion.div key={i} className="glass-card p-8 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ AVANTAGES — Bento grid avec compteurs animés ═══ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full text-sm font-medium mb-6">
              Vos avantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi travailler avec{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">AZ Construction ?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Des avantages concrets pour simplifier vos projets et optimiser vos chantiers.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Grande carte — Délai */}
            <motion.div
              className="col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-t-3xl" />
              <div className="absolute -right-8 -bottom-8 text-[120px] font-bold text-cyan-50 leading-none select-none pointer-events-none">48h</div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">24/48h</div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">Délai de traitement</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Commandes traitées en priorité avec délais de fabrication optimisés pour les professionnels du bâtiment.
                </p>
              </div>
            </motion.div>

            {/* Petite carte — Devis */}
            <motion.div
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">Gratuit</div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">Devis rapide</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Plans techniques, descriptifs matériaux et délais inclus.</p>
            </motion.div>

            {/* Petite carte — Interlocuteur */}
            <motion.div
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <HeadphonesIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-1">1:1</div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">Interlocuteur dédié</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Un chargé de compte unique, du devis à la livraison.</p>
            </motion.div>

            {/* Petite carte — Livraison */}
            <motion.div
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Truck className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-1">IDF+</div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">Livraison chantier</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Livraison en Île-de-France et régions limitrophes.</p>
            </motion.div>

            {/* Grande carte — Stats */}
            <motion.div
              className="col-span-2 lg:col-span-3 bg-gradient-to-br from-navy-dark to-blue-corporate rounded-3xl p-8 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {[
                  { value: "200+", label: "Partenaires actifs", color: "text-cyan-glow" },
                  { value: "1 500+", label: "Projets réalisés", color: "text-white" },
                  { value: "2018", label: "En activité depuis", color: "text-cyan-glow" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-cyan-glow/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ILS NOUS FONT CONFIANCE — Logos partenaires (carousel) ═══ */}
      <section className="py-14 bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.p
            className="text-center text-white/40 text-xs font-bold tracking-widest uppercase mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ils nous font confiance
          </motion.p>
          <PartnersCarousel />
        </div>
      </section>

      {/* ═══ SECTEURS — Cards image avec overlay ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nous travaillons avec{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">tous les métiers</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Constructeur, architecte, artisan ou industriel — nous adaptons nos services à vos contraintes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                name: "Entreprises générales",
                description: "Constructions neuves ou rénovations, nous accompagnons tous vos projets de métallerie.",
                icon: Building,
                imageKey: "sector-btp",
                fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
              },
              {
                step: "02",
                name: "Architectes & Bureaux d'études",
                description: "Collaborons sur vos projets ambitieux avec plans d'exécution sur mesure.",
                icon: Ruler,
                imageKey: "sector-architecte",
                fallback: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
              },
              {
                step: "03",
                name: "Artisans du bâtiment",
                description: "Sous-traitance métallerie avec délais adaptés à vos contraintes chantier.",
                icon: Hammer,
                imageKey: "sector-artisan",
                fallback: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80",
              },
              {
                step: "04",
                name: "Industriels",
                description: "Structures, passerelles et équipements industriels fabriqués en atelier.",
                icon: Factory,
                imageKey: "sector-industrie",
                fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
              },
            ].map((sector, i) => {
              const imgSrc = getImage(sector.imageKey);
              const src = (imgSrc && !imgSrc.includes("via.placeholder.com") && !imgSrc.includes("placeholder"))
                ? imgSrc
                : sector.fallback;
              return (
                <motion.div
                  key={i}
                  className="relative h-64 rounded-2xl overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Background image */}
                  <Image
                    src={src}
                    alt={sector.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-navy-dark/20 group-hover:from-navy-dark/98 transition-colors duration-300" />
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-glow/20 border border-cyan-glow/30 mb-3">
                        <sector.icon className="w-4 h-4 text-cyan-glow" />
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 leading-snug">{sector.name}</h3>
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                      {sector.description}
                    </p>
                  </div>
                  {/* Step badge */}
                  <div className="absolute top-4 right-4 text-white/10 text-5xl font-bold leading-none select-none">
                    {sector.step}
                  </div>
                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-cyan-glow/30 transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ RÉALISATIONS B2B — Dark conservé ═══ */}
      <section className="py-24 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/50 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Réalisations{" "}
              <span className="text-gradient-cyan font-serif italic">professionnelles</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Quelques exemples de projets réalisés pour nos partenaires en Île-de-France et en France.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {b2bCards.map((card, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl"
                style={{ height: "420px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Image
                  src={getImage(card.imageKey)}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-glow/20 backdrop-blur-sm rounded-full text-cyan-glow text-xs font-bold mb-3">
                    <MapPin className="w-3 h-3" />
                    {card.location}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white/50 text-sm">{card.client}</p>
                </div>
                <div className="absolute inset-0 border border-cyan-glow/0 group-hover:border-cyan-glow/20 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/realisations">
              <GlowButton variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Voir toutes nos réalisations
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FORMULAIRE — Fond blanc propre ═══ */}
      <section id="contact-pro" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Espace Pro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Demande de devis professionnel
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Notre équipe commerciale vous recontacte sous 24h ouvrées.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise *</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="text" required value={formData.entreprise} onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Nom de votre entreprise" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom & Prénom *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="text" required value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Votre nom complet" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="pro@entreprise.fr" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="tel" required value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="06 12 34 56 78" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d&apos;activité *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select required value={formData.secteur} onChange={(e) => setFormData({ ...formData, secteur: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none">
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="constructeur">Constructeur de maisons</option>
                      <option value="architecte">Architecte / Bureau d&apos;études</option>
                      <option value="promoteur">Promoteur immobilier</option>
                      <option value="artisan">Artisan du bâtiment</option>
                      <option value="collectivite">Collectivité</option>
                      <option value="industriel">Industriel</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre projet</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                      placeholder="Type de produits, quantités estimées, délais souhaités..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pièces jointes (plans, photos, dossier)</label>
                  <input type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg"
                    onChange={handleFileChange}
                    disabled={uploadingFiles}
                    className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 disabled:opacity-60" />
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, XLS, JPG, PNG, DWG (max 10 Mo)</p>
                  {uploadingFiles && (
                    <p className="text-xs text-cyan-600 mt-1 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Upload en cours...
                    </p>
                  )}
                  {attachmentNames.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {attachmentNames.map((name, i) => (
                        <li key={i} className="text-xs text-green-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                  <p className="text-sm text-gray-500">* Champs obligatoires. Réponse garantie sous 24h ouvrées.</p>
                  <button type="submit" disabled={isSubmitting || uploadingFiles}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-navy-dark text-white text-sm font-semibold hover:bg-navy-medium transition-colors disabled:opacity-50 rounded-xl w-full sm:w-auto justify-center">
                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Envoi...</> : <><Send className="w-5 h-5" /> Envoyer ma demande</>}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact rapide */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Ligne directe commerciale</p>
                  <PhoneLink className="font-semibold text-navy-dark" showIcon={false} />
                </div>
              </div>
              <a href="mailto:contact@azconstruction.fr"
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email professionnel</p>
                  <p className="font-semibold text-navy-dark">contact@azconstruction.fr</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA COMPTE PRO — masqué (phase 2) ═══ */}
      {false && (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous souhaitez créer un compte Pro ?
            </h2>
            <p className="text-white/50 mb-8">
              Suivez vos commandes, téléchargez vos factures et gérez vos projets depuis votre espace dédié.
            </p>
            <Link href="/inscription-pro">
              <GlowButton variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                Créer mon compte Pro
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
