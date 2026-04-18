import type { PremiumCase } from './types'

export const portailsHautsDeSeine92SaintCloud: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'saint-cloud',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Saint-Cloud 92', caption: 'Battant double vantail — pavillon Saint-Cloud Domaine' },
  heroQuote: { text: 'Saint-Cloud pavillon Domaine, battant double vantail acier. Cohérence patrimoine.', author: 'Famille de V.', context: 'Saint-Cloud Domaine' },
  cityGuide: { intro: `Saint-Cloud (30 000 habitants, 92 ouest) ville résidentielle CSP++ avec Domaine national + hippodrome. Pavillons bourgeois XIXe-XXe + copros premium. Clientèle haut standing.`,
    sections: [
      { heading: 'Saint-Cloud — Domaine + Coutureau', body: `80% pavillons individuels haut de gamme (Domaine + Coutureau + Montretout), 20% copros. Battant double vantail acier + motorisation Nice/Came.` },
      { heading: 'Tarifs', body: `Battant pavillon : 5 500-8 500 €. Coulissant : 6 500-10 000 €. Autoportant : 9 000-14 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Saint-Cloud Domaine', location: 'Domaine, Saint-Cloud', date: 'Juillet 2024', description: `Pavillon bourgeois 1925 Domaine. Battant acier RAL 6005 vert mousse (cohérence paysage Domaine). Motorisation Nice à bras cachée.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 200 €', duration: '8 sem.', surface: '4 m' }, quote: { text: 'Saint-Cloud pavillon Domaine, battant double vantail acier. Cohérence patrimoine.', author: 'Famille de V.', context: 'Saint-Cloud Domaine' } }],
  localReviews: [
    { text: 'Saint-Cloud pavillon Domaine, battant double vantail acier. Cohérence patrimoine.', author: 'Famille de V.', context: 'Saint-Cloud Domaine', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant motorisé Came BX-241 pavillon Coutureau. Silencieux et discret.', author: 'Famille B.', context: 'Coutureau, Saint-Cloud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon Montretout. Sans rail au sol, esthétique top.', author: 'Hugo P.', context: 'Montretout, Saint-Cloud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 ouest.', rows: [
    { communeSlug: 'garches', communeName: 'Garches', priceAvg: '6 000-10 000 €', durationAvg: '10-14 sem.', note: 'CSP++ pavillons bourgeois' },
    { communeSlug: 'marnes-la-coquette', communeName: 'Marnes-la-Coquette', priceAvg: '7 500-13 000 €', durationAvg: '12-16 sem.', note: 'CSP+++ ultra-luxe' },
    { communeSlug: 'rueil-malmaison', communeName: 'Rueil-Malmaison', priceAvg: '6 500-11 000 €', durationAvg: '12-16 sem.', note: 'CSP++ bord Seine' },
  ] },
  localStats: [{ label: 'Portails Saint-Cloud depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Saint-Cloud CSP++ Domaine + Coutureau.' },
}
