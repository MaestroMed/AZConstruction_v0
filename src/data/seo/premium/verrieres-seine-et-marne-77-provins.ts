import type { PremiumCase } from './types'

export const verrieresSeineEtMarne77Provins: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'provins',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Provins 77', caption: 'Verrière 8 carreaux — maison médiévale Provins UNESCO' },
  heroQuote: { text: 'Provins maison médiévale UNESCO, verrière 8 carreaux ABF validé. Cohérence XIIe.', author: 'Famille P.', context: 'Provins Ville-Haute' },
  cityGuide: { intro: `Provins (12 000 habitants, 77 est) cité médiévale UNESCO remparts XIIe siècle. Maisons anciennes XIVe-XVIIe en zone ABF intégrale. Demande verrière artisanale spécifique patrimoine.`,
    sections: [
      { heading: 'Provins — UNESCO médiéval ABF', body: `95% zone ABF Ville-Haute médiévale (prescriptions strictes), 5% extérieur. Verrière 6-8 carreaux profil noir mat ou laiton patiné ABF validé.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² ABF : 5 500-7 500 €. Avec porte + profil laiton patiné : 9 500-13 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux ABF — maison médiévale Provins', location: 'Ville-Haute UNESCO', date: 'Juillet 2024', description: `Maison XIVe remparts Provins UNESCO. Verrière 4 m × 2,6 m profils 40 mm noir mat + dossier ABF 8 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 400 €', duration: '14 sem. (ABF)', surface: '10,4 m²' }, quote: { text: 'Provins maison médiévale UNESCO, verrière 8 carreaux ABF validé. Cohérence XIIe.', author: 'Famille P.', context: 'Provins Ville-Haute' } }],
  localReviews: [
    { text: 'Provins maison médiévale UNESCO, verrière 8 carreaux ABF validé. Cohérence XIIe.', author: 'Famille P.', context: 'Provins Ville-Haute', rating: 5, date: 'Juillet 2024' },
    { text: 'Laiton patiné main courante cuisine ouverte. ABF validé 1er envoi.', author: 'Famille G.', context: 'Provins centre', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF UNESCO géré par Sophie. 100 % acceptation.', author: 'Famille V.', context: 'Provins remparts', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 77 est.', rows: [
    { communeSlug: 'coulommiers', communeName: 'Coulommiers', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'fontainebleau', communeName: 'Fontainebleau', priceAvg: '1 300-1 900 €/m² ABF', durationAvg: '14-18 sem.', note: 'Royale ABF UNESCO' },
    { communeSlug: 'melun', communeName: 'Melun', priceAvg: '1 100-1 600 €/m²', durationAvg: '6-8 sem.', note: 'Préfecture 77' },
  ] },
  localStats: [{ label: 'Verrières Provins depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Provins UNESCO médiéval ABF intégrale.' },
}
