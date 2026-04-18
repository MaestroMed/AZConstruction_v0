import type { PremiumCase } from './types'

export const portailsEure27Evreux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-27',
  communeSlug: 'evreux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Évreux 27', caption: 'Coulissant motorisé Came — pavillon Évreux' },
  heroQuote: { text: 'Évreux pavillon, coulissant motorisé silencieux. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Évreux centre' },
  cityGuide: { intro: `Évreux (50 000 habitants, 27) préfecture Eure, ville mixte centre historique cathédrale + pavillons. Demande équilibrée portails. AZ intervient depuis Bruyères-sur-Oise (95) en 1h15.`,
    sections: [
      { heading: 'Évreux — préfecture Eure', body: `60% pavillons individuels, 30% copros, 10% centre historique cathédrale (zone ABF). Coulissant motorisé Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — pavillon Évreux', location: 'Centre Évreux', date: 'Juin 2024', description: `Remplacement portail bois ancien. Coulissant rail motorisé Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Évreux pavillon, coulissant motorisé silencieux. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Évreux centre' } }],
  localReviews: [
    { text: 'Évreux pavillon, coulissant motorisé silencieux. Équipe AZ pro, pose 1 jour.', author: 'Famille L.', context: 'Évreux centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents Eure.', author: 'Famille D.', context: 'Évreux nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Évreux sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 27.', rows: [
    { communeSlug: 'vernon', communeName: 'Vernon', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'louviers', communeName: 'Louviers', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'gisors', communeName: 'Gisors', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Cité médiévale' },
  ] },
  localStats: [{ label: 'Portails Évreux depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '95 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Évreux préfecture Eure, demande pavillons.' },
}
