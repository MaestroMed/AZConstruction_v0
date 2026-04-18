import type { PremiumCase } from './types'

export const verrieresYvelines78MarlyLeRoi: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'marly-le-roi',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Marly-le-Roi 78', caption: 'Verrière 6 carreaux — pavillon Marly-le-Roi' },
  heroQuote: { text: 'Marly-le-Roi pavillon royal, verrière 6 carreaux soudure TIG. Cohérence XVIIIe.', author: 'Famille de M.', context: 'Marly-le-Roi centre' },
  cityGuide: { intro: `Marly-le-Roi (16 000 habitants, 78) ville royale historique avec Domaine + Parc + Machine. Pavillons CSP++ + Cité-Jardin (urbanisme 1934). Demande verrière atelier haute couture.`,
    sections: [
      { heading: 'Marly — royale + Cité-Jardin', body: `85% pavillons individuels (Domaine + Cité-Jardin), 15% apparts. Verrière 6-8 carreaux TIG haute couture dominante.` },
      { heading: 'Tarifs', body: `Verrière 6 carreaux MIG : 5 500-7 500 €. TIG soudure invisible : 9 000-13 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux TIG + laiton patiné — pavillon Marly', location: 'Domaine Marly', date: 'Juillet 2024', description: `Pavillon royal 1935 rénové. Verrière 4 m × 2,80 m soudure TIG + main courante laiton patiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 800 €', duration: '9 sem.', surface: '11,2 m²' }, quote: { text: 'Marly-le-Roi pavillon royal, verrière 6 carreaux soudure TIG. Cohérence XVIIIe.', author: 'Famille de M.', context: 'Marly-le-Roi centre' } }],
  localReviews: [
    { text: 'Marly-le-Roi pavillon royal, verrière 6 carreaux soudure TIG. Cohérence XVIIIe.', author: 'Famille de M.', context: 'Marly-le-Roi centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière Cité-Jardin 1934 profil 30 mm TIG invisible. Art.', author: 'Famille L.', context: 'Cité-Jardin Marly', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné bronze florentin main courante. Haute couture.', author: 'Hugo T.', context: 'Marly Domaine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines royales 78.', rows: [
    { communeSlug: 'louveciennes', communeName: 'Louveciennes', priceAvg: '1 400-2 000 €/m²', durationAvg: '6-8 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'le-pecq', communeName: 'Le Pecq', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Bord Seine pavillons' },
    { communeSlug: 'saint-germain-en-laye', communeName: 'Saint-Germain-en-Laye', priceAvg: '1 400-2 200 €/m²', durationAvg: '8-12 sem.', note: 'Royale ABF château' },
  ] },
  localStats: [{ label: 'Verrières Marly-le-Roi depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part TIG haute couture', value: '40 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Marly-le-Roi royale Domaine + Cité-Jardin 1934.' },
}
