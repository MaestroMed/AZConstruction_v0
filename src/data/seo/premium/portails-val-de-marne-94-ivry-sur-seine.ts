import type { PremiumCase } from './types'

export const portailsValDeMarne94IvrySurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'ivry-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Ivry-sur-Seine 94', caption: 'Coulissant motorisé Came — copro Ivry' },
  heroQuote: { text: 'Ivry copro 60 lots bord Seine, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Ivry-sur-Seine' },
  cityGuide: { intro: `Ivry-sur-Seine (62 000 habitants, 94 limitrophe Paris 13e) ville mixte avec copros + pavillons + zones d'activité. Demande forte portails copros + résidentiel.`,
    sections: [
      { heading: 'Ivry — limitrophe Paris 13e', body: `60% copros (grands ensembles + résidences récentes), 40% pavillons. Coulissant motorisé Came/Nice dominant copros. Battant pour pavillons.` },
      { heading: 'Process syndic', body: `Devis détaillé pour AG, présentation 2-3 options gamme, garantie décennale + main d'œuvre 5 ans, SAV motorisation prioritaire.` },
      { heading: 'Tarifs', body: `Coulissant copro motorisé : 6 800-9 500 €. Battant pavillon : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m motorisé — copro 60 lots Ivry bord Seine', location: 'Ivry bord Seine', date: 'Mai 2024', description: `Remplacement portail acier vétuste copro 60 lots. Coulissant rail motorisé Came BX-241, photocellules + clignotant LED + boucles magnétiques. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 500 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Ivry copro 60 lots bord Seine, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Ivry-sur-Seine' } }],
  localReviews: [
    { text: 'Ivry copro 60 lots bord Seine, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Ivry-sur-Seine', rating: 5, date: 'Mai 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents 94.', author: 'Famille L.', context: 'Ivry centre', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Ivry-Port', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94.', rows: [
    { communeSlug: 'vitry-sur-seine', communeName: 'Vitry-sur-Seine', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '5 800-8 200 €', durationAvg: '10-14 sem.', note: 'Limitrophe Paris 12e' },
    { communeSlug: 'le-kremlin-bicetre', communeName: 'Le Kremlin-Bicêtre', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Limitrophe Paris 13e' },
  ] },
  localStats: [{ label: 'Portails Ivry depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Ivry limitrophe Paris 13e, copros bord Seine.' },
}
