import type { PremiumCase } from './types'

export const portailsValDeMarne94ChampignySurMarne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'champigny-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copro — Champigny 94', caption: 'Coulissant motorisé — copro 100 lots Champigny' },
  heroQuote: { text: 'Champigny copro 100 lots, vote AG sereine, pose 2 jours impeccable.', author: 'Syndic Foncia', context: 'Champigny centre' },
  cityGuide: { intro: `Champigny-sur-Marne (78 000 habitants, 94) compte copros années 60-80 + pavillons. Demande standard portails copros.`,
    sections: [
      { heading: 'Champigny — copros + pavillons', body: `60% copros, 40% pavillons. Coulissant Came le standard.` },
      { heading: 'Tarifs', body: `Coulissant copro : 5 500-7 500 €. Pavillon : 4 800-7 500 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant 5 m — copro 100 lots Champigny', location: 'Centre Champigny', date: 'Septembre 2024', description: `Remplacement portail défaillant. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '13 sem.', surface: '5 m' }, quote: { text: 'Champigny copro 100 lots, vote AG sereine, pose 2 jours impeccable.', author: 'Syndic Foncia', context: 'Champigny centre' } }],
  localReviews: [
    { text: 'Champigny copro 100 lots, vote AG sereine, pose 2 jours impeccable.', author: 'Syndic Foncia', context: 'Champigny centre', rating: 5, date: 'Septembre 2024' },
    { text: 'Battant pavillon individuel Champigny. Pose 1 jour.', author: 'Famille B.', context: 'Champigny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant 5 m pavillon. Sans rail, esthétique top.', author: 'Famille D.', context: 'Champigny centre', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94.', rows: [
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '5 800-8 200 €', durationAvg: '10-14 sem.', note: 'Mix bord Marne' },
    { communeSlug: 'maisons-alfort', communeName: 'Maisons-Alfort', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'saint-maur-des-fosses', communeName: 'Saint-Maur-des-Fossés', priceAvg: '6 200-8 800 €', durationAvg: '10-14 sem.', note: 'Pavillons + Marne premium' },
  ] },
  localStats: [{ label: 'Portails Champigny depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Champigny mix copros + pavillons.' },
}
