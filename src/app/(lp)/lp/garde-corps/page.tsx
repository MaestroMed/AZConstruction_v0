"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  Star,
  Clock,
  Wrench,
  Award,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { toast } from "sonner";

/* ─── Data ─── */

const stats = [
  { number: "1 500+", label: "Garde-corps posés" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "48h", label: "Délai devis" },
  { number: "2018", label: "Depuis" },
];

const models = [
  {
    name: "Verre & Acier",
    tagline: "Élégance et transparence",
    features: ["Verre feuilleté 8+8", "Main courante acier", "Fixations invisibles"],
    popular: true,
  },
  {
    name: "Câbles",
    tagline: "Design aérien contemporain",
    features: ["Câbles Ø4mm tendus", "Poteaux acier", "Style industriel"],
    popular: false,
  },
  {
    name: "Barreaudé",
    tagline: "Classique & robuste",
    features: ["Barreaux Ø16mm", "Espacement 11cm max", "Très résistant"],
    popular: false,
  },
  {
    name: "Main Courante",
    tagline: "Escaliers et rampes",
    features: ["Acier ou verre", "Fixation murale", "Sur devis"],
    popular: false,
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Devis gratuit sous 48h",
    description: "Réponse rapide avec plan technique et descriptif détaillé.",
  },
  {
    icon: Wrench,
    title: "Fabrication en atelier",
    description: "1 800m² à Bruyères-sur-Oise, sans sous-traitance.",
  },
  {
    icon: Shield,
    title: "Pose incluse en IDF",
    description: "Nos équipes installent votre garde-corps avec soin.",
  },
  {
    icon: Award,
    title: "Assurance décennale",
    description: "Tous vos travaux sont couverts. Norme NF P01-012.",
  },
];

const typeOptions = [
  "Verre & Acier",
  "Câbles",
  "Barreaudé",
  "Main Courante",
  "Je ne sais pas encore",
];

/* ─── Composant ─── */

export default function LpGardeCorpsPage() {
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
          sujet: `[LP Garde-corps] ${form.type || "Demande de devis"}`,
          message: form.message || `Demande de devis garde-corps — type : ${form.type}`,
          type: "landing-garde-corps",
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
        {/* Image fond */}
        <div className="absolute inset-0">
          <Image
            src={getImage("product-garde-corps")}
            alt="Garde-corps sur mesure"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge trust */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white/60 text-sm ml-1">98% de clients satisfaits</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Garde-corps sur mesure<br />
              <span className="text-cyan-glow font-serif italic">en Île-de-France</span>
            </h1>

            <p className="text-lg text-white/65 mb-8 leading-relaxed">
              Devis gratuit sous 48h. Fabrication acier & verre dans notre atelier de Bruyères-sur-Oise.
              Norme <strong className="text-white">NF P01-012</strong>. Pose incluse.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {["Norme NF P01-012", "Décennale", "Made in France", "Pose incluse"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 text-sm text-white/70">
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

        {/* Indicateur scroll */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
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
                <div className="text-white/50 text-xs uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODÈLES ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-3">
              Nos modèles de garde-corps
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Chaque modèle est fabriqué sur mesure selon vos dimensions exactes et vos préférences esthétiques.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl border p-6 ${
                  model.popular
                    ? "border-cyan-glow bg-gradient-to-b from-cyan-glow/5 to-white shadow-lg shadow-cyan-glow/10"
                    : "border-gray-100 bg-white shadow-sm hover:shadow-md"
                } transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {model.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-glow text-navy-dark text-xs font-bold rounded-full whitespace-nowrap">
                    Le plus demandé
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy-dark mb-1">{model.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{model.tagline}</p>
                <ul className="space-y-2">
                  {model.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-5 w-full py-2.5 border border-navy-dark text-navy-dark text-sm font-semibold rounded-lg hover:bg-navy-dark hover:text-white transition-colors"
                >
                  Demander un devis
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GARANTIES ═══ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-dark text-center mb-10">
            Pourquoi choisir AZ Construction ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-dark flex items-center justify-center mb-4">
                  <g.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2 text-base">{g.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{g.description}</p>
              </motion.div>
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
            <p className="text-white/50">
              Réponse garantie sous 48h. Pas d&apos;engagement.
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
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Type de garde-corps</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm bg-white appearance-none"
                >
                  <option value="">Sélectionnez un modèle...</option>
                  {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Votre projet <span className="text-gray-400 font-normal">(optionnel)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Terrasse 8ml, garde-corps verre, immeuble Île-de-France..."
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
                * Champs obligatoires. Devis gratuit, sans engagement.
              </p>
            </motion.form>
          )}

          {/* Fallback téléphone */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-3">Vous préférez nous appeler ?</p>
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
        <PhoneLink
          variant="button"
          className="flex-shrink-0"
        />
      </div>
      {/* Espaceur pour le sticky mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
