import type { PremiumCase } from './types'

export const portailsSeineEtMarne77Nemours: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'nemours',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail battant — Nemours 77', caption: 'Portail battant 3,5 m RAL 7016 — pavillon Nemours' },
  heroQuote: { text: 'Nemours pavillon bord Loing Château, portail battant motorisé. Pose propre.', author: 'Famille N.', context: 'Nemours centre' },
  cityGuide: { intro: `Nemours (13 000 habitants, 77 sud) ville historique bord Loing + Château médiéval XIIe + pavillons XIXe-XXe + rochers de Nemours. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Nemours — bord Loing Château médiéval', body: `25% zone ABF Château médiéval, 65% pavillons individuels, 10% copros centre. Portail battant 3,5 m RAL foncé ABF dominant centre + coulissant 4 m extérieur.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 200-4 600 €. ABF centre : 3 700-5 100 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Portail battant motorisé — pavillon Nemours bord Loing', location: 'Bord Loing, Nemours', date: 'Juin 2024', description: `Pavillon 1965 rénové bord Loing. Portail battant 3,5 m RAL 7016 + Came BX-241 silence 38 dB. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '3 700 €', duration: '4 sem.', surface: '3,5 m' }, quote: { text: 'Nemours pavillon bord Loing Château, portail battant motorisé. Pose propre.', author: 'Famille N.', context: 'Nemours centre' } }],
  localReviews: [
    { text: 'Nemours pavillon bord Loing Château, portail battant motorisé. Pose propre.', author: 'Famille N.', context: 'Nemours centre', rating: 5, date: 'Juin 2024' },
    { text: 'Coulissant 4 m + Came BK. Silence 38 dB.', author: 'Famille L.', context: 'Nemours résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château géré par Sophie. 100 % acceptation.', author: 'Famille M.', context: 'Nemours Château', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 77 sud.', rows: [
    { communeSlug: 'montereau-fault-yonne', communeName: 'Montereau-Fault-Yonne', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Confluence Seine-Yonne' },
    { communeSlug: 'fontainebleau', communeName: 'Fontainebleau', priceAvg: '3 800-5 200 €', durationAvg: '14-18 sem. ABF', note: 'Royale ABF UNESCO' },
    { communeSlug: 'saint-pierre-les-nemours', communeName: 'Saint-Pierre-lès-Nemours', priceAvg: '3 200-4 600 €', durationAvg: '4-6 sem.', note: 'Limitrophe Nemours' },
  ] },
  localStats: [{ label: 'Portails Nemours depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Nemours 77 sud bord Loing Château médiéval XIIe + rochers.' },
}
