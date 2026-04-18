import type { PremiumCase } from './types'

export const gardeCorpsOise60Creil: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'oise-60',
  communeSlug: 'creil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Creil 60', caption: 'Garde-corps barreaudage vertical — copro Creil' },
  heroQuote: { text: 'Creil copro 40 lots, garde-corps acier sobre. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Creil centre' },
  cityGuide: { intro: `Creil (35 000 habitants, 60) ville mixte sud Oise avec copros + pavillons + activité industrielle. Demande équilibrée garde-corps. AZ intervient depuis Bruyères-sur-Oise (95) en 30 minutes.`,
    sections: [
      { heading: 'Creil — sud Oise', body: `50% copros (grands ensembles + petites copros), 50% pavillons. Acier barreaudage vertical RAL 9005 dominant. Verre + acier sur rénovations contemporaines.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-380 €/ml. Acier + lisses : 320-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 24 ml — copro 40 lots Creil', location: 'Centre Creil', date: 'Juin 2024', description: `Rénovation balcons copro 40 lots. Barreaudage vertical RAL 9005 satiné, hauteur 1,02 m. Pose 1 jour 8 balcons.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '7 sem.', surface: '24 ml' }, quote: { text: 'Creil copro 40 lots, garde-corps acier sobre. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Creil centre' } }],
  localReviews: [
    { text: 'Creil copro 40 lots, garde-corps acier sobre. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Creil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur fixations invisibles terrasse pavillon. Vue libre.', author: 'Famille L.', context: 'Creil hauteurs', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus contemporain. Atelier vrai métier.', author: 'Vincent P.', context: 'Creil résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 60.', rows: [
    { communeSlug: 'beauvais', communeName: 'Beauvais', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Préfecture Oise' },
    { communeSlug: 'compiegne', communeName: 'Compiègne', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'senlis', communeName: 'Senlis', priceAvg: '300-480 €/ml', durationAvg: '4-6 sem.', note: 'Cité historique ABF' },
  ] },
  localStats: [{ label: 'Garde-corps Creil depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '20 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Creil sud Oise, AZ proximité immédiate.' },
}
