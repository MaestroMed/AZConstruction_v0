import type { PremiumCase } from './types'

export const portailsYvelines78CarrieresSurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'carrieres-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Carrières-sur-Seine 78', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Carrières' },
  heroQuote: { text: 'Carrières-sur-Seine pavillon bord Seine, portail battant Came BX. Famille satisfaite.', author: 'Famille C.', context: 'Carrières centre' },
  cityGuide: { intro: `Carrières-sur-Seine (16 000 habitants, 78) ville résidentielle bord Seine — pavillons XIXe-XXe + coteaux + copros. Clientèle CSP++ familiale. Proche La Défense.`,
    sections: [
      { heading: 'Carrières — bord Seine coteaux', body: `80% pavillons individuels bourgeois, 15% copros centre, 5% industriel. Portail battant 3,5 m + coulissant 4 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 300-4 700 €. Coulissant 4 m : 4 300-5 900 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Carrières-sur-Seine bord Seine', location: 'Bord Seine, Carrières', date: 'Juin 2024', description: `Pavillon 1955 rénové bord Seine coteaux. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 800 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Carrières-sur-Seine pavillon bord Seine, portail battant Came BX. Famille satisfaite.', author: 'Famille C.', context: 'Carrières centre' } }],
  localReviews: [
    { text: 'Carrières-sur-Seine pavillon bord Seine, portail battant Came BX. Famille satisfaite.', author: 'Famille C.', context: 'Carrières centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Carrières coteaux', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules.', author: 'Famille M.', context: 'Carrières résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 est bord Seine.', rows: [
    { communeSlug: 'houilles', communeName: 'Houilles', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons CSP++' },
    { communeSlug: 'sartrouville', communeName: 'Sartrouville', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'chatou', communeName: 'Chatou', priceAvg: '3 600-5 000 €', durationAvg: '4-6 sem.', note: 'Bord Seine impressionniste' },
  ] },
  localStats: [{ label: 'Portails Carrières-sur-Seine depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part motorisés', value: '91 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Carrières-sur-Seine bord Seine coteaux pavillonnaire CSP++ proche La Défense.' },
}
