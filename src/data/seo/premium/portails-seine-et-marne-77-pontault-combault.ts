import type { PremiumCase } from './types'

export const portailsSeineEtMarne77PontaultCombault: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'pontault-combault',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Pontault-Combault 77', caption: 'Battant double vantail — pavillon Pontault' },
  heroQuote: { text: 'Pontault pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Pontault-Combault' },
  cityGuide: { intro: `Pontault-Combault (38 000 habitants, 77) ville résidentielle pavillonnaire est IDF. Demande équilibrée portails battants/coulissants pavillons.`,
    sections: [
      { heading: 'Pontault — pavillonnaire est IDF', body: `80% pavillons individuels, 20% petites copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Pontault', location: 'Pontault centre', date: 'Juin 2024', description: `Remplacement portail PVC vétuste pavillon. Battant acier RAL 7016, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '6 sem.', surface: '4 m' }, quote: { text: 'Pontault pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Pontault-Combault' } }],
  localReviews: [
    { text: 'Pontault pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Pontault-Combault', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came pavillon. Silencieux et durable.', author: 'Famille R.', context: 'Pontault sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent L.', context: 'Combault', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77.', rows: [
    { communeSlug: 'roissy-en-brie', communeName: 'Roissy-en-Brie', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'ozoir-la-ferriere', communeName: 'Ozoir-la-Ferrière', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'lagny-sur-marne', communeName: 'Lagny-sur-Marne', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Marne' },
  ] },
  localStats: [{ label: 'Portails Pontault depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Pontault pavillonnaire est IDF.' },
}
