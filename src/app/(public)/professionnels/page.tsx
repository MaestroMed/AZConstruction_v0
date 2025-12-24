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
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { GlowButton, MeshGradient, ParticleBackground, GradientOrb, AnimatedCounter } from "@/components/ui";
import { PhoneLink, usePhone } from "@/components/ui/PhoneLink";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
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

// Réalisations B2B - liées aux images dynamiques
const realisationsB2B = [
  {
    title: "Garde-corps collectif",
    client: "Promoteur IDF",
    imageKey: "realisation-b2b-1",
  },
  {
    title: "Escalier industriel",
    client: "Usine automobile",
    imageKey: "realisation-b2b-2",
  },
  {
    title: "Portails résidence",
    client: "Collectivité locale",
    imageKey: "realisation-b2b-3",
  },
];

export default function ProfessionnelsPage() {
  const phone = usePhone();
  const { getImage } = useSiteImages();
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero - Glassmorphism */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <MeshGradient variant="animated" className="absolute inset-0" />
        
        <GradientOrb
          color="cyan"
          size="xl"
          position={{ top: "5%", right: "-10%" }}
          blur="xl"
          opacity={0.15}
        />
        <GradientOrb
          color="blue"
          size="lg"
          position={{ bottom: "10%", left: "-5%" }}
          blur="lg"
          opacity={0.1}
        />
        
        <ParticleBackground count={12} />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 glass-card-glow px-5 py-2.5 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Building2 className="w-5 h-5 text-cyan-glow" />
                <span className="text-cyan-glow font-medium tracking-wide">ESPACE PROFESSIONNEL</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Votre partenaire{" "}
                <span className="text-gradient-premium">
                  métallerie
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Depuis <span className="text-cyan-glow font-semibold">2018</span>, AZ Construction accompagne les professionnels du bâtiment.
                Transformation métal, bois et verre sur mesure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-pro">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis Pro
                  </GlowButton>
                </a>
                <PhoneLink variant="button" className="justify-center" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { value: 200, suffix: "", label: "Partenaires actifs" },
                { value: 24, suffix: "h", label: "Réponse devis" },
                { value: 2018, suffix: "", label: "Depuis" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages - Glassmorphism */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
              Vos avantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi travailler avec{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                AZ Construction
              </span>
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
                <div className="glass-card-light p-8 h-full text-center group hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-200 group-hover:to-blue-200 transition-colors">
                    <advantage.icon className="w-8 h-8 text-blue-corporate" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-dark mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
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
                    src={getImage(realisation.imageKey)}
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
                    Secteur d&apos;activité *
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
                      <option value="architecte">Architecte / Bureau d&apos;études</option>
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
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Ligne directe commerciale</p>
                  <PhoneLink className="font-semibold text-white" showIcon={false} />
                </div>
              </div>
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


