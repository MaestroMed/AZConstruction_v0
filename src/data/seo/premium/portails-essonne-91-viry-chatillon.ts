import type { PremiumCase } from './types'

export const portailsEssonne91ViryChatillon: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'essonne-91',
  communeSlug: 'viry-chatillon',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Viry-Châtillon 91', caption: 'Coulissant motorisé — pavillon Viry' },
  heroQuote: { text: 'Viry pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Viry-Châtillon centre' },
  cityGuide: { intro: `Viry-Châtillon (32 000 habitants, 91) ville résidentielle mixte pavillons + copros. Bord Seine + Lacs. Demande portails équilibrée.`,
    sections: [
      { heading: 'Viry — pavillons + copros', body: `65% pavillons, 35% copros. Coulissant Came + battant dominants.` },
      { heading: 'Tarifs', body: `Coulissant : 5 500-8 000 €. Battant : 4 800-6 800 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — pavillon Viry-Châtillon', location: 'Centre Viry', date: 'Juin 2024', description: `Pavillon 1980. Coulissant Came BX-241. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Viry pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Viry-Châtillon centre' } }],
  localReviews: [
    { text: 'Viry pavillon, coulissant Came motorisé. Pose 1 jour propre.', author: 'Famille B.', context: 'Viry-Châtillon centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant double vantail motorisé Nice. Silencieux.', author: 'Famille L.', context: 'Viry lacs', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant sans rail. Pro.', author: 'Vincent T.', context: 'Viry résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 91.', rows: [
    { communeSlug: 'grigny', communeName: 'Grigny', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Copros + pavillons' },
    { communeSlug: 'ris-orangis', communeName: 'Ris-Orangis', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'draveil', communeName: 'Draveil', priceAvg: '5 500-8 200 €', durationAvg: '10-14 sem.', note: 'Bord Seine pavillons' },
  ] },
  localStats: [{ label: 'Portails Viry depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '65 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Viry-Châtillon mix pavillons + copros bord Seine.' },
}
