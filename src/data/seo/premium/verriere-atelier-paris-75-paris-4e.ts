import type { PremiumCase } from './types'

export const verriereAtelierParis75Paris4e: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'paris-75',
  communeSlug: 'paris-4e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 4e', caption: 'Verrière 8 carreaux — loft Marais Paris 4e' },
  heroQuote: { text: 'Paris 4e Marais hôtel particulier XVIIe, verrière 8 carreaux ABF validé. Cohérence Grand Siècle.', author: 'Famille de R.', context: 'Paris 4e Marais' },
  cityGuide: { intro: `Paris 4e (29 000 habitants, 75) arrondissement historique Marais + Île Saint-Louis + Île de la Cité + Notre-Dame. Zone ABF intégrale. Hôtels particuliers XVIIe-XVIIIe + haussmannien. Clientèle CSP++++.`,
    sections: [
      { heading: 'Paris 4e — Marais hôtels particuliers', body: `60% hôtels particuliers XVIIe-XVIIIe, 35% copros haussmanniennes, 5% reconversions (ex-ateliers). Verrière 8-10 carreaux profil noir mat ou laiton patiné ABF validé dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² ABF : 5 800-7 800 €. Avec profil laiton patiné ABF : 9 500-13 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux laiton patiné ABF — hôtel particulier Paris 4e Marais', location: 'Marais, Paris 4e', date: 'Juillet 2024', description: `Hôtel particulier XVIIe rénové Marais. Verrière 4,5 m × 2,80 m profils 40 mm laiton patine bronze florentin + dossier ABF 10 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 400 €', duration: '17 sem. (ABF)', surface: '12,6 m²' }, quote: { text: 'Paris 4e Marais hôtel particulier XVIIe, verrière 8 carreaux ABF validé. Cohérence Grand Siècle.', author: 'Famille de R.', context: 'Paris 4e Marais' } }],
  localReviews: [
    { text: 'Paris 4e Marais hôtel particulier XVIIe, verrière 8 carreaux ABF validé. Cohérence Grand Siècle.', author: 'Famille de R.', context: 'Paris 4e Marais', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur 14 m² loft Île Saint-Louis. Soudures TIG invisibles.', author: 'Famille V.', context: 'Paris 4e Île Saint-Louis', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Notre-Dame géré par Sophie. 100 % acceptation.', author: 'Famille L.', context: 'Paris 4e centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris centre historique.', rows: [
    { communeSlug: 'paris-3e', communeName: 'Paris 3e', priceAvg: '1 400-2 000 €/m²', durationAvg: '14-18 sem. ABF', note: 'Marais Haut' },
    { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '1 500-2 100 €/m²', durationAvg: '14-18 sem. ABF', note: 'Louvre prestige' },
    { communeSlug: 'paris-5e', communeName: 'Paris 5e', priceAvg: '1 400-2 000 €/m²', durationAvg: '14-18 sem. ABF', note: 'Latin Panthéon' },
  ] },
  localStats: [{ label: 'Verrières Paris 4e depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '100 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 4e Marais Île Saint-Louis Notre-Dame hôtels particuliers ABF intégrale.' },
}
