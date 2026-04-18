import type { PremiumCase } from './types'

export const portailsValDoise95CormeillesEnParisis: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'cormeilles-en-parisis',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Cormeilles-en-Parisis 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Cormeilles' },
  heroQuote: { text: 'Cormeilles-en-Parisis pavillon bourgeois, portail battant Came BX. Pose propre.', author: 'Famille C.', context: 'Cormeilles centre' },
  cityGuide: { intro: `Cormeilles-en-Parisis (25 000 habitants, 95) ville résidentielle pavillonnaire bourgeoise coteaux + carrières — pavillons XIXe-XXe + quartiers récents. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Cormeilles — coteaux pavillonnaire bourgeois', body: `82% pavillons individuels, 15% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Cormeilles-en-Parisis', location: 'Cormeilles centre', date: 'Juin 2024', description: `Pavillon bourgeois 1935 rénové coteaux. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 000 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Cormeilles-en-Parisis pavillon bourgeois, portail battant Came BX. Pose propre.', author: 'Famille C.', context: 'Cormeilles centre' } }],
  localReviews: [
    { text: 'Cormeilles-en-Parisis pavillon bourgeois, portail battant Came BX. Pose propre.', author: 'Famille C.', context: 'Cormeilles centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Cormeilles coteaux', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Cormeilles résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 ouest.', rows: [
    { communeSlug: 'la-frette-sur-seine', communeName: 'La Frette-sur-Seine', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Bord Seine CSP++' },
    { communeSlug: 'herblay', communeName: 'Herblay', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Bord Seine pavillons' },
    { communeSlug: 'sannois', communeName: 'Sannois', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
  ] },
  localStats: [{ label: 'Portails Cormeilles-en-Parisis depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '93 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cormeilles-en-Parisis 95 coteaux pavillonnaire bourgeois CSP++.' },
}
