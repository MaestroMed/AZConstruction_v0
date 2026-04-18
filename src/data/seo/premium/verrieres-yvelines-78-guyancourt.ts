import type { PremiumCase } from './types'

export const verrieresYvelines78Guyancourt: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'guyancourt',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Guyancourt 78', caption: 'Verrière 6 carreaux — pavillon Guyancourt' },
  heroQuote: { text: 'Guyancourt pavillon ZAC Technocentre, verrière 6 carreaux. Pose propre.', author: 'Famille G.', context: 'Guyancourt centre' },
  cityGuide: { intro: `Guyancourt (30 000 habitants, 78) ville Saint-Quentin-en-Yvelines — pavillons + sièges sociaux (Renault Technocentre) + golf. Clientèle CSP++ cadres.`,
    sections: [
      { heading: 'Guyancourt — SQY Renault Technocentre', body: `80% pavillons individuels ZAC, 15% copros, 5% sièges sociaux (Renault). Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 100-6 900 €. Avec porte battante : 8 100-11 400 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Guyancourt Technocentre', location: 'Technocentre, Guyancourt', date: 'Juin 2024', description: `Pavillon ZAC 1995 rénové proche Renault Technocentre. Verrière 3,8 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '5 sem.', surface: '9,9 m²' }, quote: { text: 'Guyancourt pavillon ZAC Technocentre, verrière 6 carreaux. Pose propre.', author: 'Famille G.', context: 'Guyancourt centre' } }],
  localReviews: [
    { text: 'Guyancourt pavillon ZAC Technocentre, verrière 6 carreaux. Pose propre.', author: 'Famille G.', context: 'Guyancourt centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Guyancourt résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier sérieux. Marc compagnon vrai métier.', author: 'Famille R.', context: 'Guyancourt golf', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78 SQY.', rows: [
    { communeSlug: 'montigny-le-bretonneux', communeName: 'Montigny-le-Bretonneux', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'voisins-le-bretonneux', communeName: 'Voisins-le-Bretonneux', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'magny-les-hameaux', communeName: 'Magny-les-Hameaux', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Guyancourt depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons ZAC', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Guyancourt SQY Renault Technocentre + golf CSP++.' },
}
