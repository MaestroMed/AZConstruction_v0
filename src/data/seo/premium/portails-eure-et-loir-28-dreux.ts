import type { PremiumCase } from './types'

export const portailsEureEtLoir28Dreux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'dreux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Dreux 28', caption: 'Battant double vantail — pavillon Dreux' },
  heroQuote: { text: 'Dreux pavillon, battant double vantail acier motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Dreux centre' },
  cityGuide: { intro: `Dreux (32 000 habitants, 28) sous-préfecture Eure-et-Loir, ville mixte centre historique + pavillons. Demande équilibrée portails. AZ intervient depuis Bruyères-sur-Oise (95) en 1h30.`,
    sections: [
      { heading: 'Dreux — sous-préfecture historique', body: `70% pavillons individuels, 30% maisons centre + petites copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Dreux', location: 'Centre Dreux', date: 'Juin 2024', description: `Remplacement portail PVC vétuste pavillon. Battant acier RAL 7016, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Dreux pavillon, battant double vantail acier motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Dreux centre' } }],
  localReviews: [
    { text: 'Dreux pavillon, battant double vantail acier motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Dreux centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came pavillon. Silencieux et durable.', author: 'Famille R.', context: 'Dreux sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent L.', context: 'Dreux résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 28.', rows: [
    { communeSlug: 'chartres', communeName: 'Chartres', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Préfecture cathédrale' },
    { communeSlug: 'vernouillet', communeName: 'Vernouillet', priceAvg: '5 000-7 200 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'anet', communeName: 'Anet', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Château + pavillons' },
  ] },
  localStats: [{ label: 'Portails Dreux depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '125 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Dreux sous-préfecture, demande pavillons.' },
}
