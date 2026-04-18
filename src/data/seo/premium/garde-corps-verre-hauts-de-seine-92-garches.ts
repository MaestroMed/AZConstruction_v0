import type { PremiumCase } from './types'

export const gardeCorpsVerreHautsDeSeine92Garches: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'garches',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Garches 92', caption: 'Verre + laiton patiné — pavillon bourgeois Garches' },
  heroQuote: { text: 'Garches pavillon bourgeois, verre + main courante laiton patiné. Cohérence XIXe.', author: 'Famille R.', context: 'Garches centre' },
  cityGuide: { intro: `Garches (18 000 habitants, 92 ouest) ville résidentielle bourgeoise haut standing. Pavillons individuels CSP++ + Hôpital Raymond-Poincaré. Clientèle stable 15+ ans.`,
    sections: [
      { heading: 'Garches — CSP++ pavillons bourgeois', body: `90% pavillons individuels haut standing, 10% petites copros. Verre + main courante laiton patiné dominant. Esthétique XIXe préservée.` },
      { heading: 'Tarifs', body: `Verre + acier RAL : 480-650 €/ml. Verre + laiton patiné : 650-900 €/ml.` },
    ] },
  caseStudies: [{ title: 'Verre + main courante laiton patiné 14 ml — pavillon Garches', location: 'Rue du Général-Leclerc, Garches', date: 'Juin 2024', description: `Pavillon bourgeois 1910. Verre 8+8 + main courante laiton massif 50×30 mm patine bronze. Pose 2 jours par 3 compagnons.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 800 €', duration: '10 sem.', surface: '14 ml' }, quote: { text: 'Garches pavillon bourgeois, verre + main courante laiton patiné. Cohérence XIXe.', author: 'Famille R.', context: 'Garches centre' } }],
  localReviews: [
    { text: 'Garches pavillon bourgeois, verre + main courante laiton patiné. Cohérence XIXe.', author: 'Famille R.', context: 'Garches centre', rating: 5, date: 'Juin 2024' },
    { text: 'Patine laiton artisanale 4 jours atelier. Finition bronze chaleureuse.', author: 'Famille V.', context: 'Garches Marnes', rating: 5, date: 'Mars 2024' },
    { text: 'Inox 316L systématique + verre 8+8. Durabilité 25+ ans garantie.', author: 'Vincent M.', context: 'Garches résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 92 ouest CSP++.', rows: [
    { communeSlug: 'saint-cloud', communeName: 'Saint-Cloud', priceAvg: '550-800 €/ml', durationAvg: '8-12 sem.', note: 'Domaine + Coutureau' },
    { communeSlug: 'marnes-la-coquette', communeName: 'Marnes-la-Coquette', priceAvg: '650-950 €/ml', durationAvg: '10-14 sem.', note: 'Ultra-luxe' },
    { communeSlug: 'vaucresson', communeName: 'Vaucresson', priceAvg: '600-850 €/ml', durationAvg: '10-14 sem.', note: 'CSP++ résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps verre Garches depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part laiton patiné', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Garches CSP++ pavillons bourgeois XIXe-XXe.' },
}
