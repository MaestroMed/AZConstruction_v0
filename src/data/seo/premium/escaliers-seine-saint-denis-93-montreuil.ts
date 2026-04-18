import type { PremiumCase } from './types'

export const escaliersSeineSaintDenis93Montreuil: PremiumCase = {
  productSlug: 'escaliers',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'montreuil',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Escalier — Montreuil 93', caption: 'Escalier droit suspendu acier + chêne — loft Bas-Montreuil' },
  heroQuote: { text: 'Montreuil Bas-Montreuil gentrifié, escalier suspendu dans notre loft. Magnifique.', author: 'Famille C.', context: 'Bas-Montreuil' },
  cityGuide: { intro: `Montreuil (109 000 habitants) en pleine gentrification depuis 15 ans, particulièrement Bas-Montreuil et Croix-de-Chavaux. Demande croissante d'escaliers métalliques dans lofts/apparts rénovés.`,
    sections: [
      { heading: 'Montreuil — lofts gentrifiés', body: `70% lofts/duplex Bas-Montreuil, 30% copros classiques. Hélicoïdaux + droits suspendus dominants.` },
      { heading: 'Tarifs Montreuil', body: `Hélicoïdal Ø 1,40 m : 5 800-8 500 €. Droit suspendu : 6 200-9 000 €.` },
    ] },
  caseStudies: [{ title: 'Droit suspendu acier + chêne — loft Bas-Montreuil', location: 'Bas-Montreuil', date: 'Juin 2024', description: `Escalier droit suspendu cantilever + marches chêne huilé loft. Pose 2 jours propre.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 800 €', duration: '10 sem.', surface: '14 marches suspendues' }, quote: { text: 'Montreuil Bas-Montreuil gentrifié, escalier suspendu dans notre loft. Magnifique.', author: 'Famille C.', context: 'Bas-Montreuil' } }],
  localReviews: [
    { text: 'Montreuil Bas-Montreuil gentrifié, escalier suspendu dans notre loft. Magnifique.', author: 'Famille C.', context: 'Bas-Montreuil', rating: 5, date: 'Juin 2024' },
    { text: 'Hélicoïdal Ø 1,50 m + chêne dans rénovation pavillon Croix-de-Chavaux. Pose 2 jours.', author: 'Hugo M.', context: 'Croix-de-Chavaux', rating: 5, date: 'Mars 2024' },
    { text: 'Quart-tournant marches tôle pliée, look industriel. Soudures TIG visibles.', author: 'Camille D.', context: 'Mairie Montreuil', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Escaliers communes voisines 93.', rows: [
    { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '5 500-9 000 €', durationAvg: '8-12 sem.', note: 'Lofts gentrifiés canal' },
    { communeSlug: 'bagnolet', communeName: 'Bagnolet', priceAvg: '5 200-8 500 €', durationAvg: '8-12 sem.', note: 'Petites copros' },
    { communeSlug: 'romainville', communeName: 'Romainville', priceAvg: '5 200-8 500 €', durationAvg: '8-12 sem.', note: 'Tissu mixte' },
  ] },
  localStats: [{ label: 'Escaliers Montreuil depuis 2020', value: '~8' }, { label: 'Note moyenne Montreuil', value: '4,9 / 5' }, { label: 'Part lofts gentrifiés', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible jeunes acquéreurs Bas-Montreuil + créatifs.' },
}
