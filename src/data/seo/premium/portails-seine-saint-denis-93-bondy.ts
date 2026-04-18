import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93Bondy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'bondy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Bondy 93', caption: 'Coulissant Came — copro Bondy' },
  heroQuote: { text: 'Bondy copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Bondy centre' },
  cityGuide: { intro: `Bondy (54 000 habitants, 93) ville mixte copros ANRU + pavillons nord. Demande portails copros + pavillons.`,
    sections: [
      { heading: 'Bondy — mix copros ANRU + pavillons', body: `65% copros, 35% pavillons. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 500 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — copro 90 lots Bondy', location: 'Centre Bondy', date: 'Juin 2024', description: `Copro 90 lots. Coulissant Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 200 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Bondy copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Bondy centre' } }],
  localReviews: [
    { text: 'Bondy copro 90 lots, coulissant Came motorisé. Pose 1 jour.', author: 'Conseil syndical', context: 'Bondy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon Nice à bras caché. Silencieux.', author: 'Famille R.', context: 'Bondy nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail, durable.', author: 'Vincent T.', context: 'Bondy résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est.', rows: [
    { communeSlug: 'noisy-le-sec', communeName: 'Noisy-le-Sec', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'les-pavillons-sous-bois', communeName: 'Les Pavillons-sous-Bois', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'aulnay-sous-bois', communeName: 'Aulnay-sous-Bois', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
  ] },
  localStats: [{ label: 'Portails Bondy depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bondy mix copros + pavillons 93.' },
}
