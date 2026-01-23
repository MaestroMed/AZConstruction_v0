"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, FileText, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  QuoteSteps,
  QuoteRecap,
  QuoteFormContact,
  QuoteFormProject,
  QuoteFormConfirmation,
} from "@/components/quote";
import { useQuoteRequestStore } from "@/stores/quoteRequestStore";
import type { ContactInfo, ProjectInfo } from "@/types/quote";
import { trackQuoteSubmitted, trackQuoteStarted, trackQuoteAbandoned } from "@/lib/analytics";

export default function DevisFormulairePage() {
  const router = useRouter();
  const {
    configuration,
    screenshotDataUrl,
    currentStep,
    contactInfo,
    projectInfo,
    rgpdAccepted,
    isSubmitting,
    submissionError,
    setCurrentStep,
    setContactInfo,
    setProjectInfo,
    setRgpdAccepted,
    setSubmitting,
    setSubmissionError,
    setSubmittedQuoteNumber,
    nextStep,
    prevStep,
  } = useQuoteRequestStore();

  // Si pas de configuration, rediriger
  if (!configuration) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="pt-32 pb-8 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
          <div className="container mx-auto px-6">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux produits
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Demande de devis
              </h1>
              <p className="text-white/70">
                Configurez d'abord votre produit
              </p>
            </motion.div>
          </div>
        </section>

        {/* Message */}
        <div className="container mx-auto px-6 py-16">
          <Card variant="elevated" className="max-w-xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-dark mb-4">
                Aucune configuration trouvée
              </h2>
              <p className="text-gray-600 mb-8">
                Pour demander un devis, veuillez d'abord configurer votre
                produit.
              </p>
              <Link href="/produits">
                <Button icon={<ArrowRight className="w-4 h-4" />}>
                  Configurer un produit
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Handlers pour les étapes
  const handleContactSubmit = (data: ContactInfo) => {
    setContactInfo(data);
    nextStep();
  };

  const handleProjectSubmit = (data: ProjectInfo) => {
    setProjectInfo(data);
    nextStep();
  };

  const handleFinalSubmit = async () => {
    if (!contactInfo || !projectInfo || !rgpdAccepted) return;

    setSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          configuration,
          contactInfo,
          projectInfo,
          screenshotDataUrl,
          rgpdAccepted,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      // Track conversion
      trackQuoteSubmitted({
        productFamily: configuration.family,
        estimatedValue: configuration.price,
        clientType: contactInfo.type as "particulier" | "professionnel",
      });

      setSubmittedQuoteNumber(data.quoteNumber);
      router.push("/devis/confirmation");
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleStepClick = (step: 1 | 2 | 3) => {
    // Autoriser le retour en arrière ou vers une étape déjà complétée
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au récapitulatif
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Demande de devis
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Complétez votre demande
            </h1>
            <p className="text-white/70">
              Renseignez vos informations pour recevoir votre devis personnalisé
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-6 py-4">
          <QuoteSteps currentStep={currentStep} onStepClick={handleStepClick} />
        </div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire - 2/3 */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <QuoteFormContact
                    key="step-1"
                    defaultValues={contactInfo}
                    onSubmit={handleContactSubmit}
                    onBack={() => router.push("/devis")}
                  />
                )}

                {currentStep === 2 && (
                  <QuoteFormProject
                    key="step-2"
                    defaultValues={projectInfo}
                    onSubmit={handleProjectSubmit}
                    onBack={prevStep}
                  />
                )}

                {currentStep === 3 && contactInfo && projectInfo && (
                  <QuoteFormConfirmation
                    key="step-3"
                    configuration={configuration}
                    screenshotDataUrl={screenshotDataUrl}
                    contactInfo={contactInfo}
                    projectInfo={projectInfo}
                    rgpdAccepted={rgpdAccepted}
                    onRgpdChange={setRgpdAccepted}
                    onSubmit={handleFinalSubmit}
                    onBack={prevStep}
                    isSubmitting={isSubmitting}
                    submissionError={submissionError}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Récapitulatif sidebar - 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-[180px]">
                <QuoteRecap
                  configuration={configuration}
                  screenshotDataUrl={screenshotDataUrl}
                  showPrice={true}
                  compact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







