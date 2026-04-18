import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Antony: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'antony',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copropriété — Antony', caption: 'Coulissant motorisé Came — copro 130 lots Antony RER B' },
  heroQuote: { text: 'Antony copro 130 lots proche RER, vote AG en 1ère, pose impeccable.', author: 'Syndic Foncia', context: 'Antony centre' },
  cityGuide: {
    intro: `Antony (62 000 habitants, sud des Hauts-de-Seine, RER B) : grandes copros années 60-80 autour de la gare RER + pavillons individuels Antony-Bourg-La-Reine. Demande équilibrée portails copros + pavillons.`,
    sections: [
      { heading: 'Antony — RER B + pavillons', body: `60% copros années 70-80, 40% pavillons. Coulissant motorisé dominant.` },
      { heading: 'Tarifs', body: `Copros : 5 500-7 500 €. Pavillons battant ou autoportant : 5 200-9 000 €. Délai 8-14 sem.` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant Came 5 m — copro 130 lots Antony RER',
    location: 'Près RER B, Antony',
    date: 'Juin 2024',
    description: `Remplacement portail manuel défaillant. Coulissant rail 5 m motorisé Came, 6 télécommandes, photocellules. Vote AG mars, pose 2 jours juin.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '6 800 €', duration: '12 sem.', surface: '5 m' },
    quote: { text: 'Antony copro 130 lots proche RER, vote AG en 1ère, pose impeccable.', author: 'Syndic Foncia', context: 'Antony centre' },
  }],
  localReviews: [
    { text: 'Antony copro 130 lots proche RER, vote AG en 1ère, pose impeccable.', author: 'Syndic Foncia', context: 'Antony centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant motorisé pavillon Antony-Bourg. Pose 1 journée, propre.', author: 'Famille B.', context: 'Antony-Bourg', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant 5 m pavillon résidentiel. Sans rail, esthétique parfaite.', author: 'Famille L.', context: 'Antony résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Portails communes voisines 92 sud.',
    rows: [
      { communeSlug: 'bourg-la-reine', communeName: 'Bourg-la-Reine', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
      { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiels' },
      { communeSlug: 'chatenay-malabry', communeName: 'Châtenay-Malabry', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Mix tissu varié' },
    ],
  },
  localStats: [
    { label: 'Portails Antony depuis 2020', value: '~10' },
    { label: 'Note moyenne Antony', value: '4,9 / 5' },
    { label: 'Part copros', value: '60 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Antony — RER B, copros + pavillons.' },
}
