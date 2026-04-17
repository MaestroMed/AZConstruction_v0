"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.error("[global-error]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy-dark to-blue-corporate px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-8">
          <AlertTriangle className="w-9 h-9 text-red-400" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Une erreur est survenue
        </h1>

        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Nous rencontrons un problème temporaire. Vous pouvez réessayer ou
          revenir à l'accueil. Si le problème persiste, n'hésitez pas à{" "}
          <Link href="/contact" className="text-cyan-glow hover:underline">
            nous contacter
          </Link>
          .
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={reset}
            variant="cta"
            size="lg"
            icon={<RotateCcw className="w-4 h-4" />}
            iconPosition="left"
          >
            Réessayer
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-white/40 font-mono">
            Référence : {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
