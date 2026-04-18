import type { PremiumCase } from './types'

export const verrieresParis75Paris12e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-12e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 12e', caption: 'Verrière 8 carreaux — appart Bercy Paris 12e' },
  heroQuote: { text: 'Paris 12e Bercy Village appart récent, verrière 8 carreaux profils 40 mm. Pose propre.', author: 'Famille N.', context: 'Paris 12e Bercy' },
  cityGuide: { intro: `Paris 12e (140 000 habitants, 75) arrondissement Bercy-Nation-Daumesnil-Bois de Vincennes. Mix haussmannien + immeubles récents (Bercy Village, Paris Rive Gauche) + quelques pavillons Picpus.`,
    sections: [
      { heading: 'Paris 12e — Bercy-Nation mix', body: `55% copros haussmanniennes, 35% immeubles récents Bercy/ZAC, 10% pavillons rares Picpus. Verrière 6-10 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 300-7 200 €. Avec porte battante : 8 400-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — appart Bercy Paris 12e', location: 'Bercy Village, Paris 12e', date: 'Juin 2024', description: `Appart récent 2005 Bercy Village. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 600 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Paris 12e Bercy Village appart récent, verrière 8 carreaux profils 40 mm. Pose propre.', author: 'Famille N.', context: 'Paris 12e Bercy' } }],
  localReviews: [
    { text: 'Paris 12e Bercy Village appart récent, verrière 8 carreaux profils 40 mm. Pose propre.', author: 'Famille N.', context: 'Paris 12e Bercy', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière haussmannien Nation. Soudures MIG invisibles.', author: 'Famille L.', context: 'Paris 12e Nation', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille R.', context: 'Paris 12e Daumesnil', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris est.', rows: [
    { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Bastille lofts' },
    { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Rive Gauche récent' },
    { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Ménilmontant' },
  ] },
  localStats: [{ label: 'Verrières Paris 12e depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part Bercy-ZAC récent', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 12e Bercy-Nation mix haussmannien + récent.' },
}
