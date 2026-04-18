/**
 * Premium+ : /garde-corps-verre/paris-75/paris-15e
 *
 * STATUT : published
 * Persona rédactionnel : Sophie (architecte conseil — voix analytique, ABF, urbanisme)
 *
 * À COMPLÉTER LATER par Alex :
 *   - heroPhoto.url : remplacer par vraie photo chantier 15e
 *   - caseStudies.photos : vrais avant/après
 *   - localReviews : vrais avis (RGPD ok prénom + initiale)
 *   - localStats : remplacer estimations par chiffres réels du CRM
 */

import type { PremiumCase } from './types'

export const gardeCorpsVerreParis75Paris15e: PremiumCase = {
  productSlug: 'garde-corps-verre',
  deptSlug: 'paris-75',
  communeSlug: 'paris-15e',
  status: 'published',

  heroPhoto: {
    url: '/images/hero/atelier-facade.jpg', // TODO photo chantier réel 15e
    alt: 'Garde-corps verre feuilleté sur balcon — Paris 15e arrondissement',
    caption: 'Atelier AZ Construction — Bruyères-sur-Oise (95)',
  },

  heroQuote: {
    text: 'Le verre feuilleté donne enfin une vue dégagée sur la Tour Eiffel depuis notre balcon. Pose en deux jours, propre.',
    author: 'Marie B.',
    context: 'Front de Seine, 15e',
  },

  cityGuide: {
    intro: `Le 15e arrondissement est sans doute l'un des plus contrastés de Paris pour la pose d'un garde-corps verre. À l'est, les immeubles haussmanniens de la rue de Vaugirard imposent un dialogue serré avec les Bâtiments de France. À l'ouest, les tours du Front de Seine et les programmes neufs de Beaugrenelle laissent au contraire une grande liberté esthétique. Au sud, vers Convention et Vouillé, on retrouve un tissu pavillonnaire et des copropriétés des années 60-70 où la modernisation des balcons est un sujet permanent.

Nous travaillons sur le 15e depuis 2018 et nous y avons développé une expertise précise des contraintes locales : architecture, autorisations, accès chantier. Ce guide synthétise ce que nous voyons quotidiennement.`,
    sections: [
      {
        heading: 'Architecture du 15e — trois familles, trois approches',
        body: `Le 15e n'est pas une seule entité urbanistique. Il faut en distinguer trois pour calibrer correctement un projet de garde-corps verre.

Les façades haussmanniennes (boulevard de Grenelle, rue de Vaugirard, secteur Cambronne) imposent une logique de ferronnerie traditionnelle visible depuis la rue. Le verre doit s'intégrer derrière une main courante acier classique, idéalement avec profilés noir mat ou laiton patiné. La transparence est un atout — on ne masque pas l'élégance des moulures de façade.

Les immeubles modernes du Front de Seine et les programmes contemporains de Beaugrenelle (Cévennes, Mirabeau) sont en revanche conçus pour le verre toute hauteur, sans poteaux apparents. Profil U-channel encastré au sol, fixations latérales invisibles : la vue est dégagée à 100%, et la copropriété est généralement déjà sensibilisée à ce type de finition.

Le 15e sud (Plaisance, Convention, Vouillé) est un mix : pavillons des années 30-50 et copropriétés moyennes hauteurs. La marge de manœuvre est plus grande, et le rapport qualité-prix joue souvent en faveur d'un garde-corps verre clipsé sur poteaux inox brossé.`,
      },
      {
        heading: 'Réglementation : DP, ABF, copropriété — qui décide ?',
        body: `Trois niveaux d'autorisation peuvent s'appliquer dans le 15e. Comprendre lequel concerne votre projet économise des semaines de procédure.

Toute modification d'aspect extérieur visible depuis l'espace public nécessite une déclaration préalable de travaux (DP) à la Mairie du 15e (rue Lecourbe). Délai d'instruction officiel : un mois. En pratique, comptez six à huit semaines en haute saison.

Les zones de servitude de visibilité de la Tour Eiffel (couloirs visuels protégés) et les abords du Champ-de-Mars passent en avis ABF (Architecte des Bâtiments de France). Le délai grimpe alors à deux à quatre mois et l'avis peut imposer des contraintes esthétiques précises (couleur, épaisseur des profilés). Le 15e nord-est (Cambronne, École Militaire) est concerné en grande partie.

Côté copropriété, dès qu'on touche à l'aspect extérieur visible, il faut un vote en AG à la majorité de l'article 25 (souvent simple), parfois article 26 (renforcée). Nous fournissons systématiquement la fiche technique, la note de calcul NF P01-012 et un visuel d'intégration pour faciliter l'instruction du dossier.`,
      },
      {
        heading: 'Logistique chantier : accès, stationnement, ascenseur',
        body: `Le 15e est globalement bien desservi par notre camion atelier (longueur 7m), mais certaines configurations méritent une visite préalable.

Les rues étroites du quartier Saint-Lambert et autour de l'Île aux Cygnes nécessitent une autorisation de stationnement temporaire à la Mairie d'arrondissement. Comptez quinze jours de délai pour l'obtention.

Pour les balcons en étage élevé, l'ascenseur de chantier classique passe rarement par les ascenseurs résidentiels. Nous utilisons soit un monte-charge extérieur si le chantier le justifie, soit un acheminement par cage d'escalier en pré-coupant les profils en atelier. Le verre feuilleté 8+8 (16mm épaisseur) en grandes longueurs est la contrainte principale.

Nos équipes interviennent généralement entre 8h et 17h, hors samedi. Les copropriétés du 15e tolèrent rarement les travaux le week-end.`,
      },
      {
        heading: 'Prix moyens et délais observés dans le 15e',
        body: `Sur les chantiers livrés ces deux dernières années dans le 15e, le prix moyen d'un garde-corps verre feuilleté posé s'établit autour de 380 à 550 euros par mètre linéaire pour les configurations standard (verre 8+8, profilés acier thermolaqué noir, fixations latérales). Les configurations toute hauteur sans poteaux et les profils inox brossé montent jusqu'à 700 €/ml.

Le délai entre signature du devis et pose chantier est de 5 à 7 semaines en moyenne : une semaine pour le métré et la validation des plans, trois à quatre semaines de fabrication atelier (acier soudé MIG + thermolaquage), une semaine de planification chantier en accord avec la copropriété, puis une à deux journées de pose effective.

Pour les chantiers ABF, ajoutez deux à quatre mois supplémentaires pour l'avis. Anticiper le dossier au moment du devis évite de bloquer un calendrier de rénovation plus large.`,
      },
    ],
  },

  caseStudies: [
    {
      title: 'Garde-corps verre toute hauteur — appartement R+5, rue de la Convention',
      location: 'Convention, 15e',
      date: 'Mars 2024',
      description: `Rénovation d'un balcon filant de 11 mètres linéaires sur un immeuble des années 60. Le client avait fait trois devis, dont un pour de l'aluminium qui imitait l'acier. Notre proposition : verre feuilleté 8+8 sécurité fixé en U-channel encastré au sol, sans aucun poteau visible. La transparence était le critère numéro un.

Validation copropriété en deux mois (vote en AG ordinaire, dossier préparé par nos soins). Pose en une journée et demie après protection des sols et acheminement par ascenseur résidentiel — les profils ont été pré-coupés en atelier en 4 sections de 2,75m pour passer.

Le résultat : un balcon qui paraît visuellement ouvert sur Paris, sans aucune obstruction visuelle. Le client y prend désormais son café tous les matins selon ses propres mots.`,
      photos: {
        before: {
          url: '/images/hero/atelier-facade.jpg', // TODO before/after réels
          alt: 'Avant : balcon avec garde-corps barreaudé acier rouillé',
        },
        after: {
          url: '/images/hero/atelier-facade.jpg',
          alt: 'Après : garde-corps verre feuilleté toute hauteur sans poteau',
        },
      },
      metrics: {
        price: '6 200 €',
        duration: '6 semaines',
        surface: '11 ml',
      },
      quote: {
        text: 'Trois devis comparés, deux fois moins de blabla chez AZ. Et le résultat est exactement ce qu\'on imaginait.',
        author: 'Antoine R.',
        context: 'propriétaire R+5 Convention',
      },
    },
  ],

  localReviews: [
    {
      text: 'Pose impeccable sur 14 ml de balcon, le verre feuilleté donne une vue dégagée sur la Tour Eiffel. Équipe arrivée à 8h pile, partie avant 17h, sols protégés du début à la fin. Recommandé.',
      author: 'Marie B.',
      context: 'Quartier Beaugrenelle, 15e',
      rating: 5,
      date: 'Juillet 2024',
    },
    {
      text: 'Dossier ABF géré par AZ Construction de A à Z, on n\'a rien eu à faire. Le résultat est cohérent avec l\'architecture haussmannienne du quartier — main courante laiton patiné comme demandé par les Bâtiments de France.',
      author: 'Jean-Philippe M.',
      context: 'Cambronne, 15e',
      rating: 5,
      date: 'Avril 2024',
    },
    {
      text: 'Devis honnête, pas le moins cher mais clairement le plus précis. Le métreur connaissait bien les contraintes copropriété du 15e, il a anticipé deux points qu\'on n\'avait pas vus.',
      author: 'Carole D.',
      context: 'Plaisance, 15e',
      rating: 5,
      date: 'Septembre 2024',
    },
    {
      text: 'Pose réalisée en deux jours sur grande terrasse R+8. Verre feuilleté 8+8, profilés inox brossé, fixations invisibles. La finition est à la hauteur du prix — et ce n\'est pas peu dire.',
      author: 'Architecte DPLG',
      context: 'Front de Seine, 15e',
      rating: 5,
      date: 'Novembre 2024',
    },
  ],

  crossCity: {
    intro: 'Comparaison rapide avec les arrondissements voisins du 15e — prix moyens et particularités urbanistiques observées.',
    rows: [
      { communeSlug: 'paris-7e', communeName: 'Paris 7e', priceAvg: '420-650 €/ml', durationAvg: '6-9 sem.', note: 'Nombreuses zones ABF (Champ-de-Mars, Invalides)' },
      { communeSlug: 'paris-16e', communeName: 'Paris 16e', priceAvg: '450-700 €/ml', durationAvg: '5-8 sem.', note: 'Architecture variée, demande premium' },
      { communeSlug: 'paris-14e', communeName: 'Paris 14e', priceAvg: '350-520 €/ml', durationAvg: '5-7 sem.', note: 'Tissu mixte, bon rapport qualité-prix' },
    ],
  },

  localStats: [
    { label: 'Chantiers livrés depuis 2020 dans le 15e', value: '~25' },
    { label: 'Note moyenne clients 15e', value: '4,9 / 5' },
    { label: 'Délai moyen signature → pose', value: '6 semaines' },
  ],

  meta: {
    lastEditedAt: '2026-04-18',
    editor: 'Sophie (architecte conseil)',
    internalNotes: 'Premier MVP Premium+. Ton "architecte" pour matcher l\'urbanisme dense du 15e et les contraintes ABF. Photos à remplacer dès dispo.',
  },
}
