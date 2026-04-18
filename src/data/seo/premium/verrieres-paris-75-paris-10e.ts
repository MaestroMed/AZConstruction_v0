import type { PremiumCase } from './types'

export const verrieresParis75Paris10e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-10e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 10e', caption: 'Verrière 8 carreaux — loft Canal Paris 10e' },
  heroQuote: { text: 'Paris 10e Canal Saint-Martin loft reconverti, verrière 8 carreaux visserie apparente.', author: 'Studio M.', context: 'Paris 10e Canal' },
  cityGuide: { intro: `Paris 10e (92 000 habitants, 75) arrondissement République-Canal Saint-Martin-Gares Nord/Est. Anciens ateliers reconvertis lofts + haussmannien + immeubles années 60-70. Clientèle créatifs 30-45 ans.`,
    sections: [
      { heading: 'Paris 10e — Canal République lofts', body: `45% copros haussmanniennes, 35% lofts reconvertis ateliers (Canal, Faubourg-Saint-Denis, Chabrol), 20% immeubles années 60-70. Verrière 8-12 carreaux visserie apparente dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux visserie apparente — loft Canal Paris 10e', location: 'Canal Saint-Martin, Paris 10e', date: 'Juin 2024', description: `Loft 160 m² ex-atelier 1910 reconverti Canal Saint-Martin. Verrière 5 m × 2,80 m visserie noire apparente inox A2-70. Soudures MIG volontairement apparentes. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 800 €', duration: '8 sem.', surface: '14 m²' }, quote: { text: 'Paris 10e Canal Saint-Martin loft reconverti, verrière 8 carreaux visserie apparente.', author: 'Studio M.', context: 'Paris 10e Canal' } }],
  localReviews: [
    { text: 'Paris 10e Canal Saint-Martin loft reconverti, verrière 8 carreaux visserie apparente.', author: 'Studio M.', context: 'Paris 10e Canal', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante loft Faubourg-Saint-Denis. Soudures MIG volontaires.', author: 'Hugo V.', context: 'Paris 10e Faubourg', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Durable esthétique industriel.', author: 'Famille L.', context: 'Paris 10e Gare du Nord', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris nord-est.', rows: [
    { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Bastille lofts' },
    { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Villette lofts' },
    { communeSlug: 'paris-3e', communeName: 'Paris 3e', priceAvg: '1 400-2 000 €/m² ABF', durationAvg: '14-18 sem.', note: 'Marais haut' },
  ] },
  localStats: [{ label: 'Verrières Paris 10e depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part lofts reconvertis', value: '50 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 10e Canal Saint-Martin République lofts créatifs.' },
}
