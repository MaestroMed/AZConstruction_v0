import type { PremiumCase } from './types'

export const gardeCorpsVerreYvelines78Viroflay: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'yvelines-78',
  communeSlug: 'viroflay',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Viroflay 78', caption: 'Verre + acier RAL 7016 — pavillon Viroflay' },
  heroQuote: { text: 'Viroflay pavillon, verre + acier RAL 7016. Finition soignée CSP+.', author: 'Famille R.', context: 'Viroflay centre' },
  cityGuide: { intro: `Viroflay (16 000 habitants, 78 est limitrophe Versailles) ville résidentielle bourgeoise CSP+ avec forêt. Pavillons bourgeois XIXe-XXe + apparts. Demande garde-corps verre en croissance.`,
    sections: [
      { heading: 'Viroflay — pavillons bourgeois forêt', body: `80% pavillons individuels, 20% apparts. Verre + acier RAL 7016 + verre + laiton patiné dominants.` },
      { heading: 'Tarifs', body: `Verre + acier : 450-620 €/ml. Verre + laiton patiné : 600-800 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + acier RAL 7016 12 ml — pavillon Viroflay', location: 'Centre Viroflay', date: 'Juin 2024', description: `Pavillon 1930 rénové. Verre 8+8 + cadre acier RAL 7016 anthracite satiné. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '7 sem.', surface: '12 ml' }, quote: { text: 'Viroflay pavillon, verre + acier RAL 7016. Finition soignée CSP+.', author: 'Famille R.', context: 'Viroflay centre' } }],
  localReviews: [
    { text: 'Viroflay pavillon, verre + acier RAL 7016. Finition soignée CSP+.', author: 'Famille R.', context: 'Viroflay centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + laiton patiné balcon. Cohérence XIXe préservée.', author: 'Famille L.', context: 'Viroflay rive droite', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L systématique + verre 8+8. Durabilité.', author: 'Hugo P.', context: 'Viroflay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines Versailles.', rows: [
    { communeSlug: 'versailles', communeName: 'Versailles', priceAvg: '500-720 €/ml', durationAvg: '10-14 sem.', note: 'Royale UNESCO ABF' },
    { communeSlug: 'chaville', communeName: 'Chaville', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'Limitrophe Viroflay' },
    { communeSlug: 'velizy-villacoublay', communeName: 'Vélizy-Villacoublay', priceAvg: '420-580 €/ml', durationAvg: '6-8 sem.', note: 'Tech IDF' },
  ] },
  localStats: [{ label: 'Garde-corps verre Viroflay depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Viroflay CSP+ pavillons bourgeois limitrophe Versailles.' },
}
