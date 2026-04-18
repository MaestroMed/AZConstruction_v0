import type { PremiumCase } from './types'

export const verriereAtelierValDeMarne94BrySurMarne: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'bry-sur-marne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Bry-sur-Marne 94', caption: 'Verrière 6 carreaux — pavillon Bry bord Marne' },
  heroQuote: { text: 'Bry pavillon bord Marne, verrière acier 6 carreaux soudé MIG. Pose 1 jour propre.', author: 'Famille K.', context: 'Bry-sur-Marne centre' },
  cityGuide: { intro: `Bry-sur-Marne (16 000 habitants, 94) ville résidentielle pavillonnaire bord Marne avec bois + quai. Pavillons CSP+ dominants. Demande verrière atelier en croissance.`,
    sections: [
      { heading: 'Bry-sur-Marne — pavillonnaire bord Marne', body: `85% pavillons individuels, 15% copros rares. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Bry bord Marne', location: 'Quai Louis-Ferber, Bry', date: 'Juin 2024', description: `Pavillon 1948 rénové bord Marne. Verrière 3,5 m × 2,60 m, 6 carreaux profils 40 mm noir mat satiné. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '6 sem.', surface: '9,1 m²' }, quote: { text: 'Bry pavillon bord Marne, verrière acier 6 carreaux soudé MIG. Pose 1 jour propre.', author: 'Famille K.', context: 'Bry-sur-Marne centre' } }],
  localReviews: [
    { text: 'Bry pavillon bord Marne, verrière acier 6 carreaux soudé MIG. Pose 1 jour propre.', author: 'Famille K.', context: 'Bry-sur-Marne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante cuisine. Métier artisanal reconnaissable.', author: 'Famille L.', context: 'Bry résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Soudures MIG meulées invisibles. Pro.', author: 'Hugo R.', context: 'Bry bord Marne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes bord Marne 94.', rows: [
    { communeSlug: 'le-perreux-sur-marne', communeName: 'Le Perreux-sur-Marne', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne CSP+' },
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne bourgeoise' },
    { communeSlug: 'villiers-sur-marne', communeName: 'Villiers-sur-Marne', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Bry depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Bry-sur-Marne pavillonnaire bord Marne CSP+.' },
}
