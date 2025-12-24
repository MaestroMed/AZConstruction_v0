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
  CheckCircle,
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
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { toast } from "sonner";

const advantages = [
  {
    icon: Clock,
    title: "Délais prioritaires",
    description:
      "Vos commandes sont traitées en priorité avec des délais de fabrication optimisés.",
  },
  {
    icon: FileText,
    title: "Devis sous 24h",
    description:
      "Obtenez des devis détaillés adaptés à vos projets en un jour ouvré.",
  },
  {
    icon: HeadphonesIcon,
    title: "Interlocuteur dédié",
    description:
      "Un chargé de compte vous accompagne dans tous vos projets de A à Z.",
  },
  {
    icon: Truck,
    title: "Livraison sur chantier",
    description:
      "Livraison directe sur vos chantiers en Île-de-France et régions limitrophes.",
  },
];

const sectors = [
  {
    name: "Constructeurs de maisons",
    description: "Équipez vos constructions neuves avec des ouvrages de qualité.",
    icon: Building,
  },
  {
    name: "Architectes & Bureaux d'études",
    description: "Collaborons sur vos projets les plus ambitieux.",
    icon: Ruler,
  },
  {
    name: "Artisans du bâtiment",
    description: "Sous-traitance métallerie pour vos chantiers.",
    icon: Hammer,
  },
  {
    name: "Industriels",
    description: "Structures, passerelles et équipements sur mesure.",
    icon: Factory,
  },
];

// Réalisations B2B placeholder
const realisationsB2B = [
  {
    title: "Garde-corps collectif",
    client: "Promoteur IDF",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Escalier industriel",
    client: "Usine automobile",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Portails résidence",
    client: "Collectivité locale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
];

export default function SolutionsProPage() {
  const [formData, setFormData] = React.useState({
    entreprise: "",
    nom: "",
    email: "",
    telephone: "",
    secteur: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");
      setFormData({
        entreprise: "",
        nom: "",
        email: "",
        telephone: "",
        secteur: "",
        message: "",
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-cyan-glow"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-glow" />
                </div>
                <span className="text-cyan-glow font-medium">Espace Professionnel</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Votre partenaire{" "}
                <span className="font-serif italic text-cyan-pale">
                  métallerie
                </span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Depuis 2018, AZ Construction accompagne les professionnels du bâtiment.
                Transformation métal, bois et verre sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-pro">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-light"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis Pro
                  </Button>
                </a>
                <a href="tel:+33123456789">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10"
                    icon={<Phone className="w-5 h-5" />}
                  >
                    01 23 45 67 89
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { number: "200", label: "Partenaires actifs" },
                { number: "24h", label: "Réponse devis" },
                { number: "2018", label: "Depuis" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-3xl font-bold text-cyan-glow mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi travailler avec AZ Construction ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des avantages concrets pour simplifier vos projets et optimiser vos chantiers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-7 h-7 text-blue-corporate" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nous travaillons avec tous les métiers du bâtiment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Que vous soyez constructeur, architecte ou artisan, nous adaptons
              nos services à vos contraintes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                      <sector.icon className="w-6 h-6 text-cyan-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-gray-500">{sector.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations B2B */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Réalisations professionnelles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quelques exemples de projets réalisés pour nos partenaires.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {realisationsB2B.map((realisation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-navy-dark">{realisation.title}</h3>
                <p className="text-sm text-gray-500">{realisation.client}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/realisations">
              <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Voir toutes nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire Contact Pro */}
      <section id="contact-pro" className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Demande de devis professionnel
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous et notre équipe commerciale
                vous recontacte sous 24h.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Entreprise */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.entreprise}
                        onChange={(e) =>
                          setFormData({ ...formData, entreprise: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom & Prénom *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Votre nom complet"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="pro@entreprise.fr"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={(e) =>
                          setFormData({ ...formData, telephone: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>
                </div>

                {/* Secteur */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secteur d'activité *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.secteur}
                      onChange={(e) =>
                        setFormData({ ...formData, secteur: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="constructeur">Constructeur de maisons</option>
                      <option value="architecte">Architecte / Bureau d'études</option>
                      <option value="promoteur">Promoteur immobilier</option>
                      <option value="artisan">Artisan du bâtiment</option>
                      <option value="collectivite">Collectivité</option>
                      <option value="industriel">Industriel</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                      placeholder="Type de produits, quantités estimées, délais souhaités..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                  <p className="text-sm text-gray-500">
                    * Champs obligatoires. Réponse garantie sous 24h ouvrées.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale w-full sm:w-auto"
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )
                    }
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact rapide */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Ligne directe commerciale</p>
                  <p className="font-semibold text-white">01 23 45 67 89</p>
                </div>
              </a>
              <a
                href="mailto:pro@zaconstruction.fr"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email professionnel</p>
                  <p className="font-semibold text-white">pro@zaconstruction.fr</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Inscription */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              Vous souhaitez créer un compte Pro ?
            </h2>
            <p className="text-gray-600 mb-8">
              Accédez à votre espace dédié pour suivre vos commandes, 
              télécharger vos factures et gérer vos projets.
            </p>
            <Link href="/inscription-pro">
              <Button
                size="lg"
                className="bg-navy-dark text-white hover:bg-navy-medium"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Créer mon compte Pro
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
