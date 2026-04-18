import type { PremiumCase } from './types'

export const gardeCorpsValDeMarne94Arcueil: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'arcueil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Arcueil 94', caption: 'Acier barreaudage — pavillon Arcueil' },
  heroQuote: { text: 'Arcueil pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Arcueil centre' },
  cityGuide: { intro: `Arcueil (22 000 habitants, 94 limitrophe Paris 14e) ville résidentielle avec Aqueduc + pavillons + copros. Demande croissante garde-corps.`,
    sections: [
      { heading: 'Arcueil — pavillonnaire Aqueduc', body: `60% pavillons individuels, 40% copros. Acier barreaudage vertical RAL 9005 dominant.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-400 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 10 ml — pavillon Arcueil', location: 'Centre Arcueil', date: 'Juin 2024', description: `Pavillon rénové. Barreaudage vertical RAL 9005 satiné. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '6 sem.', surface: '10 ml' }, quote: { text: 'Arcueil pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Arcueil centre' } }],
  localReviews: [
    { text: 'Arcueil pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Arcueil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + acier terrasse pavillon. Vue libre.', author: 'Famille D.', context: 'Arcueil Aqueduc', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox pavillon résidentiel. Top métier.', author: 'Hugo P.', context: 'Arcueil centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 94 nord.', rows: [
    { communeSlug: 'cachan', communeName: 'Cachan', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 14e' },
    { communeSlug: 'gentilly', communeName: 'Gentilly', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 13e' },
    { communeSlug: 'le-kremlin-bicetre', communeName: 'Le Kremlin-Bicêtre', priceAvg: '300-460 €/ml', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 13e' },
  ] },
  localStats: [{ label: 'Garde-corps Arcueil depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Arcueil pavillonnaire Aqueduc.' },
}
