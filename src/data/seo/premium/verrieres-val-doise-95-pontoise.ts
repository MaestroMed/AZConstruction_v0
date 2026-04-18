import type { PremiumCase } from './types'

export const verrieresValDoise95Pontoise: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'pontoise',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Pontoise 95', caption: 'Verrière 6 carreaux ABF — maison historique Pontoise' },
  heroQuote: { text: 'Pontoise maison historique bord Oise centre ABF, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille P.', context: 'Pontoise centre ABF' },
  cityGuide: { intro: `Pontoise (31 000 habitants, 95) sous-préfecture Val-d'Oise — ville historique bord Oise (Pissarro impressionniste) + centre médiéval ABF + pavillons + copros.`,
    sections: [
      { heading: 'Pontoise — Cézanne-Pissarro ABF centre', body: `45% zone ABF centre historique bord Oise, 40% pavillons, 15% copros. Verrière 6-8 carreaux profil noir mat ABF validé dominante centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 900-6 700 €. ABF centre : 5 500-7 500 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison historique Pontoise', location: 'Centre Pontoise', date: 'Juillet 2024', description: `Maison XVIIIe rénovée centre historique bord Oise (proche Musée Pissarro). Verrière 3,5 m × 2,6 m profils 40 mm noir mat + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 900 €', duration: '11 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Pontoise maison historique bord Oise centre ABF, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille P.', context: 'Pontoise centre ABF' } }],
  localReviews: [
    { text: 'Pontoise maison historique bord Oise centre ABF, verrière 6 carreaux. Cohérence XIXe.', author: 'Famille P.', context: 'Pontoise centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur. Soudures MIG invisibles.', author: 'Famille L.', context: 'Pontoise résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Pissarro géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Pontoise coteaux', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 ouest.', rows: [
    { communeSlug: 'cergy', communeName: 'Cergy', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture 95' },
    { communeSlug: 'saint-ouen-l-aumone', communeName: 'Saint-Ouen-l\'Aumône', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Limitrophe Cergy' },
    { communeSlug: 'osny', communeName: 'Osny', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Pontoise depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '45 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Pontoise sous-préfecture 95 centre ABF Pissarro bord Oise patrimoine.' },
}
