import type { PremiumCase } from './types'

export const portailsYvelines78MontignyLeBretonneux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'montigny-le-bretonneux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Montigny-le-Bretonneux 78', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Montigny' },
  heroQuote: { text: 'Montigny-le-Bretonneux pavillon ZAC récent, portail coulissant Came BK. Pose propre.', author: 'Famille M.', context: 'Montigny centre' },
  cityGuide: { intro: `Montigny-le-Bretonneux (33 000 habitants, 78) ville Saint-Quentin-en-Yvelines — pavillons ZAC années 80-90 + copros + zones d'activité (Bouygues, Areva). Demande portails motorisés stable.`,
    sections: [
      { heading: 'Montigny — SQY pavillons ZAC', body: `75% pavillons individuels ZAC, 20% copros centre, 5% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Montigny-le-Bretonneux', location: 'Montigny centre', date: 'Juin 2024', description: `Pavillon ZAC 1990 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Montigny-le-Bretonneux pavillon ZAC récent, portail coulissant Came BK. Pose propre.', author: 'Famille M.', context: 'Montigny centre' } }],
  localReviews: [
    { text: 'Montigny-le-Bretonneux pavillon ZAC récent, portail coulissant Came BK. Pose propre.', author: 'Famille M.', context: 'Montigny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Montigny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille R.', context: 'Montigny SQY', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 SQY.', rows: [
    { communeSlug: 'guyancourt', communeName: 'Guyancourt', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + sièges' },
    { communeSlug: 'voisins-le-bretonneux', communeName: 'Voisins-le-Bretonneux', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'trappes', communeName: 'Trappes', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU + industriel' },
  ] },
  localStats: [{ label: 'Portails Montigny-le-Bretonneux depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Montigny-le-Bretonneux SQY pavillons ZAC années 80-90.' },
}
