"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Download,
  User,
  Mail,
  Phone,
  ArrowRight,
  Home,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useQuoteRequestStore } from "@/stores/quoteRequestStore";

export default function DevisConfirmationPage() {
  const router = useRouter();
  const {
    configuration,
    contactInfo,
    submittedQuoteNumber,
    reset,
  } = useQuoteRequestStore();

  // Si pas de numéro de devis, rediriger
  React.useEffect(() => {
    if (!submittedQuoteNumber) {
      router.push("/devis");
    }
  }, [submittedQuoteNumber, router]);

  const handleNewQuote = () => {
    reset();
    router.push("/produits");
  };

  if (!submittedQuoteNumber) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Animation de succès */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30"
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Demande envoyée avec succès !
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Votre demande de devis a été transmise à notre équipe.
            </motion.p>

            {/* Numéro de devis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <FileText className="w-5 h-5 text-cyan-glow" />
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wide">
                  Numéro de devis
                </p>
                <p className="text-lg font-bold text-white">
                  {submittedQuoteNumber}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Prochaines étapes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card variant="elevated">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-navy-dark mb-6">
                  Prochaines étapes
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email de confirmation",
                      description:
                        "Vous allez recevoir un email de confirmation avec les détails de votre demande.",
                      time: "Immédiat",
                    },
                    {
                      icon: User,
                      title: "Étude de votre projet",
                      description:
                        "Notre équipe technique analyse votre configuration et prépare un devis détaillé.",
                      time: "24-48h",
                    },
                    {
                      icon: FileText,
                      title: "Réception du devis",
                      description:
                        "Vous recevrez votre devis complet par email avec toutes les options de financement.",
                      time: "Sous 48h",
                    },
                    {
                      icon: Phone,
                      title: "Prise de contact",
                      description:
                        "Un conseiller vous contactera pour répondre à vos questions et affiner le projet.",
                      time: "Selon vos disponibilités",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-corporate/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-blue-corporate" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-semibold text-navy-dark">
                            {step.title}
                          </h3>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Confirmation email */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Card variant="default" className="bg-cyan-glow/5 border-cyan-glow/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-glow/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-1">
                        Vérifiez votre boîte mail
                      </h3>
                      <p className="text-sm text-gray-600">
                        Un email de confirmation a été envoyé à{" "}
                        <span className="font-medium text-navy-dark">
                          {contactInfo.email}
                        </span>
                        . Si vous ne le voyez pas, vérifiez vos spams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <Card variant="elevated" hover>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-blue-corporate" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-dark mb-1">
                      Créer votre compte
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Suivez vos devis et commandes depuis votre espace client.
                    </p>
                    <Link href="/register">
                      <Button
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Créer un compte
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" hover>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-dark mb-1">
                      Une question ?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Notre équipe est disponible pour vous accompagner.
                    </p>
                    <Link href="/contact">
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Nous contacter
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Retour accueil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Link href="/">
              <Button
                variant="outline"
                icon={<Home className="w-4 h-4" />}
                iconPosition="left"
              >
                Retour à l'accueil
              </Button>
            </Link>
            <Button
              onClick={handleNewQuote}
              icon={<FileText className="w-4 h-4" />}
              iconPosition="left"
            >
              Nouvelle demande de devis
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}






