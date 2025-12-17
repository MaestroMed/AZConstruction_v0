"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
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
  Loader2,
  Trash2,
} from "lucide-react";
import { StatusBadge } from "@/components/admin/ui/DataTable";
import { Input, Switch } from "@/components/admin/ui/FormFields";
import { ConfirmDialog } from "@/components/admin/ui/Modal";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

interface Client {
  id: string;
  type: "particulier" | "professionnel" | "client_particulier" | "client_pro";
  email: string;
  nom?: string;
  prenom?: string;
  raisonSociale?: string;
  siret?: string;
  tvaIntra?: string;
  telephone?: string;
  adresse?: string;
  codePostal?: string;
  ville?: string;
  remisePercent?: number;
  validated?: boolean;
  active?: boolean;
  notes?: string;
  createdAt: string;
  lastLogin?: string;
  ordersCount?: number;
  totalSpent?: number;
}

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = React.useState<Client | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [remise, setRemise] = React.useState(0);
  const [isEditing, setIsEditing] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  // Charger le client
  React.useEffect(() => {
    const loadClient = () => {
      try {
        const saved = localStorage.getItem("az_clients");
        if (saved) {
          const clients = JSON.parse(saved);
          const found = clients.find((c: Client) => c.id === params.id);
          if (found) {
            setClient(found);
            setRemise(found.remisePercent || 0);
          }
        }
      } catch (e) {
        console.error("Erreur chargement client:", e);
      } finally {
        setLoading(false);
      }
    };
    loadClient();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (!client) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Client introuvable</h3>
        <p className="text-gray-500 mb-6">Ce client n'existe pas ou a été supprimé.</p>
        <Link
          href="/admin/clients"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux clients
        </Link>
      </div>
    );
  }

  const isPro = client.type === "client_pro" || client.type === "professionnel";
  const clientName = client.raisonSociale || `${client.prenom || ""} ${client.nom || ""}`.trim() || client.email;

  const handleSaveRemise = () => {
    const saved = localStorage.getItem("az_clients");
    if (saved) {
      const clients = JSON.parse(saved);
      const updated = clients.map((c: Client) =>
        c.id === client.id ? { ...c, remisePercent: remise } : c
      );
      localStorage.setItem("az_clients", JSON.stringify(updated));
      setClient({ ...client, remisePercent: remise });
    }
    toast.success("Remise mise à jour");
    setIsEditing(false);
  };

  const handleValidate = () => {
    const saved = localStorage.getItem("az_clients");
    if (saved) {
      const clients = JSON.parse(saved);
      const updated = clients.map((c: Client) =>
        c.id === client.id ? { ...c, validated: true } : c
      );
      localStorage.setItem("az_clients", JSON.stringify(updated));
      setClient({ ...client, validated: true });
    }
    toast.success("Compte professionnel validé");
  };

  const handleToggleActive = () => {
    const newActive = !client.active;
    const saved = localStorage.getItem("az_clients");
    if (saved) {
      const clients = JSON.parse(saved);
      const updated = clients.map((c: Client) =>
        c.id === client.id ? { ...c, active: newActive } : c
      );
      localStorage.setItem("az_clients", JSON.stringify(updated));
      setClient({ ...client, active: newActive });
    }
    toast.success(newActive ? "Compte réactivé" : "Compte désactivé");
  };

  const handleDelete = () => {
    const saved = localStorage.getItem("az_clients");
    if (saved) {
      const clients = JSON.parse(saved);
      const updated = clients.filter((c: Client) => c.id !== client.id);
      localStorage.setItem("az_clients", JSON.stringify(updated));
    }
    toast.success("Client supprimé");
    router.push("/admin/clients");
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
              <h1 className="text-2xl font-bold text-gray-900">{clientName}</h1>
              {isPro && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  PRO
                </span>
              )}
              {!client.validated && isPro && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                  Non validé
                </span>
              )}
            </div>
            <p className="text-gray-500 mt-1">
              Client depuis {format(new Date(client.createdAt), "MMMM yyyy", { locale: fr })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!client.validated && isPro && (
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
          <button
            onClick={() => setDeleteOpen(true)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { label: "Commandes", value: client.ordersCount || 0 },
              { label: "CA Total", value: `${((client.totalSpent || 0) / 1000).toFixed(1)}k €` },
              { label: "Panier moyen", value: client.ordersCount ? `${Math.round((client.totalSpent || 0) / client.ordersCount)} €` : "0 €" },
              { label: "Remise", value: isPro && client.remisePercent ? `-${client.remisePercent}%` : "-" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Notes */}
          {client.notes && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Notes internes</h2>
              <p className="text-gray-600 whitespace-pre-wrap">{client.notes}</p>
            </div>
          )}

          {/* Empty states for orders/quotes */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Commandes récentes
              </h2>
            </div>
            <div className="p-8 text-center text-gray-500">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aucune commande pour ce client</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Devis
              </h2>
            </div>
            <div className="p-8 text-center text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aucun devis pour ce client</p>
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
              {client.telephone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="text-gray-900">{client.telephone}</p>
                  </div>
                </div>
              )}
              {client.adresse && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="text-gray-900">
                      {client.adresse}
                      <br />
                      {client.codePostal} {client.ville}
                    </p>
                  </div>
                </div>
              )}
              {isPro && (
                <>
                  {client.siret && (
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">SIRET</p>
                        <p className="text-gray-900 font-mono">{client.siret}</p>
                      </div>
                    </div>
                  )}
                  {client.tvaIntra && (
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">TVA Intra.</p>
                        <p className="text-gray-900 font-mono">{client.tvaIntra}</p>
                      </div>
                    </div>
                  )}
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
                      <p className="text-3xl font-bold text-cyan-600">-{client.remisePercent || 0}%</p>
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

          {/* Account status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Statut du compte</h2>
            <Switch
              label="Compte actif"
              description={client.active !== false ? "Le client peut se connecter et commander" : "Le client ne peut plus se connecter"}
              checked={client.active !== false}
              onChange={handleToggleActive}
            />
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Dernière connexion:{" "}
                {client.lastLogin
                  ? format(new Date(client.lastLogin), "dd/MM/yyyy à HH:mm")
                  : "Jamais"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delete confirmation */}
      <ConfirmDialog
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Supprimer le client"
        message={`Êtes-vous sûr de vouloir supprimer "${clientName}" ? Cette action est irréversible.`}
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}
