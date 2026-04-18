import type { PremiumCase } from './types'

export const portailsSomme80Peronne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'somme-80',
  communeSlug: 'peronne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Péronne 80', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Péronne' },
  heroQuote: { text: 'Péronne pavillon mémoriel Historial Grande Guerre, portail coulissant Came BK. Pose propre.', author: 'Famille P.', context: 'Péronne centre' },
  cityGuide: { intro: `Péronne (7 500 habitants, 80 est) sous-préfecture Somme — ville historique château + Historial Grande Guerre. Pavillons + copros + commerces centre.`,
    sections: [
      { heading: 'Péronne — historial mémorielle', body: `70% pavillons individuels, 25% copros centre, 5% commerces. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Péronne', location: 'Péronne centre', date: 'Juin 2024', description: `Pavillon 1960 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 000 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Péronne pavillon mémoriel Historial Grande Guerre, portail coulissant Came BK. Pose propre.', author: 'Famille P.', context: 'Péronne centre' } }],
  localReviews: [
    { text: 'Péronne pavillon mémoriel Historial Grande Guerre, portail coulissant Came BK. Pose propre.', author: 'Famille P.', context: 'Péronne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Péronne résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux. Équipe propre.', author: 'Famille M.', context: 'Péronne Historial', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 80 est.', rows: [
    { communeSlug: 'albert', communeName: 'Albert', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Mémorielle' },
    { communeSlug: 'ham', communeName: 'Ham', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Petite ville' },
    { communeSlug: 'roye', communeName: 'Roye', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Rural' },
  ] },
  localStats: [{ label: 'Portails Péronne depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Péronne sous-préfecture 80 Historial Grande Guerre.' },
}
