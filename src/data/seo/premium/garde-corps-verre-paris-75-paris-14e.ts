import type { PremiumCase } from './types'

export const gardeCorpsVerreParis75Paris14e: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'paris-75',
  communeSlug: 'paris-14e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Paris 14e Plaisance', caption: 'Garde-corps verre toute hauteur — terrasse Plaisance' },
  heroQuote: { text: 'Verre 8+8 toute hauteur sans poteaux, vue dégagée sur les toits parisiens. Pose en 1 jour, propre.', author: 'Famille L.', context: 'Plaisance, Paris 14e' },
  cityGuide: {
    intro: `Le 14e (Montparnasse, Plaisance, Pernety, Petit-Montrouge) est l'un des arrondissements les plus mixtes de Paris. Pour le garde-corps verre, c'est un terrain en forte croissance : nombreux apparts haussmanniens 1880-1900 avec balcons d'origine à moderniser, programmes neufs Pernety/Petit-Montrouge avec balcons modernes vieillissants.

Sur les 14 garde-corps verre 14e ces 4 dernières années, 60% en remplacement de barreaudés rouillés sur copros, 30% en pose neuve dans rénovations totales, 10% sur terrasses haut perchées vue Tour Eiffel/Sacré-Cœur.`,
    sections: [
      { heading: 'Le 14e — pourquoi le verre marche bien', body: `Le 14e a beaucoup d'apparts en R+5 ou R+6 avec vues dégagées (Cimetière Montparnasse, Parc Montsouris, vue toits). Le verre toute hauteur libère ces vues. Configurations dominantes : verre 8+8 + main courante acier (50%), verre toute hauteur fixations invisibles (35%), verre + cables inox (15% — terrasses pavillons Pernety).` },
      { heading: 'Process et pose', body: `Verre feuilleté 8+8 sécurité 16 mm, profilés acier 40 mm thermolaqués noir mat ou inox brossé. Acheminement par cage d'escalier modules pré-coupés à 1,80 m. Bâches absolues. Pose en 1 jour pour balcon standard.` },
      { heading: 'Tarifs Paris 14e', body: `Verre + main courante acier : 380-520 €/ml. Verre toute hauteur fixations invisibles : 480-650 €/ml. Verre + cables inox : 420-580 €/ml. Délai 8-12 semaines (DP mairie 4-6 sem + fab 4-6 sem).` },
    ],
  },
  caseStudies: [{
    title: 'Verre toute hauteur fixations invisibles — terrasse R+6 Pernety',
    location: 'Rue Pernety, Paris 14e',
    date: 'Juillet 2024',
    description: `Remplacement garde-corps barreaudé d'origine (1928) par verre feuilleté 8+8 toute hauteur sans poteaux, fixations invisibles latérales. 9 ml total, vue dégagée Tour Eiffel. Vote AG passé en 1ère présentation, pose en 1 journée propre.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : barreaudé acier 1928 rouillé' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verre toute hauteur invisible' } },
    metrics: { price: '5 200 €', duration: '10 semaines', surface: '9 ml' },
    quote: { text: 'Verre 8+8 toute hauteur sans poteaux, vue dégagée sur les toits parisiens. Pose en 1 jour, propre.', author: 'Famille L.', context: 'Plaisance' },
  }],
  localReviews: [
    { text: 'Verre 8+8 toute hauteur sans poteaux, vue dégagée sur les toits parisiens. Pose en 1 jour, propre.', author: 'Famille L.', context: 'Plaisance, 14e', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + main courante laiton vieilli sur balcon haussmannien Denfert-Rochereau. Compromis modernité/cachet parfait.', author: 'Camille D.', context: 'Denfert-Rochereau', rating: 5, date: 'Mars 2024' },
    { text: 'Pose 1 journée terrasse pavillon Petit-Montrouge. Verre + cables inox, look contemporain marin.', author: 'Vincent P.', context: 'Petit-Montrouge', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps verre dans les arrondissements parisiens limitrophes du 14e.',
    rows: [
      { communeSlug: 'paris-15e', communeName: 'Paris 15e', priceAvg: '380-550 €/ml', durationAvg: '5-7 sem.', note: 'Mix moderne + haussmannien' },
      { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '350-500 €/ml', durationAvg: '8-12 sem.', note: 'Tours années 60-70' },
      { communeSlug: 'paris-6e', communeName: 'Paris 6e', priceAvg: '480-700 €/ml', durationAvg: '6-10 sem.', note: 'Saint-Germain, ABF zones' },
    ],
  },
  localStats: [
    { label: 'Garde-corps verre Paris 14e depuis 2020', value: '~14' },
    { label: 'Note moyenne 14e', value: '4,9 / 5' },
    { label: 'Délai moyen', value: '8 à 10 sem.' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Mix Plaisance/Pernety populaire/gentrifié + Montparnasse classique.' },
}
