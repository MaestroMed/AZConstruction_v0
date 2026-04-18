import type { PremiumCase } from './types'

export const portailsAisne02Laon: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'aisne-02',
  communeSlug: 'laon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Laon 02', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Laon' },
  heroQuote: { text: 'Laon pavillon Ville-Haute médiévale, portail battant ABF validé. Cohérence historique.', author: 'Famille L.', context: 'Laon Ville-Haute' },
  cityGuide: { intro: `Laon (24 000 habitants, 02) préfecture Aisne — cité médiévale cathédrale Notre-Dame XIIe-XIIIe siècle perchée sur butte. Ville-Haute en zone ABF intégrale. Pavillons + maisons anciennes.`,
    sections: [
      { heading: 'Laon — médiéval ABF cathédrale', body: `60% zone ABF Ville-Haute, 40% extérieur Ville-Basse. Portail battant RAL foncé ABF validé dominant en Ville-Haute.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 000-4 400 € (Ville-Basse). ABF Ville-Haute : 3 500-4 900 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Laon Ville-Haute', location: 'Ville-Haute Laon', date: 'Juillet 2024', description: `Maison XVIIe rénovée Ville-Haute cathédrale. Portail battant 3,5 m RAL 7016 + Came BX. Dossier ABF 6 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 200 €', duration: '10 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Laon pavillon Ville-Haute médiévale, portail battant ABF validé. Cohérence historique.', author: 'Famille L.', context: 'Laon Ville-Haute' } }],
  localReviews: [
    { text: 'Laon pavillon Ville-Haute médiévale, portail battant ABF validé. Cohérence historique.', author: 'Famille L.', context: 'Laon Ville-Haute', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon Ville-Basse. Karim propre.', author: 'Famille D.', context: 'Laon Vaux-sous-Laon', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Laon centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 02.', rows: [
    { communeSlug: 'soissons', communeName: 'Soissons', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'saint-quentin', communeName: 'Saint-Quentin', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Plus grande ville 02' },
    { communeSlug: 'chauny', communeName: 'Chauny', priceAvg: '2 900-4 300 €', durationAvg: '4-6 sem.', note: 'Industriel' },
  ] },
  localStats: [{ label: 'Portails Laon depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Laon préfecture 02 médiéval ABF cathédrale.' },
}
