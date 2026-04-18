import type { PremiumCase } from './types'

export const portailsValDoise95Persan: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'persan',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Persan 95', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Persan' },
  heroQuote: { text: 'Persan pavillon, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Persan centre' },
  cityGuide: { intro: `Persan (11 000 habitants, 95 nord) ville bord Oise avec pavillons + copros ANRU + zones industrielles. Demande portails motorisés mix résidentiel + copros.`,
    sections: [
      { heading: 'Persan — bord Oise mixte', body: `55% pavillons individuels, 35% copros ANRU, 10% industriel. Portail battant 3-4 m Came BX dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Persan', location: 'Persan centre', date: 'Juin 2024', description: `Pavillon 1975 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 500 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Persan pavillon, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Persan centre' } }],
  localReviews: [
    { text: 'Persan pavillon, portail battant motorisé Came BX. Pose propre.', author: 'Famille P.', context: 'Persan centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Karim coordination béton.', author: 'Syndic copro', context: 'Persan La Noue', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules. Sécurité.', author: 'Famille M.', context: 'Persan résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95 nord.', rows: [
    { communeSlug: 'beaumont-sur-oise', communeName: 'Beaumont-sur-Oise', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Bord Oise + maisons XIXe' },
    { communeSlug: 'bruyeres-sur-oise', communeName: 'Bruyères-sur-Oise', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Industriel + pavillons' },
    { communeSlug: 'l-isle-adam', communeName: 'L\'Isle-Adam', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Bourgeois' },
  ] },
  localStats: [{ label: 'Portails Persan depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Persan bord Oise mixte pavillons + ANRU.' },
}
