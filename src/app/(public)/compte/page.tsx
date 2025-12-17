"use client";

import * as React from "react";
import Link from "next/link";
import {
  User,
  ShoppingBag,
  FileText,
  Settings,
  MessageSquare,
  Heart,
  LogOut,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: User, label: "Mon profil", href: "/compte/profil" },
  { icon: ShoppingBag, label: "Mes commandes", href: "/compte/commandes" },
  { icon: FileText, label: "Mes devis", href: "/compte/devis" },
  { icon: Heart, label: "Mes favoris", href: "/compte/favoris" },
  { icon: MessageSquare, label: "Messages", href: "/compte/messages", badge: 2 },
  { icon: Settings, label: "Paramètres", href: "/compte/parametres" },
];

// Mock data
const recentOrders = [
  {
    id: "ORD2024001",
    date: "12/12/2024",
    status: "En fabrication",
    total: "2 450,00 €",
  },
  {
    id: "ORD2024002",
    date: "05/12/2024",
    status: "Livrée",
    total: "1 890,00 €",
  },
];

export default function ComptePage() {
  const [activeSection, setActiveSection] = React.useState("profil");

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card variant="elevated">
              <CardContent className="p-6">
                {/* User info */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-corporate to-cyan-glow flex items-center justify-center">
                    <span className="text-xl font-bold text-white">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-dark">Jean Dupont</p>
                    <p className="text-sm text-gray-500">Particulier</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        item.href.includes(activeSection)
                          ? "bg-blue-corporate/10 text-blue-corporate"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto w-5 h-5 rounded-full bg-cyan-glow text-navy-dark text-xs flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Logout */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors">
                    <LogOut className="w-5 h-5" />
                    Déconnexion
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome */}
            <Card variant="elevated" className="bg-gradient-to-r from-navy-dark to-blue-corporate text-white">
              <CardContent className="p-8">
                <h1 className="text-2xl font-bold mb-2">
                  Bonjour Jean ! 👋
                </h1>
                <p className="text-white/70">
                  Bienvenue dans votre espace client AZ Construction.
                </p>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "Commandes en cours", value: "1" },
                { label: "Devis en attente", value: "0" },
                { label: "Messages non lus", value: "2" },
              ].map((stat, i) => (
                <Card key={i} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-navy-dark mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent orders */}
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-navy-dark">
                    Commandes récentes
                  </h2>
                  <Link
                    href="/compte/commandes"
                    className="text-sm text-blue-corporate hover:text-cyan-glow transition-colors"
                  >
                    Voir tout →
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-navy-dark">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            order.status === "Livrée"
                              ? "text-emerald-500"
                              : "text-orange-500"
                          )}
                        >
                          {order.status}
                        </p>
                        <p className="text-sm text-gray-500">{order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick actions */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card variant="elevated" hover>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-dark mb-2">
                    Nouveau projet ?
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Configurez votre prochain ouvrage métallique en quelques clics.
                  </p>
                  <Link href="/produits">
                    <Button size="sm">Configurer un produit</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card variant="elevated" hover>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-dark mb-2">
                    Besoin d&apos;aide ?
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Notre équipe est disponible pour répondre à vos questions.
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" size="sm">
                      Nous contacter
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



