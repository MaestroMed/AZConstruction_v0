import type { PremiumCase } from './types'

export const portailsEureEtLoir28Chartres: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'chartres',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Chartres 28', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Chartres' },
  heroQuote: { text: 'Chartres pavillon bourgeois bord cathédrale UNESCO, portail battant ABF validé.', author: 'Famille de C.', context: 'Chartres cathédrale ABF' },
  cityGuide: { intro: `Chartres (39 000 habitants, 28) préfecture Eure-et-Loir — cathédrale Notre-Dame UNESCO XIIe-XIIIe (vitraux bleus, labyrinthe) + pavillons bourgeois + copros + industriel. Zone ABF cathédrale + centre historique.`,
    sections: [
      { heading: 'Chartres — cathédrale UNESCO ABF', body: `35% zone ABF cathédrale UNESCO + centre historique (vieux Chartres bord Eure), 55% pavillons individuels, 10% copros. Portail battant ABF foncé dominant + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 000-4 400 €. ABF cathédrale : 3 500-4 900 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Chartres bord cathédrale UNESCO', location: 'Centre Chartres ABF', date: 'Juillet 2024', description: `Pavillon bourgeois 1905 rénové zone ABF cathédrale UNESCO (vieux Chartres). Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 6 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 500 €', duration: '11 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Chartres pavillon bourgeois bord cathédrale UNESCO, portail battant ABF validé.', author: 'Famille de C.', context: 'Chartres cathédrale ABF' } }],
  localReviews: [
    { text: 'Chartres pavillon bourgeois bord cathédrale UNESCO, portail battant ABF validé.', author: 'Famille de C.', context: 'Chartres cathédrale ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur Rechèvres. Karim sérieux.', author: 'Famille L.', context: 'Chartres Rechèvres', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale UNESCO géré par Sophie. 100 % acceptation 1er envoi.', author: 'Famille M.', context: 'Chartres Beauce', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 28.', rows: [
    { communeSlug: 'dreux', communeName: 'Dreux', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture' },
    { communeSlug: 'luce', communeName: 'Lucé', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Limitrophe Chartres' },
    { communeSlug: 'mainvilliers', communeName: 'Mainvilliers', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Pavillons limitrophe' },
  ] },
  localStats: [{ label: 'Portails Chartres depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Chartres préfecture 28 cathédrale UNESCO vitraux bleus ABF historique.' },
}
