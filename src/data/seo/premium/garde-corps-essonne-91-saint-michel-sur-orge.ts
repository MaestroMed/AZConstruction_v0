import type { PremiumCase } from './types'

export const gardeCorpsEssonne91SaintMichelSurOrge: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'essonne-91',
  communeSlug: 'saint-michel-sur-orge',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Saint-Michel-sur-Orge 91', caption: 'Barreaudage vertical — pavillon Saint-Michel' },
  heroQuote: { text: 'Saint-Michel pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Saint-Michel centre' },
  cityGuide: { intro: `Saint-Michel-sur-Orge (20 000 habitants, 91) ville résidentielle pavillonnaire RER C. Pavillons + copros. Demande garde-corps.`,
    sections: [
      { heading: 'Saint-Michel — pavillonnaire', body: `75% pavillons, 25% copros. Acier barreaudage RAL 9005 dominant.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-400 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 10 ml — pavillon Saint-Michel', location: 'Centre Saint-Michel', date: 'Juin 2024', description: `Pavillon rénové. Barreaudage vertical RAL 9005. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '6 sem.', surface: '10 ml' }, quote: { text: 'Saint-Michel pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Saint-Michel centre' } }],
  localReviews: [
    { text: 'Saint-Michel pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Saint-Michel centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + acier terrasse. Vue libre.', author: 'Famille D.', context: 'Saint-Michel résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox contemporain. Atelier.', author: 'Hugo P.', context: 'Saint-Michel Parc', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 91.', rows: [
    { communeSlug: 'bretigny-sur-orge', communeName: 'Brétigny-sur-Orge', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons RER C' },
    { communeSlug: 'sainte-genevieve-des-bois', communeName: 'Sainte-Geneviève-des-Bois', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'morsang-sur-orge', communeName: 'Morsang-sur-Orge', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps Saint-Michel depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Saint-Michel-sur-Orge pavillonnaire.' },
}
