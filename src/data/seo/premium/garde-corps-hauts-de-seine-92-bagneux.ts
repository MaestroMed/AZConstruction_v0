import type { PremiumCase } from './types'

export const gardeCorpsHautsDeSeine92Bagneux: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'bagneux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Bagneux 92', caption: 'Garde-corps acier RAL 7016 — copro Bagneux' },
  heroQuote: { text: 'Bagneux copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Bagneux Val de Bièvre' },
  cityGuide: { intro: `Bagneux (43 000 habitants, 92 sud) ville mixte pavillons + grandes copros ANRU années 60-70 + zones d'activité. Demande garde-corps copros ANRU forte avec subventions.`,
    sections: [
      { heading: 'Bagneux — ANRU 2 actif', body: `30% pavillons individuels, 65% copros ANRU (copros années 60-70 rénovation), 5% industriel. Garde-corps acier RAL 7016 + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Acier RAL + bois pin : 380-520 €/ml. Subvention ANRU 30-40 % sur copros.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier ANRU 80 ml — copro Bagneux Val de Bièvre', location: 'Val de Bièvre, Bagneux', date: 'Juillet 2024', description: `Copro 80 lots ANRU 2. Rénovation garde-corps 80 ml acier thermolaqué RAL 7016 + coordination Demathieu Bard. Subvention ANRU 35 % obtenue.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 800 €', duration: '18 sem.', surface: '80 ml' }, quote: { text: 'Bagneux copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Bagneux Val de Bièvre' } }],
  localReviews: [
    { text: 'Bagneux copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Bagneux Val de Bièvre', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Demathieu Bard + dossier ANRU géré par Antoine. Sans stress.', author: 'Gestionnaire syndic', context: 'Bagneux centre', rating: 5, date: 'Mars 2024' },
    { text: 'Garde-corps pavillon bord parc. Finitions propres.', author: 'Famille L.', context: 'Bagneux résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 92 sud ANRU.', rows: [
    { communeSlug: 'montrouge', communeName: 'Montrouge', priceAvg: '380-520 €/ml', durationAvg: '8-12 sem.', note: 'Limitrophe Paris 14e' },
    { communeSlug: 'chatillon', communeName: 'Châtillon', priceAvg: '380-520 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '400-560 €/ml', durationAvg: '8-12 sem.', note: 'Bourgeois limitrophe' },
  ] },
  localStats: [{ label: 'Garde-corps Bagneux depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '6 / 8 (75 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Antoine (fondateur AZ)', internalNotes: 'Bagneux 92 sud ANRU 2 actif grandes copros années 60-70.' },
}
