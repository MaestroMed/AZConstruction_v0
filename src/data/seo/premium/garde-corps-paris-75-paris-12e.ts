import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris12e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-12e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon Bercy — Paris 12e', caption: 'Restauration garde-corps copro Bercy Village' },
  heroQuote: { text: 'Notre copro 200 lots Bercy a vu son budget ravalement passer en 1 vote grâce au dossier AZ. Sérieux, propre.', author: 'Conseil syndical', context: 'Copro Bercy 200 lots, 12e' },
  cityGuide: {
    intro: `Le 12e (Bastille, Bercy, Daumesnil, Reuilly) compte 145 000 habitants et un parc immobilier varié : haussmannien autour de Daumesnil, copros années 60-80 vers Reuilly et Charenton, programmes neufs récents Bercy Village et ZAC Bercy. Pour les garde-corps, c'est un terrain dense en chantiers copro.

Sur les 18 chantiers 12e ces 4 dernières années, 80% en copropriété, 15% en pavillon (rare), 5% en hôtel particulier (Daumesnil principalement).`,
    sections: [
      { heading: 'Le 12e — trois zones, trois approches', body: `Bastille-Daumesnil : haussmannien fin XIXe, parfois ABF léger. Reuilly-Picpus : copros années 60-80 majoritaires, demande standard de remplacement. Bercy-ZAC : programmes neufs 2000+, demande encore rare mais croissante.` },
      { heading: 'Configurations dominantes', body: `Garde-corps barreaudé classique (60% des chantiers copro Reuilly-Picpus). Garde-corps verre + main courante acier (25%, croissant pour les vues Bois de Vincennes). Restauration ferronnerie XIXe (15%, Daumesnil zones haussmanniennes).` },
      { heading: 'Tarifs et délais 12e', body: `Barreaudé copro : 250-330 €/ml. Verre + main courante : 380-520 €/ml. Restauration ferronnerie : 380-540 €/ml (avec ABF si Daumesnil). Délai 8-14 semaines selon zone et complexité.` },
    ],
  },
  caseStudies: [{
    title: 'Restauration 18 garde-corps balcon — copro 200 lots Bercy',
    location: 'Cour Saint-Émilion, Bercy, Paris 12e',
    date: 'Septembre 2024',
    description: `Remplacement complet de 18 garde-corps balcon (rouille avancée, expertise structure 2023) sur copro 200 lots construite en 1976. Barreaudé acier 16 mm conforme NF P01-012, mains courantes 50 mm, thermolaquage RAL 7016 anthracite. 108 ml total. Vote AG mars (présent à l'AG en personne pour expliquer techniquement), accord juin, pose en 5 jours étalés sur 2 semaines (3-4 balcons/jour pour ne pas bloquer la copro). Réception sans réserve syndic + conseil syndical.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : garde-corps barreaudés rouillés' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : barreaudés thermolaqués anthracite' } },
    metrics: { price: '29 800 € (108 ml)', duration: '14 semaines', surface: '108 ml — 18 balcons' },
    quote: { text: 'Notre copro 200 lots Bercy a vu son budget ravalement passer en 1 vote grâce au dossier AZ. Sérieux, propre.', author: 'Conseil syndical', context: 'Copro Bercy 200 lots' },
  }],
  localReviews: [
    { text: 'Notre copro 200 lots Bercy a vu son budget ravalement passer en 1 vote grâce au dossier AZ. Sérieux, propre.', author: 'Conseil syndical', context: 'Bercy Village, 12e', rating: 5, date: 'Septembre 2024' },
    { text: 'Garde-corps verre + main courante acier sur balcon R+6 vue Bois de Vincennes. Pose en demi-journée, vue libérée.', author: 'Famille B.', context: 'Daumesnil, 12e', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration ferronnerie XIXe Place de la Nation. ABF validé, patine bronze sur-mesure. Travail d\'art.', author: 'Architecte', context: 'Nation, 12e', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps dans les arrondissements limitrophes du 12e.',
    rows: [
      { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '280-380 €/ml', durationAvg: '10-14 sem.', note: 'Copros années 60-80' },
      { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '260-360 €/ml', durationAvg: '8-12 sem.', note: 'Mix tours + tissu populaire' },
      { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '250-340 €/ml', durationAvg: '8-12 sem.', note: 'Mix populaire/HBM années 30' },
    ],
  },
  localStats: [
    { label: 'Garde-corps Paris 12e depuis 2020', value: '~18' },
    { label: 'Note moyenne 12e', value: '4,9 / 5' },
    { label: 'Part copros grandes (100+ lots)', value: '70 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cible copros grandes Bercy/Reuilly. Présence physique en AG appréciée.' },
}
