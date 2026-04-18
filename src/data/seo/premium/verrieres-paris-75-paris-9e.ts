import type { PremiumCase } from './types'

export const verrieresParis75Paris9e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-9e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 9e', caption: 'Verrière 8 carreaux — appart haussmannien Opéra Paris 9e' },
  heroQuote: { text: 'Paris 9e Opéra appart haussmannien, verrière 8 carreaux laiton patiné. Cohérence Belle Époque.', author: 'Famille de C.', context: 'Paris 9e Opéra' },
  cityGuide: { intro: `Paris 9e (60 000 habitants, 75) arrondissement Opéra-Pigalle-Saint-Georges. Zone ABF majoritaire. Copros haussmanniennes XIXe Belle Époque + immeubles Second Empire.`,
    sections: [
      { heading: 'Paris 9e — Opéra Belle Époque', body: `90% copros haussmanniennes Second Empire-Belle Époque, 5% hôtels particuliers, 5% commerces. Verrière 8-10 carreaux profil laiton patiné ou noir mat ABF validé dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² ABF : 5 500-7 500 €. Avec profil laiton patiné : 9 200-13 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux laiton patiné — appart Opéra Paris 9e', location: 'Opéra, Paris 9e', date: 'Juillet 2024', description: `Appart haussmannien 130 m² 1872 Opéra Belle Époque. Verrière 4,5 m × 2,8 m profils 40 mm laiton patine bronze florentin + dossier ABF 8 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '13 000 €', duration: '15 sem. (ABF)', surface: '12,6 m²' }, quote: { text: 'Paris 9e Opéra appart haussmannien, verrière 8 carreaux laiton patiné. Cohérence Belle Époque.', author: 'Famille de C.', context: 'Paris 9e Opéra' } }],
  localReviews: [
    { text: 'Paris 9e Opéra appart haussmannien, verrière 8 carreaux laiton patiné. Cohérence Belle Époque.', author: 'Famille de C.', context: 'Paris 9e Opéra', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur 12 m² appart Saint-Georges. Soudures TIG invisibles.', author: 'Famille M.', context: 'Paris 9e Saint-Georges', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Pigalle géré par Sophie. 100 % acceptation 1er envoi.', author: 'Famille R.', context: 'Paris 9e Pigalle', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris centre nord.', rows: [
    { communeSlug: 'paris-2e', communeName: 'Paris 2e', priceAvg: '1 400-2 000 €/m² ABF', durationAvg: '14-18 sem.', note: 'Bourse passages' },
    { communeSlug: 'paris-10e', communeName: 'Paris 10e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Canal République' },
    { communeSlug: 'paris-18e', communeName: 'Paris 18e', priceAvg: '1 200-1 800 €/m²', durationAvg: '6-8 sem.', note: 'Montmartre ABF' },
  ] },
  localStats: [{ label: 'Verrières Paris 9e depuis 2020', value: '~12' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part ABF validé', value: '100 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 9e Opéra-Pigalle-Saint-Georges Belle Époque ABF.' },
}
