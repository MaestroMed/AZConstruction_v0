import type { PremiumCase } from './types'

export const portailCoulissantHautsDeSeine92Courbevoie: PremiumCase = {
  productSlug: 'portail-coulissant',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'courbevoie',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Courbevoie La Défense', caption: 'Coulissant motorisé Came 6 m — pavillon Bécon-Faubourg-de-l\'Arche' },
  heroQuote: { text: 'Pavillon proche La Défense, coulissant moderne pour cour pavée. Sans accroc.', author: 'Famille L.', context: 'Bécon, Courbevoie' },
  cityGuide: {
    intro: `Courbevoie (82 000 habitants, en bordure de La Défense) combine zones d'affaires et résidentiel. Pour les portails, mix de copros années 60-90 + pavillons individuels Bécon-Faubourg-Arche.`,
    sections: [
      { heading: 'Courbevoie — bordure La Défense', body: `Mix copros tertiaires-résidentielles + pavillons individuels Bécon. Demande coulissant moderne dominante.` },
      { heading: 'Configurations', body: `Coulissant rail copro 5-6 m : 5 800-7 800 €. Autoportant pavillon : 7 200-9 500 €. Battant motorisé : 5 200-7 200 €.` },
      { heading: 'Délais Courbevoie', body: `Copros 12-16 sem, pavillons 7-10 sem.` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant motorisé 6 m — pavillon Bécon',
    location: 'Bécon, Courbevoie',
    date: 'Juin 2024',
    description: `Remplacement portail battant 25 ans par coulissant rail 6 m motorisé Came. Pose 1 journée. Allée pavée respectée.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '7 200 €', duration: '8 sem.', surface: '6 m' },
    quote: { text: 'Pavillon proche La Défense, coulissant moderne pour cour pavée. Sans accroc.', author: 'Famille L.', context: 'Bécon' },
  }],
  localReviews: [
    { text: 'Pavillon proche La Défense, coulissant moderne pour cour pavée. Sans accroc.', author: 'Famille L.', context: 'Bécon, Courbevoie', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant copro 5 m motorisé Came. Vote AG OK, pose 2 jours.', author: 'Syndic', context: 'Faubourg-de-l\'Arche', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail, esthétique parfaite.', author: 'Famille V.', context: 'Centre Courbevoie', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Portails coulissants communes voisines 92.',
    rows: [
      { communeSlug: 'puteaux', communeName: 'Puteaux', priceAvg: '6 200-8 500 €', durationAvg: '10-14 sem.', note: 'La Défense, copros récentes' },
      { communeSlug: 'la-garenne-colombes', communeName: 'La Garenne-Colombes', priceAvg: '5 800-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
      { communeSlug: 'levallois-perret', communeName: 'Levallois-Perret', priceAvg: '6 500-9 200 €', durationAvg: '12-16 sem.', note: 'Apparts Art Déco + modernes' },
    ],
  },
  localStats: [
    { label: 'Portails Courbevoie depuis 2020', value: '~9' },
    { label: 'Note moyenne Courbevoie', value: '4,9 / 5' },
    { label: 'Part pavillons individuels', value: '50 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bordure La Défense, mix tertiaire-résidentiel.' },
}
