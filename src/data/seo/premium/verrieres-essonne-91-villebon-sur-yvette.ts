import type { PremiumCase } from './types'

export const verrieresEssonne91VillebonSurYvette: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'essonne-91',
  communeSlug: 'villebon-sur-yvette',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Villebon-sur-Yvette 91', caption: 'Verrière 6 carreaux — pavillon Villebon' },
  heroQuote: { text: 'Villebon pavillon cadre tech, verrière 6 carreaux MIG. Pose 1 jour.', author: 'Famille K.', context: 'Villebon centre' },
  cityGuide: { intro: `Villebon-sur-Yvette (10 000 habitants, 91) ville pavillonnaire proche Plateau de Saclay tech (Polytechnique + CentraleSupélec). Clientèle cadres tech 30-50 ans.`,
    sections: [
      { heading: 'Villebon — pavillonnaire Saclay tech', body: `85% pavillons individuels cadres tech, 15% copros. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Villebon tech', location: 'Centre Villebon', date: 'Juin 2024', description: `Pavillon 1985 rénové (couple cadres Thales/EDF). Verrière 3,5 m × 2,6 m profils 40 mm. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Villebon pavillon cadre tech, verrière 6 carreaux MIG. Pose 1 jour.', author: 'Famille K.', context: 'Villebon centre' } }],
  localReviews: [
    { text: 'Villebon pavillon cadre tech, verrière 6 carreaux MIG. Pose 1 jour.', author: 'Famille K.', context: 'Villebon centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante + visserie apparente sur demande. Esthétique loft.', author: 'Famille L.', context: 'Villebon Saclay', rating: 5, date: 'Mars 2024' },
    { text: 'Soudures MIG meulées invisibles. Pro.', author: 'Hugo M.', context: 'Villebon résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes Saclay tech.', rows: [
    { communeSlug: 'palaiseau', communeName: 'Palaiseau', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Polytechnique tech' },
    { communeSlug: 'orsay', communeName: 'Orsay', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Université tech' },
    { communeSlug: 'les-ulis', communeName: 'Les Ulis', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Ville nouvelle tech' },
  ] },
  localStats: [{ label: 'Verrières Villebon depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part cadres tech', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Villebon-sur-Yvette cadres tech Plateau Saclay.' },
}
