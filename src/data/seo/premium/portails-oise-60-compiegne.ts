import type { PremiumCase } from './types'

export const portailsOise60Compiegne: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'compiegne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Compiègne 60', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Compiègne' },
  heroQuote: { text: 'Compiègne pavillon bourgeois bord Oise Château, portail battant ABF validé. Cohérence.', author: 'Famille de C.', context: 'Compiègne centre ABF' },
  cityGuide: { intro: `Compiègne (41 000 habitants, 60) sous-préfecture Oise — Château impérial Napoléon III + forêt + Armistice (Clairière) + pavillons bourgeois + université. Zone ABF Château + centre historique.`,
    sections: [
      { heading: 'Compiègne — Château impérial ABF', body: `30% zone ABF Château + centre historique, 60% pavillons bourgeois, 10% copros centre. Portail battant 3,5 m RAL foncé ABF dominant + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. ABF centre/Château : 3 800-5 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant ABF — pavillon Compiègne bord Château', location: 'Château, Compiègne', date: 'Juillet 2024', description: `Pavillon bourgeois 1890 rénové bord Château impérial. Portail battant 3,5 m RAL 7016 + Came BX-241 + dossier ABF 6 sem. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 800 €', duration: '11 sem. (ABF)', surface: '3,5 m' }, quote: { text: 'Compiègne pavillon bourgeois bord Oise Château, portail battant ABF validé. Cohérence.', author: 'Famille de C.', context: 'Compiègne centre ABF' } }],
  localReviews: [
    { text: 'Compiègne pavillon bourgeois bord Oise Château, portail battant ABF validé. Cohérence.', author: 'Famille de C.', context: 'Compiègne centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant 4 m pavillon extérieur. Karim sérieux.', author: 'Famille L.', context: 'Compiègne résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château impérial géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Compiègne forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60 est.', rows: [
    { communeSlug: 'margny-les-compiegne', communeName: 'Margny-lès-Compiègne', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Pavillons limitrophe' },
    { communeSlug: 'noyon', communeName: 'Noyon', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Petite ville + cathédrale' },
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '3 000-4 400 €', durationAvg: '4-6 sem.', note: 'Sous-préfecture 60' },
  ] },
  localStats: [{ label: 'Portails Compiègne depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '30 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Compiègne 60 sous-préfecture Château impérial Napoléon III + Armistice forêt.' },
}
