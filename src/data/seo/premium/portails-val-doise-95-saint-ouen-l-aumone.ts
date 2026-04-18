import type { PremiumCase } from './types'

export const portailsValDoise95SaintOuenLAumone: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'saint-ouen-l-aumone',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Saint-Ouen-l\'Aumône 95', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Saint-Ouen' },
  heroQuote: { text: 'Saint-Ouen-l\'Aumône pavillon, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille S.', context: 'Saint-Ouen centre' },
  cityGuide: { intro: `Saint-Ouen-l'Aumône (25 000 habitants, 95) ville limitrophe Cergy avec pavillons + copros + grandes zones industrielles. Demande mix résidentiel + portails industriels.`,
    sections: [
      { heading: 'Saint-Ouen — Cergy mixte industriel', body: `55% pavillons individuels, 25% copros, 20% industriel. Portail coulissant 4-6 m dominant (accès industriels + pavillons).` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Industriel 6 m : 6 800-9 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Saint-Ouen-l\'Aumône', location: 'Saint-Ouen centre', date: 'Juin 2024', description: `Pavillon 1980 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 400 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Saint-Ouen-l\'Aumône pavillon, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille S.', context: 'Saint-Ouen centre' } }],
  localReviews: [
    { text: 'Saint-Ouen-l\'Aumône pavillon, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille S.', context: 'Saint-Ouen centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 6 m entrepôt industriel. Karim solide.', author: 'Gestionnaire logistique', context: 'Saint-Ouen ZA', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes + photocellules. Sécurité top.', author: 'Famille L.', context: 'Saint-Ouen résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 Cergy.', rows: [
    { communeSlug: 'cergy', communeName: 'Cergy', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Préfecture 95' },
    { communeSlug: 'pontoise', communeName: 'Pontoise', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Patrimoine + pavillons' },
    { communeSlug: 'eragny', communeName: 'Éragny', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Saint-Ouen-l\'Aumône depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part industriels', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Saint-Ouen-l\'Aumône Cergy mixte industriel + résidentiel.' },
}
