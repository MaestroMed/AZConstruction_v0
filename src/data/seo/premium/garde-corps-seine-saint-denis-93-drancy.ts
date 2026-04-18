import type { PremiumCase } from './types'

export const gardeCorpsSeineSaintDenis93Drancy: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'drancy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Drancy 93', caption: 'Restauration garde-corps copro 80 lots — Drancy' },
  heroQuote: { text: 'Drancy copro 80 lots, 8 balcons remplacés en 3 jours. Très pro.', author: 'Conseil syndical', context: 'Drancy centre' },
  cityGuide: { intro: `Drancy (70 000 habitants, 93) compte beaucoup de copros années 60-80. Demande standard remplacement garde-corps.`,
    sections: [
      { heading: 'Drancy — copros années 60-80', body: `85% copros, 15% pavillons. Barreaudé acier dominant.` },
      { heading: 'Tarifs Drancy', body: `Barreaudé copro : 230-320 €/ml. Délai 12-16 sem.` },
    ] },
  caseStudies: [{ title: 'Restauration 8 garde-corps copro 80 lots Drancy', location: 'Drancy centre', date: 'Octobre 2024', description: `Remplacement 8 garde-corps balcons rouillés. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '13 800 €', duration: '14 sem.', surface: '48 ml' }, quote: { text: 'Drancy copro 80 lots, 8 balcons remplacés en 3 jours. Très pro.', author: 'Conseil syndical', context: 'Drancy centre' } }],
  localReviews: [
    { text: 'Drancy copro 80 lots, 8 balcons remplacés en 3 jours. Très pro.', author: 'Conseil syndical', context: 'Drancy centre', rating: 5, date: 'Octobre 2024' },
    { text: 'Pose pavillon individuel garde-corps cables inox. Look contemporain.', author: 'Famille B.', context: 'Drancy nord', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination gardien parfaite, aucune plainte sur 80 lots.', author: 'Syndic', context: 'Drancy résidentiel', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 93.', rows: [
    { communeSlug: 'le-bourget', communeName: 'Le Bourget', priceAvg: '230-310 €/ml', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'la-courneuve', communeName: 'La Courneuve', priceAvg: '220-300 €/ml', durationAvg: '10-14 sem.', note: 'Grandes copros' },
    { communeSlug: 'bobigny', communeName: 'Bobigny', priceAvg: '240-330 €/ml', durationAvg: '12-16 sem.', note: 'Préfecture' },
  ] },
  localStats: [{ label: 'Garde-corps Drancy depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Drancy copros standards.' },
}
