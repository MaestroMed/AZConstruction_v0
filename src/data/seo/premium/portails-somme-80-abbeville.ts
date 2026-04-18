import type { PremiumCase } from './types'

export const portailsSomme80Abbeville: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'somme-80',
  communeSlug: 'abbeville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Abbeville 80', caption: 'Battant double vantail — pavillon Abbeville' },
  heroQuote: { text: 'Abbeville pavillon, battant double vantail acier. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Abbeville centre' },
  cityGuide: { intro: `Abbeville (23 000 habitants, 80) sous-préfecture Somme, ville historique baie de Somme. Pavillons + maisons centre dominent. Demande équilibrée portails.`,
    sections: [
      { heading: 'Abbeville — baie de Somme', body: `75% pavillons individuels, 25% maisons centre + petites copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Abbeville', location: 'Centre Abbeville', date: 'Juin 2024', description: `Remplacement portail PVC vétuste pavillon. Battant acier RAL 7016, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Abbeville pavillon, battant double vantail acier. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Abbeville centre' } }],
  localReviews: [
    { text: 'Abbeville pavillon, battant double vantail acier. Équipe AZ pro, pose 1 jour.', author: 'Famille B.', context: 'Abbeville centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came pavillon. Silencieux et durable.', author: 'Famille R.', context: 'Abbeville sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent L.', context: 'Abbeville résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 80.', rows: [
    { communeSlug: 'amiens', communeName: 'Amiens', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Préfecture Hauts-de-France' },
    { communeSlug: 'cayeux-sur-mer', communeName: 'Cayeux-sur-Mer', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Bord mer baie Somme' },
    { communeSlug: 'saint-valery-sur-somme', communeName: 'Saint-Valery-sur-Somme', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Bord baie Somme' },
  ] },
  localStats: [{ label: 'Portails Abbeville depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '160 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Abbeville baie de Somme, pavillons résidentiel.' },
}
