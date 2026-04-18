import type { PremiumCase } from './types'

export const verrieresSeineEtMarne77Coulommiers: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'coulommiers',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Coulommiers 77', caption: 'Verrière 6 carreaux — maison Coulommiers' },
  heroQuote: { text: 'Coulommiers maison bourgeoise bord Grand Morin, verrière 6 carreaux MIG.', author: 'Famille C.', context: 'Coulommiers centre' },
  cityGuide: { intro: `Coulommiers (14 000 habitants, 77 est) sous-préfecture Seine-et-Marne — ville Brie fromage (Brie de Coulommiers) + pavillons + maisons anciennes + bord Grand Morin. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Coulommiers — Brie bord Grand Morin', body: `70% pavillons individuels, 20% maisons anciennes centre, 10% copros. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 800-6 500 €. Avec porte battante : 7 800-10 800 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — maison Coulommiers bord Grand Morin', location: 'Coulommiers centre', date: 'Juin 2024', description: `Maison bourgeoise 1905 rénovée bord Grand Morin. Verrière 3,8 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 000 €', duration: '5 sem.', surface: '9,9 m²' }, quote: { text: 'Coulommiers maison bourgeoise bord Grand Morin, verrière 6 carreaux MIG.', author: 'Famille C.', context: 'Coulommiers centre' } }],
  localReviews: [
    { text: 'Coulommiers maison bourgeoise bord Grand Morin, verrière 6 carreaux MIG.', author: 'Famille C.', context: 'Coulommiers centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Coulommiers résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille R.', context: 'Coulommiers limitrophe Pommeuse', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 77 est.', rows: [
    { communeSlug: 'mouroux', communeName: 'Mouroux', priceAvg: '950-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural limitrophe' },
    { communeSlug: 'pommeuse', communeName: 'Pommeuse', priceAvg: '950-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural bord Grand Morin' },
    { communeSlug: 'meaux', communeName: 'Meaux', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture + cathédrale' },
  ] },
  localStats: [{ label: 'Verrières Coulommiers depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part maisons bourgeoises', value: '20 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Coulommiers 77 sous-préfecture Brie fromage bord Grand Morin.' },
}
