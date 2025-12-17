"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  FileText,
  User,
  Plus,
  Trash2,
  Loader2,
  Search,
  Euro,
} from "lucide-react";
import { Input, Textarea, Select } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

interface QuoteItem {
  id: string;
  description: string;
  quantite: number;
  prixUnitaireHT: number;
}

interface QuoteForm {
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientType: "particulier" | "professionnel";
  validite: number; // jours
  items: QuoteItem[];
  notes: string;
  conditionsPaiement: string;
}

const defaultForm: QuoteForm = {
  clientId: "",
  clientName: "",
  clientEmail: "",
  clientType: "particulier",
  validite: 15,
  items: [],
  notes: "",
  conditionsPaiement: "30% à la commande, 70% à la livraison",
};

export default function NouveauDevisPage() {
  const router = useRouter();
  const [form, setForm] = React.useState<QuoteForm>(defaultForm);
  const [saving, setSaving] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [clientSearch, setClientSearch] = React.useState("");
  const [clients, setClients] = React.useState<{ id: string; nom: string; email: string; type: string }[]>([]);
  const [showClientSearch, setShowClientSearch] = React.useState(false);

  // Charger les clients
  React.useEffect(() => {
    const saved = localStorage.getItem("az_clients");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setClients(
          parsed.map((c: { id: string; nom?: string; prenom?: string; raisonSociale?: string; email: string; type: string }) => ({
            id: c.id,
            nom: c.raisonSociale || `${c.prenom || ""} ${c.nom || ""}`.trim(),
            email: c.email,
            type: c.type,
          }))
        );
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const filteredClients = clients.filter(
    (c) =>
      c.nom.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.email.toLowerCase().includes(clientSearch.toLowerCase())
  );

  const selectClient = (client: typeof clients[0]) => {
    setForm({
      ...form,
      clientId: client.id,
      clientName: client.nom,
      clientEmail: client.email,
      clientType: client.type === "client_pro" || client.type === "professionnel" ? "professionnel" : "particulier",
    });
    setShowClientSearch(false);
    setClientSearch("");
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [
        ...form.items,
        {
          id: Date.now().toString(),
          description: "",
          quantite: 1,
          prixUnitaireHT: 0,
        },
      ],
    });
  };

  const updateItem = (id: string, field: keyof QuoteItem, value: string | number) => {
    setForm({
      ...form,
      items: form.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const removeItem = (id: string) => {
    setForm({
      ...form,
      items: form.items.filter((item) => item.id !== id),
    });
  };

  const totalHT = form.items.reduce(
    (sum, item) => sum + item.quantite * item.prixUnitaireHT,
    0
  );
  const tva = totalHT * 0.2;
  const totalTTC = totalHT + tva;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.clientName) newErrors.clientName = "Le client est requis";
    if (!form.clientEmail) newErrors.clientEmail = "L'email est requis";
    if (form.items.length === 0) newErrors.items = "Ajoutez au moins une ligne";

    form.items.forEach((item, index) => {
      if (!item.description) {
        newErrors[`item_${index}_description`] = "Description requise";
      }
      if (item.prixUnitaireHT <= 0) {
        newErrors[`item_${index}_prix`] = "Prix invalide";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Veuillez corriger les erreurs");
      return;
    }

    setSaving(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const quotes = JSON.parse(localStorage.getItem("az_quotes") || "[]");
      const numero = `DEV-${new Date().getFullYear()}-${String(quotes.length + 1).padStart(4, "0")}`;
      const newQuote = {
        id: Date.now().toString(),
        numero,
        ...form,
        totalHT,
        tva,
        totalTTC,
        status: "brouillon",
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + form.validite * 24 * 60 * 60 * 1000).toISOString(),
      };
      quotes.push(newQuote);
      localStorage.setItem("az_quotes", JSON.stringify(quotes));

      toast.success(`Devis ${numero} créé`);
      router.push("/admin/devis");
    } catch (error) {
      toast.error("Erreur lors de la création");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/devis"
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nouveau devis</h1>
          <p className="text-gray-500 mt-1">Créez un nouveau devis pour un client</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Client</h2>

          {form.clientId ? (
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold">
                  {form.clientName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{form.clientName}</p>
                  <p className="text-sm text-gray-500">{form.clientEmail}</p>
                </div>
                {form.clientType === "professionnel" && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    PRO
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setForm({ ...form, clientId: "", clientName: "", clientEmail: "" })}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Changer
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Rechercher un client existant"
                  value={clientSearch}
                  onChange={(e) => {
                    setClientSearch(e.target.value);
                    setShowClientSearch(true);
                  }}
                  onFocus={() => setShowClientSearch(true)}
                  placeholder="Nom ou email..."
                  leftIcon={<Search className="w-4 h-4" />}
                />
                {showClientSearch && clientSearch && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                    {filteredClients.length > 0 ? (
                      filteredClients.map((client) => (
                        <button
                          key={client.id}
                          type="button"
                          onClick={() => selectClient(client)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 text-left"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                            {client.nom.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{client.nom}</p>
                            <p className="text-sm text-gray-500">{client.email}</p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-3 text-center text-gray-500 text-sm">
                        Aucun client trouvé
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou saisir manuellement</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nom du client *"
                  value={form.clientName}
                  onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                  error={errors.clientName}
                  placeholder="Jean Dupont ou SARL Entreprise"
                  leftIcon={<User className="w-4 h-4" />}
                />
                <Input
                  label="Email *"
                  type="email"
                  value={form.clientEmail}
                  onChange={(e) => setForm({ ...form, clientEmail: e.target.value })}
                  error={errors.clientEmail}
                  placeholder="email@exemple.fr"
                />
              </div>
            </div>
          )}
        </div>

        {/* Lignes du devis */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Lignes du devis</h2>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 text-cyan-600 rounded-lg text-sm font-medium hover:bg-cyan-100 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Ajouter une ligne
            </button>
          </div>

          {errors.items && (
            <p className="text-sm text-red-600 mb-4">{errors.items}</p>
          )}

          {form.items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aucune ligne. Cliquez sur "Ajouter une ligne" pour commencer.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Header */}
              <div className="grid grid-cols-12 gap-3 text-xs font-medium text-gray-500 uppercase tracking-wider px-3">
                <div className="col-span-6">Description</div>
                <div className="col-span-2">Quantité</div>
                <div className="col-span-2">Prix unit. HT</div>
                <div className="col-span-1 text-right">Total HT</div>
                <div className="col-span-1"></div>
              </div>

              {form.items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-3 items-center bg-gray-50 rounded-lg p-3">
                  <div className="col-span-6">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, "description", e.target.value)}
                      placeholder="Description du produit/service"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      min={1}
                      value={item.quantite}
                      onChange={(e) => updateItem(item.id, "quantite", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        value={item.prixUnitaireHT}
                        onChange={(e) => updateItem(item.id, "prixUnitaireHT", Number(e.target.value))}
                        className="w-full px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                    </div>
                  </div>
                  <div className="col-span-1 text-right font-semibold text-gray-900">
                    {(item.quantite * item.prixUnitaireHT).toLocaleString("fr-FR")} €
                  </div>
                  <div className="col-span-1 text-right">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Totaux */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total HT</span>
                      <span className="font-medium">{totalHT.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">TVA (20%)</span>
                      <span className="font-medium">{tva.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className="flex justify-between text-lg pt-2 border-t border-gray-200">
                      <span className="font-semibold">Total TTC</span>
                      <span className="font-bold text-cyan-600">{totalTTC.toLocaleString("fr-FR")} €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Options</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Select
              label="Validité du devis"
              value={form.validite.toString()}
              onChange={(e) => setForm({ ...form, validite: Number(e.target.value) })}
              options={[
                { value: "7", label: "7 jours" },
                { value: "15", label: "15 jours" },
                { value: "30", label: "30 jours" },
                { value: "60", label: "60 jours" },
              ]}
            />
            <Input
              label="Conditions de paiement"
              value={form.conditionsPaiement}
              onChange={(e) => setForm({ ...form, conditionsPaiement: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <Textarea
              label="Notes internes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Notes visibles uniquement par l'équipe..."
              rows={3}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Link
            href="/admin/devis"
            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? "Création..." : "Créer le devis"}
          </button>
        </div>
      </form>
    </div>
  );
}


