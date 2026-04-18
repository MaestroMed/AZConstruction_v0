import type { PremiumCase } from './types'

export const verrieresSeineSaintDenis93Bagnolet: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'bagnolet',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Bagnolet 93', caption: 'Verrière 8 carreaux — loft Bagnolet' },
  heroQuote: { text: 'Bagnolet loft reconverti atelier, verrière 8 carreaux visserie apparente. Pose 1 jour.', author: 'Hugo M.', context: 'Bagnolet Gallieni' },
  cityGuide: { intro: `Bagnolet (36 000 habitants, 93 limitrophe Paris 20e) ville avec anciens ateliers reconvertis en lofts + copros + pavillons. Clientèle artistes + créatifs 30-50 ans.`,
    sections: [
      { heading: 'Bagnolet — lofts créatifs limitrophe Paris', body: `40% lofts artistes reconvertis, 40% copros, 20% pavillons. Verrière 8-12 carreaux visserie apparente authentique dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux visserie apparente — loft Bagnolet', location: 'Gallieni, Bagnolet', date: 'Juin 2024', description: `Loft ex-atelier 1920 reconverti. Verrière 4 m × 2,80 m visserie noire apparente inox A2-70. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 600 €', duration: '6 sem.', surface: '11,2 m²' }, quote: { text: 'Bagnolet loft reconverti atelier, verrière 8 carreaux visserie apparente. Pose 1 jour.', author: 'Hugo M.', context: 'Bagnolet Gallieni' } }],
  localReviews: [
    { text: 'Bagnolet loft reconverti atelier, verrière 8 carreaux visserie apparente. Pose 1 jour.', author: 'Hugo M.', context: 'Bagnolet Gallieni', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante loft. Soudures MIG volontairement apparentes. Authentique.', author: 'Famille D.', context: 'Bagnolet centre', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 + double cuisson. Durable esthétique.', author: 'Famille L.', context: 'Bagnolet La Noue', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes limitrophes Paris est.', rows: [
    { communeSlug: 'montreuil', communeName: 'Montreuil', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Lofts + haussmannien' },
    { communeSlug: 'les-lilas', communeName: 'Les Lilas', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix lofts + pavillons' },
    { communeSlug: 'le-pre-saint-gervais', communeName: 'Le Pré-Saint-Gervais', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Lofts créatifs' },
  ] },
  localStats: [{ label: 'Verrières Bagnolet depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part visserie apparente', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Bagnolet lofts créatifs limitrophe Paris 20e.' },
}
