import type { PremiumCase } from './types'

export const portailsYvelines78LesMureaux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'les-mureaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Les Mureaux 78', caption: 'Portail coulissant 4 m RAL 7016 — copro Les Mureaux' },
  heroQuote: { text: 'Les Mureaux copro ANRU 110 lots, portail coulissant + subvention 35 %.', author: 'Conseil syndical', context: 'Les Mureaux centre' },
  cityGuide: { intro: `Les Mureaux (32 000 habitants, 78 nord) ville bord Seine — pavillons + grandes copros ANRU + Ariane Group. Demande portails motorisés + ANRU forte.`,
    sections: [
      { heading: 'Les Mureaux — bord Seine ANRU + Ariane', body: `40% pavillons individuels, 50% copros ANRU années 60-70, 10% industriel Ariane. Portail coulissant 4-6 m Came BK + subvention ANRU dominant.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. Coulissant 4 m : 4 200-5 800 €. Subvention ANRU 30-40 %.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant + ANRU — copro Les Mureaux', location: 'Les Mureaux centre', date: 'Juillet 2024', description: `Copro 110 lots ANRU 2. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif + coordination Eiffage. Subvention ANRU 35 %.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '18 sem.', surface: '4 m' }, quote: { text: 'Les Mureaux copro ANRU 110 lots, portail coulissant + subvention 35 %.', author: 'Conseil syndical', context: 'Les Mureaux centre' } }],
  localReviews: [
    { text: 'Les Mureaux copro ANRU 110 lots, portail coulissant + subvention 35 %.', author: 'Conseil syndical', context: 'Les Mureaux centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Battant 3,5 m pavillon bord Seine. Karim sérieux.', author: 'Famille L.', context: 'Les Mureaux bord Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Coordination Eiffage + ANRU Karim. Sans stress.', author: 'Gestionnaire syndic', context: 'Les Mureaux résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 nord.', rows: [
    { communeSlug: 'meulan-en-yvelines', communeName: 'Meulan-en-Yvelines', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Bord Seine' },
    { communeSlug: 'mantes-la-jolie', communeName: 'Mantes-la-Jolie', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture + ANRU' },
    { communeSlug: 'chanteloup-les-vignes', communeName: 'Chanteloup-les-Vignes', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'ANRU + pavillons' },
  ] },
  localStats: [{ label: 'Portails Les Mureaux depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Subventions ANRU obtenues', value: '5 / 7 (71 %)' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Les Mureaux bord Seine ANRU + Ariane Group industriel.' },
}
