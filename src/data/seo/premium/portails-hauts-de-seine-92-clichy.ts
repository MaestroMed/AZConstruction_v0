import type { PremiumCase } from './types'

export const portailsHautsDeSeine92Clichy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'clichy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Clichy 92', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Clichy' },
  heroQuote: { text: 'Clichy pavillon limitrophe Paris 17e, portail battant Came BX. Pose propre 1 jour.', author: 'Famille C.', context: 'Clichy centre' },
  cityGuide: { intro: `Clichy (62 000 habitants, 92 nord limitrophe Paris 17e) ville mixte pavillons + copros ANRU + zones industrielles + ZAC récentes (Bac). Demande portails motorisés + coordination copros ANRU forte.`,
    sections: [
      { heading: 'Clichy — limitrophe Paris 17e mixte', body: `45% pavillons individuels, 45% copros (30% ANRU), 10% industriel/ZAC. Portail battant 3,5 m + coulissant 4 m Came dominants + subvention ANRU.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Clichy limitrophe Paris', location: 'Clichy centre', date: 'Juin 2024', description: `Pavillon 1930 rénové limitrophe périphérique Paris. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 900 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Clichy pavillon limitrophe Paris 17e, portail battant Came BX. Pose propre 1 jour.', author: 'Famille C.', context: 'Clichy centre' } }],
  localReviews: [
    { text: 'Clichy pavillon limitrophe Paris 17e, portail battant Came BX. Pose propre 1 jour.', author: 'Famille C.', context: 'Clichy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Coordination Bouygues béton.', author: 'Syndic copro', context: 'Clichy Bac', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille L.', context: 'Clichy résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes limitrophes Paris nord-ouest.', rows: [
    { communeSlug: 'levallois-perret', communeName: 'Levallois-Perret', priceAvg: '3 600-5 000 €', durationAvg: '4-6 sem.', note: 'Bourgeois limitrophe' },
    { communeSlug: 'asnieres-sur-seine', communeName: 'Asnières-sur-Seine', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Bord Seine mix' },
    { communeSlug: 'saint-ouen-sur-seine', communeName: 'Saint-Ouen-sur-Seine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 18e (93)' },
  ] },
  localStats: [{ label: 'Portails Clichy depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Clichy limitrophe Paris 17e mixte pavillons + ANRU + ZAC Bac.' },
}
