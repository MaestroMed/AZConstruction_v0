import type { PremiumCase } from './types'

export const gardeCorpsVerreHautsDeSeine92BoisColombes: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'bois-colombes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre + inox — Bois-Colombes 92', caption: 'Verre + inox brossé — pavillon Bois-Colombes' },
  heroQuote: { text: 'Bois-Colombes pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille B.', context: 'Bois-Colombes centre' },
  cityGuide: { intro: `Bois-Colombes (28 000 habitants, 92) ville résidentielle pavillonnaire bourgeoise limitrophe La Garenne. Clientèle CSP++ familiale. Demande verre + inox brossé en hausse.`,
    sections: [
      { heading: 'Bois-Colombes — pavillonnaire bourgeois', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Verre + main courante inox brossé 316L dominant.` },
      { heading: 'Tarifs', body: `Verre + acier RAL : 480-680 €/ml. Verre + inox brossé 316L : 620-870 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps verre + inox 10 ml — pavillon Bois-Colombes', location: 'Bois-Colombes centre', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové extension moderne. Garde-corps verre feuilleté 8+8 + main courante inox brossé 316L + U-channel encastré. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 400 €', duration: '9 sem.', surface: '10 ml' }, quote: { text: 'Bois-Colombes pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille B.', context: 'Bois-Colombes centre' } }],
  localReviews: [
    { text: 'Bois-Colombes pavillon bourgeois rénové, verre + inox brossé. Transparence maximale.', author: 'Famille B.', context: 'Bois-Colombes centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + acier RAL 7016 pavillon rénové. Discret.', author: 'Famille R.', context: 'Bois-Colombes résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L anti-corrosion. 20 ans garantie.', author: 'Famille L.', context: 'Bois-Colombes limitrophe La Garenne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 92 nord-ouest.', rows: [
    { communeSlug: 'la-garenne-colombes', communeName: 'La Garenne-Colombes', priceAvg: '550-750 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'colombes', communeName: 'Colombes', priceAvg: '480-680 €/ml', durationAvg: '8-12 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'asnieres-sur-seine', communeName: 'Asnières-sur-Seine', priceAvg: '520-720 €/ml', durationAvg: '8-12 sem.', note: 'Bord Seine mix' },
  ] },
  localStats: [{ label: 'Garde-corps verre Bois-Colombes depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part inox brossé', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Bois-Colombes pavillonnaire bourgeois CSP++ extensions modernes.' },
}
