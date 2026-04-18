import type { PremiumCase } from './types'

export const verriereAtelierParis75Paris16e: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'paris-75',
  communeSlug: 'paris-16e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 16e Auteuil', caption: 'Verrière 8 carreaux profil 40 mm noir mat satiné — Auteuil' },
  heroQuote: { text: 'Architecture haussmannienne du 16e respectée. Visserie noire apparente, finition magazine.', author: 'Architecte d\'intérieur', context: 'Avenue Mozart, Auteuil, 16e' },
  cityGuide: {
    intro: `Le 16e (Auteuil, Passy, Trocadéro, Muette) est l'un des plus exigeants arrondissements pour la verrière atelier. Apparts haussmanniens 1880-1910 grands volumes (90-200 m²), plafonds 3+ m, parquets d'origine, clientèle CSP++ pilotée souvent par architectes d'intérieur.`,
    sections: [
      { heading: 'Le 16e — verrière premium', body: `Configurations dominantes : verrière 6-8 carreaux profil 40 mm noir mat satiné (60%), verrière toute hauteur sol-plafond 4 grands carreaux (25%), patine bronze sur-mesure (15%, demande architecte).` },
      { heading: 'Process exigeant', body: `Soudures MIG meulées-finies sur demande architecte. Visserie apparente noire ou bronze. Parquets d'origine systématiquement protégés. Acheminement par cage d'escalier avec modules pré-coupés.` },
      { heading: 'Tarifs Paris 16e', body: `Verrière fixe 4 m² : 6 200-8 200 €. Avec porte battante 6-8 m² : 9 800-14 000 €. Toute hauteur 10-14 m² : 16 000-24 000 €. Délai 6-8 semaines.` },
    ],
  },
  caseStudies: [{
    title: 'Verrière 8 carreaux + porte battante — appart Auteuil 130 m²',
    location: 'Avenue Mozart, Auteuil, 16e',
    date: 'Juillet 2024',
    description: `Verrière 5 m × 2,90 m, 8 carreaux 30×80, profils 40 mm noir mat satiné, visserie apparente noire. Pose en 2 jours dans rénovation globale architecte d'intérieur. Parquet point de Hongrie 1888 intact.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '11 800 €', duration: '7 sem.', surface: '14,5 m²' },
    quote: { text: 'Architecture haussmannienne du 16e respectée. Visserie noire apparente, finition magazine.', author: 'Architecte d\'intérieur', context: 'Avenue Mozart' },
  }],
  localReviews: [
    { text: 'Architecture haussmannienne du 16e respectée. Visserie noire apparente, finition magazine.', author: 'Architecte d\'intérieur', context: 'Auteuil, 16e', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur 12 m² appart Trocadéro. Soudures TIG meulées invisibles. Excellence.', author: 'Famille V.', context: 'Trocadéro, 16e', rating: 5, date: 'Mars 2024' },
    { text: 'Verrière patine bronze sur-mesure pour matcher ferronneries 1885 Passy. Conforme à 100%.', author: 'Bénédicte M.', context: 'Passy, 16e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Verrières atelier arrondissements parisiens premium.',
    rows: [
      { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '1 400-2 200 €/m²', durationAvg: '6-8 sem.', note: 'Faubourg Saint-Germain' },
      { communeSlug: 'paris-8e', communeName: 'Paris 8e', priceAvg: '1 500-2 400 €/m²', durationAvg: '6-9 sem.', note: 'Hôtels particuliers' },
      { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Ternes + Batignolles' },
    ],
  },
  localStats: [
    { label: 'Verrières Paris 16e depuis 2020', value: '~12' },
    { label: 'Note moyenne 16e', value: '5,0 / 5' },
    { label: 'Part visserie apparente', value: '60 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP++ Auteuil/Passy/Trocadéro. Architectes d\'intérieur fréquents.' },
}
