import type { PremiumCase } from './types'

export const portailsSeineEtMarne77CombsLaVille: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'combs-la-ville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Combs-la-Ville 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Combs' },
  heroQuote: { text: 'Combs-la-Ville pavillon Sénart, portail battant motorisé Came BX. Pose propre.', author: 'Famille C.', context: 'Combs centre' },
  cityGuide: { intro: `Combs-la-Ville (22 000 habitants, 77) ville Sénart résidentielle — pavillons années 80-90 ZAC + copros + quelques commerces. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Combs — Sénart pavillonnaire', body: `80% pavillons individuels, 18% copros, 2% commerces. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Combs-la-Ville', location: 'Combs centre', date: 'Juin 2024', description: `Pavillon ZAC 1990 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Combs-la-Ville pavillon Sénart, portail battant motorisé Came BX. Pose propre.', author: 'Famille C.', context: 'Combs centre' } }],
  localReviews: [
    { text: 'Combs-la-Ville pavillon Sénart, portail battant motorisé Came BX. Pose propre.', author: 'Famille C.', context: 'Combs centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Combs résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Combs ZAC', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 Sénart.', rows: [
    { communeSlug: 'savigny-le-temple', communeName: 'Savigny-le-Temple', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Sénart pavillons' },
    { communeSlug: 'brie-comte-robert', communeName: 'Brie-Comte-Robert', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + Château' },
    { communeSlug: 'moissy-cramayel', communeName: 'Moissy-Cramayel', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
  ] },
  localStats: [{ label: 'Portails Combs depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Combs-la-Ville 77 Sénart pavillonnaire années 80-90.' },
}
