"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Eye, Download, Copy, ShoppingCart, Mail, Clock } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/admin/ui/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { format, differenceInDays } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

interface Quote {
  id: string;
  numero: string;
  user: {
    nom?: string;
    prenom?: string;
    raisonSociale?: string;
    email: string;
    type: string;
  };
  dateDemande: Date;
  dateExpiration: Date;
  status: string;
  totalTTC: number;
  itemsCount: number;
}

const getStatusVariant = (status: string): "success" | "warning" | "error" | "info" | "default" => {
  const map: Record<string, "success" | "warning" | "error" | "info" | "default"> = {
    brouillon: "default",
    en_attente: "warning",
    envoye: "info",
    accepte: "success",
    refuse: "error",
    expire: "default",
  };
  return map[status] || "default";
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = {
    brouillon: "Brouillon",
    en_attente: "En attente",
    envoye: "Envoyé",
    accepte: "Accepté",
    refuse: "Refusé",
    expire: "Expiré",
  };
  return map[status] || status;
};

export default function QuotesPage() {
  const [quotes, setQuotes] = React.useState<Quote[]>([]);
  const [selectedStatus, setSelectedStatus] = React.useState("all");
  const [loading, setLoading] = React.useState(true);

  // Charger les devis depuis localStorage
  React.useEffect(() => {
    const loadQuotes = () => {
      try {
        const saved = localStorage.getItem("az_quotes");
        if (saved) {
          const parsed = JSON.parse(saved);
          setQuotes(parsed.map((q: { id: string; numero: string; clientName: string; clientEmail: string; clientType: string; createdAt: string; expiresAt: string; status: string; totalTTC: number; items: unknown[] }) => ({
            id: q.id,
            numero: q.numero,
            user: {
              nom: q.clientName,
              email: q.clientEmail,
              type: q.clientType === "professionnel" ? "client_pro" : "client_particulier",
            },
            dateDemande: new Date(q.createdAt),
            dateExpiration: new Date(q.expiresAt),
            status: q.status,
            totalTTC: q.totalTTC,
            itemsCount: q.items?.length || 0,
          })));
        }
      } catch (e) {
        console.error("Erreur chargement devis:", e);
      } finally {
        setLoading(false);
      }
    };
    loadQuotes();
  }, []);

  // Compteurs dynamiques
  const counts = React.useMemo(() => ({
    all: quotes.length,
    brouillon: quotes.filter((q) => q.status === "brouillon").length,
    en_attente: quotes.filter((q) => q.status === "en_attente").length,
    envoye: quotes.filter((q) => q.status === "envoye").length,
    accepte: quotes.filter((q) => q.status === "accepte").length,
    refuse: quotes.filter((q) => q.status === "refuse").length,
    expire: quotes.filter((q) => q.status === "expire").length,
  }), [quotes]);

  const statuses = [
    { id: "all", label: "Tous", count: counts.all },
    { id: "brouillon", label: "Brouillons", count: counts.brouillon },
    { id: "en_attente", label: "En attente", count: counts.en_attente },
    { id: "envoye", label: "Envoyés", count: counts.envoye },
    { id: "accepte", label: "Acceptés", count: counts.accepte },
  ];

  const filteredQuotes = selectedStatus === "all"
    ? quotes
    : quotes.filter((q) => q.status === selectedStatus);

  const handleConvertToOrder = (id: string) => {
    toast.success("Devis converti en commande");
  };

  const handleSendEmail = (id: string) => {
    toast.success("Devis envoyé par email");
  };

  const handleDuplicate = (id: string) => {
    toast.success("Devis dupliqué");
  };

  const columns: ColumnDef<Quote>[] = [
    {
      accessorKey: "numero",
      header: "N° Devis",
      cell: ({ row }) => (
        <Link
          href={`/admin/devis/${row.original.id}`}
          className="font-medium text-cyan-600 hover:text-cyan-700"
        >
          {row.original.numero}
        </Link>
      ),
    },
    {
      accessorKey: "user",
      header: "Client",
      cell: ({ row }) => {
        const user = row.original.user;
        const name = user.raisonSociale || `${user.prenom} ${user.nom}`;
        const isPro = user.type === "client_pro";
        return (
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{name}</span>
              {isPro && (
                <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                  PRO
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "dateDemande",
      header: "Date",
      cell: ({ row }) => (
        <span className="text-gray-600">
          {format(new Date(row.original.dateDemande), "dd MMM yyyy", { locale: fr })}
        </span>
      ),
    },
    {
      accessorKey: "dateExpiration",
      header: "Expiration",
      cell: ({ row }) => {
        const daysLeft = differenceInDays(new Date(row.original.dateExpiration), new Date());
        const isExpired = daysLeft < 0;
        const isUrgent = daysLeft <= 3 && daysLeft >= 0;
        return (
          <div className="flex items-center gap-1">
            <Clock className={`w-4 h-4 ${isExpired ? "text-gray-400" : isUrgent ? "text-amber-500" : "text-gray-400"}`} />
            <span className={`text-sm ${isExpired ? "text-gray-400" : isUrgent ? "text-amber-600 font-medium" : "text-gray-600"}`}>
              {isExpired ? "Expiré" : `${daysLeft} jour${daysLeft > 1 ? "s" : ""}`}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "totalTTC",
      header: "Total TTC",
      cell: ({ row }) => (
        <span className="font-semibold text-gray-900">
          {row.original.totalTTC.toLocaleString("fr-FR")} €
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Statut",
      cell: ({ row }) => (
        <StatusBadge
          status={getStatusLabel(row.original.status)}
          variant={getStatusVariant(row.original.status)}
        />
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/devis/${row.original.id}`}
            className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
            title="Voir / Éditer"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            onClick={() => handleSendEmail(row.original.id)}
            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Envoyer par email"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDuplicate(row.original.id)}
            className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            title="Dupliquer"
          >
            <Copy className="w-4 h-4" />
          </button>
          {row.original.status === "accepte" && (
            <button
              onClick={() => handleConvertToOrder(row.original.id)}
              className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              title="Convertir en commande"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Devis</h1>
          <p className="text-gray-500 mt-1">
            Gérez vos demandes de devis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Exporter
          </button>
          <Link
            href="/admin/devis/nouveau"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouveau devis
          </Link>
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {statuses.map((status) => (
          <button
            key={status.id}
            onClick={() => setSelectedStatus(status.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status.id
                ? "bg-cyan-500 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {status.label}
            <span
              className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                selectedStatus === status.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {status.count}
            </span>
          </button>
        ))}
      </div>

      {/* Table ou état vide */}
      {loading ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Chargement...</p>
        </div>
      ) : filteredQuotes.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun devis</h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            {selectedStatus === "all"
              ? "Créez votre premier devis pour un client."
              : "Aucun devis avec ce statut."}
          </p>
          {selectedStatus === "all" && (
            <Link
              href="/admin/devis/nouveau"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Créer un devis
            </Link>
          )}
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredQuotes}
          searchPlaceholder="Rechercher un devis..."
          onExport={() => console.log("Export quotes")}
        />
      )}
    </div>
  );
}


