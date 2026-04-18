import type { PremiumCase } from './types'

export const portailsHautsDeSeine92FontenayAuxRoses: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'fontenay-aux-roses',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Fontenay-aux-Roses 92', caption: 'Battant double vantail — pavillon Fontenay-aux-Roses' },
  heroQuote: { text: 'Fontenay-aux-Roses pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Fontenay-aux-Roses centre' },
  cityGuide: { intro: `Fontenay-aux-Roses (25 000 habitants, 92 sud) ville résidentielle pavillonnaire CSP+ avec cités-jardins protégées + pavillons bourgeois. Demande équilibrée portails.`,
    sections: [
      { heading: 'Fontenay-aux-Roses — pavillonnaire cités-jardins', body: `75% pavillons individuels (cités-jardins + centre), 25% copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-7 000 €. Coulissant : 5 500-8 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Fontenay-aux-Roses', location: 'Centre Fontenay-aux-Roses', date: 'Juin 2024', description: `Pavillon 1935 rénové. Battant acier RAL 7016 anthracite + motorisation Nice à bras cachée. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '7 sem.', surface: '4 m' }, quote: { text: 'Fontenay-aux-Roses pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Fontenay-aux-Roses centre' } }],
  localReviews: [
    { text: 'Fontenay-aux-Roses pavillon, battant double vantail motorisé. Pose 1 jour propre.', author: 'Famille L.', context: 'Fontenay-aux-Roses centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant Came BX-241 silencieux pavillon. 38 dB confirmé.', author: 'Famille R.', context: 'Fontenay cités-jardins', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon Pierre-Plate. Sans rail, durable.', author: 'Vincent M.', context: 'Pierre-Plate, Fontenay', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 92 sud.', rows: [
    { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Bourgeoise Parc' },
    { communeSlug: 'bagneux', communeName: 'Bagneux', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'clamart', communeName: 'Clamart', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons Percy' },
  ] },
  localStats: [{ label: 'Portails Fontenay-aux-Roses depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Fontenay-aux-Roses pavillonnaire CSP+.' },
}
