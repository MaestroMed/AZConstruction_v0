import type { PremiumCase } from './types'

export const portailsValDoise95Herblay: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'herblay',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Herblay 95', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Herblay' },
  heroQuote: { text: 'Herblay pavillon bord Seine, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille H.', context: 'Herblay centre' },
  cityGuide: { intro: `Herblay-sur-Seine (30 000 habitants, 95) ville résidentielle bord Seine avec pavillons bourgeois + coteaux + copros récentes. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Herblay — bord Seine pavillonnaire', body: `85% pavillons individuels, 10% copros, 5% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Herblay bord Seine', location: 'Herblay bord Seine', date: 'Juin 2024', description: `Pavillon 1985 rénové coteaux Seine. Portail coulissant 4 m RAL 7016 + Came BK-2200. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Herblay pavillon bord Seine, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille H.', context: 'Herblay centre' } }],
  localReviews: [
    { text: 'Herblay pavillon bord Seine, portail coulissant motorisé Came BK. Famille satisfaite.', author: 'Famille H.', context: 'Herblay centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille R.', context: 'Herblay coteaux', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux, équipe propre.', author: 'Famille N.', context: 'Herblay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 ouest.', rows: [
    { communeSlug: 'cormeilles-en-parisis', communeName: 'Cormeilles-en-Parisis', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'la-frette-sur-seine', communeName: 'La Frette-sur-Seine', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Bord Seine CSP++' },
    { communeSlug: 'montigny-les-cormeilles', communeName: 'Montigny-lès-Cormeilles', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Herblay depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Herblay bord Seine coteaux pavillonnaire.' },
}
