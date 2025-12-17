"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  User,
  MapPin,
  Clock,
  Wrench,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { QuoteRecap } from "./QuoteRecap";
import type { ExportConfig } from "@/types/configurator";
import type { ContactInfo, ProjectInfo } from "@/types/quote";
import { typeProjetLabels, delaiLabels, civiliteLabels } from "@/types/quote";

interface QuoteFormConfirmationProps {
  configuration: ExportConfig;
  screenshotDataUrl?: string | null;
  contactInfo: ContactInfo;
  projectInfo: ProjectInfo;
  rgpdAccepted: boolean;
  onRgpdChange: (accepted: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  submissionError: string | null;
  className?: string;
}

export function QuoteFormConfirmation({
  configuration,
  screenshotDataUrl,
  contactInfo,
  projectInfo,
  rgpdAccepted,
  onRgpdChange,
  onSubmit,
  onBack,
  isSubmitting,
  submissionError,
  className,
}: QuoteFormConfirmationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rgpdAccepted) {
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={cn("space-y-6", className)}
    >
      {/* Récapitulatif configuration */}
      <QuoteRecap
        configuration={configuration}
        screenshotDataUrl={screenshotDataUrl}
        showPrice={true}
        compact={false}
      />

      {/* Récapitulatif coordonnées et projet */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Coordonnées */}
        <Card variant="elevated">
          <CardContent className="p-6">
            <h3 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-corporate" />
              Vos coordonnées
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-medium text-navy-dark">
                  {civiliteLabels[contactInfo.civilite]} {contactInfo.prenom}{" "}
                  {contactInfo.nom}
                </span>
              </p>
              {contactInfo.raisonSociale && (
                <p className="text-gray-600">
                  {contactInfo.raisonSociale}
                  {contactInfo.siret && (
                    <span className="text-gray-400 ml-2">
                      (SIRET: {contactInfo.siret})
                    </span>
                  )}
                </p>
              )}
              <p className="text-gray-600">{contactInfo.email}</p>
              <p className="text-gray-600">{contactInfo.telephone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Projet */}
        <Card variant="elevated">
          <CardContent className="p-6">
            <h3 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-corporate" />
              Votre projet
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Adresse du chantier</p>
                <p className="font-medium text-navy-dark">
                  {projectInfo.adresseChantier.rue}
                  <br />
                  {projectInfo.adresseChantier.codePostal}{" "}
                  {projectInfo.adresseChantier.ville}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-gray-500 flex items-center gap-1">
                    <Wrench className="w-3 h-3" /> Type
                  </p>
                  <p className="font-medium text-navy-dark">
                    {typeProjetLabels[projectInfo.typeProjet]}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Délai
                  </p>
                  <p className="font-medium text-navy-dark">
                    {delaiLabels[projectInfo.delaiSouhaite]}
                  </p>
                </div>
              </div>
              {projectInfo.poseRequise && (
                <p className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-glow/10 text-cyan-700 rounded text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Pose demandée
                </p>
              )}
              {projectInfo.commentaire && (
                <div>
                  <p className="text-gray-500">Commentaire</p>
                  <p className="text-gray-700 italic">
                    "{projectInfo.commentaire}"
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulaire final */}
      <Card variant="elevated">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* RGPD */}
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={rgpdAccepted}
                onChange={(e) => onRgpdChange(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-corporate focus:ring-cyan-glow"
              />
              <div className="text-sm">
                <span className="text-gray-700">
                  J'accepte que mes données soient traitées conformément à la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-blue-corporate hover:underline"
                    target="_blank"
                  >
                    politique de confidentialité
                  </Link>{" "}
                  d'AZ Construction. *
                </span>
              </div>
            </label>

            {/* Erreur de soumission */}
            {submissionError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-700">
                    Une erreur est survenue
                  </p>
                  <p className="text-sm text-red-600 mt-1">{submissionError}</p>
                </div>
              </motion.div>
            )}

            {/* Informations */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-medium text-navy-dark mb-2">
                Ce qui va se passer ensuite :
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Vous recevrez un email de confirmation avec votre numéro de
                    devis.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Notre équipe étudiera votre demande sous 24 à 48h.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Vous recevrez votre devis détaillé par email et dans votre
                    espace client.
                  </span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                disabled={isSubmitting}
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Retour
              </Button>
              <Button
                type="submit"
                disabled={!rgpdAccepted || isSubmitting}
                className={cn(
                  "min-w-[200px]",
                  !rgpdAccepted && "opacity-50 cursor-not-allowed"
                )}
                icon={
                  isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default QuoteFormConfirmation;

