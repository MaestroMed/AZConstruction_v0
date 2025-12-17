"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronDown, Fence, DoorClosed, Square, Grid2X2, ArrowRight, Layers, Move3D } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// Catégories de produits avec liens vers les configurateurs
const productCategories = [
  { label: "Garde-corps", href: "/configurateur/garde-corps", icon: Fence, description: "Sécurisez vos espaces avec style" },
  { label: "Escaliers", href: "/configurateur/escaliers", icon: Move3D, description: "Design et fonctionnalité" },
  { label: "Portes", href: "/configurateur/portes", icon: DoorClosed, description: "Entrées sur mesure" },
  { label: "Fenêtres", href: "/configurateur/fenetres", icon: Square, description: "Lumière et isolation" },
  { label: "Portails", href: "/configurateur/portails", icon: Grid2X2, description: "Sécurité et esthétique" },
  { label: "Clôtures", href: "/configurateur/clotures", icon: Layers, description: "Délimitez votre espace" },
];

const navItems = [
  { label: "Produits", href: "/produits", hasDropdown: true },
  { label: "Réalisations", href: "/realisations" },
  { label: "Solutions Pro", href: "/solutions-pro" },
  { label: "Habitat", href: "/habitat" },
  { label: "Thermolaquage", href: "/services/thermolaquage", highlight: true },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

// Pages avec fond sombre où le header peut être transparent
const darkBackgroundPages = ["/"];

interface SiteSettings {
  logoUrl?: string;
  logoLightUrl?: string;
  showLogoInHeader?: boolean;
}

// Composant Dropdown Produits
function ProductsDropdown({ item }: { item: { label: string; href: string } }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="relative px-4 py-2 text-white/80 hover:text-white transition-colors flex items-center gap-1 group"
      >
        <span className="text-cyan-glow/70 text-sm">«</span>
        {item.label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-glow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-80 bg-navy-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-medium text-white/40 uppercase tracking-wider">
                Configurez votre projet
              </div>
              {productCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-glow/30 group-hover:to-blue-500/30 transition-colors">
                    <category.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-cyan-glow transition-colors">
                      {category.label}
                    </div>
                    <div className="text-white/50 text-sm">
                      {category.description}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-cyan-glow group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-white/10">
                <Link
                  href="/produits"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-cyan-glow hover:bg-cyan-glow/10 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Voir tous les produits
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [settings, setSettings] = React.useState<SiteSettings>({});

  // Détermine si la page a un fond sombre
  const isDarkBackground = darkBackgroundPages.includes(pathname);

  // Charger les paramètres depuis localStorage
  React.useEffect(() => {
    const loadSettings = () => {
      try {
        const saved = localStorage.getItem("az_settings");
        console.log("[Header] Loading settings from localStorage:", saved);
        if (saved) {
          const parsed = JSON.parse(saved);
          console.log("[Header] Parsed settings:", parsed);
          console.log("[Header] logoUrl:", parsed.logoUrl);
          console.log("[Header] logoLightUrl:", parsed.logoLightUrl);
          console.log("[Header] showLogoInHeader:", parsed.showLogoInHeader);
          setSettings(parsed);
        }
      } catch (e) {
        console.error("[Header] Erreur parsing settings:", e);
      }
    };
    
    // Charger immédiatement
    loadSettings();
    
    // Re-charger à chaque focus pour capturer les changements
    const handleFocus = () => loadSettings();
    
    // Écouter les changements dans localStorage (pour mise à jour entre onglets)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "az_settings") {
        console.log("[Header] Storage event detected");
        loadSettings();
      }
    };
    
    // Écouter l'événement personnalisé (pour mise à jour dans le même onglet)
    const handleSettingsUpdate = (e: CustomEvent) => {
      console.log("[Header] Custom event detected:", e.detail);
      setSettings(e.detail);
    };
    
    window.addEventListener("focus", handleFocus);
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("az_settings_updated", handleSettingsUpdate as EventListener);
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Vérifier si on doit afficher le logo uploadé
  // Priorité : logoLightUrl (version claire) > logoUrl (version standard)
  const logoToShow = settings.logoLightUrl || settings.logoUrl;
  // Par défaut showLogoInHeader = true si undefined
  const showLogoEnabled = settings.showLogoInHeader !== false;
  const showCustomLogo = !!logoToShow && showLogoEnabled;
  
  // Debug
  console.log("[Header] logoToShow:", logoToShow, "showLogoEnabled:", showLogoEnabled, "showCustomLogo:", showCustomLogo);

  // Le header doit avoir un fond si on est scrollé OU si la page a un fond clair
  const shouldHaveBackground = isScrolled || !isDarkBackground;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        shouldHaveBackground
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {showCustomLogo ? (
              /* Logo personnalisé uploadé depuis le back-office + texte "Construction" */
              <div className="relative flex items-center gap-4">
                {/* Logo agrandi */}
                <div className="relative p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 group-hover:border-cyan-glow/30 transition-all duration-300 shadow-lg">
                  <Image
                    src={logoToShow!}
                    alt="AZ"
                    width={200}
                    height={64}
                    className="h-14 w-auto object-contain"
                    priority
                  />
                  {/* Effet glow subtil au hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-glow/0 via-cyan-glow/5 to-cyan-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Texte "CONSTRUCTION" en majuscules fat */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-widest text-white uppercase">
                    CONSTRUCTION
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80 font-medium">
                    Métallerie sur mesure
                  </span>
                </div>
              </div>
            ) : (
              /* Logo par défaut (SVG + texte) */
              <>
                <div className="relative w-12 h-12">
                  {/* Logo AZ avec grue stylisée */}
                  <svg
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Grue */}
                    <path
                      d="M20 8L20 20M20 8L35 8M20 8L15 3M35 8L35 14"
                      stroke="url(#logoGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Cable */}
                    <path
                      d="M35 14L35 22M35 22L38 22"
                      stroke="url(#logoGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {/* A */}
                    <path
                      d="M8 50L20 25L32 50M12 42H28"
                      stroke="url(#logoGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Z */}
                    <path
                      d="M36 28L52 28L36 50L52 50"
                      stroke="url(#logoGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="logoGradient"
                        x1="8"
                        y1="3"
                        x2="52"
                        y2="50"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4fc3f7" />
                        <stop offset="0.5" stopColor="#1e3a5f" />
                        <stop offset="1" stopColor="#0b1d3a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">
                    Construction
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              "hasDropdown" in item && item.hasDropdown ? (
                <ProductsDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 transition-colors group",
                    "highlight" in item && item.highlight
                      ? "text-cyan-glow hover:text-cyan-pale"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-1">
                    {"highlight" in item && item.highlight ? (
                      <span className="text-cyan-glow text-sm">★</span>
                    ) : (
                      <span className="text-cyan-glow/70 text-sm">«</span>
                    )}
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-glow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                icon={<User className="w-4 h-4" />}
                iconPosition="left"
              >
                Espace client
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-navy-dark/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span className="text-cyan-glow/70 mr-2">«</span>
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white"
                    icon={<User className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Espace client
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}


