import type { PremiumCase } from './types'

export const portailsSeineEtMarne77Meaux: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'meaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Meaux 77', caption: 'Coulissant motorisé Came — pavillon Meaux' },
  heroQuote: { text: 'Meaux pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Meaux centre' },
  cityGuide: { intro: `Meaux (55 000 habitants, 77) sous-préfecture nord Seine-et-Marne, ville mixte avec centre historique cathédrale + pavillons + copros. Demande équilibrée portails.`,
    sections: [
      { heading: 'Meaux — patrimoine + pavillons', body: `60% pavillons individuels, 30% copros, 10% centre historique ABF (cathédrale Saint-Étienne). Coulissant motorisé + battant dominants.` },
      { heading: 'Process ABF centre historique', body: `Zone ABF cathédrale → dossier déclaration préalable + ABF (4-6 sem délai). Hors ABF : liberté totale.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — pavillon Meaux', location: 'Meaux centre', date: 'Juin 2024', description: `Remplacement portail bois ancien. Coulissant rail motorisé Came BX-241, photocellules + clignotant LED. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Meaux pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Meaux centre' } }],
  localReviews: [
    { text: 'Meaux pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Meaux centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents 77.', author: 'Famille D.', context: 'Meaux nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Meaux sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77.', rows: [
    { communeSlug: 'chelles', communeName: 'Chelles', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'lagny-sur-marne', communeName: 'Lagny-sur-Marne', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Marne' },
    { communeSlug: 'pontault-combault', communeName: 'Pontault-Combault', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Meaux depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Meaux sous-préfecture, demande pavillons + copros.' },
}
