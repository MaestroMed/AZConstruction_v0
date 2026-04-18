import type { PremiumCase } from './types'

export const verrieresEssonne91JuvisySurOrge: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'essonne-91',
  communeSlug: 'juvisy-sur-orge',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Juvisy-sur-Orge 91', caption: 'Verrière 6 carreaux — pavillon Juvisy' },
  heroQuote: { text: 'Juvisy pavillon bord Orge, verrière 6 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Juvisy centre' },
  cityGuide: { intro: `Juvisy-sur-Orge (17 000 habitants, 91) ville résidentielle bord Orge avec gare RER C/D + Observatoire Flammarion. Pavillons + copros. Demande verrière en croissance.`,
    sections: [
      { heading: 'Juvisy — pavillonnaire bord Orge', body: `70% pavillons, 30% copros. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Juvisy bord Orge', location: 'Bord Orge Juvisy', date: 'Juin 2024', description: `Pavillon 1935 rénové bord Orge. Verrière 3,5 m × 2,6 m profils 40 mm. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '6 sem.', surface: '9,1 m²' }, quote: { text: 'Juvisy pavillon bord Orge, verrière 6 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Juvisy centre' } }],
  localReviews: [
    { text: 'Juvisy pavillon bord Orge, verrière 6 carreaux. Pose 1 jour propre.', author: 'Famille D.', context: 'Juvisy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Juvisy Observatoire', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée propre. Atelier vrai métier.', author: 'Hugo M.', context: 'Juvisy résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 91.', rows: [
    { communeSlug: 'athis-mons', communeName: 'Athis-Mons', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Proche Orly' },
    { communeSlug: 'savigny-sur-orge', communeName: 'Savigny-sur-Orge', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'RER C' },
    { communeSlug: 'draveil', communeName: 'Draveil', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Seine' },
  ] },
  localStats: [{ label: 'Verrières Juvisy depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part bord Orge', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Juvisy-sur-Orge bord Orge + Observatoire.' },
}
