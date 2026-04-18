import type { PremiumCase } from './types'

export const verrieresEureEtLoir28Chartres: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'eure-et-loir-28',
  communeSlug: 'chartres',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Chartres 28', caption: 'Verrière 8 carreaux noir mat — pavillon Chartres centre' },
  heroQuote: { text: 'Chartres centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Chartres centre' },
  cityGuide: { intro: `Chartres (40 000 habitants, 28) préfecture Eure-et-Loir, ville historique cathédrale UNESCO. Pavillons fin XIXe + maisons centre dominent. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Chartres — cathédrale UNESCO', body: `60% pavillons individuels (dont nombreux fin XIXe), 25% maisons centre historique (zone ABF cathédrale), 15% copros. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Process ABF cathédrale', body: `Zone ABF cathédrale Notre-Dame → dossier déclaration préalable + ABF (4-6 sem délai). Hors ABF : liberté totale.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €. Toute hauteur : 14 000-22 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Chartres', location: 'Centre Chartres', date: 'Juin 2024', description: `Pavillon bourgeois rénové, séparation cuisine/séjour. Verrière 4 m × 2,80 m, profils 40 mm noir mat RAL 9005. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '7 sem.', surface: '11,2 m²' }, quote: { text: 'Chartres centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Chartres centre' } }],
  localReviews: [
    { text: 'Chartres centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Chartres centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur loft Chartres. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Chartres nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Chartres sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 28.', rows: [
    { communeSlug: 'dreux', communeName: 'Dreux', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'lucé', communeName: 'Lucé', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'mainvilliers', communeName: 'Mainvilliers', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Chartres depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Distance atelier AZ', value: '110 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Chartres préfecture, cathédrale UNESCO.' },
}
