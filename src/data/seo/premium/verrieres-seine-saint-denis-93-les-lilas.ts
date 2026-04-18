import type { PremiumCase } from './types'

export const verrieresSeineSaintDenis93LesLilas: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'les-lilas',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Les Lilas 93', caption: 'Verrière 8 carreaux — loft Les Lilas limitrophe Paris 20e' },
  heroQuote: { text: 'Les Lilas loft limitrophe Paris 20e, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio L.', context: 'Les Lilas centre' },
  cityGuide: { intro: `Les Lilas (23 000 habitants, 93 limitrophe Paris 20e) ville bobo-créative — lofts reconvertis + pavillons bourgeois + copros. Clientèle CSP++ créatifs 30-50 ans.`,
    sections: [
      { heading: 'Les Lilas — bobo limitrophe Paris 20e', body: `45% pavillons bourgeois, 35% lofts reconvertis ex-ateliers, 20% copros centre. Verrière 8-10 carreaux visserie apparente dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 300-7 200 €. Avec porte battante : 8 400-12 000 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux visserie apparente — loft Les Lilas', location: 'Les Lilas centre', date: 'Juin 2024', description: `Loft 130 m² ex-atelier 1920 reconverti limitrophe Paris 20e. Verrière 4 m × 2,80 m visserie noire apparente inox A2-70. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 400 €', duration: '8 sem.', surface: '11,2 m²' }, quote: { text: 'Les Lilas loft limitrophe Paris 20e, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio L.', context: 'Les Lilas centre' } }],
  localReviews: [
    { text: 'Les Lilas loft limitrophe Paris 20e, verrière 8 carreaux visserie apparente. Authentique.', author: 'Studio L.', context: 'Les Lilas centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante pavillon bourgeois. Soudures MIG invisibles.', author: 'Famille R.', context: 'Les Lilas résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Durable esthétique.', author: 'Hugo T.', context: 'Les Lilas Jules-Ferry', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 93 limitrophe Paris 20e.', rows: [
    { communeSlug: 'le-pre-saint-gervais', communeName: 'Le Pré-Saint-Gervais', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bobo créatifs' },
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Canal limitrophe Paris' },
    { communeSlug: 'bagnolet', communeName: 'Bagnolet', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Lofts créatifs' },
  ] },
  localStats: [{ label: 'Verrières Les Lilas depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part visserie apparente', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Les Lilas bobo limitrophe Paris 20e lofts créatifs.' },
}
