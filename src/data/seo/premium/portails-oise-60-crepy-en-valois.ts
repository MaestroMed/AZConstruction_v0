import type { PremiumCase } from './types'

export const portailsOise60CrepyEnValois: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'crepy-en-valois',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Crépy-en-Valois 60', caption: 'Battant — pavillon Crépy-en-Valois' },
  heroQuote: { text: 'Crépy-en-Valois pavillon, battant motorisé propre.', author: 'Famille D.', context: 'Crépy-en-Valois centre' },
  cityGuide: { intro: `Crépy-en-Valois (14 000 habitants, 60) sous-préfecture Oise historique. Pavillons + copros. AZ intervient depuis Bruyères-sur-Oise 1h15.`,
    sections: [
      { heading: 'Crépy-en-Valois — historique Valois', body: `80% pavillons, 20% copros. Battant + coulissant dominants.` },
      { heading: 'Tarifs', body: `Battant : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant 4 m motorisé — pavillon Crépy', location: 'Centre Crépy-en-Valois', date: 'Juin 2024', description: `Pavillon 1960 rénové. Battant acier RAL 7016 + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Crépy-en-Valois pavillon, battant motorisé propre.', author: 'Famille D.', context: 'Crépy-en-Valois centre' } }],
  localReviews: [
    { text: 'Crépy-en-Valois pavillon, battant motorisé propre.', author: 'Famille D.', context: 'Crépy-en-Valois centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came. Silencieux.', author: 'Famille L.', context: 'Crépy résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail propre.', author: 'Vincent R.', context: 'Crépy extérieur', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60 est.', rows: [
    { communeSlug: 'nanteuil-le-haudouin', communeName: 'Nanteuil-le-Haudouin', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'pont-sainte-maxence', communeName: 'Pont-Sainte-Maxence', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Bord Oise pavillons' },
    { communeSlug: 'betz', communeName: 'Betz', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Crépy depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '75 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Crépy-en-Valois sous-préfecture historique Oise est.' },
}
