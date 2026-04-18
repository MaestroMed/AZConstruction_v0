import type { PremiumCase } from './types'

export const portailsValDeMarne94LePlessisTrevise: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'le-plessis-trevise',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Le Plessis-Trévise 94', caption: 'Battant double vantail — pavillon Le Plessis-Trévise' },
  heroQuote: { text: 'Le Plessis-Trévise pavillon, battant motorisé propre. Pose 1 jour.', author: 'Famille B.', context: 'Le Plessis-Trévise centre' },
  cityGuide: { intro: `Le Plessis-Trévise (20 000 habitants, 94 est) ville résidentielle pavillonnaire avec bois + ancien parc château. Pavillons CSP+ dominants. Demande portails battants + coulissants.`,
    sections: [
      { heading: 'Le Plessis-Trévise — pavillonnaire est', body: `90% pavillons individuels, 10% copros rares. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Le Plessis-Trévise', location: 'Centre Le Plessis-Trévise', date: 'Juin 2024', description: `Pavillon 1975 rénové. Battant acier RAL 7016 + motorisation Nice. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Le Plessis-Trévise pavillon, battant motorisé propre. Pose 1 jour.', author: 'Famille B.', context: 'Le Plessis-Trévise centre' } }],
  localReviews: [
    { text: 'Le Plessis-Trévise pavillon, battant motorisé propre. Pose 1 jour.', author: 'Famille B.', context: 'Le Plessis-Trévise centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 pavillon résidentiel. Silencieux 38 dB.', author: 'Famille R.', context: 'Le Plessis sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail, look contemporain.', author: 'Vincent T.', context: 'Le Plessis résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 est.', rows: [
    { communeSlug: 'ormesson-sur-marne', communeName: 'Ormesson-sur-Marne', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'villiers-sur-marne', communeName: 'Villiers-sur-Marne', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'la-queue-en-brie', communeName: 'La Queue-en-Brie', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Le Plessis-Trévise depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Le Plessis-Trévise pavillonnaire est 94.' },
}
