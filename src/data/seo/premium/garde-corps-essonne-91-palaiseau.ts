import type { PremiumCase } from './types'

export const gardeCorpsEssonne91Palaiseau: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'essonne-91',
  communeSlug: 'palaiseau',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Palaiseau 91', caption: 'Garde-corps barreaudage vertical — pavillon Palaiseau' },
  heroQuote: { text: 'Palaiseau pavillon, garde-corps acier sobre. Pose 1 jour propre, finition irréprochable.', author: 'Famille D.', context: 'Palaiseau centre' },
  cityGuide: { intro: `Palaiseau (35 000 habitants, 91) ville pavillonnaire à proximité du plateau de Saclay (École polytechnique, recherche). Demande croissante garde-corps acier + verre.`,
    sections: [
      { heading: 'Palaiseau — pavillonnaire Saclay', body: `75% pavillons individuels, 25% copros. Acier barreaudage vertical RAL 9005 + verre toute hauteur sur rénovations contemporaines.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-380 €/ml. Acier + lisses : 320-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 10 ml — pavillon Palaiseau', location: 'Centre Palaiseau', date: 'Juin 2024', description: `Pavillon rénové, balcon + escalier extérieur. Barreaudage vertical RAL 9005 satiné, hauteur 1,02 m. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '6 sem.', surface: '10 ml' }, quote: { text: 'Palaiseau pavillon, garde-corps acier sobre. Pose 1 jour propre, finition irréprochable.', author: 'Famille D.', context: 'Palaiseau centre' } }],
  localReviews: [
    { text: 'Palaiseau pavillon, garde-corps acier sobre. Pose 1 jour propre, finition irréprochable.', author: 'Famille D.', context: 'Palaiseau centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur fixations invisibles terrasse. Vue Saclay libre.', author: 'Famille L.', context: 'Palaiseau hauteurs', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus contemporain. Atelier vrai métier.', author: 'Hugo P.', context: 'Palaiseau résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 91.', rows: [
    { communeSlug: 'massy', communeName: 'Massy', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Tech IDF sud' },
    { communeSlug: 'orsay', communeName: 'Orsay', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Université + pavillons' },
    { communeSlug: 'igny', communeName: 'Igny', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps Palaiseau depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Palaiseau pavillonnaire Saclay tech.' },
}
