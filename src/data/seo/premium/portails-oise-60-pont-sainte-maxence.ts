import type { PremiumCase } from './types'

export const portailsOise60PontSainteMaxence: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'pont-sainte-maxence',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Pont-Sainte-Maxence 60', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Pont-Sainte-Maxence' },
  heroQuote: { text: 'Pont-Sainte-Maxence pavillon bord Oise, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Pont-Sainte-Maxence centre' },
  cityGuide: { intro: `Pont-Sainte-Maxence (12 000 habitants, 60) ville bord Oise — pont historique XVIIIe Jean-Rodolphe Perronet + pavillons + copros + zone industrielle. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Pont-Sainte-Maxence — bord Oise Perronet', body: `70% pavillons individuels, 25% copros, 5% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 000-4 400 €. Coulissant 4 m : 4 000-5 600 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Pont-Sainte-Maxence', location: 'Pont-Sainte-Maxence centre', date: 'Juin 2024', description: `Pavillon 1970 rénové bord Oise. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 500 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Pont-Sainte-Maxence pavillon bord Oise, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Pont-Sainte-Maxence centre' } }],
  localReviews: [
    { text: 'Pont-Sainte-Maxence pavillon bord Oise, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Pont-Sainte-Maxence centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Pont-Sainte-Maxence résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Pont-Sainte-Maxence pont Perronet', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60 sud.', rows: [
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture 60' },
    { communeSlug: 'senlis', communeName: 'Senlis', priceAvg: '3 500-4 900 € ABF', durationAvg: '12-16 sem.', note: 'Médiévale ABF' },
    { communeSlug: 'chantilly', communeName: 'Chantilly', priceAvg: '3 800-5 200 € ABF', durationAvg: '12-16 sem.', note: 'Château princier' },
  ] },
  localStats: [{ label: 'Portails Pont-Sainte-Maxence depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Pont-Sainte-Maxence 60 bord Oise pont Perronet XVIIIe historique.' },
}
