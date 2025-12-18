"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Percent,
  Loader2,
} from "lucide-react";
import { Input, Switch, Textarea } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

type ClientType = "particulier" | "professionnel";

interface ClientForm {
  type: ClientType;
  // Particulier
  prenom: string;
  nom: string;
  // Professionnel
  raisonSociale: string;
  siret: string;
  tvaIntra: string;
  // Commun
  email: string;
  telephone: string;
  // Adresse
  adresse: string;
  codePostal: string;
  ville: string;
  // Pro
  remisePercent: number;
  validated: boolean;
  notes: string;
}

const defaultForm: ClientForm = {
  type: "particulier",
  prenom: "",
  nom: "",
  raisonSociale: "",
  siret: "",
  tvaIntra: "",
  email: "",
  telephone: "",
  adresse: "",
  codePostal: "",
  ville: "",
  remisePercent: 0,
  validated: false,
  notes: "",
};

export default function NouveauClientPage() {
  const router = useRouter();
  const [form, setForm] = React.useState<ClientForm>(defaultForm);
  const [saving, setSaving] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ClientForm, string>>>({});

  const isPro = form.type === "professionnel";

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ClientForm, string>> = {};

    if (!form.email) newErrors.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email invalide";
    }

    if (isPro) {
      if (!form.raisonSociale) newErrors.raisonSociale = "La raison sociale est requise";
      if (!form.siret) newErrors.siret = "Le SIRET est requis";
    } else {
      if (!form.nom) newErrors.nom = "Le nom est requis";
      if (!form.prenom) newErrors.prenom = "Le prénom est requis";
    }

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
      // TODO: Appel API pour créer le client
      // const response = await fetch('/api/clients', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });

      // Simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sauvegarder dans localStorage pour démo
      const clients = JSON.parse(localStorage.getItem("az_clients") || "[]");
      const newClient = {
        id: Date.now().toString(),
        ...form,
        createdAt: new Date().toISOString(),
        active: true,
        ordersCount: 0,
        totalSpent: 0,
      };
      clients.push(newClient);
      localStorage.setItem("az_clients", JSON.stringify(clients));

      toast.success("Client créé avec succès");
      router.push("/admin/clients");
    } catch (error) {
      toast.error("Erreur lors de la création");
    } finally {
      setSaving(false);
    }
  };

  const updateField = <K extends keyof ClientForm>(field: K, value: ClientForm[K]) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/clients"
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nouveau client</h1>
          <p className="text-gray-500 mt-1">Créez un nouveau compte client</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type de client */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Type de client</h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => updateField("type", "particulier")}
              className={`flex-1 flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                !isPro
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                !isPro ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-400"
              }`}>
                <User className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className={`font-semibold ${!isPro ? "text-cyan-700" : "text-gray-700"}`}>
                  Particulier
                </p>
                <p className="text-sm text-gray-500">Client individuel</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => updateField("type", "professionnel")}
              className={`flex-1 flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                isPro
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isPro ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-400"
              }`}>
                <Building className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className={`font-semibold ${isPro ? "text-cyan-700" : "text-gray-700"}`}>
                  Professionnel
                </p>
                <p className="text-sm text-gray-500">Entreprise, artisan...</p>
              </div>
            </button>
          </div>
        </div>

        {/* Informations */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {isPro ? "Informations entreprise" : "Informations personnelles"}
          </h2>
          
          {isPro ? (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Input
                  label="Raison sociale *"
                  value={form.raisonSociale}
                  onChange={(e) => updateField("raisonSociale", e.target.value)}
                  error={errors.raisonSociale}
                  placeholder="SARL Mon Entreprise"
                  leftIcon={<Building className="w-4 h-4" />}
                />
              </div>
              <Input
                label="SIRET *"
                value={form.siret}
                onChange={(e) => updateField("siret", e.target.value)}
                error={errors.siret}
                placeholder="123 456 789 00012"
              />
              <Input
                label="N° TVA Intra."
                value={form.tvaIntra}
                onChange={(e) => updateField("tvaIntra", e.target.value)}
                placeholder="FR12345678901"
              />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Prénom *"
                value={form.prenom}
                onChange={(e) => updateField("prenom", e.target.value)}
                error={errors.prenom}
                placeholder="Jean"
                leftIcon={<User className="w-4 h-4" />}
              />
              <Input
                label="Nom *"
                value={form.nom}
                onChange={(e) => updateField("nom", e.target.value)}
                error={errors.nom}
                placeholder="Dupont"
              />
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Email *"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              error={errors.email}
              placeholder="email@exemple.fr"
              leftIcon={<Mail className="w-4 h-4" />}
            />
            <Input
              label="Téléphone"
              type="tel"
              value={form.telephone}
              onChange={(e) => updateField("telephone", e.target.value)}
              placeholder="06 12 34 56 78"
              leftIcon={<Phone className="w-4 h-4" />}
            />
          </div>
        </div>

        {/* Adresse */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Adresse</h2>
          <div className="space-y-4">
            <Input
              label="Adresse"
              value={form.adresse}
              onChange={(e) => updateField("adresse", e.target.value)}
              placeholder="123 rue de la Paix"
              leftIcon={<MapPin className="w-4 h-4" />}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Code postal"
                value={form.codePostal}
                onChange={(e) => updateField("codePostal", e.target.value)}
                placeholder="75001"
              />
              <Input
                label="Ville"
                value={form.ville}
                onChange={(e) => updateField("ville", e.target.value)}
                placeholder="Paris"
              />
            </div>
          </div>
        </div>

        {/* Options Pro */}
        {isPro && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Options professionnelles</h2>
            <div className="space-y-4">
              <Input
                label="Remise (%)"
                type="number"
                min={0}
                max={100}
                value={form.remisePercent}
                onChange={(e) => updateField("remisePercent", Number(e.target.value))}
                placeholder="0"
                leftIcon={<Percent className="w-4 h-4" />}
              />
              <Switch
                label="Compte validé"
                description="Le client pourra passer des commandes immédiatement"
                checked={form.validated}
                onChange={(checked) => updateField("validated", checked)}
              />
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notes internes</h2>
          <Textarea
            label="Notes"
            value={form.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder="Notes visibles uniquement par l'équipe..."
            rows={4}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Link
            href="/admin/clients"
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
            {saving ? "Création..." : "Créer le client"}
          </button>
        </div>
      </form>
    </div>
  );
}




