import type { PremiumCase } from './types'

export const portailsSeineEtMarne77DammarieLesLys: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'dammarie-les-lys',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Dammarie-lès-Lys 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Dammarie' },
  heroQuote: { text: 'Dammarie-lès-Lys pavillon limitrophe Melun, portail battant Came BX. Pose propre.', author: 'Famille D.', context: 'Dammarie centre' },
  cityGuide: { intro: `Dammarie-lès-Lys (22 000 habitants, 77) ville limitrophe Melun — pavillons + copros ANRU Abbaye + zones d'activité. Demande portails motorisés + ANRU mixte.`,
    sections: [
      { heading: 'Dammarie — limitrophe Melun ANRU', body: `55% pavillons individuels, 40% copros ANRU années 60-70, 5% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Dammarie-lès-Lys', location: 'Dammarie centre', date: 'Juin 2024', description: `Pavillon 1970 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Dammarie-lès-Lys pavillon limitrophe Melun, portail battant Came BX. Pose propre.', author: 'Famille D.', context: 'Dammarie centre' } }],
  localReviews: [
    { text: 'Dammarie-lès-Lys pavillon limitrophe Melun, portail battant Came BX. Pose propre.', author: 'Famille D.', context: 'Dammarie centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Karim coordination.', author: 'Syndic copro', context: 'Dammarie Abbaye', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Famille ravie.', author: 'Famille L.', context: 'Dammarie résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 sud Melun.', rows: [
    { communeSlug: 'melun', communeName: 'Melun', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Préfecture 77' },
    { communeSlug: 'le-mee-sur-seine', communeName: 'Le Mée-sur-Seine', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Bord Seine + ANRU' },
    { communeSlug: 'vaux-le-penil', communeName: 'Vaux-le-Pénil', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Dammarie depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '91 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Dammarie-lès-Lys 77 limitrophe Melun ANRU Abbaye + pavillons.' },
}
