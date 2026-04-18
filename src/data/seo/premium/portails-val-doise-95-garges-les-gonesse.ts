import type { PremiumCase } from './types'

export const portailsValDoise95GargesLesGonesse: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'garges-les-gonesse',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Garges-lès-Gonesse 95', caption: 'Portail coulissant 4 m RAL 7016 — copro Garges' },
  heroQuote: { text: 'Garges-lès-Gonesse copro ANRU 140 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Garges Dame-Blanche' },
  cityGuide: { intro: `Garges-lès-Gonesse (42 000 habitants, 95) ville ANRU 2 prioritaire — grandes copros années 60-70 + pavillons + proche aéroport Le Bourget. Demande portails motorisés ANRU massive.`,
    sections: [
      { heading: 'Garges — ANRU 2 prioritaire Dame-Blanche', body: `75% copros ANRU années 60-70 (Dame-Blanche, Muette), 20% pavillons, 5% industriel. Portail coulissant 4-6 m Came BK + subvention ANRU prioritaire dominant.` },
      { heading: 'Tarifs', body: `Coulissant 4 m : 4 200-5 800 €. Industriel 6 m : 6 500-9 500 €. Subvention ANRU 35-45 % prioritaire.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU prioritaire — copro Dame-Blanche Garges', location: 'Dame-Blanche, Garges', date: 'Juillet 2024', description: `Copro 140 lots ANRU 2 prioritaire Dame-Blanche. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Bouygues. Subvention ANRU 45 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 900 €', duration: '22 sem.', surface: '4 m' }, quote: { text: 'Garges-lès-Gonesse copro ANRU 140 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Garges Dame-Blanche' } }],
  localReviews: [
    { text: 'Garges-lès-Gonesse copro ANRU 140 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Garges Dame-Blanche', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Bouygues + ANRU Karim prioritaire. Sans stress.', author: 'Gestionnaire syndic', context: 'Garges Muette', rating: 5, date: 'Mars 2024' },
    { text: 'Battant 3,5 m pavillon. Karim sérieux.', author: 'Famille L.', context: 'Garges résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 est ANRU.', rows: [
    { communeSlug: 'sarcelles', communeName: 'Sarcelles', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU limitrophe' },
    { communeSlug: 'gonesse', communeName: 'Gonesse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + ANRU' },
    { communeSlug: 'villiers-le-bel', communeName: 'Villiers-le-Bel', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU + pavillons' },
  ] },
  localStats: [{ label: 'Portails Garges depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '7 / 9 (78 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Garges-lès-Gonesse 95 ANRU 2 prioritaire Dame-Blanche-Muette.' },
}
