import type { PremiumCase } from './types'

export const portailsEssonne91VigneuxSurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'vigneux-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Vigneux-sur-Seine 91', caption: 'Battant — pavillon Vigneux bord Seine' },
  heroQuote: { text: 'Vigneux pavillon bord Seine, battant motorisé. Pose 1 jour.', author: 'Famille D.', context: 'Vigneux centre' },
  cityGuide: { intro: `Vigneux-sur-Seine (29 000 habitants, 91) ville résidentielle bord Seine + Lac de la Pyramide. Pavillons + copros. Demande portails équilibrée.`,
    sections: [
      { heading: 'Vigneux — bord Seine pavillons', body: `65% pavillons, 35% copros. Battant + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant 4 m motorisé — pavillon Vigneux bord Seine', location: 'Bord Seine Vigneux', date: 'Juin 2024', description: `Pavillon 1960 rénové. Battant acier RAL 7016 + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Vigneux pavillon bord Seine, battant motorisé. Pose 1 jour.', author: 'Famille D.', context: 'Vigneux centre' } }],
  localReviews: [
    { text: 'Vigneux pavillon bord Seine, battant motorisé. Pose 1 jour.', author: 'Famille D.', context: 'Vigneux centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came pavillon Lac Pyramide. Silencieux.', author: 'Famille L.', context: 'Vigneux Lac', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail, propre.', author: 'Vincent R.', context: 'Vigneux résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 bord Seine.', rows: [
    { communeSlug: 'draveil', communeName: 'Draveil', priceAvg: '5 500-8 200 €', durationAvg: '10-14 sem.', note: 'Bord Seine pavillons' },
    { communeSlug: 'montgeron', communeName: 'Montgeron', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'crosne', communeName: 'Crosne', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Vigneux depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Vigneux-sur-Seine bord Seine + Lac Pyramide.' },
}
