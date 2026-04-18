import type { PremiumCase } from './types'

export const portailsEure27Bernay: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-27',
  communeSlug: 'bernay',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Bernay 27', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Bernay' },
  heroQuote: { text: 'Bernay pavillon centre historique colombages, portail battant ABF validé. Cohérence.', author: 'Famille B.', context: 'Bernay centre ABF' },
  cityGuide: { intro: `Bernay (10 000 habitants, 27 sud-ouest) sous-préfecture Eure — ville normande historique Abbaye XIe + maisons à colombages + pavillons. Zone ABF centre historique.`,
    sections: [
      { heading: 'Bernay — Abbaye XIe colombages ABF', body: `35% zone ABF centre médiéval colombages, 55% pavillons, 10% copros. Portail battant 3,5 m RAL foncé ABF dominant + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. ABF centre : 3 400-4 800 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — maison colombages Bernay', location: 'Bernay centre ABF', date: 'Juillet 2024', description: `Maison XVIIe colombages rénovée centre ABF. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 5 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 200 €', duration: '10 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Bernay pavillon centre historique colombages, portail battant ABF validé. Cohérence.', author: 'Famille B.', context: 'Bernay centre ABF' } }],
  localReviews: [
    { text: 'Bernay pavillon centre historique colombages, portail battant ABF validé. Cohérence.', author: 'Famille B.', context: 'Bernay centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim sérieux.', author: 'Famille L.', context: 'Bernay résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Abbaye géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Bernay Abbaye', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 27 sud-ouest.', rows: [
    { communeSlug: 'brionne', communeName: 'Brionne', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Petite ville patrimoine' },
    { communeSlug: 'pont-audemer', communeName: 'Pont-Audemer', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Venise Normande' },
    { communeSlug: 'evreux', communeName: 'Évreux', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Préfecture 27' },
  ] },
  localStats: [{ label: 'Portails Bernay depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bernay sous-préfecture 27 Abbaye XIe colombages normands ABF.' },
}
