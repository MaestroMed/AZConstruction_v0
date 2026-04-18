import type { PremiumCase } from './types'

export const verriereAtelierValDeMarne94Vincennes: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'vincennes',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Vincennes 94', caption: 'Verrière 8 carreaux noir mat — appart Vincennes château' },
  heroQuote: { text: 'Vincennes appart haussmannien zone château, verrière atelier acier soudé. Excellence finition.', author: 'Famille B.', context: 'Vincennes château' },
  cityGuide: { intro: `Vincennes (50 000 habitants, 94 limitrophe Paris 12e) ville résidentielle premium château + bois. Clientèle CSP++ apparts haussmanniens + copros récentes. Demande forte verrière atelier.`,
    sections: [
      { heading: 'Vincennes — château + bois', body: `60% apparts haussmanniens centre (zone ABF château), 40% copros récentes + pavillons. Verrière 6-8 carreaux profil 40 mm noir mat dominante. Zone ABF château stricte.` },
      { heading: 'Process ABF Vincennes', body: `Zone ABF château royal → dossier déclaration préalable + ABF (4-6 sem délai). Hors ABF (proche Paris 12e) : liberté totale.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 500-11 800 €. Toute hauteur : 14 500-23 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — appart Vincennes haussmannien', location: 'Vincennes château', date: 'Juillet 2024', description: `Appart haussmannien 95 m² zone château, plafond 3,10 m. Verrière 4 m × 2,90 m, 8 carreaux profils acier 40 mm noir mat RAL 9005, soudures MIG meulées invisibles. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 800 €', duration: '7 sem.', surface: '11,6 m²' }, quote: { text: 'Vincennes appart haussmannien zone château, verrière atelier acier soudé. Excellence finition.', author: 'Famille B.', context: 'Vincennes château' } }],
  localReviews: [
    { text: 'Vincennes appart haussmannien zone château, verrière atelier acier soudé. Excellence finition.', author: 'Famille B.', context: 'Vincennes château', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur 14 m² loft Vincennes bord bois. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Vincennes bois', rating: 5, date: 'Mars 2024' },
    { text: 'Visserie noire apparente sur demande. Authentique atelier vrai métier.', author: 'Famille D.', context: 'Vincennes centre', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières atelier communes voisines 94.', rows: [
    { communeSlug: 'saint-mande', communeName: 'Saint-Mandé', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Haussmannien premium' },
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Limitrophe Paris 12e' },
    { communeSlug: 'fontenay-sous-bois', communeName: 'Fontenay-sous-Bois', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons + copros' },
  ] },
  localStats: [{ label: 'Verrières Vincennes depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible CSP++ Vincennes château, zone ABF verrière haussmannienne.' },
}
