import type { PremiumCase } from './types'

export const escaliersHautsDeSeine92Clamart: PremiumCase = {
  productSlug: 'escaliers',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'clamart',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Escalier acier — Clamart 92', caption: 'Hélicoïdal acier + chêne huilé — pavillon Clamart' },
  heroQuote: { text: 'Hélicoïdal Ø 1,40 m + chêne dans notre pavillon rénové. Soudures TIG visibles meulées.', author: 'Famille C.', context: 'Pavillon centre Clamart' },
  cityGuide: {
    intro: `Clamart (53 000 habitants, 92 sud) compte beaucoup de pavillons individuels en rénovation depuis la gentrification post-Tramway T6. Demande croissante d'escaliers métalliques sur-mesure pour duplex/mezzanines.`,
    sections: [
      { heading: 'Clamart — pavillons rénovés', body: `60% pavillons en rénovation, 40% petites copros. Hélicoïdaux Ø 1,30-1,50 m dominants pour mezzanines.` },
      { heading: 'Tarifs Clamart', body: `Hélicoïdal + chêne : 5 800-8 500 €. Droit suspendu : 6 200-9 000 €. Quart-tournant : 5 500-8 000 €.` },
    ],
  },
  caseStudies: [{ title: 'Hélicoïdal Ø 1,40 m + chêne — pavillon Clamart', location: 'Centre Clamart', date: 'Juin 2024', description: `Création hélicoïdal pour mezzanine pavillon. Marches chêne huilé Osmo. Pose 1 jour propre.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '10 sem.', surface: '14 marches Ø 1,40 m' }, quote: { text: 'Hélicoïdal Ø 1,40 m + chêne dans notre pavillon rénové. Soudures TIG visibles meulées.', author: 'Famille C.', context: 'Centre Clamart' } }],
  localReviews: [
    { text: 'Hélicoïdal Ø 1,40 m + chêne dans notre pavillon rénové. Soudures TIG visibles meulées.', author: 'Famille C.', context: 'Centre Clamart', rating: 5, date: 'Juin 2024' },
    { text: 'Escalier droit suspendu marches tôle pliée. Look industriel parfait pour notre loft.', author: 'Hugo M.', context: 'Bas-Clamart', rating: 5, date: 'Mars 2024' },
    { text: 'Quart-tournant marches bois chez nous. Pose en 2 jours sans casse.', author: 'Camille D.', context: 'Haut-Clamart', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Escaliers communes voisines 92 sud.', rows: [
    { communeSlug: 'meudon', communeName: 'Meudon', priceAvg: '5 500-9 000 €', durationAvg: '8-12 sem.', note: 'Pavillons coteaux Meudon' },
    { communeSlug: 'malakoff', communeName: 'Malakoff', priceAvg: '5 200-8 500 €', durationAvg: '8-12 sem.', note: 'Tissu mixte populaire/gentrifié' },
    { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '5 500-8 800 €', durationAvg: '8-12 sem.', note: 'Pavillons résidentiels' },
  ] },
  localStats: [{ label: 'Escaliers Clamart depuis 2020', value: '~10' }, { label: 'Note moyenne Clamart', value: '4,9 / 5' }, { label: 'Part hélicoïdaux', value: '50 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible pavillons rénovés Clamart post-T6.' },
}
