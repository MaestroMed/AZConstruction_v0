import type { PremiumCase } from './types'

export const verrieresValDoise95Taverny: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'taverny',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Taverny 95', caption: 'Verrière 6 carreaux — pavillon Taverny' },
  heroQuote: { text: 'Taverny pavillon bord forêt Montmorency, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille T.', context: 'Taverny centre' },
  cityGuide: { intro: `Taverny (27 000 habitants, 95) ville résidentielle bord forêt Montmorency — pavillons années 50-80 + copros + base aérienne. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Taverny — bord forêt pavillonnaire', body: `78% pavillons individuels, 18% copros, 4% industriel/base aérienne. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Taverny bord forêt', location: 'Taverny centre', date: 'Juin 2024', description: `Pavillon 1965 rénové bord forêt Montmorency. Verrière 3,8 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 300 €', duration: '5 sem.', surface: '9,9 m²' }, quote: { text: 'Taverny pavillon bord forêt Montmorency, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille T.', context: 'Taverny centre' } }],
  localReviews: [
    { text: 'Taverny pavillon bord forêt Montmorency, verrière 6 carreaux. Pose propre 1 jour.', author: 'Famille T.', context: 'Taverny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Taverny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Visserie cachée propre.', author: 'Famille R.', context: 'Taverny forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 forêt Montmorency.', rows: [
    { communeSlug: 'saint-leu-la-foret', communeName: 'Saint-Leu-la-Forêt', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
    { communeSlug: 'bessancourt', communeName: 'Bessancourt', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons forêt' },
    { communeSlug: 'frepillon', communeName: 'Frépillon', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Taverny depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '78 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Taverny 95 bord forêt Montmorency pavillonnaire CSP++.' },
}
