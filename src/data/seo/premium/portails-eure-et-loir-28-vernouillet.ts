import type { PremiumCase } from './types'

export const portailsEureEtLoir28Vernouillet: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'vernouillet',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Vernouillet 28', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Vernouillet' },
  heroQuote: { text: 'Vernouillet pavillon Drouais, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre' },
  cityGuide: { intro: `Vernouillet (12 000 habitants, 28) ville limitrophe Dreux — pavillons années 50-80 + copros + zones industrielles (Philips, Jallatte). Demande portails motorisés stable.`,
    sections: [
      { heading: 'Vernouillet — Drouais pavillonnaire', body: `70% pavillons individuels, 20% copros, 10% industriel. Portail coulissant 4 m Came BK dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 2 900-4 300 €. Coulissant 4 m : 3 900-5 500 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Vernouillet', location: 'Vernouillet centre', date: 'Juin 2024', description: `Pavillon 1975 rénové. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Vernouillet pavillon Drouais, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre' } }],
  localReviews: [
    { text: 'Vernouillet pavillon Drouais, portail coulissant motorisé Came BK. Pose propre.', author: 'Famille V.', context: 'Vernouillet centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Vernouillet résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Karim sérieux. Équipe propre.', author: 'Famille D.', context: 'Vernouillet Tabellionne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 28 Dreux.', rows: [
    { communeSlug: 'dreux', communeName: 'Dreux', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture 28' },
    { communeSlug: 'anet', communeName: 'Anet', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Château patrimoine' },
    { communeSlug: 'saint-remy-sur-avre', communeName: 'Saint-Rémy-sur-Avre', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Industriel' },
  ] },
  localStats: [{ label: 'Portails Vernouillet depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Vernouillet Drouais limitrophe Dreux pavillons + industriel.' },
}
