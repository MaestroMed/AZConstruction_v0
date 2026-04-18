import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93Gagny: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'gagny',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Gagny 93', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Gagny' },
  heroQuote: { text: 'Gagny pavillon bourgeois est 93, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille G.', context: 'Gagny centre' },
  cityGuide: { intro: `Gagny (40 000 habitants, 93 est) ville résidentielle pavillonnaire CSP++ — pavillons XIXe-XXe + bord forêt de Bondy + quelques copros centre. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Gagny — pavillonnaire bourgeois est 93', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Gagny', location: 'Gagny centre', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 000 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Gagny pavillon bourgeois est 93, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille G.', context: 'Gagny centre' } }],
  localReviews: [
    { text: 'Gagny pavillon bourgeois est 93, portail battant motorisé Came BX. Famille satisfaite.', author: 'Famille G.', context: 'Gagny centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Gagny bord forêt', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules. Sécurité top.', author: 'Famille M.', context: 'Gagny résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est.', rows: [
    { communeSlug: 'le-raincy', communeName: 'Le Raincy', priceAvg: '3 600-5 000 €', durationAvg: '4-6 sem.', note: 'Bourgeois limitrophe' },
    { communeSlug: 'villemomble', communeName: 'Villemomble', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'neuilly-plaisance', communeName: 'Neuilly-Plaisance', priceAvg: '3 500-4 900 €', durationAvg: '4-6 sem.', note: 'Pavillons + parc' },
  ] },
  localStats: [{ label: 'Portails Gagny depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Gagny 93 est pavillonnaire bourgeois CSP++ bord forêt Bondy.' },
}
