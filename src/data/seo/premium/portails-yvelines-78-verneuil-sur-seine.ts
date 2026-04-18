import type { PremiumCase } from './types'

export const portailsYvelines78VerneuilSurSeine: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'yvelines-78',
  communeSlug: 'verneuil-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Verneuil-sur-Seine 78', caption: 'Portail coulissant 4 m RAL 7016 — pavillon Verneuil' },
  heroQuote: { text: 'Verneuil-sur-Seine pavillon bourgeois bord Seine, portail coulissant Came BK. Pose propre.', author: 'Famille V.', context: 'Verneuil centre' },
  cityGuide: { intro: `Verneuil-sur-Seine (16 000 habitants, 78 nord-ouest) ville résidentielle bourgeoise bord Seine — pavillons XIXe-XXe + copros + golf. Clientèle CSP++ familiale.`,
    sections: [
      { heading: 'Verneuil — bord Seine pavillonnaire bourgeois', body: `85% pavillons individuels bourgeois, 10% copros, 5% golf/commerces. Portail coulissant 4 m + battant 3,5 m Came dominants.` },
      { heading: 'Tarifs', body: `Battant 3,5 m motorisé : 3 400-4 800 €. Coulissant 4 m : 4 400-6 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail coulissant 4 m — pavillon Verneuil-sur-Seine bord Seine', location: 'Bord Seine, Verneuil', date: 'Juin 2024', description: `Pavillon bourgeois 1910 rénové bord Seine. Portail coulissant 4 m RAL 7016 + Came BK-2200 usage intensif. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 700 €', duration: '5 sem.', surface: '4 m' }, quote: { text: 'Verneuil-sur-Seine pavillon bourgeois bord Seine, portail coulissant Came BK. Pose propre.', author: 'Famille V.', context: 'Verneuil centre' } }],
  localReviews: [
    { text: 'Verneuil-sur-Seine pavillon bourgeois bord Seine, portail coulissant Came BK. Pose propre.', author: 'Famille V.', context: 'Verneuil centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant 3,5 m + Came BX silence 38 dB.', author: 'Famille L.', context: 'Verneuil résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Télécommandes 4 badges. Karim sérieux.', author: 'Famille M.', context: 'Verneuil golf', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 78 nord-ouest.', rows: [
    { communeSlug: 'vernouillet', communeName: 'Vernouillet 78', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine pavillons' },
    { communeSlug: 'triel-sur-seine', communeName: 'Triel-sur-Seine', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Bord Seine' },
    { communeSlug: 'chapet', communeName: 'Chapet', priceAvg: '3 300-4 700 €', durationAvg: '4-6 sem.', note: 'Pavillons' },
  ] },
  localStats: [{ label: 'Portails Verneuil depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part coulissants', value: '55 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Verneuil-sur-Seine bord Seine pavillonnaire bourgeois CSP++.' },
}
