import type { PremiumCase } from './types'

export const verrieresValDeMarne94MaisonsAlfort: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'maisons-alfort',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Maisons-Alfort 94', caption: 'Verrière 8 carreaux — pavillon Maisons-Alfort' },
  heroQuote: { text: 'Maisons-Alfort pavillon bord Marne, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille M.', context: 'Maisons-Alfort centre' },
  cityGuide: { intro: `Maisons-Alfort (55 000 habitants, 94 nord) ville résidentielle bord Marne — École vétérinaire + pavillons XIXe-XXe + copros. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Maisons-Alfort — bord Marne pavillonnaire', body: `75% pavillons individuels bourgeois, 20% copros centre, 5% École vétérinaire/commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Maisons-Alfort bord Marne', location: 'Bord Marne, Maisons-Alfort', date: 'Juin 2024', description: `Pavillon bourgeois 1910 rénové bord Marne. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 300 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Maisons-Alfort pavillon bord Marne, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille M.', context: 'Maisons-Alfort centre' } }],
  localReviews: [
    { text: 'Maisons-Alfort pavillon bord Marne, verrière 8 carreaux MIG. Cohérence époque.', author: 'Famille M.', context: 'Maisons-Alfort centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante copro centre. Soudures MIG invisibles.', author: 'Famille L.', context: 'Maisons-Alfort résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille R.', context: 'Maisons-Alfort limitrophe Charenton', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94 nord bord Marne.', rows: [
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine bourgeois' },
    { communeSlug: 'saint-maurice', communeName: 'Saint-Maurice', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne bourgeois' },
    { communeSlug: 'alfortville', communeName: 'Alfortville', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine mix' },
  ] },
  localStats: [{ label: 'Verrières Maisons-Alfort depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons bourgeois', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Maisons-Alfort bord Marne École vétérinaire CSP++.' },
}
