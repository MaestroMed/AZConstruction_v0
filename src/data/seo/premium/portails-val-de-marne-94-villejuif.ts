import type { PremiumCase } from './types'

export const portailsValDeMarne94Villejuif: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'villejuif',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Villejuif 94', caption: 'Coulissant Came motorisé — copro Villejuif' },
  heroQuote: { text: 'Villejuif copro 80 lots, coulissant Came + Vigik intégré. Pose 1 jour.', author: 'Conseil syndical', context: 'Villejuif centre' },
  cityGuide: { intro: `Villejuif (58 000 habitants, 94 limitrophe Paris 13e) ville mixte grandes copros + pavillons + Institut Gustave-Roussy. Demande forte portails copros.`,
    sections: [
      { heading: 'Villejuif — limitrophe Paris 13e', body: `60% copros (grandes résidences + copros ANRU), 40% pavillons. Coulissant motorisé Came + lecteur Vigik dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 800-10 000 €. Battant pavillon : 4 800-7 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m + Vigik — copro 80 lots Villejuif', location: 'Avenue de Paris, Villejuif', date: 'Juin 2024', description: `Copro 80 lots. Coulissant Came BX-241 + lecteur badge Vigik intégré + 5 télécommandes + batterie secours. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Villejuif copro 80 lots, coulissant Came + Vigik intégré. Pose 1 jour.', author: 'Conseil syndical', context: 'Villejuif centre' } }],
  localReviews: [
    { text: 'Villejuif copro 80 lots, coulissant Came + Vigik intégré. Pose 1 jour.', author: 'Conseil syndical', context: 'Villejuif centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail motorisé Nice. Silencieux.', author: 'Famille L.', context: 'Villejuif sud', rating: 5, date: 'Mars 2024' },
    { text: 'Coulissant Came BK-2200 longue portée 8 m copro 150 lots. Pro.', author: 'Gestionnaire syndic', context: 'Villejuif Paul-Vaillant-Couturier', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes limitrophes Paris sud.', rows: [
    { communeSlug: 'le-kremlin-bicetre', communeName: 'Le Kremlin-Bicêtre', priceAvg: '6 200-9 000 €', durationAvg: '10-14 sem.', note: 'Limitrophe Paris 13e' },
    { communeSlug: 'ivry-sur-seine', communeName: 'Ivry-sur-Seine', priceAvg: '6 500-9 500 €', durationAvg: '10-14 sem.', note: 'Limitrophe Paris 13e bord Seine' },
    { communeSlug: 'arcueil', communeName: 'Arcueil', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Pavillonnaire Aqueduc' },
  ] },
  localStats: [{ label: 'Portails Villejuif depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Villejuif limitrophe Paris 13e, copros dominantes.' },
}
