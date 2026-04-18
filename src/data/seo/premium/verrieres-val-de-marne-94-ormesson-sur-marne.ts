import type { PremiumCase } from './types'

export const verrieresValDeMarne94OrmessonSurMarne: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'ormesson-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Ormesson-sur-Marne 94', caption: 'Verrière 6 carreaux — pavillon Ormesson' },
  heroQuote: { text: 'Ormesson pavillon bourgeois, verrière acier 6 carreaux. Pose 1 jour, finition soignée.', author: 'Famille L.', context: 'Ormesson-sur-Marne centre' },
  cityGuide: { intro: `Ormesson-sur-Marne (10 000 habitants, 94 est) ville résidentielle CSP+ avec château + pavillons bourgeois. Clientèle stable établie.`,
    sections: [
      { heading: 'Ormesson — pavillons bourgeois', body: `90% pavillons individuels, 10% résidences rares. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 200 €. Avec porte battante : 8 400-11 800 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Ormesson', location: 'Centre Ormesson', date: 'Juin 2024', description: `Pavillon 1960 rénové. Verrière 3,5 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '6 sem.', surface: '8,75 m²' }, quote: { text: 'Ormesson pavillon bourgeois, verrière acier 6 carreaux. Pose 1 jour, finition soignée.', author: 'Famille L.', context: 'Ormesson-sur-Marne centre' } }],
  localReviews: [
    { text: 'Ormesson pavillon bourgeois, verrière acier 6 carreaux. Pose 1 jour, finition soignée.', author: 'Famille L.', context: 'Ormesson-sur-Marne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante cuisine. Métier artisanal.', author: 'Famille B.', context: 'Ormesson résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée + RAL 9005 noir mat satiné. Cohérence classique.', author: 'Hugo M.', context: 'Ormesson centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94 est.', rows: [
    { communeSlug: 'le-plessis-trevise', communeName: 'Le Plessis-Trévise', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'sucy-en-brie', communeName: 'Sucy-en-Brie', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'noiseau', communeName: 'Noiseau', priceAvg: '1 100-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Ormesson depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '90 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Ormesson-sur-Marne CSP+ pavillons bourgeois.' },
}
