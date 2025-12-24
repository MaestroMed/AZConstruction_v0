"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, MessageSquare, ArrowRight, Clock, Users, Factory } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-glow/10 border border-cyan-glow/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-cyan-700" />
            <span className="text-cyan-700 text-sm font-medium">
              Avis clients
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Nos Clients Témoignent
          </h2>
          <p className="text-gray-600 text-lg">
            Depuis 2018, nous accompagnons particuliers et professionnels 
            dans leurs projets de métallerie sur mesure.
          </p>
        </motion.div>

        {/* Placeholder message */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="elevated" className="text-center">
            <CardContent className="py-12 px-8">
              <div className="w-16 h-16 rounded-full bg-cyan-glow/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-navy-dark mb-3">
                Avis clients à venir
              </h3>
              <p className="text-gray-600 mb-6">
                Nous travaillons actuellement à collecter les avis de nos clients 
                satisfaits. En attendant, n'hésitez pas à nous contacter pour 
                découvrir nos références ou demander un devis personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/realisations">
                  <Button variant="outline">
                    Voir nos réalisations
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats - Données réelles */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Factory, value: "2018", label: "Depuis" },
            { icon: Users, value: "200+", label: "Partenaires actifs" },
            { icon: Clock, value: "24h", label: "Réponse devis" },
            { icon: Star, value: "1800m²", label: "D'atelier" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-cyan-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-navy-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-navy-dark hover:bg-blue-corporate"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contactez-nous pour votre projet
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


