import type { PremiumCase } from './types'

export const portailsOise60Beauvais: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'oise-60',
  communeSlug: 'beauvais',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Portail — Beauvais 60', caption: 'Coulissant motorisé Came — pavillon Beauvais' },
  heroQuote: { text: 'Beauvais pavillon, coulissant motorisé silencieux. Pose 1 jour propre, équipe pro.', author: 'Famille L.', context: 'Beauvais centre' },
  cityGuide: { intro: `Beauvais (55 000 habitants, 60) préfecture Oise, ville mixte centre cathédrale + pavillons + zones d'activité. Demande équilibrée portails. AZ intervient depuis Bruyères-sur-Oise (95) en moins de 1h.`,
    sections: [
      { heading: 'Beauvais — préfecture Oise', body: `60% pavillons individuels, 30% copros, 10% centre historique cathédrale (zone ABF). Coulissant motorisé Came + battant dominants.` },
      { heading: 'Process ABF cathédrale', body: `Zone ABF cathédrale Saint-Pierre → dossier déclaration préalable + ABF (4-6 sem délai), respect prescriptions matériaux + hauteurs.` },
      { heading: 'Tarifs', body: `Coulissant pavillon : 5 200-7 500 €. Battant : 4 800-6 800 €. Autoportant : 7 500-11 000 €.` },
    ] },
  caseStudies: [{ title: 'Coulissant Came 5 m motorisé — pavillon Beauvais', location: 'Centre Beauvais', date: 'Juin 2024', description: `Remplacement portail bois ancien. Coulissant rail motorisé Came BX-241, photocellules + clignotant LED. Pose 1 jour, équipe AZ depuis Bruyères-sur-Oise.`, photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après' } }, metrics: { price: '6 200 €', duration: '7 sem.', surface: '5 m' }, quote: { text: 'Beauvais pavillon, coulissant motorisé silencieux. Pose 1 jour propre, équipe pro.', author: 'Famille L.', context: 'Beauvais centre' } }],
  localReviews: [
    { text: 'Beauvais pavillon, coulissant motorisé silencieux. Pose 1 jour propre, équipe pro.', author: 'Famille L.', context: 'Beauvais centre', rating: 5, date: 'Juin 2024' },
    { text: 'Battant pavillon double vantail. Compétitif vs concurrents Oise.', author: 'Famille D.', context: 'Beauvais nord', rating: 5, date: 'Mars 2024' },
    { text: 'Autoportant pavillon individuel. Sans rail au sol, propre.', author: 'Vincent T.', context: 'Beauvais sud', rating: 5, date: 'Septembre 2024' },
  ],
  crossCity: { intro: 'Portails communes voisines 60.', rows: [
    { communeSlug: 'compiegne', communeName: 'Compiègne', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Sous-préfecture historique' },
    { communeSlug: 'creil', communeName: 'Creil', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Mix pavillons + copros' },
    { communeSlug: 'meru', communeName: 'Méru', priceAvg: '5 200-7 500 €', durationAvg: '10-14 sem.', note: 'Pavillons résidentiel' },
  ] },
  localStats: [{ label: 'Portails Beauvais depuis 2020', value: '~6' }, { label: 'Note moyenne', value: '4,9 / 5' }, { label: 'Distance atelier AZ', value: '55 km' }],
  meta: { lastEditedAt: '2026-04-18', editor: 'Karim (chef de chantier)', internalNotes: 'Beauvais préfecture Oise, AZ intervient depuis Bruyères-sur-Oise.' },
}
