import type { PremiumCase } from './types'

export const verrieresValDeMarne94CharentonLePont: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'charenton-le-pont',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière — Charenton-le-Pont 94', caption: 'Verrière atelier 6 carreaux — appart Charenton centre' },
  heroQuote: { text: 'Charenton-le-Pont, verrière atelier dans appart proche Paris 12e. Excellence finition.', author: 'Famille L.', context: 'Charenton centre' },
  cityGuide: { intro: `Charenton-le-Pont (30 000 habitants, 94 limitrophe Paris 12e) attire une clientèle CSP+ pour ses apparts récents et ses pavillons. Demande croissante verrière atelier.`,
    sections: [
      { heading: 'Charenton — proximité Paris', body: `Mix copros récentes + pavillons. Verrière 6 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 500-7 500 €. Avec porte battante : 8 200-11 500 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux + porte — appart Charenton', location: 'Centre Charenton', date: 'Juillet 2024', description: `Verrière 4 m × 2,75 m profils 40 mm noir mat. Pose 2 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '9 200 €', duration: '6 sem.', surface: '11 m²' }, quote: { text: 'Charenton-le-Pont, verrière atelier dans appart proche Paris 12e. Excellence finition.', author: 'Famille L.', context: 'Charenton centre' } }],
  localReviews: [
    { text: 'Charenton-le-Pont, verrière atelier dans appart proche Paris 12e. Excellence finition.', author: 'Famille L.', context: 'Charenton centre', rating: 5, date: 'Juillet 2024' },
    { text: 'Verrière toute hauteur loft Charenton. Soudures TIG meulées invisibles.', author: 'Hugo M.', context: 'Charenton bords Marne', rating: 5, date: 'Mars 2024' },
    { text: 'Pose 1 journée pavillon. Visserie apparente noire sur demande.', author: 'Famille R.', context: 'Charenton résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes voisines 94.', rows: [
    { communeSlug: 'saint-mande', communeName: 'Saint-Mandé', priceAvg: '1 200-1 800 €/m²', durationAvg: '5-7 sem.', note: 'Apparts haussmanniens' },
    { communeSlug: 'maisons-alfort', communeName: 'Maisons-Alfort', priceAvg: '1 100-1 700 €/m²', durationAvg: '5-7 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'creteil', communeName: 'Créteil', priceAvg: '1 100-1 600 €/m²', durationAvg: '5-7 sem.', note: 'Préfecture, copros récentes' },
  ] },
  localStats: [{ label: 'Verrières Charenton depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Délai moyen', value: '6 sem.' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible CSP+ Charenton proche Paris 12e.' },
}
