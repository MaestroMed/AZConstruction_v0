import type { PremiumCase } from './types'

export const gardeCorpsVerreSeineEtMarne77Fontainebleau: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'fontainebleau',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Fontainebleau 77', caption: 'Verre + laiton patiné — hôtel particulier Fontainebleau' },
  heroQuote: { text: 'Fontainebleau hôtel particulier Château, verre + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Fontainebleau centre' },
  cityGuide: { intro: `Fontainebleau (15 000 habitants, 77) ville royale historique UNESCO Château + Forêt. Hôtels particuliers XVIIe-XVIIIe + pavillons bourgeois. Zone ABF intégrale. Clientèle CSP++++.`,
    sections: [
      { heading: 'Fontainebleau — royale ABF UNESCO', body: `85% zone ABF Château (prescriptions strictes), 15% extérieur. Verre + laiton patiné validé ABF dominant.` },
      { heading: 'Tarifs', body: `Verre + acier RAL ABF : 520-720 €/ml. Verre + laiton patiné : 680-950 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + laiton patiné 18 ml — hôtel particulier Fontainebleau', location: 'Centre Fontainebleau ABF', date: 'Juillet 2024', description: `Hôtel particulier XVIIIe ABF Château. Verre 8+8 + main courante laiton patine bronze florentin. Dossier ABF 10 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '15 600 €', duration: '18 sem. (ABF)', surface: '18 ml' }, quote: { text: 'Fontainebleau hôtel particulier Château, verre + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Fontainebleau centre' } }],
  localReviews: [
    { text: 'Fontainebleau hôtel particulier Château, verre + laiton patiné ABF validé.', author: 'Famille de V.', context: 'Fontainebleau centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + acier RAL 7016 pavillon Forêt. Cohérence paysage.', author: 'Famille R.', context: 'Fontainebleau Forêt', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château géré par Sophie. 100 % acceptations.', author: 'Famille B.', context: 'Fontainebleau résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 77 sud.', rows: [
    { communeSlug: 'avon', communeName: 'Avon', priceAvg: '500-700 €/ml', durationAvg: '12-16 sem.', note: 'Limitrophe Fontainebleau' },
    { communeSlug: 'vulaines-sur-seine', communeName: 'Vulaines-sur-Seine', priceAvg: '500-700 €/ml', durationAvg: '10-14 sem.', note: 'Bord Seine bourgeois' },
    { communeSlug: 'samois-sur-seine', communeName: 'Samois-sur-Seine', priceAvg: '500-700 €/ml', durationAvg: '10-14 sem.', note: 'Bord Seine CSP++' },
  ] },
  localStats: [{ label: 'Garde-corps verre Fontainebleau depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Fontainebleau royale UNESCO ABF intégrale.' },
}
