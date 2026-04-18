import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93AulnaySousBois: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'aulnay-sous-bois',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Aulnay-sous-Bois 93', caption: 'Coulissant motorisé Came — copro 100 lots Aulnay centre' },
  heroQuote: { text: 'Aulnay copro 100 lots, vote AG passé sereinement, pose impeccable.', author: 'Syndic Citya', context: 'Aulnay centre' },
  cityGuide: { intro: `Aulnay-sous-Bois (87 000 habitants, 93 nord) regroupe copros années 60-80 + zones pavillonnaires. Demande standard portails copros + pavillons individuels.`,
    sections: [
      { heading: 'Aulnay — mix copros + pavillons', body: `60% copros, 40% pavillons. Coulissant motorisé Came le standard.` },
      { heading: 'Tarifs Aulnay', body: `Coulissant copro : 5 500-7 500 €. Battant pavillon : 4 800-6 500 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — copro 100 lots Aulnay', location: 'Aulnay centre', date: 'Septembre 2024', description: `Remplacement portail manuel défaillant. Vote AG juin, pose 2 jours septembre.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '14 sem.', surface: '5 m' }, quote: { text: 'Aulnay copro 100 lots, vote AG passé sereinement, pose impeccable.', author: 'Syndic Citya', context: 'Aulnay centre' } }],
  localReviews: [
    { text: 'Aulnay copro 100 lots, vote AG passé sereinement, pose impeccable.', author: 'Syndic Citya', context: 'Aulnay centre', rating: 5, date: 'Septembre 2024' },
    { text: 'Battant pavillon individuel. Pose 1 jour.', author: 'Famille B.', context: 'Aulnay résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail, esthétique top.', author: 'Famille D.', context: 'Aulnay nord', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93.', rows: [
    { communeSlug: 'sevran', communeName: 'Sevran', priceAvg: '5 200-7 200 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'tremblay-en-france', communeName: 'Tremblay-en-France', priceAvg: '5 500-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons individuels' },
    { communeSlug: 'le-blanc-mesnil', communeName: 'Le Blanc-Mesnil', priceAvg: '5 200-7 200 €', durationAvg: '10-14 sem.', note: 'Grandes copros' },
  ] },
  localStats: [{ label: 'Portails Aulnay depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Mix équilibré copros/pavillons Aulnay.' },
}
