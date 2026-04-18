import type { PremiumCase } from './types'

export const gardeCorpsSeineSaintDenis93Bobigny: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'bobigny',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Bobigny préfecture 93', caption: 'Restauration garde-corps copro 200 lots — Bobigny préfecture' },
  heroQuote: { text: 'Bobigny préfecture, copro 200 lots, restauration 12 balcons en 5 jours. Coordination parfaite.', author: 'Syndic professionnel', context: 'Bobigny préfecture' },
  cityGuide: { intro: `Bobigny (50 000 habitants), préfecture du 93, regroupe grandes copros années 70-80 + bâtiments administratifs.`,
    sections: [
      { heading: 'Bobigny — grandes copros préfectorales', body: `90% chantiers en copros 100-300 lots. Barreaudé acier dominant.` },
      { heading: 'Tarifs', body: `Barreaudé copro : 240-330 €/ml. Délai 12-16 sem.` },
    ] },
  caseStudies: [{ title: 'Restauration 12 garde-corps copro 200 lots Bobigny', location: 'Préfecture, Bobigny', date: 'Juin 2024', description: `Remplacement 12 garde-corps balcons rouillés copro 1978. Pose 5 jours étalés.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '19 800 €', duration: '14 sem.', surface: '72 ml — 12 balcons' }, quote: { text: 'Bobigny préfecture, copro 200 lots, restauration 12 balcons en 5 jours. Coordination parfaite.', author: 'Syndic professionnel', context: 'Bobigny préfecture' } }],
  localReviews: [
    { text: 'Bobigny préfecture, copro 200 lots, restauration 12 balcons en 5 jours. Coordination parfaite.', author: 'Syndic professionnel', context: 'Bobigny préfecture', rating: 5, date: 'Juin 2024' },
    { text: 'Garde-corps verre balcon R+10 vue Paris. Pose 1 journée propre.', author: 'Famille B.', context: 'Tour Bobigny', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration ferronnerie Mairie Bobigny. Travail soigné.', author: 'Architecte', context: 'Centre Bobigny', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 93.', rows: [
    { communeSlug: 'noisy-le-sec', communeName: 'Noisy-le-Sec', priceAvg: '230-320 €/ml', durationAvg: '10-14 sem.', note: 'Copros années 70' },
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '260-360 €/ml', durationAvg: '10-14 sem.', note: 'Gentrification' },
    { communeSlug: 'drancy', communeName: 'Drancy', priceAvg: '230-320 €/ml', durationAvg: '10-14 sem.', note: 'Copros années 60-70' },
  ] },
  localStats: [{ label: 'Garde-corps Bobigny depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros 100+ lots', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bobigny grandes copros préfectorales.' },
}
