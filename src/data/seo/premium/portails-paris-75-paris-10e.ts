import type { PremiumCase } from './types'

export const portailsParis75Paris10e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-10e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copropriété — Paris 10e République', caption: 'Portail coulissant motorisé Came — copro 80 lots Canal Saint-Martin' },
  heroQuote: { text: 'Vote AG passé en 1ère présentation. Pose 2 jours sans gêne aux 80 résidents. Service complet syndic.', author: 'Syndic professionnel', context: 'Copro Canal Saint-Martin, 10e' },
  cityGuide: {
    intro: `Le 10e (République, Canal Saint-Martin, Gare du Nord, Gare de l'Est) regroupe 95 000 habitants et beaucoup de copropriétés grandes années 60-80, particulièrement autour des deux gares et le long du Canal. Pour les portails, c'est un terrain dense en chantiers de remplacement copro.

Sur les 12 chantiers 10e des 4 dernières années, 90% étaient en copropriété, 10% en pavillon (rare dans le 10e).`,
    sections: [
      { heading: 'Le 10e — copros denses, syndics actifs', body: `Très peu de pavillons individuels (le 10e est un arrondissement urbain dense). Notre quasi-totalité de chantiers est en copropriétés moyennes-grandes (50-200 lots). Les syndics sont en majorité professionnels (Foncia, Citya, Nexity, Sergic) plutôt qu'autogérés. Décisions plus rapides en AG, dossiers techniques mieux structurés.` },
      { heading: 'Configurations Paris 10e', body: `Coulissant motorisé sur rail 4-6 m (75% des chantiers). Le standard copro 10e. Acier galva + thermolaqué noir mat ou anthracite, motorisation Came BX-243. Battant double vantail motorisé (15%). Coulissant autoportant (10%). Tarif 5 500-7 800 € posé motorisé.` },
      { heading: 'Tarifs et délais', body: `Tarif moyen copro 5 m motorisé : 6 000 €. Délai vote AG → pose : 12-16 semaines (4-6 sem instruction mairie 10e + 4-6 sem fab + 4 sem planning).` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant Came 5 m + portillon — copro 80 lots Canal Saint-Martin',
    location: 'Quai de Valmy, Paris 10e',
    date: 'Juillet 2024',
    description: `Remplacement portail coulissant manuel défaillant sur copro 80 lots. Coulissant rail 5 m + portillon piéton 1 m, lames horizontales acier 100 mm RAL 7016 anthracite, motorisation Came BX-243, 6 télécommandes, photocellules. Vote AG mars, accord mairie juin, pose en 2 jours juillet sans interruption d'accès résidents.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : portail manuel défaillant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant motorisé Came' } },
    metrics: { price: '7 200 €', duration: '14 semaines', surface: '5 m + portillon 1 m' },
    quote: { text: 'Vote AG passé en 1ère présentation. Pose 2 jours sans gêne aux 80 résidents. Service complet syndic.', author: 'Syndic professionnel', context: 'Copro Canal Saint-Martin' },
  }],
  localReviews: [
    { text: 'Vote AG passé en 1ère présentation. Pose 2 jours sans gêne aux 80 résidents. Service complet syndic.', author: 'Syndic professionnel', context: 'Canal Saint-Martin, 10e', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant double vantail motorisé sur petite copro 30 lots. Pose en 1 journée, finition impeccable.', author: 'Conseil syndical', context: 'Gare du Nord, 10e', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination gardien parfaite, affichage hall 10 jours avant. Zéro plainte résidents sur 120 lots.', author: 'Syndic Citya', context: 'République, 10e', rating: 5, date: 'Octobre 2024' },
  ],
  crossCity: {
    intro: 'Portails dans les arrondissements parisiens limitrophes du 10e.',
    rows: [
      { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '5 500-8 200 €', durationAvg: '12-16 sem.', note: 'Copros années 60-80 majoritaires' },
      { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Buttes-Chaumont, mix copros' },
      { communeSlug: 'paris-2e', communeName: 'Paris 2e', priceAvg: '6 200-9 500 €', durationAvg: '14-18 sem.', note: 'Sentier, contraintes serrées' },
    ],
  },
  localStats: [
    { label: 'Portails Paris 10e depuis 2020', value: '~12' },
    { label: 'Note moyenne 10e', value: '4,9 / 5' },
    { label: 'Part copros 50+ lots', value: '85 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cible syndics professionnels copros Canal Saint-Martin/République/gares.' },
}
