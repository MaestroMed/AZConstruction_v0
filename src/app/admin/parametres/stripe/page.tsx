"use client";

import React from "react";
import {
  CreditCard,
  Key,
  Webhook,
  CheckCircle,
  XCircle,
  ExternalLink,
  Save,
  AlertTriangle,
  Euro,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui";
import { toast } from "sonner";

interface StripeSettings {
  enabled: boolean;
  testMode: boolean;
  publishableKey: string;
  secretKeySet: boolean;
  webhookSecretSet: boolean;
  currency: string;
  paymentMethods: string[];
  minOrderAmount: number;
  depositPercent: number;
}

export default function StripeSettingsPage() {
  const [settings, setSettings] = React.useState<StripeSettings>({
    enabled: false,
    testMode: true,
    publishableKey: "",
    secretKeySet: false,
    webhookSecretSet: false,
    currency: "EUR",
    paymentMethods: ["card"],
    minOrderAmount: 100,
    depositPercent: 30,
  });
  const [saving, setSaving] = React.useState(false);
  const [secretKey, setSecretKey] = React.useState("");
  const [webhookSecret, setWebhookSecret] = React.useState("");

  React.useEffect(() => {
    // Charger les paramètres depuis le localStorage ou API
    const saved = localStorage.getItem("az_stripe_settings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // En production, ces clés seraient sauvegardées côté serveur de manière sécurisée
      const updatedSettings = {
        ...settings,
        secretKeySet: secretKey.length > 0 || settings.secretKeySet,
        webhookSecretSet: webhookSecret.length > 0 || settings.webhookSecretSet,
      };
      
      localStorage.setItem("az_stripe_settings", JSON.stringify(updatedSettings));
      setSettings(updatedSettings);
      
      // Clear sensitive fields after save
      setSecretKey("");
      setWebhookSecret("");
      
      toast.success("Paramètres Stripe enregistrés");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const testConnection = async () => {
    toast.info("Test de connexion Stripe en cours...");
    // Simuler un test de connexion
    setTimeout(() => {
      if (settings.publishableKey.startsWith("pk_")) {
        toast.success("Connexion Stripe réussie !");
      } else {
        toast.error("Clé publishable invalide");
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Configuration Stripe
          </h1>
          <p className="text-gray-500 mt-1">
            Gérez les paramètres de paiement en ligne
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={testConnection}>
            Tester la connexion
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Enregistrement..." : "Enregistrer"}
          </Button>
        </div>
      </div>

      {/* Mode Test Warning */}
      {settings.testMode && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-amber-800">Mode Test actif</p>
            <p className="text-sm text-amber-700">
              Les paiements ne seront pas réellement débités. Utilisez les{" "}
              <a
                href="https://stripe.com/docs/testing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cartes de test Stripe
              </a>{" "}
              pour vos essais.
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activation */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-cyan-600" />
            Activation
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Paiement en ligne</p>
                <p className="text-sm text-gray-500">
                  Activer les paiements Stripe sur le site
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enabled}
                  onChange={(e) =>
                    setSettings({ ...settings, enabled: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Mode Test</p>
                <p className="text-sm text-gray-500">
                  Utiliser les clés de test (développement)
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.testMode}
                  onChange={(e) =>
                    setSettings({ ...settings, testMode: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-cyan-600" />
            Clés API
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clé Publishable (pk_...)
              </label>
              <input
                type="text"
                value={settings.publishableKey}
                onChange={(e) =>
                  setSettings({ ...settings, publishableKey: e.target.value })
                }
                placeholder="pk_test_..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clé Secrète (sk_...)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder={settings.secretKeySet ? "••••••••••••••••" : "sk_test_..."}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                {settings.secretKeySet && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                La clé secrète ne sera jamais affichée après sauvegarde
              </p>
            </div>
          </div>
        </div>

        {/* Webhook */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Webhook className="w-5 h-5 text-cyan-600" />
            Webhook
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-1">URL du Webhook</p>
              <code className="text-sm bg-white px-3 py-1.5 rounded border block break-all">
                {typeof window !== "undefined" ? window.location.origin : ""}/api/webhooks/stripe
              </code>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secret du Webhook (whsec_...)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={webhookSecret}
                  onChange={(e) => setWebhookSecret(e.target.value)}
                  placeholder={settings.webhookSecretSet ? "••••••••••••••••" : "whsec_..."}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                {settings.webhookSecretSet && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>
            </div>

            <a
              href="https://dashboard.stripe.com/webhooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-cyan-600 hover:underline"
            >
              Configurer dans Stripe Dashboard
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-5 h-5 text-cyan-600" />
            Paramètres de paiement
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Montant minimum (€)
                </label>
                <input
                  type="number"
                  value={settings.minOrderAmount}
                  onChange={(e) =>
                    setSettings({ ...settings, minOrderAmount: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Percent className="w-4 h-4 inline mr-1" />
                  Acompte (%)
                </label>
                <input
                  type="number"
                  value={settings.depositPercent}
                  onChange={(e) =>
                    setSettings({ ...settings, depositPercent: parseInt(e.target.value) || 30 })
                  }
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moyens de paiement acceptés
              </label>
              <div className="space-y-2">
                {[
                  { id: "card", label: "Carte bancaire" },
                  { id: "sepa_debit", label: "Prélèvement SEPA" },
                  { id: "bancontact", label: "Bancontact" },
                ].map((method) => (
                  <label key={method.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.paymentMethods.includes(method.id)}
                      onChange={(e) => {
                        const methods = e.target.checked
                          ? [...settings.paymentMethods, method.id]
                          : settings.paymentMethods.filter((m) => m !== method.id);
                        setSettings({ ...settings, paymentMethods: methods });
                      }}
                      className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className="text-sm">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">État de la configuration</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            {settings.publishableKey ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-sm">Clé Publishable</span>
          </div>
          <div className="flex items-center gap-2">
            {settings.secretKeySet ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-sm">Clé Secrète</span>
          </div>
          <div className="flex items-center gap-2">
            {settings.webhookSecretSet ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-sm">Webhook</span>
          </div>
          <div className="flex items-center gap-2">
            {settings.enabled ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-sm">Paiement actif</span>
          </div>
        </div>
      </div>
    </div>
  );
}







