import type { PremiumCase } from './types'

export const gardeCorpsEure27Vernon: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'eure-27',
  communeSlug: 'vernon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Vernon 27', caption: 'Garde-corps barreaudage vertical — pavillon Vernon bord Seine' },
  heroQuote: { text: 'Vernon bord Seine, garde-corps acier sobre + verre. Vue préservée vers Giverny.', author: 'Famille R.', context: 'Vernon bord Seine' },
  cityGuide: { intro: `Vernon (24 000 habitants, 27) ville bord Seine porte de la Normandie, à proximité de Giverny (Monet). Pavillons bord Seine + maisons bourgeoises. Demande équilibrée garde-corps acier + verre.`,
    sections: [
      { heading: 'Vernon — porte Normandie Giverny', body: `70% pavillons individuels (dont nombreux bord Seine), 30% maisons centre. Acier barreaudage vertical RAL 9005 + verre toute hauteur dominants.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-380 €/ml. Acier + lisses : 320-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + acier 14 ml — pavillon Vernon bord Seine', location: 'Bord Seine Vernon', date: 'Juin 2024', description: `Pavillon bord Seine vue Giverny. Verre 8+8 + cadre acier RAL 9005, terrasse + escalier. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 200 €', duration: '7 sem.', surface: '14 ml' }, quote: { text: 'Vernon bord Seine, garde-corps acier sobre + verre. Vue préservée vers Giverny.', author: 'Famille R.', context: 'Vernon bord Seine' } }],
  localReviews: [
    { text: 'Vernon bord Seine, garde-corps acier sobre + verre. Vue préservée vers Giverny.', author: 'Famille R.', context: 'Vernon bord Seine', rating: 5, date: 'Juin 2024' },
    { text: 'Acier barreaudage RAL 9005 sobre. Pose 1 jour propre.', author: 'Famille L.', context: 'Vernon centre', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus contemporain pavillon. Atelier vrai métier.', author: 'Hugo P.', context: 'Vernon résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 27.', rows: [
    { communeSlug: 'evreux', communeName: 'Évreux', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Préfecture Eure' },
    { communeSlug: 'gaillon', communeName: 'Gaillon', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'pacy-sur-eure', communeName: 'Pacy-sur-Eure', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons bord Eure' },
  ] },
  localStats: [{ label: 'Garde-corps Vernon depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Distance atelier AZ', value: '85 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Vernon bord Seine, vue Giverny premium.' },
}
