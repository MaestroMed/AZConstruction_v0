import type { PremiumCase } from './types'

export const verriereAtelierParis75Paris6e: PremiumCase = {
  productSlug: 'verriere-atelier',
  deptSlug: 'paris-75',
  communeSlug: 'paris-6e',
  status: 'published',
  heroPhoto: { url: '/images/hero/atelier-facade.jpg', alt: 'Verrière atelier — Saint-Germain-des-Prés, Paris 6e', caption: 'Verrière 8 carreaux profil 40 mm noir mat — appart Saint-Sulpice' },
  heroQuote: { text: 'Verrière patine bronze pour matcher les ferronneries du 6e. Métier compagnon authentique, finitions premium.', author: 'Architecte d\'intérieur', context: 'Appartement Saint-Sulpice, 6e' },
  cityGuide: {
    intro: `Le 6e (Saint-Germain-des-Prés, Saint-Sulpice, Odéon, Luxembourg) est l'un des plus prestigieux arrondissements parisiens. Apparts haussmanniens 1880-1900, plafonds 3+ m, parquets point de Hongrie d'origine, clientèle CSP++ exigeante. Pour la verrière atelier, c'est un terrain premium.

Sur les 9 verrières livrées dans le 6e ces 4 dernières années, 100% étaient dans le cadre de rénovations pilotées par architecte d'intérieur.`,
    sections: [
      { heading: 'Le 6e — la verrière comme pièce d\'architecture', body: `Dans le 6e, la verrière n'est jamais un simple cloisonnement. C'est une pièce d'architecture qui doit s'intégrer à l'existant. Trame 6-8 carreaux 30×80 (proportions haussmanniennes), profils acier 40 mm noir mat satiné OU patine bronze antique sur-mesure pour matcher les ferronneries d'origine de l'immeuble. Visserie souvent apparente noire ou bronze sur demande architecte.` },
      { heading: 'Process et acheminement', body: `Apparts haussmanniens 6e ont des escaliers magnifiques mais étroits. Acheminement par cage avec modules pré-coupés à 1,40 m max. Bâches absolues sur parquet d'origine. Pose en 1-2 jours par 2 compagnons spécialisés. Soudure MIG visible meulée-finie sur demande architecte.` },
      { heading: 'Tarifs Paris 6e', body: `Verrière fixe 4 m² profils 40 mm noir mat : 6 200-8 200 €. Verrière 6-8 m² avec porte battante : 9 800-14 000 €. Verrière toute hauteur 10-14 m² (apparts hauts plafonds) : 16 000-24 000 €. Surcoût patine bronze sur-mesure +20%. Délai 5-7 semaines.` },
    ],
  },
  caseStudies: [{
    title: 'Verrière 8 carreaux patine bronze — appart Saint-Sulpice 130 m²',
    location: 'Rue Bonaparte, Paris 6e',
    date: 'Septembre 2024',
    description: `Verrière 5 m × 2,90 m, 8 carreaux 30×80, profils acier 40 mm patine bronze antique sur-mesure pour matcher les ferronneries 1885 de l'immeuble. Pose en 2 jours dans rénovation globale architecte d'intérieur. Parquet point de Hongrie d'origine intact à la livraison. Visserie apparente bronze sur demande.`,
    photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : cloison plâtre cuisine fermée' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : verrière patine bronze' } },
    metrics: { price: '12 800 €', duration: '7 semaines', surface: '14,5 m²' },
    quote: { text: 'Verrière patine bronze pour matcher les ferronneries du 6e. Métier compagnon authentique, finitions premium.', author: 'Architecte d\'intérieur', context: 'Saint-Sulpice' },
  }],
  localReviews: [
    { text: 'Verrière patine bronze pour matcher les ferronneries du 6e. Métier compagnon authentique, finitions premium.', author: 'Architecte d\'intérieur', context: 'Saint-Sulpice, 6e', rating: 5, date: 'Septembre 2024' },
    { text: 'Pose 2 jours dans haussmannien 1880, parquet point de Hongrie intact. Sérieux et précis.', author: 'Famille V.', context: 'Luxembourg, 6e', rating: 5, date: 'Mars 2024' },
    { text: 'Verrière toute hauteur 14 m² avec porte coulissante. Visserie apparente bronze, finition irréprochable.', author: 'Bernard L.', context: 'Odéon, 6e', rating: 5, date: 'Juin 2024' },
  ],
  crossCity: {
    intro: 'Verrières atelier dans les arrondissements parisiens centraux.',
    rows: [
      { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '1 400-2 200 €/m²', durationAvg: '5-7 sem.', note: 'Faubourg Saint-Germain' },
      { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '1 500-2 400 €/m²', durationAvg: '6-8 sem.', note: 'Périmètre Louvre' },
      { communeSlug: 'paris-5e', communeName: 'Paris 5e', priceAvg: '1 200-1 900 €/m²', durationAvg: '5-7 sem.', note: 'Quartier Latin' },
    ],
  },
  localStats: [
    { label: 'Verrières Paris 6e depuis 2020', value: '~9' },
    { label: 'Note moyenne 6e', value: '5,0 / 5' },
    { label: 'Part patine bronze sur-mesure', value: '70 %' },
  ],
  meta: { lastEditedAt: '2026-04-18', editor: 'Sophie (architecte conseil)', internalNotes: 'Cible CSP++ Saint-Germain. Différenciant : patine bronze sur-mesure, finition compagnon premium.' },
}
