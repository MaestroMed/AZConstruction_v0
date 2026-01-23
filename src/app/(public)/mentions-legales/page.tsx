"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegalesPage() {
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
            Mentions Légales
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                1. Informations légales
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-navy-dark">Raison sociale :</strong> AZ Construction SARL
                </p>
                <p>
                  <strong className="text-navy-dark">Siège social :</strong> 23 Chemin du Bac des Aubins, 95820 Bruyères-sur-Oise, France
                </p>
                <p>
                  <strong className="text-navy-dark">SIRET :</strong> 123 456 789 00012
                </p>
                <p>
                  <strong className="text-navy-dark">N° TVA Intracommunautaire :</strong> FR12345678901
                </p>
                <p>
                  <strong className="text-navy-dark">Capital social :</strong> 50 000 €
                </p>
                <p>
                  <strong className="text-navy-dark">Directeur de la publication :</strong> Jean-Pierre Azoulay
                </p>
                <p>
                  <strong className="text-navy-dark">Téléphone :</strong>{" "}
                  <a href="tel:+33123456789" className="text-blue-corporate hover:underline">
                    09 71 35 74 96
                  </a>
                </p>
                <p>
                  <strong className="text-navy-dark">Email :</strong>{" "}
                  <a href="mailto:contact@azconstruction.fr" className="text-blue-corporate hover:underline">
                    contact@azconstruction.fr
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                2. Hébergement du site
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-navy-dark">Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong className="text-navy-dark">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p>
                  <strong className="text-navy-dark">Site web :</strong>{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-corporate hover:underline">
                    vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-600 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive d'AZ Construction ou de ses partenaires. Toute reproduction, 
                représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
                d'AZ Construction. Toute exploitation non autorisée du site ou de l'un quelconque des éléments 
                qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément 
                aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                4. Limitation de responsabilité
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AZ Construction s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour 
                des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment 
                et sans préavis, le contenu. Toutefois, AZ Construction ne peut garantir l'exactitude, la précision 
                ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, AZ Construction 
                décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des 
                informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                5. Liens hypertextes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d'AZ Construction. 
                Les utilisateurs du site ne peuvent mettre en place un hyperlien en direction de ce site sans 
                l'autorisation expresse et préalable d'AZ Construction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                6. Droit applicable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront 
                seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-dark mb-4">
                7. Crédits
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong className="text-navy-dark">Conception et développement :</strong> AZ Construction
                </p>
                <p>
                  <strong className="text-navy-dark">Photographies :</strong> AZ Construction / Shutterstock
                </p>
              </div>
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


