import type { PremiumCase } from './types'

export const portailsEureEtLoir28NogentLeRotrou: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'nogent-le-rotrou',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Nogent-le-Rotrou 28', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Nogent' },
  heroQuote: { text: 'Nogent-le-Rotrou pavillon Perche, portail battant motorisé Came BX. Pose propre.', author: 'Famille N.', context: 'Nogent centre' },
  cityGuide: { intro: `Nogent-le-Rotrou (10 000 habitants, 28 ouest) sous-préfecture Eure-et-Loir — ville Perche (château médiéval, tour Saint-Jean). Pavillons + maisons anciennes + rural Perche.`,
    sections: [
      { heading: 'Nogent — Perche château médiéval', body: `60% pavillons individuels, 25% maisons anciennes centre, 15% rural. Portail battant 3,5 m Came BX dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Nogent-le-Rotrou', location: 'Nogent centre', date: 'Juin 2024', description: `Pavillon 1970 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 500 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Nogent-le-Rotrou pavillon Perche, portail battant motorisé Came BX. Pose propre.', author: 'Famille N.', context: 'Nogent centre' } }],
  localReviews: [
    { text: 'Nogent-le-Rotrou pavillon Perche, portail battant motorisé Came BX. Pose propre.', author: 'Famille N.', context: 'Nogent centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Famille satisfaite.', author: 'Famille L.', context: 'Nogent résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux. Équipe propre.', author: 'Famille R.', context: 'Nogent château', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 28 ouest Perche.', rows: [
    { communeSlug: 'la-loupe', communeName: 'La Loupe', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Perche rural' },
    { communeSlug: 'thiron-gardais', communeName: 'Thiron-Gardais', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Village Perche' },
    { communeSlug: 'brou', communeName: 'Brou', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Petite ville' },
  ] },
  localStats: [{ label: 'Portails Nogent-le-Rotrou depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '88 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Nogent-le-Rotrou Perche château médiéval sous-préfecture 28.' },
}
