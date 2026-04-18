import type { PremiumCase } from './types'

export const verrieresValDoise95Eaubonne: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'eaubonne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Eaubonne 95', caption: 'Verrière 6 carreaux noir mat — pavillon Eaubonne' },
  heroQuote: { text: 'Eaubonne pavillon bourgeois, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille B.', context: 'Eaubonne centre' },
  cityGuide: { intro: `Eaubonne (25 000 habitants, 95) ville résidentielle bourgeoise de la vallée de Montmorency. Pavillons fin XIXe + années 1930 dominants. Demande verrière atelier en croissance forte.`,
    sections: [
      { heading: 'Eaubonne — bourgeoise vallée Montmorency', body: `70% pavillons individuels, dont beaucoup avec hauteur sous plafond 2,80-3,20 m. Verrière 6-8 carreaux profil 40 mm noir mat satiné dominante. Demande croissante "verrière toute hauteur" sur les rénovations bourgeoises.` },
      { heading: 'Notre process Eaubonne', body: `Métré sur place 45 min, devis pile (pas de "à partir de"), fabrication atelier 3-4 sem, pose 1-2 jours par 2 compagnons. SAV garanti décennale.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante 6-8 m² : 8 200-11 500 €. Toute hauteur 10-14 m² : 14 000-22 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Eaubonne 1908', location: 'Centre Eaubonne', date: 'Juin 2024', description: `Pavillon bourgeois 1908, séparation cuisine/séjour. Verrière 4 m × 2,90 m, profils acier 40 mm noir mat RAL 9005, soudures MIG meulées invisibles. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : cloison plâtre' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verrière 8 carreaux' } }, metrics: { price: '9 400 €', duration: '6 sem.', surface: '11,6 m²' }, quote: { text: 'Eaubonne pavillon bourgeois, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille B.', context: 'Eaubonne centre' } }],
  localReviews: [
    { text: 'Eaubonne pavillon bourgeois, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille B.', context: 'Eaubonne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 12 m² salon. Pose 2 jours, parquet d\'origine intact.', author: 'Hugo M.', context: 'Eaubonne nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Esthétique authentique, atelier vrai métier.', author: 'Famille D.', context: 'Eaubonne sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines vallée Montmorency.', rows: [
    { communeSlug: 'enghien-les-bains', communeName: 'Enghien-les-Bains', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeoise lac premium' },
    { communeSlug: 'ermont', communeName: 'Ermont', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix pavillons + apparts' },
    { communeSlug: 'montmorency', communeName: 'Montmorency', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois historiques' },
  ] },
  localStats: [{ label: 'Verrières Eaubonne depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part toute hauteur', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible pavillons bourgeois Eaubonne, demande verrière toute hauteur en hausse.' },
}
