import type { PremiumCase } from './types'

export const portailsValDoise95Goussainville: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'goussainville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Goussainville 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Goussainville' },
  heroQuote: { text: 'Goussainville pavillon proche CDG, portail battant Came BX. Pose propre.', author: 'Famille G.', context: 'Goussainville centre' },
  cityGuide: { intro: `Goussainville (32 000 habitants, 95) ville proche aéroport Roissy-CDG — Vieux-Pays patrimoine (village fantôme abandonné après expropriations 1970) + pavillons + copros + industriel CDG.`,
    sections: [
      { heading: 'Goussainville — CDG + Vieux-Pays', body: `65% pavillons individuels, 25% copros, 10% industriel/CDG. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Goussainville', location: 'Goussainville centre', date: 'Juin 2024', description: `Pavillon 1970 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Goussainville pavillon proche CDG, portail battant Came BX. Pose propre.', author: 'Famille G.', context: 'Goussainville centre' } }],
  localReviews: [
    { text: 'Goussainville pavillon proche CDG, portail battant Came BX. Pose propre.', author: 'Famille G.', context: 'Goussainville centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Goussainville résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Goussainville Vieux-Pays', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 est CDG.', rows: [
    { communeSlug: 'sarcelles', communeName: 'Sarcelles', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU + pavillons' },
    { communeSlug: 'gonesse', communeName: 'Gonesse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + CDG' },
    { communeSlug: 'roissy-en-france', communeName: 'Roissy-en-France', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'CDG industriel' },
  ] },
  localStats: [{ label: 'Portails Goussainville depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Goussainville proche CDG + Vieux-Pays patrimoine abandonné.' },
}
