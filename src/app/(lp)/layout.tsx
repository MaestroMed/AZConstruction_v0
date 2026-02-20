import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Barre top sticky — logo + téléphone uniquement, pas de nav */}
      <header className="sticky top-0 z-50 bg-navy-dark border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
              AZ <span className="text-cyan-glow">Construction</span>
            </span>
          </Link>
          <PhoneLink variant="button" />
        </div>
      </header>

      <main>{children}</main>

      {/* Footer minimaliste */}
      <footer className="bg-navy-dark border-t border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} AZ Construction — Bruyères-sur-Oise (95)
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/mentions-legales" className="text-white/30 hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-white/30 hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>

      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
