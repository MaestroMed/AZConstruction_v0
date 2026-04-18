import type { PremiumCase } from './types'

export const verrieresValDeMarne94LePerreuxSurMarne: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'le-perreux-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Le Perreux-sur-Marne 94', caption: 'Verrière 8 carreaux — pavillon Le Perreux' },
  heroQuote: { text: 'Le Perreux pavillon bord Marne, verrière 8 carreaux acier soudé MIG. Pose 1 jour.', author: 'Famille D.', context: 'Le Perreux centre' },
  cityGuide: { intro: `Le Perreux-sur-Marne (34 000 habitants, 94) ville résidentielle bord Marne avec pavillons bourgeois + copros récentes. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Le Perreux — bord Marne CSP+', body: `55% pavillons individuels bord Marne, 45% apparts + copros. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux — pavillon Le Perreux', location: 'Centre Le Perreux', date: 'Juin 2024', description: `Pavillon 1935 rénové, cuisine/séjour. Verrière 4 m × 2,75 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 400 €', duration: '6 sem.', surface: '11 m²' }, quote: { text: 'Le Perreux pavillon bord Marne, verrière 8 carreaux acier soudé MIG. Pose 1 jour.', author: 'Famille D.', context: 'Le Perreux centre' } }],
  localReviews: [
    { text: 'Le Perreux pavillon bord Marne, verrière 8 carreaux acier soudé MIG. Pose 1 jour.', author: 'Famille D.', context: 'Le Perreux centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante + laiton patiné poignée. Cohérence pavillon XXe.', author: 'Famille V.', context: 'Le Perreux bord Marne', rating: 5, date: 'Mars 2024' },
    { text: 'Soudures MIG meulées invisibles, visserie cachée. Pro.', author: 'Hugo M.', context: 'Le Perreux résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes bord Marne.', rows: [
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne CSP+' },
    { communeSlug: 'joinville-le-pont', communeName: 'Joinville-le-Pont', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne pavillons' },
    { communeSlug: 'bry-sur-marne', communeName: 'Bry-sur-Marne', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Marne' },
  ] },
  localStats: [{ label: 'Verrières Le Perreux depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part bord Marne', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Le Perreux pavillons bord Marne.' },
}
