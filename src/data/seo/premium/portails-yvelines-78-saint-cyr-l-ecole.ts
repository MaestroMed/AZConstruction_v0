import type { PremiumCase } from './types'

export const portailsYvelines78SaintCyrLEcole: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'saint-cyr-l-ecole',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Saint-Cyr-l\'École 78', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Saint-Cyr' },
  heroQuote: { text: 'Saint-Cyr-l\'École pavillon limitrophe Versailles, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Cyr centre' },
  cityGuide: { intro: `Saint-Cyr-l'École (20 000 habitants, 78) ville limitrophe Versailles — Lycée militaire + pavillons + copros + aéroport Saint-Cyr. Clientèle CSP++ famille militaire + cadres.`,
    sections: [
      { heading: 'Saint-Cyr — limitrophe Versailles Lycée militaire', body: `75% pavillons individuels, 20% copros, 5% industriel/aéroport. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Saint-Cyr-l\'École', location: 'Saint-Cyr centre', date: 'Juin 2024', description: `Pavillon 1960 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Saint-Cyr-l\'École pavillon limitrophe Versailles, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Cyr centre' } }],
  localReviews: [
    { text: 'Saint-Cyr-l\'École pavillon limitrophe Versailles, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Cyr centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Saint-Cyr résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille M.', context: 'Saint-Cyr limitrophe Bailly', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 Versailles.', rows: [
    { communeSlug: 'bailly', communeName: 'Bailly', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'fontenay-le-fleury', communeName: 'Fontenay-le-Fleury', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
    { communeSlug: 'rocquencourt', communeName: 'Le Chesnay-Rocquencourt', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Limitrophe Versailles' },
  ] },
  localStats: [{ label: 'Portails Saint-Cyr depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Saint-Cyr-l\'École limitrophe Versailles Lycée militaire CSP++.' },
}
