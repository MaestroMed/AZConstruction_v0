"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Printer,
  Package,
  Ruler,
  Palette,
  Settings2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { QuoteStatus } from "@/types/quote";
import { quoteStatusLabels, quoteStatusColors, typeProjetLabels, delaiLabels } from "@/types/quote";

// Mock data - à remplacer par un appel API
const mockQuoteDetail = {
  id: "1",
  numero: "DEV-2024-ABC1",
  dateDemande: new Date("2024-12-15T10:00:00"),
  dateExpiration: new Date("2025-01-14T23:59:59"),
  status: "envoye" as QuoteStatus,
  totalHT: 4666.67,
  tva: 933.33,
  totalTTC: 5600,
  commentaireClient: "Installation souhaitée avant le printemps",
  commentaireAdmin: null,
  user: {
    prenom: "Jean",
    nom: "Dupont",
    email: "jean.dupont@email.fr",
    telephone: "06 12 34 56 78",
  },
  items: [
    {
      id: "item1",
      productName: "Portail sur mesure",
      productFamily: "Portail",
      quantity: 1,
      prixUnitaireHT: 4666.67,
      prixTotalHT: 4666.67,
      configSnapshot: {
        family: "Portail",
        style: "Contemporain",
        dimensions: { width: 400, height: 180 },
        material: "Acier thermolaqué",
        color: "#383E42",
        colorName: "Gris anthracite (RAL 7016)",
        options: ["Motorisation", "Digicode"],
        price: 5600,
        projectInfo: {
          adresseChantier: {
            rue: "123 Rue de la Paix",
            codePostal: "95000",
            ville: "Cergy",
          },
          typeProjet: "neuf",
          delaiSouhaite: "1-3mois",
          poseRequise: true,
        },
      },
    },
  ],
  messages: [
    {
      id: "msg1",
      senderType: "client",
      messageText: "Bonjour, est-il possible d'avoir une finition mate ?",
      dateEnvoi: new Date("2024-12-16T09:30:00"),
    },
    {
      id: "msg2",
      senderType: "admin",
      messageText: "Bonjour M. Dupont, oui c'est tout à fait possible. La finition mate est incluse dans le prix proposé.",
      dateEnvoi: new Date("2024-12-16T14:15:00"),
    },
  ],
};

export default function DevisDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [quote] = React.useState(mockQuoteDetail);
  const [newMessage, setNewMessage] = React.useState("");

  const config = quote.items[0]?.configSnapshot;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // TODO: Envoyer le message via API
    console.log("Message:", newMessage);
    setNewMessage("");
  };

  const handleAccept = () => {
    // TODO: Accepter le devis via API
    console.log("Devis accepté");
  };

  const handleRefuse = () => {
    // TODO: Refuser le devis via API
    console.log("Devis refusé");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/compte/devis"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-navy-dark transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à mes devis
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-navy-dark">
                  {quote.numero}
                </h1>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
                    quoteStatusColors[quote.status]
                  )}
                >
                  {quote.status === "accepte" ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : quote.status === "refuse" ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                  {quoteStatusLabels[quote.status]}
                </span>
              </div>
              <p className="text-gray-600">
                Demandé le{" "}
                {format(new Date(quote.dateDemande), "d MMMM yyyy 'à' HH:mm", {
                  locale: fr,
                })}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
              >
                Télécharger PDF
              </Button>
              <Button
                variant="outline"
                icon={<Printer className="w-4 h-4" />}
                iconPosition="left"
              >
                Imprimer
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Configuration du produit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-corporate" />
                    Configuration du produit
                  </h2>

                  {config && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center">
                            <Package className="w-4 h-4 text-blue-corporate" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Produit</p>
                            <p className="font-medium text-navy-dark">
                              {config.family} - {config.style}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center">
                            <Ruler className="w-4 h-4 text-blue-corporate" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Dimensions</p>
                            <p className="font-medium text-navy-dark">
                              {config.dimensions.width} × {config.dimensions.height} cm
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center">
                            <Settings2 className="w-4 h-4 text-blue-corporate" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Matériau</p>
                            <p className="font-medium text-navy-dark">{config.material}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center">
                            <Palette className="w-4 h-4 text-blue-corporate" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="text-sm text-gray-500">Couleur</p>
                              <p className="font-medium text-navy-dark">{config.colorName}</p>
                            </div>
                            <div
                              className="w-6 h-6 rounded-md border border-gray-200"
                              style={{ backgroundColor: config.color }}
                            />
                          </div>
                        </div>
                      </div>

                      {config.options && config.options.length > 0 && (
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-500 mb-2">Options</p>
                          <div className="flex flex-wrap gap-2">
                            {config.options.map((option, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-cyan-glow/10 text-cyan-700 rounded-full text-sm font-medium"
                              >
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Détails du projet */}
            {config?.projectInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-corporate" />
                      Détails du projet
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Adresse du chantier</p>
                        <p className="font-medium text-navy-dark">
                          {config.projectInfo.adresseChantier.rue}
                          <br />
                          {config.projectInfo.adresseChantier.codePostal}{" "}
                          {config.projectInfo.adresseChantier.ville}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Type de projet</p>
                          <p className="font-medium text-navy-dark">
                            {typeProjetLabels[config.projectInfo.typeProjet as keyof typeof typeProjetLabels]}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Délai souhaité</p>
                          <p className="font-medium text-navy-dark">
                            {delaiLabels[config.projectInfo.delaiSouhaite as keyof typeof delaiLabels]}
                          </p>
                        </div>
                        {config.projectInfo.poseRequise && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-glow/10 text-cyan-700 rounded text-sm font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            Pose demandée
                          </span>
                        )}
                      </div>
                    </div>

                    {quote.commentaireClient && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-1">Votre commentaire</p>
                        <p className="text-gray-700 italic">"{quote.commentaireClient}"</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Messages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-corporate" />
                    Échanges
                  </h2>

                  {/* Liste des messages */}
                  <div className="space-y-4 mb-6">
                    {quote.messages.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">
                        Aucun message pour le moment
                      </p>
                    ) : (
                      quote.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn(
                            "p-4 rounded-xl",
                            msg.senderType === "client"
                              ? "bg-blue-corporate/5 ml-8"
                              : "bg-gray-50 mr-8"
                          )}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-navy-dark">
                              {msg.senderType === "client" ? "Vous" : "AZ Construction"}
                            </span>
                            <span className="text-xs text-gray-400">
                              {format(new Date(msg.dateEnvoi), "d MMM 'à' HH:mm", {
                                locale: fr,
                              })}
                            </span>
                          </div>
                          <p className="text-gray-700">{msg.messageText}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Formulaire nouveau message */}
                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Votre message..."
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    />
                    <Button type="submit" icon={<Send className="w-4 h-4" />}>
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Récapitulatif prix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-dark mb-4">Récapitulatif</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sous-total HT</span>
                      <span className="font-medium text-navy-dark">
                        {quote.totalHT.toLocaleString("fr-FR", {
                          minimumFractionDigits: 2,
                        })}{" "}
                        €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">TVA (20%)</span>
                      <span className="font-medium text-navy-dark">
                        {quote.tva.toLocaleString("fr-FR", {
                          minimumFractionDigits: 2,
                        })}{" "}
                        €
                      </span>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex justify-between">
                      <span className="font-semibold text-navy-dark">Total TTC</span>
                      <span className="text-xl font-bold text-cyan-600">
                        {quote.totalTTC.toLocaleString("fr-FR")} €
                      </span>
                    </div>
                  </div>

                  {quote.dateExpiration && (
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-700">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Valable jusqu'au{" "}
                        {format(new Date(quote.dateExpiration), "d MMMM yyyy", {
                          locale: fr,
                        })}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Actions */}
            {quote.status === "envoye" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Card variant="elevated" className="border-2 border-cyan-glow/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-navy-dark mb-4">Votre décision</h3>
                    <div className="space-y-3">
                      <Button
                        className="w-full bg-emerald-500 hover:bg-emerald-600"
                        icon={<CheckCircle2 className="w-4 h-4" />}
                        onClick={handleAccept}
                      >
                        Accepter ce devis
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-red-500 border-red-200 hover:bg-red-50"
                        icon={<XCircle className="w-4 h-4" />}
                        onClick={handleRefuse}
                      >
                        Refuser
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      En acceptant, vous serez contacté pour finaliser la commande.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-dark mb-4">Besoin d'aide ?</h3>
                  <div className="space-y-3 text-sm">
                    <a
                      href="tel:+33123456789"
                      className="flex items-center gap-3 text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      01 23 45 67 89
                    </a>
                    <a
                      href="mailto:contact@azconstruction.fr"
                      className="flex items-center gap-3 text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      contact@azconstruction.fr
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

