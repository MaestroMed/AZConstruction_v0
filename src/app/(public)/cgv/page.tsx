"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CGVPage() {
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

          <h1 className="text-4xl font-bold text-navy-dark mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 1 - Objet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre AZ Construction SARL et ses clients pour la vente de produits métalliques sur mesure, 
                incluant mais non limité aux garde-corps, escaliers, portes, fenêtres, portails, clôtures et grilles de ventilation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 2 - Devis et commandes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">2.1</strong> Tout devis établi par AZ Construction est valable 
                  30 jours à compter de sa date d'émission, sauf mention contraire.
                </p>
                <p>
                  <strong className="text-navy-dark">2.2</strong> La commande est réputée ferme et définitive après 
                  réception par AZ Construction du devis signé accompagné de la mention "Bon pour accord" et du 
                  versement de l'acompte prévu.
                </p>
                <p>
                  <strong className="text-navy-dark">2.3</strong> Toute modification de commande après validation 
                  devra faire l'objet d'un avenant écrit et pourra entraîner une révision du prix et/ou des délais.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 3 - Prix
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">3.1</strong> Les prix sont indiqués en euros et s'entendent 
                  hors taxes. La TVA applicable est celle en vigueur au jour de la facturation (20% actuellement).
                </p>
                <p>
                  <strong className="text-navy-dark">3.2</strong> Sauf stipulation contraire, les prix s'entendent 
                  départ usine, hors frais de transport et de pose.
                </p>
                <p>
                  <strong className="text-navy-dark">3.3</strong> AZ Construction se réserve le droit de modifier 
                  ses tarifs à tout moment. Les produits seront facturés sur la base des tarifs en vigueur lors 
                  de l'enregistrement de la commande.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 4 - Modalités de paiement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">4.1</strong> Le paiement s'effectue selon les modalités suivantes :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>40% d'acompte à la commande</li>
                  <li>30% à la mise en fabrication</li>
                  <li>30% à la livraison ou à la pose</li>
                </ul>
                <p>
                  <strong className="text-navy-dark">4.2</strong> Les moyens de paiement acceptés sont : virement 
                  bancaire, chèque, carte bancaire (via notre plateforme sécurisée Stripe).
                </p>
                <p>
                  <strong className="text-navy-dark">4.3</strong> Tout retard de paiement entraînera l'application 
                  de pénalités de retard égales à trois fois le taux d'intérêt légal, ainsi qu'une indemnité 
                  forfaitaire de 40€ pour frais de recouvrement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 5 - Délais de fabrication et livraison
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">5.1</strong> Les délais de fabrication sont indicatifs et 
                  mentionnés sur le devis. Ils courent à compter de la réception de l'acompte et de tous les 
                  éléments techniques nécessaires.
                </p>
                <p>
                  <strong className="text-navy-dark">5.2</strong> AZ Construction ne saurait être tenue responsable 
                  des retards de livraison dus à des cas de force majeure ou à des défauts d'approvisionnement 
                  indépendants de sa volonté.
                </p>
                <p>
                  <strong className="text-navy-dark">5.3</strong> La livraison s'effectue à l'adresse indiquée 
                  par le client. Le transfert des risques s'opère dès la remise du produit au transporteur ou 
                  au client.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 6 - Garantie
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">6.1</strong> Nos produits bénéficient de la garantie légale 
                  de conformité (2 ans) et de la garantie des vices cachés.
                </p>
                <p>
                  <strong className="text-navy-dark">6.2</strong> La garantie ne couvre pas les dommages résultant 
                  d'une utilisation non conforme, d'un défaut d'entretien, d'une usure normale ou de modifications 
                  non autorisées.
                </p>
                <p>
                  <strong className="text-navy-dark">6.3</strong> Pour les ouvrages posés, AZ Construction souscrit 
                  une assurance garantie décennale conformément à la loi.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 7 - Droit de rétractation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-dark">7.1</strong> Conformément à l'article L.221-28 du Code de la 
                  consommation, le droit de rétractation ne s'applique pas aux produits fabriqués sur mesure selon 
                  les spécifications du consommateur.
                </p>
                <p>
                  <strong className="text-navy-dark">7.2</strong> Pour les produits standardisés, le client dispose 
                  d'un délai de 14 jours pour exercer son droit de rétractation à compter de la réception du produit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 8 - Propriété intellectuelle
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les plans, dessins techniques et études réalisés par AZ Construction restent sa propriété exclusive. 
                Ils ne peuvent être communiqués à des tiers ou utilisés à d'autres fins sans autorisation écrite 
                préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 9 - Résiliation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En cas de manquement par l'une des parties à ses obligations, l'autre partie pourra résilier le 
                contrat de plein droit 15 jours après mise en demeure restée sans effet. Les acomptes versés 
                resteront acquis à AZ Construction au titre de dommages et intérêts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                Article 10 - Litiges
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront 
                de trouver une solution amiable. À défaut, le Tribunal de Commerce de Pontoise sera seul compétent.
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


