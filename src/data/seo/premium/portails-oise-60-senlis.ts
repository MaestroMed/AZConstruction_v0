import type { PremiumCase } from './types'

export const portailsOise60Senlis: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'senlis',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Senlis 60', caption: 'Battant double vantail — pavillon Senlis' },
  heroQuote: { text: 'Senlis pavillon centre médiéval ABF, battant acier RAL 7016. AZ pro.', author: 'Famille V.', context: 'Senlis centre médiéval' },
  cityGuide: { intro: `Senlis (16 000 habitants, 60) cité médiévale historique + royale. Zone ABF intégrale (cathédrale + remparts). Pavillons bourgeois + hôtels particuliers. Demande portails ABF.`,
    sections: [
      { heading: 'Senlis — cité médiévale ABF', body: `75% pavillons bourgeois centre ABF, 25% pavillons extérieur. Battant acier RAL 7016/9005 validé ABF dominant.` },
      { heading: 'Tarifs', body: `Battant pavillon ABF : 5 500-8 500 €. Coulissant : 6 500-9 500 €.` },
    ] },
  caseStudies: [{ title: 'Battant double vantail 4 m ABF — pavillon Senlis médiéval', location: 'Centre médiéval Senlis', date: 'Juillet 2024', description: `Pavillon bourgeois XVIIIe zone ABF. Battant acier RAL 7016 anthracite satiné (validé ABF). Dossier ABF 6 sem instruction. Pose 1 jour.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '7 500 €', duration: '12 sem. (ABF)', surface: '4 m' }, quote: { text: 'Senlis pavillon centre médiéval ABF, battant acier RAL 7016. AZ pro.', author: 'Famille V.', context: 'Senlis centre médiéval' } }],
  localReviews: [
    { text: 'Senlis pavillon centre médiéval ABF, battant acier RAL 7016. AZ pro.', author: 'Famille V.', context: 'Senlis centre médiéval', rating: 5, date: 'Juillet 2024' },
    { text: 'Coulissant motorisé pavillon extérieur Senlis. Silencieux.', author: 'Famille B.', context: 'Senlis extérieur', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier ABF Senlis géré par AZ. 12 sem instructions.', author: 'Famille R.', context: 'Senlis résidentiel', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60 sud.', rows: [
    { communeSlug: 'chantilly', communeName: 'Chantilly', priceAvg: '6 500-10 000 €', durationAvg: '12-16 sem.', note: 'Château + pavillons CSP++' },
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Mix copros + pavillons' },
    { communeSlug: 'crepy-en-valois', communeName: 'Crépy-en-Valois', priceAvg: '5 500-8 000 €', durationAvg: '10-14 sem.', note: 'Pavillons centre historique' },
  ] },
  localStats: [{ label: 'Portails Senlis depuis 2020', value: '~4' }, { label: 'Note moyenne', value: '5,0 / 5' }, { label: 'Part zone ABF', value: '75 %' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Senlis cité médiévale ABF intégrale.' },
}
