import type { PremiumCase } from './types'

export const portailsValDoise95VilliersLeBel: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'villiers-le-bel',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Villiers-le-Bel 95', caption: 'Portail coulissant 4 m RAL 7016 — copro Villiers-le-Bel' },
  heroQuote: { text: 'Villiers-le-Bel copro ANRU 90 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villiers-le-Bel Derrière-les-Murs' },
  cityGuide: { intro: `Villiers-le-Bel (27 000 habitants, 95 est) ville ANRU 2 prioritaire — grandes copros années 60-70 + pavillons + proche Sarcelles. Demande portails motorisés + ANRU massive.`,
    sections: [
      { heading: 'Villiers-le-Bel — ANRU 2 prioritaire', body: `65% copros ANRU années 60-70 (Derrière-les-Murs, Carreaux), 30% pavillons, 5% commerces. Portail coulissant 4-6 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Coulissant 4 m : 4 200-5 800 €. Industriel 6 m : 6 500-9 500 €. Subvention ANRU 35-45 % prioritaire.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU prioritaire — copro Villiers-le-Bel Derrière-les-Murs', location: 'Derrière-les-Murs, Villiers-le-Bel', date: 'Juillet 2024', description: `Copro 90 lots ANRU 2. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Bouygues. Subvention ANRU 40 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '20 sem.', surface: '4 m' }, quote: { text: 'Villiers-le-Bel copro ANRU 90 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villiers-le-Bel Derrière-les-Murs' } }],
  localReviews: [
    { text: 'Villiers-le-Bel copro ANRU 90 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villiers-le-Bel Derrière-les-Murs', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Bouygues + ANRU Karim prioritaire. Sans stress.', author: 'Gestionnaire syndic', context: 'Villiers-le-Bel Carreaux', rating: 5, date: 'Mars 2024' },
    { text: 'Battant 3,5 m pavillon. Karim sérieux.', author: 'Famille L.', context: 'Villiers-le-Bel résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 est ANRU.', rows: [
    { communeSlug: 'sarcelles', communeName: 'Sarcelles', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU 2 actif' },
    { communeSlug: 'garges-les-gonesse', communeName: 'Garges-lès-Gonesse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU prioritaire' },
    { communeSlug: 'gonesse', communeName: 'Gonesse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + ANRU' },
  ] },
  localStats: [{ label: 'Portails Villiers-le-Bel depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 7 (71 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Villiers-le-Bel 95 est ANRU 2 prioritaire Derrière-les-Murs-Carreaux.' },
}
