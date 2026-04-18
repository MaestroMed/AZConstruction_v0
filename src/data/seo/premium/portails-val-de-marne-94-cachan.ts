import type { PremiumCase } from './types'

export const portailsValDeMarne94Cachan: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'cachan',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Cachan 94', caption: 'Battant double vantail — pavillon Cachan' },
  heroQuote: { text: 'Cachan pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Cachan centre' },
  cityGuide: { intro: `Cachan (30 000 habitants, 94 limitrophe Paris 14e) ville résidentielle pavillonnaire + ENS. Mix pavillons + copros. Demande équilibrée portails.`,
    sections: [
      { heading: 'Cachan — pavillonnaire + ENS', body: `65% pavillons individuels, 35% copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Cachan', location: 'Centre Cachan', date: 'Juin 2024', description: `Pavillon 1940 rénové. Battant acier RAL 7016 anthracite + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 000 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Cachan pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Cachan centre' } }],
  localReviews: [
    { text: 'Cachan pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Cachan centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 copro. Silencieux 38 dB, pro.', author: 'Conseil syndical', context: 'Cachan résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon sans rail. Durable et esthétique.', author: 'Vincent L.', context: 'Cachan ENS', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 nord.', rows: [
    { communeSlug: 'arcueil', communeName: 'Arcueil', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Limitrophe Paris 14e' },
    { communeSlug: 'l-hay-les-roses', communeName: 'L\'Haÿ-les-Roses', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Pavillons roses' },
    { communeSlug: 'villejuif', communeName: 'Villejuif', priceAvg: '5 500-8 200 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Portails Cachan depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cachan pavillonnaire limitrophe Paris 14e.' },
}
