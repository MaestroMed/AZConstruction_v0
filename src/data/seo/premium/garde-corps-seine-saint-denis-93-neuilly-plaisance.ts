import type { PremiumCase } from './types'

export const gardeCorpsSeineSaintDenis93NeuillyPlaisance: PremiumCase = {
  productSlug: 'garde-corps',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'neuilly-plaisance',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Garde-corps — Neuilly-Plaisance 93', caption: 'Barreaudage — pavillon Neuilly-Plaisance' },
  heroQuote: { text: 'Neuilly-Plaisance pavillon, garde-corps acier sobre. Pose 1 jour.', author: 'Famille B.', context: 'Neuilly-Plaisance centre' },
  cityGuide: { intro: `Neuilly-Plaisance (21 000 habitants, 93 est) ville résidentielle pavillonnaire CSP+ bord Marne + bois. Pavillons bourgeois + rares copros. Demande garde-corps équilibrée.`,
    sections: [
      { heading: 'Neuilly-Plaisance — bourgeoise bord Marne', body: `80% pavillons individuels CSP+, 20% copros. Acier barreaudage RAL 7016 + verre + acier dominants.` },
      { heading: 'Tarifs', body: `Acier barreaudage : 300-440 €/ml. Verre + acier : 420-600 €/ml.` },
    ] },
  caseStudies: [{ title: 'Garde-corps acier 12 ml — pavillon Neuilly-Plaisance', location: 'Centre Neuilly-Plaisance', date: 'Juin 2024', description: `Pavillon 1930 rénové. Barreaudage vertical RAL 7016 satiné. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '4 400 €', duration: '6 sem.', surface: '12 ml' }, quote: { text: 'Neuilly-Plaisance pavillon, garde-corps acier sobre. Pose 1 jour.', author: 'Famille B.', context: 'Neuilly-Plaisance centre' } }],
  localReviews: [
    { text: 'Neuilly-Plaisance pavillon, garde-corps acier sobre. Pose 1 jour.', author: 'Famille B.', context: 'Neuilly-Plaisance centre', rating: 5, date: 'Juin 2024' },
    { text: 'Verre + acier terrasse pavillon vue Marne. Vue préservée.', author: 'Famille R.', context: 'Neuilly-Plaisance bord Marne', rating: 5, date: 'Mars 2024' },
    { text: 'Cables inox contemporain. Métier.', author: 'Hugo P.', context: 'Neuilly-Plaisance résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Garde-corps communes voisines 93 est.', rows: [
    { communeSlug: 'neuilly-sur-marne', communeName: 'Neuilly-sur-Marne', priceAvg: '300-460 €/ml', durationAvg: '4-6 sem.', note: 'Bord Marne pavillons' },
    { communeSlug: 'gagny', communeName: 'Gagny', priceAvg: '280-440 €/ml', durationAvg: '4-6 sem.', note: 'Pavillons résidentiel' },
    { communeSlug: 'rosny-sous-bois', communeName: 'Rosny-sous-Bois', priceAvg: '280-420 €/ml', durationAvg: '4-6 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Garde-corps Neuilly-Plaisance depuis 2020', value: '~5' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part pavillons', value: '80 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Neuilly-Plaisance CSP+ bord Marne.' },
}
