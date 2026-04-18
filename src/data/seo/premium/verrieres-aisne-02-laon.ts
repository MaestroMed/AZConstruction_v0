import type { PremiumCase } from './types'

export const verrieresAisne02Laon: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'aisne-02',
  communeSlug: 'laon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Laon 02', caption: 'Verrière 6 carreaux ABF — maison Ville-Haute Laon' },
  heroQuote: { text: 'Laon maison médiévale Ville-Haute cathédrale ABF, verrière 6 carreaux validé. Cohérence XIIe.', author: 'Famille L.', context: 'Laon Ville-Haute ABF' },
  cityGuide: { intro: `Laon (24 000 habitants, 02) préfecture Aisne — cité médiévale cathédrale Notre-Dame XIIe-XIIIe perchée sur butte + Ville-Haute ABF intégrale + Ville-Basse pavillons. Clientèle CSP++ patrimoine.`,
    sections: [
      { heading: 'Laon — médiévale ABF cathédrale', body: `60% zone ABF Ville-Haute, 40% extérieur Ville-Basse. Verrière 6-8 carreaux profil noir mat ABF validé Ville-Haute dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 700-6 400 €. ABF Ville-Haute : 5 300-7 200 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison Ville-Haute Laon', location: 'Ville-Haute, Laon', date: 'Juillet 2024', description: `Maison XVIIIe rénovée Ville-Haute cathédrale. Verrière 3,5 m × 2,6 m profils 40 mm noir mat + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 700 €', duration: '11 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Laon maison médiévale Ville-Haute cathédrale ABF, verrière 6 carreaux validé. Cohérence XIIe.', author: 'Famille L.', context: 'Laon Ville-Haute ABF' } }],
  localReviews: [
    { text: 'Laon maison médiévale Ville-Haute cathédrale ABF, verrière 6 carreaux validé. Cohérence XIIe.', author: 'Famille L.', context: 'Laon Ville-Haute ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante Ville-Basse. Soudures MIG invisibles.', author: 'Famille D.', context: 'Laon Vaux-sous-Laon', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF cathédrale géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Laon centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 02.', rows: [
    { communeSlug: 'soissons', communeName: 'Soissons', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'saint-quentin', communeName: 'Saint-Quentin', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Plus grande ville 02' },
    { communeSlug: 'chateau-thierry', communeName: 'Château-Thierry', priceAvg: '900-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne historique' },
  ] },
  localStats: [{ label: 'Verrières Laon depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Laon préfecture 02 cité médiévale cathédrale XIIe ABF Ville-Haute.' },
}
