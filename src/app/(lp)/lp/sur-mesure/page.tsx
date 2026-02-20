"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Wrench,
  Award,
  Shield,
  ChevronDown,
  Loader2,
  Send,
  MapPin,
  Palette,
  Home,
  Fence,
  Grid3X3,
  Umbrella,
} from "lucide-react";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { toast } from "sonner";

/* ─── Data ─── */

const products = [
  { icon: Shield, name: "Garde-corps", description: "Verre, câbles, barreaux", imageKey: "product-garde-corps" },
  { icon: Wrench, name: "Escaliers", description: "Droits, hélicoïdaux", imageKey: "product-escaliers" },
  { icon: Fence, name: "Portails", description: "Coulissants, battants", imageKey: "product-portails" },
  { icon: Home, name: "Portes & Fenêtres", description: "Profilés Jansen", imageKey: "product-portes" },
  { icon: Grid3X3, name: "Grilles ventilation", description: "Caliboutis, techniques", imageKey: "product-grilles" },
  { icon: Umbrella, name: "Marquises", description: "Verre & acier", imageKey: "product-marquises" },
];

const differentiators = [
  {
    icon: MapPin,
    title: "Fabriqué dans notre atelier",
    description: "1 800m² à Bruyères-sur-Oise. Aucune sous-traitance. Chaque pièce sort de nos mains.",
  },
  {
    icon: Palette,
    title: "200+ couleurs disponibles",
    description: "Thermolaquage sur place en 200+ teintes RAL. Mat, satiné, brillant — selon votre projet.",
  },
  {
    icon: Wrench,
    title: "Du dessin à la pose",
    description: "Un interlocuteur unique de la conception à l'installation. Pas de mauvaise surprise.",
  },
];

const stats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "1 800m²", label: "D'atelier" },
  { number: "48h", label: "Délai devis" },
  { number: "98%", label: "Satisfaction" },
];

const projectTypes = [
  "Garde-corps / Balustrade",
  "Escalier",
  "Portail / Clôture",
  "Porte / Fenêtre acier",
  "Grille de ventilation",
  "Marquise / Auvent",
  "Autre / Je ne sais pas encore",
];

/* ─── Composant ─── */

export default function LpSurMesurePage() {
  const { getImage } = useSiteImages();
  const formRef = React.useRef<HTMLDivElement>(null);

  const [form, setForm] = React.useState({
    nom: "",
    telephone: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          sujet: `[LP Sur Mesure] ${form.type || "Demande de devis"}`,
          message: form.message || `Demande de devis sur mesure — type : ${form.type}`,
          type: "landing-sur-mesure",
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      toast.success("Demande envoyée ! Nous vous rappelons sous 24h.");
    } catch {
      toast.error("Erreur lors de l'envoi. Appelez-nous directement.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">

      {/* ═══ HERO ═══ */}
      <section className="relative bg-navy-dark overflow-hidden">
        {/* Mosaic fond — 2 images */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative">
            <Image src={getImage("product-garde-corps")} alt="" fill className="object-cover opacity-20" />
          </div>
          <div className="relative">
            <Image src={getImage("product-escaliers")} alt="" fill className="object-cover opacity-20" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/92 to-navy-dark/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Étoiles */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white/55 text-sm ml-1">1 500+ projets réalisés depuis 2018</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Métallerie sur mesure<br />
              <span className="text-cyan-glow font-serif italic">en Île-de-France</span>
            </h1>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Garde-corps, escaliers, portails, portes & fenêtres — tout est fabriqué sur mesure
              dans notre atelier de <strong className="text-white">1 800m²</strong> à Bruyères-sur-Oise.
              Devis gratuit sous 48h, pose incluse.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {["Fabrication française", "Pas de sous-traitance", "200+ couleurs RAL", "Pose incluse IDF"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 text-sm text-white/65">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold text-sm rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-glow/30"
              >
                Obtenir mon devis gratuit <ArrowRight className="w-4 h-4" />
              </button>
              <PhoneLink variant="button" className="justify-center" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-navy-medium py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center px-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-bold text-cyan-glow mb-1">{s.number}</div>
                <div className="text-white/45 text-xs uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUITS — 6 tiles ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-3">
              Tout ce que nous fabriquons
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Un seul atelier, tous les ouvrages. Chaque pièce est unique et taillée pour votre projet.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: "200px" }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={scrollToForm}
              >
                <Image
                  src={getImage(product.imageKey)}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <product.icon className="w-4 h-4 text-cyan-glow" />
                    <span className="font-bold text-white text-base">{product.name}</span>
                  </div>
                  <span className="text-white/55 text-xs">{product.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Cliquez sur un produit pour demander votre devis gratuit
          </p>
        </div>
      </section>

      {/* ═══ PROMESSE SUR MESURE — 3 différenciateurs ═══ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-navy-dark">
              La promesse AZ Construction
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-dark flex items-center justify-center mb-5">
                  <d.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <h3 className="font-bold text-navy-dark mb-3 text-lg">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications inline */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {["Made in France", "Garantie décennale", "Partenaire Jansen", "Thermolaquage intégré"].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm text-gray-600">
                <Award className="w-4 h-4 text-cyan-glow" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULAIRE ═══ */}
      <section ref={formRef} className="py-16 bg-navy-dark">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Obtenez votre devis gratuit
            </h2>
            <p className="text-white/45">
              Décrivez votre projet. Réponse sous 48h. Sans engagement.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 className="w-16 h-16 text-cyan-glow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Demande envoyée !</h3>
              <p className="text-white/50 mb-6">Nous vous rappelons sous 24h ouvrées.</p>
              <PhoneLink variant="button" className="justify-center" />
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 space-y-5 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom & Prénom *</label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jean@example.fr"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Type de projet</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm bg-white appearance-none"
                >
                  <option value="">Sélectionnez votre projet...</option>
                  {projectTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Décrivez votre projet{" "}
                  <span className="text-gray-400 font-normal">(optionnel)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ex : escalier hélicoïdal intérieur, maison individuelle, Seine-et-Marne..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-navy-dark text-white font-bold text-sm rounded-xl hover:bg-navy-medium transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</>
                ) : (
                  <><Send className="w-5 h-5" /> Obtenir mon devis gratuit</>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                * Champs obligatoires. Devis 100% gratuit, sans engagement.
              </p>
            </motion.form>
          )}

          <div className="mt-8 text-center">
            <p className="text-white/35 text-sm mb-3">Vous préférez nous appeler directement ?</p>
            <PhoneLink variant="button" className="justify-center" />
          </div>
        </div>
      </section>

      {/* ═══ STICKY CTA MOBILE ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-dark border-t border-white/10 p-4 flex gap-3">
        <button
          onClick={scrollToForm}
          className="flex-1 py-3 bg-cyan-glow text-navy-dark font-bold text-sm rounded-xl"
        >
          Devis gratuit
        </button>
        <PhoneLink variant="button" className="flex-shrink-0" />
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
