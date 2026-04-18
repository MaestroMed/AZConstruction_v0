import type { PremiumCase } from './types'

export const portailsEssonne91CorbeilEssonnes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'corbeil-essonnes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Corbeil-Essonnes 91', caption: 'Battant double vantail — pavillon Corbeil' },
  heroQuote: { text: 'Corbeil pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Corbeil-Essonnes centre' },
  cityGuide: { intro: `Corbeil-Essonnes (50 000 habitants, 91) ville mixte sud Essonne avec pavillons + copros + zones industrielles. Demande équilibrée portails résidentiels.`,
    sections: [
      { heading: 'Corbeil — sud Essonne', body: `65% pavillons individuels, 35% petites copros + activités. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Corbeil', location: 'Centre Corbeil', date: 'Juin 2024', description: `Remplacement portail PVC vétuste pavillon. Battant acier RAL 7016, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '6 sem.', surface: '4 m' }, quote: { text: 'Corbeil pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Corbeil-Essonnes' } }],
  localReviews: [
    { text: 'Corbeil pavillon, battant double vantail acier motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Corbeil-Essonnes', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came pavillon. Silencieux, télécommandes 4 boutons.', author: 'Famille R.', context: 'Corbeil sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent L.', context: 'Corbeil résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'evry-courcouronnes', communeName: 'Évry-Courcouronnes', priceAvg: '6 500-9 200 €', durationAvg: '12-16 sem.', note: 'Préfecture, copros' },
    { communeSlug: 'ris-orangis', communeName: 'Ris-Orangis', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'saint-michel-sur-orge', communeName: 'Saint-Michel-sur-Orge', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Corbeil depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Corbeil sud Essonne mix résidentiel.' },
}
