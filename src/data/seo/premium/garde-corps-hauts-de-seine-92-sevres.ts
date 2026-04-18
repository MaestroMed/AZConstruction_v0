import type { PremiumCase } from './types'

export const gardeCorpsHautsDeSeine92Sevres: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'sevres',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Sèvres 92', caption: 'Garde-corps barreaudage vertical — pavillon Sèvres' },
  heroQuote: { text: 'Sèvres pavillon bourgeois, garde-corps acier RAL 7016. Finition irréprochable.', author: 'Famille L.', context: 'Sèvres centre' },
  cityGuide: { intro: `Sèvres (24 000 habitants, 92 sud) ville résidentielle bourgeoise avec Manufacture nationale + Domaine national. Pavillons XIXe-XXe + copros récentes. Demande équilibrée garde-corps.`,
    sections: [
      { heading: 'Sèvres — bourgeoise Manufacture', body: `65% pavillons individuels, 35% copros. Acier barreaudage vertical RAL 7016 anthracite satiné dominant. Verre + acier sur rénovations.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-400 €/ml. Acier + lisses : 320-440 €/ml. Verre + acier : 420-600 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 10 ml — pavillon Sèvres', location: 'Rue des Binelles, Sèvres', date: 'Juin 2024', description: `Pavillon 1925 rénové, balcon + escalier extérieur. Barreaudage vertical RAL 7016 satiné. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '6 sem.', surface: '10 ml' }, quote: { text: 'Sèvres pavillon bourgeois, garde-corps acier RAL 7016. Finition irréprochable.', author: 'Famille L.', context: 'Sèvres centre' } }],
  localReviews: [
    { text: 'Sèvres pavillon bourgeois, garde-corps acier RAL 7016. Finition irréprochable.', author: 'Famille L.', context: 'Sèvres centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur terrasse pavillon vue parc. Vue préservée.', author: 'Famille P.', context: 'Sèvres Parc de Saint-Cloud', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus contemporain. Atelier vrai métier.', author: 'Hugo T.', context: 'Sèvres Brimborion', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 92 sud.', rows: [
    { communeSlug: 'meudon', communeName: 'Meudon', priceAvg: '280-480 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons collines' },
    { communeSlug: 'boulogne-billancourt', communeName: 'Boulogne-Billancourt', priceAvg: '300-520 €/ml', durationAvg: '4-7 sem.', note: 'Trapèze + Île Seguin' },
    { communeSlug: 'saint-cloud', communeName: 'Saint-Cloud', priceAvg: '300-500 €/ml', durationAvg: '4-6 sem.', note: 'Bourgeoise Domaine' },
  ] },
  localStats: [{ label: 'Garde-corps Sèvres depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Sèvres bourgeoise Manufacture.' },
}
