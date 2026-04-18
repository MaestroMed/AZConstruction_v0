import type { PremiumCase } from './types'

export const verrieresSomme80Abbeville: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'somme-80',
  communeSlug: 'abbeville',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Abbeville 80', caption: 'Verrière 6 carreaux ABF — maison Abbeville' },
  heroQuote: { text: 'Abbeville maison historique centre, verrière 6 carreaux ABF validé.', author: 'Famille A.', context: 'Abbeville centre ABF' },
  cityGuide: { intro: `Abbeville (23 000 habitants, 80 ouest) sous-préfecture Somme — ville Picardie historique Collégiale Saint-Vulfran + bord Somme + pavillons + copros. Zone ABF centre.`,
    sections: [
      { heading: 'Abbeville — Collégiale Saint-Vulfran ABF', body: `25% zone ABF centre historique (Collégiale, Beffroi), 60% pavillons, 15% copros. Verrière 6-8 carreaux profil noir mat ABF validé centre.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 4 600-6 300 €. ABF centre : 5 200-7 100 € (dossier inclus).` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux ABF — maison Abbeville centre', location: 'Abbeville centre ABF', date: 'Juillet 2024', description: `Maison XIXe rénovée zone ABF Collégiale. Verrière 3,5 m × 2,6 m profils 40 mm noir mat + dossier ABF 5 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 500 €', duration: '10 sem. (ABF)', surface: '9,1 m²' }, quote: { text: 'Abbeville maison historique centre, verrière 6 carreaux ABF validé.', author: 'Famille A.', context: 'Abbeville centre ABF' } }],
  localReviews: [
    { text: 'Abbeville maison historique centre, verrière 6 carreaux ABF validé.', author: 'Famille A.', context: 'Abbeville centre ABF', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière + porte battante pavillon extérieur. Soudures MIG invisibles.', author: 'Famille L.', context: 'Abbeville résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Collégiale géré par Sophie. 100 % acceptation.', author: 'Famille R.', context: 'Abbeville Beffroi', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 80 ouest.', rows: [
    { communeSlug: 'saint-valery-sur-somme', communeName: 'Saint-Valery-sur-Somme', priceAvg: '950-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Baie de Somme' },
    { communeSlug: 'rue', communeName: 'Rue', priceAvg: '950-1 400 €/m²', durationAvg: '5-7 sem.', note: 'Chapelle ABF' },
    { communeSlug: 'amiens', communeName: 'Amiens', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture 80 UNESCO' },
  ] },
  localStats: [{ label: 'Verrières Abbeville depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '25 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Abbeville sous-préfecture 80 Collégiale Saint-Vulfran ABF historique.' },
}
