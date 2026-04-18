import type { PremiumCase } from './types'

export const portailsSeineEtMarne77Torcy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'torcy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Torcy 77', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Torcy Marne-la-Vallée' },
  heroQuote: { text: 'Torcy Marne-la-Vallée pavillon récent, portail coulissant 4 m Came BK. Pose propre 1 jour.', author: 'Famille T.', context: 'Torcy Arche-Guédon' },
  cityGuide: { intro: `Torcy (23 000 habitants, 77 ouest) ville Marne-la-Vallée avec pavillons récents ZAC années 80-90 + copros + zones d'activité. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Torcy — Marne-la-Vallée pavillons ZAC', body: `70% pavillons individuels récents, 25% copros, 5% industriel. Portail coulissant 4 m Came BK-2200 dominant.` },
      { heading: 'Tarifs', body: `Portail battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Torcy Arche-Guédon', location: 'Arche-Guédon, Torcy', date: 'Juin 2024', description: `Pavillon ZAC 1995. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif (800 cycles/jour). Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Torcy Marne-la-Vallée pavillon récent, portail coulissant 4 m Came BK. Pose propre 1 jour.', author: 'Famille T.', context: 'Torcy Arche-Guédon' } }],
  localReviews: [
    { text: 'Torcy Marne-la-Vallée pavillon récent, portail coulissant 4 m Came BK. Pose propre 1 jour.', author: 'Famille T.', context: 'Torcy Arche-Guédon', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + motorisation Came BX. Famille ravie.', author: 'Famille L.', context: 'Torcy Luzard', rating: 5, date: 'Mars 2024' },
    { text: 'Silence 38 dB et sécurité enfants. Parfait.', author: 'Famille R.', context: 'Torcy centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes Marne-la-Vallée 77.', rows: [
    { communeSlug: 'noisiel', communeName: 'Noisiel', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'lognes', communeName: 'Lognes', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Marne-la-Vallée RER A' },
    { communeSlug: 'champs-sur-marne', communeName: 'Champs-sur-Marne', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Université + pavillons' },
  ] },
  localStats: [{ label: 'Portails Torcy depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Torcy Marne-la-Vallée pavillons ZAC RER A.' },
}
