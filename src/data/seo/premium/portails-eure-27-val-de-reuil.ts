import type { PremiumCase } from './types'

export const portailsEure27ValDeReuil: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-27',
  communeSlug: 'val-de-reuil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Val-de-Reuil 27', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Val-de-Reuil' },
  heroQuote: { text: 'Val-de-Reuil pavillon ville nouvelle, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Val-de-Reuil centre' },
  cityGuide: { intro: `Val-de-Reuil (14 000 habitants, 27) ville nouvelle bord Seine années 70 — pavillons ZAC + copros + zones industrielles (Sanofi, Glaxo). Clientèle mixte CSP++ + employés industrie.`,
    sections: [
      { heading: 'Val-de-Reuil — ville nouvelle bord Seine', body: `70% pavillons individuels ZAC, 25% copros, 5% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Val-de-Reuil', location: 'Val-de-Reuil centre', date: 'Juin 2024', description: `Pavillon ZAC 1985 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 200 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Val-de-Reuil pavillon ville nouvelle, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Val-de-Reuil centre' } }],
  localReviews: [
    { text: 'Val-de-Reuil pavillon ville nouvelle, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Val-de-Reuil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Val-de-Reuil résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Val-de-Reuil bord Seine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 27.', rows: [
    { communeSlug: 'louviers', communeName: 'Louviers', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Bord Eure' },
    { communeSlug: 'evreux', communeName: 'Évreux', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Préfecture 27' },
    { communeSlug: 'saint-etienne-du-rouvray', communeName: 'Saint-Étienne-du-Rouvray (76)', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Pavillons 76' },
  ] },
  localStats: [{ label: 'Portails Val-de-Reuil depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Val-de-Reuil 27 ville nouvelle années 70 bord Seine pavillons ZAC.' },
}
