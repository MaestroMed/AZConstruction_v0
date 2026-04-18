import type { PremiumCase } from './types'

export const gardeCorpsVerreEssonne91Orsay: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'essonne-91',
  communeSlug: 'orsay',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Orsay 91', caption: 'Verre + acier — pavillon Orsay' },
  heroQuote: { text: 'Orsay pavillon Saclay, verre + acier RAL 7016. Cadre universitaire.', author: 'Famille P.', context: 'Orsay centre' },
  cityGuide: { intro: `Orsay (16 000 habitants, 91) ville universitaire Paris-Saclay + Observatoire. Pavillons + résidences universitaires. Clientèle cadres tech + universitaires.`,
    sections: [
      { heading: 'Orsay — universitaire Saclay', body: `70% pavillons individuels cadres universitaires, 30% résidences. Verre + acier RAL 7016 + verre toute hauteur dominants.` },
      { heading: 'Tarifs', body: `Verre + acier : 450-620 €/ml. Verre toute hauteur : 520-700 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + acier 10 ml — pavillon Orsay université', location: 'Centre Orsay', date: 'Juin 2024', description: `Pavillon 1970 rénové (couple universitaire). Verre 8+8 + cadre acier RAL 7016 satiné. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 400 €', duration: '7 sem.', surface: '10 ml' }, quote: { text: 'Orsay pavillon Saclay, verre + acier RAL 7016. Cadre universitaire.', author: 'Famille P.', context: 'Orsay centre' } }],
  localReviews: [
    { text: 'Orsay pavillon Saclay, verre + acier RAL 7016. Cadre universitaire.', author: 'Famille P.', context: 'Orsay centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur terrasse vue Observatoire. Vue libre.', author: 'Famille L.', context: 'Orsay Observatoire', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L systématique. Durabilité long terme.', author: 'Hugo R.', context: 'Orsay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes Saclay.', rows: [
    { communeSlug: 'palaiseau', communeName: 'Palaiseau', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'Polytechnique tech' },
    { communeSlug: 'gif-sur-yvette', communeName: 'Gif-sur-Yvette', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'CEA + pavillons' },
    { communeSlug: 'bures-sur-yvette', communeName: 'Bures-sur-Yvette', priceAvg: '420-580 €/ml', durationAvg: '6-8 sem.', note: 'Pavillons universitaires' },
  ] },
  localStats: [{ label: 'Garde-corps verre Orsay depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part cadres universitaires', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Orsay universitaire Paris-Saclay.' },
}
