import type { PremiumCase } from './types'

export const portailsValDeMarne94ChoisyLeRoi: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'choisy-le-roi',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Choisy-le-Roi 94', caption: 'Portail coulissant 4 m RAL 7016 — copro Choisy' },
  heroQuote: { text: 'Choisy-le-Roi copro ANRU 90 lots, portail coulissant + subvention. Coordination exemplaire.', author: 'Conseil syndical', context: 'Choisy centre' },
  cityGuide: { intro: `Choisy-le-Roi (47 000 habitants, 94 sud) ville bord Seine mixte pavillons + grandes copros ANRU + zones industrielles. Demande portails motorisés + ANRU forte.`,
    sections: [
      { heading: 'Choisy — bord Seine ANRU', body: `40% pavillons individuels, 50% copros ANRU années 60-70, 10% industriel. Portail coulissant 4 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU — copro Choisy-le-Roi', location: 'Choisy centre', date: 'Juillet 2024', description: `Copro 90 lots ANRU 2. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Demathieu Bard. Subvention ANRU 35 % obtenue.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 800 €', duration: '18 sem.', surface: '4 m' }, quote: { text: 'Choisy-le-Roi copro ANRU 90 lots, portail coulissant + subvention. Coordination exemplaire.', author: 'Conseil syndical', context: 'Choisy centre' } }],
  localReviews: [
    { text: 'Choisy-le-Roi copro ANRU 90 lots, portail coulissant + subvention. Coordination exemplaire.', author: 'Conseil syndical', context: 'Choisy centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant 3,5 m pavillon bord Seine. Karim sérieux.', author: 'Famille L.', context: 'Choisy bord Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination Demathieu Bard + ANRU Karim. Sans stress.', author: 'Gestionnaire syndic', context: 'Choisy résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 sud.', rows: [
    { communeSlug: 'orly', communeName: 'Orly', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Aéroport + ANRU' },
    { communeSlug: 'thiais', communeName: 'Thiais', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + commerces' },
    { communeSlug: 'vitry-sur-seine', communeName: 'Vitry-sur-Seine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine + ANRU' },
  ] },
  localStats: [{ label: 'Portails Choisy-le-Roi depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 7 (71 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Choisy-le-Roi bord Seine ANRU 2 actif grandes copros.' },
}
