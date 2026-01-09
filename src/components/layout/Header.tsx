"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, User, ChevronDown, Fence, DoorClosed, Square, Grid2X2, ArrowRight, Layers, Move3D, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// Catégories de produits avec liens vers les pages produits
const productCategories = [
  { label: "Garde-corps", href: "/produits/garde-corps", icon: Fence, description: "Sécurisez vos espaces avec style" },
  { label: "Escaliers", href: "/produits/escaliers", icon: Move3D, description: "Design et fonctionnalité" },
  { label: "Portes", href: "/produits/portes", icon: DoorClosed, description: "Entrées sur mesure" },
  { label: "Fenêtres", href: "/produits/fenetres", icon: Square, description: "Lumière et isolation" },
  { label: "Portails", href: "/produits/portails", icon: Grid2X2, description: "Sécurité et esthétique" },
  { label: "Clôtures", href: "/produits/clotures", icon: Layers, description: "Délimitez votre espace" },
  { label: "Verrières", href: "/produits/verrieres", icon: Grid2X2, description: "Lumière intérieure style atelier" },
  { label: "Pergolas", href: "/produits/pergolas", icon: Layers, description: "Vivre dehors par tous temps" },
];

const navItems = [
  { label: "Produits", href: "/produits", hasDropdown: true },
  { label: "Réalisations", href: "/realisations" },
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Thermolaquage", href: "/services/thermolaquage" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

// Pages avec fond sombre où le header peut être transparent
const darkBackgroundPages = ["/", "/services/thermolaquage", "/professionnels"];

interface SiteSettings {
  logoUrl?: string;
  logoLightUrl?: string;
  showLogoInHeader?: boolean;
  showEspaceClient?: boolean;
  phone?: string;
}

// Composant Dropdown Produits avec glassmorphism
function ProductsDropdown({ item, isScrolled }: { item: { label: string; href: string }; isScrolled: boolean }) {
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
        className={cn(
          "relative px-4 py-2 transition-all duration-300 flex items-center gap-1 group text-sm font-medium",
          isScrolled ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
        )}
      >
        {item.label}
        <ChevronDown className={cn(
          "w-3.5 h-3.5 opacity-60 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
        <span className="absolute bottom-0 left-4 right-4 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 mt-3 w-80 glass-card overflow-hidden z-50"
          >
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-medium text-white/40 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-cyan-glow" />
                Nos produits sur mesure
              </div>
              {productCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/5 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-glow/30 group-hover:to-blue-500/30 transition-all ring-1 ring-white/10 group-hover:ring-cyan-glow/30">
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

  // Parallax scroll values for subtle effects
  const { scrollY } = useScroll();
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const headerBgScroll = useTransform(scrollY, [0, 100], [0, 0.95]);

  // Détermine si la page a un fond sombre
  const isDarkBackground = darkBackgroundPages.includes(pathname);

  // Charger les paramètres depuis l'API (base de données)
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
        console.error("[Header] Erreur chargement settings API:", e);
      }
      
      try {
        const saved = localStorage.getItem("az_settings");
        if (saved) {
          setSettings(JSON.parse(saved));
        }
      } catch (e) {
        console.error("[Header] Erreur parsing localStorage:", e);
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

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const customLogo = settings.logoLightUrl || settings.logoUrl;
  const showLogoEnabled = settings.showLogoInHeader !== false;
  const hasValidCustomLogo = !!customLogo && (customLogo.startsWith("http") || customLogo.startsWith("data:") || customLogo.startsWith("/"));
  const showCustomLogo = hasValidCustomLogo && showLogoEnabled;
  const shouldHaveBackground = isScrolled || !isDarkBackground;
  
  // Sur les pages à fond clair, le header doit toujours avoir un fond visible
  const headerBg = isDarkBackground ? headerBgScroll : 0.95;

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      )}
      style={{
        backdropFilter: shouldHaveBackground 
          ? `blur(${isDarkBackground ? headerBlur : 20}px) saturate(180%)` 
          : "none",
      }}
    >
      {/* Glassmorphism background layer */}
      <motion.div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          shouldHaveBackground
            ? "bg-navy-dark/80 border-b border-white/5 shadow-lg shadow-navy-dark/20"
            : "bg-transparent"
        )}
        style={{
          opacity: shouldHaveBackground ? headerBg : 0,
        }}
      />

      {/* Subtle gradient line at bottom when scrolled */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          scaleX: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent" />
      </motion.div>

      <div className={cn(
        "container mx-auto px-6 relative transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            {showCustomLogo && customLogo ? (
              <div className="relative flex items-center gap-4">
                {/* Logo container - clean, no border */}
                <motion.div 
                  className="relative transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={customLogo}
                    alt="AZ"
                    width={200}
                    height={64}
                    className={cn(
                      "object-contain transition-all duration-300",
                      isScrolled ? "h-10 w-auto" : "h-14 w-auto"
                    )}
                    priority
                    unoptimized={customLogo.startsWith("data:")}
                  />
                </motion.div>
                
                {/* Text */}
                <div className="flex flex-col">
                  <span className={cn(
                    "font-bold tracking-widest text-white uppercase transition-all duration-300",
                    isScrolled ? "text-xl" : "text-2xl"
                  )}>
                    CONSTRUCTION
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80 font-medium">
                    Métallerie sur mesure
                  </span>
                </div>
              </div>
            ) : (
              <>
                <motion.div 
                  className={cn(
                    "relative transition-all duration-300",
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  <svg
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M20 8L20 20M20 8L35 8M20 8L15 3M35 8L35 14"
                      stroke="url(#logoGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 14L35 22M35 22L38 22"
                      stroke="url(#logoGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 50L20 25L32 50M12 42H28"
                      stroke="url(#logoGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                        <stop stopColor="#00d4ff" />
                        <stop offset="0.5" stopColor="#4fc3f7" />
                        <stop offset="1" stopColor="#1e3a5f" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <div className="flex flex-col">
                  <span className={cn(
                    "font-bold text-white tracking-tight transition-all duration-300",
                    isScrolled ? "text-lg" : "text-xl"
                  )}>
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
                <ProductsDropdown key={item.href} item={item} isScrolled={isScrolled} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 transition-all duration-300 group text-sm font-medium",
                    "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button with glassmorphism - conditionally shown */}
          {settings.showEspaceClient && (
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/login">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "border-white/20 text-white transition-all duration-300",
                      "hover:bg-white/10 hover:border-white/40",
                      "backdrop-blur-sm"
                    )}
                    icon={<User className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Espace client
                  </Button>
                </motion.div>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl text-white transition-all",
              "bg-white/5 hover:bg-white/10 border border-white/10",
              isMobileMenuOpen && "bg-white/10"
            )}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu with glassmorphism */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="glass-card mt-4 p-4"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-xl transition-all text-white/80 hover:text-white hover:bg-white/5 block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {settings.showEspaceClient && (
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        icon={<User className="w-4 h-4" />}
                        iconPosition="left"
                      >
                        Espace client
                      </Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
