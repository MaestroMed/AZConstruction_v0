import type { PremiumCase } from './types'

export const gardeCorpsHautsDeSeine92AsnieresSurSeine: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'asnieres-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon — Asnières-sur-Seine', caption: 'Restauration garde-corps copro Asnières centre' },
  heroQuote: { text: 'Copro Asnières 90 lots, restauration 9 balcons en 4 jours. Coordination syndic + gardien parfaite.', author: 'Syndic professionnel', context: 'Asnières centre' },
  cityGuide: {
    intro: `Asnières-sur-Seine (86 000 habitants, Hauts-de-Seine nord) : copros années 60-80 majoritaires + quelques apparts haussmanniens fin XIXe vers la Seine. Demande standard remplacement garde-corps copros vieillissants.`,
    sections: [
      { heading: 'Asnières — copros années 70-80', body: `80% copros. Demande dominante : barreaudé acier classique pour copros, parfois verre + main courante pour balcons R+5 vue Seine.` },
      { heading: 'Tarifs', body: `Barreaudé copro : 240-330 €/ml. Verre + main courante : 380-520 €/ml. Délai 10-14 sem copros.` },
    ],
  },
  caseStudies: [{
    title: 'Restauration 9 garde-corps copro 90 lots Asnières centre',
    location: 'Avenue d\'Argenteuil, Asnières',
    date: 'Octobre 2024',
    description: `Remplacement 9 garde-corps balcons rouillés copro 1976. Barreaudé acier 16 mm conforme NF P01-012, thermolaqué anthracite RAL 7016. Pose 4 jours étalés sur 2 semaines.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '15 200 €', duration: '12 sem.', surface: '54 ml — 9 balcons' },
    quote: { text: 'Copro Asnières 90 lots, restauration 9 balcons en 4 jours. Coordination syndic + gardien parfaite.', author: 'Syndic professionnel', context: 'Asnières centre' },
  }],
  localReviews: [
    { text: 'Copro Asnières 90 lots, restauration 9 balcons en 4 jours. Coordination syndic + gardien parfaite.', author: 'Syndic professionnel', context: 'Asnières centre', rating: 5, date: 'Octobre 2024' },
    { text: 'Verre + main courante balcon R+5 vue Seine. Pose en demi-journée, vue libérée.', author: 'Famille B.', context: 'Bord de Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration ferronnerie haussmannienne XIXe. ABF léger géré, patine bronze sur-mesure.', author: 'Famille R.', context: 'Asnières-Centre', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps communes voisines 92 nord.',
    rows: [
      { communeSlug: 'colombes', communeName: 'Colombes', priceAvg: '240-340 €/ml', durationAvg: '10-14 sem.', note: 'Copros années 70-80' },
      { communeSlug: 'gennevilliers', communeName: 'Gennevilliers', priceAvg: '230-320 €/ml', durationAvg: '10-14 sem.', note: 'Industriel + résidentiel' },
      { communeSlug: 'clichy', communeName: 'Clichy', priceAvg: '260-360 €/ml', durationAvg: '10-14 sem.', note: 'Mix copros + apparts récents' },
    ],
  },
  localStats: [
    { label: 'Garde-corps Asnières depuis 2020', value: '~14' },
    { label: 'Note moyenne Asnières', value: '4,9 / 5' },
    { label: 'Part copros 50+ lots', value: '80 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Cible copros syndics professionnels Asnières.' },
}
