"use client";

import * as React from "react";
import {
  MessageSquare,
  Search,
  Mail,
  Phone,
  Building2,
  Calendar,
  Tag,
  Loader2,
  ChevronDown,
  Check,
  Archive,
  Eye,
  RefreshCw,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ContactMessage {
  id: string;
  nom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
  type: string;
  entreprise?: string;
  status: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  nouveau:  { label: "Nouveau",    color: "bg-blue-100 text-blue-700" },
  lu:       { label: "Lu",         color: "bg-yellow-100 text-yellow-700" },
  traite:   { label: "Traité",     color: "bg-green-100 text-green-700" },
  archive:  { label: "Archivé",    color: "bg-gray-100 text-gray-500" },
};

const TYPE_LABELS: Record<string, string> = {
  particulier:    "Particulier",
  professionnel:  "Professionnel",
  devis:          "Demande devis",
};

export default function AdminContactPage() {
  const [messages, setMessages] = React.useState<ContactMessage[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedMessage, setSelectedMessage] = React.useState<ContactMessage | null>(null);
  const [notes, setNotes] = React.useState("");
  const [savingNotes, setSavingNotes] = React.useState(false);
  const [updatingStatus, setUpdatingStatus] = React.useState<string | null>(null);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const url = statusFilter !== "all" ? `/api/contact?status=${statusFilter}` : "/api/contact";
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) setMessages(data.messages || []);
    } catch {
      toast.error("Erreur de chargement des messages");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { loadMessages(); }, [statusFilter]);

  const updateStatus = async (id: string, status: string) => {
    setUpdatingStatus(id);
    try {
      const res = await fetch("/api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error();
      setMessages((prev) => prev.map((m) => m.id === id ? { ...m, status } : m));
      if (selectedMessage?.id === id) setSelectedMessage((prev) => prev ? { ...prev, status } : prev);
      toast.success("Statut mis à jour");
    } catch {
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setUpdatingStatus(null);
    }
  };

  const saveNotes = async () => {
    if (!selectedMessage) return;
    setSavingNotes(true);
    try {
      const res = await fetch("/api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedMessage.id, notes }),
      });
      if (!res.ok) throw new Error();
      setMessages((prev) => prev.map((m) => m.id === selectedMessage.id ? { ...m, notes } : m));
      setSelectedMessage((prev) => prev ? { ...prev, notes } : prev);
      toast.success("Notes sauvegardées");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSavingNotes(false);
    }
  };

  const openMessage = async (msg: ContactMessage) => {
    setSelectedMessage(msg);
    setNotes(msg.notes || "");
    // Marquer comme "lu" si "nouveau"
    if (msg.status === "nouveau") {
      await updateStatus(msg.id, "lu");
    }
  };

  const filtered = messages.filter((m) => {
    const q = searchTerm.toLowerCase();
    return !q || m.nom.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.sujet.toLowerCase().includes(q);
  });

  const counts = React.useMemo(() => {
    const all = messages.length;
    const nouveau = messages.filter((m) => m.status === "nouveau").length;
    const lu = messages.filter((m) => m.status === "lu").length;
    const traite = messages.filter((m) => m.status === "traite").length;
    const archive = messages.filter((m) => m.status === "archive").length;
    return { all, nouveau, lu, traite, archive };
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            Messages de contact
            {counts.nouveau > 0 && (
              <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full">
                {counts.nouveau}
              </span>
            )}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{counts.all} message{counts.all !== 1 ? "s" : ""} au total</p>
        </div>
        <button
          onClick={loadMessages}
          className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, sujet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Status tabs */}
        <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white text-sm">
          {[
            { key: "all",     label: `Tous (${counts.all})` },
            { key: "nouveau", label: `Nouveaux (${counts.nouveau})` },
            { key: "lu",      label: `Lus (${counts.lu})` },
            { key: "traite",  label: `Traités (${counts.traite})` },
            { key: "archive", label: `Archivés (${counts.archive})` },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={cn(
                "px-3 py-2 font-medium transition-colors border-r border-gray-200 last:border-r-0",
                statusFilter === tab.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        {/* Message list */}
        <div className={cn("flex flex-col gap-2 overflow-y-auto", selectedMessage ? "w-2/5 min-w-0" : "w-full")}>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Aucun message</p>
            </div>
          ) : (
            filtered.map((msg) => (
              <button
                key={msg.id}
                onClick={() => openMessage(msg)}
                className={cn(
                  "text-left p-4 rounded-xl border transition-all",
                  selectedMessage?.id === msg.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm",
                  msg.status === "nouveau" && "border-l-4 border-l-blue-500"
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className={cn("font-semibold text-sm", msg.status === "nouveau" ? "text-blue-900" : "text-gray-900")}>
                    {msg.nom}
                  </span>
                  <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0", STATUS_LABELS[msg.status]?.color)}>
                    {STATUS_LABELS[msg.status]?.label}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1 truncate">{msg.sujet}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {msg.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(msg.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Message detail panel */}
        {selectedMessage && (
          <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-y-auto p-6 min-w-0">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 pr-4">{selectedMessage.sujet}</h2>
              <button onClick={() => setSelectedMessage(null)} className="p-1 text-gray-400 hover:text-gray-600 flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href={`mailto:${selectedMessage.email}`} className="hover:text-blue-600 underline">{selectedMessage.email}</a>
              </div>
              {selectedMessage.telephone && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${selectedMessage.telephone}`} className="hover:text-blue-600">{selectedMessage.telephone}</a>
                </div>
              )}
              {selectedMessage.entreprise && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  {selectedMessage.entreprise}
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="w-4 h-4 text-gray-400" />
                {TYPE_LABELS[selectedMessage.type] || selectedMessage.type}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                {new Date(selectedMessage.createdAt).toLocaleDateString("fr-FR", { weekday: "long", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>

            {/* Message */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {selectedMessage.message}
            </div>

            {/* Status actions */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Changer le statut</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(STATUS_LABELS).map(([key, { label, color }]) => (
                  <button
                    key={key}
                    onClick={() => updateStatus(selectedMessage.id, key)}
                    disabled={selectedMessage.status === key || !!updatingStatus}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
                      selectedMessage.status === key
                        ? cn(color, "border-transparent")
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    )}
                  >
                    {updatingStatus === selectedMessage.id ? <Loader2 className="w-3 h-3 animate-spin inline" /> : null}
                    {selectedMessage.status === key && <Check className="w-3 h-3 inline mr-1" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes internes */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Notes internes</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Ajouter une note interne (visible uniquement en admin)..."
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">Visible uniquement par l'équipe</span>
                <button
                  onClick={saveNotes}
                  disabled={savingNotes}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {savingNotes ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                  Sauvegarder
                </button>
              </div>
            </div>

            {/* Quick reply */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.sujet)}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Répondre par email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
