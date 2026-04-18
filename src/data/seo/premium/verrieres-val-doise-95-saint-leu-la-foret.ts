import type { PremiumCase } from './types'

export const verrieresValDoise95SaintLeuLaForet: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'saint-leu-la-foret',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Saint-Leu-la-Forêt 95', caption: 'Verrière 6 carreaux — pavillon Saint-Leu' },
  heroQuote: { text: 'Saint-Leu pavillon forêt, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille L.', context: 'Saint-Leu centre' },
  cityGuide: { intro: `Saint-Leu-la-Forêt (15 000 habitants, 95) ville pavillonnaire bord forêt Montmorency. Pavillons bourgeois + résidentielle calme. Demande verrière croissante.`,
    sections: [
      { heading: 'Saint-Leu — pavillonnaire forêt', body: `90% pavillons individuels, 8% copros, 2% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Saint-Leu-la-Forêt', location: 'Saint-Leu centre', date: 'Juin 2024', description: `Pavillon 1935 rénové bord forêt. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Saint-Leu pavillon forêt, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille L.', context: 'Saint-Leu centre' } }],
  localReviews: [
    { text: 'Saint-Leu pavillon forêt, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille L.', context: 'Saint-Leu centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille C.', context: 'Saint-Leu résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Finitions propres.', author: 'Famille R.', context: 'Saint-Leu forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 forêt Montmorency.', rows: [
    { communeSlug: 'taverny', communeName: 'Taverny', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
    { communeSlug: 'ermont', communeName: 'Ermont', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'le-plessis-bouchard', communeName: 'Le Plessis-Bouchard', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Saint-Leu depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Saint-Leu-la-Forêt bord forêt Montmorency résidentielle.' },
}
