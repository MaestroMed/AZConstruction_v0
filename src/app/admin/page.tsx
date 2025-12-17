"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  FileText,
  Users,
  Euro,
  TrendingUp,
  Package,
  Clock,
  ArrowRight,
  Download,
  Calendar,
  Loader2,
} from "lucide-react";
import { StatsCard, StatsGrid } from "@/components/admin/ui/StatsCard";
import {
  ChartCard,
  RevenueChart,
  CategoryPieChart,
  ProductBarChart,
} from "@/components/admin/ui/Charts";
import { StatusBadge } from "@/components/admin/ui/DataTable";
import { toast } from "sonner";

// Données par période
const dataByPeriod = {
  day: {
    stats: { ca: "2 450 €", commandes: 8, devis: 3, clients: 2 },
    changes: { ca: 5.2, commandes: 12, devis: -10, clients: 50 },
    revenue: [
      { name: "00h", ca: 0, commandes: 0 },
      { name: "04h", ca: 0, commandes: 0 },
      { name: "08h", ca: 450, commandes: 2 },
      { name: "10h", ca: 890, commandes: 3 },
      { name: "12h", ca: 1200, commandes: 4 },
      { name: "14h", ca: 1650, commandes: 5 },
      { name: "16h", ca: 2100, commandes: 7 },
      { name: "18h", ca: 2450, commandes: 8 },
    ],
  },
  week: {
    stats: { ca: "18 920 €", commandes: 32, devis: 8, clients: 6 },
    changes: { ca: 8.5, commandes: 15, devis: 0, clients: 20 },
    revenue: [
      { name: "Lun", ca: 2800, commandes: 5 },
      { name: "Mar", ca: 3200, commandes: 6 },
      { name: "Mer", ca: 2500, commandes: 4 },
      { name: "Jeu", ca: 3800, commandes: 7 },
      { name: "Ven", ca: 4200, commandes: 8 },
      { name: "Sam", ca: 2420, commandes: 2 },
      { name: "Dim", ca: 0, commandes: 0 },
    ],
  },
  month: {
    stats: { ca: "72 450 €", commandes: 98, devis: 12, clients: 24 },
    changes: { ca: 12.5, commandes: 8.2, devis: -5, clients: 15.3 },
    revenue: [
      { name: "Sem 1", ca: 15000, commandes: 22 },
      { name: "Sem 2", ca: 18500, commandes: 25 },
      { name: "Sem 3", ca: 21000, commandes: 28 },
      { name: "Sem 4", ca: 17950, commandes: 23 },
    ],
  },
  year: {
    stats: { ca: "612 800 €", commandes: 840, devis: 156, clients: 312 },
    changes: { ca: 18.2, commandes: 22.5, devis: 12, clients: 35 },
    revenue: [
      { name: "Jan", ca: 32000, commandes: 45 },
      { name: "Fév", ca: 38000, commandes: 52 },
      { name: "Mar", ca: 45000, commandes: 61 },
      { name: "Avr", ca: 42000, commandes: 58 },
      { name: "Mai", ca: 51000, commandes: 72 },
      { name: "Jui", ca: 48000, commandes: 65 },
      { name: "Jul", ca: 55000, commandes: 78 },
      { name: "Aoû", ca: 43000, commandes: 55 },
      { name: "Sep", ca: 62000, commandes: 85 },
      { name: "Oct", ca: 58000, commandes: 79 },
      { name: "Nov", ca: 67000, commandes: 92 },
      { name: "Déc", ca: 72000, commandes: 98 },
    ],
  },
};

const categoryData = [
  { name: "Portes", value: 35 },
  { name: "Garde-corps", value: 25 },
  { name: "Escaliers", value: 18 },
  { name: "Fenêtres", value: 15 },
  { name: "Grilles", value: 12 },
  { name: "Portails", value: 18 },
  { name: "Clôtures", value: 10 },
];

const topProducts = [
  { name: "Porte Jansen Design", value: 156 },
  { name: "Garde-corps Verre", value: 124 },
  { name: "Escalier Hélicoïdal", value: 89 },
  { name: "Fenêtre Atelier", value: 76 },
  { name: "Grille Acoustique", value: 52 },
];

const recentOrders = [
  {
    id: "ORD-2024-0156",
    client: "Jean Dupont",
    produit: "Porte Jansen Premium",
    montant: "3 450 €",
    status: "en_preparation",
    date: "Il y a 2h",
  },
  {
    id: "ORD-2024-0155",
    client: "SARL Martin Construction",
    produit: "Garde-corps Inox (x5)",
    montant: "8 920 €",
    status: "payee",
    date: "Il y a 5h",
  },
  {
    id: "ORD-2024-0154",
    client: "Marie Lambert",
    produit: "Escalier Colimaçon",
    montant: "12 500 €",
    status: "en_fabrication",
    date: "Hier",
  },
  {
    id: "ORD-2024-0153",
    client: "SAS Habitat Pro",
    produit: "Fenêtres Atelier (5 unités)",
    montant: "4 780 €",
    status: "expediee",
    date: "Hier",
  },
];

const pendingQuotes = [
  {
    id: "DEV-2024-0089",
    client: "Antoine Bernard",
    montant: "5 600 €",
    expire: "Dans 3 jours",
  },
  {
    id: "DEV-2024-0088",
    client: "EURL Bâtiment Plus",
    montant: "24 350 €",
    expire: "Dans 5 jours",
  },
  {
    id: "DEV-2024-0087",
    client: "Sophie Martin",
    montant: "2 890 €",
    expire: "Dans 7 jours",
  },
];

const getStatusVariant = (status: string) => {
  const map: Record<string, "success" | "warning" | "error" | "info" | "default"> = {
    payee: "success",
    en_preparation: "info",
    en_fabrication: "warning",
    expediee: "success",
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
    en_attente_paiement: "En attente",
    annulee: "Annulée",
  };
  return map[status] || status;
};

type Period = "day" | "week" | "month" | "year";

export default function AdminDashboard() {
  const [period, setPeriod] = React.useState<Period>("month");
  const [loading, setLoading] = React.useState(false);
  const [exporting, setExporting] = React.useState(false);

  const currentData = dataByPeriod[period];

  const handlePeriodChange = (newPeriod: Period) => {
    setLoading(true);
    setPeriod(newPeriod);
    // Simulation d'un chargement
    setTimeout(() => setLoading(false), 300);
  };

  const handleExport = async () => {
    setExporting(true);
    
    try {
      // Créer les données CSV
      const headers = ["Période", "Chiffre d'affaires", "Commandes"];
      const rows = currentData.revenue.map((item) => [
        item.name,
        item.ca.toString(),
        item.commandes.toString(),
      ]);

      const csvContent = [
        headers.join(","),
        ...rows.map((row) => row.join(",")),
      ].join("\n");

      // Créer et télécharger le fichier
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `az-construction-rapport-${period}-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("Rapport exporté avec succès");
    } catch (error) {
      console.error("Erreur export:", error);
      toast.error("Erreur lors de l'export");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">
            Vue d&apos;ensemble de votre activité
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Period selector */}
          <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
            {(["day", "week", "month", "year"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => handlePeriodChange(p)}
                disabled={loading}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  period === p
                    ? "bg-cyan-500 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {p === "day"
                  ? "Jour"
                  : p === "week"
                  ? "Semaine"
                  : p === "month"
                  ? "Mois"
                  : "Année"}
              </button>
            ))}
          </div>
          <button 
            onClick={handleExport}
            disabled={exporting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {exporting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            Exporter
          </button>
        </div>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
        </div>
      )}

      {/* KPIs */}
      <StatsGrid>
        <StatsCard
          title="Chiffre d'affaires"
          value={currentData.stats.ca}
          change={currentData.changes.ca}
          icon={Euro}
          variant="primary"
        />
        <StatsCard
          title="Commandes"
          value={currentData.stats.commandes.toString()}
          change={currentData.changes.commandes}
          icon={ShoppingCart}
          variant="success"
        />
        <StatsCard
          title="Devis en attente"
          value={currentData.stats.devis.toString()}
          change={currentData.changes.devis}
          icon={FileText}
          variant="warning"
        />
        <StatsCard
          title="Nouveaux clients"
          value={currentData.stats.clients.toString()}
          change={currentData.changes.clients}
          icon={Users}
        />
      </StatsGrid>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <ChartCard
          title="Évolution du CA"
          subtitle={`Chiffre d'affaires ${period === "day" ? "horaire" : period === "week" ? "quotidien" : period === "month" ? "hebdomadaire" : "mensuel"}`}
          className="lg:col-span-2"
          action={
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {period === "day" ? "Aujourd'hui" : period === "week" ? "Cette semaine" : period === "month" ? "Ce mois" : "2024"}
            </div>
          }
        >
          <RevenueChart
            data={currentData.revenue}
            lines={[
              { key: "ca", name: "Chiffre d'affaires", color: "#00d4ff" },
            ]}
            height={320}
          />
        </ChartCard>

        {/* Category Pie */}
        <ChartCard title="Répartition par catégorie" subtitle="Part des ventes">
          <CategoryPieChart data={categoryData} height={280} />
        </ChartCard>
      </div>

      {/* Second Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Products */}
        <ChartCard title="Top 5 Produits" subtitle="Les plus vendus ce mois">
          <ProductBarChart data={topProducts} layout="vertical" height={280} />
        </ChartCard>

        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Commandes récentes
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Les 4 dernières commandes
              </p>
            </div>
            <Link
              href="/admin/commandes"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => window.location.href = `/admin/commandes/${order.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Package className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">
                      {order.client} • {order.produit}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge
                    status={getStatusLabel(order.status)}
                    variant={getStatusVariant(order.status)}
                  />
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.montant}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pending Quotes */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Devis en attente
              </h3>
              <p className="text-sm text-gray-500 mt-1">À relancer</p>
            </div>
            <Link
              href="/admin/devis"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {pendingQuotes.map((quote) => (
              <div
                key={quote.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => window.location.href = `/admin/devis/${quote.id}`}
              >
                <div>
                  <p className="font-medium text-gray-900">{quote.id}</p>
                  <p className="text-sm text-gray-500">{quote.client}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{quote.montant}</p>
                  <div className="flex items-center gap-1 text-xs text-amber-600">
                    <Clock className="w-3 h-3" />
                    {quote.expire}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Actions rapides
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Nouveau produit", href: "/admin/produits", icon: Package },
              { label: "Nouveau devis", href: "/admin/devis", icon: FileText },
              { label: "Ajouter client", href: "/admin/clients", icon: Users },
              { label: "Réalisation", href: "/admin/realisations", icon: TrendingUp },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-cyan-50 rounded-xl transition-colors group"
              >
                <action.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-600" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-700 text-center">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Activité récente
          </h3>
          <div className="space-y-4">
            {[
              {
                action: "Nouveau client inscrit",
                detail: "SARL Bâtiment Pro",
                time: "Il y a 15 min",
                type: "user",
              },
              {
                action: "Commande payée",
                detail: "ORD-2024-0155",
                time: "Il y a 1h",
                type: "payment",
              },
              {
                action: "Devis accepté",
                detail: "DEV-2024-0085",
                time: "Il y a 2h",
                type: "quote",
              },
              {
                action: "Nouveau message",
                detail: "De: Jean Dupont",
                time: "Il y a 3h",
                type: "message",
              },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "payment"
                      ? "bg-emerald-500"
                      : activity.type === "quote"
                      ? "bg-blue-500"
                      : activity.type === "user"
                      ? "bg-purple-500"
                      : "bg-amber-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
