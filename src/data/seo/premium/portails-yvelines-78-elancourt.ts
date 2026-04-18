import type { PremiumCase } from './types'

export const portailsYvelines78Elancourt: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'elancourt',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Élancourt 78', caption: 'Battant double vantail — pavillon Élancourt' },
  heroQuote: { text: 'Élancourt pavillon, battant motorisé Came. Pose 1 jour propre.', author: 'Famille L.', context: 'Élancourt centre' },
  cityGuide: { intro: `Élancourt (25 000 habitants, 78) ville nouvelle Saint-Quentin-en-Yvelines. Pavillons + copros. Demande équilibrée portails.`,
    sections: [
      { heading: 'Élancourt — ville nouvelle', body: `60% pavillons, 40% copros récentes. Battant + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Élancourt', location: 'Centre Élancourt', date: 'Juin 2024', description: `Pavillon 1990 rénové. Battant acier RAL 7016 + motorisation Came EMega. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Élancourt pavillon, battant motorisé Came. Pose 1 jour propre.', author: 'Famille L.', context: 'Élancourt centre' } }],
  localReviews: [
    { text: 'Élancourt pavillon, battant motorisé Came. Pose 1 jour propre.', author: 'Famille L.', context: 'Élancourt centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 pavillon. Silencieux 38 dB.', author: 'Famille R.', context: 'Élancourt résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant sans rail pavillon. Pro.', author: 'Vincent T.', context: 'Élancourt Petit Vigne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 Saint-Quentin.', rows: [
    { communeSlug: 'trappes', communeName: 'Trappes', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'guyancourt', communeName: 'Guyancourt', priceAvg: '5 500-8 200 €', durationAvg: '10-14 sem.', note: 'Pavillons tech' },
    { communeSlug: 'montigny-le-bretonneux', communeName: 'Montigny-le-Bretonneux', priceAvg: '5 500-8 200 €', durationAvg: '10-14 sem.', note: 'Ville nouvelle' },
  ] },
  localStats: [{ label: 'Portails Élancourt depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Élancourt ville nouvelle Saint-Quentin-en-Yvelines.' },
}
