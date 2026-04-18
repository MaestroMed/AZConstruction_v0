import type { PremiumCase } from './types'

export const portailsSeineEtMarne77Lognes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'lognes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Lognes 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Lognes' },
  heroQuote: { text: 'Lognes Marne-la-Vallée pavillon, portail battant Came BX. Pose propre 1 jour.', author: 'Famille L.', context: 'Lognes Maisonnettes' },
  cityGuide: { intro: `Lognes (14 000 habitants, 77 ouest) ville Marne-la-Vallée avec pavillons ZAC années 80-90 + copros + communauté asiatique importante. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Lognes — Marne-la-Vallée pavillons ZAC', body: `75% pavillons individuels, 20% copros, 5% industriel. Portail battant ou coulissant 3-4 m Came dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Lognes Maisonnettes', location: 'Maisonnettes, Lognes', date: 'Juin 2024', description: `Pavillon 1988 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Lognes Marne-la-Vallée pavillon, portail battant Came BX. Pose propre 1 jour.', author: 'Famille L.', context: 'Lognes Maisonnettes' } }],
  localReviews: [
    { text: 'Lognes Marne-la-Vallée pavillon, portail battant Came BX. Pose propre 1 jour.', author: 'Famille L.', context: 'Lognes Maisonnettes', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + télécommandes 4 badges. Famille satisfaite.', author: 'Famille W.', context: 'Lognes centre', rating: 5, date: 'Mars 2024' },
    { text: 'Silence 38 dB. Voisins pas réveillés.', author: 'Famille C.', context: 'Lognes Segrais', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes Marne-la-Vallée.', rows: [
    { communeSlug: 'torcy', communeName: 'Torcy', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'noisiel', communeName: 'Noisiel', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Marne-la-Vallée' },
    { communeSlug: 'champs-sur-marne', communeName: 'Champs-sur-Marne', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Université' },
  ] },
  localStats: [{ label: 'Portails Lognes depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Lognes Marne-la-Vallée pavillons ZAC + communauté asiatique.' },
}
