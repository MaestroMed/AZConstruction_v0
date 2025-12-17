"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Package,
  Truck,
  FileText,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Send,
} from "lucide-react";
import { StatusBadge } from "@/components/admin/ui/DataTable";
import { Input, Textarea, Select } from "@/components/admin/ui/FormFields";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

// Mock order data
const mockOrder = {
  id: "1",
  numero: "ORD-2024-0156",
  user: {
    id: "1",
    prenom: "Jean",
    nom: "Dupont",
    email: "jean.dupont@email.com",
    telephone: "06 12 34 56 78",
    type: "client_particulier",
  },
  dateCommande: new Date("2024-12-15T10:30:00"),
  statusCommande: "en_preparation",
  statusPaiement: "paye",
  totalHT: 2875,
  tva: 575,
  totalTTC: 3450,
  moyenPaiement: "Carte bancaire",
  transactionId: "pi_3QPxxx123456",
  adresseLivraison: {
    rue: "15 Rue des Lilas",
    codePostal: "75011",
    ville: "Paris",
    pays: "France",
  },
  adresseFacturation: {
    rue: "15 Rue des Lilas",
    codePostal: "75011",
    ville: "Paris",
    pays: "France",
  },
  trackingLivraison: null,
  transporteur: null,
  items: [
    {
      id: "1",
      product: { nom: "Porte Jansen Premium", slug: "porte-jansen-premium" },
      quantity: 1,
      prixUnitaireHT: 2875,
      prixTotalHT: 2875,
      configSnapshot: {
        largeur: 4000,
        hauteur: 1800,
        couleur: "RAL 7016 - Gris anthracite",
        motorisation: "Premium",
      },
    },
  ],
  timeline: [
    { date: new Date("2024-12-15T10:30:00"), action: "Commande passée", status: "done" },
    { date: new Date("2024-12-15T10:31:00"), action: "Paiement reçu", status: "done" },
    { date: new Date("2024-12-15T14:00:00"), action: "Préparation en cours", status: "current" },
    { date: null, action: "En fabrication", status: "pending" },
    { date: null, action: "Expédition", status: "pending" },
    { date: null, action: "Livrée", status: "pending" },
  ],
  messages: [
    {
      id: "1",
      sender: "client",
      message: "Bonjour, est-il possible d'avoir une couleur RAL 7021 à la place ?",
      date: new Date("2024-12-15T11:00:00"),
    },
    {
      id: "2",
      sender: "admin",
      message: "Bonjour M. Dupont, oui c'est possible. Nous mettons à jour votre commande.",
      date: new Date("2024-12-15T11:30:00"),
    },
  ],
};

const statusOptions = [
  { value: "en_attente_paiement", label: "En attente de paiement" },
  { value: "payee", label: "Payée" },
  { value: "en_preparation", label: "En préparation" },
  { value: "en_fabrication", label: "En fabrication" },
  { value: "expediee", label: "Expédiée" },
  { value: "livree", label: "Livrée" },
  { value: "annulee", label: "Annulée" },
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

export default function OrderDetailPage() {
  const params = useParams();
  const [order] = React.useState(mockOrder);
  const [newMessage, setNewMessage] = React.useState("");
  const [trackingNumber, setTrackingNumber] = React.useState("");
  const [showStatusDropdown, setShowStatusDropdown] = React.useState(false);

  const handleStatusChange = (newStatus: string) => {
    // TODO: API call
    toast.success(`Statut mis à jour : ${getStatusLabel(newStatus)}`);
    setShowStatusDropdown(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // TODO: API call
    toast.success("Message envoyé au client");
    setNewMessage("");
  };

  const handleGenerateInvoice = () => {
    // TODO: Generate PDF
    toast.success("Facture générée");
  };

  const handleUpdateTracking = () => {
    if (!trackingNumber.trim()) return;
    // TODO: API call
    toast.success("Numéro de suivi enregistré");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/commandes"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">{order.numero}</h1>
              <StatusBadge
                status={getStatusLabel(order.statusCommande)}
                variant={getStatusVariant(order.statusCommande)}
              />
            </div>
            <p className="text-gray-500 mt-1">
              Passée le {format(order.dateCommande, "d MMMM yyyy à HH:mm", { locale: fr })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleGenerateInvoice}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Facture
          </button>
          <div className="relative">
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              Changer statut
              <ChevronDown className="w-4 h-4" />
            </button>
            {showStatusDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                {statusOptions.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => handleStatusChange(status.value)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      order.statusCommande === status.value ? "text-cyan-600 font-medium" : "text-gray-700"
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order items */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Articles commandés</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {order.items.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Package className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900">{item.product.nom}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Quantité: {item.quantity} × {item.prixUnitaireHT.toLocaleString("fr-FR")} € HT
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {Object.entries(item.configSnapshot).map(([key, value]) => (
                          <span
                            key={key}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                          >
                            <span className="font-medium capitalize">{key}:</span>
                            <span className="ml-1">{String(value)}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {item.prixTotalHT.toLocaleString("fr-FR")} € HT
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-gray-50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sous-total HT</span>
                <span className="font-medium">{order.totalHT.toLocaleString("fr-FR")} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">TVA (20%)</span>
                <span className="font-medium">{order.tva.toLocaleString("fr-FR")} €</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span>Total TTC</span>
                <span className="text-cyan-600">{order.totalTTC.toLocaleString("fr-FR")} €</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Messages
              </h2>
            </div>
            <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
              {order.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.sender === "admin"
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "admin" ? "text-cyan-100" : "text-gray-500"
                      }`}
                    >
                      {format(msg.date, "dd/MM HH:mm")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Répondre au client..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Suivi</h2>
            <div className="space-y-4">
              {order.timeline.map((event, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        event.status === "done"
                          ? "bg-emerald-100"
                          : event.status === "current"
                          ? "bg-cyan-100"
                          : "bg-gray-100"
                      }`}
                    >
                      {event.status === "done" ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : event.status === "current" ? (
                        <Clock className="w-4 h-4 text-cyan-600" />
                      ) : (
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      )}
                    </div>
                    {index < order.timeline.length - 1 && (
                      <div
                        className={`w-0.5 h-8 ${
                          event.status === "done" ? "bg-emerald-200" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pb-4">
                    <p
                      className={`text-sm font-medium ${
                        event.status === "done"
                          ? "text-gray-900"
                          : event.status === "current"
                          ? "text-cyan-600"
                          : "text-gray-400"
                      }`}
                    >
                      {event.action}
                    </p>
                    {event.date && (
                      <p className="text-xs text-gray-500">
                        {format(event.date, "dd/MM/yyyy HH:mm")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking */}
          {order.statusCommande === "expediee" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Livraison
              </h2>
              <div className="space-y-4">
                <Input
                  label="N° de suivi"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="1Z999AA10123456784"
                />
                <Select
                  label="Transporteur"
                  options={[
                    { value: "ups", label: "UPS" },
                    { value: "chronopost", label: "Chronopost" },
                    { value: "dhl", label: "DHL" },
                    { value: "autre", label: "Autre" },
                  ]}
                />
                <button
                  onClick={handleUpdateTracking}
                  className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          )}

          {/* Client info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Client</h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900">
                  {order.user.prenom} {order.user.nom}
                </p>
                <p className="text-sm text-gray-500">{order.user.email}</p>
                <p className="text-sm text-gray-500">{order.user.telephone}</p>
              </div>
              <Link
                href={`/admin/clients/${order.user.id}`}
                className="inline-flex items-center text-sm text-cyan-600 hover:text-cyan-700"
              >
                Voir la fiche client →
              </Link>
            </div>
          </div>

          {/* Addresses */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Adresses</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase mb-1">Livraison</p>
                <p className="text-sm text-gray-900">{order.adresseLivraison.rue}</p>
                <p className="text-sm text-gray-900">
                  {order.adresseLivraison.codePostal} {order.adresseLivraison.ville}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase mb-1">Facturation</p>
                <p className="text-sm text-gray-900">{order.adresseFacturation.rue}</p>
                <p className="text-sm text-gray-900">
                  {order.adresseFacturation.codePostal} {order.adresseFacturation.ville}
                </p>
              </div>
            </div>
          </div>

          {/* Payment info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Paiement</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Moyen</span>
                <span className="font-medium">{order.moyenPaiement}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Transaction</span>
                <span className="font-mono text-xs">{order.transactionId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Statut</span>
                <StatusBadge status="Payé" variant="success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


