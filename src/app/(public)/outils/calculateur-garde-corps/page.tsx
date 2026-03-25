"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info, Phone, Check } from "lucide-react";

// Prix de base par type (€ par ml)
const PRICE_BASES: Record<string, { min: number; max: number; label: string; desc: string }> = {
  barreau: { min: 180, max: 320, label: "Barreaudé acier", desc: "Barreaux verticaux acier thermolaqué, classique et robuste" },
  cable: { min: 220, max: 380, label: "Câbles tendus", desc: "Design aérien, câbles inox Ø4mm, tendeurs réglables" },
  verre: { min: 280, max: 480, label: "Verre feuilleté", desc: "Panneaux verre 8+8, élégant et transparent" },
  mixte: { min: 240, max: 420, label: "Mixte acier+verre", desc: "Montants acier avec panneaux verre ou câbles" },
  "main-courante": { min: 120, max: 220, label: "Main courante seule", desc: "Rampe murale pour escalier ou couloir" },
};

// Multiplicateurs finitions
const FINITIONS: Record<string, { mult: number; label: string }> = {
  thermolaquer: { mult: 1.0, label: "Thermolaqué couleur RAL (standard)" },
  inox: { mult: 1.3, label: "Inox brossé (haut de gamme)" },
  brut: { mult: 0.85, label: "Acier brut galvanisé (extérieur)" },
  laque: { mult: 1.15, label: "Laqué brillant (décoration intérieure)" },
};

// Multiplicateurs pose
const POSE_OPTIONS: Record<string, { mult: number; label: string }> = {
  fourniture: { mult: 1.0, label: "Fourniture seule (prix usine)" },
  pose_simple: { mult: 1.35, label: "Fourniture + pose (accès facile)" },
  pose_complex: { mult: 1.55, label: "Fourniture + pose (accès difficile, étages)" },
};

export default function CalculateurGardeCorps() {
  const [type, setType] = React.useState("barreau");
  const [longueur, setLongueur] = React.useState(5);
  const [finition, setFinition] = React.useState("thermolaquer");
  const [pose, setPose] = React.useState("fourniture");
  const [showDetails, setShowDetails] = React.useState(false);

  const base = PRICE_BASES[type];
  const finMult = FINITIONS[finition].mult;
  const poseMult = POSE_OPTIONS[pose].mult;

  const prixMin = Math.round(base.min * longueur * finMult * poseMult / 10) * 10;
  const prixMax = Math.round(base.max * longueur * finMult * poseMult / 10) * 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark to-blue-corporate pt-32 pb-12">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Outil gratuit
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculateur de prix{" "}
            <span className="text-cyan-glow">garde-corps</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Estimez le budget de votre garde-corps sur mesure en quelques clics.
            Résultat instantané, devis précis sous 48h.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Type */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-corporate text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  Type de garde-corps
                </h2>
                <div className="space-y-2">
                  {Object.entries(PRICE_BASES).map(([key, val]) => (
                    <label key={key}
                      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border-2 transition-all ${
                        type === key ? "border-blue-corporate bg-blue-50" : "border-transparent hover:bg-gray-50"
                      }`}>
                      <input type="radio" name="type" value={key} checked={type === key}
                        onChange={() => setType(key)} className="mt-1" />
                      <div>
                        <p className="font-medium text-navy-dark">{val.label}</p>
                        <p className="text-xs text-gray-500">{val.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Longueur */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-corporate text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                  Longueur totale
                </h2>
                <div className="flex items-center gap-4">
                  <input
                    type="range" min="1" max="30" step="0.5"
                    value={longueur} onChange={(e) => setLongueur(Number(e.target.value))}
                    className="flex-1 accent-blue-corporate"
                  />
                  <div className="w-24 text-center">
                    <input
                      type="number" min="1" max="100" step="0.5"
                      value={longueur} onChange={(e) => setLongueur(Number(e.target.value) || 1)}
                      className="w-full text-center px-3 py-2 border border-gray-200 rounded-xl font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">mètres</p>
                  </div>
                </div>
              </div>

              {/* Finition */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-corporate text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
                  Finition
                </h2>
                <div className="space-y-2">
                  {Object.entries(FINITIONS).map(([key, val]) => (
                    <label key={key}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border-2 transition-all ${
                        finition === key ? "border-blue-corporate bg-blue-50" : "border-transparent hover:bg-gray-50"
                      }`}>
                      <input type="radio" name="finition" value={key} checked={finition === key}
                        onChange={() => setFinition(key)} />
                      <span className="text-sm font-medium text-gray-700">{val.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pose */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-corporate text-white text-xs font-bold rounded-full flex items-center justify-center">4</span>
                  Prestation
                </h2>
                <div className="space-y-2">
                  {Object.entries(POSE_OPTIONS).map(([key, val]) => (
                    <label key={key}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border-2 transition-all ${
                        pose === key ? "border-blue-corporate bg-blue-50" : "border-transparent hover:bg-gray-50"
                      }`}>
                      <input type="radio" name="pose" value={key} checked={pose === key}
                        onChange={() => setPose(key)} />
                      <span className="text-sm font-medium text-gray-700">{val.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="lg:sticky lg:top-24 h-fit">
              <motion.div
                key={`${type}-${longueur}-${finition}-${pose}`}
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-navy-dark rounded-3xl p-8 text-white"
              >
                <p className="text-white/60 text-sm mb-2">Estimation pour {longueur} ml de {PRICE_BASES[type].label}</p>
                <div className="text-center py-6">
                  <p className="text-white/50 text-sm mb-1">Budget estimé</p>
                  <p className="text-5xl font-black text-cyan-glow">
                    {prixMin.toLocaleString("fr-FR")} €
                  </p>
                  <p className="text-white/40 mt-1">à {prixMax.toLocaleString("fr-FR")} € TTC</p>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Type</span>
                    <span className="font-medium">{PRICE_BASES[type].label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Longueur</span>
                    <span className="font-medium">{longueur} ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Finition</span>
                    <span className="font-medium">{FINITIONS[finition].label.split(" (")[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Prestation</span>
                    <span className="font-medium">{POSE_OPTIONS[pose].label.split(" (")[0]}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="text-white/60 text-xs">Prix au mètre linéaire</span>
                    <span className="text-xs">~{Math.round((prixMin + prixMax) / 2 / longueur)} € / ml</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/5 rounded-xl p-3 mt-4 text-xs text-white/50">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Estimation indicative. Le prix réel dépend de la complexité du chantier, des accès et des options choisies. Devis précis gratuit sous 48h.</span>
                </div>

                <div className="mt-6 space-y-3">
                  <Link href="/devis/formulaire"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-base">
                    Obtenir un devis précis <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:0971357496"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" /> 09 71 35 74 96
                  </a>
                </div>
              </motion.div>

              {/* Garanties */}
              <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-semibold text-navy-dark mb-3 text-sm">Ce prix inclut</h3>
                <ul className="space-y-2">
                  {[
                    "Fabrication sur mesure dans nos ateliers",
                    "Thermolaquage RAL au choix",
                    "Norme NF P01-012",
                    "Garantie décennale",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SEO content */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">
              Comment estimer le prix d'un garde-corps sur mesure ?
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Le prix d'un garde-corps sur mesure dépend de plusieurs facteurs : le type (barreaudé, câbles, verre),
                la longueur totale, la finition (thermolaqué, inox, galvanisé) et la prestation souhaitée
                (fourniture seule ou fourniture + pose).
              </p>
              <p>
                En moyenne, un garde-corps acier thermolaqué coûte entre <strong>180 et 320 € / ml</strong> en
                fourniture seule. Avec la pose, comptez entre <strong>240 et 430 € / ml</strong>. Les garde-corps
                en verre feuilleté sont plus onéreux (280-480 € / ml) mais apportent une touche de luxe incomparable.
              </p>
              <p>
                Notre calculateur vous donne une fourchette indicative. Pour obtenir un devis précis adapté à votre
                chantier, contactez-nous : nous nous déplaçons gratuitement en Île-de-France pour mesurer et conseiller.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 not-prose">
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="font-bold text-navy-dark mb-1">Garde-corps barreaudé</p>
                <p className="text-2xl font-black text-blue-corporate">180-320 €/ml</p>
                <p className="text-sm text-gray-500">Fourniture seule</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="font-bold text-navy-dark mb-1">Garde-corps câbles</p>
                <p className="text-2xl font-black text-blue-corporate">220-380 €/ml</p>
                <p className="text-sm text-gray-500">Fourniture seule</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="font-bold text-navy-dark mb-1">Garde-corps verre</p>
                <p className="text-2xl font-black text-blue-corporate">280-480 €/ml</p>
                <p className="text-sm text-gray-500">Fourniture seule</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/produits/garde-corps"
                className="inline-flex items-center gap-2 text-blue-corporate font-medium hover:underline">
                Voir tous nos modèles de garde-corps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
