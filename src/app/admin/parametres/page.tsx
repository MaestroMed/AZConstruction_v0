"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building,
  Mail,
  CreditCard,
  Search as SearchIcon,
  Save,
  Upload,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Trash2,
  Loader2,
} from "lucide-react";
import { Input, Switch } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: SearchIcon, href: "/admin/parametres/seo" },
];

interface SiteSettings {
  raisonSociale: string;
  adresse: string;
  codePostal: string;
  ville: string;
  pays: string;
  telephone: string;
  email: string;
  siret: string;
  tvaIntra: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  showLogoInHeader: boolean;
  showLogoInFooter: boolean;
  showSocialInHeader: boolean;
  showSocialInFooter: boolean;
  logoUrl: string;
  logoLightUrl: string; // Version claire pour fonds sombres (header/footer)
  faviconUrl: string;
}

const defaultSettings: SiteSettings = {
  raisonSociale: "AZ Construction SARL",
  adresse: "23 Chemin du Bac des Aubins",
  codePostal: "95820",
  ville: "Bruyères-sur-Oise",
  pays: "France",
  telephone: "+33 1 23 45 67 89",
  email: "contact@zaconstruction.fr",
  siret: "123 456 789 00012",
  tvaIntra: "FR12345678901",
  facebook: "https://facebook.com/azconstruction",
  instagram: "https://instagram.com/azconstruction",
  linkedin: "https://linkedin.com/company/azconstruction",
  showLogoInHeader: true,
  showLogoInFooter: true,
  showSocialInHeader: false,
  showSocialInFooter: true,
  logoUrl: "",
  logoLightUrl: "",
  faviconUrl: "",
};

export default function ParametresPage() {
  const [saving, setSaving] = React.useState(false);
  const [uploading, setUploading] = React.useState<"logo" | "logoLight" | "favicon" | null>(null);
  const [settings, setSettings] = React.useState<SiteSettings>(defaultSettings);
  const logoInputRef = React.useRef<HTMLInputElement>(null);
  const logoLightInputRef = React.useRef<HTMLInputElement>(null);
  const faviconInputRef = React.useRef<HTMLInputElement>(null);

  const [loading, setLoading] = React.useState(true);

  // Charger les paramètres depuis l'API (base de données)
  React.useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          if (data.settings) {
            // Mapper les champs de l'API vers le format local
            const apiSettings = data.settings;
            setSettings({
              ...defaultSettings,
              raisonSociale: apiSettings.companyName || defaultSettings.raisonSociale,
              telephone: apiSettings.phone || defaultSettings.telephone,
              email: apiSettings.email || defaultSettings.email,
              adresse: apiSettings.address || defaultSettings.adresse,
              facebook: apiSettings.facebook || defaultSettings.facebook,
              instagram: apiSettings.instagram || defaultSettings.instagram,
              linkedin: apiSettings.linkedin || defaultSettings.linkedin,
              showLogoInHeader: apiSettings.showLogoInHeader ?? defaultSettings.showLogoInHeader,
              logoUrl: apiSettings.logoUrl || "",
              logoLightUrl: apiSettings.logoLightUrl || "",
              faviconUrl: apiSettings.faviconUrl || "",
            });
          }
        }
      } catch (e) {
        console.error("Erreur chargement settings:", e);
      } finally {
        setLoading(false);
      }
    };
    
    loadSettings();
  }, []);

  const handleUpload = async (file: File, type: "logo" | "logoLight" | "favicon") => {
    setUploading(type);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'upload");
      }

      const data = await response.json();
      const url = data.files[0]?.url;

      if (url) {
        const fieldKey = type === "logo" ? "logoUrl" : type === "logoLight" ? "logoLightUrl" : "faviconUrl";
        const newSettings = {
          ...settings,
          [fieldKey]: url,
        };
        setSettings(newSettings);
        
        // Sauvegarder en base de données via l'API
        const apiPayload = {
          logoUrl: newSettings.logoUrl,
          logoLightUrl: newSettings.logoLightUrl,
          faviconUrl: newSettings.faviconUrl,
          showLogoInHeader: newSettings.showLogoInHeader,
        };
        
        await fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiPayload),
        });
        
        window.dispatchEvent(new CustomEvent("az_settings_updated", { detail: newSettings }));
        const labels = { logo: "Logo principal", logoLight: "Logo version claire", favicon: "Favicon" };
        toast.success(`${labels[type]} uploadé et sauvegardé`);
      }
    } catch (error) {
      console.error("Erreur upload:", error);
      toast.error("Erreur lors de l'upload");
    } finally {
      setUploading(null);
    }
  };

  const handleRemoveImage = async (type: "logo" | "logoLight" | "favicon") => {
    const fieldKey = type === "logo" ? "logoUrl" : type === "logoLight" ? "logoLightUrl" : "faviconUrl";
    const newSettings = {
      ...settings,
      [fieldKey]: "",
    };
    setSettings(newSettings);
    
    // Sauvegarder en base de données via l'API
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          logoUrl: newSettings.logoUrl,
          logoLightUrl: newSettings.logoLightUrl,
          faviconUrl: newSettings.faviconUrl,
        }),
      });
    } catch (e) {
      console.error("Erreur suppression:", e);
    }
    
    window.dispatchEvent(new CustomEvent("az_settings_updated", { detail: newSettings }));
    const labels = { logo: "Logo principal", logoLight: "Logo version claire", favicon: "Favicon" };
    toast.success(`${labels[type]} supprimé`);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Mapper vers le format de l'API
      const apiPayload = {
        companyName: settings.raisonSociale,
        phone: settings.telephone,
        email: settings.email,
        address: settings.adresse,
        facebook: settings.facebook,
        instagram: settings.instagram,
        linkedin: settings.linkedin,
        showLogoInHeader: settings.showLogoInHeader,
        logoUrl: settings.logoUrl,
        logoLightUrl: settings.logoLightUrl,
        faviconUrl: settings.faviconUrl,
      };
      
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });
      
      if (!response.ok) {
        throw new Error("Erreur API");
      }
      
      // Déclencher un événement pour mettre à jour les autres composants
      window.dispatchEvent(new CustomEvent("az_settings_updated", { detail: settings }));
      toast.success("Paramètres enregistrés en base de données");
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-500 mt-1">
            Configuration générale du site
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {settingsSections.map((section) => {
              const isActive = section.id === "general";
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 transition-colors ${
                    isActive
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Company info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Building className="w-5 h-5" />
              Informations de l&apos;entreprise
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Raison sociale"
                value={settings.raisonSociale}
                onChange={(e) => setSettings({ ...settings, raisonSociale: e.target.value })}
              />
              <Input
                label="Email de contact"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              />
              <Input
                label="Téléphone"
                value={settings.telephone}
                onChange={(e) => setSettings({ ...settings, telephone: e.target.value })}
              />
              <Input
                label="SIRET"
                value={settings.siret}
                onChange={(e) => setSettings({ ...settings, siret: e.target.value })}
              />
              <div className="md:col-span-2">
                <Input
                  label="Adresse"
                  value={settings.adresse}
                  onChange={(e) => setSettings({ ...settings, adresse: e.target.value })}
                />
              </div>
              <Input
                label="Code postal"
                value={settings.codePostal}
                onChange={(e) => setSettings({ ...settings, codePostal: e.target.value })}
              />
              <Input
                label="Ville"
                value={settings.ville}
                onChange={(e) => setSettings({ ...settings, ville: e.target.value })}
              />
              <Input
                label="TVA Intracommunautaire"
                value={settings.tvaIntra}
                onChange={(e) => setSettings({ ...settings, tvaIntra: e.target.value })}
              />
            </div>
          </div>

          {/* Branding */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Logo & Favicon
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Uploadez deux versions de votre logo : une pour les fonds clairs et une pour le header/footer sombre.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Logo principal (fond clair) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo principal
                </label>
                <p className="text-xs text-gray-400 mb-3">Pour les zones à fond clair</p>
                {settings.logoUrl ? (
                  <div className="space-y-3">
                    <div className="relative border border-gray-200 rounded-xl p-4 bg-white">
                      <div className="relative h-16 flex items-center justify-center">
                        <Image
                          src={settings.logoUrl}
                          alt="Logo"
                          width={180}
                          height={56}
                          className="object-contain max-h-full"
                          unoptimized={settings.logoUrl.startsWith("data:")}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => logoInputRef.current?.click()}
                        className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        Remplacer
                      </button>
                      <button
                        onClick={() => handleRemoveImage("logo")}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => logoInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
                      uploading === "logo" ? "border-cyan-500 bg-cyan-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {uploading === "logo" ? (
                      <Loader2 className="w-6 h-6 animate-spin text-cyan-500 mx-auto" />
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Logo couleur/sombre</p>
                      </>
                    )}
                  </div>
                )}
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "logo")}
                  className="hidden"
                />
              </div>

              {/* Logo version claire (header/footer) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo version claire ⭐
                </label>
                <p className="text-xs text-gray-400 mb-3">Pour le header/footer sombre</p>
                {settings.logoLightUrl ? (
                  <div className="space-y-3">
                    <div className="relative rounded-xl p-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
                      <div className="relative flex items-center justify-center">
                        <div className="p-2 rounded-lg bg-white/10 border border-white/20">
                          <Image
                            src={settings.logoLightUrl}
                            alt="Logo clair"
                            width={160}
                            height={48}
                            className="h-10 w-auto object-contain"
                            unoptimized={settings.logoLightUrl.startsWith("data:")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => logoLightInputRef.current?.click()}
                        className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        Remplacer
                      </button>
                      <button
                        onClick={() => handleRemoveImage("logoLight")}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => logoLightInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all bg-gradient-to-br from-slate-700 to-slate-800 ${
                      uploading === "logoLight" ? "border-cyan-500" : "border-slate-500 hover:border-slate-400"
                    }`}
                  >
                    {uploading === "logoLight" ? (
                      <Loader2 className="w-6 h-6 animate-spin text-cyan-400 mx-auto" />
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-white/50 mx-auto mb-2" />
                        <p className="text-sm text-white/70">Logo blanc/clair</p>
                        <p className="text-xs text-white/40 mt-1">PNG transparent</p>
                      </>
                    )}
                  </div>
                )}
                <input
                  ref={logoLightInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "logoLight")}
                  className="hidden"
                />
              </div>
            </div>

            {/* Aperçu final */}
            {(settings.logoUrl || settings.logoLightUrl) && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs font-medium text-gray-500 mb-3">👁️ Aperçu sur le site (Header)</p>
                <div className="rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Logo + Texte "Construction" comme sur le site */}
                      <div className="p-2.5 rounded-lg bg-white/10 border border-white/20">
                        <Image
                          src={settings.logoLightUrl || settings.logoUrl || ""}
                          alt="Logo"
                          width={160}
                          height={48}
                          className="h-12 w-auto object-contain"
                          unoptimized={(settings.logoLightUrl || settings.logoUrl || "").startsWith("data:")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-widest text-white uppercase">
                          CONSTRUCTION
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-cyan-400/70">
                          Métallerie sur mesure
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-white/50 text-xs">
                      <span>Produits</span>
                      <span>Réalisations</span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  💡 Uploadez seulement le logo &quot;AZ&quot; — &quot;Construction&quot; s&apos;affiche automatiquement à côté
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Favicon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Favicon
                </label>
                {settings.faviconUrl ? (
                  <div className="relative border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="relative h-24 flex items-center justify-center">
                      <Image
                        src={settings.faviconUrl}
                        alt="Favicon"
                        width={64}
                        height={64}
                        className="object-contain"
                        unoptimized={settings.faviconUrl.startsWith("data:")}
                      />
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      <button
                        onClick={() => faviconInputRef.current?.click()}
                        className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        Remplacer
                      </button>
                      <button
                        onClick={() => handleRemoveImage("favicon")}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => faviconInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                      uploading === "favicon" ? "border-cyan-500 bg-cyan-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {uploading === "favicon" ? (
                      <Loader2 className="w-8 h-8 animate-spin text-cyan-500 mx-auto" />
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          <span className="text-cyan-600 font-medium">Cliquez</span> pour uploader
                        </p>
                        <p className="text-xs text-gray-400 mt-1">ICO, PNG, SVG, 32x32px</p>
                      </>
                    )}
                  </div>
                )}
                <input
                  ref={faviconInputRef}
                  type="file"
                  accept="image/*,.ico"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "favicon")}
                  className="hidden"
                />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <Switch
                label="Afficher le logo dans le header"
                checked={settings.showLogoInHeader}
                onChange={(checked) => setSettings({ ...settings, showLogoInHeader: checked })}
              />
              <Switch
                label="Afficher le logo dans le footer"
                checked={settings.showLogoInFooter}
                onChange={(checked) => setSettings({ ...settings, showLogoInFooter: checked })}
              />
            </div>
          </div>

          {/* Social networks */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Réseaux sociaux
            </h2>
            <div className="space-y-4">
              <Input
                label="Facebook"
                value={settings.facebook}
                onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                placeholder="https://facebook.com/..."
                leftIcon={<Facebook className="w-4 h-4" />}
              />
              <Input
                label="Instagram"
                value={settings.instagram}
                onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                placeholder="https://instagram.com/..."
                leftIcon={<Instagram className="w-4 h-4" />}
              />
              <Input
                label="LinkedIn"
                value={settings.linkedin}
                onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                placeholder="https://linkedin.com/company/..."
                leftIcon={<Linkedin className="w-4 h-4" />}
              />
            </div>
            <div className="mt-6 space-y-4">
              <Switch
                label="Afficher les réseaux sociaux dans le header"
                checked={settings.showSocialInHeader}
                onChange={(checked) => setSettings({ ...settings, showSocialInHeader: checked })}
              />
              <Switch
                label="Afficher les réseaux sociaux dans le footer"
                checked={settings.showSocialInFooter}
                onChange={(checked) => setSettings({ ...settings, showSocialInFooter: checked })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
