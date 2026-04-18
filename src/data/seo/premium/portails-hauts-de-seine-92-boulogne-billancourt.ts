import type { PremiumCase } from './types'

export const portailsHautsDeSeine92BoulogneBillancourt: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'boulogne-billancourt',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Boulogne-Billancourt', caption: 'Coulissant motorisé Came — pavillon Trapèze Boulogne' },
  heroQuote: { text: 'Pavillon Trapèze, autoportant impeccable. Sans rail, parfait pour notre allée pavée.', author: 'Famille T.', context: 'Trapèze, Boulogne' },
  cityGuide: { intro: `Boulogne-Billancourt (122 000 habitants) compte beaucoup de pavillons individuels Trapèze + copros récentes Bords de Seine. Demande équilibrée portails copros + pavillons.`,
    sections: [
      { heading: 'Boulogne — pavillons Trapèze + copros récentes', body: `40% pavillons individuels, 60% copros. Coulissant motorisé Came + autoportant pavillons.` },
      { heading: 'Tarifs Boulogne', body: `Coulissant copro : 5 800-7 800 €. Autoportant pavillon : 7 200-9 800 €.` },
    ] },
  caseStudies: [{ title: 'Autoportant 5 m motorisé — pavillon Trapèze', location: 'Trapèze, Boulogne', date: 'Juillet 2024', description: `Remplacement portail bois ancien par autoportant lames horizontales motorisé Came. Pose 1 jour propre.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 200 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Pavillon Trapèze, autoportant impeccable. Sans rail, parfait pour notre allée pavée.', author: 'Famille T.', context: 'Trapèze' } }],
  localReviews: [
    { text: 'Pavillon Trapèze, autoportant impeccable. Sans rail, parfait pour notre allée pavée.', author: 'Famille T.', context: 'Trapèze, Boulogne', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant copro 6 m motorisé Came. Vote AG OK, pose 2 jours.', author: 'Syndic', context: 'Bords de Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Battant motorisé maison Marcel-Sembat. Service complet, sérieux.', author: 'Famille D.', context: 'Marcel-Sembat', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines.', rows: [
    { communeSlug: 'issy-les-moulineaux', communeName: 'Issy-les-Moulineaux', priceAvg: '5 800-8 200 €', durationAvg: '8-12 sem.', note: 'Programmes neufs' },
    { communeSlug: 'sevres', communeName: 'Sèvres', priceAvg: '5 500-7 800 €', durationAvg: '8-12 sem.', note: 'Pavillons coteaux' },
    { communeSlug: 'meudon', communeName: 'Meudon', priceAvg: '5 800-8 500 €', durationAvg: '8-12 sem.', note: 'Pavillons Meudon' },
  ] },
  localStats: [{ label: 'Portails Boulogne depuis 2020', value: '~14' }, { label: 'Note moyenne Boulogne', value: '4,9 / 5' }, { label: 'Part autoportants', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible CSP+ Trapèze + Bords de Seine.' },
}
