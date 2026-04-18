import type { PremiumCase } from './types'

export const verrieresEure27PontAudemer: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'eure-27',
  communeSlug: 'pont-audemer',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Pont-Audemer 27', caption: 'Verrière 6 carreaux — maison ancienne Pont-Audemer' },
  heroQuote: { text: 'Pont-Audemer maison colombages XVIIe, verrière 6 carreaux ABF validé.', author: 'Famille P.', context: 'Pont-Audemer centre' },
  cityGuide: { intro: `Pont-Audemer (9 000 habitants, 27 ouest) "Venise Normande" centre historique colombages XVIe-XVIIe + canaux. Zone ABF centre. Pavillons extérieurs.`,
    sections: [
      { heading: 'Pont-Audemer — Venise Normande ABF', body: `45% zone ABF centre colombages, 55% extérieur. Verrière 6-8 carreaux profil noir mat ABF validé centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 500-6 200 €. ABF centre : 5 200-7 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison colombages Pont-Audemer', location: 'Centre Pont-Audemer', date: 'Juillet 2024', description: `Maison colombages XVIIe rénovée ABF. Verrière 3,5 m × 2,6 m profils 40 mm + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '11 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Pont-Audemer maison colombages XVIIe, verrière 6 carreaux ABF validé.', author: 'Famille P.', context: 'Pont-Audemer centre' } }],
  localReviews: [
    { text: 'Pont-Audemer maison colombages XVIIe, verrière 6 carreaux ABF validé.', author: 'Famille P.', context: 'Pont-Audemer centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur. Pose propre.', author: 'Famille L.', context: 'Pont-Audemer résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Venise Normande géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Pont-Audemer canaux', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 27 ouest.', rows: [
    { communeSlug: 'bernay', communeName: 'Bernay', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Patrimoine bois' },
    { communeSlug: 'beuzeville', communeName: 'Beuzeville', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural' },
    { communeSlug: 'cormeilles', communeName: 'Cormeilles', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Petite ville' },
  ] },
  localStats: [{ label: 'Verrières Pont-Audemer depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '45 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Pont-Audemer Venise Normande colombages XVIIe ABF.' },
}
