"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  MessageSquare,
  Image,
  TrendingUp,
  Package,
  ArrowRight,
  Loader2,
  RefreshCw,
  Mail,
  Flame,
  Users,
  CheckCircle2,
} from "lucide-react";

interface DashboardData {
  kpis: {
    contactNew: number;
    contactTotal: number;
    quotesTotal: number;
    realizationsCount: number;
    thermolaquageDemands: number;
  };
  recentContacts: {
    id: string;
    nom: string;
    email: string;
    sujet: string;
    type: string;
    status: string;
    createdAt: string;
  }[];
  recentQuotes: {
    id: string;
    numero: string;
    status: string;
    totalTTC: number;
    createdAt: string;
    user: { nom?: string; prenom?: string; email?: string } | null;
  }[];
}

const STATUS_COLORS: Record<string, string> = {
  nouveau: "bg-blue-100 text-blue-700",
  lu: "bg-yellow-100 text-yellow-700",
  traite: "bg-green-100 text-green-700",
  archive: "bg-gray-100 text-gray-500",
  en_attente: "bg-yellow-100 text-yellow-700",
  accepte: "bg-green-100 text-green-700",
  refuse: "bg-red-100 text-red-600",
};

const STATUS_LABELS: Record<string, string> = {
  nouveau: "Nouveau",
  lu: "Lu",
  traite: "Traité",
  archive: "Archivé",
  en_attente: "En attente",
  accepte: "Accepté",
  refuse: "Refusé",
};

export default function AdminDashboard() {
  const [data, setData] = React.useState<DashboardData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/stats");
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      } else {
        setError("Erreur de chargement");
      }
    } catch {
      setError("Impossible de charger les données");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { loadData(); }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-gray-500">{error || "Données non disponibles"}</p>
        <button
          onClick={loadData}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm"
        >
          <RefreshCw className="w-4 h-4" /> Réessayer
        </button>
      </div>
    );
  }

  const kpis = [
    {
      label: "Messages nouveaux",
      value: data.kpis.contactNew,
      total: `${data.kpis.contactTotal} total`,
      icon: MessageSquare,
      color: "text-blue-600",
      bg: "bg-blue-50",
      href: "/admin/contact",
      urgent: data.kpis.contactNew > 0,
    },
    {
      label: "Demandes de devis",
      value: data.kpis.quotesTotal,
      total: "soumissions reçues",
      icon: FileText,
      color: "text-amber-600",
      bg: "bg-amber-50",
      href: "/admin/devis",
    },
    {
      label: "Demandes thermolaquage",
      value: data.kpis.thermolaquageDemands,
      total: "demandes reçues",
      icon: Flame,
      color: "text-orange-600",
      bg: "bg-orange-50",
      href: "/admin/thermolaquage/demandes",
    },
    {
      label: "Réalisations publiées",
      value: data.kpis.realizationsCount,
      total: "dans le portfolio",
      icon: Image,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      href: "/admin/realisations",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">Vue d&apos;ensemble de votre activité</p>
        </div>
        <button
          onClick={loadData}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Link
            key={kpi.label}
            href={kpi.href}
            className={`relative bg-white rounded-xl border p-5 hover:shadow-md transition-all ${
              kpi.urgent ? "border-blue-300 ring-1 ring-blue-200" : "border-gray-200"
            }`}
          >
            {kpi.urgent && (
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
            )}
            <div className={`inline-flex p-2.5 rounded-xl ${kpi.bg} mb-3`}>
              <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
            </div>
            <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
            <p className="text-sm font-medium text-gray-700 mt-1">{kpi.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{kpi.total}</p>
          </Link>
        ))}
      </div>

      {/* Main content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent contacts */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Messages récents</h3>
              <p className="text-xs text-gray-500 mt-0.5">Formulaire de contact</p>
            </div>
            <Link
              href="/admin/contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Voir tout <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {data.recentContacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Mail className="w-10 h-10 mb-2 opacity-30" />
              <p className="text-sm">Aucun message pour le moment</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {data.recentContacts.map((msg) => (
                <Link
                  key={msg.id}
                  href="/admin/contact"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-gray-600">
                        {msg.nom.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{msg.nom}</p>
                      <p className="text-xs text-gray-500 truncate">{msg.sujet}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[msg.status] || "bg-gray-100 text-gray-500"}`}>
                      {STATUS_LABELS[msg.status] || msg.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Actions rapides</h3>
          <div className="space-y-2">
            {[
              { label: "Voir les messages", href: "/admin/contact", icon: MessageSquare, color: "text-blue-500" },
              { label: "Ajouter une réalisation", href: "/admin/realisations", icon: Image, color: "text-emerald-500" },
              { label: "Images du site", href: "/admin/parametres/images", icon: Package, color: "text-purple-500" },
              { label: "Paramètres généraux", href: "/admin/parametres", icon: TrendingUp, color: "text-orange-500" },
              { label: "Réalisations pro", href: "/admin/parametres/realisations-pro", icon: Users, color: "text-cyan-500" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <action.icon className={`w-5 h-5 ${action.color}`} />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {action.label}
                </span>
                <ArrowRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent quotes */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Demandes de devis récentes</h3>
            <p className="text-xs text-gray-500 mt-0.5">Soumissions via le formulaire</p>
          </div>
          <Link
            href="/admin/devis"
            className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700"
          >
            Voir tout <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        {data.recentQuotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <FileText className="w-10 h-10 mb-2 opacity-30" />
            <p className="text-sm">Aucun devis soumis pour le moment</p>
            <p className="text-xs mt-1">Les demandes du formulaire apparaîtront ici</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100 bg-gray-50">
                  <th className="px-5 py-3 font-medium text-gray-500">Numéro</th>
                  <th className="px-5 py-3 font-medium text-gray-500">Client</th>
                  <th className="px-5 py-3 font-medium text-gray-500">Montant TTC</th>
                  <th className="px-5 py-3 font-medium text-gray-500">Statut</th>
                  <th className="px-5 py-3 font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.recentQuotes.map((quote) => {
                  const clientName = quote.user
                    ? `${quote.user.prenom || ""} ${quote.user.nom || ""}`.trim() || quote.user.email
                    : "—";
                  return (
                    <tr key={quote.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3 font-mono text-xs text-gray-600">{quote.numero}</td>
                      <td className="px-5 py-3 text-gray-900">{clientName}</td>
                      <td className="px-5 py-3 font-semibold text-gray-900">
                        {quote.totalTTC ? `${quote.totalTTC.toLocaleString("fr-FR")} €` : "—"}
                      </td>
                      <td className="px-5 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${STATUS_COLORS[quote.status] || "bg-gray-100 text-gray-500"}`}>
                          {STATUS_LABELS[quote.status] || quote.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-500 text-xs">
                        {new Date(quote.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-700">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
        <div>
          <strong>Données en temps réel.</strong> Ce tableau de bord affiche les vrais messages et devis reçus.
          Les statistiques de chiffre d'affaires et commandes Stripe seront disponibles après activation de Stripe.
        </div>
      </div>
    </div>
  );
}
