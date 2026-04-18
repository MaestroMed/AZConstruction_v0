import type { PremiumCase } from './types'

export const portailsSeineEtMarne77BrieComteRobert: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'brie-comte-robert',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Brie-Comte-Robert 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Brie' },
  heroQuote: { text: 'Brie-Comte-Robert pavillon médiéval centre Château, portail battant ABF validé.', author: 'Famille de B.', context: 'Brie centre ABF' },
  cityGuide: { intro: `Brie-Comte-Robert (18 000 habitants, 77) ville médiévale — Château XIIIe + centre ABF + pavillons + copros. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Brie — Château médiéval ABF', body: `35% zone ABF centre médiéval, 55% pavillons individuels, 10% copros. Portail battant 3,5 m RAL foncé ABF dominant centre + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. ABF centre : 3 800-5 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Brie-Comte-Robert médiéval', location: 'Brie centre ABF', date: 'Juillet 2024', description: `Maison XVIIIe rénovée centre médiéval ABF. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 6 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '11 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Brie-Comte-Robert pavillon médiéval centre Château, portail battant ABF validé.', author: 'Famille de B.', context: 'Brie centre ABF' } }],
  localReviews: [
    { text: 'Brie-Comte-Robert pavillon médiéval centre Château, portail battant ABF validé.', author: 'Famille de B.', context: 'Brie centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim sérieux.', author: 'Famille L.', context: 'Brie résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Brie Château', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 sud Sénart.', rows: [
    { communeSlug: 'combs-la-ville', communeName: 'Combs-la-Ville', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Sénart pavillons' },
    { communeSlug: 'santeny', communeName: 'Santeny (94)', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Rural pavillons' },
    { communeSlug: 'servon', communeName: 'Servon', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons rural' },
  ] },
  localStats: [{ label: 'Portails Brie-Comte-Robert depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Brie-Comte-Robert 77 médiévale Château XIIIe ABF + pavillons.' },
}
