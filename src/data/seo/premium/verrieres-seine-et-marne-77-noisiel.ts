import type { PremiumCase } from './types'

export const verrieresSeineEtMarne77Noisiel: PremiumCase = {
  productSlug: 'verrieres',
  deptSlug: 'seine-et-marne-77',
  communeSlug: 'noisiel',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Noisiel 77', caption: 'Verrière 6 carreaux — pavillon Noisiel' },
  heroQuote: { text: 'Noisiel pavillon Marne-la-Vallée, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille N.', context: 'Noisiel centre' },
  cityGuide: { intro: `Noisiel (15 000 habitants, 77 ouest) ville Marne-la-Vallée avec ancienne chocolaterie Menier + pavillons années 80-90 + copros. Demande verrière en croissance.`,
    sections: [
      { heading: 'Noisiel — Marne-la-Vallée chocolaterie Menier', body: `70% pavillons individuels, 25% copros, 5% reconversion industrielle (Menier). Verrière 6-8 carreaux profil 40 mm noir mat dominante.` },
      { heading: 'Tarifs', body: `Verrière fixe 4 m² : 5 000-6 800 €. Avec porte battante : 8 000-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Verrière 6 carreaux — pavillon Noisiel', location: 'Noisiel centre', date: 'Juin 2024', description: `Pavillon 1985 rénové. Verrière 3,5 m × 2,6 m profils 40 mm noir mat. Pose 1 jour propre.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 400 €', duration: '5 sem.', surface: '9,1 m²' }, quote: { text: 'Noisiel pavillon Marne-la-Vallée, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille N.', context: 'Noisiel centre' } }],
  localReviews: [
    { text: 'Noisiel pavillon Marne-la-Vallée, verrière 6 carreaux propre. Pose 1 jour.', author: 'Famille N.', context: 'Noisiel centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verrière + porte battante. Soudures MIG invisibles.', author: 'Famille C.', context: 'Noisiel Luzard', rating: 5, date: 'Mars 2024' },
    { text: 'Atelier sérieux. Pose impeccable.', author: 'Famille O.', context: 'Noisiel résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Verrières communes Marne-la-Vallée.', rows: [
    { communeSlug: 'torcy', communeName: 'Torcy', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Pavillons ZAC' },
    { communeSlug: 'champs-sur-marne', communeName: 'Champs-sur-Marne', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Université + pavillons' },
    { communeSlug: 'lognes', communeName: 'Lognes', priceAvg: '1 000-1 500 €/m²', durationAvg: '5-7 sem.', note: 'Marne-la-Vallée' },
  ] },
  localStats: [{ label: 'Verrières Noisiel depuis 2020', value: '~3' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Noisiel Marne-la-Vallée pavillons + Menier.' },
}
