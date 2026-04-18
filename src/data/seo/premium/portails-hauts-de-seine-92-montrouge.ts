import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Montrouge: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'montrouge',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Montrouge 92', caption: 'Coulissant motorisé — copro Montrouge' },
  heroQuote: { text: 'Montrouge copro 60 lots, coulissant Came motorisé. Pose 1 jour propre.', author: 'Conseil syndical', context: 'Montrouge centre' },
  cityGuide: { intro: `Montrouge (50 000 habitants, 92 sud limitrophe Paris 14e) ville pavillonnaire dense + copros années 70. Demande forte portails copros + résidentiel.`,
    sections: [
      { heading: 'Montrouge — limitrophe Paris 14e', body: `55% copros (grandes résidences + petites copros), 45% pavillons. Coulissant motorisé Came dominant.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 000 €. Battant pavillon : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — copro 60 lots Montrouge', location: 'Avenue Henri-Ginoux, Montrouge', date: 'Juin 2024', description: `Remplacement portail vétuste. Coulissant Came BX-241 + batterie secours + 5 télécommandes. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Montrouge copro 60 lots, coulissant Came motorisé. Pose 1 jour propre.', author: 'Conseil syndical', context: 'Montrouge centre' } }],
  localReviews: [
    { text: 'Montrouge copro 60 lots, coulissant Came motorisé. Pose 1 jour propre.', author: 'Conseil syndical', context: 'Montrouge centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail motorisé Nice. Silencieux.', author: 'Famille R.', context: 'Montrouge sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail, discret et durable.', author: 'Vincent L.', context: 'Montrouge résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 sud.', rows: [
    { communeSlug: 'malakoff', communeName: 'Malakoff', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons meulière' },
    { communeSlug: 'chatillon', communeName: 'Châtillon', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'bagneux', communeName: 'Bagneux', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Portails Montrouge depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Montrouge limitrophe Paris 14e, mix copros + pavillons.' },
}
