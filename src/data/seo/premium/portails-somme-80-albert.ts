import type { PremiumCase } from './types'

export const portailsSomme80Albert: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'somme-80',
  communeSlug: 'albert',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Albert 80', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Albert' },
  heroQuote: { text: 'Albert pavillon mémoriel Grande Guerre, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Albert centre' },
  cityGuide: { intro: `Albert (10 000 habitants, 80 est) ville mémorielle Grande Guerre (Basilique Notre-Dame-de-Brebières, champs de bataille Somme). Pavillons années 20 reconstruction + récents.`,
    sections: [
      { heading: 'Albert — mémorielle reconstruction', body: `80% pavillons individuels (années 20 reconstruction + récents), 15% copros, 5% commerces. Portail battant 3,5 m Came BX dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Albert reconstruction', location: 'Albert centre', date: 'Juin 2024', description: `Pavillon 1925 reconstruction rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 500 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Albert pavillon mémoriel Grande Guerre, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Albert centre' } }],
  localReviews: [
    { text: 'Albert pavillon mémoriel Grande Guerre, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Albert centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m pavillon récent. Karim solide.', author: 'Famille D.', context: 'Albert ZAC', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Famille ravie.', author: 'Famille R.', context: 'Albert résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 80 est.', rows: [
    { communeSlug: 'amiens', communeName: 'Amiens', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Préfecture 80' },
    { communeSlug: 'peronne', communeName: 'Péronne', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Mémorielle' },
    { communeSlug: 'corbie', communeName: 'Corbie', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Abbaye + pavillons' },
  ] },
  localStats: [{ label: 'Portails Albert depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons reconstruction', value: '45 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Albert mémorielle Grande Guerre reconstruction années 20.' },
}
