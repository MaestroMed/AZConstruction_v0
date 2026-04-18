import type { PremiumCase } from './types'

export const portailsSeineEtMarne77ChampsSurMarne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'champs-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Champs-sur-Marne 77', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Champs' },
  heroQuote: { text: 'Champs-sur-Marne pavillon Cité Descartes, portail coulissant Came BK. Pose propre.', author: 'Famille C.', context: 'Champs Descartes' },
  cityGuide: { intro: `Champs-sur-Marne (25 000 habitants, 77) ville Marne-la-Vallée — Château XVIIe + Cité Descartes (universités Paris-Est) + pavillons + copros. Clientèle CSP++ scientifiques + familiale.`,
    sections: [
      { heading: 'Champs — Château Cité Descartes', body: `70% pavillons individuels, 25% copros + logements étudiants, 5% universités. Portail coulissant 4 m + battant 3,5 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Champs-sur-Marne Cité Descartes', location: 'Cité Descartes, Champs', date: 'Juin 2024', description: `Pavillon 1990 rénové Cité Descartes. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 600 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Champs-sur-Marne pavillon Cité Descartes, portail coulissant Came BK. Pose propre.', author: 'Famille C.', context: 'Champs Descartes' } }],
  localReviews: [
    { text: 'Champs-sur-Marne pavillon Cité Descartes, portail coulissant Came BK. Pose propre.', author: 'Famille C.', context: 'Champs Descartes', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Champs résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Champs Château', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes Marne-la-Vallée.', rows: [
    { communeSlug: 'torcy', communeName: 'Torcy', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'noisiel', communeName: 'Noisiel', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Menier + pavillons' },
    { communeSlug: 'lognes', communeName: 'Lognes', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Marne-la-Vallée' },
  ] },
  localStats: [{ label: 'Portails Champs-sur-Marne depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '93 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Champs-sur-Marne Marne-la-Vallée Cité Descartes universités + Château XVIIe.' },
}
