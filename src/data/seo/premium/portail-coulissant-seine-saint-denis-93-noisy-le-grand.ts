import type { PremiumCase } from './types'

export const portailCoulissantSeineSaintDenis93NoisyLeGrand: PremiumCase = {
  productSlug: 'portail-coulissant',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'noisy-le-grand',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail coulissant — Noisy-le-Grand 93', caption: 'Coulissant motorisé — copro Cité Descartes' },
  heroQuote: { text: 'Cité Descartes copro moderne, coulissant motorisé silencieux. Service complet.', author: 'Syndic professionnel', context: 'Cité Descartes, Noisy-le-Grand' },
  cityGuide: { intro: `Noisy-le-Grand (66 000 habitants, 93 est) abrite la Cité Descartes (campus universités) + nombreuses copros récentes 2000+. Demande croissante portails motorisés modernes.`,
    sections: [
      { heading: 'Noisy — copros récentes + Cité Descartes', body: `70% copros 2000+, 30% pavillons. Coulissant motorisé Came le standard.` },
      { heading: 'Tarifs', body: `Coulissant copro : 5 800-7 800 €. Délai 12-14 sem.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m — Cité Descartes', location: 'Cité Descartes, Noisy', date: 'Juillet 2024', description: `Remplacement portail défaillant copro 2008. Coulissant rail + portillon piéton motorisés.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 500 €', duration: '13 sem.', surface: '5 m + portillon' }, quote: { text: 'Cité Descartes copro moderne, coulissant motorisé silencieux. Service complet.', author: 'Syndic professionnel', context: 'Cité Descartes' } }],
  localReviews: [
    { text: 'Cité Descartes copro moderne, coulissant motorisé silencieux. Service complet.', author: 'Syndic professionnel', context: 'Cité Descartes, Noisy', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant pavillon Mont-d\'Est. Pose 1 journée propre.', author: 'Famille B.', context: 'Mont-d\'Est, Noisy', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon résidentiel. Sans rail, look top.', author: 'Famille D.', context: 'Centre Noisy', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails coulissants communes voisines 93 est.', rows: [
    { communeSlug: 'gagny', communeName: 'Gagny', priceAvg: '5 500-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons individuels' },
    { communeSlug: 'champs-sur-marne', communeName: 'Champs-sur-Marne (77)', priceAvg: '5 800-7 800 €', durationAvg: '10-14 sem.', note: 'Cité universitaire' },
    { communeSlug: 'neuilly-sur-marne', communeName: 'Neuilly-sur-Marne', priceAvg: '5 500-7 500 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
  ] },
  localStats: [{ label: 'Coulissants Noisy depuis 2020', value: '~9' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Part copros 2000+', value: '70 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Élodie (conseillère client)', internalNotes: 'Cible copros récentes Cité Descartes.' },
}
