import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93ClichySousBois: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'clichy-sous-bois',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Clichy-sous-Bois 93', caption: 'Portail coulissant 4 m RAL 7016 — copro Clichy-sous-Bois' },
  heroQuote: { text: 'Clichy-sous-Bois copro ANRU 200 lots (grand projet), portail coulissant + subvention 40 %.', author: 'Conseil syndical', context: 'Clichy-sous-Bois Chêne-Pointu' },
  cityGuide: { intro: `Clichy-sous-Bois (30 000 habitants, 93 est) ville ANRU 2 prioritaire — grandes copros années 60-70 en rénovation complète + pavillons + quelques commerces. Demande ANRU massive.`,
    sections: [
      { heading: 'Clichy-sous-Bois — ANRU 2 prioritaire', body: `80% copros ANRU années 60-70 (Bosquet, Chêne-Pointu), 15% pavillons, 5% commerces. Portail coulissant 4-6 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Coulissant 4 m : 4 200-5 800 €. Industriel 6 m : 6 500-9 500 €. Subvention ANRU 35-45 % prioritaire.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU prioritaire — copro Chêne-Pointu Clichy-sous-Bois', location: 'Chêne-Pointu, Clichy-sous-Bois', date: 'Juillet 2024', description: `Copro 200 lots ANRU 2 prioritaire Chêne-Pointu. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Bouygues Construction. Subvention ANRU 45 % obtenue.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 900 €', duration: '22 sem.', surface: '4 m' }, quote: { text: 'Clichy-sous-Bois copro ANRU 200 lots (grand projet), portail coulissant + subvention 40 %.', author: 'Conseil syndical', context: 'Clichy-sous-Bois Chêne-Pointu' } }],
  localReviews: [
    { text: 'Clichy-sous-Bois copro ANRU 200 lots (grand projet), portail coulissant + subvention 40 %.', author: 'Conseil syndical', context: 'Clichy-sous-Bois Chêne-Pointu', rating: 5, date: 'Juillet 2024' },
    { text: 'Coordination Bouygues + ANRU prioritaire Karim. Sans stress malgré ampleur.', author: 'Gestionnaire syndic', context: 'Clichy-sous-Bois Bosquet', rating: 5, date: 'Mars 2024' },
    { text: 'Battant 3,5 m pavillon. Karim sérieux.', author: 'Famille L.', context: 'Clichy-sous-Bois résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est ANRU.', rows: [
    { communeSlug: 'montfermeil', communeName: 'Montfermeil', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'ANRU limitrophe' },
    { communeSlug: 'livry-gargan', communeName: 'Livry-Gargan', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'sevran', communeName: 'Sevran', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU massif' },
  ] },
  localStats: [{ label: 'Portails Clichy-sous-Bois depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 6 (83 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Clichy-sous-Bois ANRU 2 prioritaire grand projet Chêne-Pointu-Bosquet.' },
}
