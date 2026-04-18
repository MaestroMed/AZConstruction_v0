import type { PremiumCase } from './types'

export const gardeCorpsSeineEtMarne77Chelles: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'chelles',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Chelles 77', caption: 'Garde-corps barreaudage vertical — pavillon Chelles' },
  heroQuote: { text: 'Chelles pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille D.', context: 'Chelles centre' },
  cityGuide: { intro: `Chelles (55 000 habitants, 77) ville pavillonnaire ouest Seine-et-Marne, accès direct RER E. Demande croissante garde-corps acier + verre.`,
    sections: [
      { heading: 'Chelles — pavillonnaire RER E', body: `70% pavillons individuels, 30% copros. Acier barreaudage vertical RAL 9005 + verre toute hauteur dominants.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-380 €/ml. Acier + lisses : 320-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 12 ml — pavillon Chelles', location: 'Centre Chelles', date: 'Juin 2024', description: `Pavillon rénové, balcon + escalier extérieur. Barreaudage vertical RAL 9005, hauteur 1,02 m. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 200 €', duration: '6 sem.', surface: '12 ml' }, quote: { text: 'Chelles pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille D.', context: 'Chelles centre' } }],
  localReviews: [
    { text: 'Chelles pavillon, garde-corps acier sobre. Pose 1 jour propre.', author: 'Famille D.', context: 'Chelles centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur fixations invisibles terrasse. Vue libre.', author: 'Famille L.', context: 'Chelles hauteurs', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus contemporain. Atelier vrai métier.', author: 'Hugo P.', context: 'Chelles résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 77.', rows: [
    { communeSlug: 'lagny-sur-marne', communeName: 'Lagny-sur-Marne', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons bord Marne' },
    { communeSlug: 'meaux', communeName: 'Meaux', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Sous-préfecture' },
    { communeSlug: 'pontault-combault', communeName: 'Pontault-Combault', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps Chelles depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Chelles pavillonnaire RER E.' },
}
