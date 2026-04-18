import type { PremiumCase } from './types'

export const verriereAtelierValDeMarne94CharentonLePont: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'charenton-le-pont',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Charenton-le-Pont 94', caption: 'Verrière 10 carreaux — loft Charenton' },
  heroQuote: { text: 'Charenton-le-Pont loft reconverti bord Seine, verrière 10 carreaux visserie apparente.', author: 'Studio C.', context: 'Charenton bord Seine' },
  cityGuide: { intro: `Charenton-le-Pont (30 000 habitants, 94 limitrophe Paris 12e) ville bourgeoise bord Seine — pavillons + copros + anciens ateliers reconvertis lofts Bercy-Seine. Clientèle CSP++ créatifs.`,
    sections: [
      { heading: 'Charenton — bord Seine limitrophe Paris', body: `45% copros haussmanniennes centre, 30% lofts reconvertis ex-ateliers Bercy-Seine, 25% pavillons. Verrière 8-10 carreaux visserie apparente dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 400-7 300 €. Avec porte battante : 8 500-12 000 €. Visserie apparente : +10-15 %.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux visserie apparente — loft Charenton', location: 'Bord Seine, Charenton', date: 'Juin 2024', description: `Loft 170 m² ex-atelier 1920 reconverti bord Seine. Verrière 5,2 m × 2,80 m visserie noire apparente inox A2-70. Soudures MIG volontairement apparentes. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 000 €', duration: '8 sem.', surface: '14,6 m²' }, quote: { text: 'Charenton-le-Pont loft reconverti bord Seine, verrière 10 carreaux visserie apparente.', author: 'Studio C.', context: 'Charenton bord Seine' } }],
  localReviews: [
    { text: 'Charenton-le-Pont loft reconverti bord Seine, verrière 10 carreaux visserie apparente.', author: 'Studio C.', context: 'Charenton bord Seine', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante pavillon rénové. Soudures MIG invisibles.', author: 'Famille L.', context: 'Charenton résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire A2-70 double cuisson. Authentique industriel.', author: 'Famille M.', context: 'Charenton Bercy-Seine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94 limitrophe Paris 12e.', rows: [
    { communeSlug: 'saint-mande', communeName: 'Saint-Mandé', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeois limitrophe Paris' },
    { communeSlug: 'vincennes', communeName: 'Vincennes', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Château royal + Bois' },
    { communeSlug: 'maisons-alfort', communeName: 'Maisons-Alfort', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne bourgeois' },
  ] },
  localStats: [{ label: 'Verrières Charenton depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part lofts reconvertis', value: '35 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Charenton-le-Pont bord Seine limitrophe Paris 12e lofts Bercy-Seine + pavillons.' },
}
