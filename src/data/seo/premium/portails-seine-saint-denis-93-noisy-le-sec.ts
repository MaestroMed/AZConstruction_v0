import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93NoisyLeSec: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'noisy-le-sec',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Noisy-le-Sec 93', caption: 'Coulissant Came — copro Noisy-le-Sec' },
  heroQuote: { text: 'Noisy-le-Sec copro 70 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Noisy-le-Sec centre' },
  cityGuide: { intro: `Noisy-le-Sec (43 000 habitants, 93) ville mixte copros + pavillons. Demande portails copros forte.`,
    sections: [
      { heading: 'Noisy-le-Sec — mix copros', body: `60% copros, 40% pavillons. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 000 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — copro 70 lots Noisy-le-Sec', location: 'Centre Noisy-le-Sec', date: 'Juin 2024', description: `Copro 70 lots. Coulissant Came BX-241 + accessoires copro. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Noisy-le-Sec copro 70 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Noisy-le-Sec centre' } }],
  localReviews: [
    { text: 'Noisy-le-Sec copro 70 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Noisy-le-Sec centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon motorisé. Silencieux.', author: 'Famille L.', context: 'Noisy-le-Sec résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Coulissant Came BK-2200 8 m copro 120 lots. Longue portée.', author: 'Gestionnaire syndic', context: 'Noisy-le-Sec gare', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est.', rows: [
    { communeSlug: 'rosny-sous-bois', communeName: 'Rosny-sous-Bois', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'bondy', communeName: 'Bondy', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Copros + pavillons' },
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '6 000-9 000 €', durationAvg: '10-14 sem.', note: 'Lofts + copros' },
  ] },
  localStats: [{ label: 'Portails Noisy-le-Sec depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Noisy-le-Sec mix copros 93 est.' },
}
