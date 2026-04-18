import type { PremiumCase } from './types'

export const portailsYvelines78Vernouillet: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'vernouillet',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Vernouillet 78', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Vernouillet 78' },
  heroQuote: { text: 'Vernouillet (78) pavillon bord Seine, portail battant Came BX. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre' },
  cityGuide: { intro: `Vernouillet (10 000 habitants, 78 nord-ouest — distinct de Vernouillet 28) ville bord Seine résidentielle pavillonnaire + copros + golf. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Vernouillet 78 — bord Seine pavillonnaire', body: `85% pavillons individuels, 10% copros centre, 5% golf/commerces. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Vernouillet 78 bord Seine', location: 'Vernouillet 78 centre', date: 'Juin 2024', description: `Pavillon 1975 rénové bord Seine. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Vernouillet (78) pavillon bord Seine, portail battant Came BX. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre' } }],
  localReviews: [
    { text: 'Vernouillet (78) pavillon bord Seine, portail battant Came BX. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Vernouillet golf', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Vernouillet résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 nord-ouest.', rows: [
    { communeSlug: 'triel-sur-seine', communeName: 'Triel-sur-Seine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine pavillons' },
    { communeSlug: 'verneuil-sur-seine', communeName: 'Verneuil-sur-Seine', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'orgeval', communeName: 'Orgeval', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Vernouillet 78 depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Vernouillet 78 bord Seine (distinct de Vernouillet 28) pavillonnaire + golf.' },
}
