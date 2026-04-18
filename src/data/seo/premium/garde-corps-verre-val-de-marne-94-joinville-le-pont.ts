import type { PremiumCase } from './types'

export const gardeCorpsVerreValDeMarne94JoinvilleLePont: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'joinville-le-pont',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Joinville-le-Pont bord Marne', caption: 'Verre toute hauteur — pavillon vue Marne Joinville' },
  heroQuote: { text: 'Joinville bord de Marne, verre toute hauteur. Vue libérée, pose 1 jour propre.', author: 'Famille V.', context: 'Bord de Marne, Joinville' },
  cityGuide: { intro: `Joinville-le-Pont (19 000 habitants, 94) bord de Marne, clientèle pavillon premium. Demande forte garde-corps verre.`,
    sections: [
      { heading: 'Joinville — pavillons premium Marne', body: `80% pavillons individuels bord Marne. Verre toute hauteur dominant.` },
      { heading: 'Tarifs', body: `Verre + acier : 420-580 €/ml. Verre toute hauteur invisible : 520-700 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre toute hauteur 12 ml — pavillon Joinville Marne', location: 'Bord de Marne, Joinville', date: 'Juillet 2024', description: `Garde-corps verre 8+8 toute hauteur fixations invisibles, pavillon bord Marne. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '8 sem.', surface: '12 ml' }, quote: { text: 'Joinville bord de Marne, verre toute hauteur. Vue libérée, pose 1 jour propre.', author: 'Famille V.', context: 'Bord de Marne' } }],
  localReviews: [
    { text: 'Joinville bord de Marne, verre toute hauteur. Vue libérée, pose 1 jour propre.', author: 'Famille V.', context: 'Bord de Marne, Joinville', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + main courante laiton patiné. Compromis modernité/cachet parfait.', author: 'Famille R.', context: 'Joinville centre', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox terrasse pavillon. Look contemporain.', author: 'Vincent P.', context: 'Polangis, Joinville', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines.', rows: [
    { communeSlug: 'saint-maur-des-fosses', communeName: 'Saint-Maur-des-Fossés', priceAvg: '420-580 €/ml', durationAvg: '5-8 sem.', note: 'Bord Marne pavillons' },
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '450-620 €/ml', durationAvg: '5-8 sem.', note: 'Bord Marne CSP++' },
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '420-580 €/ml', durationAvg: '5-8 sem.', note: 'Mix pavillons + apparts' },
  ] },
  localStats: [{ label: 'Garde-corps verre Joinville depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part vue Marne', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible pavillons premium bord Marne.' },
}
