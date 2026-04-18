import type { PremiumCase } from './types'

export const gardeCorpsVerreHautsDeSeine92IssyLesMoulineaux: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'issy-les-moulineaux',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre — Issy-les-Moulineaux', caption: 'Verre 8+8 toute hauteur — programme neuf Forum d\'Issy' },
  heroQuote: { text: 'Programme neuf Issy, balcons modernes, verre toute hauteur libère vue Seine. Pose en 1 jour.', author: 'Famille R.', context: 'Forum d\'Issy, Issy-les-Moulineaux' },
  cityGuide: {
    intro: `Issy-les-Moulineaux (70 000 habitants, Hauts-de-Seine) est l'un des cœurs tech-business franciliens. Depuis 15 ans, gros boom des programmes neufs résidentiels (Forum d'Issy, Bords de Seine, Charenton-Conflans). Beaucoup de balcons modernes à équiper en verre.`,
    sections: [
      { heading: 'Issy — programmes neufs majoritaires', body: `80% de nos chantiers Issy sont sur des programmes neufs 2010+ avec balcons d'origine en verre clair (vieillissants après 10-15 ans). Demande de remplacement par verre haut de gamme + finitions modernes (fixations invisibles, profil U-channel).` },
      { heading: 'Configurations Issy', body: `Verre toute hauteur fixations invisibles (60%), verre + main courante acier noir mat (30%), verre + cables inox (10%, terrasses).` },
      { heading: 'Tarifs Issy', body: `Verre toute hauteur invisible : 480-650 €/ml. Verre + main courante : 380-520 €/ml. Délai 4-6 sem (peu de contraintes copros récentes).` },
    ],
  },
  caseStudies: [{
    title: 'Verre toute hauteur 12 ml — programme neuf Forum d\'Issy R+8',
    location: 'Forum d\'Issy, Issy-les-Moulineaux',
    date: 'Mai 2024',
    description: `Remplacement verre clair d'origine 2008 (vieilli, micro-fissures) par verre 8+8 sécurité fixations invisibles. Vue Seine + Tour Eiffel. Vote AG simple, pose en 1 jour. 12 ml.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '6 800 €', duration: '5 sem.', surface: '12 ml' },
    quote: { text: 'Programme neuf Issy, balcons modernes, verre toute hauteur libère vue Seine. Pose en 1 jour.', author: 'Famille R.', context: 'Forum d\'Issy' },
  }],
  localReviews: [
    { text: 'Programme neuf Issy, balcons modernes, verre toute hauteur libère vue Seine. Pose en 1 jour.', author: 'Famille R.', context: 'Forum d\'Issy', rating: 5, date: 'Mai 2024' },
    { text: 'Verre + main courante acier sur copro années 90. Pose impeccable, finition au top.', author: 'Conseil syndical', context: 'Bords de Seine', rating: 5, date: 'Mars 2024' },
    { text: 'Garde-corps cables inox terrasse pavillon. Look contemporain, prix correct.', author: 'Vincent P.', context: 'Centre Issy', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps verre Hauts-de-Seine voisins.',
    rows: [
      { communeSlug: 'boulogne-billancourt', communeName: 'Boulogne-Billancourt', priceAvg: '420-580 €/ml', durationAvg: '4-6 sem.', note: 'Apparts modernes + Trapèze' },
      { communeSlug: 'meudon', communeName: 'Meudon', priceAvg: '380-520 €/ml', durationAvg: '5-7 sem.', note: 'Mix pavillons + copros' },
      { communeSlug: 'malakoff', communeName: 'Malakoff', priceAvg: '350-480 €/ml', durationAvg: '5-7 sem.', note: 'Petites copros + pavillons' },
    ],
  },
  localStats: [
    { label: 'Garde-corps verre Issy depuis 2020', value: '~12' },
    { label: 'Note moyenne Issy', value: '4,9 / 5' },
    { label: 'Part programmes neufs', value: '80 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Spécialisation programmes neufs Forum/Bords de Seine. Demande croissante.' },
}
