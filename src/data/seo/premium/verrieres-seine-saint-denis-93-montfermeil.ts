import type { PremiumCase } from './types'

export const verrieresSeineSaintDenis93Montfermeil: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'montfermeil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Montfermeil 93', caption: 'Verrière 6 carreaux — pavillon Montfermeil' },
  heroQuote: { text: 'Montfermeil pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille D.', context: 'Montfermeil centre' },
  cityGuide: { intro: `Montfermeil (26 000 habitants, 93 est) ville pavillonnaire collines + forêt. Pavillons + quelques copros. Demande verrière atelier en croissance.`,
    sections: [
      { heading: 'Montfermeil — collines pavillonnaire', body: `80% pavillons individuels, 20% copros. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Montfermeil', location: 'Centre Montfermeil', date: 'Juin 2024', description: `Pavillon 1965 rénové. Verrière 3,5 m × 2,6 m profils 40 mm. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '6 sem.', surface: '9,1 m²' }, quote: { text: 'Montfermeil pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille D.', context: 'Montfermeil centre' } }],
  localReviews: [
    { text: 'Montfermeil pavillon, verrière 6 carreaux acier MIG. Pose 1 jour propre.', author: 'Famille D.', context: 'Montfermeil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. MIG meulée.', author: 'Famille L.', context: 'Montfermeil collines', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée propre. Pro.', author: 'Hugo P.', context: 'Montfermeil résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 93 est.', rows: [
    { communeSlug: 'clichy-sous-bois', communeName: 'Clichy-sous-Bois', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'coubron', communeName: 'Coubron', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons forêt' },
    { communeSlug: 'vaujours', communeName: 'Vaujours', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Montfermeil depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Montfermeil pavillonnaire collines 93 est.' },
}
