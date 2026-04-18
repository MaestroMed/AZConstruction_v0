import type { PremiumCase } from './types'

export const verriereAtelierYvelines78LaCelleSaintCloud: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'yvelines-78',
  communeSlug: 'la-celle-saint-cloud',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — La Celle-Saint-Cloud 78', caption: 'Verrière 8 carreaux — pavillon La Celle' },
  heroQuote: { text: 'La Celle-Saint-Cloud pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de K.', context: 'La Celle-Saint-Cloud centre' },
  cityGuide: { intro: `La Celle-Saint-Cloud (21 000 habitants, 78) ville résidentielle bourgeoise CSP++ avec Château + Forêt. Pavillons bourgeois XIXe-XXe dominants. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'La Celle — bourgeoise Château-Forêt', body: `90% pavillons individuels bourgeois, 10% apparts rares. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon La Celle-Saint-Cloud', location: 'Centre La Celle', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové. Verrière 4,5 m × 2,80 m + porte battante. Profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 400 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'La Celle-Saint-Cloud pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de K.', context: 'La Celle-Saint-Cloud centre' } }],
  localReviews: [
    { text: 'La Celle-Saint-Cloud pavillon bourgeois, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de K.', context: 'La Celle-Saint-Cloud centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 12 m² loft rénovation. Soudures TIG invisibles.', author: 'Famille R.', context: 'La Celle Forêt', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné main courante. Qualité haute couture.', author: 'Hugo T.', context: 'La Celle résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines Versailles/Saint-Cloud.', rows: [
    { communeSlug: 'bougival', communeName: 'Bougival', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Seine impressionnistes' },
    { communeSlug: 'le-chesnay-rocquencourt', communeName: 'Le Chesnay-Rocquencourt', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'CSP++ Versailles limitrophe' },
    { communeSlug: 'vaucresson', communeName: 'Vaucresson (92)', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'CSP++ pavillons exclusifs' },
  ] },
  localStats: [{ label: 'Verrières La Celle depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'La Celle-Saint-Cloud CSP++ pavillons bourgeois Château-Forêt.' },
}
