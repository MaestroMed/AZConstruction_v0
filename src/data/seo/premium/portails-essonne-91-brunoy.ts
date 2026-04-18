import type { PremiumCase } from './types'

export const portailsEssonne91Brunoy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'brunoy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Brunoy 91', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Brunoy' },
  heroQuote: { text: 'Brunoy pavillon bourgeois bord Yerres, portail battant motorisé. Signature.', author: 'Famille B.', context: 'Brunoy centre' },
  cityGuide: { intro: `Brunoy (25 000 habitants, 91) ville résidentielle pavillonnaire bourgeoise CSP++ bord Yerres — pavillons XIXe-XXe + Église Saint-Médard. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Brunoy — bord Yerres pavillonnaire', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Brunoy', location: 'Brunoy centre', date: 'Juin 2024', description: `Pavillon bourgeois 1920 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 000 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Brunoy pavillon bourgeois bord Yerres, portail battant motorisé. Signature.', author: 'Famille B.', context: 'Brunoy centre' } }],
  localReviews: [
    { text: 'Brunoy pavillon bourgeois bord Yerres, portail battant motorisé. Signature.', author: 'Famille B.', context: 'Brunoy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Brunoy résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille M.', context: 'Brunoy limitrophe Yerres', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 nord-est.', rows: [
    { communeSlug: 'yerres', communeName: 'Yerres', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Caillebotte bourgeois' },
    { communeSlug: 'epinay-sous-senart', communeName: 'Épinay-sous-Sénart', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'quincy-sous-senart', communeName: 'Quincy-sous-Sénart', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Brunoy depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part motorisés', value: '94 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Brunoy 91 bord Yerres pavillonnaire bourgeois CSP++.' },
}
