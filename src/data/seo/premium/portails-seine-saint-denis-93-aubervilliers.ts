import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93Aubervilliers: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'aubervilliers',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copro — Aubervilliers 93', caption: 'Coulissant motorisé — copro 150 lots Aubervilliers' },
  heroQuote: { text: 'Aubervilliers copro 150 lots, vote AG OK, pose 3 jours sans gêne. Très pro.', author: 'Syndic Foncia', context: 'Aubervilliers centre' },
  cityGuide: { intro: `Aubervilliers (87 000 habitants, 93) regroupe beaucoup de copros années 60-80 + zones industrielles requalifiées. Demande standard portails copros.`,
    sections: [
      { heading: 'Aubervilliers — copros + industriel', body: `80% copros résidentielles, 20% portails industriels (entreprises, garages).` },
      { heading: 'Tarifs', body: `Coulissant copro 5 m : 5 500-7 500 €. Portail industriel : 6 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m — copro 150 lots Aubervilliers', location: 'Avenue Jean-Jaurès, Aubervilliers', date: 'Septembre 2024', description: `Remplacement portail manuel défaillant. Coulissant rail motorisé Came. Vote AG juin, pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '14 sem.', surface: '6 m' }, quote: { text: 'Aubervilliers copro 150 lots, vote AG OK, pose 3 jours sans gêne. Très pro.', author: 'Syndic Foncia', context: 'Aubervilliers centre' } }],
  localReviews: [
    { text: 'Aubervilliers copro 150 lots, vote AG OK, pose 3 jours sans gêne. Très pro.', author: 'Syndic Foncia', context: 'Aubervilliers', rating: 5, date: 'Septembre 2024' },
    { text: 'Portail industriel pour notre entreprise. Devis honnête, pose rapide.', author: 'Gérant PME', context: 'Zone industrielle', rating: 5, date: 'Mars 2024' },
    { text: 'Battant motorisé sur petite copro 40 lots. Pose 1 journée.', author: 'Conseil syndical', context: 'Aubervilliers nord', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93.', rows: [
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '5 500-7 800 €', durationAvg: '12-16 sem.', note: 'Gentrification, copros' },
    { communeSlug: 'la-courneuve', communeName: 'La Courneuve', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Grandes copros' },
    { communeSlug: 'bobigny', communeName: 'Bobigny', priceAvg: '5 500-7 800 €', durationAvg: '12-16 sem.', note: 'Préfecture 93' },
  ] },
  localStats: [{ label: 'Portails Aubervilliers depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part industriel', value: '20 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Mix copros + industriel Aubervilliers.' },
}
