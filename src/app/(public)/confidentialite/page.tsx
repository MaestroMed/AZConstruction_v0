"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-corporate hover:text-cyan-glow transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-glow to-blue-corporate flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-navy-dark">
              Politique de Confidentialité
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AZ Construction SARL s'engage à protéger la vie privée de ses utilisateurs. Cette politique 
                de confidentialité explique comment nous collectons, utilisons et protégeons vos données 
                personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à 
                la loi Informatique et Libertés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                1. Responsable du traitement
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>Le responsable du traitement des données est :</p>
                <p><strong className="text-navy-dark">AZ Construction SARL</strong></p>
                <p>23 Chemin du Bac des Aubins</p>
                <p>95820 Bruyères-sur-Oise, France</p>
                <p>Email : <a href="mailto:dpo@azconstruction.fr" className="text-blue-corporate hover:underline">dpo@azconstruction.fr</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                2. Données collectées
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Nous collectons les données suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-navy-dark">Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong className="text-navy-dark">Données de facturation :</strong> adresse postale, informations de paiement</li>
                  <li><strong className="text-navy-dark">Données professionnelles :</strong> nom de l'entreprise, numéro SIRET (pour les clients professionnels)</li>
                  <li><strong className="text-navy-dark">Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                  <li><strong className="text-navy-dark">Données de communication :</strong> historique des échanges par email ou téléphone</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                3. Finalités du traitement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Vos données sont traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Gestion des demandes de devis et des commandes</li>
                  <li>Exécution des contrats et facturation</li>
                  <li>Service après-vente et support client</li>
                  <li>Envoi de communications commerciales (avec votre consentement)</li>
                  <li>Amélioration de nos services et de notre site web</li>
                  <li>Respect de nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                4. Base légale du traitement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-navy-dark">L'exécution du contrat :</strong> pour traiter vos commandes</li>
                  <li><strong className="text-navy-dark">Le consentement :</strong> pour l'envoi de newsletters</li>
                  <li><strong className="text-navy-dark">L'intérêt légitime :</strong> pour améliorer nos services</li>
                  <li><strong className="text-navy-dark">L'obligation légale :</strong> pour la conservation des factures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                5. Durée de conservation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Nous conservons vos données pendant les durées suivantes :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-navy-dark">Données clients :</strong> durée de la relation commerciale + 3 ans</li>
                  <li><strong className="text-navy-dark">Données de facturation :</strong> 10 ans (obligation légale)</li>
                  <li><strong className="text-navy-dark">Données de prospection :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-navy-dark">Cookies :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                6. Destinataires des données
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Vos données peuvent être transmises à :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Notre personnel habilité</li>
                  <li>Nos sous-traitants (hébergement, paiement, livraison)</li>
                  <li>Les autorités compétentes en cas de réquisition</li>
                </ul>
                <p>
                  Nous ne vendons jamais vos données à des tiers. Nos sous-traitants sont soumis à des 
                  obligations de confidentialité et de sécurité.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                7. Vos droits
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-navy-dark">Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong className="text-navy-dark">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-navy-dark">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-navy-dark">Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong className="text-navy-dark">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-navy-dark">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:dpo@azconstruction.fr" className="text-blue-corporate hover:underline">
                    dpo@azconstruction.fr
                  </a>{" "}
                  ou par courrier à notre adresse.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                8. Cookies
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Notre site utilise des cookies pour :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-navy-dark">Cookies essentiels :</strong> fonctionnement du site</li>
                  <li><strong className="text-navy-dark">Cookies analytiques :</strong> mesure d'audience (Google Analytics)</li>
                  <li><strong className="text-navy-dark">Cookies fonctionnels :</strong> mémorisation de vos préférences</li>
                </ul>
                <p>
                  Vous pouvez gérer vos préférences de cookies via le bandeau de consentement ou les 
                  paramètres de votre navigateur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                9. Sécurité
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre tout accès non autorisé, modification, divulgation ou destruction. 
                Ces mesures incluent le chiffrement SSL, l'authentification forte et des sauvegardes régulières.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                10. Réclamation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                auprès de la CNIL :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-corporate hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : Décembre 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


