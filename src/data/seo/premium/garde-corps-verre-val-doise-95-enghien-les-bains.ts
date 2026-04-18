import type { PremiumCase } from './types'

export const gardeCorpsVerreValDoise95EnghienLesBains: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-doise-95',
  communeSlug: 'enghien-les-bains',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Enghien-les-Bains 95', caption: 'Verre + inox brossé — pavillon thermal Enghien' },
  heroQuote: { text: 'Enghien pavillon bord lac thermal, verre + inox brossé. Vue dégagée exceptionnelle.', author: 'Famille de L.', context: 'Enghien bord lac' },
  cityGuide: { intro: `Enghien-les-Bains (12 000 habitants, 95) ville thermale + lac + casino. Pavillons bourgeois + villas + copros haut-de-gamme. Clientèle CSP++. Demande verre + inox brossé en hausse.`,
    sections: [
      { heading: 'Enghien — thermale bord lac', body: `75% pavillons/villas bourgeois, 20% copros haut-de-gamme, 5% commerces. Verre + main courante inox brossé 316L (humidité thermale) dominant.` },
      { heading: 'Tarifs', body: `Verre + acier RAL : 500-700 €/ml. Verre + inox brossé 316L : 650-900 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps verre + inox 316L — pavillon Enghien bord lac', location: 'Bord lac Enghien', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové bord lac thermal. Garde-corps verre feuilleté 8+8 + main courante inox brossé 316L (corrosion humidité). Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 800 €', duration: '11 sem.', surface: '13 ml' }, quote: { text: 'Enghien pavillon bord lac thermal, verre + inox brossé. Vue dégagée exceptionnelle.', author: 'Famille de L.', context: 'Enghien bord lac' } }],
  localReviews: [
    { text: 'Enghien pavillon bord lac thermal, verre + inox brossé. Vue dégagée exceptionnelle.', author: 'Famille de L.', context: 'Enghien bord lac', rating: 5, date: 'Juin 2024' },
    { text: 'Verre terrasse villa. Finitions haute couture Sophie.', author: 'Famille V.', context: 'Enghien résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L anti-corrosion thermale. Investissement juste.', author: 'Famille M.', context: 'Enghien casino', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 95/93 thermal.', rows: [
    { communeSlug: 'saint-gratien', communeName: 'Saint-Gratien', priceAvg: '500-700 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'montmorency', communeName: 'Montmorency', priceAvg: '520-720 €/ml', durationAvg: '8-12 sem.', note: 'Bourgeois XIXe' },
    { communeSlug: 'eaubonne', communeName: 'Eaubonne', priceAvg: '500-700 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons centre' },
  ] },
  localStats: [{ label: 'Garde-corps verre Enghien depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part inox 316L', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Enghien-les-Bains thermale lac CSP++ humidité 316L.' },
}
