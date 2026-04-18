import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris2e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-2e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier RAL 7016 — Paris 2e', caption: 'Garde-corps acier — appart haussmannien Paris 2e' },
  heroQuote: { text: 'Paris 2e appart haussmannien passages couverts, garde-corps acier ABF validé. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 2e Sentier' },
  cityGuide: { intro: `Paris 2e (22 000 habitants, 75) arrondissement central Bourse + passages couverts XIXe (Vivienne, Panoramas, Choiseul) + Sentier mode. Zone ABF majoritaire haussmannien. Clientèle CSP+++ mixte.`,
    sections: [
      { heading: 'Paris 2e — Bourse passages couverts', body: `95% copros haussmanniennes XIXe, 5% hôtels particuliers. Garde-corps acier RAL 7016 + main courante bois noyer ou laiton patiné ABF validé dominant.` },
      { heading: 'Tarifs', body: `Acier RAL 7016 + bois noyer : 480-680 €/ml. Acier + laiton patiné ABF : 620-870 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier RAL 7016 + bois noyer — appart haussmannien Paris 2e Sentier', location: 'Sentier, Paris 2e', date: 'Juin 2024', description: `Appart haussmannien 120 m² 1868 rénové Sentier. Garde-corps acier thermolaqué RAL 7016 + main courante bois noyer massif huilé. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '10 sem. (ABF)', surface: '12 ml' }, quote: { text: 'Paris 2e appart haussmannien passages couverts, garde-corps acier ABF validé. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 2e Sentier' } }],
  localReviews: [
    { text: 'Paris 2e appart haussmannien passages couverts, garde-corps acier ABF validé. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 2e Sentier', rating: 5, date: 'Juin 2024' },
    { text: 'Laiton patiné + acier brossé loft Sentier. Qualité haute couture.', author: 'Studio M.', context: 'Paris 2e Bourse', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF passage couvert géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Paris 2e Vivienne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps arrondissements voisins Paris centre.', rows: [
    { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '550-800 €/ml', durationAvg: '10-14 sem.', note: 'Louvre ABF prestige' },
    { communeSlug: 'paris-3e', communeName: 'Paris 3e', priceAvg: '520-750 €/ml', durationAvg: '10-14 sem.', note: 'Marais historique' },
    { communeSlug: 'paris-9e', communeName: 'Paris 9e', priceAvg: '500-720 €/ml', durationAvg: '8-12 sem.', note: 'Opéra haussmannien' },
  ] },
  localStats: [{ label: 'Garde-corps Paris 2e depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 2e passages couverts Bourse Sentier ABF haussmannien.' },
}
