import type { PremiumCase } from './types'

export const portailsYvelines78MantesLaJolie: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'mantes-la-jolie',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Mantes-la-Jolie 78', caption: 'Coulissant motorisé — copro Mantes' },
  heroQuote: { text: 'Mantes-la-Jolie copro 100 lots, coulissant Came + ANRU. Vote AG unanime.', author: 'Conseil syndical', context: 'Mantes-la-Jolie Val-Fourré' },
  cityGuide: { intro: `Mantes-la-Jolie (45 000 habitants, 78 nord) sous-préfecture Yvelines. Mix grandes copros ANRU 2 (Val-Fourré) + pavillons centre historique bord Seine. Demande portails copros forte.`,
    sections: [
      { heading: 'Mantes — copros ANRU + centre historique', body: `70% copros (ANRU 2 Val-Fourré), 30% pavillons centre historique bord Seine. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant copro : 6 500-9 500 €. Battant pavillon : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 6 m + ANRU — copro 100 lots Val-Fourré', location: 'Val-Fourré, Mantes-la-Jolie', date: 'Juillet 2024', description: `Copro ANRU 2 Val-Fourré. Coulissant Came BX-241 + coordination Bouygues Construction. Subvention ANRU 35 %. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 200 €', duration: '18 sem. (ANRU)', surface: '6 m' }, quote: { text: 'Mantes-la-Jolie copro 100 lots, coulissant Came + ANRU. Vote AG unanime.', author: 'Conseil syndical', context: 'Mantes-la-Jolie Val-Fourré' } }],
  localReviews: [
    { text: 'Mantes-la-Jolie copro 100 lots, coulissant Came + ANRU. Vote AG unanime.', author: 'Conseil syndical', context: 'Mantes-la-Jolie Val-Fourré', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant pavillon centre historique bord Seine. Acier RAL 7016 ABF validé.', author: 'Famille B.', context: 'Mantes centre historique', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon Gassicourt. Sans rail, propre.', author: 'Famille R.', context: 'Gassicourt, Mantes', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 nord.', rows: [
    { communeSlug: 'magnanville', communeName: 'Magnanville', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'mantes-la-ville', communeName: 'Mantes-la-Ville', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'limay', communeName: 'Limay', priceAvg: '5 200-7 800 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Seine' },
  ] },
  localStats: [{ label: 'Portails Mantes depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros ANRU', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Mantes-la-Jolie sous-préfecture Yvelines, copros ANRU 2.' },
}
