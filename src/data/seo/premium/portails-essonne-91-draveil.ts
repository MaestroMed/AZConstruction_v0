import type { PremiumCase } from './types'

export const portailsEssonne91Draveil: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'draveil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Draveil 91', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Draveil' },
  heroQuote: { text: 'Draveil pavillon bourgeois bord Seine forêt Sénart, portail battant Came BX. Signature.', author: 'Famille D.', context: 'Draveil centre' },
  cityGuide: { intro: `Draveil (29 000 habitants, 91) ville résidentielle bourgeoise CSP++ bord Seine + forêt Sénart — pavillons XIXe-XXe + copros + Champrosay (maison Daudet). Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Draveil — bord Seine forêt Sénart', body: `82% pavillons individuels bourgeois, 15% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Draveil bord Seine', location: 'Bord Seine, Draveil', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové bord Seine. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 100 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Draveil pavillon bourgeois bord Seine forêt Sénart, portail battant Came BX. Signature.', author: 'Famille D.', context: 'Draveil centre' } }],
  localReviews: [
    { text: 'Draveil pavillon bourgeois bord Seine forêt Sénart, portail battant Came BX. Signature.', author: 'Famille D.', context: 'Draveil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Draveil forêt Sénart', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Draveil Champrosay', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 nord-est.', rows: [
    { communeSlug: 'vigneux-sur-seine', communeName: 'Vigneux-sur-Seine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine mix' },
    { communeSlug: 'montgeron', communeName: 'Montgeron (94)', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
    { communeSlug: 'soisy-sur-seine', communeName: 'Soisy-sur-Seine', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bord Seine' },
  ] },
  localStats: [{ label: 'Portails Draveil depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '93 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Draveil 91 bord Seine forêt Sénart bourgeois CSP++ Champrosay Daudet.' },
}
