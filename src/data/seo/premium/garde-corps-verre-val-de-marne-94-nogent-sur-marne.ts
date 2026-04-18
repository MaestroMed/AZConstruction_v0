import type { PremiumCase } from './types'

export const gardeCorpsVerreValDeMarne94NogentSurMarne: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'nogent-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Nogent-sur-Marne 94', caption: 'Verre toute hauteur — pavillon bord Marne Nogent' },
  heroQuote: { text: 'Nogent bord Marne, verre toute hauteur fixations invisibles. Vue libérée parfaite.', author: 'Famille V.', context: 'Nogent bord Marne' },
  cityGuide: { intro: `Nogent-sur-Marne (32 000 habitants, 94) ville résidentielle CSP+ avec bord Marne + Bois de Vincennes. Pavillons bourgeois + apparts vue Marne. Demande forte garde-corps verre invisible.`,
    sections: [
      { heading: 'Nogent — bord Marne CSP+', body: `60% pavillons individuels (bord Marne + hauteurs), 40% apparts avec vue. Verre toute hauteur U-channel inox 316L dominant.` },
      { heading: 'Tarifs', body: `Verre + acier : 450-620 €/ml. Verre toute hauteur invisible : 550-720 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre toute hauteur 14 ml — pavillon bord Marne Nogent', location: 'Quai de l\'Artois, Nogent', date: 'Juillet 2024', description: `Pavillon bord Marne vue libre. Verre 8+8 U-channel inox 316L poli + scellements béton dalle. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 800 €', duration: '8 sem.', surface: '14 ml' }, quote: { text: 'Nogent bord Marne, verre toute hauteur fixations invisibles. Vue libérée parfaite.', author: 'Famille V.', context: 'Nogent bord Marne' } }],
  localReviews: [
    { text: 'Nogent bord Marne, verre toute hauteur fixations invisibles. Vue libérée parfaite.', author: 'Famille V.', context: 'Nogent bord Marne', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + laiton patiné pavillon hauteurs. Cohérence ferronneries XIXe.', author: 'Famille R.', context: 'Nogent centre', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L systématique exposition Marne. Anti-corrosion renforcée.', author: 'Hugo T.', context: 'Nogent résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes bord Marne.', rows: [
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'Mix pavillons + apparts' },
    { communeSlug: 'joinville-le-pont', communeName: 'Joinville-le-Pont', priceAvg: '450-620 €/ml', durationAvg: '6-8 sem.', note: 'Bord Marne pavillons' },
    { communeSlug: 'bry-sur-marne', communeName: 'Bry-sur-Marne', priceAvg: '420-580 €/ml', durationAvg: '6-8 sem.', note: 'Pavillons bord Marne' },
  ] },
  localStats: [{ label: 'Garde-corps verre Nogent depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part bord Marne', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Nogent bord Marne CSP+, verre toute hauteur dominant.' },
}
