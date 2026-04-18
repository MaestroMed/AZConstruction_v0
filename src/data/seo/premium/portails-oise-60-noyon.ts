import type { PremiumCase } from './types'

export const portailsOise60Noyon: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'noyon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Noyon 60', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Noyon' },
  heroQuote: { text: 'Noyon pavillon centre historique cathédrale, portail battant ABF validé.', author: 'Famille N.', context: 'Noyon centre ABF' },
  cityGuide: { intro: `Noyon (13 000 habitants, 60 est) ville historique — cathédrale Notre-Dame XIIe-XIIIe + maison natale Calvin + pavillons + copros. Zone ABF centre historique.`,
    sections: [
      { heading: 'Noyon — cathédrale XIIe ABF', body: `30% zone ABF centre médiéval, 60% pavillons individuels, 10% copros. Portail battant 3,5 m RAL foncé ABF dominant + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 000-4 400 €. ABF centre : 3 500-4 900 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Noyon centre cathédrale', location: 'Noyon centre ABF', date: 'Juillet 2024', description: `Maison XIXe rénovée zone ABF cathédrale. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 5 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 300 €', duration: '10 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Noyon pavillon centre historique cathédrale, portail battant ABF validé.', author: 'Famille N.', context: 'Noyon centre ABF' } }],
  localReviews: [
    { text: 'Noyon pavillon centre historique cathédrale, portail battant ABF validé.', author: 'Famille N.', context: 'Noyon centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim sérieux.', author: 'Famille L.', context: 'Noyon résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Noyon Calvin', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60 est.', rows: [
    { communeSlug: 'compiegne', communeName: 'Compiègne', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Château impérial' },
    { communeSlug: 'guiscard', communeName: 'Guiscard', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Rural' },
    { communeSlug: 'ribecourt-dreslincourt', communeName: 'Ribécourt-Dreslincourt', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Noyon depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '30 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Noyon 60 est cathédrale XIIe-XIIIe + maison Calvin ABF.' },
}
