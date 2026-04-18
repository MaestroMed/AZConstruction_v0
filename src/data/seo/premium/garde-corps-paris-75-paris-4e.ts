import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris4e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-4e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon Île Saint-Louis — Paris 4e', caption: 'Restauration garde-corps quai d\'Anjou, Île Saint-Louis' },
  heroQuote: { text: 'Quartier classé, ABF strict, mais leur expertise patrimoine a tout fluidifié. Restauration parfaite.', author: 'Conseil syndical', context: 'Copropriété quai d\'Anjou, Île Saint-Louis' },
  cityGuide: {
    intro: `Le 4e arrondissement combine deux mondes patrimoniaux exceptionnels : le Marais (secteur sauvegardé depuis 1965) et l'Île Saint-Louis (entièrement classée). Pour un garde-corps, c'est l'un des terrains les plus exigeants de Paris en matière d'ABF.

Sur les 8 chantiers 4e livrés ces 5 dernières années, 100% étaient en restauration patrimoine sous avis ABF.`,
    sections: [
      {
        heading: 'Île Saint-Louis et Marais — deux niveaux d\'exigence',
        body: `L'Île Saint-Louis est entièrement en site patrimonial remarquable depuis 1985. Toute intervention sur garde-corps visible depuis le quai ou la rue passe en avis ABF lourd, avec souvent saisine de l'Architecte du Patrimoine. Délai 6-9 mois. Restauration à l'identique exigée systématiquement.

Le Marais (secteur sauvegardé) est légèrement moins contraignant : ABF demandée mais sans saisine APMH automatique. Délai 4-6 mois. Restauration à l'identique privilégiée mais quelques compromis acceptés (ex. finition patine bronze foncé au lieu de noir antique).`,
      },
      {
        heading: 'Notre méthode patrimoniale',
        body: `Diagnostic patrimonial avant tout : photographies haute résolution de chaque ornement, identification du style (Louis XIV, Régence, Louis XV selon l'âge du bâtiment), vérification des ferrures d'origine. Souvent en partenariat avec un Architecte du Patrimoine.

Fabrication atelier : ferronnerie d'art au sens strict. Soudure TIG fine, refabrication d'ornements à l'identique au laser puis cisellement à la main, patine sur-mesure (bronze antique, fer forgé patiné, dorure à la feuille selon original).

Réception en présence du propriétaire + architecte + parfois ABF qui contrôle visuellement la conformité.`,
      },
      {
        heading: 'Tarifs Paris 4e patrimoine',
        body: `Restauration simple ferronnerie XVIIe-XIXe : 6 500-12 000 €. Restauration complexe avec dorure : 12 000-25 000 €. Création à l'identique d'un garde-corps disparu : 15 000-35 000 €. Délai 8-15 mois.`,
      },
    ],
  },
  caseStudies: [{
    title: 'Restauration garde-corps Louis XV — Hôtel particulier quai d\'Anjou',
    location: 'Quai d\'Anjou, Île Saint-Louis, Paris 4e',
    date: 'Juillet 2024',
    description: `Restauration de 6 garde-corps balcon style Louis XV (1770) sur hôtel particulier classé Île Saint-Louis. Ornements ferronnerie complexes (volutes, fleurs de lys, cartouches monogrammés), dorure à la feuille partielle. Conservation 90% des ornements d'origine, refabrication précise des 10% trop dégradés. Patine fer forgé patiné brun + dorure à la feuille refaite par notre partenaire artisan doreur. Procédure ABF + APMH 7 mois. Réception conforme à 100% à l'original.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : ferronnerie Louis XV dégradée' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : restauration intégrale dorure refaite' } },
    metrics: { price: '28 500 €', duration: '14 mois total', surface: '6 balcons restaurés' },
    quote: { text: 'Quartier classé, ABF strict, mais leur expertise patrimoine a tout fluidifié. Restauration parfaite.', author: 'Conseil syndical', context: 'Hôtel particulier quai d\'Anjou' },
  }],
  localReviews: [
    { text: 'Quartier classé, ABF strict, mais leur expertise patrimoine a tout fluidifié. Restauration parfaite.', author: 'Conseil syndical', context: 'Île Saint-Louis', rating: 5, date: 'Juillet 2024' },
    { text: 'Restauration ferronnerie Marais XVIIIe, dorure à la feuille refaite. APMH validé sans réserve.', author: 'Architecte du Patrimoine', context: 'Place des Vosges', rating: 5, date: 'Mars 2024' },
    { text: 'Création à l\'identique sur la base de plans d\'archives. Recherches longues mais résultat exceptionnel.', author: 'Société d\'Histoire', context: 'Quartier Saint-Paul', rating: 5, date: 'Octobre 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps patrimoniaux dans les arrondissements parisiens centraux.',
    rows: [
      { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '8 000-22 000 €', durationAvg: '10-15 mois', note: 'Périmètre Louvre, ABF lourd' },
      { communeSlug: 'paris-3e', communeName: 'Paris 3e', priceAvg: '6 000-18 000 €', durationAvg: '8-12 mois', note: 'Marais sauvegardé' },
      { communeSlug: 'paris-5e', communeName: 'Paris 5e', priceAvg: '5 500-15 000 €', durationAvg: '6-12 mois', note: 'Quartier Latin classé partiellement' },
    ],
  },
  localStats: [
    { label: 'Garde-corps restaurés Paris 4e depuis 2020', value: '~8' },
    { label: 'Taux acceptation ABF première instance', value: '90 %' },
    { label: 'Note moyenne 4e', value: '5,0 / 5' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Patrimoine Île Saint-Louis + Marais. Niche premium ferronnerie d\'art.' },
}
