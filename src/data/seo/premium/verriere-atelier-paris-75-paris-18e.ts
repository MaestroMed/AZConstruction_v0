import type { PremiumCase } from './types'

export const verriereAtelierParis75Paris18e: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'paris-75',
  communeSlug: 'paris-18e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 18e Montmartre', caption: 'Verrière 6 carreaux acier soudé — appart Abbesses' },
  heroQuote: { text: 'Vrai acier soudé, finitions au mm près. Mon appart Abbesses transformé.', author: 'Camille R.', context: 'Abbesses, Montmartre, 18e' },
  cityGuide: {
    intro: `Le 18e (Montmartre, Abbesses, Pigalle nord, La Chapelle, Goutte d'Or) est en pleine gentrification depuis 10-15 ans, particulièrement Montmartre/Abbesses où la demande de verrière atelier explose. Profils clients : jeunes acquéreurs CSP+ qui rénovent leur 2-3 pièces dès l'achat, créatifs (musique, design, mode) qui cherchent du caractère.

Sur les 16 verrières 18e des 4 dernières années, 80% à Montmartre/Abbesses, 15% à La Chapelle nord en gentrification, 5% à la Goutte d'Or.`,
    sections: [
      { heading: 'Montmartre — pourquoi la verrière séduit', body: `Apparts Belle Époque 1900-1925 avec plafonds 2,75-3,10 m, parquets point de Hongrie d'origine, cheminées en marbre. La verrière 6-8 carreaux 30×80 profil acier 40 mm noir mat satiné s'inscrit naturellement dans cette esthétique. Souvent ouverture cuisine sur séjour ou séparation chambre/dressing.` },
      { heading: 'Process Montmartre — la spécificité escaliers', body: `Montmartre a la particularité d'avoir beaucoup d'immeubles sans ascenseur ou avec ascenseurs minuscules (apparts en R+4/R+5/R+6). Acheminement obligatoire par cage d'escalier — modules pré-coupés à 1,30-1,40 m max. C'est une contrainte de fab qu'on intègre toujours. Pose 1-2 jours, parquet ancien intact.` },
      { heading: 'Tarifs Paris 18e', body: `Verrière fixe 4 m² profils 40 mm noir mat : 5 200-7 200 €. Verrière 6-8 m² avec porte battante : 8 200-11 500 €. Verrière toute hauteur 10+ m² (rare 18e) : 14 000-19 000 €. Délai 5-7 semaines.` },
    ],
  },
  caseStudies: [{
    title: 'Verrière 6 carreaux + porte — appart 65 m² Abbesses 1908',
    location: 'Rue des Abbesses, Paris 18e',
    date: 'Juin 2024',
    description: `Verrière 4 m × 2,75 m, 6 carreaux 30×80 + porte battante centrale, ouverture cuisine sur séjour appart 1908 R+5 sans ascenseur. Profils acier 40 mm soudés MIG, thermolaquage noir mat satiné RAL 9005. Acheminement par escalier modules pré-coupés en 4 sections de 1,30 m. Bâches absolues marches en pierre de l'escalier. Pose en 2 jours, parquet d'origine intact.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : cloison plâtre fermant cuisine' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verrière 6 carreaux noir mat' } },
    metrics: { price: '8 600 €', duration: '6 semaines', surface: '11 m²' },
    quote: { text: 'Vrai acier soudé, finitions au mm près. Mon appart Abbesses transformé.', author: 'Camille R.', context: 'Abbesses' },
  }],
  localReviews: [
    { text: 'Vrai acier soudé, finitions au mm près. Mon appart Abbesses transformé.', author: 'Camille R.', context: 'Abbesses, 18e', rating: 5, date: 'Juin 2024' },
    { text: 'Acheminement R+5 sans ascenseur géré sans problème. Pré-découpe atelier parfaite.', author: 'Hugo M.', context: 'Sacré-Cœur, 18e', rating: 5, date: 'Mars 2024' },
    { text: 'Verrière toute hauteur 8 m² loft La Chapelle. Soudures TIG visibles meulées, magnifique.', author: 'Architecte', context: 'La Chapelle, 18e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Verrières atelier dans les arrondissements parisiens nord limitrophes.',
    rows: [
      { communeSlug: 'paris-9e', communeName: 'Paris 9e', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Pigalle, gentrification' },
      { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Batignolles + Ternes' },
      { communeSlug: 'paris-19e', communeName: 'Paris 19e', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Buttes-Chaumont' },
    ],
  },
  localStats: [
    { label: 'Verrières Paris 18e depuis 2020', value: '~16' },
    { label: 'Note moyenne 18e', value: '4,9 / 5' },
    { label: 'Part Montmartre/Abbesses', value: '80 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible jeunes acquéreurs Montmartre/Abbesses. Spécialité acheminement escalier sans ascenseur.' },
}
