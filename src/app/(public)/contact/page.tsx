"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { trackContactFormSubmitted } from "@/lib/analytics";

const quickLinks = [
  {
    icon: Building2,
    title: "Vous êtes professionnel ?",
    description: "Découvrez nos offres dédiées aux pros du bâtiment.",
    link: "/solutions-pro",
    cta: "Espace Pro",
  },
  {
    icon: MessageCircle,
    title: "Questions fréquentes",
    description: "Consultez notre FAQ pour des réponses rapides.",
    link: "/faq",
    cta: "Voir la FAQ",
  },
];

const reasons = [
  "Réponse garantie sous 24h",
  "Devis gratuit et sans engagement",
  "Équipe à votre écoute",
  "Conseils personnalisés",
];

export default function ContactPage() {
  const { getImage } = useSiteImages();
  const [formData, setFormData] = React.useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    type: "particulier",
    entreprise: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: formData.sujet,
          message: formData.message,
          type: formData.type,
          entreprise: formData.entreprise,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      // Track conversion
      trackContactFormSubmitted({
        formType: formData.type as "particulier" | "professionnel",
        subject: formData.sujet,
      });

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with dynamic background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={getImage("hero-contact")}
            alt="Contactez AZ Construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-medium/90 to-blue-corporate/85" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              À votre écoute
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Une question, un projet ? Notre équipe est à votre disposition pour vous
              accompagner dans tous vos projets de métallerie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {reasons.map((reason, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 text-white/70 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {reason}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Info Cards */}
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+33123456789"
                        className="text-gray-600 hover:text-cyan-glow transition-colors block text-lg font-medium"
                      >
                        09 71 35 74 96
                      </a>
                      <p className="text-sm text-gray-400 mt-1">
                        Du lundi au vendredi, 8h-18h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-1">Email</h3>
                      <a
                        href="mailto:contact@azconstruction.fr"
                        className="text-gray-600 hover:text-cyan-glow transition-colors"
                      >
                        contact@azconstruction.fr
                      </a>
                      <p className="text-sm text-gray-400 mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-1">
                        Nos ateliers
                      </h3>
                      <p className="text-gray-600">
                        23 Chemin du Bac des Aubins
                        <br />
                        95820 Bruyères-sur-Oise
                      </p>
                      <a
                        href="https://maps.google.com/?q=23+Chemin+du+Bac+des+Aubins+95820+Bruyères-sur-Oise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-cyan-glow hover:text-cyan-600 mt-2"
                      >
                        Voir sur Google Maps
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-1">
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-1 text-gray-600 text-sm">
                        <p className="flex justify-between">
                          <span>Lundi - Vendredi</span>
                          <span className="font-medium">8h00 - 18h00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Samedi</span>
                          <span className="font-medium">9h00 - 12h00</span>
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span>Dimanche</span>
                          <span>Fermé</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.link}>
                  <Card variant="elevated" hover className="group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-glow/20 transition-colors">
                          <link.icon className="w-5 h-5 text-cyan-glow" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-navy-dark mb-0.5">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-500">{link.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-cyan-glow group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="elevated">
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-navy-dark mb-4">
                        Message envoyé !
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                      </p>
                      <Button onClick={() => setSubmitted(false)}>
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-navy-dark mb-6">
                        Envoyez-nous un message
                      </h2>

                      {/* Type Toggle */}
                      <div className="flex gap-4 mb-6">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, type: "particulier" })}
                          className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                            formData.type === "particulier"
                              ? "bg-blue-corporate text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          Particulier
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, type: "professionnel" })}
                          className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                            formData.type === "professionnel"
                              ? "bg-blue-corporate text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          Professionnel
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="nom"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Nom complet *
                            </label>
                            <input
                              type="text"
                              id="nom"
                              name="nom"
                              required
                              value={formData.nom}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                              placeholder="Jean Dupont"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                              placeholder="jean@exemple.fr"
                            />
                          </div>
                        </div>

                        {formData.type === "professionnel" && (
                          <div>
                            <label
                              htmlFor="entreprise"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Nom de l'entreprise *
                            </label>
                            <input
                              type="text"
                              id="entreprise"
                              name="entreprise"
                              required={formData.type === "professionnel"}
                              value={formData.entreprise}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                              placeholder="Ma Société SARL"
                            />
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="telephone"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Téléphone
                            </label>
                            <input
                              type="tel"
                              id="telephone"
                              name="telephone"
                              value={formData.telephone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                              placeholder="06 12 34 56 78"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sujet"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Sujet *
                            </label>
                            <select
                              id="sujet"
                              name="sujet"
                              required
                              value={formData.sujet}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all bg-white"
                            >
                              <option value="">Sélectionnez un sujet</option>
                              <option value="devis-thermolaquage">⭐ Devis Thermolaquage</option>
                              <option value="devis-porte">Devis Porte</option>
                              <option value="devis-garde-corps">Devis Garde-corps</option>
                              <option value="devis-escalier">Devis Escalier</option>
                              <option value="devis-fenetre">Devis Fenêtre</option>
                              <option value="devis-portail">Devis Portail</option>
                              <option value="devis-cloture">Devis Clôture</option>
                              <option value="devis-grille">Devis Grille de ventilation</option>
                              <option value="devis-autre">Devis Autre projet</option>
                              <option value="info">Information produit</option>
                              <option value="sav">Service après-vente</option>
                              <option value="partenariat">Partenariat</option>
                              <option value="autre">Autre</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Votre message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all resize-none"
                            placeholder="Décrivez votre projet ou votre demande en détail..."
                          />
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="rgpd"
                            required
                            className="mt-1 w-4 h-4 text-blue-corporate rounded border-gray-300 focus:ring-cyan-glow"
                          />
                          <label htmlFor="rgpd" className="text-sm text-gray-600">
                            J'accepte que mes données soient traitées conformément à la{" "}
                            <Link href="/confidentialite" className="text-blue-corporate hover:underline">
                              politique de confidentialité
                            </Link>
                            .
                          </label>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto"
                          disabled={isSubmitting}
                          icon={<Send className="w-4 h-4" />}
                        >
                          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Google Maps Embed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              Venez nous rendre visite
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos ateliers de 1800m² sont ouverts aux visiteurs sur rendez-vous. 
              Venez découvrir notre savoir-faire et discuter de votre projet.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Google Maps Embed */}
            <div className="relative h-[450px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.892!2d2.3316!3d49.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e63f8a2b6d7c7d%3A0x0!2s23%20Chemin%20du%20Bac%20des%20Aubins%2C%2095820%20Bruy%C3%A8res-sur-Oise!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="AZ Construction - Localisation"
              />
            </div>
            
            {/* Info bar sous la carte */}
            <div className="bg-gradient-to-r from-navy-dark to-blue-corporate p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-glow" />
                </div>
                <div>
                  <p className="text-white font-semibold">23 Chemin du Bac des Aubins</p>
                  <p className="text-white/70 text-sm">95820 Bruyères-sur-Oise</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.google.com/maps/dir//23+Chemin+du+Bac+des+Aubins+95820+Bruyères-sur-Oise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-glow text-navy-dark font-semibold rounded-xl hover:bg-cyan-400 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Itinéraire
                </a>
              </div>
            </div>
          </motion.div>

          {/* Transports */}
          <motion.div
            className="mt-8 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-xl">🚗</span>
              </div>
              <h4 className="font-semibold text-navy-dark mb-2">En voiture</h4>
              <p className="text-sm text-gray-600">
                Sortie A1 (Survilliers), puis D922 direction Bruyères-sur-Oise. Parking gratuit sur place.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                <span className="text-xl">🚆</span>
              </div>
              <h4 className="font-semibold text-navy-dark mb-2">En train</h4>
              <p className="text-sm text-gray-600">
                Gare de Bruyères-sur-Oise (Ligne H), puis 10 min à pied ou taxi.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <span className="text-xl">📍</span>
              </div>
              <h4 className="font-semibold text-navy-dark mb-2">Coordonnées GPS</h4>
              <p className="text-sm text-gray-600 font-mono">
                49.1394° N, 2.3316° E
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
