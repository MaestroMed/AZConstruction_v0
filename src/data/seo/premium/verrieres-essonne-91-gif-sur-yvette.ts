import type { PremiumCase } from './types'

export const verrieresEssonne91GifSurYvette: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'essonne-91',
  communeSlug: 'gif-sur-yvette',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Gif-sur-Yvette 91', caption: 'Verrière 8 carreaux — pavillon Gif' },
  heroQuote: { text: 'Gif-sur-Yvette pavillon bourgeois vallée Chevreuse, verrière 8 carreaux MIG.', author: 'Famille G.', context: 'Gif centre' },
  cityGuide: { intro: `Gif-sur-Yvette (21 000 habitants, 91) ville résidentielle bourgeoise vallée de Chevreuse CSP+++ — Université Paris-Saclay + CNRS + pavillons + forêt. Clientèle scientifique + familiale haut-de-gamme.`,
    sections: [
      { heading: 'Gif — vallée Chevreuse Saclay', body: `80% pavillons individuels bourgeois, 15% copros + logements Saclay, 5% commerces. Verrière 6-10 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 300-7 200 €. Avec porte battante : 8 400-12 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 8 carreaux + porte — pavillon Gif-sur-Yvette', location: 'Gif centre', date: 'Juin 2024', description: `Pavillon bourgeois 1935 rénové vallée Chevreuse. Verrière 4,5 m × 2,8 m + porte battante profils 40 mm noir mat satiné. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '10 600 €', duration: '7 sem.', surface: '12,6 m²' }, quote: { text: 'Gif-sur-Yvette pavillon bourgeois vallée Chevreuse, verrière 8 carreaux MIG.', author: 'Famille G.', context: 'Gif centre' } }],
  localReviews: [
    { text: 'Gif-sur-Yvette pavillon bourgeois vallée Chevreuse, verrière 8 carreaux MIG.', author: 'Famille G.', context: 'Gif centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière toute hauteur 14 m² pavillon Saclay. Soudures TIG invisibles.', author: 'Famille L.', context: 'Gif Plateau Saclay', rating: 5, date: 'Mars 2024' },
    { text: 'Laiton patiné main courante. Qualité haute couture.', author: 'Famille R.', context: 'Gif résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 91 vallée Chevreuse Saclay.', rows: [
    { communeSlug: 'orsay', communeName: 'Orsay', priceAvg: '1 300-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Université Paris-Sud' },
    { communeSlug: 'bures-sur-yvette', communeName: 'Bures-sur-Yvette', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons étudiants' },
    { communeSlug: 'palaiseau', communeName: 'Palaiseau', priceAvg: '1 200-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Polytechnique + pavillons' },
  ] },
  localStats: [{ label: 'Verrières Gif depuis 2020', value: '~10' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part pavillons bourgeois', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Marc (compagnon métallier)', internalNotes: 'Gif-sur-Yvette 91 vallée Chevreuse Saclay CSP+++ scientifique.' },
}
