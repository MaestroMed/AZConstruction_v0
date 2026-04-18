import type { PremiumCase } from './types'

export const portailsEssonne91AthisMons: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'athis-mons',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Athis-Mons 91', caption: 'Coulissant Came — copro Athis-Mons' },
  heroQuote: { text: 'Athis-Mons copro 60 lots, coulissant Came motorisé. Vote AG OK.', author: 'Conseil syndical', context: 'Athis-Mons centre' },
  cityGuide: { intro: `Athis-Mons (32 000 habitants, 91) ville résidentielle mixte proche Orly. Copros années 70-90 + pavillons. Demande portails copros forte.`,
    sections: [
      { heading: 'Athis-Mons — mix copros + pavillons', body: `55% copros, 45% pavillons. Coulissant Came motorisé + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 200-9 000 €. Battant pavillon : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — copro 60 lots Athis-Mons', location: 'Centre Athis-Mons', date: 'Juin 2024', description: `Copro 60 lots. Coulissant Came BX-241 + 5 télécommandes + batterie secours. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 600 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Athis-Mons copro 60 lots, coulissant Came motorisé. Vote AG OK.', author: 'Conseil syndical', context: 'Athis-Mons centre' } }],
  localReviews: [
    { text: 'Athis-Mons copro 60 lots, coulissant Came motorisé. Vote AG OK.', author: 'Conseil syndical', context: 'Athis-Mons centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail Nice. Silencieux.', author: 'Famille R.', context: 'Athis Mons-Val', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon sans rail. Durable.', author: 'Vincent L.', context: 'Athis résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'juvisy-sur-orge', communeName: 'Juvisy-sur-Orge', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Bord Orge' },
    { communeSlug: 'paray-vieille-poste', communeName: 'Paray-Vieille-Poste', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons proches Orly' },
    { communeSlug: 'savigny-sur-orge', communeName: 'Savigny-sur-Orge', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons RER C' },
  ] },
  localStats: [{ label: 'Portails Athis-Mons depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Athis-Mons mix copros + pavillons proche Orly.' },
}
