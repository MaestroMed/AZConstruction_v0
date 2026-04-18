import type { PremiumCase } from './types'

export const portailsValDeMarne94Thiais: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'thiais',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Thiais 94', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Thiais' },
  heroQuote: { text: 'Thiais pavillon, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille T.', context: 'Thiais centre' },
  cityGuide: { intro: `Thiais (30 000 habitants, 94 sud) ville mixte pavillons + copros + centre commercial Belle-Épine + zones logistiques Rungis-MIN. Demande portails motorisés + industriels.`,
    sections: [
      { heading: 'Thiais — Belle-Épine + MIN Rungis', body: `65% pavillons individuels, 25% copros, 10% industriel (MIN Rungis + Belle-Épine). Portail coulissant 4 m + battant 3,5 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Thiais', location: 'Thiais centre', date: 'Juin 2024', description: `Pavillon 1965 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Thiais pavillon, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille T.', context: 'Thiais centre' } }],
  localReviews: [
    { text: 'Thiais pavillon, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille T.', context: 'Thiais centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Thiais résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Thiais limitrophe Belle-Épine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 sud.', rows: [
    { communeSlug: 'choisy-le-roi', communeName: 'Choisy-le-Roi', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine + ANRU' },
    { communeSlug: 'orly', communeName: 'Orly', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Aéroport + SILIC' },
    { communeSlug: 'rungis', communeName: 'Rungis', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Marché + industriel' },
  ] },
  localStats: [{ label: 'Portails Thiais depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '93 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Thiais Belle-Épine + MIN Rungis mix pavillons + logistique.' },
}
