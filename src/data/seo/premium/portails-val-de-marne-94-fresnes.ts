import type { PremiumCase } from './types'

export const portailsValDeMarne94Fresnes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'fresnes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Fresnes 94', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Fresnes' },
  heroQuote: { text: 'Fresnes pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille F.', context: 'Fresnes centre' },
  cityGuide: { intro: `Fresnes (27 000 habitants, 94 sud) ville mixte pavillons individuels + copros + zones d'activité (pharmacie Sanofi) + Maison d'arrêt. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Fresnes — pavillonnaire + ZA Sanofi', body: `70% pavillons individuels, 20% copros centre, 10% industriel/ZA. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Fresnes', location: 'Fresnes centre', date: 'Juin 2024', description: `Pavillon 1960 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Fresnes pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille F.', context: 'Fresnes centre' } }],
  localReviews: [
    { text: 'Fresnes pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille F.', context: 'Fresnes centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Fresnes résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille M.', context: 'Fresnes limitrophe Antony', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 sud.', rows: [
    { communeSlug: 'antony', communeName: 'Antony (92)', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Limitrophe bourgeois' },
    { communeSlug: 'l-hay-les-roses', communeName: 'L\'Haÿ-les-Roses', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + Roseraie' },
    { communeSlug: 'rungis', communeName: 'Rungis', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Marché + industriel' },
  ] },
  localStats: [{ label: 'Portails Fresnes depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Fresnes 94 sud pavillonnaire + ZA Sanofi.' },
}
