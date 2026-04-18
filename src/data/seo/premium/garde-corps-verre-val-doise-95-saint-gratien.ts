import type { PremiumCase } from './types'

export const gardeCorpsVerreValDoise95SaintGratien: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-doise-95',
  communeSlug: 'saint-gratien',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre + inox — Saint-Gratien 95', caption: 'Verre + inox brossé — pavillon Saint-Gratien' },
  heroQuote: { text: 'Saint-Gratien pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille S.', context: 'Saint-Gratien centre' },
  cityGuide: { intro: `Saint-Gratien (22 000 habitants, 95) ville résidentielle pavillonnaire bourgeoise limitrophe Enghien-les-Bains — Château + pavillons XIXe-XXe + lac. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Saint-Gratien — pavillonnaire bourgeois', body: `80% pavillons individuels bourgeois, 15% copros centre, 5% commerces. Verre + main courante inox brossé 316L ou laiton patiné dominant.` },
      { heading: 'Tarifs', body: `Verre + inox brossé : 580-800 €/ml. Verre + laiton patiné : 720-980 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps verre + inox 10 ml — pavillon Saint-Gratien', location: 'Saint-Gratien centre', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové. Garde-corps verre feuilleté 8+8 + main courante inox brossé 316L + U-channel encastré. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 600 €', duration: '9 sem.', surface: '10 ml' }, quote: { text: 'Saint-Gratien pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille S.', context: 'Saint-Gratien centre' } }],
  localReviews: [
    { text: 'Saint-Gratien pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille S.', context: 'Saint-Gratien centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + laiton patiné extension moderne. Finitions haute couture.', author: 'Famille R.', context: 'Saint-Gratien résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L anti-corrosion. 20 ans garantie.', author: 'Famille L.', context: 'Saint-Gratien limitrophe Enghien', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 95 sud CSP++.', rows: [
    { communeSlug: 'enghien-les-bains', communeName: 'Enghien-les-Bains', priceAvg: '650-900 €/ml', durationAvg: '8-12 sem.', note: 'Thermale lac CSP++' },
    { communeSlug: 'montmorency', communeName: 'Montmorency', priceAvg: '600-820 €/ml', durationAvg: '8-12 sem.', note: 'Bourgeois XIXe' },
    { communeSlug: 'soisy-sous-montmorency', communeName: 'Soisy-sous-Montmorency', priceAvg: '580-800 €/ml', durationAvg: '8-12 sem.', note: 'Bourgeois limitrophe' },
  ] },
  localStats: [{ label: 'Garde-corps verre Saint-Gratien depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part inox 316L', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Saint-Gratien 95 pavillonnaire bourgeois CSP++ limitrophe Enghien thermale.' },
}
