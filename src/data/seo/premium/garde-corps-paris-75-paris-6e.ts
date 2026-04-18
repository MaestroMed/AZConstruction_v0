import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris6e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-6e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Paris 6e Saint-Germain', caption: 'Garde-corps acier + laiton patiné — appart Saint-Germain-des-Prés' },
  heroQuote: { text: 'Saint-Germain-des-Prés 6e, garde-corps acier + main courante laiton patiné. Finition bourgeoise atelier.', author: 'Famille de V.', context: 'Saint-Germain-des-Prés, Paris 6e' },
  cityGuide: { intro: `Paris 6e (41 000 habitants), arrondissement le plus cher de Paris. Saint-Germain-des-Prés + Luxembourg + Odéon. Clientèle CSP+++ exigeante, apparts haussmanniens historiques + hôtels particuliers XVIIIe.`,
    sections: [
      { heading: 'Paris 6e — Saint-Germain-des-Prés', body: `90% apparts haussmanniens (plafonds 3,20-3,80 m) + hôtels particuliers XVIIIe. Acier barreaudage fin + main courante laiton patiné dominante. Zone ABF quasi-totale centre.` },
      { heading: 'Process ABF 6e', body: `Dossier DP + ABF (4-6 sem délai), respect prescriptions bâti ancien. Métré sur place + plans BET conformes NF P01-012 obligatoires.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 380-520 €/ml. Acier + lisses : 420-580 €/ml. Acier + main courante laiton patiné : 520-780 €/ml. Verre + acier : 580-820 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier + laiton patiné 14 ml — appart Saint-Germain', location: 'Saint-Germain-des-Prés, Paris 6e', date: 'Juillet 2024', description: `Appart haussmannien 1885, 3 balcons filants + escalier intérieur. Acier barreaudage vertical RAL 9005 satiné + main courante laiton massif patiné naturel. Pose 2 jours par 2 compagnons + finitions laiton 1 jour supplémentaire.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : garde-corps fonte vétuste' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : acier + laiton patiné' } }, metrics: { price: '9 800 €', duration: '10 sem.', surface: '14 ml' }, quote: { text: 'Saint-Germain-des-Prés 6e, garde-corps acier + main courante laiton patiné. Finition bourgeoise atelier.', author: 'Famille de V.', context: 'Saint-Germain-des-Prés, Paris 6e' } }],
  localReviews: [
    { text: 'Saint-Germain-des-Prés 6e, garde-corps acier + main courante laiton patiné. Finition bourgeoise atelier.', author: 'Famille de V.', context: 'Saint-Germain-des-Prés, Paris 6e', rating: 5, date: 'Juillet 2024' },
    { text: 'Verre + acier terrasse hôtel particulier rue de Seine. Vue Luxembourg préservée.', author: 'Famille R.', context: 'Rue de Seine, Paris 6e', rating: 5, date: 'Mars 2024' },
    { text: 'Barreaudage vertical fin escalier haussmannien Luxembourg. Soudures TIG meulées invisibles.', author: 'Hugo T.', context: 'Luxembourg, Paris 6e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps arrondissements voisins premium.', rows: [
    { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '420-780 €/ml', durationAvg: '8-12 sem.', note: 'Hôtels particuliers' },
    { communeSlug: 'paris-5e', communeName: 'Paris 5e', priceAvg: '380-650 €/ml', durationAvg: '6-10 sem.', note: 'Quartier Latin historique' },
    { communeSlug: 'paris-4e', communeName: 'Paris 4e', priceAvg: '380-650 €/ml', durationAvg: '6-10 sem.', note: 'Marais historique' },
  ] },
  localStats: [{ label: 'Garde-corps Paris 6e depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part ABF + laiton', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP+++ Saint-Germain-des-Prés, acier + laiton patiné bourgeois.' },
}
