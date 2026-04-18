import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92Suresnes: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'suresnes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Suresnes vue Seine', caption: 'Verrière 8 carreaux — appart Suresnes Mont-Valérien vue Seine' },
  heroQuote: { text: 'Verrière atelier 6 carreaux pour ouvrir cuisine sur séjour vue Seine. Excellence finition.', author: 'Famille L.', context: 'Suresnes Mont-Valérien' },
  cityGuide: {
    intro: `Suresnes (50 000 habitants, 92 ouest, vue Seine + Mont-Valérien) attire une clientèle aisée pour ses pavillons coteaux et apparts vue panoramique. Demande croissante verrière atelier dans rénovations totales.`,
    sections: [
      { heading: 'Suresnes — pavillons coteaux + apparts vue Seine', body: `Mix pavillons individuels Mont-Valérien + apparts récents bord de Seine. Demande premium verrière 6-8 carreaux profil 40 mm noir mat.` },
      { heading: 'Tarifs Suresnes', body: `Verrière fixe 4 m² : 5 800-7 800 €. Avec porte battante : 8 500-12 000 €. Délai 5-7 sem.` },
    ],
  },
  caseStudies: [{ title: 'Verrière 6 carreaux + porte — appart vue Seine', location: 'Mont-Valérien, Suresnes', date: 'Juillet 2024', description: `Verrière 4,5 m × 2,80 m, 6 carreaux + porte battante. Profils 40 mm noir mat. Pose 2 jours, parquet d'origine intact.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 200 €', duration: '6 sem.', surface: '12,6 m²' }, quote: { text: 'Verrière atelier 6 carreaux pour ouvrir cuisine sur séjour vue Seine. Excellence finition.', author: 'Famille L.', context: 'Mont-Valérien' } }],
  localReviews: [
    { text: 'Verrière atelier 6 carreaux pour ouvrir cuisine sur séjour vue Seine. Excellence finition.', author: 'Famille L.', context: 'Mont-Valérien, Suresnes', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur loft Suresnes. Soudures TIG visibles, finition magazine.', author: 'Architecte', context: 'Bord de Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Pose 2 jours dans rénovation pavillon. Parquet ancien intact, équipe pro.', author: 'Famille R.', context: 'Centre Suresnes', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 ouest.', rows: [
    { communeSlug: 'puteaux', communeName: 'Puteaux', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'La Défense, apparts récents' },
    { communeSlug: 'rueil-malmaison', communeName: 'Rueil-Malmaison', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + apparts' },
    { communeSlug: 'nanterre', communeName: 'Nanterre', priceAvg: '1 100-1 600 €/m²', durationAvg: '4-6 sem.', note: 'Mix Trapèze + Université' },
  ] },
  localStats: [{ label: 'Verrières Suresnes depuis 2020', value: '~8' }, { label: 'Note moyenne Suresnes', value: '5,0 / 5' }, { label: 'Part vue Seine', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP+ Mont-Valérien + apparts vue Seine.' },
}
