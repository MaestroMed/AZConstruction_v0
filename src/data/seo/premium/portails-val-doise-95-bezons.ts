import type { PremiumCase } from './types'

export const portailsValDoise95Bezons: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'bezons',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Bezons 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Bezons' },
  heroQuote: { text: 'Bezons pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille B.', context: 'Bezons centre' },
  cityGuide: { intro: `Bezons (30 000 habitants, 95 sud limitrophe 92) ville bord Seine avec pavillons + copros ANRU + zone industrielle. Mix chantiers résidentiels + copros.`,
    sections: [
      { heading: 'Bezons — bord Seine mixte', body: `60% pavillons individuels, 30% copros ANRU, 10% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €. Subvention ANRU 30 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Bezons bord Seine', location: 'Bezons bord Seine', date: 'Juin 2024', description: `Pavillon 1960 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Bezons pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille B.', context: 'Bezons centre' } }],
  localReviews: [
    { text: 'Bezons pavillon bord Seine, portail battant motorisé Came BX. Pose propre.', author: 'Famille B.', context: 'Bezons centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Coordination exemplaire.', author: 'Syndic copro', context: 'Bezons Val-Notre-Dame', rating: 5, date: 'Mars 2024' },
    { text: 'Silence 38 dB. Voisins pas réveillés.', author: 'Famille D.', context: 'Bezons résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 sud.', rows: [
    { communeSlug: 'argenteuil', communeName: 'Argenteuil', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine + ANRU' },
    { communeSlug: 'sartrouville', communeName: 'Sartrouville', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois (78)' },
    { communeSlug: 'houilles', communeName: 'Houilles', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Pavillons CSP++ (78)' },
  ] },
  localStats: [{ label: 'Portails Bezons depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bezons bord Seine mixte pavillons + ANRU.' },
}
