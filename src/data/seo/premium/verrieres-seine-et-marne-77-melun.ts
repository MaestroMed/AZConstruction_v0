import type { PremiumCase } from './types'

export const verrieresSeineEtMarne77Melun: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'melun',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Melun 77', caption: 'Verrière 6 carreaux noir mat — pavillon Melun centre' },
  heroQuote: { text: 'Melun centre, verrière atelier dans pavillon bourgeois. Excellence finition.', author: 'Famille R.', context: 'Melun centre' },
  cityGuide: { intro: `Melun (40 000 habitants, 77) préfecture Seine-et-Marne, ville mixte centre historique + pavillons. Demande verrière atelier croissante.`,
    sections: [
      { heading: 'Melun — préfecture historique', body: `60% pavillons individuels, 30% copros centre, 10% maisons centre historique. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Melun centre', location: 'Centre Melun', date: 'Juin 2024', description: `Pavillon bourgeois rénové, séparation cuisine/séjour. Verrière 3,2 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 800 €', duration: '6 sem.', surface: '8 m²' }, quote: { text: 'Melun centre, verrière atelier dans pavillon bourgeois. Excellence finition.', author: 'Famille R.', context: 'Melun centre' } }],
  localReviews: [
    { text: 'Melun centre, verrière atelier dans pavillon bourgeois. Excellence finition.', author: 'Famille R.', context: 'Melun centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG meulées invisibles, top métier.', author: 'Hugo M.', context: 'Melun nord', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Atelier vrai métier.', author: 'Famille D.', context: 'Melun sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 77.', rows: [
    { communeSlug: 'dammarie-les-lys', communeName: 'Dammarie-lès-Lys', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'le-mee-sur-seine', communeName: 'Le Mée-sur-Seine', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bord Seine' },
    { communeSlug: 'vaux-le-penil', communeName: 'Vaux-le-Pénil', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Melun depuis 2020', value: '~7' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Melun préfecture mix résidentiel.' },
}
