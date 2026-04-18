import type { PremiumCase } from './types'

export const portailsYvelines78ConflansSainteHonorine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'conflans-sainte-honorine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Conflans-Sainte-Honorine 78', caption: 'Battant double vantail — pavillon Conflans bord Seine' },
  heroQuote: { text: 'Conflans bord Seine, battant double vantail acier. Vue préservée, motorisation discrète.', author: 'Famille V.', context: 'Conflans-Sainte-Honorine' },
  cityGuide: { intro: `Conflans-Sainte-Honorine (35 000 habitants, 78) capitale de la batellerie, ville pavillonnaire bord Seine. Demande équilibrée portails battants + coulissants.`,
    sections: [
      { heading: 'Conflans — capitale batellerie', body: `75% pavillons individuels bord Seine + hauteurs, 25% petites copros. Battant double vantail + coulissant motorisé dominants.` },
      { heading: 'Tarifs', body: `Battant pavillon : 4 800-6 800 €. Coulissant : 5 200-7 500 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m motorisé — pavillon Conflans bord Seine', location: 'Conflans bord Seine', date: 'Juin 2024', description: `Pavillon bord Seine vue libre, remplacement portail bois. Battant double vantail acier RAL 7016, motorisation Nice à bras. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '6 sem.', surface: '4 m' }, quote: { text: 'Conflans bord Seine, battant double vantail acier. Vue préservée, motorisation discrète.', author: 'Famille V.', context: 'Conflans bord Seine' } }],
  localReviews: [
    { text: 'Conflans bord Seine, battant double vantail acier. Vue préservée, motorisation discrète.', author: 'Famille V.', context: 'Conflans bord Seine', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant motorisé Came pavillon hauteurs Conflans. Silencieux et durable.', author: 'Famille B.', context: 'Hauteurs Conflans', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail, esthétique top.', author: 'Hugo D.', context: 'Conflans centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78.', rows: [
    { communeSlug: 'andresy', communeName: 'Andrésy', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'achères', communeName: 'Achères', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'maurecourt', communeName: 'Maurecourt', priceAvg: '5 500-7 800 €', durationAvg: '10-14 sem.', note: 'Pavillons bord Seine' },
  ] },
  localStats: [{ label: 'Portails Conflans depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part bord Seine', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Conflans bord Seine, batellerie historique.' },
}
