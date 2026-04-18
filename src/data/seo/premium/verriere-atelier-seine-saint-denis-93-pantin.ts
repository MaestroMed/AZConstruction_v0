import type { PremiumCase } from './types'

export const verriereAtelierSeineSaintDenis93Pantin: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'pantin',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Pantin gentrification', caption: 'Verrière 8 carreaux acier soudé — loft Pantin' },
  heroQuote: { text: 'Pantin gentrifié, verrière atelier dans notre loft canal de l\'Ourcq. Vrai acier, métier compagnon.', author: 'Camille R.', context: 'Pantin canal de l\'Ourcq' },
  cityGuide: { intro: `Pantin (58 000 habitants, 93 limitrophe Paris) en pleine gentrification. Demande croissante verrière atelier dans rénovations apparts/lofts canal de l'Ourcq.`,
    sections: [
      { heading: 'Pantin — gentrification + lofts', body: `60% lofts/apparts gentrifiés, 40% copros années 70-80. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs Pantin', body: `Verrière fixe 4 m² : 5 200-6 800 €. Avec porte battante : 7 800-10 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — loft Pantin canal', location: 'Canal de l\'Ourcq, Pantin', date: 'Juillet 2024', description: `Verrière 5 m × 2,80 m loft canal. Profils 40 mm noir mat. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '6 sem.', surface: '14 m²' }, quote: { text: 'Pantin gentrifié, verrière atelier dans notre loft canal de l\'Ourcq. Vrai acier, métier compagnon.', author: 'Camille R.', context: 'Canal de l\'Ourcq' } }],
  localReviews: [
    { text: 'Pantin gentrifié, verrière atelier dans notre loft canal de l\'Ourcq. Vrai acier, métier compagnon.', author: 'Camille R.', context: 'Pantin canal', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur dans appart rénové Quatre-Chemins. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Quatre-Chemins, Pantin', rating: 5, date: 'Mars 2024' },
    { text: 'Pose 1 journée, finition au top. Recommandés sans hésiter.', author: 'Famille L.', context: 'Église, Pantin', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 93.', rows: [
    { communeSlug: 'le-pre-saint-gervais', communeName: 'Le Pré-Saint-Gervais', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Petites copros gentrifiées' },
    { communeSlug: 'romainville', communeName: 'Romainville', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Tissu mixte gentrification' },
    { communeSlug: 'montreuil', communeName: 'Montreuil', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Lofts + apparts rénovés' },
  ] },
  localStats: [{ label: 'Verrières Pantin depuis 2020', value: '~10' }, { label: 'Note moyenne Pantin', value: '4,9 / 5' }, { label: 'Part lofts/gentrifié', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible jeunes acquéreurs Pantin gentrifié.' },
}
