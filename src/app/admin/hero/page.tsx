"use client";

import * as React from "react";
import Image from "next/image";
import {
  Save,
  Upload,
  Trash2,
  Loader2,
  Eye,
  Sparkles,
  Type,
  ImageIcon,
  Megaphone,
  Palette,
  LayoutTemplate,
} from "lucide-react";
import { Input, Switch, Textarea } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

interface HeroSettings {
  // Image principale
  backgroundImage: string;
  backgroundOverlayOpacity: number;
  
  // Texte principal
  badge: string;
  badgeEnabled: boolean;
  headline: string;
  headlineAccent: string;
  headlineEnd: string;
  subheadline: string;
  
  // CTA
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  
  // Promo banner
  promoEnabled: boolean;
  promoText: string;
  promoLink: string;
  promoBgColor: string;
  
  // Stats
  statsEnabled: boolean;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

const defaultSettings: HeroSettings = {
  backgroundImage: "/images/hero/atelier-facade.jpg",
  backgroundOverlayOpacity: 70,
  
  badge: "Fabrication française depuis 2015",
  badgeEnabled: true,
  headline: "L'acier sur",
  headlineAccent: "mesure",
  headlineEnd: "vite et bien.",
  subheadline: "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails et clôtures. Profilés Jansen.",
  
  ctaPrimaryText: "Configurer mon projet",
  ctaPrimaryLink: "/configurateur/garde-corps",
  ctaSecondaryText: "Nos réalisations",
  ctaSecondaryLink: "/realisations",
  
  promoEnabled: false,
  promoText: "🎄 Offre de Noël : -15% sur tous les garde-corps jusqu'au 31 décembre !",
  promoLink: "/promotions",
  promoBgColor: "#dc2626",
  
  statsEnabled: true,
  stat1Value: "1800m²",
  stat1Label: "d'atelier",
  stat2Value: "10+",
  stat2Label: "ans d'expertise",
  stat3Value: "1500+",
  stat3Label: "projets réalisés",
};

export default function HeroAdminPage() {
  const [settings, setSettings] = React.useState<HeroSettings>(defaultSettings);
  const [saving, setSaving] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"image" | "text" | "promo" | "stats">("image");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Charger les paramètres
  React.useEffect(() => {
    const saved = localStorage.getItem("az_hero_settings");
    if (saved) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(saved) });
      } catch (e) {
        console.error("Erreur parsing hero settings:", e);
      }
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      localStorage.setItem("az_hero_settings", JSON.stringify(settings));
      window.dispatchEvent(new CustomEvent("az_hero_updated", { detail: settings }));
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Paramètres du Hero enregistrés");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur upload");

      const data = await response.json();
      const url = data.files[0]?.url;

      if (url) {
        setSettings({ ...settings, backgroundImage: url });
        toast.success("Image uploadée");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const tabs = [
    { id: "image", label: "Image", icon: ImageIcon },
    { id: "text", label: "Texte", icon: Type },
    { id: "promo", label: "Promo", icon: Megaphone },
    { id: "stats", label: "Stats", icon: Sparkles },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion du Hero</h1>
          <p className="text-gray-500 mt-1">
            Personnalisez la section principale de votre page d&apos;accueil
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

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Éditeur */}
        <div className="space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 p-1 flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-cyan-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {activeTab === "image" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-cyan-500" />
                  Image de fond
                </h3>
                
                {/* Upload zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    uploading ? "border-cyan-500 bg-cyan-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {uploading ? (
                    <Loader2 className="w-8 h-8 animate-spin text-cyan-500 mx-auto" />
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="text-cyan-600 font-medium">Cliquez</span> ou glissez-déposez
                      </p>
                      <p className="text-xs text-gray-400">JPG, PNG, WebP • 1920×1080 recommandé</p>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                  className="hidden"
                />

                {/* Current image */}
                {settings.backgroundImage && (
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={settings.backgroundImage}
                      alt="Hero background"
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => setSettings({ ...settings, backgroundImage: "" })}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Overlay opacity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Opacité de l&apos;overlay ({settings.backgroundOverlayOpacity}%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={settings.backgroundOverlayOpacity}
                    onChange={(e) => setSettings({ ...settings, backgroundOverlayOpacity: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400 mt-1">Plus c&apos;est élevé, plus le texte sera lisible</p>
                </div>
              </div>
            )}

            {activeTab === "text" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Type className="w-5 h-5 text-cyan-500" />
                  Texte principal
                </h3>
                
                {/* Badge */}
                <div className="space-y-3">
                  <Switch
                    label="Afficher le badge"
                    checked={settings.badgeEnabled}
                    onChange={(checked) => setSettings({ ...settings, badgeEnabled: checked })}
                  />
                  {settings.badgeEnabled && (
                    <Input
                      label="Texte du badge"
                      value={settings.badge}
                      onChange={(e) => setSettings({ ...settings, badge: e.target.value })}
                      placeholder="Fabrication française depuis 2015"
                    />
                  )}
                </div>

                {/* Headline */}
                <div className="grid grid-cols-3 gap-3">
                  <Input
                    label="Titre (début)"
                    value={settings.headline}
                    onChange={(e) => setSettings({ ...settings, headline: e.target.value })}
                    placeholder="L'acier sur"
                  />
                  <Input
                    label="Mot accentué"
                    value={settings.headlineAccent}
                    onChange={(e) => setSettings({ ...settings, headlineAccent: e.target.value })}
                    placeholder="mesure"
                  />
                  <Input
                    label="Titre (fin)"
                    value={settings.headlineEnd}
                    onChange={(e) => setSettings({ ...settings, headlineEnd: e.target.value })}
                    placeholder="vite et bien."
                  />
                </div>

                <Textarea
                  label="Sous-titre"
                  value={settings.subheadline}
                  onChange={(e) => setSettings({ ...settings, subheadline: e.target.value })}
                  rows={3}
                  placeholder="Expert en métallerie sur mesure..."
                />

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Bouton principal</p>
                    <Input
                      label="Texte"
                      value={settings.ctaPrimaryText}
                      onChange={(e) => setSettings({ ...settings, ctaPrimaryText: e.target.value })}
                    />
                    <Input
                      label="Lien"
                      value={settings.ctaPrimaryLink}
                      onChange={(e) => setSettings({ ...settings, ctaPrimaryLink: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Bouton secondaire</p>
                    <Input
                      label="Texte"
                      value={settings.ctaSecondaryText}
                      onChange={(e) => setSettings({ ...settings, ctaSecondaryText: e.target.value })}
                    />
                    <Input
                      label="Lien"
                      value={settings.ctaSecondaryLink}
                      onChange={(e) => setSettings({ ...settings, ctaSecondaryLink: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "promo" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-cyan-500" />
                  Bannière promotionnelle
                </h3>
                
                <Switch
                  label="Activer la bannière promo"
                  checked={settings.promoEnabled}
                  onChange={(checked) => setSettings({ ...settings, promoEnabled: checked })}
                />

                {settings.promoEnabled && (
                  <div className="space-y-4 pt-4">
                    <Textarea
                      label="Texte de la promo"
                      value={settings.promoText}
                      onChange={(e) => setSettings({ ...settings, promoText: e.target.value })}
                      rows={2}
                      placeholder="🎄 Offre de Noël : -15% sur tous les garde-corps !"
                    />
                    <Input
                      label="Lien (optionnel)"
                      value={settings.promoLink}
                      onChange={(e) => setSettings({ ...settings, promoLink: e.target.value })}
                      placeholder="/promotions"
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Couleur de fond
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={settings.promoBgColor}
                          onChange={(e) => setSettings({ ...settings, promoBgColor: e.target.value })}
                          className="w-12 h-12 rounded-lg cursor-pointer"
                        />
                        <div className="flex gap-2">
                          {["#dc2626", "#16a34a", "#2563eb", "#7c3aed", "#ea580c"].map((color) => (
                            <button
                              key={color}
                              onClick={() => setSettings({ ...settings, promoBgColor: color })}
                              className={`w-8 h-8 rounded-lg border-2 transition-all ${
                                settings.promoBgColor === color ? "border-gray-900 scale-110" : "border-transparent"
                              }`}
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    <div
                      className="p-3 rounded-lg text-white text-center text-sm font-medium"
                      style={{ backgroundColor: settings.promoBgColor }}
                    >
                      {settings.promoText || "Aperçu de la bannière"}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "stats" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500" />
                  Statistiques
                </h3>
                
                <Switch
                  label="Afficher les statistiques"
                  checked={settings.statsEnabled}
                  onChange={(checked) => setSettings({ ...settings, statsEnabled: checked })}
                />

                {settings.statsEnabled && (
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="space-y-2">
                      <Input
                        label="Stat 1 - Valeur"
                        value={settings.stat1Value}
                        onChange={(e) => setSettings({ ...settings, stat1Value: e.target.value })}
                        placeholder="1800m²"
                      />
                      <Input
                        label="Label"
                        value={settings.stat1Label}
                        onChange={(e) => setSettings({ ...settings, stat1Label: e.target.value })}
                        placeholder="d'atelier"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        label="Stat 2 - Valeur"
                        value={settings.stat2Value}
                        onChange={(e) => setSettings({ ...settings, stat2Value: e.target.value })}
                        placeholder="10+"
                      />
                      <Input
                        label="Label"
                        value={settings.stat2Label}
                        onChange={(e) => setSettings({ ...settings, stat2Label: e.target.value })}
                        placeholder="ans d'expertise"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        label="Stat 3 - Valeur"
                        value={settings.stat3Value}
                        onChange={(e) => setSettings({ ...settings, stat3Value: e.target.value })}
                        placeholder="1500+"
                      />
                      <Input
                        label="Label"
                        value={settings.stat3Label}
                        onChange={(e) => setSettings({ ...settings, stat3Label: e.target.value })}
                        placeholder="projets réalisés"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Aperçu en direct
            </h3>
            <a
              href="/"
              target="_blank"
              className="text-sm text-cyan-600 hover:text-cyan-700"
            >
              Voir le site →
            </a>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Promo banner preview */}
            {settings.promoEnabled && (
              <div
                className="px-4 py-2 text-white text-center text-xs font-medium"
                style={{ backgroundColor: settings.promoBgColor }}
              >
                {settings.promoText}
              </div>
            )}
            
            {/* Hero preview */}
            <div className="relative h-80">
              {settings.backgroundImage && (
                <Image
                  src={settings.backgroundImage}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"
                style={{ opacity: settings.backgroundOverlayOpacity / 100 }}
              />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                {settings.badgeEnabled && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 mb-4 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {settings.badge}
                  </span>
                )}
                
                <h1 className="text-2xl font-bold text-white leading-tight mb-2">
                  {settings.headline}{" "}
                  <span className="text-cyan-400">{settings.headlineAccent}</span>
                  <br />
                  {settings.headlineEnd}
                </h1>
                
                <p className="text-xs text-white/60 mb-4 max-w-xs">
                  {settings.subheadline}
                </p>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-cyan-500 text-white text-xs font-medium rounded-lg">
                    {settings.ctaPrimaryText}
                  </button>
                  <button className="px-3 py-1.5 border border-white/30 text-white text-xs rounded-lg">
                    {settings.ctaSecondaryText}
                  </button>
                </div>
                
                {settings.statsEnabled && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400">{settings.stat1Value}</div>
                      <div className="text-[10px] text-white/50">{settings.stat1Label}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400">{settings.stat2Value}</div>
                      <div className="text-[10px] text-white/50">{settings.stat2Label}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400">{settings.stat3Value}</div>
                      <div className="text-[10px] text-white/50">{settings.stat3Label}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 text-center">
            Aperçu miniature • L&apos;affichage réel peut varier
          </p>
        </div>
      </div>
    </div>
  );
}


