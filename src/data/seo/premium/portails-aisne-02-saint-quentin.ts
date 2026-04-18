import type { PremiumCase } from './types'

export const portailsAisne02SaintQuentin: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'aisne-02',
  communeSlug: 'saint-quentin',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Saint-Quentin 02', caption: 'Coulissant motorisé Came — pavillon Saint-Quentin' },
  heroQuote: { text: 'Saint-Quentin pavillon, coulissant motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Saint-Quentin centre' },
  cityGuide: { intro: `Saint-Quentin (53 000 habitants, 02) sous-préfecture Aisne, ville mixte centre Art déco + pavillons + zones industrielles. Demande équilibrée portails. AZ intervient depuis Bruyères-sur-Oise (95) en 1h30.`,
    sections: [
      { heading: 'Saint-Quentin — Art déco picard', body: `60% pavillons individuels, 40% copros + activités. Coulissant motorisé Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — pavillon Saint-Quentin', location: 'Centre Saint-Quentin', date: 'Juin 2024', description: `Remplacement portail bois. Coulissant rail motorisé Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Saint-Quentin pavillon, coulissant motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Saint-Quentin centre' } }],
  localReviews: [
    { text: 'Saint-Quentin pavillon, coulissant motorisé. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Saint-Quentin centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents Aisne.', author: 'Famille D.', context: 'Saint-Quentin nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Saint-Quentin sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 02.', rows: [
    { communeSlug: 'soissons', communeName: 'Soissons', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'laon', communeName: 'Laon', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Préfecture cité médiévale' },
    { communeSlug: 'tergnier', communeName: 'Tergnier', priceAvg: '5 000-7 200 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Saint-Quentin depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '110 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Saint-Quentin sous-préfecture Aisne.' },
}
