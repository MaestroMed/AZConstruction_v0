import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris19e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-19e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon — Paris 19e Buttes-Chaumont', caption: 'Restauration garde-corps copro vue Buttes-Chaumont' },
  heroQuote: { text: 'Vue Buttes-Chaumont magnifique, garde-corps verre toute hauteur a tout libéré. Service complet.', author: 'Famille D.', context: 'Buttes-Chaumont, 19e' },
  cityGuide: {
    intro: `Le 19e (Buttes-Chaumont, La Villette, Belleville nord, Stalingrad) est densément peuplé (188 000 habitants) avec un parc immobilier varié : copros années 60-70 majoritaires, programmes neufs récents (ZAC Macdonald), apparts haussmanniens autour des Buttes-Chaumont. Pour les garde-corps, terrain dense en chantiers copros + croissance des demandes verre vue parcs.

Sur les 18 chantiers 19e ces 4 dernières années, 70% en copros (Stalingrad, Crimée), 20% verre vue Buttes-Chaumont, 10% pavillons (Mouzaïa).`,
    sections: [
      { heading: 'Le 19e — quatre profils urbanistiques', body: `Stalingrad-Crimée : copros années 60-80 grandes (100-200 lots). Buttes-Chaumont : haussmannien fin XIXe + verre vue parc. Mouzaïa : ruelles villageoises pavillonnaires (rare 19e). ZAC Macdonald : neuf 2010+, balcons modernes.` },
      { heading: 'Configurations dominantes', body: `Barreaudé acier copros (60%). Verre + main courante acier vue Buttes-Chaumont (25%). Restauration ferronnerie haussmannienne (10%). Câbles inox terrasses Mouzaïa (5%).` },
      { heading: 'Tarifs et délais 19e', body: `Barreaudé copro 250-330 €/ml, verre + acier 380-520 €/ml, restauration ferronnerie 380-540 €/ml. Délai 8-14 semaines copros, 5-7 sem pavillons.` },
    ],
  },
  caseStudies: [{
    title: 'Verre toute hauteur 9 ml R+5 vue Buttes-Chaumont',
    location: 'Rue Manin, Buttes-Chaumont, 19e',
    date: 'Mai 2024',
    description: `Remplacement garde-corps barreaudé acier rouillé années 70 par verre 8+8 toute hauteur fixations invisibles. Vue dégagée sur le parc des Buttes-Chaumont. Vote AG mars (présentation par notre représentant), pose en 1 journée propre fin mai. 9 ml total.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : barreaudés rouillés années 70' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verre toute hauteur libère vue parc' } },
    metrics: { price: '5 100 €', duration: '11 semaines', surface: '9 ml' },
    quote: { text: 'Vue Buttes-Chaumont magnifique, garde-corps verre toute hauteur a tout libéré. Service complet.', author: 'Famille D.', context: 'Buttes-Chaumont' },
  }],
  localReviews: [
    { text: 'Vue Buttes-Chaumont magnifique, garde-corps verre toute hauteur a tout libéré. Service complet.', author: 'Famille D.', context: 'Buttes-Chaumont, 19e', rating: 5, date: 'Mai 2024' },
    { text: 'Restauration 12 garde-corps copro 80 lots Crimée. Pose 4 jours, propre, syndic ravi.', author: 'Conseil syndical', context: 'Crimée, 19e', rating: 5, date: 'Mars 2024' },
    { text: 'Garde-corps cables inox terrasse pavillon Mouzaïa. Look contemporain marin parfait.', author: 'Vincent P.', context: 'Mouzaïa, 19e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps dans les arrondissements parisiens limitrophes du 19e.',
    rows: [
      { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '270-380 €/ml', durationAvg: '10-14 sem.', note: 'Canal + gares' },
      { communeSlug: 'paris-18e', communeName: 'Paris 18e', priceAvg: '260-360 €/ml', durationAvg: '8-12 sem.', note: 'Mix Montmartre/La Chapelle' },
      { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '240-340 €/ml', durationAvg: '8-12 sem.', note: 'Belleville + Père-Lachaise' },
    ],
  },
  localStats: [
    { label: 'Garde-corps Paris 19e depuis 2020', value: '~18' },
    { label: 'Note moyenne 19e', value: '4,9 / 5' },
    { label: 'Part chantiers vue parcs', value: '25 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cible mix copros denses + propriétaires vue Buttes-Chaumont premium.' },
}
