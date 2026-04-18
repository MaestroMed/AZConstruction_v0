import type { PremiumCase } from './types'

export const portailsValDoise95Gonesse: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'gonesse',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Gonesse 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Gonesse' },
  heroQuote: { text: 'Gonesse pavillon proche CDG, portail battant motorisé Came BX. Pose propre.', author: 'Famille G.', context: 'Gonesse centre' },
  cityGuide: { intro: `Gonesse (26 000 habitants, 95) ville proche aéroport Roissy-CDG + Triangle de Gonesse (zone agricole protégée) — pavillons + copros + industriel. Clientèle mixte CSP++ + ANRU.`,
    sections: [
      { heading: 'Gonesse — CDG + Triangle agricole', body: `65% pavillons individuels, 25% copros, 10% industriel/CDG. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Gonesse', location: 'Gonesse centre', date: 'Juin 2024', description: `Pavillon 1970 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Gonesse pavillon proche CDG, portail battant motorisé Came BX. Pose propre.', author: 'Famille G.', context: 'Gonesse centre' } }],
  localReviews: [
    { text: 'Gonesse pavillon proche CDG, portail battant motorisé Came BX. Pose propre.', author: 'Famille G.', context: 'Gonesse centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Gonesse résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Gonesse Triangle', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 est.', rows: [
    { communeSlug: 'garges-les-gonesse', communeName: 'Garges-lès-Gonesse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU prioritaire' },
    { communeSlug: 'goussainville', communeName: 'Goussainville', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + CDG' },
    { communeSlug: 'arnouville', communeName: 'Arnouville', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Gonesse depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Gonesse 95 est proche CDG + Triangle agricole protégé.' },
}
