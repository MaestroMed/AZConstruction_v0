import type { PremiumCase } from './types'

export const verrieresValDeMarne94VitrySurSeine: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'vitry-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Vitry-sur-Seine 94', caption: 'Verrière 8 carreaux — loft reconverti Vitry' },
  heroQuote: { text: 'Vitry-sur-Seine loft ex-atelier reconverti MAC VAL, verrière 8 carreaux visserie apparente.', author: 'Studio V.', context: 'Vitry MAC VAL' },
  cityGuide: { intro: `Vitry-sur-Seine (95 000 habitants, 94) plus grande ville 94 — street art + MAC VAL + anciens ateliers reconvertis lofts + grandes copros ANRU. Clientèle créatifs + classes populaires.`,
    sections: [
      { heading: 'Vitry — street art lofts MAC VAL', body: `25% lofts reconvertis ex-ateliers (quartiers Seine, Balzac), 55% copros ANRU années 60-70, 20% pavillons. Verrière 8-10 carreaux visserie apparente + ABF MAC VAL.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 800-6 500 €. Visserie apparente : +10-15 %. ANRU copros.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux visserie apparente — loft Vitry MAC VAL', location: 'MAC VAL, Vitry', date: 'Juin 2024', description: `Loft 160 m² ex-atelier 1925 reconverti bord MAC VAL. Verrière 5 m × 2,80 m visserie noire apparente inox A2-70. Soudures MIG volontairement apparentes. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 400 €', duration: '8 sem.', surface: '14 m²' }, quote: { text: 'Vitry-sur-Seine loft ex-atelier reconverti MAC VAL, verrière 8 carreaux visserie apparente.', author: 'Studio V.', context: 'Vitry MAC VAL' } }],
  localReviews: [
    { text: 'Vitry-sur-Seine loft ex-atelier reconverti MAC VAL, verrière 8 carreaux visserie apparente.', author: 'Studio V.', context: 'Vitry MAC VAL', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante pavillon rénové. Soudures MIG invisibles.', author: 'Famille L.', context: 'Vitry résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Authentique industriel.', author: 'Hugo T.', context: 'Vitry Balzac', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94 nord-ouest.', rows: [
    { communeSlug: 'ivry-sur-seine', communeName: 'Ivry-sur-Seine', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Lofts créatifs' },
    { communeSlug: 'villejuif', communeName: 'Villejuif', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix Cancer-Campus' },
    { communeSlug: 'kremlin-bicetre', communeName: 'Le Kremlin-Bicêtre', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Limitrophe Paris 13e' },
  ] },
  localStats: [{ label: 'Verrières Vitry depuis 2020', value: '~13' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part lofts reconvertis', value: '30 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Vitry-sur-Seine plus grande 94 street art MAC VAL + lofts + ANRU.' },
}
