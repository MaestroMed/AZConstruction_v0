"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { GlowButton, PhoneLink } from "@/components/ui";

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
  services: [
    { label: "Thermolaquage", href: "/services/thermolaquage", highlight: true },
    { label: "Jantes", href: "/services/thermolaquage/jantes" },
    { label: "Rénovation Voiture", href: "/services/thermolaquage/renovation-voiture" },
    { label: "Moto Art", href: "/services/thermolaquage/moto-art" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Professionnels", href: "/professionnels" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "FAQ", href: "/faq" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const [settings, setSettings] = React.useState<SiteSettings>({});

  React.useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          if (data.settings) {
            setSettings(data.settings);
            return;
          }
        }
      } catch (e) {
        console.error("[Footer] Erreur chargement settings:", e);
      }

      try {
        const saved = localStorage.getItem("az_settings");
        if (saved) {
          setSettings(JSON.parse(saved));
        }
      } catch (e) {
        console.error("Erreur parsing settings:", e);
      }
    };
    
    loadSettings();
    
    const handleSettingsUpdate = (e: CustomEvent) => {
      setSettings(e.detail);
    };
    
    window.addEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    return () => {
      window.removeEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    };
  }, []);

  const logoToShow = settings.logoLightUrl || settings.logoUrl;
  const showCustomLogo = logoToShow && settings.showLogoInFooter !== false;

  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-medium/50 to-navy-dark" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-corporate/10 rounded-full blur-[150px]" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            className="glass-card p-10 md:p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 glass-card-glow px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">Démarrez votre projet</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un projet de métallerie ?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Demandez votre devis gratuit et recevez une réponse personnalisée sous 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Demander un devis
                </GlowButton>
              </Link>
              <PhoneLink variant="button" className="justify-center" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              {showCustomLogo ? (
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="relative p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-glow/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={logoToShow!}
                      alt="AZ"
                      width={160}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-glow/0 via-cyan-glow/5 to-cyan-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-widest text-white uppercase">
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
                        stroke="#00d4ff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35 14L35 22M35 22L38 22"
                        stroke="#00d4ff"
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

            <p className="text-white/50 mb-6 max-w-sm leading-relaxed text-sm">
              Expert en métallerie sur mesure depuis 2018 : garde-corps, escaliers, 
              portes, fenêtres, portails et clôtures. Profilés Jansen. 1800m² d&apos;atelier.
            </p>

            {/* Contact Info with glassmorphism cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 hover:text-cyan-glow transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-glow/10 group-hover:border-cyan-glow/30 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <PhoneLink className="text-inherit" showIcon={false} />
              </div>
              <a
                href="mailto:contact@azconstruction.fr"
                className="flex items-center gap-3 text-white/60 hover:text-cyan-glow transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-glow/10 group-hover:border-cyan-glow/30 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@azconstruction.fr</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">
                  23 Chemin du Bac des Aubins
                  <br />
                  95820 Bruyères-sur-Oise
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Produits</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-glow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="text-cyan-glow/50 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm inline-flex items-center gap-1 group transition-colors ${
                      "highlight" in link && link.highlight
                        ? "text-cyan-glow hover:text-cyan-pale"
                        : "text-white/50 hover:text-cyan-glow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-glow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="text-cyan-glow/50 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Infos</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-glow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="text-cyan-glow/50 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} AZ Construction. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-cyan-glow/20 hover:border-cyan-glow/30 hover:text-cyan-glow transition-all"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
