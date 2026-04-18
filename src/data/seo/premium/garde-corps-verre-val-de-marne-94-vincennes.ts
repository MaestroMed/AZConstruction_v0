import type { PremiumCase } from './types'

export const gardeCorpsVerreValDeMarne94Vincennes: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'vincennes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps verre + inox — Vincennes 94', caption: 'Verre + inox brossé — appart Château Vincennes' },
  heroQuote: { text: 'Vincennes appart haussmannien bord Château, verre + inox brossé. Vue dégagée parc.', author: 'Famille de V.', context: 'Vincennes Château' },
  cityGuide: { intro: `Vincennes (49 000 habitants, 94 limitrophe Paris 12e) ville bourgeoise CSP++ — Château royal + Bois de Vincennes + pavillons bourgeois + copros centre. Zone ABF Château. Clientèle familiale haut-de-gamme.`,
    sections: [
      { heading: 'Vincennes — Château royal ABF CSP++', body: `40% copros haussmanniennes centre, 45% pavillons bourgeois, 15% zone ABF Château. Verre + main courante inox brossé 316L ou laiton patiné ABF dominant.` },
      { heading: 'Tarifs', body: `Verre + inox brossé : 580-800 €/ml. Verre + laiton patiné ABF : 720-1 000 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps verre + inox 12 ml — appart bord Château Vincennes', location: 'Château, Vincennes', date: 'Juin 2024', description: `Appart haussmannien 115 m² 1895 bord Château royal. Garde-corps verre feuilleté 8+8 + main courante inox brossé 316L + U-channel encastré + dossier ABF 6 sem. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 400 €', duration: '12 sem. (ABF)', surface: '12 ml' }, quote: { text: 'Vincennes appart haussmannien bord Château, verre + inox brossé. Vue dégagée parc.', author: 'Famille de V.', context: 'Vincennes Château' } }],
  localReviews: [
    { text: 'Vincennes appart haussmannien bord Château, verre + inox brossé. Vue dégagée parc.', author: 'Famille de V.', context: 'Vincennes Château', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + laiton patiné hôtel particulier Bois. Signature haute couture.', author: 'Famille de R.', context: 'Vincennes Bois', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Château royal géré par Sophie. 100 % acceptation.', author: 'Famille L.', context: 'Vincennes centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps verre communes voisines 94 nord bord Bois.', rows: [
    { communeSlug: 'saint-mande', communeName: 'Saint-Mandé', priceAvg: '600-820 €/ml', durationAvg: '8-12 sem.', note: 'Bourgeois limitrophe Paris' },
    { communeSlug: 'fontenay-sous-bois', communeName: 'Fontenay-sous-Bois', priceAvg: '550-750 €/ml', durationAvg: '8-12 sem.', note: 'Pavillons bourgeois' },
    { communeSlug: 'nogent-sur-marne', communeName: 'Nogent-sur-Marne', priceAvg: '600-820 €/ml', durationAvg: '8-12 sem.', note: 'Bord Marne bourgeois' },
  ] },
  localStats: [{ label: 'Garde-corps verre Vincennes depuis 2020', value: '~11' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF Château', value: '15 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Vincennes bourgeois CSP++ Château royal ABF + Bois.' },
}
