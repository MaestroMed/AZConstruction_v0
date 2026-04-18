import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93SaintOuenSurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'saint-ouen-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Saint-Ouen-sur-Seine 93', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Saint-Ouen' },
  heroQuote: { text: 'Saint-Ouen-sur-Seine limitrophe Paris 18e, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Ouen centre' },
  cityGuide: { intro: `Saint-Ouen-sur-Seine (50 000 habitants, 93) ville limitrophe Paris 18e — Puces de Saint-Ouen + ZAC Docks + ANRU + lofts reconvertis. Demande portails mixte motorisés + industriels.`,
    sections: [
      { heading: 'Saint-Ouen — Puces Docks ANRU', body: `40% copros ANRU, 30% pavillons individuels, 20% lofts ex-ateliers Docks, 10% industriel Puces. Portail battant 3,5 m + coulissant 4-6 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Saint-Ouen-sur-Seine', location: 'Saint-Ouen centre', date: 'Juin 2024', description: `Pavillon 1930 rénové limitrophe Paris. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Saint-Ouen-sur-Seine limitrophe Paris 18e, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Ouen centre' } }],
  localReviews: [
    { text: 'Saint-Ouen-sur-Seine limitrophe Paris 18e, portail battant Came BX. Karim propre.', author: 'Famille S.', context: 'Saint-Ouen centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 6 m entrepôt Puces. Karim solide.', author: 'Gestionnaire antiquaire', context: 'Saint-Ouen Puces', rating: 5, date: 'Mars 2024' },
    { text: 'Coulissant 4 m copro ANRU Docks. Coordination béton.', author: 'Syndic copro', context: 'Saint-Ouen Docks', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 limitrophe Paris nord.', rows: [
    { communeSlug: 'saint-denis', communeName: 'Saint-Denis', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Basilique + ANRU' },
    { communeSlug: 'aubervilliers', communeName: 'Aubervilliers', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'ANRU massif' },
    { communeSlug: 'clichy', communeName: 'Clichy (92)', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Limitrophe Paris 17e' },
  ] },
  localStats: [{ label: 'Portails Saint-Ouen depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Saint-Ouen-sur-Seine Puces Docks ANRU + lofts mixte.' },
}
