import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92Vaucresson: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'vaucresson',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Vaucresson 92', caption: 'Verrière 8 carreaux — pavillon Vaucresson' },
  heroQuote: { text: 'Vaucresson pavillon, verrière 8 carreaux acier soudé MIG. Conseil sur place, finition au top.', author: 'Famille K.', context: 'Vaucresson centre' },
  cityGuide: { intro: `Vaucresson (8 500 habitants, 92 ouest) ville résidentielle CSP++ haut standing avec Parc de Béarn. Pavillons individuels quasi-exclusifs, clientèle stable établie.`,
    sections: [
      { heading: 'Vaucresson — CSP++ pavillons exclusifs', body: `95% pavillons individuels, 5% copros rares. Verrière 6-8 carreaux profil 40 mm noir mat satiné dominant. Rénovations bourgeoises.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 500-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Vaucresson', location: 'Centre Vaucresson', date: 'Juin 2024', description: `Pavillon bourgeois 1955 rénové. Verrière 4,5 m × 2,80 m + porte battante centrale. Profils 40 mm noir mat. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 200 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Vaucresson pavillon, verrière 8 carreaux acier soudé MIG. Conseil sur place, finition au top.', author: 'Famille K.', context: 'Vaucresson centre' } }],
  localReviews: [
    { text: 'Vaucresson pavillon, verrière 8 carreaux acier soudé MIG. Conseil sur place, finition au top.', author: 'Famille K.', context: 'Vaucresson centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 5 m loft Vaucresson. Soudures MIG meulées invisibles.', author: 'Famille L.', context: 'Vaucresson Parc de Béarn', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée sur demande. Esthétique classique raffinée cohérente CSP++.', author: 'Hugo T.', context: 'Vaucresson résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 ouest.', rows: [
    { communeSlug: 'marnes-la-coquette', communeName: 'Marnes-la-Coquette', priceAvg: '1 500-2 200 €/m²', durationAvg: '6-8 sem.', note: 'Ultra-luxe' },
    { communeSlug: 'garches', communeName: 'Garches', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'CSP++ bourgeois' },
    { communeSlug: 'ville-d-avray', communeName: 'Ville-d\'Avray', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bois-de-Fausses-Reposes' },
  ] },
  localStats: [{ label: 'Verrières Vaucresson depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons', value: '95 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Vaucresson CSP++ pavillons exclusifs haut standing.' },
}
