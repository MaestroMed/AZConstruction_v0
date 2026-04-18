import type { PremiumCase } from './types'

export const portailsHautsDeSeine92RueilMalmaison: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'rueil-malmaison',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Rueil-Malmaison 92', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Rueil-Malmaison' },
  heroQuote: { text: 'Rueil-Malmaison pavillon bourgeois, portail battant motorisé Came BX. Pose propre.', author: 'Famille de R.', context: 'Rueil centre' },
  cityGuide: { intro: `Rueil-Malmaison (80 000 habitants, 92 ouest) ville résidentielle bourgeoise CSP++ — Château Malmaison (Joséphine) + siège sociaux (Unilever, Schneider) + pavillons. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Rueil — bourgeoise siège sociaux', body: `70% pavillons individuels bourgeois, 25% copros, 5% industriel/sièges. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 500-4 900 €. Coulissant 4 m : 4 500-6 200 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Rueil-Malmaison', location: 'Rueil centre', date: 'Juin 2024', description: `Pavillon bourgeois 1935 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Rueil-Malmaison pavillon bourgeois, portail battant motorisé Came BX. Pose propre.', author: 'Famille de R.', context: 'Rueil centre' } }],
  localReviews: [
    { text: 'Rueil-Malmaison pavillon bourgeois, portail battant motorisé Came BX. Pose propre.', author: 'Famille de R.', context: 'Rueil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Rueil Plaine-Gare', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules. Sécurité.', author: 'Famille M.', context: 'Rueil Bois-Préau', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 ouest CSP++.', rows: [
    { communeSlug: 'nanterre', communeName: 'Nanterre', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'La Défense + pavillons' },
    { communeSlug: 'suresnes', communeName: 'Suresnes', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Bord Seine + bourgeois' },
    { communeSlug: 'saint-cloud', communeName: 'Saint-Cloud', priceAvg: '3 800-5 200 €', durationAvg: '4-6 sem.', note: 'Parc + bourgeois' },
  ] },
  localStats: [{ label: 'Portails Rueil depuis 2020', value: '~16' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '93 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Rueil-Malmaison bourgeoise CSP++ Château Malmaison + sièges sociaux.' },
}
