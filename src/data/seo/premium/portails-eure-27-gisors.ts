import type { PremiumCase } from './types'

export const portailsEure27Gisors: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-27',
  communeSlug: 'gisors',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Gisors 27', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Gisors' },
  heroQuote: { text: 'Gisors pavillon château templier, portail battant ABF validé. Cohérence historique.', author: 'Famille G.', context: 'Gisors centre' },
  cityGuide: { intro: `Gisors (12 000 habitants, 27 est) sous-préfecture Eure — ville historique château templier XIIe + centre médiéval. Zone ABF château. Pavillons + copros.`,
    sections: [
      { heading: 'Gisors — château templier ABF', body: `40% zone ABF château, 60% extérieur. Portail battant 3,5 m RAL foncé ABF validé centre.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. ABF centre : 3 400-4 800 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Gisors château', location: 'Gisors centre', date: 'Juillet 2024', description: `Pavillon 1905 rénové zone château templier. Portail battant 3,5 m RAL 7016 + Came BX + dossier ABF 5 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '9 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Gisors pavillon château templier, portail battant ABF validé. Cohérence historique.', author: 'Famille G.', context: 'Gisors centre' } }],
  localReviews: [
    { text: 'Gisors pavillon château templier, portail battant ABF validé. Cohérence historique.', author: 'Famille G.', context: 'Gisors centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim solide.', author: 'Famille L.', context: 'Gisors résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF château templier géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Gisors Vexin', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 27 est Vexin.', rows: [
    { communeSlug: 'etrepagny', communeName: 'Étrépagny', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Rural' },
    { communeSlug: 'dangu', communeName: 'Dangu', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Rural bord Epte' },
    { communeSlug: 'fleury', communeName: 'Fleury', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Rural' },
  ] },
  localStats: [{ label: 'Portails Gisors depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Gisors château templier XIIe ABF Vexin normand.' },
}
