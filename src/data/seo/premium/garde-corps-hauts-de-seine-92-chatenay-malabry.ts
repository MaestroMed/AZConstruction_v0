import type { PremiumCase } from './types'

export const gardeCorpsHautsDeSeine92ChatenayMalabry: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'chatenay-malabry',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Châtenay-Malabry 92', caption: 'Garde-corps barreaudage — pavillon Châtenay' },
  heroQuote: { text: 'Châtenay-Malabry pavillon, garde-corps acier sobre RAL 9005. Pose 1 jour propre.', author: 'Famille D.', context: 'Châtenay-Malabry centre' },
  cityGuide: { intro: `Châtenay-Malabry (32 000 habitants, 92 sud) ville résidentielle pavillonnaire CSP+ avec Arboretum + Parc de la Vallée-aux-Loups. Demande croissante garde-corps.`,
    sections: [
      { heading: 'Châtenay-Malabry — pavillonnaire résidentiel', body: `70% pavillons individuels + 30% copros + résidences. Acier barreaudage vertical RAL 9005 dominant.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-400 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 12 ml — pavillon Châtenay-Malabry', location: 'Centre Châtenay-Malabry', date: 'Juin 2024', description: `Pavillon rénové, balcon + escalier extérieur. Barreaudage vertical RAL 9005 satiné. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 400 €', duration: '6 sem.', surface: '12 ml' }, quote: { text: 'Châtenay-Malabry pavillon, garde-corps acier sobre RAL 9005. Pose 1 jour propre.', author: 'Famille D.', context: 'Châtenay-Malabry centre' } }],
  localReviews: [
    { text: 'Châtenay-Malabry pavillon, garde-corps acier sobre RAL 9005. Pose 1 jour propre.', author: 'Famille D.', context: 'Châtenay-Malabry centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur terrasse pavillon vue Arboretum. Vue libre.', author: 'Famille L.', context: 'Châtenay-Malabry Arboretum', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox contemporain pavillon résidentiel. Atelier vrai métier.', author: 'Hugo P.', context: 'Châtenay Vallée-aux-Loups', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 92 sud.', rows: [
    { communeSlug: 'clamart', communeName: 'Clamart', priceAvg: '280-480 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons Percy + Trivaux' },
    { communeSlug: 'le-plessis-robinson', communeName: 'Le Plessis-Robinson', priceAvg: '280-460 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '320-520 €/ml', durationAvg: '4-6 sem.', note: 'Bourgeoise Parc' },
  ] },
  localStats: [{ label: 'Garde-corps Châtenay-Malabry depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Châtenay-Malabry pavillonnaire CSP+.' },
}
