import type { PremiumCase } from './types'

export const portailsParis75Paris14e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-14e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail entrée cochère — Paris 14e', caption: 'Portail cochère restauré — copro Denfert Paris 14e' },
  heroQuote: { text: 'Paris 14e Denfert copro haussmannienne, portail cochère restauré motorisation discrète.', author: 'Syndic copro', context: 'Paris 14e Denfert' },
  cityGuide: { intro: `Paris 14e (140 000 habitants, 75) arrondissement Denfert-Rochereau-Montparnasse-Alésia. Copros haussmanniennes + immeubles années 30 + quelques pavillons Plaisance/Didot/Pernety.`,
    sections: [
      { heading: 'Paris 14e — Denfert-Montparnasse cochères', body: `75% copros haussmanniennes avec portails cochères anciens, 20% immeubles années 30 Art Déco, 5% pavillons Plaisance. Restauration portail cochère dominant (motorisation discrète).` },
      { heading: 'Tarifs', body: `Portail cochère restauration : 7 500-13 000 €. Pavillon Plaisance battant motorisé : 4 000-5 800 €.` },
    ] },
  caseStudies: [{ title: 'Portail cochère restauré + motorisation discrète — copro Denfert Paris 14e', location: 'Denfert, Paris 14e', date: 'Juin 2024', description: `Copro haussmannienne 1878 Denfert. Portail cochère bois massif restauré + pivots inox A2-70 + motorisation Came Axo U intégrée discrète. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 800 €', duration: '10 sem.', surface: '3,2 m × 4 m' }, quote: { text: 'Paris 14e Denfert copro haussmannienne, portail cochère restauré motorisation discrète.', author: 'Syndic copro', context: 'Paris 14e Denfert' } }],
  localReviews: [
    { text: 'Paris 14e Denfert copro haussmannienne, portail cochère restauré motorisation discrète.', author: 'Syndic copro', context: 'Paris 14e Denfert', rating: 5, date: 'Juin 2024' },
    { text: 'Portail battant pavillon Plaisance. Karim propre.', author: 'Famille L.', context: 'Paris 14e Plaisance', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination syndic + AG pour vote. Antoine au top.', author: 'Gestionnaire', context: 'Paris 14e Alésia', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails arrondissements voisins Paris sud.', rows: [
    { communeSlug: 'paris-15e', communeName: 'Paris 15e', priceAvg: '7 000-12 000 €', durationAvg: '8-12 sem.', note: 'Vaugirard cochères' },
    { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '6 000-10 000 €', durationAvg: '8-12 sem.', note: 'Rive Gauche mix' },
    { communeSlug: 'paris-6e', communeName: 'Paris 6e', priceAvg: '9 000-16 000 € ABF', durationAvg: '14-18 sem.', note: 'Saint-Germain prestige' },
  ] },
  localStats: [{ label: 'Portails Paris 14e depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part restaurations cochères', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Paris 14e Denfert-Montparnasse cochères haussmanniennes restauration.' },
}
