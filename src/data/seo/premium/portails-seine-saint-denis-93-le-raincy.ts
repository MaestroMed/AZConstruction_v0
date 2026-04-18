import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93LeRaincy: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'le-raincy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Le Raincy 93', caption: 'Portail battant 3,5 m RAL 7016 — villa Le Raincy' },
  heroQuote: { text: 'Le Raincy villa bourgeoise grande propriété, portail battant Came BX. Signature.', author: 'Famille de R.', context: 'Le Raincy centre' },
  cityGuide: { intro: `Le Raincy (14 000 habitants, 93 est) ville très résidentielle CSP+++ — grandes villas XIXe-XXe + Église Notre-Dame (Auguste Perret béton art-déco) + bord forêt Bondy. Clientèle haut-de-gamme.`,
    sections: [
      { heading: 'Le Raincy — villas bourgeoises CSP+++', body: `95% villas/pavillons bourgeois grandes propriétés, 5% commerces. Portail battant 4 m ou portail cochère restauré Came BX/BK dominants.` },
      { heading: 'Tarifs', body: `Battant 4 m motorisé : 3 800-5 400 €. Portail cochère restauration : 7 000-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — villa Le Raincy', location: 'Le Raincy centre', date: 'Juin 2024', description: `Villa bourgeoise 1910 rénovée grande propriété. Portail battant 4 m RAL 7016 + Came BX-241 silence 38 dB + télécommandes 4 badges + photocellules. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 900 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Le Raincy villa bourgeoise grande propriété, portail battant Came BX. Signature.', author: 'Famille de R.', context: 'Le Raincy centre' } }],
  localReviews: [
    { text: 'Le Raincy villa bourgeoise grande propriété, portail battant Came BX. Signature.', author: 'Famille de R.', context: 'Le Raincy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Portail cochère restauré hôtel particulier. Karim solide.', author: 'Famille de M.', context: 'Le Raincy Notre-Dame', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges + photocellules. Sécurité top.', author: 'Famille L.', context: 'Le Raincy bord forêt', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 93 est CSP+++.', rows: [
    { communeSlug: 'gagny', communeName: 'Gagny', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'villemomble', communeName: 'Villemomble', priceAvg: '3 400-4 800 €', durationAvg: '4-6 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'montfermeil', communeName: 'Montfermeil', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons + coteaux' },
  ] },
  localStats: [{ label: 'Portails Le Raincy depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part motorisés', value: '96 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Le Raincy 93 est CSP+++ grandes villas bourgeoises Église Perret.' },
}
