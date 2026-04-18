import type { PremiumCase } from './types'

export const portailsHautsDeSeine92VilleneuveLaGarenne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'villeneuve-la-garenne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Villeneuve-la-Garenne 92', caption: 'Portail coulissant 4 m RAL 7016 — copro Villeneuve' },
  heroQuote: { text: 'Villeneuve-la-Garenne copro ANRU 120 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villeneuve centre' },
  cityGuide: { intro: `Villeneuve-la-Garenne (25 000 habitants, 92 nord) ville mixte pavillons + grandes copros ANRU + zones industrielles Paris-Nord 2. Demande portails motorisés copros ANRU forte.`,
    sections: [
      { heading: 'Villeneuve — ANRU 2 actif', body: `30% pavillons individuels, 55% copros ANRU années 60-70, 15% industriel. Portail coulissant 4-6 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Coulissant 4 m : 4 400-6 000 €. Industriel 6 m : 7 000-10 000 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m + ANRU — copro Villeneuve-la-Garenne', location: 'Villeneuve centre', date: 'Juillet 2024', description: `Copro 120 lots ANRU 2. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Eiffage. Subvention ANRU 40 % obtenue.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 200 €', duration: '18 sem.', surface: '4 m' }, quote: { text: 'Villeneuve-la-Garenne copro ANRU 120 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villeneuve centre' } }],
  localReviews: [
    { text: 'Villeneuve-la-Garenne copro ANRU 120 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Villeneuve centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Eiffage + dossier ANRU géré par Karim. Sans stress.', author: 'Gestionnaire syndic', context: 'Villeneuve Parc', rating: 5, date: 'Mars 2024' },
    { text: 'Portail battant pavillon. Télécommandes 4 badges.', author: 'Famille L.', context: 'Villeneuve résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 nord ANRU.', rows: [
    { communeSlug: 'gennevilliers', communeName: 'Gennevilliers', priceAvg: '4 200-5 800 €', durationAvg: '18-22 sem. ANRU', note: 'ANRU 2 actif' },
    { communeSlug: 'asnieres-sur-seine', communeName: 'Asnières-sur-Seine', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Bord Seine + ANRU' },
    { communeSlug: 'clichy', communeName: 'Clichy', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 17e' },
  ] },
  localStats: [{ label: 'Portails Villeneuve depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 7 (71 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Villeneuve-la-Garenne ANRU 2 actif + industriel Paris-Nord 2.' },
}
