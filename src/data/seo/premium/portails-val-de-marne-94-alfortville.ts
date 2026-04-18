import type { PremiumCase } from './types'

export const portailsValDeMarne94Alfortville: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'alfortville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Alfortville 94', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Alfortville' },
  heroQuote: { text: 'Alfortville pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Alfortville centre' },
  cityGuide: { intro: `Alfortville (45 000 habitants, 94 nord) ville mixte pavillons + copros + communauté arménienne importante. Limitrophe Charenton/Maisons-Alfort. Demande portails motorisés stable.`,
    sections: [
      { heading: 'Alfortville — bord Seine mixte', body: `50% pavillons individuels, 45% copros centre, 5% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Alfortville bord Seine', location: 'Alfortville centre', date: 'Juin 2024', description: `Pavillon 1935 rénové bord Seine. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Alfortville pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Alfortville centre' } }],
  localReviews: [
    { text: 'Alfortville pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille A.', context: 'Alfortville centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Famille satisfaite.', author: 'Famille L.', context: 'Alfortville résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Silence 38 dB. Voisins pas réveillés.', author: 'Famille M.', context: 'Alfortville limitrophe Maisons-Alfort', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 nord.', rows: [
    { communeSlug: 'maisons-alfort', communeName: 'Maisons-Alfort', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Bord Seine bourgeois' },
    { communeSlug: 'creteil', communeName: 'Créteil', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Préfecture 94' },
  ] },
  localStats: [{ label: 'Portails Alfortville depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Alfortville bord Seine communauté arménienne mixte.' },
}
