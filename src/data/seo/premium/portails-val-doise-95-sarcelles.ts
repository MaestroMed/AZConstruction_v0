import type { PremiumCase } from './types'

export const portailsValDoise95Sarcelles: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-doise-95',
  communeSlug: 'sarcelles',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Sarcelles 95', caption: 'Coulissant motorisé Came — copro Sarcelles' },
  heroQuote: { text: 'Sarcelles copro 60 lots, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Sarcelles village' },
  cityGuide: { intro: `Sarcelles (60 000 habitants, 95) ville mixte avec grandes copros années 60-80 + pavillons. Demande forte portails copro et résidentiel.`,
    sections: [
      { heading: 'Sarcelles — copros + pavillons', body: `60% copros (grands ensembles + résidences récentes), 40% pavillons. Coulissant motorisé Came/Nice dominante côté copro. Battant pour pavillons.` },
      { heading: 'Process syndic', body: `Devis détaillé pour AG, présentation 2-3 options gamme, garantie décennale + main d'œuvre 5 ans, SAV motorisation prioritaire.` },
      { heading: 'Tarifs', body: `Coulissant copro motorisé : 6 800-9 500 €. Battant pavillon : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m motorisé — copro 60 lots Sarcelles', location: 'Sarcelles village', date: 'Mai 2024', description: `Remplacement portail acier vétuste copro 60 lots. Coulissant rail motorisé Came BX-241, photocellules + clignotant LED + boucles magnétiques. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : portail rouillé' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant motorisé' } }, metrics: { price: '8 200 €', duration: '8 sem.', surface: '6 m' }, quote: { text: 'Sarcelles copro 60 lots, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Sarcelles village' } }],
  localReviews: [
    { text: 'Sarcelles copro 60 lots, coulissant motorisé Came. Pose 1 jour, AG validée.', author: 'Conseil syndical', context: 'Sarcelles village', rating: 5, date: 'Mai 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents et finition au top.', author: 'Famille L.', context: 'Sarcelles Lochères', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel sans rail. Bonne conseil sur place.', author: 'Vincent T.', context: 'Sarcelles village', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 95.', rows: [
    { communeSlug: 'garges-les-gonesse', communeName: 'Garges-lès-Gonesse', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'villiers-le-bel', communeName: 'Villiers-le-Bel', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'arnouville', communeName: 'Arnouville', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons individuels' },
  ] },
  localStats: [{ label: 'Portails Sarcelles depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '4,8 / 5' }, { label: 'Part copros', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Sarcelles : forte demande copros, motorisation Came/Nice.' },
}
