import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Colombes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'colombes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copropriété — Colombes 92', caption: 'Coulissant motorisé Came — copro Colombes centre' },
  heroQuote: { text: 'Colombes copro 120 lots, vote AG passé en 1ère présentation. Pose en 2 jours sans gêne.', author: 'Syndic professionnel', context: 'Colombes centre' },
  cityGuide: {
    intro: `Colombes (86 000 habitants, Hauts-de-Seine nord) regroupe beaucoup de copropriétés moyennes-grandes années 60-80 + des pavillons individuels. Demande standard de remplacement portails copros vieillissants.`,
    sections: [
      { heading: 'Colombes — copros + pavillons', body: `60% copros, 40% pavillons. Coulissant motorisé Came le standard copros. Battant ou autoportant pour pavillons.` },
      { heading: 'Configurations', body: `Coulissant motorisé Came copro : 5 800-7 500 €. Battant motorisé pavillon : 4 500-6 800 €. Autoportant pavillon : 6 800-9 200 €.` },
      { heading: 'Délais Colombes', body: `Copros : 12-16 sem vote → pose. Pavillons : 7-10 sem signature → pose.` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant Came 5 m — copro 120 lots Colombes centre',
    location: 'Rue Saint-Denis, Colombes',
    date: 'Septembre 2024',
    description: `Remplacement portail manuel rouillé. Coulissant rail 5 m motorisé Came, 6 télécommandes. Vote AG mai, pose 2 jours septembre. Réception OK syndic.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '6 500 €', duration: '14 sem.', surface: '5 m' },
    quote: { text: 'Colombes copro 120 lots, vote AG passé en 1ère présentation. Pose en 2 jours sans gêne.', author: 'Syndic professionnel', context: 'Colombes centre' },
  }],
  localReviews: [
    { text: 'Colombes copro 120 lots, vote AG passé en 1ère présentation. Pose en 2 jours sans gêne.', author: 'Syndic professionnel', context: 'Colombes centre', rating: 5, date: 'Septembre 2024' },
    { text: 'Battant motorisé pavillon Colombes nord. Pose 1 journée, propre.', author: 'Famille B.', context: 'Colombes nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant 5 m pavillon Petit-Colombes. Sans rail au sol, parfait pour notre allée pavée.', author: 'Famille D.', context: 'Petit-Colombes', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Portails communes voisines Hauts-de-Seine.',
    rows: [
      { communeSlug: 'asnieres-sur-seine', communeName: 'Asnières-sur-Seine', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
      { communeSlug: 'bois-colombes', communeName: 'Bois-Colombes', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons individuels' },
      { communeSlug: 'gennevilliers', communeName: 'Gennevilliers', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Copros 70-80s' },
    ],
  },
  localStats: [
    { label: 'Portails Colombes depuis 2020', value: '~10' },
    { label: 'Note moyenne Colombes', value: '4,9 / 5' },
    { label: 'Part copros', value: '60 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Mix équilibré copros/pavillons Colombes.' },
}
