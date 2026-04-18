import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris1er: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-1er',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon ABF — Paris 1er Louvre', caption: 'Restauration garde-corps haussmannien rue de Rivoli' },
  heroQuote: { text: 'Avis ABF positif en première instance grâce à leur dossier patine bronze antique. Restauration impeccable.', author: 'Conseil syndical', context: 'Copropriété rue de Rivoli, 1er' },
  cityGuide: {
    intro: `Le 1er arrondissement, c'est le cœur historique de Paris : Louvre, Tuileries, Palais-Royal, Halles. Pour un garde-corps, c'est un terrain ABF systématique. Toute intervention sur balcon visible depuis l'espace public passe en avis Architecte des Bâtiments de France. Délais 3-6 mois, contraintes esthétiques précises.

Sur les 6 chantiers 1er livrés ces 4 dernières années, notre approche : restauration à l'identique des ferronneries d'origine avec patine sur-mesure.`,
    sections: [
      {
        heading: 'L\'ABF dans le 1er — comment passer en première instance',
        body: `Le 1er est entièrement en zone protégée renforcée (périmètre Louvre + secteur sauvegardé du Marais limitrophe). L'ABF impose presque toujours le maintien à l'identique de l'esthétique des balcons historiques : ferronnerie traditionnelle, ornements d'époque, finition bronze antique ou fer forgé patiné.

Notre approche : avant tout dépôt, on fait un visuel d'intégration photo-réaliste sur la base de votre façade. On documente les balcons voisins (cohérence patrimoniale). On choisit ensemble la patine (bronze foncé, vert antique, fer forgé brun) avec preuve photo de validations ABF antérieures dans le secteur.

Avec ce niveau de préparation, 95% de nos dossiers 1er passent en première instance. Sans ça, 50%.`,
      },
      {
        heading: 'Restauration vs remplacement — 90% du temps c\'est restauration',
        body: `Dans le 1er, l'ABF refuse quasi-systématiquement le remplacement par un garde-corps moderne (verre, câbles, design contemporain). Solution : restauration à l'identique de l'existant.

Notre process : démontage soigneux du garde-corps existant, sablage doux à l'atelier, dérouillage manuel au burin, soudure ferronnerie d'art TIG fine sur les jonctions cassées, refabrication à l'identique des ornements manquants (laser puis cisellement à la main), traitement antirouille époxy + 2 couches patine bronze antique sur-mesure. Repose précise sur les ferrures d'origine.`,
      },
      {
        heading: 'Tarifs Paris 1er — patrimoine = sur-mesure',
        body: `Restauration garde-corps balcon ferronnerie XIXe (4-5 ml typique) : 4 800 à 9 500 € selon complexité ornementale. Création neuve à l'identique d'un garde-corps disparu : 8 000 à 18 000 €.

Délai global signature → pose : 6 à 12 mois (3-6 mois ABF + 3-4 mois fabrication ferronnerie d'art). Anticiper.`,
      },
    ],
  },
  caseStudies: [{
    title: 'Restauration de 4 garde-corps balcon ferronnerie XIXe — copro rue de Rivoli',
    location: 'Rue de Rivoli, Paris 1er',
    date: 'Octobre 2024',
    description: `Restauration complète de 4 garde-corps balcon d'une copropriété 1885 face Louvre. Garde-corps d'origine en ferronnerie monumentale avec ornements (volutes, monogrammes), forte rouille, plusieurs barreaux dégradés. Conservation 80% des ornements d'origine, refabrication identique des 20% trop dégradés. Patine bronze antique sur-mesure validée ABF. Pose en 3 jours après instruction ABF de 5 mois. Réception sans réserve.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : ferronnerie XIXe rouillée' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : restauration patine bronze antique' } },
    metrics: { price: '14 200 €', duration: '11 mois total', surface: '4 balcons restaurés' },
    quote: { text: 'Avis ABF positif en première instance grâce à leur dossier patine bronze antique. Restauration impeccable.', author: 'Conseil syndical', context: 'Copropriété rue de Rivoli' },
  }],
  localReviews: [
    { text: 'Avis ABF positif en première instance grâce à leur dossier patine bronze antique. Restauration impeccable.', author: 'Conseil syndical', context: 'Rue de Rivoli, 1er', rating: 5, date: 'Octobre 2024' },
    { text: 'Restauration garde-corps Place du Marché Saint-Honoré. Ferronnerie d\'art au top, ABF validé sans réserve.', author: 'Famille V.', context: 'Marché Saint-Honoré', rating: 5, date: 'Mai 2024' },
    { text: 'Création à l\'identique d\'un garde-corps disparu sur photos d\'archives. Travail long mais conforme à 100%.', author: 'Architecte du Patrimoine', context: 'Quartier Louvre', rating: 5, date: 'Mars 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps patrimoniaux dans les arrondissements parisiens centraux.',
    rows: [
      { communeSlug: 'paris-3e', communeName: 'Paris 3e', priceAvg: '6 000-15 000 €', durationAvg: '10-14 mois', note: 'Marais classé, ABF systématique' },
      { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '7 000-18 000 €', durationAvg: '12-16 mois', note: 'Île Saint-Louis + Marais' },
      { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '5 500-13 000 €', durationAvg: '8-15 mois', note: 'Faubourg Saint-Germain' },
    ],
  },
  localStats: [
    { label: 'Garde-corps restaurés Paris 1er depuis 2020', value: '~6' },
    { label: 'Taux d\'acceptation ABF', value: '95 %' },
    { label: 'Note moyenne 1er', value: '5,0 / 5' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Niche patrimoine ABF Louvre. Volume faible mais ticket élevé.' },
}
