"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  FileText,
  ArrowRight,
  CheckCircle,
  Loader2,
  Eye,
  EyeOff,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const benefits = [
  "Devis personnalisés sous 24h",
  "Tarifs préférentiels professionnels",
  "Interlocuteur dédié",
  "Accès à votre historique de commandes",
  "Téléchargement de vos factures",
  "Suivi de vos projets en temps réel",
];

export default function InscriptionProPage() {
  const [formData, setFormData] = React.useState({
    // Entreprise
    raisonSociale: "",
    siret: "",
    tvaIntra: "",
    secteur: "",
    // Contact
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    // Adresse
    adresse: "",
    codePostal: "",
    ville: "",
    // Compte
    password: "",
    passwordConfirm: "",
    // Légal
    cgu: false,
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (!formData.cgu) {
      toast.error("Veuillez accepter les conditions générales");
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(
      "Inscription envoyée ! Vous recevrez un email de confirmation sous 24h."
    );
    setIsSubmitting(false);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 backdrop-blur-sm border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Espace Professionnel
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Créer votre compte Pro
            </h1>
            <p className="text-lg text-white/70">
              Rejoignez notre réseau de partenaires et bénéficiez d'avantages exclusifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Sidebar - Avantages */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                  <h3 className="font-semibold text-navy-dark mb-4">
                    Avantages du compte Pro
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">
                      Déjà un compte ?
                    </p>
                    <Link href="/login">
                      <Button variant="outline" size="sm" className="w-full">
                        Se connecter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Progress */}
                  <div className="flex items-center gap-4 mb-8">
                    {[1, 2, 3].map((s) => (
                      <React.Fragment key={s}>
                        <button
                          onClick={() => setStep(s)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                            step >= s
                              ? "bg-cyan-glow text-navy-dark"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {s}
                        </button>
                        {s < 3 && (
                          <div
                            className={`flex-1 h-1 rounded ${
                              step > s ? "bg-cyan-glow" : "bg-gray-100"
                            }`}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Étape 1 : Entreprise */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-navy-dark mb-4">
                          Informations entreprise
                        </h2>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Raison sociale *
                          </label>
                          <div className="relative">
                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={formData.raisonSociale}
                              onChange={(e) =>
                                updateField("raisonSociale", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="Nom de votre entreprise"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              N° SIRET *
                            </label>
                            <div className="relative">
                              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                required
                                value={formData.siret}
                                onChange={(e) =>
                                  updateField("siret", e.target.value)
                                }
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                placeholder="123 456 789 00012"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              N° TVA Intracommunautaire
                            </label>
                            <input
                              type="text"
                              value={formData.tvaIntra}
                              onChange={(e) =>
                                updateField("tvaIntra", e.target.value)
                              }
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="FR12345678901"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Secteur d'activité *
                          </label>
                          <select
                            required
                            value={formData.secteur}
                            onChange={(e) =>
                              updateField("secteur", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          >
                            <option value="">Sélectionnez votre secteur</option>
                            <option value="constructeur">
                              Constructeur de maisons
                            </option>
                            <option value="architecte">
                              Architecte / Bureau d'études
                            </option>
                            <option value="promoteur">
                              Promoteur immobilier
                            </option>
                            <option value="artisan">Artisan du bâtiment</option>
                            <option value="collectivite">Collectivité</option>
                            <option value="industriel">Industriel</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            type="button"
                            onClick={() => setStep(2)}
                            icon={<ArrowRight className="w-5 h-5" />}
                          >
                            Continuer
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 2 : Contact & Adresse */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-navy-dark mb-4">
                          Contact & Adresse
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Prénom *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                required
                                value={formData.prenom}
                                onChange={(e) =>
                                  updateField("prenom", e.target.value)
                                }
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                placeholder="Jean"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Nom *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.nom}
                              onChange={(e) =>
                                updateField("nom", e.target.value)
                              }
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="Dupont"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
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
                                  updateField("email", e.target.value)
                                }
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                placeholder="pro@entreprise.fr"
                              />
                            </div>
                          </div>

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
                                  updateField("telephone", e.target.value)
                                }
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                placeholder="06 12 34 56 78"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={formData.adresse}
                              onChange={(e) =>
                                updateField("adresse", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="123 rue de l'Industrie"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Code postal *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.codePostal}
                              onChange={(e) =>
                                updateField("codePostal", e.target.value)
                              }
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="75001"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Ville *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.ville}
                              onChange={(e) =>
                                updateField("ville", e.target.value)
                              }
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="Paris"
                            />
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                          >
                            Retour
                          </Button>
                          <Button
                            type="button"
                            onClick={() => setStep(3)}
                            icon={<ArrowRight className="w-5 h-5" />}
                          >
                            Continuer
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 3 : Compte */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-navy-dark mb-4">
                          Créer votre compte
                        </h2>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mot de passe *
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type={showPassword ? "text" : "password"}
                              required
                              minLength={8}
                              value={formData.password}
                              onChange={(e) =>
                                updateField("password", e.target.value)
                              }
                              className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="Minimum 8 caractères"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmer le mot de passe *
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type={showPassword ? "text" : "password"}
                              required
                              value={formData.passwordConfirm}
                              onChange={(e) =>
                                updateField("passwordConfirm", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="Confirmer votre mot de passe"
                            />
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.cgu}
                              onChange={(e) =>
                                updateField("cgu", e.target.checked)
                              }
                              className="w-5 h-5 rounded border-gray-300 text-cyan-glow focus:ring-cyan-500 mt-0.5"
                            />
                            <span className="text-sm text-gray-600">
                              J'accepte les{" "}
                              <Link
                                href="/cgv"
                                className="text-cyan-700 hover:underline"
                              >
                                Conditions Générales de Vente
                              </Link>{" "}
                              et la{" "}
                              <Link
                                href="/confidentialite"
                                className="text-cyan-700 hover:underline"
                              >
                                Politique de Confidentialité
                              </Link>
                              . *
                            </span>
                          </label>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                          >
                            Retour
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                            icon={
                              isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                              ) : (
                                <ArrowRight className="w-5 h-5" />
                              )
                            }
                          >
                            {isSubmitting
                              ? "Création en cours..."
                              : "Créer mon compte"}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


