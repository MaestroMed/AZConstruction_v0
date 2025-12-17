"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Eye, Edit, CheckCircle, XCircle, Mail, MoreVertical } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/admin/ui/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

interface Client {
  id: string;
  type: "client_particulier" | "client_pro";
  email: string;
  nom?: string;
  prenom?: string;
  raisonSociale?: string;
  siret?: string;
  telephone?: string;
  remisePercent?: number;
  validated: boolean;
  active: boolean;
  createdAt: Date;
  lastLogin?: Date;
  ordersCount: number;
  totalSpent: number;
}

const mockClients: Client[] = [
  {
    id: "1",
    type: "client_particulier",
    email: "jean.dupont@email.com",
    nom: "Dupont",
    prenom: "Jean",
    telephone: "06 12 34 56 78",
    validated: true,
    active: true,
    createdAt: new Date("2024-01-15"),
    lastLogin: new Date("2024-12-15"),
    ordersCount: 3,
    totalSpent: 8450,
  },
  {
    id: "2",
    type: "client_pro",
    email: "contact@martin-construction.fr",
    nom: "Martin",
    raisonSociale: "SARL Martin Construction",
    siret: "123 456 789 00012",
    telephone: "03 20 12 34 56",
    remisePercent: 15,
    validated: true,
    active: true,
    createdAt: new Date("2023-06-20"),
    lastLogin: new Date("2024-12-15"),
    ordersCount: 24,
    totalSpent: 156780,
  },
  {
    id: "3",
    type: "client_particulier",
    email: "marie.lambert@email.com",
    nom: "Lambert",
    prenom: "Marie",
    telephone: "06 98 76 54 32",
    validated: true,
    active: true,
    createdAt: new Date("2024-03-10"),
    lastLogin: new Date("2024-12-14"),
    ordersCount: 2,
    totalSpent: 15600,
  },
  {
    id: "4",
    type: "client_pro",
    email: "pro@habitat-pro.fr",
    raisonSociale: "SAS Habitat Pro",
    siret: "987 654 321 00023",
    telephone: "05 56 78 90 12",
    remisePercent: 20,
    validated: true,
    active: true,
    createdAt: new Date("2023-02-15"),
    lastLogin: new Date("2024-12-14"),
    ordersCount: 45,
    totalSpent: 287500,
  },
  {
    id: "5",
    type: "client_particulier",
    email: "f.petit@email.com",
    nom: "Petit",
    prenom: "François",
    telephone: "06 45 67 89 01",
    validated: true,
    active: true,
    createdAt: new Date("2024-06-05"),
    lastLogin: new Date("2024-12-13"),
    ordersCount: 1,
    totalSpent: 1950,
  },
  {
    id: "6",
    type: "client_pro",
    email: "contact@batiment-plus.fr",
    raisonSociale: "EURL Bâtiment Plus",
    siret: "456 789 123 00034",
    telephone: "04 91 23 45 67",
    remisePercent: 10,
    validated: false,
    active: true,
    createdAt: new Date("2024-12-10"),
    ordersCount: 0,
    totalSpent: 0,
  },
];

const tabs = [
  { id: "all", label: "Tous", count: 6 },
  { id: "particulier", label: "Particuliers", count: 3 },
  { id: "pro", label: "Professionnels", count: 3 },
  { id: "pending", label: "En attente", count: 1 },
];

export default function ClientsPage() {
  const [clients] = React.useState<Client[]>(mockClients);
  const [selectedTab, setSelectedTab] = React.useState("all");

  const filteredClients = React.useMemo(() => {
    switch (selectedTab) {
      case "particulier":
        return clients.filter((c) => c.type === "client_particulier");
      case "pro":
        return clients.filter((c) => c.type === "client_pro");
      case "pending":
        return clients.filter((c) => !c.validated);
      default:
        return clients;
    }
  }, [clients, selectedTab]);

  const handleValidate = (id: string) => {
    toast.success("Compte professionnel validé");
  };

  const handleReject = (id: string) => {
    toast.error("Compte professionnel refusé");
  };

  const columns: ColumnDef<Client>[] = [
    {
      accessorKey: "nom",
      header: "Client",
      cell: ({ row }) => {
        const client = row.original;
        const name = client.raisonSociale || `${client.prenom} ${client.nom}`;
        const isPro = client.type === "client_pro";
        return (
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                isPro ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/clients/${client.id}`}
                  className="font-medium text-gray-900 hover:text-cyan-600"
                >
                  {name}
                </Link>
                {isPro && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                    PRO
                  </span>
                )}
                {!client.validated && (
                  <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                    Non validé
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{client.email}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "ordersCount",
      header: "Commandes",
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.ordersCount}</span>
      ),
    },
    {
      accessorKey: "totalSpent",
      header: "CA Total",
      cell: ({ row }) => (
        <span className="font-semibold text-gray-900">
          {row.original.totalSpent.toLocaleString("fr-FR")} €
        </span>
      ),
    },
    {
      accessorKey: "remisePercent",
      header: "Remise",
      cell: ({ row }) => {
        const remise = row.original.remisePercent;
        return remise ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
            -{remise}%
          </span>
        ) : (
          <span className="text-gray-400">-</span>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Inscrit le",
      cell: ({ row }) =>
        format(new Date(row.original.createdAt), "dd MMM yyyy", { locale: fr }),
    },
    {
      accessorKey: "lastLogin",
      header: "Dernière connexion",
      cell: ({ row }) => {
        const lastLogin = row.original.lastLogin;
        return lastLogin ? (
          format(new Date(lastLogin), "dd/MM/yyyy HH:mm")
        ) : (
          <span className="text-gray-400">Jamais</span>
        );
      },
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const client = row.original;
        return (
          <div className="flex items-center justify-end gap-1">
            {!client.validated && (
              <>
                <button
                  onClick={() => handleValidate(client.id)}
                  className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Valider le compte"
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleReject(client.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Refuser"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              </>
            )}
            <Link
              href={`/admin/clients/${client.id}`}
              className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
              title="Voir la fiche"
            >
              <Eye className="w-4 h-4" />
            </Link>
            <button
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Envoyer un email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-500 mt-1">
            Gérez vos clients particuliers et professionnels
          </p>
        </div>
        <Link
          href="/admin/clients/nouveau"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouveau client
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedTab === tab.id
                ? "bg-cyan-500 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                selectedTab === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Pending validation alert */}
      {selectedTab === "pending" && filteredClients.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <span className="text-amber-600 font-bold">!</span>
          </div>
          <div>
            <p className="font-medium text-amber-800">
              {filteredClients.length} compte{filteredClients.length > 1 ? "s" : ""} professionnel{filteredClients.length > 1 ? "s" : ""} en attente de validation
            </p>
            <p className="text-sm text-amber-600 mt-1">
              Vérifiez les informations SIRET avant de valider les comptes.
            </p>
          </div>
        </div>
      )}

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredClients}
        searchPlaceholder="Rechercher un client..."
        onExport={() => console.log("Export clients")}
      />
    </div>
  );
}


