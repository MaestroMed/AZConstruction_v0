import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Puteaux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'puteaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Puteaux 92', caption: 'Coulissant motorisé — copro Puteaux La Défense' },
  heroQuote: { text: 'Puteaux copro 100 lots La Défense, coulissant Came silencieux. Pose 1 jour.', author: 'Conseil syndical', context: 'Puteaux La Défense' },
  cityGuide: { intro: `Puteaux (45 000 habitants, 92) limitrophe La Défense + Neuilly. Grandes copros années 70-90 + résidences récentes Chantiers-de-Défense. Demande forte portails copros.`,
    sections: [
      { heading: 'Puteaux — cœur La Défense', body: `75% copros (résidentiel + mixité bureaux), 25% pavillons Bellini/Charcot. Coulissant motorisé Came dominant.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 500 €. Battant pavillon : 4 800-7 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came BK-2200 8 m — copro 100 lots Puteaux', location: 'Avenue Gambetta, Puteaux', date: 'Juillet 2024', description: `Portail 8 m double sens entrée/sortie copro 100 lots. Motorisation Came BK-2200 longue portée. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 200 €', duration: '8 sem.', surface: '8 m' }, quote: { text: 'Puteaux copro 100 lots La Défense, coulissant Came silencieux. Pose 1 jour.', author: 'Conseil syndical', context: 'Puteaux La Défense' } }],
  localReviews: [
    { text: 'Puteaux copro 100 lots La Défense, coulissant Came silencieux. Pose 1 jour.', author: 'Conseil syndical', context: 'Puteaux La Défense', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant pavillon Bellini double vantail motorisé Nice. Top qualité.', author: 'Famille R.', context: 'Bellini, Puteaux', rating: 5, date: 'Mars 2024' },
    { text: 'Lecteur badge Vigik intégré motorisation Came. Accès sécurisé copro.', author: 'Gestionnaire syndic', context: 'Puteaux centre', rating: 5, date: 'Octobre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines La Défense.', rows: [
    { communeSlug: 'courbevoie', communeName: 'Courbevoie', priceAvg: '6 500-9 500 €', durationAvg: '10-14 sem.', note: 'Limitrophe Défense' },
    { communeSlug: 'nanterre', communeName: 'Nanterre', priceAvg: '6 000-9 000 €', durationAvg: '10-14 sem.', note: 'Préfecture 92' },
    { communeSlug: 'la-garenne-colombes', communeName: 'La Garenne-Colombes', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix résidentiel' },
  ] },
  localStats: [{ label: 'Portails Puteaux depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Puteaux La Défense copros dominantes.' },
}
