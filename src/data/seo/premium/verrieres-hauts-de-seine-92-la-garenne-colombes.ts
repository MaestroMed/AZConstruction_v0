import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92LaGarenneColombes: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'la-garenne-colombes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — La Garenne-Colombes 92', caption: 'Verrière 6 carreaux — pavillon La Garenne' },
  heroQuote: { text: 'La Garenne-Colombes pavillon bourgeois, verrière 6 carreaux MIG. Cohérence XXe.', author: 'Famille L.', context: 'La Garenne centre' },
  cityGuide: { intro: `La Garenne-Colombes (30 000 habitants, 92) ville résidentielle pavillonnaire bourgeoise limitrophe Courbevoie/La Défense. Clientèle CSP++ familiale. Demande verrière en hausse.`,
    sections: [
      { heading: 'La Garenne — pavillonnaire bourgeois CSP++', body: `80% pavillons individuels bourgeois, 15% copros centre, 5% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 300-7 200 €. Avec porte battante : 8 400-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon La Garenne-Colombes', location: 'La Garenne centre', date: 'Juin 2024', description: `Pavillon bourgeois 1935 rénové. Verrière 3,8 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '5 sem.', surface: '9,9 m²' }, quote: { text: 'La Garenne-Colombes pavillon bourgeois, verrière 6 carreaux MIG. Cohérence XXe.', author: 'Famille L.', context: 'La Garenne centre' } }],
  localReviews: [
    { text: 'La Garenne-Colombes pavillon bourgeois, verrière 6 carreaux MIG. Cohérence XXe.', author: 'Famille L.', context: 'La Garenne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures TIG invisibles.', author: 'Famille R.', context: 'La Garenne résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier sérieux. Marc compagnon vrai métier.', author: 'Famille M.', context: 'La Garenne limitrophe Courbevoie', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 nord-ouest.', rows: [
    { communeSlug: 'courbevoie', communeName: 'Courbevoie', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'La Défense + pavillons' },
    { communeSlug: 'bois-colombes', communeName: 'Bois-Colombes', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'colombes', communeName: 'Colombes', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Verrières La Garenne-Colombes depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons bourgeois', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'La Garenne-Colombes pavillonnaire bourgeois CSP++ limitrophe La Défense.' },
}
