import { Metadata } from "next";
import Link from "next/link";
import { Cookie, Shield, BarChart3, Target, Settings, ExternalLink } from "lucide-react";
import { ResetCookiesButton } from "@/components/gdpr";

export const metadata: Metadata = {
  title: "Politique des Cookies",
  description: "Politique de gestion des cookies du site AZ Construction. Découvrez comment nous utilisons les cookies et gérez vos préférences.",
  alternates: {
    canonical: "https://azconstruction.fr/cookies",
  },
  openGraph: {
    title: "Politique des Cookies | AZ Construction",
    description: "Politique de gestion des cookies du site AZ Construction.",
    url: "https://azconstruction.fr/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-navy-dark dark:to-slate-900">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Politique des Cookies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Introduction */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                  Qu&apos;est-ce qu&apos;un cookie ?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-0">
                  Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone 
                  lors de la visite d&apos;un site web. Il permet au site de mémoriser des informations sur 
                  votre visite, comme votre langue préférée et d&apos;autres paramètres. Cela peut faciliter 
                  votre prochaine visite et rendre le site plus utile pour vous.
                </p>
              </div>

              {/* Types de cookies */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Les cookies que nous utilisons
              </h2>

              <div className="grid gap-6 mb-12">
                {/* Cookies nécessaires */}
                <CookieCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Cookies strictement nécessaires"
                  description="Ces cookies sont essentiels au fonctionnement du site. Ils vous permettent de naviguer et d'utiliser les fonctionnalités de base. Sans ces cookies, le site ne peut pas fonctionner correctement."
                  examples={["Session utilisateur", "Préférences de consentement", "Sécurité"]}
                  retention="Session ou 13 mois"
                  required
                />

                {/* Cookies analytiques */}
                <CookieCard
                  icon={<BarChart3 className="w-6 h-6" />}
                  title="Cookies analytiques"
                  description="Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site. Ils collectent des informations anonymes sur les pages visitées, le temps passé sur le site, et les éventuelles erreurs rencontrées."
                  examples={["Google Analytics 4", "Plausible Analytics", "Microsoft Clarity"]}
                  retention="Jusqu'à 26 mois"
                  providers={[
                    { name: "Google Analytics", url: "https://policies.google.com/privacy" },
                    { name: "Plausible", url: "https://plausible.io/privacy" },
                    { name: "Microsoft Clarity", url: "https://clarity.microsoft.com/terms" },
                  ]}
                />

                {/* Cookies marketing */}
                <CookieCard
                  icon={<Target className="w-6 h-6" />}
                  title="Cookies marketing"
                  description="Ces cookies sont utilisés pour vous proposer des publicités pertinentes. Ils peuvent être utilisés pour limiter le nombre de fois où vous voyez une publicité et mesurer l'efficacité des campagnes publicitaires."
                  examples={["Facebook Pixel", "Google Ads", "LinkedIn Insight Tag"]}
                  retention="Jusqu'à 24 mois"
                  providers={[
                    { name: "Meta (Facebook)", url: "https://www.facebook.com/privacy/policy/" },
                    { name: "Google Ads", url: "https://policies.google.com/privacy" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/legal/privacy-policy" },
                  ]}
                />

                {/* Cookies fonctionnels */}
                <CookieCard
                  icon={<Settings className="w-6 h-6" />}
                  title="Cookies fonctionnels"
                  description="Ces cookies permettent d'améliorer votre expérience sur le site en mémorisant vos préférences (langue, région, options d'affichage). Ils peuvent également être utilisés pour fournir des fonctionnalités améliorées."
                  examples={["Préférences de langue", "Historique de navigation", "Panier sauvegardé"]}
                  retention="Jusqu'à 12 mois"
                />
              </div>

              {/* Gestion des cookies */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-2xl p-8 border border-cyan-500/20 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                  Comment gérer vos cookies ?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton ci-dessous 
                  ou via le lien &quot;Gérer les cookies&quot; présent dans le pied de page du site.
                </p>
                <ResetCookiesButton />
              </div>

              {/* Désactivation via navigateur */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Désactivation via votre navigateur
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vous pouvez également configurer votre navigateur pour bloquer tous les cookies ou seulement 
                certains types. Voici les liens vers les instructions des principaux navigateurs :
              </p>
              <ul className="space-y-2 mb-12">
                {[
                  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" },
                  { name: "Apple Safari", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
                  { name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                ].map((browser) => (
                  <li key={browser.name}>
                    <a
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      {browser.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Consent Mode V2 */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                  Google Consent Mode V2
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Notre site utilise le <strong>Google Consent Mode V2</strong>, une technologie qui permet 
                  de respecter vos choix de consentement tout en maintenant certaines fonctionnalités de mesure 
                  de base de manière anonyme.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-0">
                  Lorsque vous refusez les cookies analytiques ou marketing, Google adapte automatiquement 
                  son comportement pour respecter votre choix, tout en permettant une modélisation des données 
                  respectueuse de la vie privée.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                  Questions ?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter :
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-6">
                  <li>
                    Par email :{" "}
                    <a href="mailto:contact@azconstruction.fr" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      contact@azconstruction.fr
                    </a>
                  </li>
                  <li>
                    Par téléphone :{" "}
                    <a href="tel:+33971357496" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      09 71 35 74 96
                    </a>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/confidentialite"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Politique de confidentialité →
                  </Link>
                  <Link
                    href="/mentions-legales"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Mentions légales →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant pour afficher une catégorie de cookies
function CookieCard({
  icon,
  title,
  description,
  examples,
  retention,
  required = false,
  providers,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
  retention: string;
  required?: boolean;
  providers?: Array<{ name: string; url: string }>;
}) {
  return (
    <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white m-0">
              {title}
            </h3>
            {required && (
              <span className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full">
                Toujours actif
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {examples.map((example) => (
              <span
                key={example}
                className="text-xs bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-lg"
              >
                {example}
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium">Durée de conservation :</span> {retention}
          </div>
          {providers && providers.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Politiques de confidentialité des tiers :
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {providers.map((provider) => (
                  <a
                    key={provider.name}
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    {provider.name}
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
