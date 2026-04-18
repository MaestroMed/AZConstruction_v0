import type { PremiumCase } from './types'

export const verrieresParis75Paris11e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-11e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 11e', caption: 'Verrière 10 carreaux — loft Oberkampf Paris 11e' },
  heroQuote: { text: 'Paris 11e Oberkampf loft ex-atelier 1900, verrière 10 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 11e Oberkampf' },
  cityGuide: { intro: `Paris 11e (145 000 habitants, 75) arrondissement Bastille-Oberkampf-Nation-République — anciens ateliers reconvertis lofts + haussmannien + nightlife. Clientèle créatifs 30-50 ans.`,
    sections: [
      { heading: 'Paris 11e — Oberkampf lofts créatifs', body: `50% copros haussmanniennes, 30% lofts reconvertis ateliers (passage Oberkampf, Roquette, Saint-Sabin), 20% immeubles récents. Verrière 8-12 carreaux visserie apparente dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux visserie apparente — loft Oberkampf Paris 11e', location: 'Oberkampf, Paris 11e', date: 'Juin 2024', description: `Loft 140 m² ex-atelier 1900 reconverti Oberkampf. Verrière 5 m × 2,8 m visserie noire apparente inox A2-70. Soudures MIG volontairement apparentes. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 600 €', duration: '8 sem.', surface: '14 m²' }, quote: { text: 'Paris 11e Oberkampf loft ex-atelier 1900, verrière 10 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 11e Oberkampf' } }],
  localReviews: [
    { text: 'Paris 11e Oberkampf loft ex-atelier 1900, verrière 10 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 11e Oberkampf', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante loft Bastille. Soudures MIG volontaires.', author: 'Hugo T.', context: 'Paris 11e Bastille', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Durable esthétique industriel.', author: 'Famille L.', context: 'Paris 11e Roquette', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris est.', rows: [
    { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Ménilmontant lofts' },
    { communeSlug: 'paris-12e', communeName: 'Paris 12e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Bercy mix' },
    { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Canal lofts' },
  ] },
  localStats: [{ label: 'Verrières Paris 11e depuis 2020', value: '~17' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part visserie apparente', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 11e Bastille-Oberkampf lofts créatifs nightlife.' },
}
