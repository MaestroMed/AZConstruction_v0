import type { PremiumCase } from './types'

export const escaliersParis75Paris11e: PremiumCase = {
  productSlug: 'escaliers',
  deptSlug: 'paris-75',
  communeSlug: 'paris-11e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Escalier métal limon — Paris 11e', caption: 'Escalier limon latéral acier RAL — loft Paris 11e' },
  heroQuote: { text: 'Paris 11e loft Bastille reconverti atelier, escalier limon acier + marches chêne. Esprit industriel.', author: 'Hugo T.', context: 'Paris 11e Bastille' },
  cityGuide: { intro: `Paris 11e (145 000 habitants, 75) arrondissement mixte Bastille-Nation — anciens ateliers reconvertis en lofts + haussmannien + bobo + nightlife. Clientèle créatifs 30-50 ans.`,
    sections: [
      { heading: 'Paris 11e — Bastille lofts créatifs', body: `50% copros haussmanniennes, 30% lofts reconvertis (ex-ateliers passage Ménilmontant, Roquette), 20% immeubles récents. Escalier limon latéral acier + marches chêne ou métal dominant.` },
      { heading: 'Tarifs', body: `Escalier limon acier + chêne 14 marches : 8 500-12 500 €. Escalier hélicoïdal acier : 7 000-10 500 €.` },
    ] },
  caseStudies: [{ title: 'Escalier limon acier + chêne — loft Paris 11e Bastille', location: 'Bastille, Paris 11e', date: 'Juin 2024', description: `Loft 140 m² ex-atelier 1900 reconverti Bastille. Escalier limon latéral acier RAL 7016 + marches chêne massif + garde-corps câbles inox. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 800 €', duration: '8 sem.', surface: '14 marches' }, quote: { text: 'Paris 11e loft Bastille reconverti atelier, escalier limon acier + marches chêne. Esprit industriel.', author: 'Hugo T.', context: 'Paris 11e Bastille' } }],
  localReviews: [
    { text: 'Paris 11e loft Bastille reconverti atelier, escalier limon acier + marches chêne. Esprit industriel.', author: 'Hugo T.', context: 'Paris 11e Bastille', rating: 5, date: 'Juin 2024' },
    { text: 'Hélicoïdal acier duplex Roquette. Gain place magistral.', author: 'Famille L.', context: 'Paris 11e Roquette', rating: 5, date: 'Mars 2024' },
    { text: 'Soudures MIG apparentes volontaires. Authentique industriel.', author: 'Studio M.', context: 'Paris 11e Oberkampf', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Escaliers arrondissements voisins Paris est.', rows: [
    { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '8 000-12 000 €', durationAvg: '7-10 sem.', note: 'Ménilmontant lofts' },
    { communeSlug: 'paris-12e', communeName: 'Paris 12e', priceAvg: '8 500-12 500 €', durationAvg: '7-10 sem.', note: 'Bercy Nation mixte' },
    { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '8 500-12 500 €', durationAvg: '7-10 sem.', note: 'République Canal' },
  ] },
  localStats: [{ label: 'Escaliers Paris 11e depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part lofts reconvertis', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 11e Bastille-Oberkampf lofts créatifs.' },
}
