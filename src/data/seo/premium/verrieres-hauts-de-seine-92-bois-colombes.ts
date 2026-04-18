import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92BoisColombes: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'bois-colombes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Bois-Colombes 92', caption: 'Verrière 8 carreaux — pavillon Bois-Colombes' },
  heroQuote: { text: 'Bois-Colombes pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille B.', context: 'Bois-Colombes centre' },
  cityGuide: { intro: `Bois-Colombes (28 000 habitants, 92) ville résidentielle pavillonnaire bourgeoise limitrophe La Garenne/Colombes/Asnières. Clientèle CSP++ familiale. Demande verrière en hausse.`,
    sections: [
      { heading: 'Bois-Colombes — pavillonnaire bourgeois', body: `85% pavillons individuels bourgeois XIXe-XXe, 12% copros centre, 3% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Bois-Colombes', location: 'Bois-Colombes centre', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 400 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Bois-Colombes pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille B.', context: 'Bois-Colombes centre' } }],
  localReviews: [
    { text: 'Bois-Colombes pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille B.', context: 'Bois-Colombes centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² rénovation. Soudures TIG invisibles.', author: 'Famille R.', context: 'Bois-Colombes résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc sérieux.', author: 'Famille L.', context: 'Bois-Colombes limitrophe La Garenne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 nord-ouest.', rows: [
    { communeSlug: 'la-garenne-colombes', communeName: 'La Garenne-Colombes', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'colombes', communeName: 'Colombes', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'asnieres-sur-seine', communeName: 'Asnières-sur-Seine', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine mix' },
  ] },
  localStats: [{ label: 'Verrières Bois-Colombes depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons bourgeois', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Bois-Colombes pavillonnaire bourgeois CSP++ limitrophe La Garenne.' },
}
