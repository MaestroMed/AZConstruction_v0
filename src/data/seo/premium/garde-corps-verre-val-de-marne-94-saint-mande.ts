import type { PremiumCase } from './types'

export const gardeCorpsVerreValDeMarne94SaintMande: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'saint-mande',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Saint-Mandé 94', caption: 'Verre + laiton patiné — appart haussmannien Saint-Mandé' },
  heroQuote: { text: 'Saint-Mandé appart haussmannien, verre + laiton patiné. Esthétique XIXe préservée.', author: 'Famille de V.', context: 'Saint-Mandé centre' },
  cityGuide: { intro: `Saint-Mandé (24 000 habitants, 94 limitrophe Paris 12e/Bois de Vincennes) ville résidentielle premium CSP++. Apparts haussmanniens + pavillons bourgeois. Demande forte garde-corps verre.`,
    sections: [
      { heading: 'Saint-Mandé — haussmannien premium', body: `70% apparts haussmanniens CSP++, 30% pavillons. Verre + main courante laiton patiné dominant.` },
      { heading: 'Tarifs', body: `Verre + acier : 480-650 €/ml. Verre + laiton patiné : 620-850 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + laiton patiné 10 ml — balcon haussmannien Saint-Mandé', location: 'Avenue du Général-de-Gaulle, Saint-Mandé', date: 'Juillet 2024', description: `Balcon haussmannien 1898. Verre 8+8 + main courante laiton patiné bronze. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '8 sem.', surface: '10 ml' }, quote: { text: 'Saint-Mandé appart haussmannien, verre + laiton patiné. Esthétique XIXe préservée.', author: 'Famille de V.', context: 'Saint-Mandé centre' } }],
  localReviews: [
    { text: 'Saint-Mandé appart haussmannien, verre + laiton patiné. Esthétique XIXe préservée.', author: 'Famille de V.', context: 'Saint-Mandé centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre toute hauteur terrasse pavillon Bois Vincennes. Vue libre.', author: 'Famille L.', context: 'Saint-Mandé Bois', rating: 5, date: 'Mars 2024' },
    { text: 'Patine laiton 4 jours artisanale. Qualité haute couture.', author: 'Hugo T.', context: 'Saint-Mandé résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes limitrophes Paris est.', rows: [
    { communeSlug: 'vincennes', communeName: 'Vincennes', priceAvg: '500-720 €/ml', durationAvg: '7-9 sem.', note: 'Château + Bois' },
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'Limitrophe Paris 12e' },
    { communeSlug: 'montreuil', communeName: 'Montreuil', priceAvg: '400-580 €/ml', durationAvg: '6-8 sem.', note: 'Mix haussmannien + lofts' },
  ] },
  localStats: [{ label: 'Garde-corps verre Saint-Mandé depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part laiton patiné', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Saint-Mandé CSP++ haussmannien + Bois Vincennes.' },
}
