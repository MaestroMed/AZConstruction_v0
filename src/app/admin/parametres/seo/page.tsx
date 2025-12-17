"use client";

import * as React from "react";
import Link from "next/link";
import { Building, Mail, CreditCard, Search as SearchIcon, Save } from "lucide-react";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: SearchIcon, href: "/admin/parametres/seo" },
];

export default function SEOPage() {
  const [saving, setSaving] = React.useState(false);
  const [settings, setSettings] = React.useState({
    defaultTitle: "AZ Construction - Métallerie sur mesure",
    defaultDescription: "Garde-corps, escaliers, portes, fenêtres, portails, clôtures et grilles de ventilation sur mesure. Profilés Jansen. 1800m² d'atelier.",
    titleSeparator: " | ",
    siteName: "AZ Construction",
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
    facebookPixelId: "",
    robotsIndex: true,
    robotsFollow: true,
    sitemapEnabled: true,
  });

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Paramètres SEO enregistrés");
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SEO</h1>
          <p className="text-gray-500 mt-1">Optimisation pour les moteurs de recherche</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 disabled:opacity-50">
          <Save className="w-4 h-4" />
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden lg:col-span-1">
          {settingsSections.map((s) => (
            <Link key={s.id} href={s.href} className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 ${s.id === "seo" ? "bg-cyan-50 text-cyan-700" : "text-gray-600 hover:bg-gray-50"}`}>
              <s.icon className="w-5 h-5" />
              <span className="font-medium">{s.label}</span>
            </Link>
          ))}
        </nav>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Meta tags par défaut</h2>
            <div className="space-y-4">
              <Input label="Titre par défaut" value={settings.defaultTitle} onChange={(e) => setSettings({ ...settings, defaultTitle: e.target.value })} hint="Utilisé si aucun titre spécifique n'est défini" />
              <Textarea label="Description par défaut" value={settings.defaultDescription} onChange={(e) => setSettings({ ...settings, defaultDescription: e.target.value })} rows={3} hint="150-160 caractères recommandés" />
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Séparateur de titre" value={settings.titleSeparator} onChange={(e) => setSettings({ ...settings, titleSeparator: e.target.value })} hint="Ex: ' | ', ' - '" />
                <Input label="Nom du site" value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Scripts Analytics</h2>
            <div className="space-y-4">
              <Input label="Google Analytics ID" value={settings.googleAnalyticsId} onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })} placeholder="G-XXXXXXXXXX" />
              <Input label="Google Tag Manager ID" value={settings.googleTagManagerId} onChange={(e) => setSettings({ ...settings, googleTagManagerId: e.target.value })} placeholder="GTM-XXXXXXX" />
              <Input label="Facebook Pixel ID" value={settings.facebookPixelId} onChange={(e) => setSettings({ ...settings, facebookPixelId: e.target.value })} placeholder="(optionnel)" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Robots & Sitemap</h2>
            <div className="space-y-4">
              <Switch label="Autoriser l'indexation" checked={settings.robotsIndex} onChange={(c) => setSettings({ ...settings, robotsIndex: c })} description="Les moteurs de recherche peuvent indexer le site" />
              <Switch label="Autoriser le suivi des liens" checked={settings.robotsFollow} onChange={(c) => setSettings({ ...settings, robotsFollow: c })} description="Les moteurs peuvent suivre les liens internes" />
              <Switch label="Générer le sitemap automatiquement" checked={settings.sitemapEnabled} onChange={(c) => setSettings({ ...settings, sitemapEnabled: c })} description="Sitemap XML disponible à /sitemap.xml" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aperçu Google</h2>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-blue-600 text-lg">{settings.defaultTitle}</p>
              <p className="text-emerald-700 text-sm">https://zaconstruction.fr</p>
              <p className="text-gray-600 text-sm line-clamp-2 mt-1">{settings.defaultDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


