import type { PremiumCase } from './types'

export const gardeCorpsYvelines78Rambouillet: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'yvelines-78',
  communeSlug: 'rambouillet',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Rambouillet 78', caption: 'Barreaudage vertical — pavillon Rambouillet' },
  heroQuote: { text: 'Rambouillet pavillon bourgeois, garde-corps acier sobre. Finition soignée.', author: 'Famille V.', context: 'Rambouillet centre' },
  cityGuide: { intro: `Rambouillet (27 000 habitants, 78 sud) ville résidentielle bourgeoise avec Château présidentiel + Forêt. Pavillons CSP+ + centre historique ABF. Demande équilibrée garde-corps.`,
    sections: [
      { heading: 'Rambouillet — pavillons + centre ABF', body: `75% pavillons individuels bourgeois, 25% centre historique (zone ABF Château). Barreaudage vertical RAL 7016 + verre + acier dominants.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 12 ml — pavillon Rambouillet', location: 'Centre Rambouillet', date: 'Juin 2024', description: `Pavillon 1925 rénové zone ABF Château. Barreaudage vertical RAL 7016 anthracite (validé ABF). Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 400 €', duration: '8 sem. (ABF)', surface: '12 ml' }, quote: { text: 'Rambouillet pavillon bourgeois, garde-corps acier sobre. Finition soignée.', author: 'Famille V.', context: 'Rambouillet centre' } }],
  localReviews: [
    { text: 'Rambouillet pavillon bourgeois, garde-corps acier sobre. Finition soignée.', author: 'Famille V.', context: 'Rambouillet centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre toute hauteur terrasse pavillon vue Forêt. Vue libre.', author: 'Famille L.', context: 'Rambouillet Forêt', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château validé 8 semaines. Sophie a géré.', author: 'Hugo R.', context: 'Rambouillet centre ABF', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 78 sud.', rows: [
    { communeSlug: 'gazeran', communeName: 'Gazeran', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'saint-leger-en-yvelines', communeName: 'Saint-Léger-en-Yvelines', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons Forêt' },
    { communeSlug: 'les-mesnuls', communeName: 'Les Mesnuls', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps Rambouillet depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part zone ABF Château', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Rambouillet sous-préfecture 78 sud Château présidentiel.' },
}
