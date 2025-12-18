"use client";

import * as React from "react";
import Link from "next/link";
import { Building, Mail, CreditCard, Search as SearchIcon, Save, Plus, Trash2 } from "lucide-react";
import { Input, Select, Switch } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "images", label: "Images du site", icon: Building, href: "/admin/parametres/images" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: SearchIcon, href: "/admin/parametres/seo" },
];

export default function EcommercePage() {
  const [saving, setSaving] = React.useState(false);
  const [settings, setSettings] = React.useState({
    tauxTVA: 20,
    delaiFabricationDefaut: 14,
    fraisLivraisonBase: 150,
    seuilFranco: 5000,
    paiementCB: true,
    paiementVirement: true,
    paiementCheque: false,
    paiementDiffere: true,
  });

  const [zones, setZones] = React.useState([
    { id: "1", nom: "France métropolitaine", frais: 0, franco: 5000 },
    { id: "2", nom: "Belgique / Luxembourg", frais: 100, franco: 8000 },
    { id: "3", nom: "Suisse", frais: 200, franco: 10000 },
  ]);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Paramètres e-commerce enregistrés");
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">E-commerce</h1>
          <p className="text-gray-500 mt-1">Configuration de la boutique</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 disabled:opacity-50">
          <Save className="w-4 h-4" />
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden lg:col-span-1">
          {settingsSections.map((s) => (
            <Link key={s.id} href={s.href} className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 ${s.id === "ecommerce" ? "bg-cyan-50 text-cyan-700" : "text-gray-600 hover:bg-gray-50"}`}>
              <s.icon className="w-5 h-5" />
              <span className="font-medium">{s.label}</span>
            </Link>
          ))}
        </nav>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">TVA & Fabrication</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Taux TVA (%)" type="number" value={settings.tauxTVA} onChange={(e) => setSettings({ ...settings, tauxTVA: Number(e.target.value) })} />
              <Input label="Délai fabrication par défaut (jours)" type="number" value={settings.delaiFabricationDefaut} onChange={(e) => setSettings({ ...settings, delaiFabricationDefaut: Number(e.target.value) })} />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Modes de paiement</h2>
            <div className="space-y-4">
              <Switch label="Carte bancaire (Stripe)" checked={settings.paiementCB} onChange={(c) => setSettings({ ...settings, paiementCB: c })} description="Paiement sécurisé par carte" />
              <Switch label="Virement bancaire" checked={settings.paiementVirement} onChange={(c) => setSettings({ ...settings, paiementVirement: c })} description="Validation manuelle requise" />
              <Switch label="Chèque" checked={settings.paiementCheque} onChange={(c) => setSettings({ ...settings, paiementCheque: c })} description="À l'ordre de AZ Construction" />
              <Switch label="Paiement différé (Pro)" checked={settings.paiementDiffere} onChange={(c) => setSettings({ ...settings, paiementDiffere: c })} description="Réservé aux clients professionnels validés" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Zones de livraison</h2>
              <button className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-1"><Plus className="w-4 h-4" /> Ajouter</button>
            </div>
            <div className="space-y-3">
              {zones.map((zone) => (
                <div key={zone.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1"><p className="font-medium text-gray-900">{zone.nom}</p></div>
                  <div className="text-sm"><span className="text-gray-500">Frais:</span> <span className="font-medium">{zone.frais}€</span></div>
                  <div className="text-sm"><span className="text-gray-500">Franco:</span> <span className="font-medium">{zone.franco}€</span></div>
                  <button className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






