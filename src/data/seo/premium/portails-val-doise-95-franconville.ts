import type { PremiumCase } from './types'

export const portailsValDoise95Franconville: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'franconville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Franconville 95', caption: 'Battant double vantail — pavillon Franconville' },
  heroQuote: { text: 'Franconville pavillon, battant double vantail acier. Pose 1 jour propre.', author: 'Famille L.', context: 'Franconville centre' },
  cityGuide: { intro: `Franconville (35 000 habitants, 95) ville résidentielle pavillonnaire avec quelques copros. Demande équilibrée portails battants/coulissants.`,
    sections: [
      { heading: 'Franconville — pavillonnaire', body: `75% pavillons individuels, 25% petites copros. Battant double vantail acier dominant. Coulissant motorisé en hausse pour pavillons larges.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant pavillon : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m — pavillon Franconville', location: 'Franconville centre', date: 'Juin 2024', description: `Remplacement portail PVC vétuste. Battant double vantail acier RAL 7016 anthracite, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '6 sem.', surface: '4 m' }, quote: { text: 'Franconville pavillon, battant double vantail acier. Pose 1 jour propre.', author: 'Famille L.', context: 'Franconville centre' } }],
  localReviews: [
    { text: 'Franconville pavillon, battant double vantail acier. Pose 1 jour propre.', author: 'Famille L.', context: 'Franconville centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came. Silencieux, télécommandes 4 boutons.', author: 'Famille P.', context: 'Franconville sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon. Sans rail au sol, propre et durable.', author: 'Vincent M.', context: 'Franconville résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95.', rows: [
    { communeSlug: 'ermont', communeName: 'Ermont', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'sannois', communeName: 'Sannois', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'cormeilles-en-parisis', communeName: 'Cormeilles-en-Parisis', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Pavillons hauts' },
  ] },
  localStats: [{ label: 'Portails Franconville depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Franconville pavillonnaire dominant.' },
}
