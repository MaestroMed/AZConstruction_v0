import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93Stains: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'stains',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Stains 93', caption: 'Coulissant Came — copro Stains Cité-Jardins' },
  heroQuote: { text: 'Stains copro 120 lots Cité-Jardins, coulissant Came + ANRU. Vote AG OK.', author: 'Conseil syndical', context: 'Stains Cité-Jardins' },
  cityGuide: { intro: `Stains (38 000 habitants, 93) ville avec Cité-Jardins historique 1921 (patrimoine classé) + copros ANRU 2. Demande portails copros ANRU + patrimoine.`,
    sections: [
      { heading: 'Stains — Cité-Jardins + ANRU', body: `80% copros (ANRU 2 + Cité-Jardins patrimoine), 20% pavillons. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 500 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m + ANRU — copro 120 lots Cité-Jardins', location: 'Cité-Jardins, Stains', date: 'Juillet 2024', description: `Copro ANRU 2 120 lots Cité-Jardins (patrimoine classé). Coulissant Came BX-241 + dossier ABF Cité-Jardins. Subvention ANRU 40 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 400 €', duration: '22 sem.', surface: '6 m' }, quote: { text: 'Stains copro 120 lots Cité-Jardins, coulissant Came + ANRU. Vote AG OK.', author: 'Conseil syndical', context: 'Stains Cité-Jardins' } }],
  localReviews: [
    { text: 'Stains copro 120 lots Cité-Jardins, coulissant Came + ANRU. Vote AG OK.', author: 'Conseil syndical', context: 'Stains Cité-Jardins', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant pavillon patrimoine. RAL 7016 validé ABF.', author: 'Famille B.', context: 'Stains centre', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination Bouygues + dossier ANRU. Antoine pro.', author: 'Gestionnaire syndic', context: 'Stains Moulin-Neuf', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 ANRU.', rows: [
    { communeSlug: 'pierrefitte-sur-seine', communeName: 'Pierrefitte-sur-Seine', priceAvg: '6 000-9 000 €', durationAvg: '16-20 sem.', note: 'ANRU actif' },
    { communeSlug: 'epinay-sur-seine', communeName: 'Épinay-sur-Seine', priceAvg: '6 000-9 000 €', durationAvg: '16-20 sem.', note: 'ANRU Orgemont' },
    { communeSlug: 'saint-denis', communeName: 'Saint-Denis', priceAvg: '6 500-9 500 €', durationAvg: '16-22 sem.', note: 'Préfecture ANRU' },
  ] },
  localStats: [{ label: 'Portails Stains depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part ANRU', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Stains Cité-Jardins 1921 patrimoine + ANRU 2.' },
}
