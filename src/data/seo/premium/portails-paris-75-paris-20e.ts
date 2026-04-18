import type { PremiumCase } from './types'

export const portailsParis75Paris20e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-20e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copropriété — Paris 20e Père-Lachaise', caption: 'Coulissant motorisé — copro 80 lots Père-Lachaise' },
  heroQuote: { text: 'Belleville et Père-Lachaise, syndics actifs, AZ a su s\'adapter aux contraintes locales.', author: 'Syndic Foncia', context: 'Père-Lachaise, 20e' },
  cityGuide: {
    intro: `Le 20e (Belleville, Père-Lachaise, Ménilmontant, Gambetta) est l'un des arrondissements les plus populaires de Paris. Pour les portails, terrain dense en copros années 60-80 + quelques apparts haussmanniens autour de Gambetta.`,
    sections: [
      { heading: 'Le 20e — copros denses', body: `90% de nos chantiers 20e sont en copros 50-200 lots. Syndics professionnels majoritaires. Coulissant motorisé Came le standard.` },
      { heading: 'Configurations', body: `Coulissant rail 4-5 m motorisé : 65%. Battant double vantail : 25%. Autoportant : 10%. Tarif 5 200-7 500 € posé motorisé.` },
      { heading: 'Tarifs et délais', body: `Délai vote AG → pose : 12-16 sem. Tarif moyen 5 800 € posé.` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant Came 5 m — copro 80 lots Père-Lachaise',
    location: 'Avenue du Père-Lachaise, 20e',
    date: 'Septembre 2024',
    description: `Remplacement portail manuel défaillant. Coulissant rail 5 m + 6 télécommandes. Vote AG + DP mairie + pose en 14 sem total. Réception OK.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '6 200 €', duration: '14 sem.', surface: '5 m' },
    quote: { text: 'Belleville et Père-Lachaise, syndics actifs, AZ a su s\'adapter aux contraintes locales.', author: 'Syndic Foncia', context: 'Père-Lachaise' },
  }],
  localReviews: [
    { text: 'Belleville et Père-Lachaise, syndics actifs, AZ a su s\'adapter aux contraintes locales.', author: 'Syndic Foncia', context: 'Père-Lachaise, 20e', rating: 5, date: 'Septembre 2024' },
    { text: 'Pose battant motorisé copro 30 lots Gambetta. Précis et propre.', author: 'Conseil syndical', context: 'Gambetta, 20e', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination gardien + syndic parfaite. Aucune plainte sur 100 lots Belleville.', author: 'Syndic Citya', context: 'Belleville, 20e', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Portails arrondissements limitrophes 20e.',
    rows: [
      { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '5 200-7 800 €', durationAvg: '12-16 sem.', note: 'Buttes-Chaumont, copros 60-80s' },
      { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '5 500-8 200 €', durationAvg: '12-16 sem.', note: 'Charonne, copros' },
      { communeSlug: 'paris-12e', communeName: 'Paris 12e', priceAvg: '5 800-8 500 €', durationAvg: '14-18 sem.', note: 'Bercy, grandes copros' },
    ],
  },
  localStats: [
    { label: 'Portails Paris 20e depuis 2020', value: '~14' },
    { label: 'Note moyenne 20e', value: '4,9 / 5' },
    { label: 'Part copros 50+ lots', value: '90 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Belleville/Père-Lachaise/Gambetta — copros denses standards.' },
}
