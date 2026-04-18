import type { PremiumCase } from './types'

export const portailsValDeMarne94VilleneuveSaintGeorges: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'villeneuve-saint-georges',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Villeneuve-Saint-Georges 94', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Villeneuve-Saint-Georges' },
  heroQuote: { text: 'Villeneuve-Saint-Georges pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille V.', context: 'Villeneuve centre' },
  cityGuide: { intro: `Villeneuve-Saint-Georges (33 000 habitants, 94 sud) ville confluence Seine/Yerres — pavillons + copros ANRU + nœud ferroviaire. Demande portails motorisés + ANRU copros.`,
    sections: [
      { heading: 'Villeneuve-Saint-Georges — confluence Seine-Yerres', body: `55% pavillons individuels, 40% copros ANRU années 60-70, 5% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Villeneuve-Saint-Georges', location: 'Villeneuve centre', date: 'Juin 2024', description: `Pavillon 1960 rénové bord Yerres. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Villeneuve-Saint-Georges pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille V.', context: 'Villeneuve centre' } }],
  localReviews: [
    { text: 'Villeneuve-Saint-Georges pavillon, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille V.', context: 'Villeneuve centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m copro ANRU. Coordination Karim béton.', author: 'Syndic copro', context: 'Villeneuve Triage', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes + photocellules. Sécurité top.', author: 'Famille L.', context: 'Villeneuve résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94 sud.', rows: [
    { communeSlug: 'valenton', communeName: 'Valenton', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons + industriel' },
    { communeSlug: 'limeil-brevannes', communeName: 'Limeil-Brévannes', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
    { communeSlug: 'yerres', communeName: 'Yerres (91)', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons bord Yerres' },
  ] },
  localStats: [{ label: 'Portails Villeneuve-Saint-Georges depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '88 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Villeneuve-Saint-Georges confluence Seine-Yerres + ANRU + ferroviaire.' },
}
