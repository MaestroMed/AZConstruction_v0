"use client";

import * as React from "react";
import Link from "next/link";
import { Building, Mail, CreditCard, Search as SearchIcon, Save, Eye } from "lucide-react";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "images", label: "Images du site", icon: Building, href: "/admin/parametres/images" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: SearchIcon, href: "/admin/parametres/seo" },
];

const emailTemplates = [
  { id: "order_confirm", name: "Confirmation de commande", active: true },
  { id: "order_shipped", name: "Expédition de commande", active: true },
  { id: "quote_sent", name: "Envoi de devis", active: true },
  { id: "quote_reminder", name: "Relance devis", active: false },
  { id: "account_welcome", name: "Bienvenue", active: true },
  { id: "pro_validated", name: "Compte pro validé", active: true },
];

export default function EmailsPage() {
  const [saving, setSaving] = React.useState(false);
  const [settings, setSettings] = React.useState({
    smtpHost: "smtp.example.com",
    smtpPort: 587,
    smtpUser: "noreply@zaconstruction.fr",
    smtpPassword: "••••••••",
    fromEmail: "noreply@zaconstruction.fr",
    fromName: "AZ Construction",
    replyTo: "contact@zaconstruction.fr",
    dailyDigest: true,
    newOrderNotif: true,
    newQuoteNotif: true,
  });

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Configuration emails enregistrée");
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emails</h1>
          <p className="text-gray-500 mt-1">Configuration SMTP et templates</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 disabled:opacity-50">
          <Save className="w-4 h-4" />
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden lg:col-span-1">
          {settingsSections.map((s) => (
            <Link key={s.id} href={s.href} className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 ${s.id === "emails" ? "bg-cyan-50 text-cyan-700" : "text-gray-600 hover:bg-gray-50"}`}>
              <s.icon className="w-5 h-5" />
              <span className="font-medium">{s.label}</span>
            </Link>
          ))}
        </nav>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Configuration SMTP</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Serveur SMTP" value={settings.smtpHost} onChange={(e) => setSettings({ ...settings, smtpHost: e.target.value })} />
              <Input label="Port" type="number" value={settings.smtpPort} onChange={(e) => setSettings({ ...settings, smtpPort: Number(e.target.value) })} />
              <Input label="Utilisateur" value={settings.smtpUser} onChange={(e) => setSettings({ ...settings, smtpUser: e.target.value })} />
              <Input label="Mot de passe" type="password" value={settings.smtpPassword} onChange={(e) => setSettings({ ...settings, smtpPassword: e.target.value })} />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Expéditeur</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Email expéditeur" value={settings.fromEmail} onChange={(e) => setSettings({ ...settings, fromEmail: e.target.value })} />
              <Input label="Nom expéditeur" value={settings.fromName} onChange={(e) => setSettings({ ...settings, fromName: e.target.value })} />
              <Input label="Email de réponse" value={settings.replyTo} onChange={(e) => setSettings({ ...settings, replyTo: e.target.value })} />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Notifications admin</h2>
            <div className="space-y-4">
              <Switch label="Résumé quotidien" checked={settings.dailyDigest} onChange={(c) => setSettings({ ...settings, dailyDigest: c })} description="Recevoir un email récapitulatif chaque matin" />
              <Switch label="Nouvelles commandes" checked={settings.newOrderNotif} onChange={(c) => setSettings({ ...settings, newOrderNotif: c })} description="Notification immédiate" />
              <Switch label="Nouvelles demandes de devis" checked={settings.newQuoteNotif} onChange={(c) => setSettings({ ...settings, newQuoteNotif: c })} description="Notification immédiate" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Templates d&apos;emails</h2>
            <div className="space-y-3">
              {emailTemplates.map((tpl) => (
                <div key={tpl.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="font-medium text-gray-900">{tpl.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${tpl.active ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-600"}`}>
                      {tpl.active ? "Actif" : "Inactif"}
                    </span>
                    <button className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
                      <Eye className="w-4 h-4" /> Éditer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






