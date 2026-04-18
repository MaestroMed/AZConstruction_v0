import type { PremiumCase } from './types'

export const thermolaquageSeineSaintDenis93Aubervilliers: PremiumCase = {
  productSlug: 'thermolaquage',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'aubervilliers',
  status: 'published',
  heroPhoto: { url: '/images/collections/adapta/polaris/boreal/rh-5107.webp', alt: 'Thermolaquage Adapta Polaris — Aubervilliers 93', caption: 'Finition Polaris Boreal — copro ANRU Aubervilliers' },
  heroQuote: { text: 'Aubervilliers copro ANRU 180 lots, Adapta Polaris + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Aubervilliers Landy' },
  cityGuide: { intro: `Aubervilliers (90 000 habitants, 93) ville mixte copros ANRU massives + zone industrielle + ZAC Campus Condorcet. Demande thermolaquage ANRU très forte.`,
    sections: [
      { heading: 'Aubervilliers — ANRU 2 massif', body: `70% copros ANRU années 60-70 (Landy, Émile-Dubois, Maladrerie), 20% industriel, 10% pavillons. Adapta Polaris + Patina Oxide dominants rénovations ANRU.` },
      { heading: 'Tarifs', body: `Standard RAL : 35-50 €/m². Adapta Patina/Polaris : 80-140 €/m². Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Garde-corps Adapta Polaris + ANRU — copro Aubervilliers Landy', location: 'Landy, Aubervilliers', date: 'Juillet 2024', description: `Copro 180 lots ANRU 2. Thermolaquage 150 ml Adapta Polaris Boreal RH-5107 + coordination Bouygues Construction. Subvention ANRU 40 % obtenue.`, photos: { before: { url: '/images/collections/adapta/polaris/chamaleon/rb-1101-i.webp', alt: 'Avant' }, after: { url: '/images/collections/adapta/polaris/boreal/rh-5107.webp', alt: 'Après Polaris' } }, metrics: { price: '21 000 €', duration: '22 sem.', surface: '150 ml' }, quote: { text: 'Aubervilliers copro ANRU 180 lots, Adapta Polaris + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Aubervilliers Landy' } }],
  localReviews: [
    { text: 'Aubervilliers copro ANRU 180 lots, Adapta Polaris + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Aubervilliers Landy', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Bouygues + dossier ANRU Antoine. Sans stress.', author: 'Gestionnaire syndic', context: 'Aubervilliers Émile-Dubois', rating: 5, date: 'Mars 2024' },
    { text: 'Adapta Patina Oxide portail industriel. Acier Corten cohérent.', author: 'Gestionnaire ZA', context: 'Aubervilliers ZI', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Thermolaquage Adapta communes voisines 93 ANRU.', rows: [
    { communeSlug: 'saint-denis', communeName: 'Saint-Denis', priceAvg: '80-140 €/m² Adapta', durationAvg: '18-22 sem. ANRU', note: 'Basilique + ANRU' },
    { communeSlug: 'la-courneuve', communeName: 'La Courneuve', priceAvg: '80-140 €/m² Adapta', durationAvg: '18-22 sem.', note: 'ANRU 2 actif' },
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '85-150 €/m² Adapta', durationAvg: '16-20 sem.', note: 'Canal limitrophe Paris' },
  ] },
  localStats: [{ label: 'Thermolaquage Aubervilliers depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '8 / 11 (73 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Antoine (fondateur AZ)', internalNotes: 'Aubervilliers ANRU 2 très actif Landy-Émile-Dubois-Maladrerie + Campus Condorcet.' },
}
