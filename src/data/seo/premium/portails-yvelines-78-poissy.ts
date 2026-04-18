import type { PremiumCase } from './types'

export const portailsYvelines78Poissy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'poissy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Poissy 78', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Poissy' },
  heroQuote: { text: 'Poissy pavillon bord Seine, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille P.', context: 'Poissy centre' },
  cityGuide: { intro: `Poissy (38 000 habitants, 78) ville historique bord Seine — Collégiale XIIe + usine Stellantis + pavillons + copros + Villa Savoye Le Corbusier (UNESCO). Demande portails mix résidentiel + industriel.`,
    sections: [
      { heading: 'Poissy — bord Seine patrimoine Stellantis', body: `60% pavillons individuels, 25% copros, 15% industriel (Stellantis). Portail battant 3,5 m + coulissant Came dominants. Quelques ABF zone Collégiale.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Poissy bord Seine', location: 'Poissy centre', date: 'Juin 2024', description: `Pavillon 1960 rénové bord Seine. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Poissy pavillon bord Seine, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille P.', context: 'Poissy centre' } }],
  localReviews: [
    { text: 'Poissy pavillon bord Seine, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille P.', context: 'Poissy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Poissy résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille M.', context: 'Poissy Collégiale ABF', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 nord-est.', rows: [
    { communeSlug: 'conflans-sainte-honorine', communeName: 'Conflans-Sainte-Honorine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine' },
    { communeSlug: 'carrieres-sous-poissy', communeName: 'Carrières-sous-Poissy', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + ANRU' },
    { communeSlug: 'achères', communeName: 'Achères', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Forêt + pavillons' },
  ] },
  localStats: [{ label: 'Portails Poissy depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Poissy bord Seine Collégiale + Villa Savoye UNESCO + Stellantis.' },
}
