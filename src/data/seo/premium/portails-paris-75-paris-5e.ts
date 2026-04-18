import type { PremiumCase } from './types'

export const portailsParis75Paris5e: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'paris-75',
  communeSlug: 'paris-5e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail entrée cochère — Paris 5e', caption: 'Portail cochère acier RAL 7016 — Paris 5e Latin' },
  heroQuote: { text: 'Paris 5e immeuble quartier Latin Panthéon, portail cochère restauré ABF validé.', author: 'Syndic copro', context: 'Paris 5e Panthéon' },
  cityGuide: { intro: `Paris 5e (59 000 habitants, 75) Quartier Latin historique — Panthéon + Sorbonne + Jardin des Plantes + Mouffetard. Zone ABF intégrale. Copros haussmanniennes XIXe + immeubles XVIIIe.`,
    sections: [
      { heading: 'Paris 5e — Latin Panthéon ABF', body: `90% copros haussmanniennes XIXe + XVIIIe, 10% universitaire/commerces. Portails cochères restaurés dominants (plutôt que portails jardins rares).` },
      { heading: 'Tarifs', body: `Portail cochère restauration : 8 500-15 000 € (ABF dossier inclus). Petite entrée jardin privé : 4 500-7 000 €.` },
    ] },
  caseStudies: [{ title: 'Portail cochère restauré ABF — copro Paris 5e Panthéon', location: 'Panthéon, Paris 5e', date: 'Juillet 2024', description: `Copro haussmannienne 1875 Panthéon. Portail cochère bois massif restauré + pivots inox A2-70 + motorisation discrète + dossier ABF 10 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '12 500 €', duration: '16 sem. (ABF)', surface: '3,5 m × 4,2 m' }, quote: { text: 'Paris 5e immeuble quartier Latin Panthéon, portail cochère restauré ABF validé.', author: 'Syndic copro', context: 'Paris 5e Panthéon' } }],
  localReviews: [
    { text: 'Paris 5e immeuble quartier Latin Panthéon, portail cochère restauré ABF validé.', author: 'Syndic copro', context: 'Paris 5e Panthéon', rating: 5, date: 'Juillet 2024' },
    { text: 'Portail jardin privé hôtel particulier Jardin Plantes. Cohérence XIXe.', author: 'Famille de M.', context: 'Paris 5e Jardin Plantes', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Panthéon géré par Sophie. 100 % acceptation.', author: 'Syndic copro', context: 'Paris 5e Sorbonne', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails arrondissements voisins Paris centre rive gauche.', rows: [
    { communeSlug: 'paris-6e', communeName: 'Paris 6e', priceAvg: '9 000-16 000 € cochère', durationAvg: '14-18 sem.', note: 'Saint-Germain prestige' },
    { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '9 000-16 000 €', durationAvg: '14-18 sem.', note: 'Marais hôtels particuliers' },
    { communeSlug: 'paris-13e', communeName: 'Paris 13e', priceAvg: '6 000-10 000 €', durationAvg: '8-12 sem.', note: 'Mix plus abordable' },
  ] },
  localStats: [{ label: 'Portails Paris 5e depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part restaurations ABF', value: '85 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Paris 5e Quartier Latin Panthéon Sorbonne ABF intégrale.' },
}
