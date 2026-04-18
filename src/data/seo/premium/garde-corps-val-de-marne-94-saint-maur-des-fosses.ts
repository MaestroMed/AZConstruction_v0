import type { PremiumCase } from './types'

export const gardeCorpsValDeMarne94SaintMaurDesFosses: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'saint-maur-des-fosses',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Saint-Maur-des-Fossés bord de Marne', caption: 'Verre toute hauteur — pavillon vue Marne' },
  heroQuote: { text: 'Saint-Maur bord de Marne, verre toute hauteur libère vue. Pose 1 jour propre.', author: 'Famille D.', context: 'Bord de Marne, Saint-Maur' },
  cityGuide: { intro: `Saint-Maur-des-Fossés (75 000 habitants, 94 sud) compte beaucoup de pavillons individuels avec terrasses vue Marne + petites copros centre. Demande premium garde-corps verre.`,
    sections: [
      { heading: 'Saint-Maur — pavillons + Marne', body: `70% pavillons vue Marne, 30% copros. Verre + main courante acier dominant pour vues.` },
      { heading: 'Tarifs', body: `Verre + acier : 380-520 €/ml. Verre toute hauteur invisible : 480-650 €/ml. Délai 5-8 sem.` },
    ] },
  caseStudies: [{ title: 'Verre toute hauteur 10 ml — pavillon vue Marne', location: 'Bord de Marne, Saint-Maur', date: 'Juin 2024', description: `Garde-corps verre 8+8 toute hauteur fixations invisibles, terrasse pavillon vue Marne. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '5 800 €', duration: '7 sem.', surface: '10 ml' }, quote: { text: 'Saint-Maur bord de Marne, verre toute hauteur libère vue. Pose 1 jour propre.', author: 'Famille D.', context: 'Bord de Marne' } }],
  localReviews: [
    { text: 'Saint-Maur bord de Marne, verre toute hauteur libère vue. Pose 1 jour propre.', author: 'Famille D.', context: 'Bord de Marne, Saint-Maur', rating: 5, date: 'Juin 2024' },
    { text: 'Garde-corps cables inox terrasse pavillon. Look contemporain marin.', author: 'Vincent P.', context: 'Centre Saint-Maur', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration ferronnerie hôtel particulier. ABF léger géré.', author: 'Famille R.', context: 'Saint-Maur centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 94.', rows: [
    { communeSlug: 'joinville-le-pont', communeName: 'Joinville-le-Pont', priceAvg: '380-520 €/ml', durationAvg: '5-8 sem.', note: 'Bord de Marne premium' },
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '420-580 €/ml', durationAvg: '5-8 sem.', note: 'Bord de Marne CSP++' },
    { communeSlug: 'champigny-sur-marne', communeName: 'Champigny-sur-Marne', priceAvg: '320-450 €/ml', durationAvg: '6-10 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Garde-corps Saint-Maur depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part vue Marne', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP+ pavillons vue Marne.' },
}
