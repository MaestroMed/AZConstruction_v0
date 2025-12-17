"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, Phone, Building2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  const [accountType, setAccountType] = React.useState<"particulier" | "pro">("particulier");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    nom: "",
    prenom: "",
    telephone: "",
    raisonSociale: "",
    siret: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Inscription simulée. Fonctionnalité à implémenter.");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate flex items-center justify-center px-6 py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-corporate/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-lg relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12">
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M20 8L20 20M20 8L35 8M20 8L15 3M35 8L35 14"
                  stroke="#4fc3f7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 50L20 25L32 50M12 42H28"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 28L52 28L36 50L52 50"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Construction</span>
          </Link>
        </div>

        <Card variant="glass" className="bg-white/95 backdrop-blur-xl">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold text-navy-dark text-center mb-2">
              Créer un compte
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Rejoignez AZ Construction
            </p>

            {/* Account Type Toggle */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => setAccountType("particulier")}
                className={cn(
                  "flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all",
                  accountType === "particulier"
                    ? "bg-white text-navy-dark shadow"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <User className="w-4 h-4 inline mr-2" />
                Particulier
              </button>
              <button
                type="button"
                onClick={() => setAccountType("pro")}
                className={cn(
                  "flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all",
                  accountType === "pro"
                    ? "bg-white text-navy-dark shadow"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Building2 className="w-4 h-4 inline mr-2" />
                Professionnel
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {accountType === "particulier" ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Raison sociale *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="raisonSociale"
                        required
                        value={formData.raisonSociale}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                        placeholder="Entreprise SARL"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      N° SIRET *
                    </label>
                    <input
                      type="text"
                      name="siret"
                      required
                      value={formData.siret}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="123 456 789 00012"
                      maxLength={17}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    placeholder="Min. 8 caractères"
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

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  id="cgv"
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-corporate focus:ring-cyan-glow"
                />
                <label htmlFor="cgv" className="text-sm text-gray-600">
                  J&apos;accepte les{" "}
                  <Link
                    href="/cgv"
                    className="text-blue-corporate hover:underline"
                  >
                    conditions générales de vente
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-blue-corporate hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {isLoading ? "Création..." : "Créer mon compte"}
              </Button>

              {accountType === "pro" && (
                <p className="text-xs text-gray-500 text-center">
                  Votre compte professionnel sera validé sous 24-48h par notre équipe.
                </p>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-500">
                Déjà un compte ?{" "}
                <Link
                  href="/login"
                  className="text-blue-corporate font-medium hover:text-cyan-glow transition-colors"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}



