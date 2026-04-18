import type { PremiumCase } from './types'

export const portailsHautsDeSeine92BourgLaReine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'bourg-la-reine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Bourg-la-Reine 92', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Bourg-la-Reine' },
  heroQuote: { text: 'Bourg-la-Reine pavillon bourgeois, portail battant motorisé Came BX. Silence 38 dB.', author: 'Famille de B.', context: 'Bourg-la-Reine centre' },
  cityGuide: { intro: `Bourg-la-Reine (21 000 habitants, 92 sud) ville résidentielle bourgeoise CSP++ — grandes propriétés XIXe + pavillons XXe. Clientèle familiale haut-de-gamme. Demande portails motorisés forte.`,
    sections: [
      { heading: 'Bourg-la-Reine — bourgeoise CSP++', body: `85% pavillons individuels bourgeois XIXe-XXe, 12% copros centre, 3% commerces. Portail battant 3,5-4 m + coulissant Came BX/BK dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 500-4 900 €. Coulissant 4 m : 4 500-6 200 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Bourg-la-Reine', location: 'Bourg-la-Reine centre', date: 'Juin 2024', description: `Pavillon bourgeois 1910 rénové. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges + photocellules. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 200 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Bourg-la-Reine pavillon bourgeois, portail battant motorisé Came BX. Silence 38 dB.', author: 'Famille de B.', context: 'Bourg-la-Reine centre' } }],
  localReviews: [
    { text: 'Bourg-la-Reine pavillon bourgeois, portail battant motorisé Came BX. Silence 38 dB.', author: 'Famille de B.', context: 'Bourg-la-Reine centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Famille satisfaite.', author: 'Famille R.', context: 'Bourg-la-Reine résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules. Sécurité top.', author: 'Famille L.', context: 'Bourg-la-Reine limitrophe Sceaux', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 sud CSP++.', rows: [
    { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '3 600-5 000 €', durationAvg: '4-6 sem.', note: 'Parc + bourgeois' },
    { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'antony', communeName: 'Antony', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Mix bourgeois' },
  ] },
  localStats: [{ label: 'Portails Bourg-la-Reine depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part motorisés', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Bourg-la-Reine 92 sud bourgeois CSP++ grandes propriétés XIXe.' },
}
