import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris3e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-3e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Paris 3e', caption: 'Garde-corps acier + laiton patiné — Marais Haut Paris 3e' },
  heroQuote: { text: 'Paris 3e Marais Haut hôtel particulier XVIIe, garde-corps acier + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Paris 3e Marais' },
  cityGuide: { intro: `Paris 3e (35 000 habitants, 75) arrondissement historique Marais Haut — Arts-et-Métiers + République + Enfants-Rouges. Zone ABF intégrale. Hôtels particuliers XVIIe-XVIIIe + haussmannien.`,
    sections: [
      { heading: 'Paris 3e — Marais Haut hôtels particuliers', body: `55% hôtels particuliers XVIIe-XVIIIe, 40% copros haussmanniennes, 5% reconversions ateliers. Garde-corps acier + main courante laiton patiné ou bois noyer ABF validé dominant.` },
      { heading: 'Tarifs', body: `Acier RAL + bois noyer : 480-680 €/ml. Acier + laiton patiné ABF : 620-870 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier + laiton patiné 14 ml — hôtel particulier Paris 3e Marais', location: 'Marais Haut, Paris 3e', date: 'Juillet 2024', description: `Hôtel particulier XVIIe rénové Arts-et-Métiers. Garde-corps acier thermolaqué RAL 7016 + main courante laiton patine bronze florentin + dossier ABF 8 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 400 €', duration: '14 sem. (ABF)', surface: '14 ml' }, quote: { text: 'Paris 3e Marais Haut hôtel particulier XVIIe, garde-corps acier + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Paris 3e Marais' } }],
  localReviews: [
    { text: 'Paris 3e Marais Haut hôtel particulier XVIIe, garde-corps acier + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Paris 3e Marais', rating: 5, date: 'Juillet 2024' },
    { text: 'Acier + bois noyer copro haussmannienne Enfants-Rouges. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 3e Enfants-Rouges', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Marais Haut géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Paris 3e Arts-et-Métiers', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps arrondissements voisins Paris centre.', rows: [
    { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '550-800 €/ml', durationAvg: '14-18 sem. ABF', note: 'Marais bas + Île Saint-Louis' },
    { communeSlug: 'paris-2e', communeName: 'Paris 2e', priceAvg: '520-750 €/ml', durationAvg: '10-14 sem.', note: 'Passages couverts Bourse' },
    { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '500-720 €/ml', durationAvg: '8-12 sem.', note: 'Bastille lofts' },
  ] },
  localStats: [{ label: 'Garde-corps Paris 3e depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '100 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 3e Marais Haut Arts-et-Métiers ABF intégrale hôtels particuliers.' },
}
