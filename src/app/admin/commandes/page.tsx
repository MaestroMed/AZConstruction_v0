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

const mockOrders: Order[] = [
  {
    id: "1",
    numero: "ORD-2024-0156",
    user: { prenom: "Jean", nom: "Dupont", email: "jean.dupont@email.com", type: "client_particulier" },
    dateCommande: new Date("2024-12-15T10:30:00"),
    statusCommande: "en_preparation",
    statusPaiement: "paye",
    totalTTC: 3450,
    itemsCount: 1,
  },
  {
    id: "2",
    numero: "ORD-2024-0155",
    user: { raisonSociale: "SARL Martin Construction", email: "contact@martin-construction.fr", type: "client_pro" },
    dateCommande: new Date("2024-12-15T07:15:00"),
    statusCommande: "payee",
    statusPaiement: "paye",
    totalTTC: 8920,
    itemsCount: 5,
  },
  {
    id: "3",
    numero: "ORD-2024-0154",
    user: { prenom: "Marie", nom: "Lambert", email: "marie.lambert@email.com", type: "client_particulier" },
    dateCommande: new Date("2024-12-14T14:20:00"),
    statusCommande: "en_fabrication",
    statusPaiement: "paye",
    totalTTC: 12500,
    itemsCount: 1,
  },
  {
    id: "4",
    numero: "ORD-2024-0153",
    user: { raisonSociale: "SAS Habitat Pro", email: "pro@habitat-pro.fr", type: "client_pro" },
    dateCommande: new Date("2024-12-14T09:45:00"),
    statusCommande: "expediee",
    statusPaiement: "paye",
    totalTTC: 4780,
    itemsCount: 1,
  },
  {
    id: "5",
    numero: "ORD-2024-0152",
    user: { prenom: "François", nom: "Petit", email: "f.petit@email.com", type: "client_particulier" },
    dateCommande: new Date("2024-12-13T16:00:00"),
    statusCommande: "livree",
    statusPaiement: "paye",
    totalTTC: 1950,
    itemsCount: 1,
  },
  {
    id: "6",
    numero: "ORD-2024-0151",
    user: { prenom: "Claire", nom: "Moreau", email: "c.moreau@email.com", type: "client_particulier" },
    dateCommande: new Date("2024-12-12T11:30:00"),
    statusCommande: "en_attente_paiement",
    statusPaiement: "en_attente",
    totalTTC: 2890,
    itemsCount: 2,
  },
];

const statuses = [
  { id: "all", label: "Toutes", count: 6 },
  { id: "en_attente_paiement", label: "En attente", count: 1 },
  { id: "payee", label: "Payées", count: 1 },
  { id: "en_preparation", label: "En préparation", count: 1 },
  { id: "en_fabrication", label: "En fabrication", count: 1 },
  { id: "expediee", label: "Expédiées", count: 1 },
  { id: "livree", label: "Livrées", count: 1 },
];

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
  const [orders] = React.useState<Order[]>(mockOrders);
  const [selectedStatus, setSelectedStatus] = React.useState("all");

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

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredOrders}
        searchPlaceholder="Rechercher une commande..."
        onExport={() => console.log("Export orders")}
      />
    </div>
  );
}


