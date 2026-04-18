import type { PremiumCase } from './types'

export const portailsEure27Louviers: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-27',
  communeSlug: 'louviers',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Louviers 27', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Louviers' },
  heroQuote: { text: 'Louviers pavillon bord Eure, portail battant motorisé Came BX. Pose propre.', author: 'Famille L.', context: 'Louviers centre' },
  cityGuide: { intro: `Louviers (18 000 habitants, 27) ville historique bord Eure avec centre médiéval (Notre-Dame) + pavillons années 50-80 + zones industrielles (Rexel, Gemini).`,
    sections: [
      { heading: 'Louviers — bord Eure historique', body: `70% pavillons individuels, 20% copros centre, 10% industriel. Portail battant 3,5 m Came BX dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Louviers', location: 'Louviers centre', date: 'Juin 2024', description: `Pavillon 1970 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 600 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Louviers pavillon bord Eure, portail battant motorisé Came BX. Pose propre.', author: 'Famille L.', context: 'Louviers centre' } }],
  localReviews: [
    { text: 'Louviers pavillon bord Eure, portail battant motorisé Came BX. Pose propre.', author: 'Famille L.', context: 'Louviers centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Famille satisfaite.', author: 'Famille D.', context: 'Louviers résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux, équipe propre.', author: 'Famille M.', context: 'Louviers Villiers-Acon', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 27.', rows: [
    { communeSlug: 'evreux', communeName: 'Évreux', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Préfecture 27' },
    { communeSlug: 'val-de-reuil', communeName: 'Val-de-Reuil', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Ville nouvelle' },
    { communeSlug: 'vernon', communeName: 'Vernon', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Bord Seine patrimoine' },
  ] },
  localStats: [{ label: 'Portails Louviers depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Louviers bord Eure pavillons + industriel.' },
}
