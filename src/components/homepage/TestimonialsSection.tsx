"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Jean-Pierre M.",
    location: "Cergy (95)",
    project: "Portail thermolaqué",
    rating: 5,
    text: "Excellent travail sur notre portail coulissant. La couleur RAL 7016 est parfaite, la finition impeccable. Équipe professionnelle et réactive. Je recommande vivement !",
    date: "Novembre 2024",
  },
  {
    name: "Marie-Claire D.",
    location: "Saint-Germain-en-Laye (78)",
    project: "Garde-corps escalier",
    rating: 5,
    text: "Un garde-corps sur mesure pour notre escalier, en acier thermolaqué noir mat. Le résultat est magnifique et la pose a été rapide. Merci à toute l'équipe !",
    date: "Octobre 2024",
  },
  {
    name: "Philippe R.",
    location: "Argenteuil (95)",
    project: "Pergola bioclimatique",
    rating: 5,
    text: "Pergola aluminium thermolaquée gris anthracite. Qualité exceptionnelle, finition parfaite. Le délai a été respecté malgré la complexité du projet.",
    date: "Septembre 2024",
  },
  {
    name: "Sophie L.",
    location: "Meaux (77)",
    project: "Clôture + portillon",
    rating: 5,
    text: "Clôture complète avec portillon assorti. Le thermolaquage RAL 6005 vert mousse s'intègre parfaitement dans notre jardin. Rapport qualité-prix excellent.",
    date: "Août 2024",
  },
  {
    name: "Laurent B.",
    location: "Pontoise (95)",
    project: "Escalier hélicoïdal",
    rating: 5,
    text: "Un escalier hélicoïdal en acier thermolaqué blanc. Véritable œuvre d'art ! L'équipe a su transformer notre vision en réalité. Bravo !",
    date: "Juillet 2024",
  },
  {
    name: "Isabelle T.",
    location: "Versailles (78)",
    project: "Verrière atelier",
    rating: 5,
    text: "Notre verrière style atelier est sublime. Le noir satiné est parfait, les finitions sont soignées. Un travail de professionnels.",
    date: "Juin 2024",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Auto-scroll
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-500" />
            <span className="text-yellow-700 text-sm font-medium">
              Avis clients vérifiés
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez les témoignages de nos clients satisfaits en Île-de-France.
            Qualité, réactivité et savoir-faire reconnus.
          </p>
        </motion.div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-cyan-glow/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-semibold text-navy-dark">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-cyan-700 font-medium">
                        {testimonial.project}
                      </p>
                      <p className="text-xs text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="lg:hidden mb-12">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-4"
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-cyan-glow/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-semibold text-navy-dark">
                        {testimonials[activeIndex].name}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {testimonials[activeIndex].location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-cyan-700 font-medium">
                        {testimonials[activeIndex].project}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-cyan-glow w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: "1500+", label: "Projets réalisés" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "10 ans", label: "Garantie thermolaquage" },
            { value: "4.9/5", label: "Note moyenne" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
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
              Rejoignez nos clients satisfaits
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



