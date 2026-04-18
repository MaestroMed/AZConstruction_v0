import type { PremiumCase } from './types'

export const verrieresEureEtLoir28Chateaudun: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'chateaudun',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Châteaudun 28', caption: 'Verrière 6 carreaux — maison Châteaudun' },
  heroQuote: { text: 'Châteaudun maison historique château, verrière 6 carreaux ABF validé. Cohérence XVe.', author: 'Famille C.', context: 'Châteaudun centre' },
  cityGuide: { intro: `Châteaudun (13 000 habitants, 28 sud) sous-préfecture Eure-et-Loir — ville historique château royal XIIe-XVe bord Loir. Centre en zone ABF. Pavillons + maisons anciennes.`,
    sections: [
      { heading: 'Châteaudun — château royal ABF', body: `40% zone ABF château, 60% extérieur. Verrière 6-8 carreaux profil noir mat ABF validé centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 500-6 200 €. ABF centre : 5 200-7 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison Châteaudun château', location: 'Châteaudun centre', date: 'Juillet 2024', description: `Maison XVIIe rénovée zone château royal. Verrière 3,5 m × 2,6 m profils 40 mm + dossier ABF 5 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '10 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Châteaudun maison historique château, verrière 6 carreaux ABF validé. Cohérence XVe.', author: 'Famille C.', context: 'Châteaudun centre' } }],
  localReviews: [
    { text: 'Châteaudun maison historique château, verrière 6 carreaux ABF validé. Cohérence XVe.', author: 'Famille C.', context: 'Châteaudun centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur.', author: 'Famille L.', context: 'Châteaudun résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF château royal géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Châteaudun bord Loir', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 28 sud.', rows: [
    { communeSlug: 'cloyes-les-trois-rivieres', communeName: 'Cloyes-les-Trois-Rivières', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Rural bord Loir' },
    { communeSlug: 'bonneval', communeName: 'Bonneval', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Petite ville' },
    { communeSlug: 'chartres', communeName: 'Chartres', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture 28' },
  ] },
  localStats: [{ label: 'Verrières Châteaudun depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Châteaudun château royal XIIe-XVe bord Loir ABF sous-préfecture 28.' },
}
