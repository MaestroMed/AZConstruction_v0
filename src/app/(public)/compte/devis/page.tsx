"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Download,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { format, differenceInDays } from "date-fns";
import { fr } from "date-fns/locale";
import type { QuoteStatus, QuoteListItem } from "@/types/quote";
import { quoteStatusLabels, quoteStatusColors } from "@/types/quote";

// Mock data - à remplacer par un appel API
const mockQuotes: QuoteListItem[] = [
  {
    id: "1",
    numero: "DEV-2024-ABC1",
    dateDemande: new Date("2024-12-15T10:00:00"),
    dateExpiration: new Date("2025-01-14T23:59:59"),
    status: "en_attente",
    totalTTC: 5600,
    itemsCount: 1,
    productFamily: "Portail",
  },
  {
    id: "2",
    numero: "DEV-2024-XYZ2",
    dateDemande: new Date("2024-12-10T14:30:00"),
    dateExpiration: new Date("2025-01-09T23:59:59"),
    status: "envoye",
    totalTTC: 2890,
    itemsCount: 1,
    productFamily: "Garde-corps",
  },
  {
    id: "3",
    numero: "DEV-2024-DEF3",
    dateDemande: new Date("2024-11-20T09:15:00"),
    dateExpiration: new Date("2024-12-20T23:59:59"),
    status: "accepte",
    totalTTC: 8500,
    itemsCount: 2,
    productFamily: "Escalier",
  },
];

const statusFilters: { id: QuoteStatus | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "en_attente", label: "En attente" },
  { id: "envoye", label: "Envoyés" },
  { id: "accepte", label: "Acceptés" },
  { id: "refuse", label: "Refusés" },
];

function getStatusIcon(status: QuoteStatus) {
  switch (status) {
    case "accepte":
      return <CheckCircle2 className="w-4 h-4" />;
    case "refuse":
    case "expire":
      return <XCircle className="w-4 h-4" />;
    case "envoye":
      return <FileText className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
}

export default function MesDevisPage() {
  const [quotes] = React.useState<QuoteListItem[]>(mockQuotes);
  const [selectedStatus, setSelectedStatus] = React.useState<QuoteStatus | "all">("all");

  const filteredQuotes =
    selectedStatus === "all"
      ? quotes
      : quotes.filter((q) => q.status === selectedStatus);

  const statusCounts = React.useMemo(() => {
    const counts: Record<string, number> = { all: quotes.length };
    quotes.forEach((q) => {
      counts[q.status] = (counts[q.status] || 0) + 1;
    });
    return counts;
  }, [quotes]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-navy-dark mb-2">
            Mes devis
          </h1>
          <p className="text-gray-600">
            Consultez et gérez vos demandes de devis
          </p>
        </motion.div>

        {/* Filtres par statut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedStatus(filter.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                selectedStatus === filter.id
                  ? "bg-blue-corporate text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              )}
            >
              {filter.label}
              <span
                className={cn(
                  "ml-2 px-1.5 py-0.5 rounded text-xs",
                  selectedStatus === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                )}
              >
                {statusCounts[filter.id] || 0}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Liste des devis */}
        {filteredQuotes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="elevated">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-lg font-semibold text-navy-dark mb-2">
                  Aucun devis trouvé
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedStatus === "all"
                    ? "Vous n'avez pas encore de demande de devis."
                    : `Aucun devis avec le statut "${quoteStatusLabels[selectedStatus as QuoteStatus]}".`}
                </p>
                <Link href="/produits">
                  <Button icon={<ArrowRight className="w-4 h-4" />}>
                    Configurer un produit
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredQuotes.map((quote, index) => {
              const daysLeft = quote.dateExpiration
                ? differenceInDays(new Date(quote.dateExpiration), new Date())
                : null;
              const isExpired = daysLeft !== null && daysLeft < 0;
              const isUrgent = daysLeft !== null && daysLeft <= 5 && daysLeft >= 0;

              return (
                <motion.div
                  key={quote.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Card variant="elevated" hover>
                    <CardContent className="p-0">
                      <Link href={`/compte/devis/${quote.id}`}>
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            {/* Info principale */}
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                                <Package className="w-6 h-6 text-blue-corporate" />
                              </div>
                              <div>
                                <div className="flex items-center gap-3 mb-1">
                                  <h3 className="font-semibold text-navy-dark">
                                    {quote.numero}
                                  </h3>
                                  <span
                                    className={cn(
                                      "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium",
                                      quoteStatusColors[quote.status]
                                    )}
                                  >
                                    {getStatusIcon(quote.status)}
                                    {quoteStatusLabels[quote.status]}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {quote.productFamily} -{" "}
                                  {quote.itemsCount} article{quote.itemsCount > 1 ? "s" : ""}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  Demandé le{" "}
                                  {format(new Date(quote.dateDemande), "d MMMM yyyy", {
                                    locale: fr,
                                  })}
                                </p>
                              </div>
                            </div>

                            {/* Prix et expiration */}
                            <div className="flex items-center gap-6">
                              {/* Expiration */}
                              {quote.dateExpiration && quote.status !== "accepte" && quote.status !== "refuse" && (
                                <div className="text-right">
                                  <p className="text-xs text-gray-400">Expire dans</p>
                                  <p
                                    className={cn(
                                      "text-sm font-medium",
                                      isExpired
                                        ? "text-gray-400"
                                        : isUrgent
                                        ? "text-amber-600"
                                        : "text-gray-600"
                                    )}
                                  >
                                    {isExpired
                                      ? "Expiré"
                                      : `${daysLeft} jour${daysLeft && daysLeft > 1 ? "s" : ""}`}
                                  </p>
                                </div>
                              )}

                              {/* Prix */}
                              <div className="text-right">
                                <p className="text-xs text-gray-400">Total TTC</p>
                                <p className="text-lg font-bold text-navy-dark">
                                  {quote.totalTTC.toLocaleString("fr-FR")} €
                                </p>
                              </div>

                              {/* Flèche */}
                              <ArrowRight className="w-5 h-5 text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Actions rapides */}
                      {(quote.status === "envoye") && (
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                          <p className="text-sm text-gray-600">
                            <AlertCircle className="w-4 h-4 inline mr-1 text-amber-500" />
                            Ce devis attend votre réponse
                          </p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              icon={<Download className="w-4 h-4" />}
                            >
                              PDF
                            </Button>
                            <Button size="sm" icon={<CheckCircle2 className="w-4 h-4" />}>
                              Accepter
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card variant="default" className="bg-gradient-to-r from-navy-dark to-blue-corporate">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h3 className="font-semibold mb-1">Nouveau projet ?</h3>
                <p className="text-white/70 text-sm">
                  Configurez votre prochain ouvrage et recevez un devis personnalisé.
                </p>
              </div>
              <Link href="/produits">
                <Button
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Configurer un produit
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}


