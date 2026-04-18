import type { PremiumCase } from './types'

export const verrieresValDoise95SoisySousMontmorency: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-doise-95',
  communeSlug: 'soisy-sous-montmorency',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Soisy-sous-Montmorency 95', caption: 'Verrière 8 carreaux — pavillon Soisy' },
  heroQuote: { text: 'Soisy-sous-Montmorency pavillon bourgeois limitrophe Enghien, verrière 8 carreaux MIG.', author: 'Famille S.', context: 'Soisy centre' },
  cityGuide: { intro: `Soisy-sous-Montmorency (17 000 habitants, 95) ville résidentielle pavillonnaire bourgeoise CSP++ limitrophe Enghien-Montmorency — pavillons XIXe-XXe + copros centre.`,
    sections: [
      { heading: 'Soisy — pavillonnaire bourgeois limitrophe', body: `80% pavillons individuels bourgeois, 18% copros centre, 2% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 100-6 900 €. Avec porte battante : 8 100-11 400 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Soisy-sous-Montmorency', location: 'Soisy centre', date: 'Juin 2024', description: `Pavillon bourgeois 1920 rénové. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 400 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Soisy-sous-Montmorency pavillon bourgeois limitrophe Enghien, verrière 8 carreaux MIG.', author: 'Famille S.', context: 'Soisy centre' } }],
  localReviews: [
    { text: 'Soisy-sous-Montmorency pavillon bourgeois limitrophe Enghien, verrière 8 carreaux MIG.', author: 'Famille S.', context: 'Soisy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² extension. Soudures TIG invisibles.', author: 'Famille L.', context: 'Soisy résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Marc compagnon vrai métier. Finitions haute couture.', author: 'Famille R.', context: 'Soisy limitrophe Montmorency', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 95 sud CSP++.', rows: [
    { communeSlug: 'enghien-les-bains', communeName: 'Enghien-les-Bains', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Thermale lac CSP++' },
    { communeSlug: 'montmorency', communeName: 'Montmorency', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeois XIXe' },
    { communeSlug: 'eaubonne', communeName: 'Eaubonne', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
  ] },
  localStats: [{ label: 'Verrières Soisy depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Soisy-sous-Montmorency 95 pavillonnaire bourgeois CSP++ limitrophe Enghien-Montmorency.' },
}
