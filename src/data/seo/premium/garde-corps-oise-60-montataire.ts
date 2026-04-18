import type { PremiumCase } from './types'

export const gardeCorpsOise60Montataire: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'oise-60',
  communeSlug: 'montataire',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Montataire 60', caption: 'Garde-corps acier RAL 7016 — copro ANRU Montataire' },
  heroQuote: { text: 'Montataire copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Montataire centre' },
  cityGuide: { intro: `Montataire (12 000 habitants, 60) ville ouvrière limitrophe Creil — pavillons cheminots + copros ANRU années 60-70 + aciérie historique ArcelorMittal. Demande garde-corps ANRU forte.`,
    sections: [
      { heading: 'Montataire — ANRU 2 + ArcelorMittal', body: `50% copros ANRU années 60-70, 35% pavillons cheminots, 15% industriel ArcelorMittal. Garde-corps acier RAL 7016 + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Acier RAL + bois pin : 350-490 €/ml. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier ANRU — copro Montataire', location: 'Montataire centre', date: 'Juillet 2024', description: `Copro 80 lots ANRU 2. Rénovation garde-corps 70 ml acier thermolaqué RAL 7016 + coordination Demathieu Bard. Subvention ANRU 35 % obtenue.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '18 sem.', surface: '70 ml' }, quote: { text: 'Montataire copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Montataire centre' } }],
  localReviews: [
    { text: 'Montataire copro ANRU 80 lots, garde-corps acier + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Montataire centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Demathieu Bard + ANRU Antoine. Sans stress.', author: 'Gestionnaire syndic', context: 'Montataire ZAC', rating: 5, date: 'Mars 2024' },
    { text: 'Garde-corps pavillon cheminot. Finitions propres.', author: 'Famille L.', context: 'Montataire résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 60 sud ANRU.', rows: [
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '350-490 €/ml', durationAvg: '8-12 sem.', note: 'Sous-préfecture + ANRU' },
    { communeSlug: 'nogent-sur-oise', communeName: 'Nogent-sur-Oise', priceAvg: '350-490 €/ml', durationAvg: '8-12 sem.', note: 'Limitrophe Creil' },
    { communeSlug: 'villers-saint-paul', communeName: 'Villers-Saint-Paul', priceAvg: '350-490 €/ml', durationAvg: '8-12 sem.', note: 'Industriel' },
  ] },
  localStats: [{ label: 'Garde-corps Montataire depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 6 (83 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Antoine (fondateur AZ)', internalNotes: 'Montataire 60 sud ouvrière ArcelorMittal ANRU 2 copros cheminots.' },
}
