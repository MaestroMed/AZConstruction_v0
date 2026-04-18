/**
 * Premium+ : /garde-corps-verre/paris-75/paris-15e
 *
 * STATUT : draft — sera invisible en prod tant que status === 'draft'
 *
 * Pour passer en prod :
 *   1. Remplacer tous les [À COMPLÉTER] par du contenu réel
 *   2. Uploader les photos référencées (heroPhoto, caseStudies.photos, etc.)
 *      dans /public/images/premium/garde-corps-verre/paris-15e/
 *   3. Passer status: 'draft' → 'published'
 *   4. Re-deploy
 */

import type { PremiumCase } from './types'

export const gardeCorpsVerreParis75Paris15e: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'paris-75',
  communeSlug: 'paris-15e',
  status: 'draft', // ← passer à 'published' une fois rempli

  heroPhoto: {
    url: '/images/premium/garde-corps-verre/paris-15e/hero.jpg', // [À UPLOADER]
    alt: 'Garde-corps verre feuilleté installé sur balcon haussmannien — Paris 15e',
    caption: 'Réalisation AZ Construction — Avenue de Versailles, Paris 15e',
  },

  heroQuote: {
    text: 'Pose impeccable sur 14 ml de balcon, le verre feuilleté donne une vue dégagée sur la Tour Eiffel.', // [À COMPLÉTER]
    author: 'Marie B.',
    context: 'Quartier Beaugrenelle, 15e',
  },

  // videoEmbedUrl: 'https://www.youtube.com/embed/...', // [OPTIONNEL]

  cityGuide: {
    intro: `[À COMPLÉTER — chapeau d'introduction du guide ville, 2-3 phrases]
Le 15e arrondissement de Paris combine architecture haussmannienne, immeubles modernes des années 70 et nouvelles tours du front de Seine. Chaque type d'immeuble impose ses propres contraintes pour la pose d'un garde-corps en verre. Voici notre retour d'expérience après XX chantiers livrés dans le 15e depuis 20XX.`,
    sections: [
      {
        heading: 'Architecture du 15e — quelles contraintes pour un garde-corps verre ?',
        body: `[À COMPLÉTER — 2-3 paragraphes sur les particularités locales]

Les balcons haussmanniens classés en zone protégée par les Bâtiments de France imposent un dialogue avec l'ABF...

Les immeubles modernes du Front de Seine, eux, offrent plus de liberté esthétique mais nécessitent de tenir compte des contraintes de copropriété — souvent un règlement de copropriété strict sur l'aspect extérieur visible depuis la rue.`,
      },
      {
        heading: 'Réglementation et démarches dans le 15e',
        body: `[À COMPLÉTER — DP / PLU local / spécificités 15e]

Toute modification d'aspect extérieur visible depuis l'espace public nécessite une déclaration préalable de travaux à la Mairie du 15e (rue Lecourbe). Délai d'instruction : 1 mois.

Pour les immeubles classés au titre du PLU patrimonial...`,
      },
      {
        heading: 'Particularités logistiques (accès, stationnement, livraison)',
        body: `[À COMPLÉTER — accès chantier 15e]

Le 15e est généralement bien desservi par notre camion, mais certaines rues étroites (autour de l'Île aux Cygnes par exemple) demandent une autorisation de stationnement temporaire à la Mairie.

Nos équipes connaissent bien les contraintes parking horodateur du 15e...`,
      },
      {
        heading: 'Délais et prix moyens observés dans le 15e',
        body: `[À COMPLÉTER — données chiffrées réelles]

Sur 20XX-20XX, nos chantiers garde-corps verre dans le 15e ont coûté en moyenne XXX €/ml posé, avec des délais de XX semaines entre devis signé et pose finale.

La fourchette varie selon : longueur (en dessous de 5 ml = surcoût mobilisation), accès chantier (étage élevé sans ascenseur monte-charges = +X%), choix des fixations.`,
      },
    ],
  },

  caseStudies: [
    {
      title: '[À COMPLÉTER — ex. Garde-corps verre toute hauteur — appartement R+5]',
      location: '[ex. Avenue Émile Zola, 15e]',
      date: '[ex. Mars 2024]',
      description: `[À COMPLÉTER — description du chantier en 3-5 phrases : contexte client, contrainte technique, choix esthétique, résultat]`,
      photos: {
        before: {
          url: '/images/premium/garde-corps-verre/paris-15e/case1-before.jpg',
          alt: 'Avant : balcon avec ancien garde-corps barreaudé rouillé',
        },
        after: {
          url: '/images/premium/garde-corps-verre/paris-15e/case1-after.jpg',
          alt: 'Après : garde-corps verre feuilleté 8+8 sur profilés inox',
        },
      },
      metrics: {
        price: '[ex. 8 400 € posé]',
        duration: '[ex. 5 semaines]',
        surface: '[ex. 12 ml]',
      },
      quote: {
        text: '[À COMPLÉTER — citation client après pose]',
        author: '[ex. Antoine R.]',
        context: '[ex. propriétaire R+5]',
      },
    },
    // Ajouter 1-2 case studies supplémentaires de la même façon
  ],

  localReviews: [
    {
      text: '[À COMPLÉTER — témoignage local 1]',
      author: 'Marie B.',
      context: 'Quartier Necker, 15e',
      rating: 5,
      date: '[ex. Juillet 2024]',
    },
    {
      text: '[À COMPLÉTER — témoignage local 2]',
      author: 'Jean-Philippe M.',
      context: 'Front de Seine, 15e',
      rating: 5,
      date: '[ex. Mai 2024]',
    },
    // 3 à 5 reviews recommandé
  ],

  crossCity: {
    intro: `Comparaison rapide des prix moyens et délais observés sur les communes voisines du 15e.`,
    rows: [
      { communeSlug: 'paris-1er', communeName: 'Paris 1er', priceAvg: '[À COMPLÉTER]', durationAvg: '[À COMPLÉTER]', note: 'Architecture haussmannienne stricte' },
      { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '[À COMPLÉTER]', durationAvg: '[À COMPLÉTER]', note: 'Voisin direct, contraintes ABF similaires' },
      { communeSlug: 'paris-16e', communeName: 'Paris 16e', priceAvg: '[À COMPLÉTER]', durationAvg: '[À COMPLÉTER]', note: 'Demande premium, fixations invisibles' },
    ],
  },

  localStats: [
    { label: 'Chantiers livrés depuis 2020', value: '[ex. 23 chantiers]' },
    { label: 'Note moyenne 15e', value: '[ex. 4.9/5]' },
    { label: 'Délai moyen', value: '[ex. 5 semaines]' },
  ],

  meta: {
    lastEditedAt: '[ex. 2026-04-18]',
    editor: '[ex. Alex / rédacteur]',
    internalNotes: 'Premier MVP Premium+. Référence pour les autres URLs. À itérer après 3 mois de Search Console.',
  },
}
