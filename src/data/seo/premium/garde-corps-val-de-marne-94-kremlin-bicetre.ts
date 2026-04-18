import type { PremiumCase } from './types'

export const gardeCorpsValDeMarne94KremlinBicetre: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'kremlin-bicetre',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier + bois — Le Kremlin-Bicêtre 94', caption: 'Garde-corps acier + bois noyer — pavillon Kremlin-Bicêtre' },
  heroQuote: { text: 'Le Kremlin-Bicêtre pavillon limitrophe Paris 13e, garde-corps acier + bois noyer. Cohérence.', author: 'Famille K.', context: 'Kremlin-Bicêtre centre' },
  cityGuide: { intro: `Le Kremlin-Bicêtre (26 000 habitants, 94 nord limitrophe Paris 13e) ville mixte pavillons + copros + hôpital Bicêtre. Clientèle CSP++ familiale. Demande garde-corps stable.`,
    sections: [
      { heading: 'Kremlin-Bicêtre — limitrophe Paris 13e', body: `55% pavillons individuels, 35% copros centre, 10% hôpital/commerces. Garde-corps acier + bois noyer ou laiton patiné dominant.` },
      { heading: 'Tarifs', body: `Acier RAL + bois noyer : 420-580 €/ml. Acier + laiton patiné : 560-780 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier + bois noyer 10 ml — pavillon Kremlin-Bicêtre', location: 'Kremlin-Bicêtre centre', date: 'Juin 2024', description: `Pavillon 1935 rénové limitrophe périphérique Paris. Garde-corps acier thermolaqué RAL 7016 + main courante bois noyer massif huilé. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 000 €', duration: '7 sem.', surface: '10 ml' }, quote: { text: 'Le Kremlin-Bicêtre pavillon limitrophe Paris 13e, garde-corps acier + bois noyer. Cohérence.', author: 'Famille K.', context: 'Kremlin-Bicêtre centre' } }],
  localReviews: [
    { text: 'Le Kremlin-Bicêtre pavillon limitrophe Paris 13e, garde-corps acier + bois noyer. Cohérence.', author: 'Famille K.', context: 'Kremlin-Bicêtre centre', rating: 5, date: 'Juin 2024' },
    { text: 'Acier + laiton patiné copro centre. Signature haute couture.', author: 'Famille L.', context: 'Kremlin-Bicêtre résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Marc compagnon vrai métier. Finitions propres.', author: 'Famille R.', context: 'Kremlin-Bicêtre Bicêtre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 94 nord limitrophes Paris.', rows: [
    { communeSlug: 'ivry-sur-seine', communeName: 'Ivry-sur-Seine', priceAvg: '400-560 €/ml', durationAvg: '8-12 sem.', note: 'ANRU + lofts' },
    { communeSlug: 'gentilly', communeName: 'Gentilly', priceAvg: '420-580 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons' },
    { communeSlug: 'villejuif', communeName: 'Villejuif', priceAvg: '420-580 €/ml', durationAvg: '8-12 sem.', note: 'Cancer Campus' },
  ] },
  localStats: [{ label: 'Garde-corps Kremlin-Bicêtre depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Kremlin-Bicêtre limitrophe Paris 13e hôpital Bicêtre pavillons.' },
}
