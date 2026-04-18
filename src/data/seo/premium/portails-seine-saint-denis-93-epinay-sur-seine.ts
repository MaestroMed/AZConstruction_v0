import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93EpinaySurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'epinay-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Épinay-sur-Seine 93', caption: 'Portail coulissant 4 m RAL 7016 — copro Épinay' },
  heroQuote: { text: 'Épinay-sur-Seine copro ANRU 100 lots, portail coulissant + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Épinay centre' },
  cityGuide: { intro: `Épinay-sur-Seine (55 000 habitants, 93) ville bord Seine — pavillons + grandes copros ANRU + zones industrielles. Demande portails ANRU + pavillons résidentiels.`,
    sections: [
      { heading: 'Épinay — bord Seine ANRU', body: `30% pavillons individuels, 60% copros ANRU années 60-70, 10% industriel. Portail coulissant 4 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU — copro Épinay-sur-Seine', location: 'Épinay centre', date: 'Juillet 2024', description: `Copro 100 lots ANRU 2. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Eiffage. Subvention ANRU 35 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '18 sem.', surface: '4 m' }, quote: { text: 'Épinay-sur-Seine copro ANRU 100 lots, portail coulissant + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Épinay centre' } }],
  localReviews: [
    { text: 'Épinay-sur-Seine copro ANRU 100 lots, portail coulissant + subvention 35 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Épinay centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant 3,5 m pavillon bord Seine. Karim sérieux.', author: 'Famille L.', context: 'Épinay bord Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination Eiffage + ANRU Karim. Sans stress.', author: 'Gestionnaire syndic', context: 'Épinay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 nord-ouest.', rows: [
    { communeSlug: 'saint-denis', communeName: 'Saint-Denis', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Basilique + ANRU' },
    { communeSlug: 'pierrefitte-sur-seine', communeName: 'Pierrefitte-sur-Seine', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + ANRU' },
    { communeSlug: 'villetaneuse', communeName: 'Villetaneuse', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Université + ANRU' },
  ] },
  localStats: [{ label: 'Portails Épinay depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 7 (71 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Épinay-sur-Seine bord Seine ANRU 2 actif grandes copros.' },
}
