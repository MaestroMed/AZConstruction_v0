"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { QuoteRecap } from "@/components/quote";
import { useQuoteRequestStore } from "@/stores/quoteRequestStore";

export default function DevisRecapPage() {
  const router = useRouter();
  const { configuration, screenshotDataUrl } = useQuoteRequestStore();

  // Si pas de configuration, afficher un message
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
                Configurez d'abord votre produit avant de demander un devis
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
                produit dans notre configurateur 3D.
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

  const handleContinue = () => {
    router.push("/devis/formulaire");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <Link
            href={`/configurateur/${configuration.family.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au configurateur
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
              Récapitulatif de votre configuration
            </h1>
            <p className="text-white/70">
              Vérifiez votre configuration avant de continuer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Récapitulatif */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <QuoteRecap
              configuration={configuration}
              screenshotDataUrl={screenshotDataUrl}
              showPrice={true}
            />
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between gap-4"
          >
            <Link href={`/configurateur/${configuration.family.toLowerCase()}`}>
              <Button
                variant="outline"
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Modifier ma configuration
              </Button>
            </Link>
            <Button
              onClick={handleContinue}
              icon={<ArrowRight className="w-4 h-4" />}
              className="sm:min-w-[200px]"
            >
              Continuer vers le devis
            </Button>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="default" className="bg-blue-corporate/5 border-blue-corporate/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy-dark mb-2">
                  Comment ça marche ?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-corporate text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Renseignez vos coordonnées pour que nous puissions vous
                      recontacter.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-corporate text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      Précisez les détails de votre projet (adresse, délai,
                      pose...).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-corporate text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Validez votre demande et recevez votre devis personnalisé
                      sous 24-48h.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



