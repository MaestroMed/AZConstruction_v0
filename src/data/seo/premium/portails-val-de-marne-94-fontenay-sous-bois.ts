import type { PremiumCase } from './types'

export const portailsValDeMarne94FontenaySousBois: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'fontenay-sous-bois',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Fontenay-sous-Bois 94', caption: 'Coulissant motorisé Came — pavillon Fontenay' },
  heroQuote: { text: 'Fontenay pavillon, coulissant motorisé silencieux. Pose 1 jour.', author: 'Famille D.', context: 'Fontenay-sous-Bois' },
  cityGuide: { intro: `Fontenay-sous-Bois (54 000 habitants, 94) compte beaucoup de pavillons individuels + petites copros. Demande équilibrée.`,
    sections: [
      { heading: 'Fontenay — pavillons + petites copros', body: `60% pavillons, 40% petites copros. Coulissant + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — pavillon Fontenay', location: 'Centre Fontenay', date: 'Juin 2024', description: `Remplacement portail bois ancien. Coulissant rail motorisé. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 500 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Fontenay pavillon, coulissant motorisé silencieux. Pose 1 jour.', author: 'Famille D.', context: 'Fontenay-sous-Bois' } }],
  localReviews: [
    { text: 'Fontenay pavillon, coulissant motorisé silencieux. Pose 1 jour.', author: 'Famille D.', context: 'Fontenay-sous-Bois', rating: 5, date: 'Juin 2024' },
    { text: 'Battant double vantail copro 30 lots. Pose 1 journée propre.', author: 'Conseil syndical', context: 'Fontenay nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail, top.', author: 'Famille B.', context: 'Fontenay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94.', rows: [
    { communeSlug: 'vincennes', communeName: 'Vincennes', priceAvg: '6 500-12 000 €', durationAvg: '12-16 sem.', note: 'Château ABF zones' },
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '5 800-8 200 €', durationAvg: '10-14 sem.', note: 'Bord Marne premium' },
    { communeSlug: 'rosny-sous-bois', communeName: 'Rosny-sous-Bois', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Portails Fontenay depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Fontenay-sous-Bois mix résidentiel.' },
}
