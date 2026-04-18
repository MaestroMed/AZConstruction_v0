import type { PremiumCase } from './types'

export const verrieresYvelines78Plaisir: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'plaisir',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Plaisir 78', caption: 'Verrière 8 carreaux — pavillon Plaisir' },
  heroQuote: { text: 'Plaisir pavillon, verrière acier 8 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Plaisir centre' },
  cityGuide: { intro: `Plaisir (32 000 habitants, 78) ville résidentielle pavillonnaire sud-ouest Paris. Pavillons + copros récentes. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Plaisir — pavillonnaire sud-ouest', body: `75% pavillons individuels, 25% copros. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 200 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux — pavillon Plaisir', location: 'Centre Plaisir', date: 'Juin 2024', description: `Pavillon 1980 rénové. Verrière 4 m × 2,75 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 200 €', duration: '6 sem.', surface: '11 m²' }, quote: { text: 'Plaisir pavillon, verrière acier 8 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Plaisir centre' } }],
  localReviews: [
    { text: 'Plaisir pavillon, verrière acier 8 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Plaisir centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille R.', context: 'Plaisir résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée + finition propre. Métier.', author: 'Hugo M.', context: 'Plaisir Clé-de-Saint-Pierre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78.', rows: [
    { communeSlug: 'elancourt', communeName: 'Élancourt', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'trappes', communeName: 'Trappes', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'guyancourt', communeName: 'Guyancourt', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Plaisir depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Plaisir pavillonnaire sud-ouest Yvelines.' },
}
