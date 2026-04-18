import type { PremiumCase } from './types'

export const verrieresParis75Paris16e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-16e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 16e', caption: 'Verrière 10 carreaux laiton patiné — appart Passy Paris 16e' },
  heroQuote: { text: 'Paris 16e Passy appart bourgeois XIXe, verrière laiton patiné ABF validé. Signature luxe.', author: 'Famille de R.', context: 'Paris 16e Passy' },
  cityGuide: { intro: `Paris 16e (165 000 habitants, 75) arrondissement bourgeois prestige — Passy + Trocadéro + Auteuil + Bois de Boulogne + Place Victor Hugo. Zone ABF. Copros haussmanniennes XIXe + immeubles Art Déco années 30.`,
    sections: [
      { heading: 'Paris 16e — Passy-Trocadéro luxe', body: `70% copros haussmanniennes, 20% immeubles Art Déco 1930, 10% hôtels particuliers. Verrière 8-10 carreaux profil laiton patiné ou noir mat ABF validé dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² ABF : 5 800-7 800 €. Avec profil laiton patiné ABF : 9 500-14 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 10 carreaux laiton patiné ABF — appart Passy Paris 16e', location: 'Passy, Paris 16e', date: 'Juillet 2024', description: `Appart haussmannien 140 m² 1895 Passy-Muette. Verrière 5 m × 2,8 m profils 40 mm laiton patine bronze florentin + dossier ABF 10 sem. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '14 500 €', duration: '17 sem. (ABF)', surface: '14 m²' }, quote: { text: 'Paris 16e Passy appart bourgeois XIXe, verrière laiton patiné ABF validé. Signature luxe.', author: 'Famille de R.', context: 'Paris 16e Passy' } }],
  localReviews: [
    { text: 'Paris 16e Passy appart bourgeois XIXe, verrière laiton patiné ABF validé. Signature luxe.', author: 'Famille de R.', context: 'Paris 16e Passy', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur 16 m² hôtel particulier Auteuil. Soudures TIG invisibles.', author: 'Famille de M.', context: 'Paris 16e Auteuil', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Trocadéro géré par Sophie. 100 % acceptation.', author: 'Famille V.', context: 'Paris 16e Trocadéro', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris ouest prestige.', rows: [
    { communeSlug: 'paris-8e', communeName: 'Paris 8e', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '14-18 sem.', note: 'Champs-Monceau luxe' },
    { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '14-18 sem.', note: 'Invalides hôtels particuliers' },
    { communeSlug: 'paris-17e', communeName: 'Paris 17e', priceAvg: '1 400-2 000 €/m²', durationAvg: '8-12 sem.', note: 'Monceau + Batignolles' },
  ] },
  localStats: [{ label: 'Verrières Paris 16e depuis 2020', value: '~18' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part ABF validé', value: '100 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Paris 16e Passy-Trocadéro-Auteuil bourgeois ABF intégrale.' },
}
