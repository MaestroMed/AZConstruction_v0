import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92Meudon: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'meudon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Meudon 92', caption: 'Verrière 8 carreaux — pavillon Meudon-la-Forêt' },
  heroQuote: { text: 'Meudon pavillon collines, verrière acier 8 carreaux. Pose 1 jour, travail propre.', author: 'Famille D.', context: 'Meudon collines' },
  cityGuide: { intro: `Meudon (46 000 habitants, 92 sud) ville résidentielle pavillonnaire avec Observatoire + Forêt. Pavillons CSP+ sur collines + apparts vue Seine/Paris. Demande croissante verrière atelier.`,
    sections: [
      { heading: 'Meudon — collines + bord Seine', body: `70% pavillons individuels (collines + Meudon-la-Forêt), 30% apparts bord Seine. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux — pavillon collines Meudon', location: 'Meudon collines', date: 'Juin 2024', description: `Pavillon années 1960 rénové. Verrière 4 m × 2,75 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '6 sem.', surface: '11 m²' }, quote: { text: 'Meudon pavillon collines, verrière acier 8 carreaux. Pose 1 jour, travail propre.', author: 'Famille D.', context: 'Meudon collines' } }],
  localReviews: [
    { text: 'Meudon pavillon collines, verrière acier 8 carreaux. Pose 1 jour, travail propre.', author: 'Famille D.', context: 'Meudon collines', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur loft Bas-Meudon bord Seine. Vue libre.', author: 'Hugo M.', context: 'Bas-Meudon', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille R.', context: 'Meudon-la-Forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 sud.', rows: [
    { communeSlug: 'sevres', communeName: 'Sèvres', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Limitrophe Meudon' },
    { communeSlug: 'clamart', communeName: 'Clamart', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons 92 sud' },
    { communeSlug: 'issy-les-moulineaux', communeName: 'Issy-les-Moulineaux', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Tech IDF sud' },
  ] },
  localStats: [{ label: 'Verrières Meudon depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Meudon pavillons collines + bord Seine.' },
}
