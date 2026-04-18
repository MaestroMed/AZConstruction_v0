import type { PremiumCase } from './types'

export const portailsAisne02Chauny: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'aisne-02',
  communeSlug: 'chauny',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Chauny 02', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Chauny' },
  heroQuote: { text: 'Chauny pavillon industriel, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille C.', context: 'Chauny centre' },
  cityGuide: { intro: `Chauny (11 000 habitants, 02 nord-ouest) ville industrielle historique — miroiterie Saint-Gobain + pavillons cheminots + copros + zones industrielles. Clientèle mixte ouvrière + CSP++.`,
    sections: [
      { heading: 'Chauny — industrielle Saint-Gobain', body: `65% pavillons individuels (cheminots + récents), 25% copros, 10% industriel. Portail coulissant 4 m + battant 3,5 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Chauny', location: 'Chauny centre', date: 'Juin 2024', description: `Pavillon 1965 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Chauny pavillon industriel, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille C.', context: 'Chauny centre' } }],
  localReviews: [
    { text: 'Chauny pavillon industriel, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille C.', context: 'Chauny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Chauny cheminot', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Chauny résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 02 centre.', rows: [
    { communeSlug: 'tergnier', communeName: 'Tergnier', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Cheminote' },
    { communeSlug: 'la-fere', communeName: 'La Fère', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Petite ville' },
    { communeSlug: 'saint-quentin', communeName: 'Saint-Quentin', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Plus grande ville 02' },
  ] },
  localStats: [{ label: 'Portails Chauny depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '88 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Chauny 02 industrielle Saint-Gobain miroiterie pavillons cheminots.' },
}
