import type { PremiumCase } from './types'

export const verriereAtelierEssonne91Massy: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'essonne-91',
  communeSlug: 'massy',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Massy 91', caption: 'Verrière 6 carreaux noir mat — appart Massy Atlantis' },
  heroQuote: { text: 'Massy Atlantis appart neuf, verrière atelier acier soudé. Conseil sur place, finition au top.', author: 'Famille R.', context: 'Massy Atlantis' },
  cityGuide: { intro: `Massy (50 000 habitants, 91) ville de la tech parisienne (Atlantis, Vilgénis), forte croissance copros récentes + pavillons. Demande verrière atelier croissante, clientèle jeune cadres tech 30-45 ans.`,
    sections: [
      { heading: 'Massy — tech IDF sud', body: `60% copros récentes (Atlantis, Vilgénis), 40% pavillons. Verrière 6 carreaux profil 40 mm noir mat dominante. Visserie noire apparente très demandée (esthétique authentique).` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux + porte — appart Massy Atlantis 2022', location: 'Massy Atlantis', date: 'Juin 2024', description: `Appart neuf 80 m², ouverture cuisine sur séjour. Verrière 3,5 m × 2,5 m, profils 40 mm noir mat RAL 9005. Pose 1,5 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 200 €', duration: '5 sem.', surface: '8,75 m²' }, quote: { text: 'Massy Atlantis appart neuf, verrière atelier acier soudé. Conseil sur place, finition au top.', author: 'Famille R.', context: 'Massy Atlantis' } }],
  localReviews: [
    { text: 'Massy Atlantis appart neuf, verrière atelier acier soudé. Conseil sur place, finition au top.', author: 'Famille R.', context: 'Massy Atlantis', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante pavillon. Soudures MIG meulées invisibles, top métier.', author: 'Hugo M.', context: 'Massy Vilgénis', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Massy centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières atelier communes voisines 91.', rows: [
    { communeSlug: 'palaiseau', communeName: 'Palaiseau', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'École polytechnique zone' },
    { communeSlug: 'antony', communeName: 'Antony (92)', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + copros' },
    { communeSlug: 'igny', communeName: 'Igny', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Verrières Massy depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part Atlantis', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible jeunes cadres tech Massy Atlantis.' },
}
