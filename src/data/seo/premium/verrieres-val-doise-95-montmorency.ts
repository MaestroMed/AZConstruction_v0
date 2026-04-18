import type { PremiumCase } from './types'

export const verrieresValDoise95Montmorency: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'montmorency',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Montmorency 95', caption: 'Verrière 8 carreaux — pavillon Montmorency' },
  heroQuote: { text: 'Montmorency pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Montmorency centre' },
  cityGuide: { intro: `Montmorency (22 000 habitants, 95) ville bourgeoise historique Rousseau + pavillons XIXe-XXe. Clientèle CSP++ culturelle. Demande verrière croissante.`,
    sections: [
      { heading: 'Montmorency — bourgeoise XIXe Rousseau', body: `85% pavillons individuels bourgeois, 10% copros, 5% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Montmorency', location: 'Montmorency centre', date: 'Juin 2024', description: `Pavillon bourgeois 1895 rénové. Verrière 4,5 m × 2,8 m + porte battante. Profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 200 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Montmorency pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Montmorency centre' } }],
  localReviews: [
    { text: 'Montmorency pavillon bourgeois XIXe, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille de R.', context: 'Montmorency centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 12 m² salon. Soudures TIG invisibles.', author: 'Famille L.', context: 'Montmorency résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Qualité haute couture.', author: 'Famille V.', context: 'Montmorency Rousseau', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 sud.', rows: [
    { communeSlug: 'enghien-les-bains', communeName: 'Enghien-les-Bains', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Thermale CSP++' },
    { communeSlug: 'saint-gratien', communeName: 'Saint-Gratien', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'soisy-sous-montmorency', communeName: 'Soisy-sous-Montmorency', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeois limitrophe' },
  ] },
  localStats: [{ label: 'Verrières Montmorency depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons XIXe', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Montmorency bourgeoise XIXe Rousseau patrimoine.' },
}
