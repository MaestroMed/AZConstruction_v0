import type { PremiumCase } from './types'

export const verrieresOise60Beauvais: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'oise-60',
  communeSlug: 'beauvais',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Beauvais 60', caption: 'Verrière 6 carreaux ABF — maison cathédrale Beauvais' },
  heroQuote: { text: 'Beauvais maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence gothique.', author: 'Famille B.', context: 'Beauvais cathédrale ABF' },
  cityGuide: { intro: `Beauvais (55 000 habitants, 60) préfecture Oise — cathédrale gothique Saint-Pierre (plus haute voûte gothique du monde) + MUDO musée + pavillons + copros + aéroport. Zone ABF centre historique.`,
    sections: [
      { heading: 'Beauvais — cathédrale gothique ABF', body: `30% zone ABF centre médiéval (cathédrale, tapisserie), 55% pavillons, 15% copros. Verrière 6-8 carreaux profil noir mat ABF validé centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 700-6 400 €. ABF centre : 5 300-7 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison cathédrale Beauvais', location: 'Centre Beauvais ABF', date: 'Juillet 2024', description: `Maison XVIIIe rénovée zone ABF cathédrale. Verrière 3,5 m × 2,6 m profils 40 mm noir mat + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '11 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Beauvais maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence gothique.', author: 'Famille B.', context: 'Beauvais cathédrale ABF' } }],
  localReviews: [
    { text: 'Beauvais maison historique cathédrale ABF, verrière 6 carreaux validé. Cohérence gothique.', author: 'Famille B.', context: 'Beauvais cathédrale ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur. Soudures MIG invisibles.', author: 'Famille L.', context: 'Beauvais résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Beauvais MUDO', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 60 ouest.', rows: [
    { communeSlug: 'auneuil', communeName: 'Auneuil', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural' },
    { communeSlug: 'bresles', communeName: 'Bresles', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Petite ville' },
    { communeSlug: 'compiegne', communeName: 'Compiègne', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture ABF' },
  ] },
  localStats: [{ label: 'Verrières Beauvais depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '30 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Beauvais préfecture 60 cathédrale gothique plus haute voûte monde ABF.' },
}
