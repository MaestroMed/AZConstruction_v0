import type { PremiumCase } from './types'

export const gardeCorpsParis75Paris8e: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'paris-75',
  communeSlug: 'paris-8e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps acier + bronze — Paris 8e', caption: 'Garde-corps acier + bronze patiné — Champs-Élysées Paris 8e' },
  heroQuote: { text: 'Paris 8e Champs-Élysées copro luxe, garde-corps acier + bronze patiné ABF validé. Signature.', author: 'Famille de L.', context: 'Paris 8e Champs-Élysées' },
  cityGuide: { intro: `Paris 8e (38 000 habitants, 75) arrondissement prestige — Champs-Élysées + Madeleine + Parc Monceau + Faubourg-Saint-Honoré. Zone ABF intégrale. Copros haussmanniennes XIXe + hôtels particuliers.`,
    sections: [
      { heading: 'Paris 8e — Champs prestige ABF', body: `90% copros haussmanniennes luxe, 10% hôtels particuliers. Garde-corps acier + bronze patiné ou laiton patiné ABF validé dominant (prescriptions ABF strictes).` },
      { heading: 'Tarifs', body: `Acier RAL + bois noyer : 520-720 €/ml. Acier + bronze/laiton patiné ABF : 700-1 000 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier + bronze patiné 12 ml — copro Champs-Élysées', location: 'Champs-Élysées, Paris 8e', date: 'Juillet 2024', description: `Copro haussmannienne 1875 Champs prestige. Garde-corps acier RAL 9005 + main courante bronze patine ancienne + dossier ABF 10 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 800 €', duration: '16 sem. (ABF)', surface: '12 ml' }, quote: { text: 'Paris 8e Champs-Élysées copro luxe, garde-corps acier + bronze patiné ABF validé. Signature.', author: 'Famille de L.', context: 'Paris 8e Champs-Élysées' } }],
  localReviews: [
    { text: 'Paris 8e Champs-Élysées copro luxe, garde-corps acier + bronze patiné ABF validé. Signature.', author: 'Famille de L.', context: 'Paris 8e Champs-Élysées', rating: 5, date: 'Juillet 2024' },
    { text: 'Laiton patiné hôtel particulier Monceau. Finition haute couture Sophie.', author: 'Famille de R.', context: 'Paris 8e Monceau', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Madeleine géré par Sophie. 100 % acceptation 1er envoi.', author: 'Gestionnaire syndic', context: 'Paris 8e Madeleine', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps arrondissements voisins prestige Paris.', rows: [
    { communeSlug: 'paris-16e', communeName: 'Paris 16e', priceAvg: '700-1 000 €/ml ABF', durationAvg: '14-18 sem.', note: 'Passy-Trocadéro luxe' },
    { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '700-1 000 €/ml ABF', durationAvg: '14-18 sem.', note: 'Invalides hôtels particuliers' },
    { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '700-1 000 €/ml ABF', durationAvg: '14-18 sem.', note: 'Louvre prestige' },
  ] },
  localStats: [{ label: 'Garde-corps Paris 8e depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part ABF validé', value: '100 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 8e Champs-Madeleine-Monceau prestige ABF intégrale laiton/bronze.' },
}
