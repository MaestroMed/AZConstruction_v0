import type { PremiumCase } from './types'

export const verrieresEssonne91ChillyMazarin: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'essonne-91',
  communeSlug: 'chilly-mazarin',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Chilly-Mazarin 91', caption: 'Verrière 6 carreaux — pavillon Chilly-Mazarin' },
  heroQuote: { text: 'Chilly-Mazarin pavillon bourgeois, verrière 6 carreaux MIG. Pose propre.', author: 'Famille C.', context: 'Chilly centre' },
  cityGuide: { intro: `Chilly-Mazarin (21 000 habitants, 91) ville résidentielle pavillonnaire CSP++ — Château + pavillons + copros. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Chilly-Mazarin — Château pavillonnaire', body: `78% pavillons individuels, 20% copros centre, 2% Château/commerces. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Chilly-Mazarin', location: 'Chilly centre', date: 'Juin 2024', description: `Pavillon 1960 rénové. Verrière 3,8 m × 2,6 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 300 €', duration: '5 sem.', surface: '9,9 m²' }, quote: { text: 'Chilly-Mazarin pavillon bourgeois, verrière 6 carreaux MIG. Pose propre.', author: 'Famille C.', context: 'Chilly centre' } }],
  localReviews: [
    { text: 'Chilly-Mazarin pavillon bourgeois, verrière 6 carreaux MIG. Pose propre.', author: 'Famille C.', context: 'Chilly centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille L.', context: 'Chilly résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier sérieux. Marc compagnon vrai métier.', author: 'Famille R.', context: 'Chilly Château', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 91 nord.', rows: [
    { communeSlug: 'longjumeau', communeName: 'Longjumeau', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture' },
    { communeSlug: 'champlan', communeName: 'Champlan', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
    { communeSlug: 'morangis', communeName: 'Morangis', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Verrières Chilly-Mazarin depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '78 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Chilly-Mazarin 91 nord Château pavillonnaire CSP++.' },
}
