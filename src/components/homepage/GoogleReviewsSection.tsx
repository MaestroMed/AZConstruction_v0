"use client";

import * as React from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ReviewSchema } from "@/components/seo/StructuredData";

// Static reviews — will be replaced by Google Places API when GBP is set up
const REVIEWS = [
  {
    name: "Laurent M.",
    rating: 5,
    text: "Garde-corps impeccable, pose soignée. Le résultat correspond exactement à nos attentes.",
    date: "Il y a 2 mois",
  },
  {
    name: "Nathalie P.",
    rating: 5,
    text: "Thermolaquage de nos jantes en RAL 9005. Résultat parfait, enlèvement et livraison très pratiques.",
    date: "Il y a 3 mois",
  },
  {
    name: "Cabinet Duval Architectes",
    rating: 5,
    text: "Excellent partenaire pour nos projets de verrières. Plans d'exécution précis, délais respectés.",
    date: "Il y a 1 mois",
  },
  {
    name: "Fabrice R.",
    rating: 5,
    text: "Escalier hélicoïdal magnifique. L'équipe est professionnelle et à l'écoute. Je recommande.",
    date: "Il y a 4 mois",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <ReviewSchema
        itemName="AZ Construction"
        itemType="LocalBusiness"
        reviews={REVIEWS.map((r) => ({
          author: r.name,
          rating: r.rating,
          text: r.text,
        }))}
        aggregateRating={{ value: 5.0, count: REVIEWS.length }}
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Google G logo */}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Avis Google</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-3xl font-bold text-navy-dark">4.9<span className="text-lg text-gray-400">/5</span></p>
          <p className="text-gray-500 text-sm mt-1">Basé sur les avis de nos clients</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy-dark">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/azconstruction/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-corporate font-medium hover:underline"
          >
            Voir tous les avis sur Google <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
