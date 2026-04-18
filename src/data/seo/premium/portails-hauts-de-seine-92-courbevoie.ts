import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Courbevoie: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'courbevoie',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Courbevoie 92', caption: 'Coulissant motorisé Came — copro Courbevoie' },
  heroQuote: { text: 'Courbevoie copro 70 lots, coulissant Came motorisé. AG votée, pose 1 jour.', author: 'Conseil syndical', context: 'Courbevoie centre' },
  cityGuide: { intro: `Courbevoie (83 000 habitants, 92) commune limitrophe La Défense + Neuilly. Mix copros résidentielles + pavillons Bécon-les-Bruyères. Demande équilibrée portails.`,
    sections: [
      { heading: 'Courbevoie — copros + pavillons Bécon', body: `60% copros, 40% pavillons. Coulissant motorisé Came + battant double vantail dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 000 €. Battant pavillon : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m motorisé — copro 70 lots Courbevoie', location: 'Centre Courbevoie', date: 'Juin 2024', description: `Remplacement portail vétuste. Coulissant Came BX-241 motorisé + accessoires complets. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 200 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Courbevoie copro 70 lots, coulissant Came motorisé. AG votée, pose 1 jour.', author: 'Conseil syndical', context: 'Courbevoie centre' } }],
  localReviews: [
    { text: 'Courbevoie copro 70 lots, coulissant Came motorisé. AG votée, pose 1 jour.', author: 'Conseil syndical', context: 'Courbevoie centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail Bécon. Motorisation Nice à bras cachée.', author: 'Famille L.', context: 'Bécon-les-Bruyères', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, esthétique contemporaine.', author: 'Vincent T.', context: 'Faubourg de l\'Arche', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92.', rows: [
    { communeSlug: 'la-garenne-colombes', communeName: 'La Garenne-Colombes', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + petites copros' },
    { communeSlug: 'puteaux', communeName: 'Puteaux', priceAvg: '6 000-9 000 €', durationAvg: '10-14 sem.', note: 'La Défense + pavillons' },
    { communeSlug: 'levallois-perret', communeName: 'Levallois-Perret', priceAvg: '6 500-11 000 €', durationAvg: '10-14 sem.', note: 'Copros premium CSP++' },
  ] },
  localStats: [{ label: 'Portails Courbevoie depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Courbevoie limitrophe La Défense, mix copros + pavillons Bécon.' },
}
