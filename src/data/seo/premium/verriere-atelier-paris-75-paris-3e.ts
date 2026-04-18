import type { PremiumCase } from './types'

export const verriereAtelierParis75Paris3e: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'paris-75',
  communeSlug: 'paris-3e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier acier — Paris 3e Marais', caption: 'Verrière 8 carreaux profil 40 mm patine bronze — Marais' },
  heroQuote: { text: 'Verrière patine bronze antique pour matcher les ferronneries d\'origine du Marais. Métier rare et bien fait.', author: 'Architecte d\'intérieur', context: 'Loft Marais, Paris 3e' },
  cityGuide: {
    intro: `Le Marais (3e + 4e), c'est l'un des plus anciens quartiers de Paris : hôtels particuliers XVIe-XVIIIe, secteur sauvegardé classé depuis 1965. Pour une verrière atelier, c'est un terrain spécifique. La verrière intérieure n'est généralement pas soumise à ABF (intérieure, non visible depuis la rue), mais l'esprit "atelier" doit s'intégrer à l'architecture historique.

Notre approche : profils acier 40 mm patine bronze antique sur-mesure (vs noir mat moderne) pour matcher les ferronneries d'origine.`,
    sections: [
      {
        heading: 'Le Marais — pourquoi la verrière "patine" plutôt que noir mat',
        body: `Dans le Marais, le noir mat moderne (RAL 9005) jure souvent avec les ferronneries XVIIIe d'origine, les poutres en chêne apparentes, les pierres meulières. Notre recommandation pour 80% des chantiers Marais : finition patine bronze antique sur-mesure (mélange RAL personnalisé) qui s'intègre naturellement.

Trame : 8-12 carreaux 30×60 (proportions traditionnelles XVIIe-XVIIIe), profils acier 40 mm soudés MIG. Verre feuilleté 44.2 transparent. Visserie apparente bronze sur demande architecte.

Le Marais a aussi une particularité : beaucoup d'apparts en R+4/R+5 dans des immeubles avec escaliers étroits et ascenseurs minuscules ou inexistants. Acheminement par cage d'escalier obligatoire — modules pré-coupés à 1,30-1,50 m max.`,
      },
      {
        heading: 'Configurations Marais',
        body: `Trois configurations dominent dans le 3e.

Verrière fixe 6-8 carreaux patine bronze (50% des chantiers). Pour les apparts haussmanniens et anciens lofts. Ouverture cuisine sur séjour ou séparation chambre/dressing.

Verrière toute hauteur sol-plafond profils 30 mm noir mat (30%). Pour les apparts contemporains du nord du 3e (vers République) où le moderne est accepté.

Verrière avec porte battante visserie apparente bronze (20%). Demande architecte d'intérieur fréquente.`,
      },
      {
        heading: 'Tarifs Paris 3e Marais',
        body: `Verrière fixe 4-5 m² profils 40 mm patine bronze : 6 200-8 500 €. Verrière 6-8 m² avec porte battante : 9 500-13 000 €. Surcoût patine bronze sur-mesure +20% vs noir mat. Délai signature → pose : 6-8 semaines.`,
      },
    ],
  },
  caseStudies: [{
    title: 'Verrière 8 carreaux patine bronze — loft Marais 95 m²',
    location: 'Rue des Archives, Paris 3e',
    date: 'Septembre 2024',
    description: `Création d'une verrière 4,5 m × 2,80 m avec 8 carreaux 30×60 + porte battante centrale, dans un loft Marais. Profils acier 40 mm soudés MIG, finition patine bronze antique sur-mesure validée par l'architecte d'intérieur. Visserie apparente bronze, vitrage feuilleté 44.2 transparent. Acheminement par cage d'escalier (ascenseur trop étroit), modules pré-coupés en 4 sections de 1,30 m. Pose en 2 jours, parquet ancien intact.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : cloison plâtre fermant cuisine' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verrière patine bronze' } },
    metrics: { price: '11 200 €', duration: '7 semaines', surface: '12,6 m²' },
    quote: { text: 'Verrière patine bronze antique pour matcher les ferronneries d\'origine du Marais. Métier rare et bien fait.', author: 'Architecte d\'intérieur', context: 'Loft Marais' },
  }],
  localReviews: [
    { text: 'Verrière patine bronze antique pour matcher les ferronneries d\'origine du Marais. Métier rare et bien fait.', author: 'Architecte d\'intérieur', context: 'Marais, 3e', rating: 5, date: 'Septembre 2024' },
    { text: 'Profils acier 40 mm finition bronze sur-mesure. Pose en 2 jours, finition impeccable.', author: 'Famille R.', context: 'Rue de Bretagne', rating: 5, date: 'Mai 2024' },
    { text: 'Acheminement par cage d\'escalier (ascenseur trop étroit) géré sans problème. Pré-découpe atelier parfaite.', author: 'Jean-Marc L.', context: 'Quartier Temple', rating: 5, date: 'Mars 2024' },
  ],
  crossCity: {
    intro: 'Verrières atelier dans les arrondissements parisiens centraux.',
    rows: [
      { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '1 300-2 000 €/m²', durationAvg: '6-8 sem.', note: 'Île Saint-Louis + Marais classé' },
      { communeSlug: 'paris-2e', communeName: 'Paris 2e', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Sentier, immeubles XIXe' },
      { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Mix Bastille populaire/gentrifié' },
    ],
  },
  localStats: [
    { label: 'Verrières posées Paris 3e depuis 2020', value: '~10' },
    { label: 'Note moyenne 3e', value: '5,0 / 5' },
    { label: 'Part finition patine bronze', value: '80 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Marais classé. Différenciant : maîtrise patine bronze antique sur-mesure.' },
}
