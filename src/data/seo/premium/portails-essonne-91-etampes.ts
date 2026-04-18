import type { PremiumCase } from './types'

export const portailsEssonne91Etampes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'etampes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Étampes 91', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Étampes' },
  heroQuote: { text: 'Étampes pavillon centre historique médiéval, portail battant ABF validé. Cohérence.', author: 'Famille E.', context: 'Étampes centre ABF' },
  cityGuide: { intro: `Étampes (26 000 habitants, 91 sud) sous-préfecture Essonne — ville médiévale Notre-Dame + Tour Guinette XIIe + pavillons + copros. Zone ABF centre historique.`,
    sections: [
      { heading: 'Étampes — médiévale ABF Notre-Dame', body: `50% pavillons individuels, 30% copros centre, 20% zone ABF centre médiéval. Portail battant 3,5 m RAL foncé ABF + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. ABF centre : 3 700-5 100 € (dossier inclus). Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Étampes centre historique', location: 'Étampes centre ABF', date: 'Juillet 2024', description: `Pavillon XIXe rénové centre médiéval ABF. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 5 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '10 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Étampes pavillon centre historique médiéval, portail battant ABF validé. Cohérence.', author: 'Famille E.', context: 'Étampes centre ABF' } }],
  localReviews: [
    { text: 'Étampes pavillon centre historique médiéval, portail battant ABF validé. Cohérence.', author: 'Famille E.', context: 'Étampes centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim sérieux.', author: 'Famille L.', context: 'Étampes résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Tour Guinette géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Étampes Notre-Dame', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 sud.', rows: [
    { communeSlug: 'mespuits', communeName: 'Mespuits', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Rural' },
    { communeSlug: 'dourdan', communeName: 'Dourdan', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Château médiéval' },
    { communeSlug: 'mereville', communeName: 'Méréville', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Rural + parc' },
  ] },
  localStats: [{ label: 'Portails Étampes depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part zone ABF', value: '20 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Étampes 91 sous-préfecture médiévale ABF Notre-Dame Tour Guinette XIIe.' },
}
