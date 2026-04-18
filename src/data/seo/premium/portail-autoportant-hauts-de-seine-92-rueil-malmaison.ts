import type { PremiumCase } from './types'

export const portailAutoportantHautsDeSeine92RueilMalmaison: PremiumCase = {
  productSlug: 'portail-autoportant',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'rueil-malmaison',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail autoportant — Rueil-Malmaison', caption: 'Autoportant lames horizontales 5,5 m motorisé Came — pavillon Buzenval' },
  heroQuote: { text: 'Autoportant 5,5 m motorisé Came. Sans rail, parfait pour notre allée gravillon. Pose 1 jour propre.', author: 'Famille D.', context: 'Quartier Buzenval, Rueil-Malmaison' },
  cityGuide: {
    intro: `Rueil-Malmaison (80 000 habitants, Hauts-de-Seine ouest) compte beaucoup de pavillons individuels (Buzenval, Plaine, Coteaux). Demande importante de portails autoportants pour leur côté esthétique épuré et zéro entretien.`,
    sections: [
      { heading: 'Rueil — pavillons + autoportants', body: `70% pavillons, 30% copros. Autoportant dominant grâce à allées en gravier ou pavés (entretien rail à éviter). Configurations lames horizontales (60%), barreaudé (25%), tôlé motifs laser (15%).` },
      { heading: 'Tarifs', body: `Autoportant pavillon 4-6 m motorisé Came : 6 800-9 500 €. Délai 7-10 sem.` },
    ],
  },
  caseStudies: [{
    title: 'Autoportant lames 5,5 m motorisé — pavillon Buzenval',
    location: 'Buzenval, Rueil-Malmaison',
    date: 'Juillet 2024',
    description: `Remplacement portail bois battant ancien par autoportant lames horizontales acier 100 mm anthracite, motorisation Came BX-243. Pose 1 journée. Allée gravillon respectée.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } },
    metrics: { price: '8 200 €', duration: '8 sem.', surface: '5,5 m' },
    quote: { text: 'Autoportant 5,5 m motorisé Came. Sans rail, parfait pour notre allée gravillon. Pose 1 jour propre.', author: 'Famille D.', context: 'Buzenval' },
  }],
  localReviews: [
    { text: 'Autoportant 5,5 m motorisé Came. Sans rail, parfait pour notre allée gravillon. Pose 1 jour propre.', author: 'Famille D.', context: 'Buzenval, Rueil', rating: 5, date: 'Juillet 2024' },
    { text: 'Tôlé plein avec motifs laser personnalisés. Travail de précision pour notre maison de ville.', author: 'Famille R.', context: 'Plaine, Rueil', rating: 5, date: 'Mars 2024' },
    { text: 'Service complet : DP mairie, motorisation Came, intégration domotique. Pas de stress.', author: 'Famille V.', context: 'Coteaux, Rueil', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: {
    intro: 'Portails autoportants communes voisines 92.',
    rows: [
      { communeSlug: 'nanterre', communeName: 'Nanterre', priceAvg: '6 800-9 500 €', durationAvg: '7-10 sem.', note: 'Pavillons individuels' },
      { communeSlug: 'suresnes', communeName: 'Suresnes', priceAvg: '7 200-9 800 €', durationAvg: '7-10 sem.', note: 'Pavillons coteaux Mont-Valérien' },
      { communeSlug: 'le-vesinet', communeName: 'Le Vésinet', priceAvg: '7 500-11 000 €', durationAvg: '8-12 sem.', note: 'Charte UNESCO Vésinet' },
    ],
  },
  localStats: [
    { label: 'Autoportants Rueil depuis 2020', value: '~12' },
    { label: 'Note moyenne Rueil', value: '4,9 / 5' },
    { label: 'Part allées gravier/pavé', value: '70 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible pavillons individuels Buzenval/Plaine/Coteaux. Argument zéro entretien.' },
}
