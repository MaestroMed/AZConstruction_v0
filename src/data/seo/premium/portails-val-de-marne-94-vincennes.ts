import type { PremiumCase } from './types'

export const portailsValDeMarne94Vincennes: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'vincennes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Vincennes 94 Château', caption: 'Restauration portail XIXe ABF — copro Vincennes Château' },
  heroQuote: { text: 'Vincennes Château, ABF strict, leur expertise patrimoine a tout fluidifié. Pose impeccable.', author: 'Conseil syndical', context: 'Vincennes Château' },
  cityGuide: { intro: `Vincennes (49 000 habitants, 94 limitrophe Paris 12e) compte beaucoup de copros de standing autour du Château + pavillons cossus. Pour les portails, terrain ABF fréquent (périmètre Château).`,
    sections: [
      { heading: 'Vincennes — Château + Bois', body: `60% chantiers en zone ABF (Château). 40% hors ABF (Bois, sud Vincennes). Restauration patrimoine + portails modernes.` },
      { heading: 'Tarifs Vincennes', body: `Restauration ABF : 8 000-18 000 €. Coulissant moderne hors ABF : 6 000-9 000 €. Délai 4-12 mois selon zone.` },
    ] },
  caseStudies: [{ title: 'Restauration portail XIXe motorisé — copro Château', location: 'Vincennes Château', date: 'Juillet 2024', description: `Restauration portail copro 1882 + ajout motorisation Came discrète. ABF 5 mois, pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '14 800 €', duration: '8 mois total', surface: '5 m motorisé' }, quote: { text: 'Vincennes Château, ABF strict, leur expertise patrimoine a tout fluidifié. Pose impeccable.', author: 'Conseil syndical', context: 'Vincennes Château' } }],
  localReviews: [
    { text: 'Vincennes Château, ABF strict, leur expertise patrimoine a tout fluidifié. Pose impeccable.', author: 'Conseil syndical', context: 'Vincennes Château', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant moderne pavillon Bois de Vincennes. Pose 1 jour.', author: 'Famille B.', context: 'Bois de Vincennes', rating: 5, date: 'Mars 2024' },
    { text: 'Restauration portail haussmannien XIXe ABF. Patine bronze sur-mesure parfaite.', author: 'Architecte', context: 'Centre Vincennes', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 94.', rows: [
    { communeSlug: 'saint-mande', communeName: 'Saint-Mandé', priceAvg: '6 800-12 000 €', durationAvg: '12-16 sem.', note: 'Petites copros chic' },
    { communeSlug: 'fontenay-sous-bois', communeName: 'Fontenay-sous-Bois', priceAvg: '5 800-8 500 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '6 500-9 800 €', durationAvg: '10-14 sem.', note: 'Bord de Marne, premium' },
  ] },
  localStats: [{ label: 'Portails Vincennes depuis 2020', value: '~10' }, { label: 'Note moyenne Vincennes', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible Château + Bois Vincennes. ABF expertise.' },
}
