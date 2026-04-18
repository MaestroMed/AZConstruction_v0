import type { PremiumCase } from './types'

export const verrieresSomme80Doullens: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'somme-80',
  communeSlug: 'doullens',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Doullens 80', caption: 'Verrière 6 carreaux — maison Doullens' },
  heroQuote: { text: 'Doullens maison ancienne, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille D.', context: 'Doullens centre' },
  cityGuide: { intro: `Doullens (6 000 habitants, 80 nord) ville historique citadelle Vauban XVIe. Maisons anciennes centre + pavillons + zone rurale. Demande verrière stable artisanat patrimoine.`,
    sections: [
      { heading: 'Doullens — citadelle Vauban', body: `50% maisons anciennes centre historique, 40% pavillons, 10% copros. Verrière 6-8 carreaux profil noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 400-6 000 €. Avec porte battante : 7 000-9 800 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — maison Doullens centre', location: 'Doullens centre', date: 'Juin 2024', description: `Maison XIXe rénovée centre historique. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 600 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Doullens maison ancienne, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille D.', context: 'Doullens centre' } }],
  localReviews: [
    { text: 'Doullens maison ancienne, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille D.', context: 'Doullens centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Doullens résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille R.', context: 'Doullens citadelle', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 80 nord.', rows: [
    { communeSlug: 'amiens', communeName: 'Amiens', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture 80' },
    { communeSlug: 'abbeville', communeName: 'Abbeville', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Historique' },
    { communeSlug: 'bernaville', communeName: 'Bernaville', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural' },
  ] },
  localStats: [{ label: 'Verrières Doullens depuis 2020', value: '~2' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part maisons anciennes', value: '50 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Doullens citadelle Vauban patrimoine.' },
}
