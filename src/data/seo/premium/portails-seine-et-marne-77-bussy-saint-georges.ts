import type { PremiumCase } from './types'

export const portailsSeineEtMarne77BussySaintGeorges: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'bussy-saint-georges',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Bussy-Saint-Georges 77', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Bussy' },
  heroQuote: { text: 'Bussy-Saint-Georges pavillon récent, portail coulissant motorisé Came BK. Famille ravie.', author: 'Famille K.', context: 'Bussy centre' },
  cityGuide: { intro: `Bussy-Saint-Georges (28 000 habitants, 77 ouest) ville récente Marne-la-Vallée avec pavillons années 2000-2010 + communauté asiatique importante. Demande portails coulissants motorisés en hausse.`,
    sections: [
      { heading: 'Bussy — Marne-la-Vallée récente', body: `85% pavillons individuels récents, 10% copros, 5% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant motorisé — pavillon Bussy centre', location: 'Bussy centre', date: 'Juin 2024', description: `Pavillon 2005 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Bussy-Saint-Georges pavillon récent, portail coulissant motorisé Came BK. Famille ravie.', author: 'Famille K.', context: 'Bussy centre' } }],
  localReviews: [
    { text: 'Bussy-Saint-Georges pavillon récent, portail coulissant motorisé Came BK. Famille ravie.', author: 'Famille K.', context: 'Bussy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + motorisation Came BX. Silence 38 dB.', author: 'Famille L.', context: 'Bussy Sycomores', rating: 5, date: 'Mars 2024' },
    { text: 'Coulissant + télécommandes badges. Karim sérieux.', author: 'Famille N.', context: 'Bussy résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes Marne-la-Vallée est.', rows: [
    { communeSlug: 'chanteloup-en-brie', communeName: 'Chanteloup-en-Brie', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons récents' },
    { communeSlug: 'guermantes', communeName: 'Guermantes', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Bourgeois' },
    { communeSlug: 'lognes', communeName: 'Lognes', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Marne-la-Vallée' },
  ] },
  localStats: [{ label: 'Portails Bussy depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bussy-Saint-Georges Marne-la-Vallée récente + communauté asiatique.' },
}
