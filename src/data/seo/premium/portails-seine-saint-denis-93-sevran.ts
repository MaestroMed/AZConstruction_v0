import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93Sevran: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'sevran',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Sevran 93', caption: 'Portail coulissant 4 m RAL 7016 — copro Sevran' },
  heroQuote: { text: 'Sevran copro ANRU 130 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Sevran Beaudottes' },
  cityGuide: { intro: `Sevran (52 000 habitants, 93 est) ville mixte pavillons + grandes copros ANRU + canal Ourcq. Demande portails motorisés + ANRU très forte.`,
    sections: [
      { heading: 'Sevran — ANRU 2 massif Beaudottes', body: `35% pavillons individuels, 60% copros ANRU années 60-70 (Beaudottes, Rougemont), 5% industriel. Portail coulissant 4 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU — copro Sevran Beaudottes', location: 'Beaudottes, Sevran', date: 'Juillet 2024', description: `Copro 130 lots ANRU 2 Beaudottes. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Bouygues. Subvention ANRU 40 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 000 €', duration: '20 sem.', surface: '4 m' }, quote: { text: 'Sevran copro ANRU 130 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Sevran Beaudottes' } }],
  localReviews: [
    { text: 'Sevran copro ANRU 130 lots, portail coulissant + subvention 40 %. Vote AG unanime.', author: 'Conseil syndical', context: 'Sevran Beaudottes', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant 3,5 m pavillon bord canal. Karim sérieux.', author: 'Famille L.', context: 'Sevran canal', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination Bouygues + ANRU Karim. Sans stress.', author: 'Gestionnaire syndic', context: 'Sevran Rougemont', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est ANRU.', rows: [
    { communeSlug: 'aulnay-sous-bois', communeName: 'Aulnay-sous-Bois', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU massif' },
    { communeSlug: 'livry-gargan', communeName: 'Livry-Gargan', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'villepinte', communeName: 'Villepinte', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + parc expos' },
  ] },
  localStats: [{ label: 'Portails Sevran depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '6 / 8 (75 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Sevran ANRU 2 actif Beaudottes-Rougemont canal Ourcq.' },
}
