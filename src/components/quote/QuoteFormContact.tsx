"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { contactInfoSchema, type ContactInfoInput } from "@/lib/validations/quote";
import type { ContactInfo } from "@/types/quote";

interface QuoteFormContactProps {
  defaultValues?: ContactInfo | null;
  onSubmit: (data: ContactInfo) => void;
  onBack?: () => void;
  className?: string;
}

export function QuoteFormContact({
  defaultValues,
  onSubmit,
  onBack,
  className,
}: QuoteFormContactProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInfoInput>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: defaultValues || {
      type: "particulier",
      civilite: "M",
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      raisonSociale: "",
      siret: "",
    },
  });

  const clientType = watch("type");

  const onFormSubmit = (data: ContactInfoInput) => {
    onSubmit(data as ContactInfo);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={className}
    >
      <Card variant="elevated">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-xl font-bold text-navy-dark mb-6">
            Vos coordonnées
          </h2>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            {/* Type de client */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Vous êtes
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                    clientType === "particulier"
                      ? "border-blue-corporate bg-blue-corporate/5"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <input
                    type="radio"
                    value="particulier"
                    {...register("type")}
                    className="sr-only"
                  />
                  <User
                    className={cn(
                      "w-5 h-5",
                      clientType === "particulier"
                        ? "text-blue-corporate"
                        : "text-gray-400"
                    )}
                  />
                  <span
                    className={cn(
                      "font-medium",
                      clientType === "particulier"
                        ? "text-blue-corporate"
                        : "text-gray-600"
                    )}
                  >
                    Particulier
                  </span>
                </label>
                <label
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                    clientType === "professionnel"
                      ? "border-blue-corporate bg-blue-corporate/5"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <input
                    type="radio"
                    value="professionnel"
                    {...register("type")}
                    className="sr-only"
                  />
                  <Building2
                    className={cn(
                      "w-5 h-5",
                      clientType === "professionnel"
                        ? "text-blue-corporate"
                        : "text-gray-400"
                    )}
                  />
                  <span
                    className={cn(
                      "font-medium",
                      clientType === "professionnel"
                        ? "text-blue-corporate"
                        : "text-gray-600"
                    )}
                  >
                    Professionnel
                  </span>
                </label>
              </div>
            </div>

            {/* Champs professionnels */}
            {clientType === "professionnel" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="raisonSociale"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Raison sociale *
                  </label>
                  <input
                    type="text"
                    id="raisonSociale"
                    {...register("raisonSociale")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                      errors.raisonSociale
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-cyan-glow"
                    )}
                    placeholder="Ma Société SARL"
                  />
                  {errors.raisonSociale && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.raisonSociale.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="siret"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    SIRET (optionnel)
                  </label>
                  <input
                    type="text"
                    id="siret"
                    {...register("siret")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                      errors.siret
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-cyan-glow"
                    )}
                    placeholder="12345678901234"
                    maxLength={14}
                  />
                  {errors.siret && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.siret.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Civilité */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Civilité *
              </label>
              <div className="flex gap-4">
                {(["M", "Mme"] as const).map((civ) => (
                  <label
                    key={civ}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all",
                      watch("civilite") === civ
                        ? "border-blue-corporate bg-blue-corporate/5 text-blue-corporate"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      value={civ}
                      {...register("civilite")}
                      className="sr-only"
                    />
                    <span className="font-medium">
                      {civ === "M" ? "Monsieur" : "Madame"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Prénom & Nom */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  {...register("prenom")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                    errors.prenom
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-cyan-glow"
                  )}
                  placeholder="Jean"
                />
                {errors.prenom && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.prenom.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  {...register("nom")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                    errors.nom
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-cyan-glow"
                  )}
                  placeholder="Dupont"
                />
                {errors.nom && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nom.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
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
                {...register("email")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                  errors.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-cyan-glow"
                )}
                placeholder="jean.dupont@email.fr"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                {...register("telephone")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                  errors.telephone
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-cyan-glow"
                )}
                placeholder="06 12 34 56 78"
              />
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.telephone.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-4">
              {onBack && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                >
                  Retour
                </Button>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                icon={<ArrowRight className="w-4 h-4" />}
                className={cn(!onBack && "ml-auto")}
              >
                Continuer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default QuoteFormContact;






