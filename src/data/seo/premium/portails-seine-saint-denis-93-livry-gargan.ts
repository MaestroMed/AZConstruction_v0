import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93LivryGargan: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'livry-gargan',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Livry-Gargan 93', caption: 'Battant — pavillon Livry-Gargan' },
  heroQuote: { text: 'Livry-Gargan pavillon, battant motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Livry-Gargan centre' },
  cityGuide: { intro: `Livry-Gargan (45 000 habitants, 93 est) ville pavillonnaire dense + quelques copros. Demande portails pavillons dominante.`,
    sections: [
      { heading: 'Livry-Gargan — pavillonnaire 93 est', body: `85% pavillons, 15% copros. Battant + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant 4 m motorisé — pavillon Livry-Gargan', location: 'Centre Livry-Gargan', date: 'Juin 2024', description: `Pavillon 1960 rénové. Battant acier RAL 7016 + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Livry-Gargan pavillon, battant motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Livry-Gargan centre' } }],
  localReviews: [
    { text: 'Livry-Gargan pavillon, battant motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Livry-Gargan centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 pavillon. Silencieux.', author: 'Famille R.', context: 'Livry Danton', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail propre.', author: 'Vincent L.', context: 'Livry résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est.', rows: [
    { communeSlug: 'le-raincy', communeName: 'Le Raincy', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'sevran', communeName: 'Sevran', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'aulnay-sous-bois', communeName: 'Aulnay-sous-Bois', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
  ] },
  localStats: [{ label: 'Portails Livry-Gargan depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Livry-Gargan pavillonnaire dense 93 est.' },
}
