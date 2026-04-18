import type { PremiumCase } from './types'

export const verriereAtelierOise60Compiegne: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'oise-60',
  communeSlug: 'compiegne',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Compiègne 60', caption: 'Verrière 6 carreaux noir mat — pavillon Compiègne' },
  heroQuote: { text: 'Compiègne pavillon historique, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille R.', context: 'Compiègne centre' },
  cityGuide: { intro: `Compiègne (40 000 habitants, 60) sous-préfecture Oise, ville historique impériale (palais Napoléon III). Pavillons fin XIXe + début XXe dominants. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Compiègne — historique impériale', body: `70% pavillons individuels (dont nombreux fin XIXe), 30% copros centre + petites copros. Verrière 6-8 carreaux profil 40 mm noir mat satiné dominante.` },
      { heading: 'Process Compiègne', body: `Métré 45 min sur place, devis pile, fabrication atelier 3-4 sem, pose 1-2 jours par 2 compagnons depuis Bruyères-sur-Oise (45 min).` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante 6-8 m² : 8 200-11 500 €. Toute hauteur 10-14 m² : 14 000-22 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Compiègne 1908', location: 'Centre Compiègne', date: 'Juin 2024', description: `Pavillon bourgeois 1908 rénové, séparation cuisine/séjour. Verrière 4 m × 2,80 m, profils acier 40 mm noir mat RAL 9005, soudures MIG meulées. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '6 sem.', surface: '11,2 m²' }, quote: { text: 'Compiègne pavillon historique, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille R.', context: 'Compiègne centre' } }],
  localReviews: [
    { text: 'Compiègne pavillon historique, verrière acier soudé. Conseil sur place, finition irréprochable.', author: 'Famille R.', context: 'Compiègne centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur loft Compiègne. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Compiègne nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Compiègne sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières atelier communes voisines 60.', rows: [
    { communeSlug: 'noyon', communeName: 'Noyon', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'beauvais', communeName: 'Beauvais', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture Oise' },
  ] },
  localStats: [{ label: 'Verrières Compiègne depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Distance atelier AZ', value: '40 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Compiègne historique impériale, pavillons bourgeois.' },
}
