import type { PremiumCase } from './types'

export const verrieresParis75Paris14e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-14e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 14e', caption: 'Verrière 8 carreaux — appart Denfert Paris 14e' },
  heroQuote: { text: 'Paris 14e Denfert appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de M.', context: 'Paris 14e Denfert' },
  cityGuide: { intro: `Paris 14e (140 000 habitants, 75) arrondissement Montparnasse + Denfert-Rochereau + Alésia. Copros haussmanniennes + immeubles années 30 + quelques pavillons Plaisance. CSP+++.`,
    sections: [
      { heading: 'Paris 14e — Denfert-Montparnasse', body: `75% copros haussmanniennes, 20% immeubles années 30 Art Déco, 5% pavillons Plaisance/Didot. Verrière 6-10 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 800-12 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — appart Paris 14e Denfert', location: 'Denfert, Paris 14e', date: 'Juin 2024', description: `Appart haussmannien 110 m² 1880 Denfert. Verrière 4,5 m × 2,80 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 900 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Paris 14e Denfert appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de M.', context: 'Paris 14e Denfert' } }],
  localReviews: [
    { text: 'Paris 14e Denfert appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de M.', context: 'Paris 14e Denfert', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² loft reconverti Plaisance. Soudures TIG invisibles.', author: 'Hugo V.', context: 'Paris 14e Plaisance', rating: 5, date: 'Mars 2024' },
    { text: 'Marc compagnon vrai métier. Qualité haute couture.', author: 'Famille L.', context: 'Paris 14e Alésia', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris sud.', rows: [
    { communeSlug: 'paris-15e', communeName: 'Paris 15e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Vaugirard mix' },
    { communeSlug: 'paris-6e', communeName: 'Paris 6e', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '10-14 sem.', note: 'Saint-Germain prestige' },
    { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Rive Gauche mix' },
  ] },
  localStats: [{ label: 'Verrières Paris 14e depuis 2020', value: '~15' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part haussmannien', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 14e Denfert-Montparnasse haussmannien + Art Déco années 30.' },
}
