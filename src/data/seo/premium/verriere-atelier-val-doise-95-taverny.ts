import type { PremiumCase } from './types'

export const verriereAtelierValDoise95Taverny: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'val-doise-95',
  communeSlug: 'taverny',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Taverny 95', caption: 'Verrière 6 carreaux noir mat — pavillon Taverny' },
  heroQuote: { text: 'Taverny pavillon, verrière acier 6 carreaux. Pose en 1 jour, propre.', author: 'Famille C.', context: 'Taverny centre' },
  cityGuide: { intro: `Taverny (27 000 habitants, 95) ville résidentielle pavillonnaire majoritaire. Demande verrière atelier en croissance forte sur cuisines/séjours.`,
    sections: [
      { heading: 'Taverny — pavillonnaire dominant', body: `85% pavillons individuels, dont nombreux années 1960-1980 rénovés. Verrière 6 carreaux profil 40 mm noir mat dominante en séparation cuisine/séjour.` },
      { heading: 'Process', body: `Métré 45 min sur place, devis pile, fabrication atelier 3-4 sem, pose 1-2 jours.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante 6-8 m² : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Taverny années 70', location: 'Taverny centre', date: 'Mai 2024', description: `Pavillon 1972 rénové, ouverture cuisine sur séjour. Verrière 3,2 m × 2,5 m profils 40 mm noir mat RAL 9005, soudures MIG meulées. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '5 sem.', surface: '8 m²' }, quote: { text: 'Taverny pavillon, verrière acier 6 carreaux. Pose en 1 jour, propre.', author: 'Famille C.', context: 'Taverny centre' } }],
  localReviews: [
    { text: 'Taverny pavillon, verrière acier 6 carreaux. Pose en 1 jour, propre.', author: 'Famille C.', context: 'Taverny centre', rating: 5, date: 'Mai 2024' },
    { text: 'Verrière + porte battante cuisine. Profils 40 mm soudés MIG, top métier.', author: 'Famille G.', context: 'Taverny Vaucelles', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Esthétique authentique.', author: 'Hugo R.', context: 'Taverny pavillon', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières atelier communes voisines vallée Montmorency.', rows: [
    { communeSlug: 'beauchamp', communeName: 'Beauchamp', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'bessancourt', communeName: 'Bessancourt', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons individuels' },
    { communeSlug: 'saint-leu-la-foret', communeName: 'Saint-Leu-la-Forêt', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeoise pavillons' },
  ] },
  localStats: [{ label: 'Verrières Taverny depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Taverny pavillonnaire dominant, demande verrière croissante.' },
}
