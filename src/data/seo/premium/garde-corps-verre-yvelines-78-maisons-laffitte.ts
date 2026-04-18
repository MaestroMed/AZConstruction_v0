import type { PremiumCase } from './types'

export const gardeCorpsVerreYvelines78MaisonsLaffitte: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'yvelines-78',
  communeSlug: 'maisons-laffitte',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Maisons-Laffitte 78', caption: 'Verre toute hauteur — pavillon hippique Maisons-Laffitte' },
  heroQuote: { text: 'Maisons-Laffitte pavillon hippique, verre toute hauteur. Vue libérée parc.', author: 'Famille V.', context: 'Quartier Parc Maisons-Laffitte' },
  cityGuide: { intro: `Maisons-Laffitte (24 000 habitants, 78) ville résidentielle haute couture, célèbre pour son hippodrome et son parc Mansart. Clientèle CSP++ exigeante, pavillons grand standing.`,
    sections: [
      { heading: 'Maisons-Laffitte — quartier Parc Mansart', body: `90% pavillons individuels grand standing dans le Parc (urbanisme 1834 protégé). Verre toute hauteur fixations invisibles dominante. Architecture XIXe + contemporain pour rénovations.` },
      { heading: 'Process Parc protégé', body: `Zone urbanisme protégée → règlement Parc Mansart à respecter (matériaux, hauteurs, alignements). Devis avec dossier mairie inclus.` },
      { heading: 'Tarifs', body: `Verre + acier : 420-580 €/ml. Verre toute hauteur invisible : 520-700 €/ml. Verre + main courante laiton patiné : 580-780 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre toute hauteur 18 ml — pavillon Parc Maisons-Laffitte', location: 'Parc Mansart, Maisons-Laffitte', date: 'Juillet 2024', description: `Pavillon XIXe rénové dans le Parc Mansart. Verre 8+8 toute hauteur fixations invisibles, terrasse + escalier extérieur. Pose 2 jours par 3 compagnons.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 800 €', duration: '10 sem.', surface: '18 ml' }, quote: { text: 'Maisons-Laffitte pavillon hippique, verre toute hauteur. Vue libérée parc.', author: 'Famille V.', context: 'Parc Maisons-Laffitte' } }],
  localReviews: [
    { text: 'Maisons-Laffitte pavillon hippique, verre toute hauteur. Vue libérée parc.', author: 'Famille V.', context: 'Parc Maisons-Laffitte', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + main courante laiton patiné. Compromis modernité/cachet XIXe parfait.', author: 'Famille H.', context: 'Centre Maisons-Laffitte', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox tendus terrasse pavillon. Look contemporain bord Seine.', author: 'Hugo T.', context: 'Bord Seine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 78.', rows: [
    { communeSlug: 'le-vesinet', communeName: 'Le Vésinet', priceAvg: '450-620 €/ml', durationAvg: '5-8 sem.', note: 'Ville-jardin CSP++' },
    { communeSlug: 'saint-germain-en-laye', communeName: 'Saint-Germain-en-Laye', priceAvg: '450-620 €/ml', durationAvg: '5-8 sem.', note: 'Royale historique' },
    { communeSlug: 'le-pecq', communeName: 'Le Pecq', priceAvg: '420-580 €/ml', durationAvg: '5-8 sem.', note: 'Bord Seine pavillons' },
  ] },
  localStats: [{ label: 'Garde-corps verre Maisons-Laffitte depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part Parc Mansart', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP++ Parc Mansart, urbanisme protégé.' },
}
