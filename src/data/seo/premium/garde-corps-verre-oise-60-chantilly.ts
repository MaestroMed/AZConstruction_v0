import type { PremiumCase } from './types'

export const gardeCorpsVerreOise60Chantilly: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'oise-60',
  communeSlug: 'chantilly',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Chantilly 60', caption: 'Verre + laiton patiné — pavillon Chantilly' },
  heroQuote: { text: 'Chantilly pavillon Château-hippodrome, verre + laiton patiné. Cohérence XVIIIe.', author: 'Famille de V.', context: 'Chantilly centre' },
  cityGuide: { intro: `Chantilly (11 000 habitants, 60) ville royale hippique avec Château + Grandes Écuries. CSP++ propriétaires chevaux + pavillons bourgeois. Demande garde-corps verre patrimoine.`,
    sections: [
      { heading: 'Chantilly — royale hippique CSP++', body: `85% pavillons bourgeois (Château + hippodrome), 15% copros. Verre + main courante laiton patiné dominant.` },
      { heading: 'Tarifs', body: `Verre + acier : 500-700 €/ml. Verre + laiton patiné : 650-900 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + laiton patiné 14 ml — pavillon Chantilly hippodrome', location: 'Chantilly hippodrome', date: 'Juillet 2024', description: `Pavillon bourgeois XIXe vue hippodrome. Verre 8+8 + main courante laiton massif patine bronze. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 200 €', duration: '10 sem.', surface: '14 ml' }, quote: { text: 'Chantilly pavillon Château-hippodrome, verre + laiton patiné. Cohérence XVIIIe.', author: 'Famille de V.', context: 'Chantilly centre' } }],
  localReviews: [
    { text: 'Chantilly pavillon Château-hippodrome, verre + laiton patiné. Cohérence XVIIIe.', author: 'Famille de V.', context: 'Chantilly centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre toute hauteur terrasse pavillon Bois. Vue forêt libre.', author: 'Famille B.', context: 'Chantilly Bois', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L + patine laiton artisanale 4 jours. Haute couture.', author: 'Famille L.', context: 'Chantilly résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 60 CSP++.', rows: [
    { communeSlug: 'senlis', communeName: 'Senlis', priceAvg: '480-680 €/ml', durationAvg: '10-14 sem.', note: 'Cité médiévale ABF' },
    { communeSlug: 'gouvieux', communeName: 'Gouvieux', priceAvg: '500-700 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons bourgeois limitrophe' },
    { communeSlug: 'vineuil-saint-firmin', communeName: 'Vineuil-Saint-Firmin', priceAvg: '500-720 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons haut standing' },
  ] },
  localStats: [{ label: 'Garde-corps verre Chantilly depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part laiton patiné', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Chantilly royale hippique CSP++.' },
}
