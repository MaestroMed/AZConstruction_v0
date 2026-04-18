import type { PremiumCase } from './types'

export const gardeCorpsValDoise95Pontoise: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'val-doise-95',
  communeSlug: 'pontoise',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier — Pontoise 95', caption: 'Garde-corps barreaudage vertical — pavillon Pontoise centre' },
  heroQuote: { text: 'Pontoise centre historique, garde-corps acier sobre. Conseil ABF, finition irréprochable.', author: 'Famille R.', context: 'Pontoise centre' },
  cityGuide: { intro: `Pontoise (30 000 habitants, 95) sous-préfecture du Val-d'Oise, ville d'art et d'histoire. Centre historique avec contraintes ABF + pavillons hauteurs Oise. Demande équilibrée garde-corps acier + verre.`,
    sections: [
      { heading: 'Pontoise — patrimoine + pavillons', body: `40% centre historique ABF (zones protégées Saint-Maclou), 60% pavillons hauteurs Oise et résidentiel. En zone ABF : garde-corps acier barreaudage vertical sobre RAL 9005 dominant. Hors ABF : liberté formes contemporaines.` },
      { heading: 'Process ABF Pontoise', body: `Dossier déclaration préalable mairie + ABF (4-6 sem délai), respect prescriptions (matériaux, hauteur, espacement), pose après accord ABF.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 280-380 €/ml. Acier + lisses horizontales : 320-420 €/ml. Verre + acier : 420-580 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 8 ml — pavillon Pontoise centre ABF', location: 'Centre historique Pontoise', date: 'Juin 2024', description: `Pavillon zone ABF cathédrale Saint-Maclou. Garde-corps barreaudage vertical RAL 9005 satiné, hauteur 1,02 m, espacement 11 cm conforme NF P01-012. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 200 €', duration: '8 sem.', surface: '8 ml' }, quote: { text: 'Pontoise centre historique, garde-corps acier sobre. Conseil ABF, finition irréprochable.', author: 'Famille R.', context: 'Pontoise centre' } }],
  localReviews: [
    { text: 'Pontoise centre historique, garde-corps acier sobre. Conseil ABF, finition irréprochable.', author: 'Famille R.', context: 'Pontoise centre', rating: 5, date: 'Juin 2024' },
    { text: 'Garde-corps inox brossé terrasse pavillon hauteurs Oise. Vue préservée.', author: 'Famille D.', context: 'Pontoise hauteurs', rating: 5, date: 'Mars 2024' },
    { text: 'Verre + acier escalier extérieur. Atelier vrai métier, soudures invisibles.', author: 'Vincent L.', context: 'Pontoise Saint-Ouen-l\'Aumône', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 95.', rows: [
    { communeSlug: 'cergy', communeName: 'Cergy', priceAvg: '280-450 €/ml', durationAvg: '4-6 sem.', note: 'Préfecture, mix' },
    { communeSlug: 'osny', communeName: 'Osny', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'eragny', communeName: 'Éragny', priceAvg: '280-400 €/ml', durationAvg: '4-6 sem.', note: 'Mix pavillons' },
  ] },
  localStats: [{ label: 'Garde-corps Pontoise depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part zone ABF', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Pontoise : 40% zone ABF, conseil patrimoine indispensable.' },
}
