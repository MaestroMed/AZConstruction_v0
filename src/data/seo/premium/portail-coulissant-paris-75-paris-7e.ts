import type { PremiumCase } from './types'

export const portailCoulissantParis75Paris7e: PremiumCase = {
  productSlug: 'portail-coulissant',
  deptSlug: 'paris-75',
  communeSlug: 'paris-7e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant motorisé — Paris 7e', caption: 'Restauration portail coulissant ABF — hôtel particulier rue Saint-Dominique' },
  heroQuote: { text: 'ABF Faubourg Saint-Germain géré du début à la fin. Restauration parfaite de notre portail XIXe motorisé discrètement.', author: 'Famille V.', context: 'Hôtel particulier, 7e' },
  cityGuide: {
    intro: `Le 7e arrondissement (Faubourg Saint-Germain, Invalides, Champ-de-Mars) est l'un des arrondissements les plus prestigieux de Paris pour les hôtels particuliers. Pour les portails coulissants, c'est un terrain hyper-spécifique : restauration patrimoniale + motorisation moderne discrète.`,
    sections: [
      { heading: 'Le 7e — portails coulissants patrimoniaux', body: `90% de nos chantiers portails coulissants 7e sont des restaurations de portails XIXe d'origine, avec ajout d'une motorisation moderne dissimulée dans le mur ou dans un coffret discret. ABF systématique.` },
      { heading: 'Notre méthode', body: `Diagnostic patrimonial avec photos, dossier ABF avec préservation à l'identique, fabrication coulissant patine bronze, motorisation Came/Nice silencieuse intégrée discrètement. Délai 6-12 mois.` },
      { heading: 'Tarifs Paris 7e', body: `Restauration portail coulissant XIXe motorisé : 12 000-25 000 €. Création neuve à l'identique : 18 000-35 000 €.` },
    ],
  },
  caseStudies: [{
    title: 'Restauration coulissant XIXe motorisé Came — hôtel rue Saint-Dominique',
    location: 'Rue Saint-Dominique, Paris 7e',
    date: 'Juin 2024',
    description: `Restauration portail coulissant 5,5 m d'origine 1875, ferronnerie ornementale conservée à 85%. Ajout motorisation Came Bx-243 dissimulée dans coffret discret. ABF + APMH 6 mois. Pose en 3 jours.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '22 800 €', duration: '11 mois total', surface: '5,5 m motorisé' },
    quote: { text: 'ABF Faubourg Saint-Germain géré du début à la fin. Restauration parfaite de notre portail XIXe motorisé discrètement.', author: 'Famille V.', context: 'Hôtel particulier' },
  }],
  localReviews: [
    { text: 'ABF Faubourg Saint-Germain géré du début à la fin. Restauration parfaite de notre portail XIXe motorisé discrètement.', author: 'Famille V.', context: 'Faubourg Saint-Germain', rating: 5, date: 'Juin 2024' },
    { text: 'Création coulissant à l\'identique d\'un disparu, sur la base de plans d\'archives. Travail de précision.', author: 'Architecte du Patrimoine', context: 'Champ-de-Mars', rating: 5, date: 'Mars 2024' },
    { text: 'Motorisation Came intégrée discrètement, fonctionnement silencieux. SAV joignable directement à l\'atelier.', author: 'Bernard L.', context: 'Invalides', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Portails coulissants restauration patrimoniale arrondissements parisiens.',
    rows: [
      { communeSlug: 'paris-8e', communeName: 'Paris 8e', priceAvg: '15 000-30 000 €', durationAvg: '10-15 mois', note: 'Hôtels particuliers, ferronnerie' },
      { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '18 000-35 000 €', durationAvg: '12-18 mois', note: 'Périmètre Louvre ABF lourd' },
      { communeSlug: 'paris-16e', communeName: 'Paris 16e', priceAvg: '10 000-25 000 €', durationAvg: '8-12 mois', note: 'Demande premium variable' },
    ],
  },
  localStats: [
    { label: 'Coulissants Paris 7e depuis 2020', value: '~5' },
    { label: 'Taux acceptation ABF 1ère instance', value: '90 %' },
    { label: 'Note moyenne 7e', value: '5,0 / 5' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Niche patrimoine ferronnerie d\'art motorisée. Ticket très élevé.' },
}
