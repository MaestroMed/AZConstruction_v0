import type { PremiumCase } from './types'

export const verrieresParis75Paris15e: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'paris-75',
  communeSlug: 'paris-15e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Paris 15e', caption: 'Verrière 8 carreaux — appart Vaugirard Paris 15e' },
  heroQuote: { text: 'Paris 15e Vaugirard appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 15e Vaugirard' },
  cityGuide: { intro: `Paris 15e (235 000 habitants, 75) plus grand arrondissement par population — Vaugirard-Grenelle-Beaugrenelle. Copros haussmanniennes + immeubles années 70 + front de Seine. Clientèle familiale CSP+++.`,
    sections: [
      { heading: 'Paris 15e — Vaugirard-Beaugrenelle', body: `60% copros haussmanniennes, 30% immeubles années 70 front de Seine, 10% reconversions ateliers Grenelle. Verrière 6-10 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 800-12 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — appart Paris 15e Vaugirard', location: 'Vaugirard, Paris 15e', date: 'Juin 2024', description: `Appart haussmannien 115 m² 1882 Vaugirard. Verrière 4,5 m × 2,80 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 000 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Paris 15e Vaugirard appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 15e Vaugirard' } }],
  localReviews: [
    { text: 'Paris 15e Vaugirard appart haussmannien, verrière 8 carreaux MIG. Cohérence XIXe.', author: 'Famille L.', context: 'Paris 15e Vaugirard', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² front de Seine. Soudures TIG invisibles.', author: 'Famille R.', context: 'Paris 15e Beaugrenelle', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné main courante. Qualité haute couture.', author: 'Famille M.', context: 'Paris 15e Grenelle', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières arrondissements voisins Paris sud.', rows: [
    { communeSlug: 'paris-14e', communeName: 'Paris 14e', priceAvg: '1 300-1 900 €/m²', durationAvg: '6-8 sem.', note: 'Denfert haussmannien' },
    { communeSlug: 'paris-16e', communeName: 'Paris 16e', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '10-14 sem.', note: 'Passy-Trocadéro luxe' },
    { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '1 500-2 100 €/m² ABF', durationAvg: '14-18 sem.', note: 'Invalides prestige' },
  ] },
  localStats: [{ label: 'Verrières Paris 15e depuis 2020', value: '~22' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part haussmannien', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Paris 15e Vaugirard-Beaugrenelle plus grand 75 par population.' },
}
