"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, Clock, Paintbrush, ArrowRight, Sparkles } from "lucide-react";

const advantages = [
  {
    icon: Factory,
    title: "Atelier 1 800 m²",
    description:
      "Capacité de production industrielle pour tous vos projets d'envergure.",
    link: "/a-propos",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Devis rapide et délais de fabrication optimisés pour votre satisfaction.",
    link: "/contact",
  },
  {
    icon: Paintbrush,
    title: "Thermolaquage Pro",
    description:
      "200+ couleurs RAL. Protection durable haut de gamme pour tous métaux.",
    link: "/services/thermolaquage",
    highlight: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function AdvantagesSection() {
  return (
    <section className="py-8 -mt-16 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link href={advantage.link}>
                <div
                  className={`
                    relative h-full group cursor-pointer transition-all duration-300
                    rounded-2xl p-6
                    ${advantage.highlight
                      ? "glass-card-light ring-1 ring-cyan-glow/20 hover:ring-cyan-glow/40"
                      : "glass-card-light hover:shadow-xl"
                    }
                  `}
                >
                  {/* Highlight glow effect */}
                  {advantage.highlight && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-glow/5 to-blue-500/5 pointer-events-none" />
                  )}

                  <div className="relative flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                        ${advantage.highlight
                          ? "bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 group-hover:from-cyan-glow/30 group-hover:to-blue-corporate/30 ring-1 ring-cyan-glow/20"
                          : "bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 group-hover:from-blue-corporate/20 group-hover:to-cyan-glow/20"
                        }
                      `}>
                        <advantage.icon className={`w-8 h-8 ${
                          advantage.highlight ? "text-cyan-600" : "text-blue-corporate"
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-navy-dark group-hover:text-blue-corporate transition-colors">
                          {advantage.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-cyan-glow group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {advantage.description}
                      </p>
                      {advantage.highlight && (
                        <span className="inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-cyan-glow/20 to-blue-500/20 text-cyan-700 px-3 py-1.5 rounded-full font-medium ring-1 ring-cyan-glow/20">
                          <Sparkles className="w-3 h-3" />
                          Service Premium
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
