import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris5e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-5e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps balcon Quartier Latin — Paris 5e', caption: 'Restauration ferronnerie boulevard Saint-Michel' },
  heroQuote: { text: 'Quartier Latin classé partiellement, leur dossier ABF a passé sans modifications. Pose en deux jours impeccable.', author: 'Conseil syndical', context: 'Copropriété boulevard Saint-Michel, 5e' },
  cityGuide: {
    intro: `Le 5e arrondissement (Quartier Latin, Sorbonne, Panthéon, Jardin des Plantes) est partiellement classé en site patrimonial. Pour un garde-corps, ABF nécessaire pour les façades visibles depuis l'espace public dans le périmètre des monuments classés (Panthéon, Notre-Dame voisine, Saint-Étienne-du-Mont, etc.).

Sur les 7 chantiers 5e livrés ces 4 dernières années, 70% étaient sous ABF. Notre méthode : restauration patrimoniale ou intégration discrète selon la zone.`,
    sections: [
      { heading: 'Les zones du 5e — patrimoine vs résidentiel', body: `Périmètre Panthéon-Saint-Michel-Maubert : ABF strict, restauration à l'identique. Périmètre Jussieu-Buffon : ABF souple, modifications acceptées si justifiées. Périmètre Mouffetard-Gobelins : pas d'ABF, intervention libre dans le respect des règles copro classiques.` },
      { heading: 'Configurations Quartier Latin', body: `Restauration garde-corps balcon ferronnerie XIXe à l'identique : 4 800-9 500 €. Garde-corps verre + main courante laiton vieilli (zones non-ABF) : 480-650 €/ml. Délai 6-10 mois en zone ABF, 8-10 semaines hors ABF.` },
      { heading: 'Tarifs et démarches', body: `On prépare gratuitement le dossier ABF avec visuel d'intégration sur photo de votre façade. Acceptation 1ère instance : 90% de nos chantiers 5e.` },
    ],
  },
  caseStudies: [{
    title: 'Restauration de 5 garde-corps balcon — copropriété boulevard Saint-Michel',
    location: 'Boulevard Saint-Michel, Paris 5e',
    date: 'Mai 2024',
    description: `Restauration de 5 garde-corps balcon (1882) sur copropriété 60 lots boulevard Saint-Michel. Ferronnerie d'origine partiellement rouillée. Conservation 85% ornements, refabrication identique 15%. Patine bronze antique sur-mesure. Procédure ABF 4 mois (acceptée 1ère instance). Pose en 3 jours. 32 ml total.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : ferronnerie rouillée' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : restauration patine bronze' } },
    metrics: { price: '15 800 € (32 ml)', duration: '8 mois total', surface: '32 ml — 5 balcons' },
    quote: { text: 'Quartier Latin classé partiellement, leur dossier ABF a passé sans modifications. Pose en deux jours impeccable.', author: 'Conseil syndical', context: 'Copropriété boulevard Saint-Michel' },
  }],
  localReviews: [
    { text: 'Quartier Latin classé partiellement, leur dossier ABF a passé sans modifications. Pose en deux jours impeccable.', author: 'Conseil syndical', context: 'Boulevard Saint-Michel, 5e', rating: 5, date: 'Mai 2024' },
    { text: 'Garde-corps verre toute hauteur balcon Mouffetard. Pose en demi-journée, finitions au top.', author: 'Famille L.', context: 'Mouffetard, 5e', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration ferronnerie Place du Panthéon. ABF strict, dossier maîtrisé, résultat conforme.', author: 'Architecte', context: 'Panthéon, 5e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Garde-corps dans les arrondissements parisiens centraux.',
    rows: [
      { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '7 000-18 000 €', durationAvg: '10-14 mois', note: 'Île Saint-Louis + Marais classé' },
      { communeSlug: 'paris-6e', communeName: 'Paris 6e', priceAvg: '5 500-13 000 €', durationAvg: '8-12 mois', note: 'Saint-Germain, ABF zones' },
      { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '320-480 €/ml', durationAvg: '8-10 sem.', note: 'Tissu mixte, peu d\'ABF' },
    ],
  },
  localStats: [
    { label: 'Garde-corps Paris 5e depuis 2020', value: '~7' },
    { label: 'Taux acceptation ABF', value: '90 %' },
    { label: 'Note moyenne 5e', value: '5,0 / 5' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Quartier Latin patrimoine partiel. Distinguer zones ABF vs zones libres.' },
}
