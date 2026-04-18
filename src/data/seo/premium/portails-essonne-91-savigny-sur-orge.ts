import type { PremiumCase } from './types'

export const portailsEssonne91SavignySurOrge: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'savigny-sur-orge',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Savigny-sur-Orge 91', caption: 'Battant — pavillon Savigny' },
  heroQuote: { text: 'Savigny pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Savigny centre' },
  cityGuide: { intro: `Savigny-sur-Orge (37 000 habitants, 91) ville résidentielle pavillonnaire RER C. Pavillons années 1920-1960 + copros. Demande portails équilibrée.`,
    sections: [
      { heading: 'Savigny — pavillonnaire RER C', body: `75% pavillons individuels, 25% copros. Battant + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant 4 m motorisé — pavillon Savigny', location: 'Centre Savigny', date: 'Juin 2024', description: `Pavillon 1935 rénové. Battant acier RAL 7016 + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Savigny pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Savigny centre' } }],
  localReviews: [
    { text: 'Savigny pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Savigny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 silencieux. Pro.', author: 'Famille D.', context: 'Savigny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail, esthétique.', author: 'Vincent L.', context: 'Grand-Vaux, Savigny', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'juvisy-sur-orge', communeName: 'Juvisy-sur-Orge', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Bord Orge RER C' },
    { communeSlug: 'viry-chatillon', communeName: 'Viry-Châtillon', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'athis-mons', communeName: 'Athis-Mons', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons proximité Orly' },
  ] },
  localStats: [{ label: 'Portails Savigny depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Savigny pavillonnaire RER C.' },
}
