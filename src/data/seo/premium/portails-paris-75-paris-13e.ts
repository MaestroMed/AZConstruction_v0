import type { PremiumCase } from './types'

export const portailsParis75Paris13e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-13e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail copropriété — Paris 13e Tolbiac', caption: 'Coulissant motorisé Came — copro Tolbiac 250 lots' },
  heroQuote: { text: 'Tolbiac, 250 lots, ancien portail bloqué 4 mois. AZ a tout repris en 14 semaines. Excellent.', author: 'Syndic Foncia', context: 'Tolbiac, 13e' },
  cityGuide: {
    intro: `Le 13e (Tolbiac, Place d'Italie, Bibliothèque, Olympiades) est l'un des arrondissements les plus denses en grandes copropriétés des années 60-70 (les fameuses tours du 13e). Pour les portails, c'est un terrain à très gros volume : copros 200-400 lots fréquentes.

Sur les 16 chantiers 13e des 4 dernières années, 95% étaient en copros >100 lots. C'est notre arrondissement parisien n°1 en volume copros grandes.`,
    sections: [
      { heading: 'Le 13e — terrain des grandes copros', body: `Beaucoup de tours 25-30 étages des années 60-70 (Olympiades, Tolbiac, Italie 13). Copropriétés 200-400 lots fréquentes, syndics pros majoritaires (Foncia, Citya, Nexity). Décisions en AG plus longues mais structurées. Budgets travaux préprovisionnés.` },
      { heading: 'Notre méthode 250+ lots', body: `Présentation devis au conseil syndical avant AG (1 réunion). Vote AG (notre représentant disponible si demandé). Dossier mairie déposé en notre nom. Fabrication + planning chantier coordonné gardien. Pose 2-4 jours selon volume. Réception en présence syndic + président conseil syndical.` },
      { heading: 'Tarifs Paris 13e copros', body: `Coulissant motorisé Came copro 5-6 m : 6 000-8 000 € posé. Autoportant copro 5 m : 7 500-9 500 €. Battant motorisé : 5 800-7 500 €. Délai 14-18 semaines vote → pose.` },
    ],
  },
  caseStudies: [{
    title: 'Coulissant Came 6 m + portillon Vigik — copro 250 lots Tolbiac',
    location: 'Avenue de Choisy, Tolbiac, Paris 13e',
    date: 'Octobre 2024',
    description: `Remplacement portail coulissant manuel bloqué depuis 4 mois (faille sécurité). Coulissant rail 6 m + portillon piéton 1 m motorisé Came BX-243 industrielle, 8 télécommandes, photocellules, système Vigik intégré. Vote AG juin (présence à l'AG), accord août, pose en 3 jours fin octobre avec barrière provisoire J1. Aucune plainte sur 250 lots.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : portail bloqué' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant Came + Vigik' } },
    metrics: { price: '9 800 €', duration: '16 semaines', surface: '6 m + portillon Vigik' },
    quote: { text: 'Tolbiac, 250 lots, ancien portail bloqué 4 mois. AZ a tout repris en 14 semaines. Excellent.', author: 'Syndic Foncia', context: 'Tolbiac, 13e' },
  }],
  localReviews: [
    { text: 'Tolbiac, 250 lots, ancien portail bloqué 4 mois. AZ a tout repris en 14 semaines. Excellent.', author: 'Syndic Foncia', context: 'Tolbiac, 13e', rating: 5, date: 'Octobre 2024' },
    { text: 'Pose impeccable sur copro 180 lots Olympiades. Coordination gardien + syndic parfaite, zéro plainte.', author: 'Conseil syndical', context: 'Olympiades, 13e', rating: 5, date: 'Mars 2024' },
    { text: 'Battant motorisé pour petite copro 40 lots Place d\'Italie. Pose 1 journée, propre.', author: 'Syndic Nexity', context: 'Place d\'Italie, 13e', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Portails dans les arrondissements limitrophes du 13e.',
    rows: [
      { communeSlug: 'paris-12e', communeName: 'Paris 12e', priceAvg: '5 500-8 000 €', durationAvg: '12-16 sem.', note: 'Beaucoup de copros 60-80s' },
      { communeSlug: 'paris-14e', communeName: 'Paris 14e', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + petites résidences' },
      { communeSlug: 'paris-5e', communeName: 'Paris 5e', priceAvg: '5 800-9 500 €', durationAvg: '12-16 sem.', note: 'ABF certaines zones' },
    ],
  },
  localStats: [
    { label: 'Portails Paris 13e depuis 2020', value: '~16' },
    { label: 'Note moyenne 13e', value: '4,9 / 5' },
    { label: 'Part copros 200+ lots', value: '60 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Spécialisation grandes copros 13e. Présence AG + coordination Vigik.' },
}
