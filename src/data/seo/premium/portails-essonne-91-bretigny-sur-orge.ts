import type { PremiumCase } from './types'

export const portailsEssonne91BretignySurOrge: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'bretigny-sur-orge',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Brétigny-sur-Orge 91', caption: 'Coulissant motorisé — pavillon Brétigny' },
  heroQuote: { text: 'Brétigny pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Brétigny centre' },
  cityGuide: { intro: `Brétigny-sur-Orge (27 000 habitants, 91) ville résidentielle pavillonnaire RER C + ancienne Base aérienne 217. Pavillons + copros. Demande portails équilibrée.`,
    sections: [
      { heading: 'Brétigny — pavillonnaire RER C', body: `75% pavillons, 25% copros. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant : 5 500-7 800 €. Battant : 4 800-6 600 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — pavillon Brétigny', location: 'Centre Brétigny', date: 'Juin 2024', description: `Pavillon 1985. Coulissant Came BX-241 + accessoires. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 500 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Brétigny pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Brétigny centre' } }],
  localReviews: [
    { text: 'Brétigny pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Brétigny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon motorisé Nice. Silencieux.', author: 'Famille L.', context: 'Brétigny résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant sans rail. Propre et durable.', author: 'Vincent T.', context: 'Brétigny Base 217', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'saint-michel-sur-orge', communeName: 'Saint-Michel-sur-Orge', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'saint-germain-les-arpajon', communeName: 'Saint-Germain-lès-Arpajon', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'arpajon', communeName: 'Arpajon', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons centre historique' },
  ] },
  localStats: [{ label: 'Portails Brétigny depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Brétigny pavillonnaire RER C 91 sud.' },
}
