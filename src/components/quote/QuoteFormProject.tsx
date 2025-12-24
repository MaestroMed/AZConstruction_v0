"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Wrench, Clock, HardHat } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { projectInfoSchema, type ProjectInfoInput } from "@/lib/validations/quote";
import type { ProjectInfo, TypeProjet, DelaiSouhaite } from "@/types/quote";
import { typeProjetLabels, delaiLabels } from "@/types/quote";

interface QuoteFormProjectProps {
  defaultValues?: ProjectInfo | null;
  onSubmit: (data: ProjectInfo) => void;
  onBack: () => void;
  className?: string;
}

const typeProjetOptions: { value: TypeProjet; label: string; icon: React.ReactNode }[] = [
  { value: "neuf", label: typeProjetLabels.neuf, icon: <HardHat className="w-5 h-5" /> },
  { value: "renovation", label: typeProjetLabels.renovation, icon: <Wrench className="w-5 h-5" /> },
  { value: "remplacement", label: typeProjetLabels.remplacement, icon: <MapPin className="w-5 h-5" /> },
];

const delaiOptions: { value: DelaiSouhaite; label: string }[] = [
  { value: "urgent", label: delaiLabels.urgent },
  { value: "1-3mois", label: delaiLabels["1-3mois"] },
  { value: "3-6mois", label: delaiLabels["3-6mois"] },
  { value: "flexible", label: delaiLabels.flexible },
];

export function QuoteFormProject({
  defaultValues,
  onSubmit,
  onBack,
  className,
}: QuoteFormProjectProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProjectInfoInput>({
    resolver: zodResolver(projectInfoSchema),
    defaultValues: defaultValues || {
      adresseChantier: {
        rue: "",
        codePostal: "",
        ville: "",
      },
      typeProjet: undefined,
      delaiSouhaite: undefined,
      poseRequise: false,
      commentaire: "",
    },
  });

  const typeProjet = watch("typeProjet");
  const delaiSouhaite = watch("delaiSouhaite");
  const poseRequise = watch("poseRequise");

  const onFormSubmit = (data: ProjectInfoInput) => {
    onSubmit(data as ProjectInfo);
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
            Votre projet
          </h2>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            {/* Adresse du chantier */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-corporate" />
                Adresse du chantier
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="rue"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Adresse *
                  </label>
                  <input
                    type="text"
                    id="rue"
                    {...register("adresseChantier.rue")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                      errors.adresseChantier?.rue
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-cyan-glow"
                    )}
                    placeholder="123 Rue de la Paix"
                  />
                  {errors.adresseChantier?.rue && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.adresseChantier.rue.message}
                    </p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="codePostal"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Code postal *
                    </label>
                    <input
                      type="text"
                      id="codePostal"
                      {...register("adresseChantier.codePostal")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                        errors.adresseChantier?.codePostal
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-cyan-glow"
                      )}
                      placeholder="95000"
                      maxLength={5}
                    />
                    {errors.adresseChantier?.codePostal && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.adresseChantier.codePostal.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="ville"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="ville"
                      {...register("adresseChantier.ville")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all",
                        errors.adresseChantier?.ville
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-cyan-glow"
                      )}
                      placeholder="Cergy"
                    />
                    {errors.adresseChantier?.ville && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.adresseChantier.ville.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Type de projet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type de projet *
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {typeProjetOptions.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all text-center",
                      typeProjet === option.value
                        ? "border-blue-corporate bg-blue-corporate/5"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register("typeProjet")}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        typeProjet === option.value
                          ? "text-blue-corporate"
                          : "text-gray-400"
                      )}
                    >
                      {option.icon}
                    </span>
                    <span
                      className={cn(
                        "font-medium text-sm",
                        typeProjet === option.value
                          ? "text-blue-corporate"
                          : "text-gray-600"
                      )}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.typeProjet && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.typeProjet.message}
                </p>
              )}
            </div>

            {/* Délai souhaité */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-corporate" />
                Délai souhaité *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {delaiOptions.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all text-center",
                      delaiSouhaite === option.value
                        ? "border-blue-corporate bg-blue-corporate/5"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register("delaiSouhaite")}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        "font-medium text-sm",
                        delaiSouhaite === option.value
                          ? "text-blue-corporate"
                          : "text-gray-600"
                      )}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.delaiSouhaite && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.delaiSouhaite.message}
                </p>
              )}
            </div>

            {/* Pose requise */}
            <div>
              <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-all">
                <input
                  type="checkbox"
                  {...register("poseRequise")}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-corporate focus:ring-cyan-glow"
                />
                <div>
                  <span className="font-medium text-navy-dark">
                    Je souhaite un devis avec pose
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Notre équipe peut assurer l'installation de votre ouvrage.
                    Un supplément sera appliqué.
                  </p>
                </div>
              </label>
            </div>

            {/* Commentaire */}
            <div>
              <label
                htmlFor="commentaire"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Commentaire ou informations complémentaires
              </label>
              <textarea
                id="commentaire"
                {...register("commentaire")}
                rows={4}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all resize-none",
                  errors.commentaire
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-cyan-glow"
                )}
                placeholder="Décrivez votre projet, vos contraintes particulières, ou toute information utile..."
              />
              {errors.commentaire && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.commentaire.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Retour
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                icon={<ArrowRight className="w-4 h-4" />}
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

export default QuoteFormProject;






