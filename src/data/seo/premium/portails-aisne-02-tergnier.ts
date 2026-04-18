import type { PremiumCase } from './types'

export const portailsAisne02Tergnier: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'aisne-02',
  communeSlug: 'tergnier',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Tergnier 02', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Tergnier' },
  heroQuote: { text: 'Tergnier pavillon cheminot, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille T.', context: 'Tergnier centre' },
  cityGuide: { intro: `Tergnier (14 000 habitants, 02) ville cheminote historique nœud ferroviaire. Pavillons années 20-60 cheminots + copros ANRU + zones industrielles.`,
    sections: [
      { heading: 'Tergnier — cheminote industrielle', body: `55% pavillons cheminots, 30% copros ANRU, 15% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Tergnier', location: 'Tergnier centre', date: 'Juin 2024', description: `Pavillon cheminot 1955 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Tergnier pavillon cheminot, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille T.', context: 'Tergnier centre' } }],
  localReviews: [
    { text: 'Tergnier pavillon cheminot, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille T.', context: 'Tergnier centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Tergnier Fargniers', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux. Équipe propre.', author: 'Famille M.', context: 'Tergnier résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 02 centre.', rows: [
    { communeSlug: 'chauny', communeName: 'Chauny', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Industriel' },
    { communeSlug: 'saint-quentin', communeName: 'Saint-Quentin', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Plus grande ville 02' },
    { communeSlug: 'la-fere', communeName: 'La Fère', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Petite ville' },
  ] },
  localStats: [{ label: 'Portails Tergnier depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Tergnier cheminote industrielle nœud ferroviaire.' },
}
