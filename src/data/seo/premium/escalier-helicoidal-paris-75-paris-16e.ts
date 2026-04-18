import type { PremiumCase } from './types'

export const escalierHelicoidalParis75Paris16e: PremiumCase = {
  productSlug: 'escalier-helicoidal',
  deptSlug: 'paris-75',
  communeSlug: 'paris-16e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Escalier hélicoïdal — Paris 16e', caption: 'Hélicoïdal acier + chêne massif — hôtel particulier Passy' },
  heroQuote: { text: 'Paris 16e hôtel particulier Passy, hélicoïdal acier + chêne massif sur mesure. Pièce maîtresse.', author: 'Famille de L.', context: 'Passy, Paris 16e' },
  cityGuide: { intro: `Paris 16e (165 000 habitants), arrondissement premium CSP++. Hôtels particuliers Passy/Muette + apparts haussmanniens. Demande escalier hélicoïdal sur mesure haut de gamme.`,
    sections: [
      { heading: 'Paris 16e — Passy + Muette', body: `60% apparts haussmanniens, 40% hôtels particuliers XIXe-XXe. Hélicoïdal acier + chêne massif premium sur mesure dominant. Rendu 3D + plans BET obligatoires.` },
      { heading: 'Process hélicoïdal 16e', body: `Métré sur place 1h, rendu 3D 48h, plans BET conformes NF P01-012, fabrication atelier 5-7 sem, pose 2-3 jours par 2 compagnons + ébéniste marches bois.` },
      { heading: 'Tarifs', body: `Hélicoïdal acier simple : 12 000-18 000 €. Acier + chêne massif : 18 000-28 000 €. Acier + granit/marbre : 25 000-40 000 €.` },
    ] },
  caseStudies: [{ title: 'Hélicoïdal acier + chêne massif — hôtel particulier Passy', location: 'Passy, Paris 16e', date: 'Juillet 2024', description: `Escalier hélicoïdal acier RAL 9005 noir mat + marches chêne massif fumé, 18 marches, hauteur 3,2 m. Fabrication atelier 6 sem, pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : escalier bois vétuste' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : hélicoïdal acier + chêne' } }, metrics: { price: '24 500 €', duration: '10 sem.', surface: '3,2 m hauteur' }, quote: { text: 'Paris 16e hôtel particulier Passy, hélicoïdal acier + chêne massif sur mesure. Pièce maîtresse.', author: 'Famille de L.', context: 'Passy, Paris 16e' } }],
  localReviews: [
    { text: 'Paris 16e hôtel particulier Passy, hélicoïdal acier + chêne massif sur mesure. Pièce maîtresse.', author: 'Famille de L.', context: 'Passy, Paris 16e', rating: 5, date: 'Juillet 2024' },
    { text: 'Hélicoïdal acier + marbre Calacatta duplex Muette. Soudures TIG meulées invisibles.', author: 'Famille R.', context: 'La Muette, Paris 16e', rating: 5, date: 'Mars 2024' },
    { text: 'Hélicoïdal acier + chêne fumé appart haussmannien. Atelier vrai métier, pose 2 jours.', author: 'Hugo M.', context: 'Trocadéro, Paris 16e', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Escaliers hélicoïdaux arrondissements voisins.', rows: [
    { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '18 000-35 000 €', durationAvg: '10-14 sem.', note: 'Hôtels particuliers' },
    { communeSlug: 'paris-8e', communeName: 'Paris 8e', priceAvg: '18 000-35 000 €', durationAvg: '10-14 sem.', note: 'Haussmannien premium' },
    { communeSlug: 'neuilly-sur-seine', communeName: 'Neuilly-sur-Seine (92)', priceAvg: '18 000-32 000 €', durationAvg: '10-14 sem.', note: 'Hôtels particuliers CSP++' },
  ] },
  localStats: [{ label: 'Hélicoïdaux Paris 16e depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part acier + chêne', value: '60 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Cible CSP++ Passy/Muette hôtels particuliers, hélicoïdal pièce maîtresse.' },
}
