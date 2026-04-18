import type { PremiumCase } from './types'

export const verrieresYvelines78Chatou: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'yvelines-78',
  communeSlug: 'chatou',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Chatou 78', caption: 'Verrière 8 carreaux noir mat — pavillon Chatou bord Seine' },
  heroQuote: { text: 'Chatou bord Seine, verrière atelier dans pavillon impressionniste. Excellence finition.', author: 'Famille C.', context: 'Île des Impressionnistes, Chatou' },
  cityGuide: { intro: `Chatou (30 000 habitants, 78) ville résidentielle bord Seine, célèbre pour son Île des Impressionnistes. Clientèle CSP++ apparts récents + pavillons bord Seine.`,
    sections: [
      { heading: 'Chatou — bord Seine impressionniste', body: `60% pavillons bord Seine, 40% copros récentes. Verrière 6-8 carreaux profil 40 mm noir mat dominante. Demande croissante "verrière toute hauteur" sur lofts bord Seine.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 200-11 500 €. Toute hauteur 10-14 m² : 14 000-22 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Chatou bord Seine', location: 'Île des Impressionnistes, Chatou', date: 'Juin 2024', description: `Pavillon bord Seine rénové, séparation cuisine/séjour. Verrière 4 m × 2,80 m, 8 carreaux profils acier 40 mm noir mat RAL 9005. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 800 €', duration: '6 sem.', surface: '11,2 m²' }, quote: { text: 'Chatou bord Seine, verrière atelier dans pavillon impressionniste. Excellence finition.', author: 'Famille C.', context: 'Île des Impressionnistes' } }],
  localReviews: [
    { text: 'Chatou bord Seine, verrière atelier dans pavillon impressionniste. Excellence finition.', author: 'Famille C.', context: 'Île des Impressionnistes', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 12 m² loft Chatou. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Chatou centre', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Chatou résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 78.', rows: [
    { communeSlug: 'croissy-sur-seine', communeName: 'Croissy-sur-Seine', priceAvg: '1 300-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine bourgeois' },
    { communeSlug: 'le-vesinet', communeName: 'Le Vésinet', priceAvg: '1 400-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Ville-jardin CSP++' },
    { communeSlug: 'le-pecq', communeName: 'Le Pecq', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Bord Seine pavillons' },
  ] },
  localStats: [{ label: 'Verrières Chatou depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part bord Seine', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible CSP++ Chatou bord Seine.' },
}
