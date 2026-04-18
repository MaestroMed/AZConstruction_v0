import type { PremiumCase } from './types'

export const verrieresOise60Clermont: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'oise-60',
  communeSlug: 'clermont',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Clermont 60', caption: 'Verrière 6 carreaux — pavillon Clermont' },
  heroQuote: { text: 'Clermont pavillon centre historique, verrière 6 carreaux acier MIG. Pose 1 jour.', author: 'Famille R.', context: 'Clermont centre' },
  cityGuide: { intro: `Clermont (11 000 habitants, 60) sous-préfecture Oise avec centre historique médiéval. Pavillons bourgeois + copros. Demande verrière atelier en croissance.`,
    sections: [
      { heading: 'Clermont — sous-préfecture historique', body: `80% pavillons individuels, 20% copros centre. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Clermont', location: 'Centre Clermont', date: 'Juin 2024', description: `Pavillon 1910 rénové. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '6 sem.', surface: '9,1 m²' }, quote: { text: 'Clermont pavillon centre historique, verrière 6 carreaux acier MIG. Pose 1 jour.', author: 'Famille R.', context: 'Clermont centre' } }],
  localReviews: [
    { text: 'Clermont pavillon centre historique, verrière 6 carreaux acier MIG. Pose 1 jour.', author: 'Famille R.', context: 'Clermont centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG meulées invisibles.', author: 'Famille L.', context: 'Clermont résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée, finition propre. Équipe AZ Bruyères-sur-Oise.', author: 'Hugo M.', context: 'Clermont centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 60.', rows: [
    { communeSlug: 'agnetz', communeName: 'Agnetz', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'mouy', communeName: 'Mouy', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Verrières Clermont depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '25 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Clermont sous-préfecture Oise historique.' },
}
