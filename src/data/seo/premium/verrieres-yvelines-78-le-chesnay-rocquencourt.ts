import type { PremiumCase } from './types'

export const verrieresYvelines78LeChesnayRocquencourt: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'le-chesnay-rocquencourt',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Le Chesnay-Rocquencourt 78', caption: 'Verrière 8 carreaux — pavillon Le Chesnay' },
  heroQuote: { text: 'Le Chesnay-Rocquencourt pavillon bourgeois limitrophe Versailles, verrière 8 carreaux MIG.', author: 'Famille de C.', context: 'Le Chesnay centre' },
  cityGuide: { intro: `Le Chesnay-Rocquencourt (30 000 habitants, 78) ville résidentielle bourgeoise CSP++ limitrophe Versailles — pavillons XIXe-XXe + forêt + copros centre. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Le Chesnay — limitrophe Versailles CSP++', body: `80% pavillons individuels bourgeois, 15% copros centre, 5% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 400-7 300 €. Avec porte battante : 8 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Le Chesnay-Rocquencourt', location: 'Le Chesnay centre', date: 'Juin 2024', description: `Pavillon bourgeois 1910 rénové limitrophe Versailles. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 700 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Le Chesnay-Rocquencourt pavillon bourgeois limitrophe Versailles, verrière 8 carreaux MIG.', author: 'Famille de C.', context: 'Le Chesnay centre' } }],
  localReviews: [
    { text: 'Le Chesnay-Rocquencourt pavillon bourgeois limitrophe Versailles, verrière 8 carreaux MIG.', author: 'Famille de C.', context: 'Le Chesnay centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² rénovation. Soudures TIG invisibles.', author: 'Famille de M.', context: 'Le Chesnay résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné main courante. Qualité haute couture.', author: 'Famille de R.', context: 'Le Chesnay Parly 2', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78 Versailles.', rows: [
    { communeSlug: 'versailles', communeName: 'Versailles', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '14-18 sem.', note: 'Royale ABF Château' },
    { communeSlug: 'la-celle-saint-cloud', communeName: 'La Celle-Saint-Cloud', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Château-Forêt' },
    { communeSlug: 'bougival', communeName: 'Bougival', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine impressionniste' },
  ] },
  localStats: [{ label: 'Verrières Le Chesnay depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Le Chesnay-Rocquencourt limitrophe Versailles CSP++ pavillons bourgeois XIXe-XXe.' },
}
