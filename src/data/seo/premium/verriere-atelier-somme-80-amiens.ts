import type { PremiumCase } from './types'

export const verriereAtelierSomme80Amiens: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'somme-80',
  communeSlug: 'amiens',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Amiens 80', caption: 'Verrière 8 carreaux noir mat — pavillon Amiens centre' },
  heroQuote: { text: 'Amiens centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Amiens centre' },
  cityGuide: { intro: `Amiens (135 000 habitants, 80) préfecture Somme + Hauts-de-France, ville historique cathédrale UNESCO. Pavillons fin XIXe + maisons centre dominent. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Amiens — préfecture Hauts-de-France', body: `60% pavillons individuels (dont nombreux fin XIXe), 30% maisons centre, 10% copros récentes. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Process Amiens', body: `Métré 45 min sur place, devis pile, fabrication atelier 3-4 sem, pose 1-2 jours par 2 compagnons depuis Bruyères-sur-Oise (1h45).` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante 6-8 m² : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Amiens 1908', location: 'Centre Amiens', date: 'Juin 2024', description: `Pavillon bourgeois 1908 rénové, séparation cuisine/séjour. Verrière 4 m × 2,80 m, profils 40 mm noir mat RAL 9005. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '7 sem.', surface: '11,2 m²' }, quote: { text: 'Amiens centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Amiens centre' } }],
  localReviews: [
    { text: 'Amiens centre, verrière atelier acier soudé. Équipe AZ Bruyères-sur-Oise, conseil sur place.', author: 'Famille R.', context: 'Amiens centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur loft Amiens. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Amiens nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Amiens sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières atelier communes voisines 80.', rows: [
    { communeSlug: 'abbeville', communeName: 'Abbeville', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'albert', communeName: 'Albert', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'peronne', communeName: 'Péronne', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons centre historique' },
  ] },
  localStats: [{ label: 'Verrières Amiens depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Distance atelier AZ', value: '130 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Amiens préfecture Hauts-de-France, pavillons bourgeois.' },
}
