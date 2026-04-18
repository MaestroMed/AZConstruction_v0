import type { PremiumCase } from './types'

export const portailsEssonne91Arpajon: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'arpajon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Arpajon 91', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Arpajon' },
  heroQuote: { text: 'Arpajon pavillon bourgeois centre historique, portail battant Came BX. Pose propre.', author: 'Famille A.', context: 'Arpajon centre' },
  cityGuide: { intro: `Arpajon (10 000 habitants, 91) ville sous-préfectorale historique — Halles XVIIe (MH) + pavillons + copros. Clientèle CSP++ mixte.`,
    sections: [
      { heading: 'Arpajon — Halles XVIIe historique', body: `70% pavillons individuels, 25% copros centre, 5% ABF Halles MH. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Arpajon', location: 'Arpajon centre', date: 'Juin 2024', description: `Pavillon 1965 rénové proche Halles historiques. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Arpajon pavillon bourgeois centre historique, portail battant Came BX. Pose propre.', author: 'Famille A.', context: 'Arpajon centre' } }],
  localReviews: [
    { text: 'Arpajon pavillon bourgeois centre historique, portail battant Came BX. Pose propre.', author: 'Famille A.', context: 'Arpajon centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Arpajon résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Arpajon Halles', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91 sud.', rows: [
    { communeSlug: 'la-norville', communeName: 'La Norville', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
    { communeSlug: 'egly', communeName: 'Égly', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons rural' },
    { communeSlug: 'saint-germain-les-arpajon', communeName: 'Saint-Germain-lès-Arpajon', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Arpajon depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '92 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Arpajon 91 sous-préfectorale Halles XVIIe MH historique.' },
}
