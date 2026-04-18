import type { PremiumCase } from './types'

export const gardeCorpsVerreParis75Paris12e: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'paris-75',
  communeSlug: 'paris-12e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Paris 12e', caption: 'Verre + inox brossé — appart Bercy Paris 12e' },
  heroQuote: { text: 'Paris 12e Bercy Village appart récent, verre + inox brossé terrasse vue Seine.', author: 'Famille L.', context: 'Paris 12e Bercy' },
  cityGuide: { intro: `Paris 12e (140 000 habitants, 75) arrondissement Bercy-Nation + Bois de Vincennes. Mix haussmannien + immeubles récents (Bercy Village, ZAC Paris Rive Gauche). Clientèle CSP+++.`,
    sections: [
      { heading: 'Paris 12e — Bercy mix récent/haussmannien', body: `55% copros haussmanniennes, 35% immeubles récents Bercy/ZAC, 10% pavillons rares (Picpus). Verre + main courante inox brossé 316L (bord Seine) dominant récents.` },
      { heading: 'Tarifs', body: `Verre + acier RAL : 520-720 €/ml. Verre + inox brossé 316L : 680-900 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps verre + inox 316L 10 ml — appart Bercy Paris 12e', location: 'Bercy, Paris 12e', date: 'Juin 2024', description: `Appart récent 2005 Bercy Village terrasse vue Seine. Garde-corps verre feuilleté 8+8 + main courante inox brossé 316L + U-channel encastré. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '8 600 €', duration: '9 sem.', surface: '10 ml' }, quote: { text: 'Paris 12e Bercy Village appart récent, verre + inox brossé terrasse vue Seine.', author: 'Famille L.', context: 'Paris 12e Bercy' } }],
  localReviews: [
    { text: 'Paris 12e Bercy Village appart récent, verre + inox brossé terrasse vue Seine.', author: 'Famille L.', context: 'Paris 12e Bercy', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + acier haussmannien rénové Nation. Discret.', author: 'Famille R.', context: 'Paris 12e Nation', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L anti-corrosion Seine. 20 ans garantie.', author: 'Famille M.', context: 'Paris 12e Rive Gauche', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre arrondissements voisins Paris est.', rows: [
    { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '520-720 €/ml', durationAvg: '8-12 sem.', note: 'Rive Gauche récent' },
    { communeSlug: 'paris-11e', communeName: 'Paris 11e', priceAvg: '520-720 €/ml', durationAvg: '8-12 sem.', note: 'Bastille lofts' },
    { communeSlug: 'paris-20e', communeName: 'Paris 20e', priceAvg: '500-700 €/ml', durationAvg: '8-12 sem.', note: 'Ménilmontant' },
  ] },
  localStats: [{ label: 'Garde-corps verre Paris 12e depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part inox 316L bord Seine', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 12e Bercy-Nation mix haussmannien + récent CSP+++.' },
}
