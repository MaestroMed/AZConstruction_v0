"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building,
  User,
  Edit,
  ShoppingCart,
  FileText,
  Save,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { StatusBadge } from "@/components/admin/ui/DataTable";
import { Input, Switch } from "@/components/admin/ui/FormFields";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

// Mock client data
const mockClient = {
  id: "2",
  type: "client_pro",
  email: "contact@martin-construction.fr",
  nom: "Martin",
  raisonSociale: "SARL Martin Construction",
  siret: "123 456 789 00012",
  tvaIntra: "FR12345678901",
  telephone: "03 20 12 34 56",
  remisePercent: 15,
  validated: true,
  active: true,
  createdAt: new Date("2023-06-20"),
  lastLogin: new Date("2024-12-15"),
  addresses: [
    {
      id: "1",
      label: "Siège social",
      rue: "45 Avenue de l'Industrie",
      codePostal: "59000",
      ville: "Lille",
      isDefault: true,
    },
    {
      id: "2",
      label: "Entrepôt",
      rue: "Zone Industrielle Nord",
      codePostal: "59160",
      ville: "Lomme",
      isDefault: false,
    },
  ],
  orders: [
    { id: "2", numero: "ORD-2024-0155", date: new Date("2024-12-15"), total: 8920, status: "payee" },
    { id: "10", numero: "ORD-2024-0142", date: new Date("2024-11-28"), total: 15600, status: "livree" },
    { id: "15", numero: "ORD-2024-0128", date: new Date("2024-10-15"), total: 24350, status: "livree" },
  ],
  quotes: [
    { id: "2", numero: "DEV-2024-0088", date: new Date("2024-12-10"), total: 24350, status: "envoye" },
    { id: "8", numero: "DEV-2024-0075", date: new Date("2024-09-20"), total: 18500, status: "accepte" },
  ],
  stats: {
    totalOrders: 24,
    totalSpent: 156780,
    avgOrderValue: 6532.5,
    lastOrderDate: new Date("2024-12-15"),
  },
};

export default function ClientDetailPage() {
  const params = useParams();
  const [client, setClient] = React.useState(mockClient);
  const [remise, setRemise] = React.useState(client.remisePercent);
  const [isEditing, setIsEditing] = React.useState(false);

  const isPro = client.type === "client_pro";

  const handleSaveRemise = () => {
    // TODO: API call
    toast.success("Remise mise à jour");
    setIsEditing(false);
  };

  const handleValidate = () => {
    toast.success("Compte professionnel validé");
  };

  const handleToggleActive = () => {
    // TODO: API call
    setClient({ ...client, active: !client.active });
    toast.success(client.active ? "Compte désactivé" : "Compte réactivé");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/clients"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">
                {client.raisonSociale || `${client.nom}`}
              </h1>
              {isPro && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  PRO
                </span>
              )}
              {!client.validated && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                  Non validé
                </span>
              )}
            </div>
            <p className="text-gray-500 mt-1">
              Client depuis {format(client.createdAt, "MMMM yyyy", { locale: fr })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!client.validated && (
            <>
              <button
                onClick={handleValidate}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Valider le compte
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                <XCircle className="w-4 h-4" />
                Refuser
              </button>
            </>
          )}
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contacter
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { label: "Commandes", value: client.stats.totalOrders },
              { label: "CA Total", value: `${(client.stats.totalSpent / 1000).toFixed(1)}k €` },
              { label: "Panier moyen", value: `${client.stats.avgOrderValue.toFixed(0)} €` },
              { label: "Dernière commande", value: format(client.stats.lastOrderDate, "dd/MM/yy") },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent orders */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Commandes récentes
              </h2>
              <Link
                href={`/admin/commandes?client=${client.id}`}
                className="text-sm text-cyan-600 hover:text-cyan-700"
              >
                Voir tout →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {client.orders.map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/commandes/${order.id}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{order.numero}</p>
                    <p className="text-sm text-gray-500">
                      {format(order.date, "dd MMMM yyyy", { locale: fr })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <StatusBadge
                      status={order.status === "payee" ? "Payée" : order.status === "livree" ? "Livrée" : order.status}
                      variant={order.status === "livree" ? "success" : "info"}
                    />
                    <span className="font-semibold text-gray-900">
                      {order.total.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quotes */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Devis
              </h2>
              <Link
                href={`/admin/devis?client=${client.id}`}
                className="text-sm text-cyan-600 hover:text-cyan-700"
              >
                Voir tout →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {client.quotes.map((quote) => (
                <Link
                  key={quote.id}
                  href={`/admin/devis/${quote.id}`}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{quote.numero}</p>
                    <p className="text-sm text-gray-500">
                      {format(quote.date, "dd MMMM yyyy", { locale: fr })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <StatusBadge
                      status={quote.status === "envoye" ? "Envoyé" : quote.status === "accepte" ? "Accepté" : quote.status}
                      variant={quote.status === "accepte" ? "success" : "info"}
                    />
                    <span className="font-semibold text-gray-900">
                      {quote.total.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Informations</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${client.email}`} className="text-cyan-600 hover:underline">
                    {client.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="text-gray-900">{client.telephone}</p>
                </div>
              </div>
              {isPro && (
                <>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">SIRET</p>
                      <p className="text-gray-900 font-mono">{client.siret}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">TVA Intra.</p>
                      <p className="text-gray-900 font-mono">{client.tvaIntra}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Remise pro */}
          {isPro && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Remise professionnelle</h2>
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <Input
                      label="Pourcentage de remise"
                      type="number"
                      value={remise}
                      onChange={(e) => setRemise(Number(e.target.value))}
                      rightIcon={<span className="text-gray-400">%</span>}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSaveRemise}
                        className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm hover:bg-cyan-600"
                      >
                        <Save className="w-4 h-4 inline mr-1" />
                        Enregistrer
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-cyan-600">-{client.remisePercent}%</p>
                      <p className="text-sm text-gray-500">sur tous les produits</p>
                    </div>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Addresses */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Adresses</h2>
              <button className="text-sm text-cyan-600 hover:text-cyan-700">
                + Ajouter
              </button>
            </div>
            <div className="space-y-4">
              {client.addresses.map((address) => (
                <div key={address.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{address.label}</span>
                    {address.isDefault && (
                      <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">
                        Par défaut
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{address.rue}</p>
                  <p className="text-sm text-gray-600">
                    {address.codePostal} {address.ville}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Account status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Statut du compte</h2>
            <Switch
              label="Compte actif"
              description={client.active ? "Le client peut se connecter et commander" : "Le client ne peut plus se connecter"}
              checked={client.active}
              onChange={handleToggleActive}
            />
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Dernière connexion:{" "}
                {client.lastLogin
                  ? format(client.lastLogin, "dd/MM/yyyy à HH:mm")
                  : "Jamais"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


