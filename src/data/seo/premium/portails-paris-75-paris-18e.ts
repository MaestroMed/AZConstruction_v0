import type { PremiumCase } from './types'

export const portailsParis75Paris18e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-18e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail entrée — Paris 18e', caption: 'Portail restauré ABF — maison Montmartre Paris 18e' },
  heroQuote: { text: 'Paris 18e Montmartre maison secteur sauvegardé, portail restauré ABF validé. Cohérence XIXe.', author: 'Famille M.', context: 'Paris 18e Montmartre' },
  cityGuide: { intro: `Paris 18e (195 000 habitants, 75) arrondissement Montmartre-Abbesses-Barbès. Zone ABF Montmartre secteur sauvegardé + mix contrasté. Maisons anciennes Butte + copros haussmanniennes + immeubles années 60-70.`,
    sections: [
      { heading: 'Paris 18e — Montmartre secteur sauvegardé', body: `40% zone ABF Montmartre maisons XIXe, 35% copros haussmanniennes, 25% immeubles années 60-70. Portail restauration ABF Montmartre + portails cochères haussmanniens dominants.` },
      { heading: 'Tarifs', body: `Portail cochère restauration : 7 000-12 000 €. ABF Montmartre : 7 500-13 000 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail restauré ABF — maison Montmartre Paris 18e', location: 'Montmartre, Paris 18e', date: 'Juillet 2024', description: `Maison XIXe rénovée secteur sauvegardé Montmartre. Portail bois massif restauré + pivots inox A2-70 + dossier ABF 8 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 500 €', duration: '14 sem. (ABF)', surface: '2,8 m × 3,5 m' }, quote: { text: 'Paris 18e Montmartre maison secteur sauvegardé, portail restauré ABF validé. Cohérence XIXe.', author: 'Famille M.', context: 'Paris 18e Montmartre' } }],
  localReviews: [
    { text: 'Paris 18e Montmartre maison secteur sauvegardé, portail restauré ABF validé. Cohérence XIXe.', author: 'Famille M.', context: 'Paris 18e Montmartre', rating: 5, date: 'Juillet 2024' },
    { text: 'Portail cochère restauré copro haussmannienne Abbesses. Karim solide.', author: 'Syndic copro', context: 'Paris 18e Abbesses', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Sacré-Cœur géré par Sophie. 100 % acceptation.', author: 'Famille V.', context: 'Paris 18e Sacré-Cœur', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails arrondissements voisins Paris nord.', rows: [
    { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '7 000-12 000 €', durationAvg: '8-12 sem.', note: 'Batignolles cochères' },
    { communeSlug: 'paris-9e', communeName: 'Paris 9e', priceAvg: '7 500-13 000 €', durationAvg: '10-14 sem.', note: 'Opéra ABF' },
    { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '6 500-11 000 €', durationAvg: '8-12 sem.', note: 'Villette mix' },
  ] },
  localStats: [{ label: 'Portails Paris 18e depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF Montmartre', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Paris 18e Montmartre secteur sauvegardé + cochères haussmanniennes.' },
}
