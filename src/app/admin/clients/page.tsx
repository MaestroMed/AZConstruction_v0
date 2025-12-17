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

export default function ClientsPage() {
  const [clients, setClients] = React.useState<Client[]>([]);
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [loading, setLoading] = React.useState(true);

  // Charger les clients depuis localStorage
  React.useEffect(() => {
    const loadClients = () => {
      try {
        const saved = localStorage.getItem("az_clients");
        if (saved) {
          const parsed = JSON.parse(saved);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setClients(parsed.map((c: any) => ({
            ...c,
            createdAt: new Date(c.createdAt),
            lastLogin: c.lastLogin ? new Date(c.lastLogin) : undefined,
            type: c.type === "professionnel" || c.type === "client_pro" ? "client_pro" : "client_particulier",
            ordersCount: c.ordersCount || 0,
            totalSpent: c.totalSpent || 0,
            validated: c.validated !== false,
            active: c.active !== false,
          })));
        }
      } catch (e) {
        console.error("Erreur chargement clients:", e);
      } finally {
        setLoading(false);
      }
    };
    loadClients();
  }, []);

  // Compteurs dynamiques
  const counts = React.useMemo(() => ({
    all: clients.length,
    particulier: clients.filter((c) => c.type === "client_particulier").length,
    pro: clients.filter((c) => c.type === "client_pro").length,
    pending: clients.filter((c) => !c.validated).length,
  }), [clients]);

  const tabs = [
    { id: "all", label: "Tous", count: counts.all },
    { id: "particulier", label: "Particuliers", count: counts.particulier },
    { id: "pro", label: "Professionnels", count: counts.pro },
    { id: "pending", label: "En attente", count: counts.pending },
  ];

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

      {/* Table ou état vide */}
      {loading ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Chargement...</p>
        </div>
      ) : filteredClients.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun client</h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            {selectedTab === "all" 
              ? "Commencez par ajouter votre premier client."
              : "Aucun client dans cette catégorie."}
          </p>
          {selectedTab === "all" && (
            <Link
              href="/admin/clients/nouveau"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Ajouter un client
            </Link>
          )}
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredClients}
          searchPlaceholder="Rechercher un client..."
          onExport={() => console.log("Export clients")}
        />
      )}
    </div>
  );
}


