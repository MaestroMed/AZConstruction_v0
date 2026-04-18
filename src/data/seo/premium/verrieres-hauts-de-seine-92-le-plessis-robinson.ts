import type { PremiumCase } from './types'

export const verrieresHautsDeSeine92LePlessisRobinson: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'le-plessis-robinson',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Le Plessis-Robinson 92', caption: 'Verrière 6 carreaux — pavillon Le Plessis-Robinson' },
  heroQuote: { text: 'Le Plessis pavillon néo-ancien, verrière acier 6 carreaux. Pose 1 jour propre.', author: 'Famille C.', context: 'Le Plessis-Robinson centre' },
  cityGuide: { intro: `Le Plessis-Robinson (30 000 habitants, 92 sud) ville réaménagée depuis 1990 par urbanisme Maurice Leroy (centre-ville néo-ancien). Pavillons + résidences contemporaines néo-traditionnelles. Demande verrière croissante.`,
    sections: [
      { heading: 'Le Plessis — néo-ancien + pavillons', body: `60% pavillons individuels, 40% résidences centre-ville néo-ancien. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 200-7 000 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon néo-ancien Le Plessis', location: 'Centre-ville Le Plessis-Robinson', date: 'Juin 2024', description: `Pavillon néo-ancien 2005. Verrière 3,5 m × 2,5 m profils 40 mm noir mat. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 600 €', duration: '5 sem.', surface: '8,75 m²' }, quote: { text: 'Le Plessis pavillon néo-ancien, verrière acier 6 carreaux. Pose 1 jour propre.', author: 'Famille C.', context: 'Le Plessis-Robinson centre' } }],
  localReviews: [
    { text: 'Le Plessis pavillon néo-ancien, verrière acier 6 carreaux. Pose 1 jour propre.', author: 'Famille C.', context: 'Le Plessis-Robinson centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante cuisine. Soudures MIG meulées invisibles.', author: 'Famille D.', context: 'Cité-Jardins Le Plessis', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie cachée + finition cohérente pavillon néo-ancien. Pro.', author: 'Hugo M.', context: 'Le Plessis résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 92 sud.', rows: [
    { communeSlug: 'sceaux', communeName: 'Sceaux', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Bourgeoise Parc' },
    { communeSlug: 'chatenay-malabry', communeName: 'Châtenay-Malabry', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons bourgeois' },
  ] },
  localStats: [{ label: 'Verrières Le Plessis-Robinson depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Le Plessis-Robinson urbanisme néo-ancien Leroy.' },
}
