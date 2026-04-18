import type { PremiumCase } from './types'

export const portailsYvelines78Sartrouville: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'sartrouville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Sartrouville 78', caption: 'Coulissant motorisé — pavillon Sartrouville' },
  heroQuote: { text: 'Sartrouville pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Sartrouville centre' },
  cityGuide: { intro: `Sartrouville (52 000 habitants, 78) ville résidentielle pavillonnaire bord Seine. Demande équilibrée portails battants/coulissants.`,
    sections: [
      { heading: 'Sartrouville — pavillonnaire bord Seine', body: `70% pavillons individuels, 30% petites copros. Coulissant motorisé Came/Nice + battant double vantail dominants.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — pavillon Sartrouville', location: 'Centre Sartrouville', date: 'Juin 2024', description: `Remplacement portail bois ancien. Coulissant rail motorisé Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 500 €', duration: '8 sem.', surface: '5 m' }, quote: { text: 'Sartrouville pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Sartrouville centre' } }],
  localReviews: [
    { text: 'Sartrouville pavillon, coulissant motorisé silencieux. Pose 1 jour propre.', author: 'Famille L.', context: 'Sartrouville centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant double vantail acier. Pose 1 journée propre, motorisation Nice.', author: 'Famille R.', context: 'Sartrouville bord Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel sans rail. Look contemporain.', author: 'Vincent T.', context: 'Sartrouville résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78.', rows: [
    { communeSlug: 'houilles', communeName: 'Houilles', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'maisons-laffitte', communeName: 'Maisons-Laffitte', priceAvg: '6 500-12 000 €', durationAvg: '12-16 sem.', note: 'Parc Mansart CSP++' },
    { communeSlug: 'le-pecq', communeName: 'Le Pecq', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Bord Seine pavillons' },
  ] },
  localStats: [{ label: 'Portails Sartrouville depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Sartrouville pavillonnaire bord Seine.' },
}
