import type { PremiumCase } from './types'

export const verrieresAisne02Soissons: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'aisne-02',
  communeSlug: 'soissons',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Soissons 02', caption: 'Verrière 6 carreaux noir mat — pavillon Soissons' },
  heroQuote: { text: 'Soissons pavillon, verrière acier soudé. Équipe AZ Bruyères-sur-Oise, finition irréprochable.', author: 'Famille R.', context: 'Soissons centre' },
  cityGuide: { intro: `Soissons (28 000 habitants, 02) sous-préfecture Aisne, ville historique (cathédrale, abbaye Saint-Jean-des-Vignes). Pavillons + maisons centre dominent. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Soissons — historique picarde', body: `70% pavillons individuels, 30% maisons centre + petites copros. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Soissons', location: 'Centre Soissons', date: 'Juin 2024', description: `Pavillon rénové, séparation cuisine/séjour. Verrière 3,2 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '6 sem.', surface: '8 m²' }, quote: { text: 'Soissons pavillon, verrière acier soudé. Équipe AZ Bruyères-sur-Oise, finition irréprochable.', author: 'Famille R.', context: 'Soissons centre' } }],
  localReviews: [
    { text: 'Soissons pavillon, verrière acier soudé. Équipe AZ Bruyères-sur-Oise, finition irréprochable.', author: 'Famille R.', context: 'Soissons centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG meulées invisibles, top métier.', author: 'Hugo M.', context: 'Soissons nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Soissons sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 02.', rows: [
    { communeSlug: 'saint-quentin', communeName: 'Saint-Quentin', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Art déco picard' },
    { communeSlug: 'laon', communeName: 'Laon', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture médiévale' },
    { communeSlug: 'chateau-thierry', communeName: 'Château-Thierry', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Bord Marne historique' },
  ] },
  localStats: [{ label: 'Verrières Soissons depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Distance atelier AZ', value: '90 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Soissons historique, demande pavillons.' },
}
