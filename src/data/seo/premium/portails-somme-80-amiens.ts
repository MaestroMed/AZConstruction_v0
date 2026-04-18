import type { PremiumCase } from './types'

export const portailsSomme80Amiens: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'somme-80',
  communeSlug: 'amiens',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Amiens 80', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Amiens' },
  heroQuote: { text: 'Amiens pavillon bourgeois bord Somme cathédrale ABF, portail battant validé. Cohérence.', author: 'Famille de A.', context: 'Amiens centre ABF' },
  cityGuide: { intro: `Amiens (135 000 habitants, 80) préfecture Somme — cathédrale Notre-Dame UNESCO (plus vaste gothique France) + Hortillonnages + pavillons + université Jules-Verne. Zone ABF cathédrale + centre historique.`,
    sections: [
      { heading: 'Amiens — cathédrale UNESCO ABF', body: `25% zone ABF cathédrale UNESCO + centre historique, 60% pavillons individuels + cheminots, 15% copros + hortillonnages. Portail battant ABF foncé + coulissant 4 m extérieur dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 000-4 400 €. ABF cathédrale : 3 500-4 900 € (dossier inclus). Coulissant 4 m : 4 000-5 600 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Amiens bord cathédrale', location: 'Centre Amiens ABF', date: 'Juillet 2024', description: `Pavillon bourgeois 1900 rénové zone ABF cathédrale UNESCO. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 6 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 500 €', duration: '11 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Amiens pavillon bourgeois bord Somme cathédrale ABF, portail battant validé. Cohérence.', author: 'Famille de A.', context: 'Amiens centre ABF' } }],
  localReviews: [
    { text: 'Amiens pavillon bourgeois bord Somme cathédrale ABF, portail battant validé. Cohérence.', author: 'Famille de A.', context: 'Amiens centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur Henriville. Karim sérieux.', author: 'Famille L.', context: 'Amiens Henriville', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale UNESCO géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Amiens hortillonnages', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 80.', rows: [
    { communeSlug: 'abbeville', communeName: 'Abbeville', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture' },
    { communeSlug: 'albert', communeName: 'Albert', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Mémorielle' },
    { communeSlug: 'longueau', communeName: 'Longueau', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Limitrophe Amiens' },
  ] },
  localStats: [{ label: 'Portails Amiens depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Amiens préfecture 80 cathédrale UNESCO plus vaste gothique France hortillonnages.' },
}
