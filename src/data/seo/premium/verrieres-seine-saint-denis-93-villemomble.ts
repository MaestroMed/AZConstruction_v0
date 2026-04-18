import type { PremiumCase } from './types'

export const verrieresSeineSaintDenis93Villemomble: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'villemomble',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Villemomble 93', caption: 'Verrière 8 carreaux — pavillon Villemomble' },
  heroQuote: { text: 'Villemomble pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille V.', context: 'Villemomble centre' },
  cityGuide: { intro: `Villemomble (29 000 habitants, 93 est) ville résidentielle pavillonnaire CSP++ — pavillons XIXe-XXe + Château de Villemomble. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Villemomble — pavillonnaire bourgeois est 93', body: `85% pavillons individuels bourgeois, 12% copros centre, 3% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 100-6 900 €. Avec porte battante : 8 100-11 400 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Villemomble', location: 'Villemomble centre', date: 'Juin 2024', description: `Pavillon bourgeois 1920 rénové. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 100 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Villemomble pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille V.', context: 'Villemomble centre' } }],
  localReviews: [
    { text: 'Villemomble pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XXe.', author: 'Famille V.', context: 'Villemomble centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² rénovation. Soudures TIG invisibles.', author: 'Famille R.', context: 'Villemomble résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille L.', context: 'Villemomble bord forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 93 est.', rows: [
    { communeSlug: 'le-raincy', communeName: 'Le Raincy', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Villas bourgeoises' },
    { communeSlug: 'gagny', communeName: 'Gagny', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'neuilly-plaisance', communeName: 'Neuilly-Plaisance', priceAvg: '1 300-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + parc' },
  ] },
  localStats: [{ label: 'Verrières Villemomble depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons bourgeois', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Villemomble 93 est pavillonnaire bourgeois CSP++ Château.' },
}
