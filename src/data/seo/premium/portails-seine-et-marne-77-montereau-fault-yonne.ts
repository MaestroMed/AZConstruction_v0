import type { PremiumCase } from './types'

export const portailsSeineEtMarne77MontereauFaultYonne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'montereau-fault-yonne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant acier — Montereau-Fault-Yonne 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Montereau' },
  heroQuote: { text: 'Montereau pavillon bord Yonne, portail battant motorisé Came BX. Pose propre 1 jour.', author: 'Famille M.', context: 'Montereau centre' },
  cityGuide: { intro: `Montereau-Fault-Yonne (21 000 habitants, 77 sud) ville confluence Seine/Yonne avec pavillons individuels + copros ANRU. Demande portails battants classiques stable.`,
    sections: [
      { heading: 'Montereau — confluence Seine-Yonne', body: `75% pavillons individuels, 20% copros ANRU, 5% industriel. Portail battant 3-4 m RAL 7016 Came BX-241 dominant.` },
      { heading: 'Tarifs', body: `Portail battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 % sur copros.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Montereau bord Yonne', location: 'Centre Montereau', date: 'Juin 2024', description: `Pavillon 1970 rénové bord Yonne. Portail battant 3,5 m RAL 7016 gris anthracite + motorisation Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Montereau pavillon bord Yonne, portail battant motorisé Came BX. Pose propre 1 jour.', author: 'Famille M.', context: 'Montereau centre' } }],
  localReviews: [
    { text: 'Montereau pavillon bord Yonne, portail battant motorisé Came BX. Pose propre 1 jour.', author: 'Famille M.', context: 'Montereau centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Karim a tout coordonné.', author: 'Syndic copro', context: 'Montereau La Ville-Haute', rating: 5, date: 'Mars 2024' },
    { text: 'Motorisation Came silence 38 dB. Famille satisfaite.', author: 'Famille D.', context: 'Montereau Surville', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 sud.', rows: [
    { communeSlug: 'fontainebleau', communeName: 'Fontainebleau', priceAvg: '3 800-5 200 €', durationAvg: '4-6 sem.', note: 'Royale ABF Château' },
    { communeSlug: 'nemours', communeName: 'Nemours', priceAvg: '3 200-4 500 €', durationAvg: '4-5 sem.', note: 'Pavillons + bord Loing' },
    { communeSlug: 'melun', communeName: 'Melun', priceAvg: '3 300-4 600 €', durationAvg: '4-5 sem.', note: 'Préfecture 77' },
  ] },
  localStats: [{ label: 'Portails Montereau depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Montereau pavillons bord Yonne.' },
}
