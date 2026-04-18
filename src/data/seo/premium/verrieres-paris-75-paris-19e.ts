import type { PremiumCase } from './types'

export const verrieresParis75Paris19e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-19e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 19e', caption: 'Verrière 8 carreaux — loft Bassin Villette Paris 19e' },
  heroQuote: { text: 'Paris 19e Bassin Villette loft reconverti atelier, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 19e Villette' },
  cityGuide: { intro: `Paris 19e (185 000 habitants, 75) arrondissement Villette-Buttes Chaumont + Canal + Bassin. Anciens ateliers reconvertis lofts + copros + BBR récents. Clientèle créatifs 30-50 ans.`,
    sections: [
      { heading: 'Paris 19e — Villette lofts créatifs', body: `45% lofts reconvertis (ex-ateliers Canal, Flandre, Ourcq), 35% copros haussmanniennes/années 60, 20% immeubles BBR récents. Verrière 8-12 carreaux visserie apparente authentique dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux visserie apparente — loft Paris 19e Bassin Villette', location: 'Bassin Villette, Paris 19e', date: 'Juin 2024', description: `Loft 180 m² ex-atelier 1905 reconverti Bassin Villette. Verrière 6 m × 2,80 m visserie noire apparente inox A2-70. Soudures MIG volontairement apparentes. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '14 200 €', duration: '8 sem.', surface: '16,8 m²' }, quote: { text: 'Paris 19e Bassin Villette loft reconverti atelier, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 19e Villette' } }],
  localReviews: [
    { text: 'Paris 19e Bassin Villette loft reconverti atelier, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio V.', context: 'Paris 19e Villette', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante loft Buttes Chaumont. Soudures MIG volontaires.', author: 'Hugo M.', context: 'Paris 19e Buttes Chaumont', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Durable esthétique.', author: 'Famille C.', context: 'Paris 19e Flandre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris nord-est.', rows: [
    { communeSlug: 'paris-18e', communeName: 'Paris 18e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Montmartre + lofts' },
    { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Ménilmontant lofts' },
    { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Canal République' },
  ] },
  localStats: [{ label: 'Verrières Paris 19e depuis 2020', value: '~16' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part visserie apparente', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 19e Villette-Canal lofts créatifs visserie apparente.' },
}
