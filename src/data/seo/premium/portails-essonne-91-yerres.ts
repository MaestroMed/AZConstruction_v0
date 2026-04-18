import type { PremiumCase } from './types'

export const portailsEssonne91Yerres: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'yerres',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Yerres 91', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Yerres' },
  heroQuote: { text: 'Yerres pavillon bourgeois propriété Caillebotte, portail battant Came BX. Signature.', author: 'Famille de Y.', context: 'Yerres centre' },
  cityGuide: { intro: `Yerres (29 000 habitants, 91 nord-est) ville résidentielle bourgeoise CSP++ — propriété Caillebotte (peintre impressionniste) + pavillons XIXe-XXe + bord Yerres. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Yerres — Caillebotte impressionniste bourgeois', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Yerres bord Yerres', location: 'Bord Yerres, Yerres', date: 'Juin 2024', description: `Pavillon bourgeois 1910 rénové bord Yerres (proche propriété Caillebotte). Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Yerres pavillon bourgeois propriété Caillebotte, portail battant Came BX. Signature.', author: 'Famille de Y.', context: 'Yerres centre' } }],
  localReviews: [
    { text: 'Yerres pavillon bourgeois propriété Caillebotte, portail battant Came BX. Signature.', author: 'Famille de Y.', context: 'Yerres centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Yerres résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Yerres Les Sénarts', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 nord-est.', rows: [
    { communeSlug: 'crosne', communeName: 'Crosne', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'brunoy', communeName: 'Brunoy', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'montgeron', communeName: 'Montgeron', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Yerres depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part motorisés', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Yerres 91 nord-est bourgeois CSP++ propriété Caillebotte impressionniste.' },
}
