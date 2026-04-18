import type { PremiumCase } from './types'

export const verrieresValDeMarne94SaintMaurDesFosses: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'saint-maur-des-fosses',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Saint-Maur-des-Fossés 94', caption: 'Verrière 8 carreaux — pavillon Saint-Maur' },
  heroQuote: { text: 'Saint-Maur pavillon bourgeois bord Marne, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de S.', context: 'Saint-Maur centre' },
  cityGuide: { intro: `Saint-Maur-des-Fossés (75 000 habitants, 94) ville résidentielle bourgeoise CSP++ — presqu'île bord Marne + pavillons XIXe-XXe. Clientèle familiale haut-de-gamme. Demande verrière en hausse.`,
    sections: [
      { heading: 'Saint-Maur — bord Marne bourgeois', body: `85% pavillons individuels bourgeois, 10% copros centre, 5% commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 400-7 300 €. Avec porte battante : 8 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Saint-Maur bord Marne', location: 'Bord Marne, Saint-Maur', date: 'Juin 2024', description: `Pavillon bourgeois 1895 rénové bord Marne. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 700 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Saint-Maur pavillon bourgeois bord Marne, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de S.', context: 'Saint-Maur centre' } }],
  localReviews: [
    { text: 'Saint-Maur pavillon bourgeois bord Marne, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille de S.', context: 'Saint-Maur centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² presqu\'île. Soudures TIG invisibles.', author: 'Famille M.', context: 'Saint-Maur presqu\'île', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné main courante. Qualité haute couture.', author: 'Famille L.', context: 'Saint-Maur Adamville', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94 nord bord Marne.', rows: [
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne bourgeois' },
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne' },
    { communeSlug: 'joinville-le-pont', communeName: 'Joinville-le-Pont', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne' },
  ] },
  localStats: [{ label: 'Verrières Saint-Maur depuis 2020', value: '~15' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Saint-Maur-des-Fossés presqu\'île bord Marne bourgeois CSP++.' },
}
