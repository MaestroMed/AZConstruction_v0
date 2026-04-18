import type { PremiumCase } from './types'

export const portailsEssonne91LesUlis: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'les-ulis',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Les Ulis 91', caption: 'Coulissant Came — copro Les Ulis' },
  heroQuote: { text: 'Les Ulis copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Les Ulis centre' },
  cityGuide: { intro: `Les Ulis (25 000 habitants, 91) ville nouvelle Saclay créée 1977. Grandes copros + zones commerciales. Proximité Polytechnique. Demande portails copros dominante.`,
    sections: [
      { heading: 'Les Ulis — ville nouvelle Saclay', body: `85% copros, 15% zones commerciales. Coulissant Came motorisé dominant.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m — copro 90 lots Les Ulis', location: 'Centre Les Ulis', date: 'Juin 2024', description: `Copro 90 lots. Coulissant Came BX-241 + lecteur Vigik + 5 télécommandes. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 400 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Les Ulis copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Les Ulis centre' } }],
  localReviews: [
    { text: 'Les Ulis copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Les Ulis centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BK-2200 8 m longue portée copro 150 lots. Pro.', author: 'Gestionnaire syndic', context: 'Les Ulis Amonts', rating: 5, date: 'Mars 2024' },
    { text: 'Batterie secours + clignotant LED + photocellules. Sécurité renforcée.', author: 'Conseil syndical', context: 'Les Ulis résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines Saclay.', rows: [
    { communeSlug: 'orsay', communeName: 'Orsay', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Université' },
    { communeSlug: 'gif-sur-yvette', communeName: 'Gif-sur-Yvette', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'CEA + pavillons' },
    { communeSlug: 'villebon-sur-yvette', communeName: 'Villebon-sur-Yvette', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Tech cadres' },
  ] },
  localStats: [{ label: 'Portails Les Ulis depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Les Ulis ville nouvelle Saclay copros dominantes.' },
}
