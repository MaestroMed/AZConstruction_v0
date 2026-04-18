import type { PremiumCase } from './types'

export const portailsSeineEtMarne77SavignyLeTemple: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'savigny-le-temple',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Savigny-le-Temple 77', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Savigny' },
  heroQuote: { text: 'Savigny-le-Temple pavillon ville nouvelle Sénart, portail coulissant Came BK. Pose propre.', author: 'Famille S.', context: 'Savigny centre' },
  cityGuide: { intro: `Savigny-le-Temple (31 000 habitants, 77) ville nouvelle Sénart — pavillons années 80-2000 ZAC + copros + zones d'activité. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Savigny — Sénart ville nouvelle', body: `78% pavillons individuels ZAC, 18% copros, 4% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Savigny-le-Temple', location: 'Savigny centre', date: 'Juin 2024', description: `Pavillon ZAC 1995 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 500 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Savigny-le-Temple pavillon ville nouvelle Sénart, portail coulissant Came BK. Pose propre.', author: 'Famille S.', context: 'Savigny centre' } }],
  localReviews: [
    { text: 'Savigny-le-Temple pavillon ville nouvelle Sénart, portail coulissant Came BK. Pose propre.', author: 'Famille S.', context: 'Savigny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Savigny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Savigny ZAC', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 sud Sénart.', rows: [
    { communeSlug: 'combs-la-ville', communeName: 'Combs-la-Ville', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'cesson', communeName: 'Cesson', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Sénart pavillons' },
    { communeSlug: 'lieusaint', communeName: 'Lieusaint', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ZA Sénart + pavillons' },
  ] },
  localStats: [{ label: 'Portails Savigny-le-Temple depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Savigny-le-Temple 77 ville nouvelle Sénart pavillons ZAC années 80-2000.' },
}
