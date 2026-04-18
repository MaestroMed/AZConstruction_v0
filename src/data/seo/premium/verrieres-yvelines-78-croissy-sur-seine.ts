import type { PremiumCase } from './types'

export const verrieresYvelines78CroissySurSeine: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'croissy-sur-seine',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Croissy-sur-Seine 78', caption: 'Verrière 8 carreaux — pavillon Croissy' },
  heroQuote: { text: 'Croissy-sur-Seine pavillon bourgeois bord Seine, verrière 8 carreaux MIG. Cohérence impressionniste.', author: 'Famille C.', context: 'Croissy centre' },
  cityGuide: { intro: `Croissy-sur-Seine (10 000 habitants, 78) ville résidentielle bourgeoise CSP++ bord Seine — héritage impressionniste + pavillons XIXe-XXe + Grenouillère (tableau Monet). Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Croissy — bord Seine impressionniste', body: `90% pavillons individuels bourgeois bord Seine, 10% copros centre. Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 300-7 200 €. Avec porte battante : 8 400-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Croissy bord Seine', location: 'Bord Seine, Croissy', date: 'Juin 2024', description: `Pavillon bourgeois 1895 rénové bord Seine (proche Grenouillère). Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 600 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Croissy-sur-Seine pavillon bourgeois bord Seine, verrière 8 carreaux MIG. Cohérence impressionniste.', author: 'Famille C.', context: 'Croissy centre' } }],
  localReviews: [
    { text: 'Croissy-sur-Seine pavillon bourgeois bord Seine, verrière 8 carreaux MIG. Cohérence impressionniste.', author: 'Famille C.', context: 'Croissy centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² rénovation. Soudures TIG invisibles.', author: 'Famille L.', context: 'Croissy résidentiel', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier vrai métier. Marc compagnon sérieux.', author: 'Famille M.', context: 'Croissy Grenouillère', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78 bord Seine.', rows: [
    { communeSlug: 'le-vesinet', communeName: 'Le Vésinet', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Parc XIXe bourgeois' },
    { communeSlug: 'chatou', communeName: 'Chatou', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine impressionniste' },
    { communeSlug: 'bougival', communeName: 'Bougival', priceAvg: '1 400-2 000 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine bourgeois' },
  ] },
  localStats: [{ label: 'Verrières Croissy depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bord Seine', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Croissy-sur-Seine bord Seine impressionniste Grenouillère Monet CSP++.' },
}
