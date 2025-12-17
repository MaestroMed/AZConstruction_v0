"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, Download, Filter, Truck, FileText } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/admin/ui/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Order {
  id: string;
  numero: string;
  user: {
    nom?: string;
    prenom?: string;
    raisonSociale?: string;
    email: string;
    type: string;
  };
  dateCommande: Date;
  statusCommande: string;
  statusPaiement: string;
  totalTTC: number;
  itemsCount: number;
}

const getStatusVariant = (status: string): "success" | "warning" | "error" | "info" | "default" => {
  const map: Record<string, "success" | "warning" | "error" | "info" | "default"> = {
    payee: "success",
    en_preparation: "info",
    en_fabrication: "warning",
    expediee: "success",
    livree: "success",
    en_attente_paiement: "warning",
    annulee: "error",
  };
  return map[status] || "default";
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = {
    payee: "Payée",
    en_preparation: "En préparation",
    en_fabrication: "En fabrication",
    expediee: "Expédiée",
    livree: "Livrée",
    en_attente_paiement: "En attente paiement",
    annulee: "Annulée",
  };
  return map[status] || status;
};

export default function OrdersPage() {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [selectedStatus, setSelectedStatus] = React.useState("all");
  const [loading, setLoading] = React.useState(true);

  // Charger les commandes depuis localStorage
  React.useEffect(() => {
    const loadOrders = () => {
      try {
        const saved = localStorage.getItem("az_orders");
        if (saved) {
          const parsed = JSON.parse(saved);
          setOrders(parsed.map((o: Order) => ({
            ...o,
            dateCommande: new Date(o.dateCommande),
          })));
        }
      } catch (e) {
        console.error("Erreur chargement commandes:", e);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  // Compteurs dynamiques
  const counts = React.useMemo(() => ({
    all: orders.length,
    en_attente_paiement: orders.filter((o) => o.statusCommande === "en_attente_paiement").length,
    payee: orders.filter((o) => o.statusCommande === "payee").length,
    en_preparation: orders.filter((o) => o.statusCommande === "en_preparation").length,
    en_fabrication: orders.filter((o) => o.statusCommande === "en_fabrication").length,
    expediee: orders.filter((o) => o.statusCommande === "expediee").length,
    livree: orders.filter((o) => o.statusCommande === "livree").length,
  }), [orders]);

  const statuses = [
    { id: "all", label: "Toutes", count: counts.all },
    { id: "en_attente_paiement", label: "En attente", count: counts.en_attente_paiement },
    { id: "payee", label: "Payées", count: counts.payee },
    { id: "en_preparation", label: "En préparation", count: counts.en_preparation },
    { id: "en_fabrication", label: "En fabrication", count: counts.en_fabrication },
    { id: "expediee", label: "Expédiées", count: counts.expediee },
    { id: "livree", label: "Livrées", count: counts.livree },
  ];

  const filteredOrders = selectedStatus === "all"
    ? orders
    : orders.filter((o) => o.statusCommande === selectedStatus);

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "numero",
      header: "N° Commande",
      cell: ({ row }) => (
        <Link
          href={`/admin/commandes/${row.original.id}`}
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
      accessorKey: "dateCommande",
      header: "Date",
      cell: ({ row }) => (
        <div>
          <p className="text-gray-900">
            {format(new Date(row.original.dateCommande), "dd MMM yyyy", { locale: fr })}
          </p>
          <p className="text-sm text-gray-500">
            {format(new Date(row.original.dateCommande), "HH:mm")}
          </p>
        </div>
      ),
    },
    {
      accessorKey: "itemsCount",
      header: "Articles",
      cell: ({ row }) => (
        <span className="text-gray-600">
          {row.original.itemsCount} article{row.original.itemsCount > 1 ? "s" : ""}
        </span>
      ),
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
      accessorKey: "statusCommande",
      header: "Statut",
      cell: ({ row }) => (
        <StatusBadge
          status={getStatusLabel(row.original.statusCommande)}
          variant={getStatusVariant(row.original.statusCommande)}
        />
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/commandes/${row.original.id}`}
            className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
            title="Voir le détail"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Générer facture"
          >
            <FileText className="w-4 h-4" />
          </button>
          {row.original.statusCommande === "expediee" && (
            <button
              className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              title="Suivi livraison"
            >
              <Truck className="w-4 h-4" />
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
          <h1 className="text-2xl font-bold text-gray-900">Commandes</h1>
          <p className="text-gray-500 mt-1">
            Gérez et suivez vos commandes clients
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          Exporter
        </button>
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
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune commande</h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            {selectedStatus === "all"
              ? "Les commandes apparaîtront ici lorsque des clients passeront commande."
              : "Aucune commande avec ce statut."}
          </p>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredOrders}
          searchPlaceholder="Rechercher une commande..."
          onExport={() => console.log("Export orders")}
        />
      )}
    </div>
  );
}


