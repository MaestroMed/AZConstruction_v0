"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

interface SiteSettings {
  logoUrl?: string;
  logoLightUrl?: string;
  showLogoInFooter?: boolean;
}

const footerLinks = {
  produits: [
    { label: "Garde-corps", href: "/produits/garde-corps" },
    { label: "Escaliers", href: "/produits/escaliers" },
    { label: "Portes & Fenêtres", href: "/produits/portes" },
    { label: "Portails & Clôtures", href: "/produits/portails" },
    { label: "Grilles de ventilation", href: "/produits/grilles-ventilation" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Solutions Pro", href: "/solutions-pro" },
    { label: "Habitat", href: "/habitat" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "FAQ", href: "/faq" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const [settings, setSettings] = React.useState<SiteSettings>({});

  // Charger les paramètres depuis localStorage
  React.useEffect(() => {
    const loadSettings = () => {
      const saved = localStorage.getItem("az_settings");
      if (saved) {
        try {
          setSettings(JSON.parse(saved));
        } catch (e) {
          console.error("Erreur parsing settings:", e);
        }
      }
    };
    
    loadSettings();
    
    // Écouter les changements dans localStorage (pour mise à jour entre onglets)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "az_settings") {
        loadSettings();
      }
    };
    
    // Écouter l'événement personnalisé (pour mise à jour dans le même onglet)
    const handleSettingsUpdate = (e: CustomEvent) => {
      setSettings(e.detail);
    };
    
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    };
  }, []);

  // Priorité : logoLightUrl (version claire) > logoUrl (version standard)
  const logoToShow = settings.logoLightUrl || settings.logoUrl;
  const showCustomLogo = logoToShow && settings.showLogoInFooter !== false;

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              {showCustomLogo ? (
                <div className="flex items-center gap-4">
                  {/* Logo agrandi */}
                  <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-glow/20 transition-all duration-300">
                    <Image
                      src={logoToShow!}
                      alt="AZ"
                      width={180}
                      height={56}
                      className="h-14 w-auto object-contain"
                    />
                    {/* Effet glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-glow/0 via-cyan-glow/5 to-cyan-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Texte "CONSTRUCTION" en majuscules fat */}
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-widest text-white uppercase">
                      CONSTRUCTION
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-glow/70">
                      Métallerie sur mesure
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative w-10 h-10">
                    <svg
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M20 8L20 20M20 8L35 8M20 8L15 3M35 8L35 14"
                        stroke="#4fc3f7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35 14L35 22M35 22L38 22"
                        stroke="#4fc3f7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 50L20 25L32 50M12 42H28"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36 28L52 28L36 50L52 50"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">Construction</span>
                </>
              )}
            </Link>

            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Expert en métallerie sur mesure : garde-corps, escaliers, portes,
              fenêtres, portails et clôtures. Profilés Jansen. 1800m² d&apos;atelier.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-white/70 hover:text-cyan-glow transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </a>
              <a
                href="mailto:contact@azconstruction.fr"
                className="flex items-center gap-3 text-white/70 hover:text-cyan-glow transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@azconstruction.fr</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  23 Chemin du Bac des Aubins
                  <br />
                  95820 Bruyères-sur-Oise, France
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Produits</h4>
            <ul className="space-y-2">
              {footerLinks.produits.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} AZ Construction. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-cyan-glow hover:text-navy-dark transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

