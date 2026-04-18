import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93RosnySousBois: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'rosny-sous-bois',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Rosny-sous-Bois 93', caption: 'Coulissant Came — copro Rosny' },
  heroQuote: { text: 'Rosny copro 80 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Rosny centre' },
  cityGuide: { intro: `Rosny-sous-Bois (46 000 habitants, 93) ville mixte copros + pavillons + Rosny 2. Demande portails équilibrée.`,
    sections: [
      { heading: 'Rosny — copros + pavillons', body: `60% copros, 40% pavillons. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 200 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — copro 80 lots Rosny', location: 'Centre Rosny', date: 'Juin 2024', description: `Copro 80 lots. Coulissant Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Rosny copro 80 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Rosny centre' } }],
  localReviews: [
    { text: 'Rosny copro 80 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Rosny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon motorisé Nice. Silencieux.', author: 'Famille L.', context: 'Rosny Boissière', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon résidentiel. Pro.', author: 'Vincent T.', context: 'Rosny Val-de-Fontenay', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est.', rows: [
    { communeSlug: 'noisy-le-sec', communeName: 'Noisy-le-Sec', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'bondy', communeName: 'Bondy', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Copros + pavillons' },
    { communeSlug: 'montreuil', communeName: 'Montreuil', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Lofts + pavillons' },
  ] },
  localStats: [{ label: 'Portails Rosny depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Rosny-sous-Bois mix copros + pavillons 93 est.' },
}
