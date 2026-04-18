import type { PremiumCase } from './types'

export const portailsValDeMarne94Orly: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'orly',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Orly 94', caption: 'Portail coulissant 6 m RAL 7016 — industriel Orly' },
  heroQuote: { text: 'Orly entrepôt logistique aéroport, portail coulissant 6 m Came usage intensif. Karim solide.', author: 'Gestionnaire logistique', context: 'Orly ZA aéroport' },
  cityGuide: { intro: `Orly (22 000 habitants, 94 sud) ville aéroport + SILIC (zone logistique européenne) + pavillons + copros ANRU. Demande portails industriels + pavillons résidentiels forte.`,
    sections: [
      { heading: 'Orly — aéroport + SILIC + ANRU', body: `40% industriel/logistique (SILIC aéroport), 35% copros ANRU, 25% pavillons individuels. Portail coulissant 4-8 m Came BK usage intensif + ANRU copros.` },
      { heading: 'Tarifs', body: `Coulissant 4 m résidentiel : 4 200-5 800 €. Industriel 6-8 m : 6 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant industriel 6 m — entrepôt SILIC Orly', location: 'SILIC, Orly', date: 'Juin 2024', description: `Entrepôt logistique SILIC aéroport. Portail coulissant 6 m RAL 7016 + Came BK-2200 usage 2000 cycles/jour + photocellules renforcées. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 400 €', duration: '6 sem.', surface: '6 m' }, quote: { text: 'Orly entrepôt logistique aéroport, portail coulissant 6 m Came usage intensif. Karim solide.', author: 'Gestionnaire logistique', context: 'Orly ZA aéroport' } }],
  localReviews: [
    { text: 'Orly entrepôt logistique aéroport, portail coulissant 6 m Came usage intensif. Karim solide.', author: 'Gestionnaire logistique', context: 'Orly ZA aéroport', rating: 5, date: 'Juin 2024' },
    { text: 'Pavillon résidentiel + battant 3,5 m. Karim propre.', author: 'Famille L.', context: 'Orly résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Coulissant 4 m copro ANRU. Coordination exemplaire.', author: 'Syndic copro', context: 'Orly centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 sud aéroport.', rows: [
    { communeSlug: 'villeneuve-le-roi', communeName: 'Villeneuve-le-Roi', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + bord Seine' },
    { communeSlug: 'choisy-le-roi', communeName: 'Choisy-le-Roi', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + ANRU' },
    { communeSlug: 'thiais', communeName: 'Thiais', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + commerces' },
  ] },
  localStats: [{ label: 'Portails Orly depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part industriels', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Orly aéroport + SILIC + ANRU mix industriel + résidentiel.' },
}
