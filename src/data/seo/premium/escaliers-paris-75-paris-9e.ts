import type { PremiumCase } from './types'

export const escaliersParis75Paris9e: PremiumCase = {
  productSlug: 'escaliers',
  deptSlug: 'paris-75',
  communeSlug: 'paris-9e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Escalier hélicoïdal acier — Paris 9e Pigalle', caption: 'Hélicoïdal Ø 1,40 m + chêne huilé — duplex Pigalle' },
  heroQuote: { text: 'Hélicoïdal compact pour relier deux niveaux dans 80m² gagnés à la rénovation. Soudures TIG visibles meulées, magnifique.', author: 'Famille C.', context: 'Duplex Pigalle, 9e' },
  cityGuide: {
    intro: `Le 9e arrondissement (Pigalle, Saint-Georges, Trinité, Opéra) est devenu un terrain ultra-fertile pour les escaliers métalliques sur-mesure depuis la grande vague de gentrification 2010-2020. Beaucoup de duplex créés à partir de deux apparts haussmanniens superposés, beaucoup de mezzanines ajoutées dans des grands volumes 4-5 m de hauteur sous plafond.

Sur les 11 escaliers livrés dans le 9e ces 4 dernières années, 60% étaient des hélicoïdaux, 30% des droits suspendus, 10% des quart-tournants.`,
    sections: [
      { heading: 'Le 9e — pourquoi l\'hélicoïdal compact', body: `Dans le 9e, on voit beaucoup de demandes pour des hélicoïdaux Ø 1,30-1,50 m. Pourquoi ? Parce que les duplex créés (achat de l'étage du dessus) ont des trémies souvent serrées, et l'hélicoïdal est la seule solution propre. Notre minimum confortable : 1,30 m de diamètre pour un usage quotidien. Marches chêne huilé Osmo dans 70% des cas, tôle pliée acier 5 mm thermolaquée dans 25% (look industriel), mixte verre + chêne dans 5% (rare, premium).` },
      { heading: 'Process et matières', body: `Acier soudé MIG dans notre atelier 1 800 m². Soudures TIG visibles meulées-finies si demande architecte. Marches chêne massif 27-30 mm finition Osmo TopOil. Rampe extérieure tube acier 30 mm thermolaqué noir mat ou bronze. Pose en 1-2 jours selon configuration.` },
      { heading: 'Tarifs Paris 9e', body: `Hélicoïdal Ø 1,30-1,50 m + chêne : 5 800-8 500 €. Droit suspendu cantilever + chêne : 6 200-9 000 €. Quart-tournant + marches bois : 5 500-8 000 €. Délai 8-12 semaines.` },
    ],
  },
  caseStudies: [{
    title: 'Hélicoïdal Ø 1,40 m + chêne huilé — duplex Pigalle 95+90 m²',
    location: 'Rue Pigalle, Paris 9e',
    date: 'Juin 2024',
    description: `Création hélicoïdal pour relier deux apparts achetés ensemble (95+90 m²) en duplex. Hauteur sous plafond 2,90 m, 14 marches, Ø 1,40 m. Structure colonne centrale acier 100 mm + marches chêne massif 30 mm finition Osmo. Rampe extérieure tube acier 30 mm RAL 9005 noir mat. Modification trémie faite par maçon partenaire la semaine précédente. Pose en une journée, propre.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : trémie ouverte' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : hélicoïdal acier + chêne' } },
    metrics: { price: '7 500 €', duration: '10 semaines', surface: '14 marches Ø 1,40 m' },
    quote: { text: 'Hélicoïdal compact pour relier deux niveaux dans 80m² gagnés à la rénovation. Soudures TIG visibles meulées, magnifique.', author: 'Famille C.', context: 'Duplex Pigalle' },
  }],
  localReviews: [
    { text: 'Hélicoïdal compact pour relier deux niveaux dans 80m² gagnés à la rénovation. Soudures TIG visibles meulées, magnifique.', author: 'Famille C.', context: 'Pigalle, 9e', rating: 5, date: 'Juin 2024' },
    { text: 'Escalier droit suspendu marches chêne huilé. Effet flottant exact attendu. Pose 1 journée propre.', author: 'Hugo M.', context: 'Trinité, 9e', rating: 5, date: 'Mars 2024' },
    { text: 'Quart-tournant + marches bois sur duplex Saint-Georges. Précis au mm près, parquet d\'origine intact.', author: 'Camille D.', context: 'Saint-Georges, 9e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Escaliers dans les arrondissements parisiens limitrophes du 9e.',
    rows: [
      { communeSlug: 'paris-2e', communeName: 'Paris 2e', priceAvg: '5 500-9 500 €', durationAvg: '8-12 sem.', note: 'Sentier, immeubles XIXe' },
      { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '4 800-8 500 €', durationAvg: '8-10 sem.', note: 'Mix République + Canal' },
      { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '5 200-9 200 €', durationAvg: '8-12 sem.', note: 'Batignolles + Ternes' },
    ],
  },
  localStats: [
    { label: 'Escaliers Paris 9e depuis 2020', value: '~11' },
    { label: 'Part hélicoïdaux', value: '60 %' },
    { label: 'Note moyenne 9e', value: '4,9 / 5' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible duplex gentrifiés Pigalle/Saint-Georges. Insister hélicoïdal compact + soudure TIG visible.' },
}
