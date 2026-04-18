import type { PremiumCase } from './types'

export const portailsYvelines78Maurepas: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'maurepas',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Maurepas 78', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Maurepas' },
  heroQuote: { text: 'Maurepas pavillon SQY, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille M.', context: 'Maurepas centre' },
  cityGuide: { intro: `Maurepas (18 000 habitants, 78) ville Saint-Quentin-en-Yvelines — pavillons ZAC années 80-90 + copros + zone d'activité. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Maurepas — SQY pavillons ZAC', body: `78% pavillons individuels, 18% copros, 4% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Maurepas', location: 'Maurepas centre', date: 'Juin 2024', description: `Pavillon ZAC 1988 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Maurepas pavillon SQY, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille M.', context: 'Maurepas centre' } }],
  localReviews: [
    { text: 'Maurepas pavillon SQY, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille M.', context: 'Maurepas centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Maurepas résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille R.', context: 'Maurepas ZAC', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 SQY.', rows: [
    { communeSlug: 'elancourt', communeName: 'Élancourt', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons SQY' },
    { communeSlug: 'coignieres', communeName: 'Coignières', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
    { communeSlug: 'la-verriere', communeName: 'La Verrière', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU + pavillons' },
  ] },
  localStats: [{ label: 'Portails Maurepas depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Maurepas SQY pavillons ZAC années 80-90.' },
}
