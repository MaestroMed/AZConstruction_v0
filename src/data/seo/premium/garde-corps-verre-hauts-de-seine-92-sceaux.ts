import type { PremiumCase } from './types'

export const gardeCorpsVerreHautsDeSeine92Sceaux: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'sceaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Sceaux 92', caption: 'Verre + acier RAL 7016 — pavillon bourgeois Sceaux' },
  heroQuote: { text: 'Sceaux pavillon bourgeois Parc, verre + acier RAL 7016 anthracite. Cohérence jardins.', author: 'Famille R.', context: 'Sceaux Parc' },
  cityGuide: { intro: `Sceaux (20 000 habitants, 92 sud) ville résidentielle bourgeoise avec Parc de Sceaux (Le Nôtre) + Domaine de Sceaux. Pavillons XIXe-XXe + apparts bourgeois centre. Clientèle CSP++ stable.`,
    sections: [
      { heading: 'Sceaux — bourgeoise Parc Le Nôtre', body: `80% pavillons individuels (Parc + Châtaigneraie), 20% apparts centre. Verre + acier RAL 7016 anthracite dominant (cohérence jardins paysagers).` },
      { heading: 'Tarifs', body: `Verre + acier RAL 7016 : 450-620 €/ml. Verre + laiton patiné : 580-780 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + acier RAL 7016 14 ml — pavillon bourgeois Sceaux', location: 'Rue Houdan, Sceaux', date: 'Juin 2024', description: `Pavillon bourgeois 1925 rénové. Verre 8+8 + cadre acier RAL 7016 anthracite satiné. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 200 €', duration: '7 sem.', surface: '14 ml' }, quote: { text: 'Sceaux pavillon bourgeois Parc, verre + acier RAL 7016 anthracite. Cohérence jardins.', author: 'Famille R.', context: 'Sceaux Parc' } }],
  localReviews: [
    { text: 'Sceaux pavillon bourgeois Parc, verre + acier RAL 7016 anthracite. Cohérence jardins.', author: 'Famille R.', context: 'Sceaux Parc', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + main courante laiton patiné terrasse. Esthétique XIXe préservée.', author: 'Famille V.', context: 'Sceaux Châtaigneraie', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L systématique + Verre 8+8. Durabilité 25+ ans garantie.', author: 'Hugo T.', context: 'Sceaux centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 92 sud CSP++.', rows: [
    { communeSlug: 'bourg-la-reine', communeName: 'Bourg-la-Reine', priceAvg: '420-580 €/ml', durationAvg: '6-8 sem.', note: 'Limitrophe Sceaux' },
    { communeSlug: 'antony', communeName: 'Antony', priceAvg: '400-560 €/ml', durationAvg: '6-8 sem.', note: 'Pavillons CSP+' },
    { communeSlug: 'chatenay-malabry', communeName: 'Châtenay-Malabry', priceAvg: '380-540 €/ml', durationAvg: '6-8 sem.', note: 'Arboretum résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps verre Sceaux depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Sceaux bourgeoise Parc Le Nôtre.' },
}
