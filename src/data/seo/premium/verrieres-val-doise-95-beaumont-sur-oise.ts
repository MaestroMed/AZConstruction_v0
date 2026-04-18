import type { PremiumCase } from './types'

export const verrieresValDoise95BeaumontSurOise: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'beaumont-sur-oise',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Beaumont-sur-Oise 95', caption: 'Verrière 6 carreaux — maison Beaumont bord Oise' },
  heroQuote: { text: 'Beaumont maison ancienne bord Oise, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille B.', context: 'Beaumont centre' },
  cityGuide: { intro: `Beaumont-sur-Oise (9 500 habitants, 95 nord) ville bord Oise avec maisons anciennes + pavillons + zones rurales. Demande verrière stable artisanat patrimoine.`,
    sections: [
      { heading: 'Beaumont — bord Oise pavillonnaire', body: `65% pavillons individuels, 25% maisons anciennes XIXe, 10% copros. Verrière 6-8 carreaux profil noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 800-6 500 €. Avec porte battante : 7 800-10 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — maison Beaumont bord Oise', location: 'Beaumont centre', date: 'Juin 2024', description: `Maison XIXe rénovée bord Oise. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Beaumont maison ancienne bord Oise, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille B.', context: 'Beaumont centre' } }],
  localReviews: [
    { text: 'Beaumont maison ancienne bord Oise, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille B.', context: 'Beaumont centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Beaumont résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Visserie cachée propre.', author: 'Famille G.', context: 'Beaumont bord Oise', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 nord.', rows: [
    { communeSlug: 'l-isle-adam', communeName: 'L\'Isle-Adam', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Bord Oise bourgeois' },
    { communeSlug: 'persan', communeName: 'Persan', priceAvg: '950-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'nointel', communeName: 'Nointel', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Rural' },
  ] },
  localStats: [{ label: 'Verrières Beaumont depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part maisons anciennes', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Beaumont bord Oise patrimoine XIXe.' },
}
