"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Configurator Redirect Page
 * 
 * The 3D configurator is temporarily disabled.
 * This page redirects users to the corresponding product landing page.
 */
export default function ConfigurateurRedirectPage() {
  const params = useParams();
  const router = useRouter();
  const family = params.family as string;

  useEffect(() => {
    // Redirect to product page after a brief delay
    const timeout = setTimeout(() => {
      router.replace(`/produits/${family}`);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [family, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 max-w-lg text-center border border-white/20"
      >
        <div className="w-20 h-20 bg-cyan-glow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-10 h-10 text-cyan-glow" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Configurateur en maintenance
        </h1>

        <p className="text-white/70 mb-8 leading-relaxed">
          Notre configurateur 3D est temporairement indisponible. 
          Vous allez être redirigé vers la page produit correspondante.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" />
          <span className="text-white/60 text-sm">Redirection en cours...</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/produits/${family}`}>
            <Button
              size="lg"
              className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Voir le produit
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Demander un devis
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
