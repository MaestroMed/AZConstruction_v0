import type { PremiumCase } from './types'

export const gardeCorpsHautsDeSeine92Chatillon: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'chatillon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps copro — Châtillon', caption: 'Restauration garde-corps copro 70 lots — Châtillon centre' },
  heroQuote: { text: 'Châtillon copro 70 lots, 7 balcons remplacés en 3 jours. Aucune plainte résident.', author: 'Conseil syndical', context: 'Châtillon centre' },
  cityGuide: {
    intro: `Châtillon (37 000 habitants, 92 sud) regroupe surtout copros années 60-80 + pavillons. Demande standard garde-corps copros à rénover.`,
    sections: [
      { heading: 'Châtillon — copros principalement', body: `75% copros, 25% pavillons. Barreaudé acier copros le standard.` },
      { heading: 'Tarifs', body: `Barreaudé copro : 250-340 €/ml. Verre + main courante : 380-520 €/ml.` },
    ],
  },
  caseStudies: [{ title: 'Restauration 7 garde-corps copro 70 lots', location: 'Avenue Pasteur, Châtillon', date: 'Septembre 2024', description: `Remplacement 7 garde-corps barreaudés rouillés. Pose 3 jours, gardien coordonné.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 800 €', duration: '12 sem.', surface: '42 ml' }, quote: { text: 'Châtillon copro 70 lots, 7 balcons remplacés en 3 jours. Aucune plainte résident.', author: 'Conseil syndical', context: 'Châtillon centre' } }],
  localReviews: [
    { text: 'Châtillon copro 70 lots, 7 balcons remplacés en 3 jours. Aucune plainte résident.', author: 'Conseil syndical', context: 'Châtillon centre', rating: 5, date: 'Septembre 2024' },
    { text: 'Garde-corps verre + main courante balcon R+5. Pose en demi-journée.', author: 'Famille B.', context: 'Châtillon nord', rating: 5, date: 'Mars 2024' },
    { text: 'Pavillon individuel, garde-corps cables inox terrasse. Look contemporain.', author: 'Vincent P.', context: 'Châtillon sud', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 92 sud.', rows: [
    { communeSlug: 'malakoff', communeName: 'Malakoff', priceAvg: '240-330 €/ml', durationAvg: '10-14 sem.', note: 'Copros années 70-80' },
    { communeSlug: 'montrouge', communeName: 'Montrouge', priceAvg: '260-360 €/ml', durationAvg: '10-14 sem.', note: 'Mix populaire/résidentiel' },
    { communeSlug: 'bagneux', communeName: 'Bagneux', priceAvg: '230-320 €/ml', durationAvg: '10-14 sem.', note: 'Grandes copros' },
  ] },
  localStats: [{ label: 'Garde-corps Châtillon depuis 2020', value: '~9' }, { label: 'Note moyenne Châtillon', value: '4,9 / 5' }, { label: 'Part copros', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Châtillon copros standards, peu de demande premium.' },
}
