"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    name: "Commande & Devis",
    questions: [
      {
        question: "Comment obtenir un devis ?",
        answer:
          "Vous pouvez obtenir un devis gratuitement de plusieurs manières : en remplissant notre formulaire de contact, par téléphone au 09 71 35 74 96, ou en prenant rendez-vous dans nos locaux pour les projets complexes. Nous nous engageons à vous répondre sous 48h ouvrées.",
      },
      {
        question: "Quelle est la durée de validité d'un devis ?",
        answer:
          "Nos devis sont valables 30 jours à compter de leur date d'émission. Passé ce délai, les prix peuvent être révisés en fonction de l'évolution des cours des matières premières. N'hésitez pas à nous contacter si vous avez besoin d'une prolongation.",
      },
      {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer:
          "Nous acceptons les paiements par carte bancaire (via notre plateforme sécurisée Stripe), virement bancaire, et chèque. Pour les clients professionnels validés, nous proposons également le paiement différé à 30 jours.",
      },
      {
        question: "Comment fonctionne l'échelonnement du paiement ?",
        answer:
          "Pour les commandes sur mesure, le paiement s'effectue en trois fois : 40% d'acompte à la commande, 30% à la mise en fabrication, et 30% à la livraison ou à la pose. Cette répartition peut être adaptée selon les projets.",
      },
    ],
  },
  {
    name: "Fabrication & Délais",
    questions: [
      {
        question: "Quels sont les délais de fabrication ?",
        answer:
          "Les délais varient selon la complexité du projet : 2 à 3 semaines pour les ouvrages simples (garde-corps standards, grilles), 4 à 6 semaines pour les projets sur mesure (portes, fenêtres, escaliers), et 6 à 10 semaines pour les grandes structures. Ces délais sont indicatifs et précisés sur chaque devis.",
      },
      {
        question: "Où sont fabriqués vos produits ?",
        answer:
          "Tous nos produits sont fabriqués dans nos ateliers de Bruyères-sur-Oise (95), en Île-de-France. Nous sommes fiers de notre fabrication 100% française, garantissant qualité et réactivité.",
      },
      {
        question: "Quels matériaux utilisez-vous ?",
        answer:
          "Nous travaillons principalement l'acier (brut, thermolaqué, galvanisé), l'inox 304 et 316, l'aluminium, et le fer forgé. Nous pouvons également combiner le métal avec d'autres matériaux comme le verre, le bois ou le composite.",
      },
      {
        question: "Comment choisir la finition de mon produit ?",
        answer:
          "Nous proposons plus de 200 couleurs RAL en thermolaquage, ainsi que des finitions spéciales (effet rouillé Corten, inox brossé ou poli, etc.). Notre équipe peut vous conseiller selon votre projet et l'environnement extérieur.",
      },
    ],
  },
  {
    name: "Thermolaquage",
    questions: [
      {
        question: "Qu'est-ce que le thermolaquage ?",
        answer:
          "Le thermolaquage (ou peinture poudre epoxy) est un procédé de finition industrielle où une poudre époxy-polyester est appliquée électrostatiquement sur le métal, puis polymérisée au four à 180-200°C. Ce traitement crée un film protecteur ultra-résistant, offrant une durabilité 5 fois supérieure à la peinture liquide traditionnelle.",
      },
      {
        question: "Combien coûte le thermolaquage ?",
        answer:
          "Le prix du thermolaquage varie selon la taille des pièces, leur complexité et la couleur choisie. Comptez en moyenne 15 à 40€/m² pour des pièces standards. Les couleurs métallisées ou texturées peuvent entraîner un supplément. Contactez-nous pour un devis gratuit personnalisé.",
      },
      {
        question: "Quelle est la durée de vie du thermolaquage ?",
        answer:
          "Le thermolaquage offre une protection exceptionnelle de 25 ans et plus, bien supérieure à la peinture liquide (5-10 ans). Nous garantissons nos traitements 10 ans contre l'écaillage et la décoloration.",
      },
      {
        question: "Quelles couleurs sont disponibles en thermolaquage ?",
        answer:
          "Nous proposons plus de 200 teintes RAL en thermolaquage : mat, satiné, brillant, texturé ou métallisé. Les couleurs les plus demandées sont le RAL 7016 (Gris Anthracite), RAL 9005 (Noir Profond) et RAL 9010 (Blanc Pur).",
      },
      {
        question: "Le thermolaquage est-il écologique ?",
        answer:
          "Oui, le thermolaquage est un procédé 100% écologique : zéro COV (composés organiques volatils), pas de solvants, pas d'émissions nocives. La poudre non utilisée est récupérée et recyclée, ce qui en fait une solution respectueuse de l'environnement.",
      },
    ],
  },
  {
    name: "Livraison & Pose",
    questions: [
      {
        question: "Livrez-vous dans toute la France ?",
        answer:
          "Oui, nous livrons dans toute la France métropolitaine. Les frais de livraison sont calculés en fonction de la distance, du volume et du poids des produits. Pour l'Île-de-France, nous proposons des tarifs préférentiels.",
      },
      {
        question: "Proposez-vous la pose ?",
        answer:
          "Oui, notre équipe de poseurs professionnels peut assurer l'installation de vos ouvrages. La pose est incluse dans certains de nos forfaits ou proposée en option. Nous nous déplaçons principalement en Île-de-France et régions limitrophes.",
      },
      {
        question: "Puis-je installer moi-même mon produit ?",
        answer:
          "Certains de nos produits peuvent être installés par vos soins si vous disposez des compétences et outils nécessaires. Nous fournissons une notice de montage détaillée et restons disponibles pour vous accompagner par téléphone.",
      },
      {
        question: "Comment se passe la livraison ?",
        answer:
          "La livraison est effectuée par notre propre équipe ou par transporteur spécialisé. Vous êtes informé 48h avant la date de livraison. À réception, vérifiez l'état des produits et signez le bon de livraison. Tout dommage doit être signalé sous 48h.",
      },
    ],
  },
  {
    name: "Garantie & SAV",
    questions: [
      {
        question: "Quelle est la garantie sur vos produits ?",
        answer:
          "Nos produits bénéficient de la garantie légale de conformité (2 ans). Le thermolaquage est garanti 10 ans contre l'écaillage et la décoloration. Pour les ouvrages posés, nous souscrivons une garantie décennale.",
      },
      {
        question: "Comment entretenir mon ouvrage métallique ?",
        answer:
          "L'entretien dépend du matériau : pour l'acier thermolaqué, un nettoyage à l'eau savonneuse 2 fois par an suffit. L'inox nécessite un nettoyage régulier avec un produit adapté. Évitez les produits abrasifs et rincez abondamment.",
      },
      {
        question: "Que faire en cas de problème après la pose ?",
        answer:
          "Contactez notre service après-vente au 09 71 35 74 96 ou par email à contact@azconstruction.fr. Nous nous engageons à prendre en charge votre demande sous 48h et à intervenir rapidement si nécessaire.",
      },
      {
        question: "Proposez-vous des pièces détachées ?",
        answer:
          "Oui, nous conservons les références de tous nos produits et pouvons fournir des pièces détachées (galets, motorisation, serrures, etc.) même plusieurs années après l'achat.",
      },
    ],
  },
  {
    name: "Clients Professionnels",
    questions: [
      {
        question: "Proposez-vous des tarifs professionnels ?",
        answer:
          "Oui, nous proposons des conditions préférentielles aux professionnels du bâtiment, architectes, promoteurs et revendeurs. Créez votre compte professionnel pour bénéficier de remises allant jusqu'à 25%.",
      },
      {
        question: "Comment ouvrir un compte professionnel ?",
        answer:
          "Inscrivez-vous en ligne en sélectionnant 'Professionnel' et fournissez votre numéro SIRET. Notre équipe validera votre compte sous 24h après vérification. Vous aurez ensuite accès à votre espace dédié avec tarifs remisés.",
      },
      {
        question: "Travaillez-vous avec des architectes ?",
        answer:
          "Absolument ! Nous collaborons régulièrement avec des architectes et bureaux d'études. Nous pouvons réaliser des ouvrages sur plan, participer aux réunions de chantier et fournir les documents techniques (CCTP, fiches produits, etc.).",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between text-left group"
      >
        <span className="font-medium text-navy-dark pr-8 group-hover:text-blue-corporate transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform flex-shrink-0",
            isOpen && "transform rotate-180 text-cyan-glow"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = React.useState(faqCategories[0].name);

  const currentCategory = faqCategories.find((cat) => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-glow/20 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-cyan-glow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos produits,
              nos services et notre fonctionnement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Navigation */}
            <motion.div
              className="lg:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-32">
                <h2 className="font-semibold text-navy-dark px-4 py-2 mb-2">
                  Catégories
                </h2>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm transition-all",
                        selectedCategory === category.name
                          ? "bg-blue-corporate text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-60">
                        ({category.questions.length})
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Questions */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-navy-dark mb-6">
                  {selectedCategory}
                </h2>
                <div className="divide-y divide-gray-200">
                  {currentCategory?.questions.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                et vous accompagner dans votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-corporate hover:bg-navy-dark">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button variant="outline" size="lg" className="border-blue-corporate text-blue-corporate">
                    <Phone className="w-5 h-5 mr-2" />
                    09 71 35 74 96
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


