import type { PremiumCase } from './types'

export const portailsEssonne91EvryCourcouronnes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'evry-courcouronnes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Évry-Courcouronnes 91', caption: 'Coulissant motorisé Came — copro Évry' },
  heroQuote: { text: 'Évry copro 80 lots, coulissant Came motorisé. Pose 1 jour, AG validée à l\'unanimité.', author: 'Conseil syndical', context: 'Évry-Courcouronnes centre' },
  cityGuide: { intro: `Évry-Courcouronnes (70 000 habitants, 91) préfecture Essonne, ville mixte avec grandes copros + pavillons. Demande forte portails copros + résidentiel.`,
    sections: [
      { heading: 'Évry — préfecture Essonne', body: `60% copros (grands ensembles + résidences récentes), 40% pavillons. Coulissant motorisé Came/Nice dominant copros. Battant pour pavillons.` },
      { heading: 'Process syndic', body: `Devis détaillé pour AG, présentation 2-3 options, garantie décennale + main d'œuvre 5 ans, SAV motorisation prioritaire.` },
      { heading: 'Tarifs', body: `Coulissant copro motorisé : 6 800-9 500 €. Battant pavillon : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m motorisé — copro 80 lots Évry', location: 'Évry centre', date: 'Mai 2024', description: `Remplacement portail acier vétuste copro 80 lots. Coulissant rail motorisé Came BX-241, photocellules + clignotant LED. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 500 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Évry copro 80 lots, coulissant Came motorisé. Pose 1 jour, AG validée à l\'unanimité.', author: 'Conseil syndical', context: 'Évry-Courcouronnes' } }],
  localReviews: [
    { text: 'Évry copro 80 lots, coulissant Came motorisé. Pose 1 jour, AG validée à l\'unanimité.', author: 'Conseil syndical', context: 'Évry-Courcouronnes', rating: 5, date: 'Mai 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents Essonne.', author: 'Famille L.', context: 'Évry sud', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Courcouronnes', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'corbeil-essonnes', communeName: 'Corbeil-Essonnes', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'ris-orangis', communeName: 'Ris-Orangis', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'grigny', communeName: 'Grigny', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Copros + pavillons' },
  ] },
  localStats: [{ label: 'Portails Évry depuis 2020', value: '~14' }, { label: 'Note moyenne', value: '4,8 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Évry préfecture, demande forte copros.' },
}
