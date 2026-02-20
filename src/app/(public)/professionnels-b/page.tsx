"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Plus,
  Minus,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { PhoneLink, usePhone } from "@/components/ui/PhoneLink";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { toast } from "sonner";
import SteelSceneClient from "./SteelSceneClient";

/* ─── Types ─── */
interface B2BCard { title: string; client: string; location: string; imageKey: string; }

/* ─── Data ─── */
const advantages = [
  { icon: Clock, title: "Délai 24/48h", description: "Commandes traitées en priorité. Délais de fabrication optimisés pour les professionnels du bâtiment.", stat: "48h" },
  { icon: FileText, title: "Devis rapide", description: "Plans techniques, descriptifs matériaux et délais inclus. Gratuitement, sous 48h.", stat: "0€" },
  { icon: HeadphonesIcon, title: "Interlocuteur dédié", description: "Un chargé de compte unique, du devis à la livraison. Pas de standard, pas d'attente.", stat: "1:1" },
  { icon: Truck, title: "Livraison chantier", description: "Directement sur vos chantiers IDF et régions limitrophes, selon vos planning.", stat: "IDF" },
];

const sectors = [
  { step: "01", name: "Entreprises générales", detail: "Constructions neuves ou rénovations — nous accompagnons vos projets les plus exigeants avec réactivité et précision. Habituels des marchés publics et privés.", icon: Building },
  { step: "02", name: "Architectes & Bureaux d'études", detail: "Collaboration étroite sur plans d'exécution, tolérances strictes et finitions premium. Nous prenons vos DWG et les fabriquons à la lettre.", icon: Ruler },
  { step: "03", name: "Artisans du bâtiment", detail: "Sous-traitance métallerie avec délais adaptés à vos contraintes chantier. Paiement à la livraison, remise partenaires disponible.", icon: Hammer },
  { step: "04", name: "Industriels", detail: "Structures, passerelles, garde-corps industriels et équipements sur mesure. Petites ou grandes séries, fabriqués dans notre atelier 1 800m².", icon: Factory },
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

/* ─── Marquee ─── */
const MARQUEE_TEXT = ["Votre projet", "Notre acier", "Sur mesure", "Île-de-France", "Depuis 2018", "Fabrication atelier", "Votre projet"];
function Marquee() {
  return (
    <div className="overflow-hidden py-6 bg-black border-y border-white/5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -2400] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT].map((t, i) => (
          <span key={i} className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className={i % 2 === 0 ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"}>
              {t}
            </span>
            <span className="text-cyan-glow/30 mx-8">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Accordion sector ─── */
function SectorItem({ sector, isOpen, onToggle }: { sector: typeof sectors[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between gap-6 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-cyan-glow/50 tracking-[0.3em] w-8">{sector.step}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-glow transition-colors">
            {sector.name}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-glow/50 transition-colors">
          {isOpen ? <Minus className="w-4 h-4 text-cyan-glow" /> : <Plus className="w-4 h-4 text-white/60" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <sector.icon className="w-6 h-6 text-cyan-glow" />
              </div>
              <p className="text-white/55 leading-relaxed max-w-xl">{sector.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main page ─── */
export default function ProfessionnelsBPage() {
  usePhone();
  const { getImage } = useSiteImages();
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [b2bCards, setB2bCards] = React.useState<B2BCard[]>(DEFAULT_CARDS);
  const [openSector, setOpenSector] = React.useState<number | null>(null);
  const [formData, setFormData] = React.useState({ entreprise: "", nom: "", email: "", telephone: "", secteur: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  React.useEffect(() => {
    fetch("/api/b2b-cards").then(r => r.json()).then(data => {
      if (data.success && data.cards?.length) {
        setB2bCards(data.cards.map((c: Partial<B2BCard>, i: number) => ({ ...DEFAULT_CARDS[i], ...c })));
      }
    }).catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: formData.nom, email: formData.email, telephone: formData.telephone, sujet: `Demande Pro B - ${formData.secteur}`, message: formData.message || `Demande pro`, type: "professionnel", entreprise: formData.entreprise }),
      });
      if (!res.ok) throw new Error();
      toast.success("Demande envoyée !");
      setFormData({ entreprise: "", nom: "", email: "", telephone: "", secteur: "", message: "" });
    } catch {
      toast.error("Erreur — appelez-nous directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      {/* ─── PREVIEW BANNER ─── */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold sticky top-0 z-[60]">
        PRÉVISUALISATION — Version B "Acier Vivant" &nbsp;|&nbsp;
        <Link href="/professionnels" className="underline">Version A (actuelle)</Link>
      </div>

      {/* ═══════════════════════════════════════════════════════
          HERO — Three.js Steel Scene full screen
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Three.js canvas */}
        <SteelSceneClient className="absolute inset-0 z-0" />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

        {/* Grid overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,212,255,1) 60px, rgba(0,212,255,1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,212,255,1) 60px, rgba(0,212,255,1) 61px)`,
        }} />

        {/* Hero text */}
        <motion.div
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-glow/30 bg-cyan-glow/5 backdrop-blur-sm rounded-full text-cyan-glow text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Building2 className="w-4 h-4" />
            ESPACE PROFESSIONNEL — AZ CONSTRUCTION
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Votre partenaire
            <br />
            <span className="text-gradient-cyan font-serif italic">métallerie</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/50 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Depuis 2018, AZ Construction fabrique l&apos;acier des professionnels du bâtiment.
            1 800m² d&apos;atelier, 0 sous-traitance, 200+ partenaires actifs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#contact-pro-b">
              <GlowButton size="xl" icon={<ArrowRight className="w-5 h-5" />}>
                Demander un devis Pro
              </GlowButton>
            </a>
            <PhoneLink variant="button" className="justify-center" />
          </motion.div>

          {/* Stats inline */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {heroStats.map((s, i) => (
              <div key={i} className="text-center border border-white/10 rounded-xl py-4 px-2 backdrop-blur-sm bg-white/5">
                <div className="text-2xl font-bold text-cyan-glow">{s.value}</div>
                <div className="text-white/40 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee />

      {/* ═══ AVANTAGES — Fond blanc cassé, bordure left accent ═══ */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Vos avantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Pourquoi AZ Construction ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-200">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                className="px-8 first:pl-0 last:pr-0 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Animated left accent line */}
                <div className="w-0.5 h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 mb-6" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{adv.stat}</div>
                <div className="w-8 h-px bg-gray-300 mb-4" />
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <adv.icon className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTEURS — Fond quasi-noir, accordion ═══ */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/30">Secteurs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tous les métiers<br />
              <span className="text-gradient-cyan font-serif italic">du bâtiment</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            {sectors.map((sector, i) => (
              <SectorItem
                key={i}
                sector={sector}
                isOpen={openSector === i}
                onToggle={() => setOpenSector(openSector === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RÉALISATIONS B2B — Cartes pleine hauteur crossfade ═══ */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex items-end justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 block mb-3">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Réalisations<br />
                <span className="text-gradient-cyan font-serif italic">professionnelles</span>
              </h2>
            </div>
            <Link href="/realisations">
              <GlowButton variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Tout voir
              </GlowButton>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {b2bCards.map((card, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ height: "480px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Base image */}
                <Image
                  src={getImage(card.imageKey)}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-100 hover:scale-105"
                />
                {/* Hover crossfade overlay */}
                <AnimatePresence>
                  {hoveredCard === i && (
                    <motion.div
                      className="absolute inset-0 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={getImage(DEFAULT_CARDS[(i + 1) % 3].imageKey)}
                        alt="hover"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Always-visible gradient + text */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-30 p-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-glow/20 backdrop-blur-sm rounded-full text-cyan-glow text-xs font-bold mb-3">
                    <MapPin className="w-3 h-3" />
                    {card.location}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white/50 text-sm">{card.client}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULAIRE — Editorial split ═══ */}
      <section id="contact-pro-b" className="bg-white">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          {/* Left — typographie éditoriale */}
          <div className="flex flex-col justify-center px-12 py-20 md:px-16 bg-gray-900">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-cyan-glow" />
              <span className="text-cyan-glow text-xs font-bold tracking-[0.3em] uppercase">Espace Pro</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Demande de devis<br />
              <span className="font-serif italic text-gradient-cyan">professionnel</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 max-w-sm">
              Notre équipe commerciale analyse votre demande et vous recontacte sous 24h ouvrées avec un devis détaillé.
            </p>
            <div className="space-y-4">
              {["Devis technique sous 48h", "Interlocuteur dédié", "Livraison sur chantier", "Remise partenaires disponible"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <Phone className="w-5 h-5 text-cyan-glow" />
                <PhoneLink className="text-white font-semibold text-sm" showIcon={false} />
              </div>
              <a href="mailto:contact@azconstruction.fr" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-glow/30 transition-colors">
                <Mail className="w-5 h-5 text-cyan-glow" />
                <span className="text-white text-sm font-semibold">Email Pro</span>
              </a>
            </div>
          </div>

          {/* Right — formulaire compact */}
          <div className="flex flex-col justify-center px-10 py-16 md:px-14">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Entreprise *</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" required value={formData.entreprise} onChange={e => setFormData({...formData, entreprise: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent" placeholder="Votre entreprise" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent" placeholder="Nom & Prénom" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent" placeholder="pro@entreprise.fr" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Téléphone *</label>
                <input type="tel" required value={formData.telephone} onChange={e => setFormData({...formData, telephone: e.target.value})}
                  className="w-full py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent" placeholder="06 12 34 56 78" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Secteur</label>
                <select value={formData.secteur} onChange={e => setFormData({...formData, secteur: e.target.value})}
                  className="w-full py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent appearance-none">
                  <option value="">Sélectionnez...</option>
                  <option value="constructeur">Constructeur</option>
                  <option value="architecte">Architecte / BE</option>
                  <option value="promoteur">Promoteur</option>
                  <option value="artisan">Artisan</option>
                  <option value="collectivite">Collectivité</option>
                  <option value="industriel">Industriel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Projet</label>
                <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full py-3 border-b-2 border-gray-200 focus:border-navy-dark outline-none transition-colors text-sm bg-transparent resize-none"
                  placeholder="Décrivez votre projet (type, quantité, délais...)" />
              </div>
              <div className="pt-4">
                <button type="submit" disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white font-bold tracking-wide hover:bg-gray-900 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Envoi...</> : <><Send className="w-5 h-5" /> Envoyer ma demande</>}
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Réponse garantie sous 24h ouvrées.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE FINAL ═══ */}
      <Marquee />
    </div>
  );
}
