import type { PremiumCase } from './types'

export const portailsValDoise95Ermont: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'ermont',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Ermont 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Ermont' },
  heroQuote: { text: 'Ermont pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille E.', context: 'Ermont centre' },
  cityGuide: { intro: `Ermont (28 000 habitants, 95) ville pavillonnaire avec pavillons années 50-80 + copros centre + gares RER C/H. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Ermont — pavillonnaire RER', body: `75% pavillons individuels, 20% copros centre, 5% commerces. Portail battant 3,5 m Came BX dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Ermont', location: 'Ermont centre', date: 'Juin 2024', description: `Pavillon 1965 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 600 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Ermont pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille E.', context: 'Ermont centre' } }],
  localReviews: [
    { text: 'Ermont pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille E.', context: 'Ermont centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Voisinage RER apprécié silence.', author: 'Famille M.', context: 'Ermont-Eaubonne gare', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim pro.', author: 'Famille D.', context: 'Ermont résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 sud.', rows: [
    { communeSlug: 'eaubonne', communeName: 'Eaubonne', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bourgeois limitrophe' },
    { communeSlug: 'sannois', communeName: 'Sannois', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'franconville', communeName: 'Franconville', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons centre' },
  ] },
  localStats: [{ label: 'Portails Ermont depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Ermont pavillonnaire RER C/H Ermont-Eaubonne.' },
}
