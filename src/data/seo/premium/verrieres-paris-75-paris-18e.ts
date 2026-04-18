import type { PremiumCase } from './types'

export const verrieresParis75Paris18e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-18e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 18e', caption: 'Verrière 8 carreaux ABF — maison Montmartre Paris 18e' },
  heroQuote: { text: 'Paris 18e Montmartre maison secteur sauvegardé, verrière 8 carreaux ABF validé.', author: 'Famille M.', context: 'Paris 18e Montmartre' },
  cityGuide: { intro: `Paris 18e (195 000 habitants, 75) arrondissement Montmartre-Sacré-Cœur-Barbès-Goutte d'Or. Zone ABF Montmartre (secteur sauvegardé) + mix très contrasté. Maisons anciennes Butte + haussmannien + immeubles années 60-70.`,
    sections: [
      { heading: 'Paris 18e — Montmartre secteur sauvegardé', body: `35% zone ABF Montmartre (maisons XVIIIe-XIXe), 40% copros haussmanniennes, 25% immeubles années 60-70. Verrière 8 carreaux profil noir mat ABF validé + lofts reconvertis côté Abbesses.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. ABF Montmartre : 5 800-8 000 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux ABF — maison Montmartre Paris 18e', location: 'Montmartre, Paris 18e', date: 'Juillet 2024', description: `Maison XIXe rénovée secteur sauvegardé Montmartre. Verrière 4 m × 2,6 m profils 40 mm noir mat + dossier ABF 8 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '12 sem. (ABF)', surface: '10,4 m²' }, quote: { text: 'Paris 18e Montmartre maison secteur sauvegardé, verrière 8 carreaux ABF validé.', author: 'Famille M.', context: 'Paris 18e Montmartre' } }],
  localReviews: [
    { text: 'Paris 18e Montmartre maison secteur sauvegardé, verrière 8 carreaux ABF validé.', author: 'Famille M.', context: 'Paris 18e Montmartre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante loft Abbesses. Soudures MIG volontaires.', author: 'Studio L.', context: 'Paris 18e Abbesses', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Sacré-Cœur géré par Sophie. 100 % acceptation.', author: 'Famille V.', context: 'Paris 18e Sacré-Cœur', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris nord.', rows: [
    { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '1 400-2 000 €/m²', durationAvg: '8-12 sem.', note: 'Batignolles + Monceau' },
    { communeSlug: 'paris-9e', communeName: 'Paris 9e', priceAvg: '1 400-2 000 €/m²', durationAvg: '8-12 sem.', note: 'Pigalle-Opéra' },
    { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Villette lofts' },
  ] },
  localStats: [{ label: 'Verrières Paris 18e depuis 2020', value: '~15' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part zone ABF Montmartre', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 18e Montmartre secteur sauvegardé + lofts Abbesses.' },
}
