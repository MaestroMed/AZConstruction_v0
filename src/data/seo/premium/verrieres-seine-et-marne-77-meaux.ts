import type { PremiumCase } from './types'

export const verrieresSeineEtMarne77Meaux: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'meaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Meaux 77', caption: 'Verrière 6 carreaux ABF — maison cathédrale Meaux' },
  heroQuote: { text: 'Meaux maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence médiévale.', author: 'Famille M.', context: 'Meaux cathédrale ABF' },
  cityGuide: { intro: `Meaux (54 000 habitants, 77) sous-préfecture Seine-et-Marne — ville Brie fromage (Brie de Meaux) + cathédrale Saint-Étienne XIIe-XVIe + pavillons + copros. Zone ABF centre historique.`,
    sections: [
      { heading: 'Meaux — cathédrale médiévale ABF', body: `30% zone ABF centre médiéval (cathédrale, rempart gallo-romain), 55% pavillons, 15% copros. Verrière 6-8 carreaux profil noir mat ABF validé centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 900-6 700 €. ABF centre : 5 500-7 500 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison cathédrale Meaux', location: 'Centre Meaux ABF', date: 'Juillet 2024', description: `Maison XVIIIe rénovée zone ABF cathédrale. Verrière 3,5 m × 2,6 m profils 40 mm noir mat + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 900 €', duration: '11 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Meaux maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence médiévale.', author: 'Famille M.', context: 'Meaux cathédrale ABF' } }],
  localReviews: [
    { text: 'Meaux maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence médiévale.', author: 'Famille M.', context: 'Meaux cathédrale ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur. Soudures MIG invisibles.', author: 'Famille L.', context: 'Meaux résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Meaux Marne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 77 nord.', rows: [
    { communeSlug: 'mareuil-les-meaux', communeName: 'Mareuil-lès-Meaux', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Rural bord Marne' },
    { communeSlug: 'trilport', communeName: 'Trilport', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne + pavillons' },
    { communeSlug: 'nanteuil-les-meaux', communeName: 'Nanteuil-lès-Meaux', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Rural limitrophe' },
  ] },
  localStats: [{ label: 'Verrières Meaux depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '30 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Meaux sous-préfecture 77 cathédrale XIIe-XVIe ABF Brie fromage.' },
}
