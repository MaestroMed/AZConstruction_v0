import type { PremiumCase } from './types'

export const verrieresEssonne91Longjumeau: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'essonne-91',
  communeSlug: 'longjumeau',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Longjumeau 91', caption: 'Verrière 6 carreaux — pavillon Longjumeau' },
  heroQuote: { text: 'Longjumeau pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille R.', context: 'Longjumeau centre' },
  cityGuide: { intro: `Longjumeau (22 000 habitants, 91) ville résidentielle pavillonnaire sud Paris. Pavillons bord Yvette + copros. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Longjumeau — pavillonnaire sud', body: `80% pavillons, 20% copros. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Longjumeau', location: 'Centre Longjumeau', date: 'Juin 2024', description: `Pavillon 1960 rénové. Verrière 3,5 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '5 sem.', surface: '8,75 m²' }, quote: { text: 'Longjumeau pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille R.', context: 'Longjumeau centre' } }],
  localReviews: [
    { text: 'Longjumeau pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille R.', context: 'Longjumeau centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG meulées invisibles.', author: 'Famille D.', context: 'Longjumeau bord Yvette', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée + finition propre. Métier.', author: 'Hugo M.', context: 'Longjumeau résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 91.', rows: [
    { communeSlug: 'villebon-sur-yvette', communeName: 'Villebon-sur-Yvette', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'ballainvilliers', communeName: 'Ballainvilliers', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'chilly-mazarin', communeName: 'Chilly-Mazarin', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Mix pavillons + copros' },
  ] },
  localStats: [{ label: 'Verrières Longjumeau depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Longjumeau pavillonnaire 91.' },
}
