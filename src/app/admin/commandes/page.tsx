"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Settings } from "lucide-react";

export default function CommandesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Commandes</h1>
          <p className="text-gray-500 mt-1">Gestion des commandes clients</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
          <ShoppingCart className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Aucune commande</h2>
        <p className="text-gray-500 max-w-md mb-6">
          Les commandes passées via Stripe apparaîtront ici une fois le paiement en ligne activé.
          Pour l&apos;instant, les demandes de devis et messages de contact sont disponibles dans leurs sections dédiées.
        </p>
        <div className="flex gap-3">
          <Link
            href="/admin/devis"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-xl text-sm font-medium hover:bg-cyan-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Voir les demandes de devis
          </Link>
          <Link
            href="/admin/parametres/stripe"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-4 h-4" />
            Configurer Stripe
          </Link>
        </div>
      </div>
    </div>
  );
}
