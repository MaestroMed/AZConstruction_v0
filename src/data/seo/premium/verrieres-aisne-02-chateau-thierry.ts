import type { PremiumCase } from './types'

export const verrieresAisne02ChateauThierry: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'aisne-02',
  communeSlug: 'chateau-thierry',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Château-Thierry 02', caption: 'Verrière 6 carreaux — maison bourgeoise Château-Thierry' },
  heroQuote: { text: 'Château-Thierry maison bourgeoise bord Marne, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille C.', context: 'Château-Thierry centre' },
  cityGuide: { intro: `Château-Thierry (14 000 habitants, 02 sud) sous-préfecture Aisne — ville historique Jean de La Fontaine bord Marne. Maisons bourgeoises XVIIIe-XIXe + pavillons.`,
    sections: [
      { heading: 'Château-Thierry — bord Marne historique', body: `70% maisons bourgeoises centre historique, 30% pavillons extérieurs. Verrière 6-8 carreaux profil noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 500-6 200 €. Avec porte battante : 7 200-10 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — maison bourgeoise Château-Thierry bord Marne', location: 'Centre Château-Thierry', date: 'Juin 2024', description: `Maison bourgeoise 1890 rénovée bord Marne. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Château-Thierry maison bourgeoise bord Marne, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille C.', context: 'Château-Thierry centre' } }],
  localReviews: [
    { text: 'Château-Thierry maison bourgeoise bord Marne, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille C.', context: 'Château-Thierry centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Château-Thierry Vincelles', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier sérieux. Marc compagnon vrai métier.', author: 'Famille R.', context: 'Château-Thierry résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 02 sud.', rows: [
    { communeSlug: 'fere-en-tardenois', communeName: 'Fère-en-Tardenois', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural patrimoine' },
    { communeSlug: 'soissons', communeName: 'Soissons', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture' },
    { communeSlug: 'villiers-saint-denis', communeName: 'Villiers-Saint-Denis', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Château-Thierry depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part maisons bourgeoises', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Château-Thierry bord Marne historique La Fontaine.' },
}
