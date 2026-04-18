import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92BourgLaReine: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'bourg-la-reine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Bourg-la-Reine 92', caption: 'Verrière 8 carreaux — pavillon Bourg-la-Reine' },
  heroQuote: { text: 'Bourg-la-Reine pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Bourg-la-Reine centre' },
  cityGuide: { intro: `Bourg-la-Reine (21 000 habitants, 92 sud) ville résidentielle bourgeoise CSP++ — grandes propriétés XIXe + pavillons XXe. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Bourg-la-Reine — bourgeoise XIXe', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 400-7 300 €. Avec porte battante : 8 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Bourg-la-Reine', location: 'Bourg-la-Reine centre', date: 'Juin 2024', description: `Pavillon bourgeois 1895 rénové. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 700 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Bourg-la-Reine pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Bourg-la-Reine centre' } }],
  localReviews: [
    { text: 'Bourg-la-Reine pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Bourg-la-Reine centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² rénovation. Soudures TIG invisibles.', author: 'Famille M.', context: 'Bourg-la-Reine résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille L.', context: 'Bourg-la-Reine limitrophe Sceaux', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 sud CSP++.', rows: [
    { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Parc + bourgeois' },
    { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'chatenay-malabry', communeName: 'Châtenay-Malabry', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Mix' },
  ] },
  localStats: [{ label: 'Verrières Bourg-la-Reine depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons XIXe', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Bourg-la-Reine bourgeoise XIXe grandes propriétés CSP++.' },
}
