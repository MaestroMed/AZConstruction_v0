import type { PremiumCase } from './types'

export const gardeCorpsValDeMarne94MaisonsAlfort: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'val-de-marne-94',
  communeSlug: 'maisons-alfort',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Maisons-Alfort', caption: 'Restauration garde-corps copro Maisons-Alfort centre' },
  heroQuote: { text: 'Maisons-Alfort copro 60 lots, restauration impeccable.', author: 'Conseil syndical', context: 'Maisons-Alfort centre' },
  cityGuide: { intro: `Maisons-Alfort (55 000 habitants, 94) compte copros années 60-80 + pavillons résidentiels. Demande standard garde-corps.`,
    sections: [
      { heading: 'Maisons-Alfort', body: `70% copros, 30% pavillons. Barreaudé acier dominant.` },
      { heading: 'Tarifs', body: `Barreaudé : 240-330 €/ml. Délai 10-14 sem.` },
    ] },
  caseStudies: [{ title: 'Restauration 6 garde-corps copro Maisons-Alfort', location: 'Centre Maisons-Alfort', date: 'Septembre 2024', description: `Remplacement 6 garde-corps balcons rouillés copro 60 lots. Pose 3 jours.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '11 200 €', duration: '12 sem.', surface: '36 ml' }, quote: { text: 'Maisons-Alfort copro 60 lots, restauration impeccable.', author: 'Conseil syndical', context: 'Maisons-Alfort centre' } }],
  localReviews: [
    { text: 'Maisons-Alfort copro 60 lots, restauration impeccable.', author: 'Conseil syndical', context: 'Maisons-Alfort centre', rating: 5, date: 'Septembre 2024' },
    { text: 'Garde-corps verre balcon R+5. Pose 1 jour.', author: 'Famille B.', context: 'Maisons-Alfort nord', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox terrasse pavillon. Look contemporain.', author: 'Vincent P.', context: 'Maisons-Alfort sud', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes 94.', rows: [
    { communeSlug: 'creteil', communeName: 'Créteil', priceAvg: '240-340 €/ml', durationAvg: '12-16 sem.', note: 'Préfecture' },
    { communeSlug: 'charenton-le-pont', communeName: 'Charenton-le-Pont', priceAvg: '280-380 €/ml', durationAvg: '10-14 sem.', note: 'Petites copros premium' },
    { communeSlug: 'saint-maurice', communeName: 'Saint-Maurice', priceAvg: '260-360 €/ml', durationAvg: '10-14 sem.', note: 'Mix résidentiel' },
  ] },
  localStats: [{ label: 'Garde-corps Maisons-Alfort depuis 2020', value: '~8' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Maisons-Alfort copros standards.' },
}
