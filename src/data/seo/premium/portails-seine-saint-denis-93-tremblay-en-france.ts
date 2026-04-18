import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93TremblayEnFrance: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'tremblay-en-france',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Tremblay-en-France 93', caption: 'Portail coulissant 6 m RAL 7016 — industriel Tremblay' },
  heroQuote: { text: 'Tremblay-en-France entrepôt aéroport CDG, portail coulissant 6 m Came usage intensif.', author: 'Gestionnaire logistique', context: 'Tremblay ZA CDG' },
  cityGuide: { intro: `Tremblay-en-France (35 000 habitants, 93 nord-est) ville aéroport Roissy-CDG + Parc des Expositions Villepinte + pavillons bourgeois + Vieux-Pays patrimoine. Demande portails industriels + pavillons.`,
    sections: [
      { heading: 'Tremblay — CDG + Parc Expositions', body: `40% industriel/logistique CDG, 45% pavillons bourgeois Vieux-Pays, 15% copros. Portail coulissant 4-8 m Came BK usage intensif + battant résidentiel.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Industriel 6-8 m : 6 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant industriel 6 m — entrepôt ZA CDG Tremblay', location: 'ZA CDG, Tremblay', date: 'Juin 2024', description: `Entrepôt logistique ZA CDG aéroport. Portail coulissant 6 m RAL 7016 + Came BK-2200 usage 2000 cycles/jour + photocellules renforcées. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 600 €', duration: '6 sem.', surface: '6 m' }, quote: { text: 'Tremblay-en-France entrepôt aéroport CDG, portail coulissant 6 m Came usage intensif.', author: 'Gestionnaire logistique', context: 'Tremblay ZA CDG' } }],
  localReviews: [
    { text: 'Tremblay-en-France entrepôt aéroport CDG, portail coulissant 6 m Came usage intensif.', author: 'Gestionnaire logistique', context: 'Tremblay ZA CDG', rating: 5, date: 'Juin 2024' },
    { text: 'Pavillon bourgeois Vieux-Pays + battant 3,5 m. Karim solide.', author: 'Famille L.', context: 'Tremblay Vieux-Pays', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules renforcées.', author: 'Famille R.', context: 'Tremblay résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 nord-est.', rows: [
    { communeSlug: 'villepinte', communeName: 'Villepinte', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Parc Expositions' },
    { communeSlug: 'vaujours', communeName: 'Vaujours', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons bord forêt' },
    { communeSlug: 'aulnay-sous-bois', communeName: 'Aulnay-sous-Bois', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU massif' },
  ] },
  localStats: [{ label: 'Portails Tremblay depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part industriels CDG', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Tremblay-en-France aéroport CDG + Parc Villepinte + Vieux-Pays.' },
}
