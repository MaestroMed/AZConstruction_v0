import type { PremiumCase } from './types'

export const verrieresYvelines78Houilles: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'houilles',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Houilles 78', caption: 'Verrière 6 carreaux noir mat — pavillon Houilles' },
  heroQuote: { text: 'Houilles pavillon années 30, verrière acier soudé. Pose 1 jour propre.', author: 'Famille D.', context: 'Houilles centre' },
  cityGuide: { intro: `Houilles (32 000 habitants, 78) ville résidentielle pavillonnaire dense, accès direct RER A. Demande verrière atelier croissante sur pavillons rénovés.`,
    sections: [
      { heading: 'Houilles — pavillonnaire RER A', body: `80% pavillons individuels années 1920-1960, beaucoup en cours de rénovation. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Houilles 1932', location: 'Centre Houilles', date: 'Juin 2024', description: `Pavillon 1932 rénové, ouverture cuisine sur séjour. Verrière 3,2 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '5 sem.', surface: '8 m²' }, quote: { text: 'Houilles pavillon années 30, verrière acier soudé. Pose 1 jour propre.', author: 'Famille D.', context: 'Houilles centre' } }],
  localReviews: [
    { text: 'Houilles pavillon années 30, verrière acier soudé. Pose 1 jour propre.', author: 'Famille D.', context: 'Houilles centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG meulées invisibles, top métier.', author: 'Famille C.', context: 'Houilles nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Atelier vrai métier.', author: 'Hugo V.', context: 'Houilles sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78.', rows: [
    { communeSlug: 'sartrouville', communeName: 'Sartrouville', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'carrieres-sur-seine', communeName: 'Carrières-sur-Seine', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'bezons', communeName: 'Bezons', priceAvg: '1 100-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Mix pavillons + apparts' },
  ] },
  localStats: [{ label: 'Verrières Houilles depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons rénovés', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Houilles pavillonnaire dense, demande croissante.' },
}
