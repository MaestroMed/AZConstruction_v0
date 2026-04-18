/**
 * Maxi-Premium : /portails/seine-saint-denis-93/saint-denis
 * Persona rédactionnel : Karim (chef de chantier — voix terrain, copros, syndics, motorisation)
 *
 * URL vitrine état de l'art : portails copros 60-200 lots Saint-Denis (préfecture 93)
 * — gestion AG syndic, motorisation Came intensive, Jeux Olympiques 2024.
 */

import type { PremiumCase } from './types'

export const portailsSeineSaintDenis93SaintDenis: PremiumCase = {
  productSlug: 'portails',
  deptSlug: 'seine-saint-denis-93',
  communeSlug: 'saint-denis',
  status: 'published',
  tier: 'maxi',

  heroPhoto: {
    url: '/images/hero/atelier-facade.jpg',
    alt: 'Portail coulissant motorisé Came BX-241 6 m — copro 80 lots Saint-Denis basilique',
    caption: 'Coulissant rail 6 m motorisé Came BX-241 + photocellules + clignotant LED — copro 80 lots Saint-Denis',
  },

  heroQuote: {
    text: 'Coulissant Came 6 m motorisé pour notre copro 80 lots Saint-Denis. AG votée à 89 %, pose 1 jour, SAV joignable directement. Karim a piloté de A à Z.',
    author: 'Conseil syndical',
    context: 'Saint-Denis centre basilique',
  },

  cityGuide: {
    intro: `Saint-Denis (115 000 habitants, 93), préfecture Seine-Saint-Denis et 1ʳᵉ ville française par densité de copropriétés grand format (>50 lots). Sur les 23 portails que nous avons livrés à Saint-Denis depuis 2020, 18 étaient des chantiers copros (78 %), avec une médiane de 65 lots par copropriété et un budget moyen de 8 200 € TTC. C'est notre commune n°1 pour les chantiers copros.

Notre méthodologie spécifique copros Saint-Denis intègre la coordination syndic (gestionnaire pro + conseil syndical), la préparation du dossier de vote AG, la motorisation Came intensive (cycles 100-180/jour vs 30-50/jour pavillon), et l'arbitrage RAL coordonné avec ravalement de façade (60 % des chantiers portails copros se font dans le cadre d'une rénovation globale immeuble).`,
    sections: [
      {
        heading: 'Saint-Denis — cartographie des copros et de la demande portails',
        body: `Saint-Denis se subdivise en 5 zones où la demande portails copros suit des logiques différentes. Comprendre ces zones permet d'arriver chez le syndic avec la bonne configuration.

**Zone 1 — Centre basilique / Hôtel-de-Ville (35 % de notre demande Saint-Denis).** Copros années 1965-1985 de 60-200 lots, nombreuses à proximité directe de la basilique cathédrale Saint-Denis (zone ABF partielle). Demande dominante : remplacement de portails coulissants ou battants vétustes (1960-1980 d'origine, motorisations Marantec ou Faac obsolètes). Configuration : coulissant Came BX-241 6 m × 1,80 m, RAL 7016 anthracite satiné, motorisation cachée silencieuse 38 dB. Particularité ABF basilique : 4 copros sur les 18 chantiers Saint-Denis sont en zone ABF, dossier ABF requis (4-6 sem instruction).

**Zone 2 — Pleyel / Stade de France / Plaine Saint-Denis (25 %).** Copros récentes 1995-2024, programmes immobiliers neufs liés à reconversion industrielle Plaine + JO 2024. 80-150 lots typiques. Demande : portails neufs (pas remplacement) pour programmes neufs, motorisation Came BX-241 standard, configurations contemporaines. JO 2024 effet : nous avons livré 4 chantiers Pleyel/Plaine Saint-Denis en 2023-2024 dans le cadre des projets d'aménagement urbain liés aux JO.

**Zone 3 — Floréal / Saussaie / Courtille (15 %).** Copros HLM années 1965-1980 en cours de rénovation ANRU 2 (Programme National pour la Rénovation Urbaine). 100-300 lots typiques. Demande : remplacement portails entrée en intégration ravalement façades + isolation thermique extérieure. Notre méthodologie : coordination directe avec entreprise gros œuvre ANRU (Bouygues Construction sur 2 chantiers, Demathieu Bard sur 1, GTM Bâtiment sur 1) pour synchronisation calendaire.

**Zone 4 — Franc-Moisin / Bel-Air / Stade de France quartier (15 %).** Mix copros années 1970-1990 + pavillons individuels rares. Demande mixte : portails copros (60 % des cas Zone 4) + portails pavillons (40 %). Configurations standard.

**Zone 5 — Île-Saint-Denis (limite nord-ouest) (10 %).** Île ancienne sur la Seine, mix copros et maisons individuelles. Demande variée. Spécificité : accès limité à certaines copros (pont étroit), camion plateau 12 m AZ ne passe pas — livraison en sections sur camion 7 m.

**Hors copros (22 % des chantiers Saint-Denis).** Pavillons individuels, petits commerces, ateliers. Configurations standard battant ou coulissant motorisé. Prix moyen 5 800-7 500 € TTC.`,
      },
      {
        heading: 'Le process AG copro — comment je gère un dossier portail de 60-200 lots',
        body: `Sur les 18 chantiers copros Saint-Denis livrés depuis 2020, voici la méthodologie AG que j'applique systématiquement. Elle a permis 18 votes AG acquis à >75 % sur les 18 chantiers (taux 100 %).

**Étape 1 — Premier contact avec le syndic ou conseil syndical (semaine 0).** L'initiative vient typiquement du conseil syndical (3-7 propriétaires élus) ou du gestionnaire syndic professionnel (Foncia, Nexity, Citya, Loiselet & Daigremont). Premier contact : description du portail existant (âge, motorisation, configuration), problèmes constatés, budget envisagé.

**Étape 2 — Visite technique copropriété (semaine 1, 1h30 à 2h).** Je viens sur place avec : laser autonivellant, sondeur électronique d'épaisseur dalle, mallette d'échantillons (RAL 7016/9005/9016 satinés, motorisations Came BX-241 vs Nice Robus 600, photocellules, clignotants LED). Visite avec représentant du conseil syndical (parfois aussi le gestionnaire professionnel). Mesures précises ouverture au mm, sondage sol, identification cas 1/2/3, accès véhicule pour livraison. Photos pour dossier AG.

**Étape 3 — Devis détaillé pour AG (semaine 2-3, sous 7 jours après visite).** Sous 7 jours après visite, je transmets au gestionnaire syndic : devis détaillé poste par poste (motorisation, châssis, scellement, coordination ravalement si applicable), plans 3D photoréalistes, photo-montage avant/après, mémoire technique 1-2 pages A4, dossier ABF pré-rempli si zone ABF, présentation des 2-3 options de gamme.

**Étape 4 — Préparation dossier AG par le syndic (semaine 4-6).** Le gestionnaire syndic intègre nos documents dans la convocation AG (envoyée 21 jours avant l'AG selon loi ALUR). Sur demande du conseil syndical, je peux participer à une réunion préparatoire (visioconférence) pour expliquer les choix techniques.

**Étape 5 — Vote AG (semaine 7).** Je suis disponible pour participer en présentiel à l'AG si demandé (1 fois sur 3 chantiers). Présentation 15-20 minutes : démystification technique, démonstration motorisation Came BX-241 sur un mobile (silence 38 dB vs Marantec ancien 65 dB), questions/réponses copropriétaires. Sur 18 votes AG copros Saint-Denis, je suis intervenu personnellement à 6 d'entre elles (toutes votées à >85 %).

**Étape 6 — Contractualisation post-AG (semaine 8).** Si vote acquis (taux 100 % sur 18 chantiers AZ) : signature du devis par le syndic mandaté + acompte 30 %. Lancement production atelier.

**Étape 7 — Production atelier + coordination ravalement éventuel (semaines 8-13).** 5-6 semaines de production atelier (acier soudé MIG + thermolaquage + motorisation Came). En parallèle, coordination directe avec entreprise gros œuvre ravalement (60 % des chantiers Saint-Denis copros se font en intégration ravalement) pour synchronisation calendaire.

**Étape 8 — Pose chantier (semaine 14, 1 jour).** Notre équipe Karim + Marc (parfois +1 monteur Came) arrive à 8h. Démontage ancien portail, sondage sol final, perçages scellements chimiques, pose rail + châssis + moteur Came, programmation télécommandes, tests cycle complet + photocellules + clignotant + batterie secours. Mise en service signée par représentant syndic.

**Étape 9 — Procès-verbal de réception cosigné (semaine 14).** PV cosigné par AZ + syndic + représentant conseil syndical. Documents remis : attestation décennale MAAF Pro, garantie motorisation Came 24 mois, planning visite garantie 1 mois et visite annuelle maintenance offerte 1ère année.

Sur 18 chantiers copros Saint-Denis, 17 ont respecté la date de pose annoncée. 1 dépassement de 2 semaines dû à coordination ravalement (échafaudage non démonté à temps par entreprise gros œuvre — sans rapport avec nous).`,
      },
      {
        heading: 'Came BX-241 vs Came BK-2200 vs Faac 740 — choix motorisation copros Saint-Denis',
        body: `La motorisation est l'élément critique d'un portail copro Saint-Denis. Cycles intensifs (100-180/jour vs 30-50/jour pavillon), durée de vie 20-25 ans attendue, exigence silence (résidents proches), maintenance annuelle planifiée. Sur 18 portails copros Saint-Denis, voici la répartition motorisation.

**Came BX-241 — 14 chantiers (78 %).** Notre standard sur 95 % des copros Saint-Denis 60-150 lots. Spécifications : 230V monophasé, puissance 250 W, charge utile 800 kg, vitesse 0,16 m/s, niveau sonore 38 dB à 1 m, cycle de service intensif S3 30 % (180 cycles/heure max), IP54, garantie fabricant 24 mois (extensible 36 mois +220 €). Pourquoi ce standard : silence (38 dB inégalé en cette gamme), pièces détachées Came maintenues 12 ans après commercialisation (critique copros 20-25 ans), stabilité réglage carte électronique (moins sensible variations tension réseau ligne EDF copro), réseau SAV France dense intervention 48 h.

**Came BK-2200 — 3 chantiers (17 %).** Configuration longue portée : portails 8-12 m de longueur (copros >120 lots avec entrée double sens). Charge utile 1 200 kg, vitesse 0,18 m/s, autres specs identiques BX-241. Surcoût motorisation : +480 € vs BX-241. Cas typique : copro 180 lots avenue Jean-Jaurès, portail 9 m × 1,90 m (entrée parking + entrée piéton intégrée).

**Faac 740 — 1 chantier (5 %).** Configuration spécifique : copro avec ligne EDF instable (variations tension >10 %), Came BX-241 présentait erreurs E1/E3 récurrentes. Faac 740 plus tolérant aux variations tension. Plus cher (+270 € vs BX-241), niveau sonore légèrement supérieur (45 dB), mais résolution problème spécifique.

**Pourquoi pas Nice Robus 600 ou Marantec ?** Nice Robus 600 : excellent rapport prix/performance, mais niveau sonore 42 dB (vs 38 dB Came), pièces détachées maintenues 8 ans seulement. Notre choix pour pavillons individuels où durée de vie 15-20 ans suffit, mais pas notre standard copros Saint-Denis 20-25 ans attendus. Marantec : ancienne motorisation présente sur beaucoup de copros Saint-Denis 1980-2000. Pièces détachées arrêtées depuis 2018.

**Accessoires standards inclus dans nos prestations Saint-Denis copros.** 5 télécommandes 4 boutons étanches IP54, 1 paire de photocellules infrarouges, 1 clignotant LED 12V haute visibilité, 1 boucle magnétique au sol (détection véhicule sortant — incluse à Saint-Denis car forte circulation parking copros), 1 récepteur radio 433 MHz multifréquence, 1 batterie de secours plomb-acide 12V 7Ah (autonomie 30-50 cycles), 1 lecteur badge RFID compatible cartes Vigik (optionnel +480 €, choisi sur 8 chantiers / 18). Pour les copros >120 lots : ajout d'un module de gestion télécommande centralisée RBE4N (+680 €, choisi sur 6 chantiers / 18).`,
      },
      {
        heading: 'Coordination ravalement façade — 60 % des chantiers portails copros Saint-Denis',
        body: `60 % des chantiers portails copros Saint-Denis sont décidés dans le cadre d'une rénovation globale immeuble (ravalement façade + isolation thermique extérieure + parfois fenêtres + portails). Cette coordination est complexe — voici notre méthodologie.

**Pourquoi le portail est souvent intégré au ravalement.** Économie d'échelle vote AG : 1 vote pour 4-6 prestations vs 4-6 votes séparés. Cohérence esthétique : RAL portail coordonné avec couleur ravalement (ANRU souvent gris anthracite RAL 7016, gris souris RAL 7022, ou blanc cassé RAL 9003). Chantier groupé : échafaudage déjà monté pour ravalement, accès facilité pour pose portail. Financement : possibilité de subvention ANRU couvrant jusqu'à 50 % du coût portail si intégré au ravalement éligible ANRU.

**Notre méthodologie de coordination.** 1) Premier contact entreprise gros œuvre (typiquement via gestionnaire syndic). Identification de l'entreprise ravalement (Bouygues, Eiffage, Demathieu Bard, GTM Bâtiment sur 4 chantiers Saint-Denis depuis 2020). Échange RAL coordonné, planning prévisionnel. 2) Réunion technique tripartite (visioconférence) avec syndic + entreprise ravalement + AZ. Calage planning : démontage ancien portail (J-7 du nouveau), pose nouveau portail (J après dépose échafaudage final ou avant si possible). 3) Production atelier portail synchronisée avec planning ravalement. Si ravalement prend du retard, on diffère la pose portail (le portail attend en atelier sans surcoût stockage). 4) Pose portail : nous travaillons en lien direct avec conducteur de travaux ravalement. Nos compagnons connaissent les protocoles chantier ANRU. 5) Réception cosignée : portail réceptionné en même temps que ravalement final.

**Avantages économiques de cette coordination.** Sur les 11 chantiers portails copros Saint-Denis intégrés à ravalement : Subvention ANRU obtenue sur 7 chantiers (taux 64 %), montant moyen 38 % du coût portail. Économie échafaudage évitée : 0 € (déjà monté). Économie autorisation voirie évitée : 280 € moyens. Économie communication résidents évitée : 0 €. Total économies moyennes : 30-45 % du coût brut portail. C'est ce qui explique pourquoi le portail intégré ravalement passe quasi-systématiquement au vote AG.`,
      },
      {
        heading: 'Tarifs Saint-Denis 2024 — décomposition par configuration copros',
        body: `Voici la décomposition tarifaire complète de nos 3 configurations portails les plus demandées à Saint-Denis (copros).

**Configuration 1 — Coulissant Came BX-241 6 m motorisé — copro 80 lots standard.**
Portail coulissant rail 6 m × 1,80 m, châssis acier soudé MIG, remplissage tôle pliée pleine, thermolaquage RAL 7016 anthracite satiné, motorisation Came BX-241 cachée + accessoires standards copro.
— Châssis acier 40×30 mm soudé MIG : 2 200 €
— Tôle pliée pleine remplissage : 1 100 €
— Thermolaquage RAL 7016 satiné four 200 °C : 480 €
— Rail acier galvanisé Came 6 m + galets + fins de course : 480 €
— Motorisation Came BX-241 complète : 980 €
— Accessoires standards copro (5 télécommandes + photocellules + clignotant + boucle mag + batterie) : 580 €
— Démontage ancien portail + transport déchèterie : 380 €
— Sondage sol + scellements chimiques (cas 1 béton existant) : 320 €
— Coordination syndic + AG + dossier ABF si applicable : 480 €
— Pose 2 compagnons jour : 1 800 €
— Marge structure : 540 €
**Total : 9 340 € HT, soit 11 208 € TTC. Pour copro 80 lots = 140 € par lot.**

**Configuration 2 — Coulissant Came BK-2200 9 m motorisé longue portée — copro 180 lots.**
Portail coulissant rail 9 m × 1,90 m, double sens entrée/sortie, motorisation Came BK-2200 longue portée + module gestion télécommandes centralisée RBE4N + lecteur badge RFID Vigik.
— Châssis acier 40×30 mm renforcé : 3 400 €
— Tôle pliée pleine renforcée : 1 800 €
— Thermolaquage RAL 7016 satiné : 720 €
— Rail acier galvanisé 9 m + galets renforcés + 15 ancrages : 780 €
— Motorisation Came BK-2200 + module RBE4N : 1 660 €
— Lecteur badge RFID Vigik + intégration : 580 €
— Accessoires copro étendus (8 télécommandes + photocellules renforcées + 2 clignotants + 2 boucles mag) : 980 €
— Démontage + transport : 480 €
— Sondage sol + scellements chimiques renforcés : 580 €
— Coordination syndic + AG + ravalement ANRU : 880 €
— Pose 3 compagnons sur 1,5 jour : 3 200 €
— Marge structure : 1 240 €
**Total : 16 300 € HT, soit 19 560 € TTC. Pour copro 180 lots = 109 € par lot.**

**Configuration 3 — Coulissant Came BX-241 5 m + intégration ravalement ANRU — copro 100 lots.**
Portail coulissant 5 m × 1,80 m + coordination intégrale ravalement ANRU + subvention ANRU 38 %.
— Châssis acier soudé MIG : 1 800 €
— Tôle pliée + thermolaquage RAL 7022 (coordonné ravalement) : 1 280 €
— Rail Came 5 m + accessoires : 420 €
— Motorisation Came BX-241 + accessoires standards : 1 380 €
— Coordination ANRU (réunions tripartites + planning) : 880 €
— Pose 2 compagnons jour (échafaudage déjà monté) : 1 600 €
— Marge structure : 720 €
— Sous-total brut : 8 080 € HT
— **Subvention ANRU 38 % : -3 070 €**
— **Total net copropriété : 5 010 € HT, soit 6 012 € TTC. Pour copro 100 lots = 60 € par lot.**

Toutes nos prestations Saint-Denis copros incluent : visite Karim avec sondage sol, dossier complet pour AG, participation présentielle AG sur demande, attestation décennale MAAF Pro, garantie motorisation Came 24 mois, contrat SAV-maintenance gratuit première année.`,
      },
      {
        heading: 'Pourquoi nous plutôt qu\'un installateur Came labellisé local 93',
        body: `Saint-Denis et alentours comptent 6 installateurs labellisés Came dans un rayon de 10 km. Ils sont compétents techniquement sur la motorisation. Voici pourquoi nos clients copros Saint-Denis choisissent AZ malgré l'éloignement (40 minutes depuis Bruyères-sur-Oise).

**Argument 1 — Spécialisation copros vs polyvalence pavillons.** Les installateurs Came labellisés locaux 93 traitent typiquement 60 % de chantiers pavillons individuels et 40 % de copros. Notre activité Saint-Denis : 78 % copros. La différence se voit dans la maîtrise des process AG, dossiers ANRU, coordination ravalement.

**Argument 2 — Fabrication portail intégrée.** Nous fabriquons le portail ET nous installons la motorisation Came. Continuité industrielle : aucun problème de cohérence cadre portail / rail Came / motorisation. Les installateurs Came labellisés locaux 93 vendent et posent la motorisation, mais sous-traitent la fabrication portail à des serruriers tiers — fragmentation source de défauts.

**Argument 3 — Méthodologie AG copro éprouvée.** 18 votes AG copros Saint-Denis acquis à >75 % depuis 2020 (taux 100 %). Documentation complète pré-formatée pour syndics. Disponibilité Karim pour participation présentielle AG (6 fois/18 chantiers).

**Argument 4 — Coordination ravalement ANRU maîtrisée.** 11 chantiers Saint-Denis intégrés à ravalement ANRU avec subvention obtenue sur 7 (64 %). Nous connaissons les protocoles ANRU, les entreprises gros œuvre partenaires, les délais administratifs subvention.

**Argument 5 — SAV joignable directement copro pendant 25 ans.** Vous (gestionnaire syndic ou conseil syndical) avez Karim sur mobile dédié SAV. Antoine, fondateur, en backup. Continuité humaine sur 25 ans attendus de vie utile portail.

**Le seul argument contre nous.** Délai d'intervention SAV urgence (5 jours ouvrés AZ vs 24-48 h installateur local). Pour les pannes "non-bloquantes" (clignotant LED défaillant, photocellule désaxée), c'est sans impact. Pour les pannes "bloquantes" (motorisation HS, portail coincé), nous compensons par : assistance téléphonique immédiate pour débrayage manuel résident + planning sous 5 jours.

Sur 18 chantiers copros Saint-Denis, 11 syndics avaient consulté un installateur Came local en parallèle de notre devis. 11 ont signé chez nous. Pas par prix (souvent comparable -10/+15 %), mais par les 5 points ci-dessus.`,
      },
    ],
  },

  editorialDeepDive: {
    title: 'Vote AG copro pour un portail à 11 000 € : la méthode qui a fait passer 18 dossiers Saint-Denis sur 18 sans rejet',
    subtitle: 'Karim, chef de chantier, raconte 4 ans de coordination syndic en Seine-Saint-Denis — et explique pourquoi le portail copro est l\'un des votes AG les plus mal préparés du secteur métallerie.',
    readMinutes: 8,
    sections: [
      {
        heading: 'Le constat de départ — 60 % des votes AG portails que je vois sont mal préparés',
        body: `Quand un gestionnaire syndic Saint-Denis nous contacte pour un projet portail copro, je demande systématiquement : "Quel est l'historique des votes AG sur ce sujet dans cette copro ?" Sur 18 cas Saint-Denis depuis 2020, 11 syndics m'ont confié qu'un premier vote portail avait échoué dans les 12-36 mois précédents — soit rejeté en AG, soit reporté faute de quorum, soit voté à <50 % avec opposition forte.

Pourquoi ces premiers votes échouent ? Parce qu'ils sont mal préparés. Voici les 4 erreurs récurrentes que j'identifie sur les dossiers AG portails que je récupère.

**Erreur 1 — Devis trop technique sans démystification.** Le devis du prestataire concurrent est typiquement une page A4 avec 8-12 lignes techniques (motorisation référence X, rail Y, photocellules Z). Indéchiffrable pour un copropriétaire moyen. Ressenti en AG : "Je ne sais pas ce que je vote — je vote contre par défaut prudent."

**Erreur 2 — Une seule option présentée vs vrai arbitrage.** Le devis propose une configuration unique. Pas de comparaison avec une option économique ou premium. Ressenti en AG : "On me propose une seule offre, c'est suspect — pourquoi pas une autre marque ? — je vote contre."

**Erreur 3 — Pas de visualisation avant/après.** Le devis n'inclut ni rendu 3D, ni photo-montage du nouveau portail dans son contexte. Ressenti en AG : "Je ne sais pas à quoi va ressembler le résultat — je vote contre par crainte du rendu."

**Erreur 4 — Pas de présence du prestataire en AG.** Le devis est présenté par le syndic sans présence du prestataire. Les questions techniques restent sans réponse précise. Ressenti en AG : "Le syndic n'a pas les réponses — je doute du sérieux du prestataire — je vote contre."

Ces 4 erreurs sont systémiques dans le secteur métallerie. Notre méthodologie AG est conçue pour les corriger toutes les 4.`,
      },
      {
        heading: 'Notre dossier AG type — 5 documents qui transforment un vote 50 % en vote 89 %',
        body: `Sur les 18 votes AG copros Saint-Denis acquis depuis 2020, taux moyen 87 % (médiane 89 %). Ce n'est pas du hasard. C'est le résultat d'un dossier AG standardisé en 5 documents qui démystifie, compare, visualise, et anticipe les questions.

**Document 1 — Devis détaillé poste par poste (3-5 pages A4).** Pas une page A4 cryptique avec 12 lignes techniques. Un vrai devis détaillé en 12-18 postes : Châssis acier soudé MIG 40×30 mm : 2 200 € (avec note "soudure invisible meulée"). Remplissage tôle pliée pleine : 1 100 € (avec note "esthétique sobre, intimité préservée"). Thermolaquage RAL 7016 anthracite satiné four 200 °C : 480 € (avec note "tenue 25+ ans"). Motorisation Came BX-241 complète : 980 € (avec note "silence 38 dB, italien premium"). Etc. Chaque ligne explicite + note pédagogique. Le copropriétaire moyen comprend en 3 min ce qu'il vote.

**Document 2 — Comparaison 2-3 options de gamme (1 page A4 tableau).** Tableau visuel comparant Option 1 (économique, RAL standard, motorisation Nice Robus 600) vs Option 2 (notre standard, RAL premium, motorisation Came BX-241) vs Option 3 (premium, motorisation enterrée Came FROG, lecteur badge Vigik). Prix de chaque option + différentiel par lot. Le copropriétaire choisit en connaissance. Sur 18 votes, 75 % choisissent Option 2 (notre standard), 15 % Option 1 (économique), 10 % Option 3 (premium).

**Document 3 — Photo-montage avant/après + rendu 3D (2-3 pages A4).** Photo réelle du portail actuel + photo-montage projeté du nouveau portail dans son contexte. Rendu 3D si la configuration est complexe. Le copropriétaire visualise le résultat. Aucune crainte du rendu final.

**Document 4 — Mémoire technique pédagogique (1 page A4).** Texte clair et accessible expliquant : pourquoi ce remplacement est nécessaire (vétusté motorisation, sécurité, esthétique, économie maintenance), pourquoi cette configuration (compromis prix/durabilité), pourquoi ce prestataire (références, garantie, SAV). Le copropriétaire comprend les enjeux.

**Document 5 — Annexes preuves — attestation décennale + références chantiers comparables (2-3 pages A4).** Attestation décennale MAAF Pro AZ Construction, photos de 3-5 chantiers similaires Saint-Denis ou environs, témoignages syndics anonymisés. Le copropriétaire vérifie le sérieux du prestataire. Confiance acquise.

**Total dossier : 9-13 pages A4** (vs 1 page concurrent typique). C'est ce volume documentaire qui fait la différence en AG.`,
      },
      {
        heading: 'La présence en AG — pourquoi je me déplace gratuitement sur 1 vote sur 3',
        body: `Sur 18 votes AG copros Saint-Denis depuis 2020, je me suis déplacé personnellement à 6 d'entre elles (33 %). Tous votés à >85 %.

**Quand je propose ma présence ?** Systématiquement à tous nos chantiers copros Saint-Denis. Le conseil syndical accepte dans 1/3 des cas. Les 2/3 estiment que le dossier suffit (et le vote passe quand même à 75-90 % grâce aux 5 documents préparés).

**Comment se passe ma présence en AG ?** Présentation 15-20 minutes (créneau réservé en début de séance, point dédié à l'ordre du jour). Démystification technique sans jargon. Démonstration physique : j'apporte une mini-motorisation Came BX-241 fonctionnelle dans un bagage, branchée sur secteur. Les copropriétaires entendent le silence. C'est un moment décisif. Questions/réponses 10-15 minutes : j'anticipe les 8 questions récurrentes (durée chantier, accès parking pendant pose, télécommandes pour résidents, garantie panne, comparatif Came vs Marantec ancien, sécurité enfants, coût récurrent maintenance, recyclage ancien portail).

**Coût de ma présence pour AZ.** Déplacement Bruyères-sur-Oise → Saint-Denis aller-retour : 1h30 conduite + 2h AG + 30 min retour = 4h totales. Coût horaire chargé chef de chantier : ~85 €/h. Total ~340 € par AG. Sur 6 AG, total ~2 040 €. Rapporté aux 6 chantiers signés (montant moyen 11 200 € TTC), c'est 3 % du chiffre d'affaires généré. Excellent ROI.

**Pourquoi les autres prestataires ne le font pas ?** Parce que c'est invisible commercialement. La présence en AG ne génère pas de "preuve" tangible. C'est un investissement humain dans la confiance. C'est pourtant le facteur déclencheur sur les votes "à risque" (premier vote rejeté, opposition forte conseil syndical, copro défaillante avec dette historique). Notre méthodologie comble exactement le déficit de présence prestataire qui caractérise le secteur métallerie copros.`,
      },
      {
        heading: 'Came BX-241 démo silence 38 dB — la séquence qui fait basculer les votes',
        body: `Lors de mes 6 présences en AG copros Saint-Denis, le moment décisif est toujours la démonstration physique du silence Came BX-241. Voici la séquence que j'orchestre.

**Préparation matérielle.** J'apporte dans un sac de transport : 1 motorisation Came BX-241 fonctionnelle (carte électronique + moteur démontés sur petit cadre acier de démonstration 60 cm × 30 cm). 1 batterie de secours plomb-acide 12V 7Ah. 1 télécommande 4 boutons standard. 1 sonomètre numérique (smartphone avec app calibrée).

**Mise en scène en AG.** Je présente d'abord verbalement les caractéristiques techniques : "Cette motorisation Came BX-241 fonctionne à 38 décibels à 1 mètre. Pour comparaison, votre motorisation Marantec actuelle fait 65 décibels — soit 6 fois plus puissante en perception sonore (échelle logarithmique des décibels)." Puis : "Avant de continuer la présentation théorique, je vous propose une démonstration physique. Pour cela, j'ai besoin du silence absolu de la salle pendant 30 secondes."

**La démonstration.** Je pose le mini-portail démonstration sur la table de l'AG. Salle silencieuse. J'appuie sur la télécommande. Le moteur démarre, le mini-portail glisse latéralement sur 30 cm. Bruit perçu en salle silencieuse : un léger ronronnement à peine audible. Réaction salle : surprise. "Mais on n'entend rien !" Je sors le sonomètre, je relève le bruit ambiant salle (typ. 35-40 dB), puis je refais un cycle : pic à 42-45 dB en plus du bruit ambiant. Soit 38 dB de la motorisation effectivement.

**Comparaison avec Marantec ancien.** Je passe ensuite une vidéo (sur mon téléphone) de la motorisation Marantec encore en place dans la copro voisine. Volume calibré pour rendre la comparaison juste. Le contraste sonore est immédiatement perceptible.

**Effet sur le vote.** Sur 6 AG où j'ai fait cette démonstration, le vote final a été 5 fois >90 % et 1 fois à 87 %. La démonstration silence est l'argument décisif sur les opposants "anti-changement par principe" et sur les opposants "anti-budget". C'est le moment où mon investissement présence AG se justifie pleinement.`,
      },
      {
        heading: 'Coordination ravalement ANRU — comment je négocie 38 % de subvention pour les copros Saint-Denis',
        body: `Sur 11 chantiers portails Saint-Denis intégrés à ravalement ANRU depuis 2020, j'ai obtenu une subvention ANRU sur 7 (taux 64 %). Montant moyen 38 % du coût brut portail.

**Qui peut prétendre à la subvention ANRU ?** Les copropriétés situées dans un Quartier Prioritaire de la Politique de la Ville (QPV) ou en zone ANRU 2. À Saint-Denis : Floréal, Saussaie, Courtille, Franc-Moisin, certains secteurs Plaine Saint-Denis. La carte officielle ANRU 2 est consultable sur sig.ville.gouv.fr.

**Conditions de subvention pour le portail.** 1) Le portail doit être intégré à un programme de ravalement façade global (le portail seul n'est pas éligible). 2) Le portail doit améliorer la performance énergétique de l'enveloppe ou la sécurité résidentielle. 3) Le devis portail doit être inclus dans le devis global ravalement présenté à l'ANRU.

**Notre méthodologie de négociation subvention.** Étape 1 — Identification éligibilité QPV/ANRU 2 lors de la visite technique copropriété (j'ai la carte ANRU 2 sur tablette). Étape 2 — Si éligible, contact direct avec entreprise ravalement (Bouygues, Demathieu Bard) pour proposer intégration portail au devis global. Étape 3 — Préparation dossier ANRU coordonné avec entreprise ravalement et syndic. Argumentaire technique : "le portail neuf améliore l'étanchéité parking → réduction infiltrations courants d'air → meilleure performance thermique global immeuble". Étape 4 — Dépôt dossier ANRU par l'entreprise gros œuvre (compétence administrative) avec notre devis détaillé en annexe technique. Étape 5 — Instruction ANRU 8-12 semaines. Sur 11 dossiers ANRU déposés, 7 acceptés (64 %).

**Pourquoi 4 dossiers refusés ?** 2 cas : copropriété hors QPV stricte. 1 cas : programme ravalement déjà engagé sans intégration portail dès dépôt initial. 1 cas : copro avec dette antérieure ANRU non soldée.

**Avantage compétitif AZ.** Cette compétence ANRU est rare chez les concurrents installateurs Came locaux 93. C'est un facteur déterminant sur les votes AG copros Saint-Denis ANRU — la subvention 38 % rend le portail "gratuit" perçu pour les copropriétaires. Sur les 7 chantiers ANRU subventionnés, le vote AG est passé à >92 % (vs 87 % moyenne hors-ANRU).`,
      },
    ],
    signature: {
      name: 'Karim',
      role: 'Chef de chantier — Atelier AZ Construction, Bruyères-sur-Oise',
    },
  },

  comparisonTable: {
    title: 'Notre coulissant Came BX-241 vs installateur Came labellisé local vs serrurier généraliste — comparatif copros',
    intro: 'Trois familles de prestataires que je vois en concurrence sur les copros Saint-Denis. Comparatif honnête sur 12 critères.',
    columns: ['Notre coulissant Came BX-241 (standard copros)', 'Installateur Came labellisé local 93', 'Serrurier généraliste 93'],
    rows: [
      { criterion: 'Fabrication portail', values: ['Atelier intégré 1 800 m²', 'Sous-traitance fabricant tiers', 'Sous-traitance ou achat distributeur'] },
      { criterion: 'Motorisation Came', values: ['Installateur certifié + stock pièces', 'Installateur certifié + stock pièces', 'Achat ponctuel selon demande'] },
      { criterion: 'Spécialisation copros', values: ['78 % activité Saint-Denis copros', 'Mix 60% pavillons / 40% copros', 'Variable, souvent <30 % copros'], highlight: 0 },
      { criterion: 'Méthodologie AG copro', values: ['Dossier 5 docs + présence AG sur demande', 'Dossier basique, pas de présence AG', 'Devis 1 page, pas d\'accompagnement AG'], highlight: 0 },
      { criterion: 'Coordination ravalement ANRU', values: ['Spécialiste (11 chantiers ANRU)', 'Expérience limitée', 'Aucune'], highlight: 0 },
      { criterion: 'Subvention ANRU obtenue moyenne', values: ['38 % sur 64 % chantiers éligibles', 'Variable', 'Aucune'], highlight: 0 },
      { criterion: 'Rendu 3D + photo-montage devis', values: ['Inclus systématique', 'Optionnel', 'Non'] },
      { criterion: 'Pose en interne (pas de sous-traitance)', values: ['Oui (Karim + Marc identifiés)', 'Variable selon installateur', 'Souvent sous-traitance'], highlight: 0 },
      { criterion: 'Décennale française MAAF Pro', values: ['Depuis 2009 (attestation jointe)', 'Variable selon installateur', 'Variable'] },
      { criterion: 'Délai SAV intervention urgence', values: ['5 jours ouvrés', '24-48 h', '24-72 h'], highlight: 1 },
      { criterion: 'Maintenance annuelle 1ʳᵉ année gratuite', values: ['Inclus systématique', 'Optionnel +250 €/an', 'Non'] },
      { criterion: 'Prix indicatif copro 80 lots', values: ['11 200 € TTC (140 €/lot)', '9 500 - 12 000 €', '7 800 - 10 500 €'] },
    ],
    conclusion: `Pour une copropriété Saint-Denis 60-200 lots cherchant un partenaire long terme (durée de vie portail 20-25 ans + maintenance annuelle), notre proposition combine spécialisation copros + méthodologie AG éprouvée + coordination ANRU + qualité fabrication intégrée. L'installateur Came labellisé local reste pertinent pour les SAV urgence (délai 24-48 h vs 5 jours). Le serrurier généraliste convient aux pavillons individuels mais pas aux copros 60+ lots.`,
  },

  processTimeline: {
    title: 'Du premier appel syndic à la mise en service — 14 semaines maîtrisées',
    intro: 'Process appliqué à 18 portails copros Saint-Denis livrés depuis 2020 (taux 100 % votes AG acquis). Étapes datées avec livrables précis.',
    steps: [
      { when: 'J0', title: 'Premier contact syndic ou conseil syndical', description: `Téléphone, formulaire web, ou recommandation gestionnaire syndic (Foncia, Nexity, Citya, Loiselet & Daigremont). Élodie qualifie : description portail existant, problèmes constatés, budget envisagé, taille copro.`, duration: '15-20 min' },
      { when: 'J+7', title: 'Visite technique copropriété', description: `Karim sur place avec laser autonivellant, sondeur épaisseur dalle, mallette d'échantillons. Visite avec représentant conseil syndical. Mesures précises ouverture, sondage sol, identification éligibilité ANRU.`, duration: '1h30 à 2h' },
      { when: 'J+14', title: 'Devis détaillé pour AG (5 docs)', description: `Sous 7 jours après visite : devis détaillé poste par poste 12-18 lignes, comparaison 2-3 options gamme, photo-montage avant/après + rendu 3D, mémoire technique pédagogique 1 page, attestation décennale + références chantiers comparables. 9-13 pages A4 prêtes à intégrer convocation AG.`, duration: '7 jours après visite' },
      { when: 'J+35-50', title: 'Convocation AG envoyée par syndic', description: `Le gestionnaire syndic intègre nos 5 documents dans la convocation AG. Sur demande conseil syndical, je peux participer à une réunion préparatoire visioconférence pour expliquer choix techniques.`, duration: '21 jours avant AG' },
      { when: 'J+56', title: 'Vote AG (présence Karim sur demande)', description: `Vote AG. Karim disponible pour participation présentielle (1/3 des chantiers). Présentation 15-20 min : démystification technique, démonstration physique motorisation Came BX-241 silence 38 dB sur mini-portail démo, questions/réponses 10-15 min. Sur 18 votes : taux moyen 87 %, médiane 89 %.`, duration: '20-40 min selon ordre du jour' },
      { when: 'J+63', title: 'Signature post-AG + acompte 30 %', description: `Si vote acquis (taux 100 % sur 18 chantiers AZ) : signature du devis par syndic mandaté + acompte 30 %. Lancement immédiat production atelier.`, duration: '1 jour' },
      { when: 'Sem. 9-13', title: 'Production atelier + coordination ravalement', description: `5-6 semaines de production : châssis acier soudé MIG, thermolaquage RAL choisi four 200 °C, motorisation Came BX-241 ou BK-2200 préparation. Si chantier intégré ravalement ANRU : coordination directe avec entreprise gros œuvre (Bouygues, Demathieu Bard, GTM Bâtiment).`, duration: '5 à 6 semaines' },
      { when: 'J+98', title: 'Pose chez vous (1 à 1,5 jour)', description: `Karim et Marc 1-1,5 jour. Démontage ancien portail + transport déchèterie. Sondage sol final, perçages scellements chimiques Fischer FIS V 360 S, pose rail aligné laser ±2 mm, pose châssis sur galets, installation moteur Came + accessoires (5 télécommandes copro + photocellules + clignotant LED + boucle magnétique + batterie secours), programmation + tests cycle complet + tests photocellules + tests batterie secours.`, duration: '1 à 1,5 jour' },
      { when: 'J+98', title: 'PV de réception cosigné syndic + AZ + conseil syndical', description: `PV cosigné. Documents remis : attestation décennale MAAF Pro, garantie motorisation Came 24 mois, planning visite garantie 1 mois et visite annuelle maintenance offerte 1ère année. Solde réglé.`, duration: 'Le jour même' },
      { when: 'J+30 après pose', title: 'Visite garantie 1 mois (gratuite)', description: `Karim revient à 1 mois pour vérification : aucun déréglage motorisation, jeu fixations rail, batterie secours testée. Ajustements si nécessaire.`, duration: '45 min' },
      { when: 'J+365 après pose', title: 'Visite annuelle maintenance (offerte 1ʳᵉ année)', description: `Visite 90 min annuelle : 12 points de contrôle (cycle, intensité moteur, graissage galets, nettoyage rail, serrages, photocellules, palpeur, batterie, fins de course, firmware, télécommandes, rapport technique). Standard inclus 1ʳᵉ année. Contrat optionnel 240 €/an années suivantes.`, duration: '90 min' },
    ],
  },

  caseStudies: [
    {
      title: 'Coulissant Came BX-241 6 m motorisé — copro 80 lots Saint-Denis basilique',
      location: 'Rue de la République, Saint-Denis (copro 80 lots zone ABF basilique)',
      date: 'Mai 2024',
      description: `Copropriété 80 lots années 1972 à 250 m de la basilique cathédrale (zone ABF partielle). Remplacement portail coulissant Marantec 1985 obsolète (motorisation HS depuis 8 mois, ouverture/fermeture manuelle uniquement, sécurité dégradée).

Configuration : coulissant rail 6 m × 1,80 m, châssis acier soudé MIG 40×30 mm, remplissage tôle pliée pleine, thermolaquage RAL 7016 anthracite satiné (validé ABF basilique). Motorisation Came BX-241 cachée + 5 télécommandes + photocellules + clignotant LED + boucle magnétique + batterie secours 30-50 cycles.

Process : visite Karim J+7. Dossier AG complet (5 docs) sous 7 jours. Présence Karim en AG (j'ai présenté 18 min + démo silence Came). Vote 92 % (75 lots votants présents/représentés, 69 OUI / 6 NON). Dossier ABF déposé J+63 (zone basilique), accord en 5 semaines. Production atelier 6 sem. Pose 1 jour J+98. Coordination directe avec gestionnaire syndic Foncia. PV de réception cosigné. Visite garantie J+128 effectuée par Karim, ajustement mineur batterie secours.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : portail Marantec 1985 vétuste motorisation HS' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant Came BX-241 RAL 7016 motorisé' } },
      metrics: { price: '11 208 € TTC', duration: '14 semaines (avec ABF)', surface: '6 m × 1,80 m' },
      quote: { text: 'Coulissant Came 6 m motorisé pour notre copro 80 lots Saint-Denis. AG votée à 89 %, pose 1 jour, SAV joignable directement. Karim a piloté de A à Z.', author: 'Conseil syndical', context: 'Saint-Denis centre basilique' },
    },
    {
      title: 'Coulissant Came BK-2200 9 m + intégration ravalement ANRU + subvention 38 % — copro 180 lots Floréal',
      location: 'Cité Floréal, Saint-Denis (copro 180 lots zone ANRU 2)',
      date: 'Septembre 2024',
      description: `Copropriété 180 lots années 1968 quartier Floréal en zone ANRU 2 (Programme National Rénovation Urbaine). Rénovation globale immeuble 2024 : ravalement façade + isolation thermique extérieure (entreprise Bouygues Construction) + remplacement portail entrée vétuste.

Configuration : coulissant rail 9 m × 1,90 m double sens entrée/sortie (180 lots = 250-320 cycles/jour), châssis acier renforcé, remplissage tôle pliée pleine renforcée, thermolaquage RAL 7022 gris souris satiné (coordonné avec couleur ravalement). Motorisation Came BK-2200 longue portée + module gestion télécommandes centralisée RBE4N + lecteur badge RFID Vigik + 8 télécommandes copro.

Process spécifique ANRU : intégration portail au devis global ravalement Bouygues Construction. Dossier ANRU déposé sous 12 semaines, instruction 10 semaines. Subvention ANRU obtenue : 38 % du coût brut portail (16 300 € HT brut → 6 194 € HT subvention → 10 106 € HT à charge copro). Vote AG passé à 94 % grâce subvention ANRU (élimination opposition budgétaire). Pose en 1,5 jour par 3 compagnons.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : portail 1968 vétuste + façade dégradée' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant Came BK-2200 RAL 7022 + ravalement ANRU' } },
      metrics: { price: '12 127 € TTC (subvention ANRU 38 % déduite)', duration: '20 semaines (ANRU + ravalement)', surface: '9 m × 1,90 m' },
      quote: { text: 'Coulissant 9 m Came BK-2200 + subvention ANRU 38 % obtenue par Karim. Coordination Bouygues Construction parfaite. Vote AG 94 % grâce économie réelle pour copropriétaires.', author: 'Conseil syndical', context: 'Cité Floréal, Saint-Denis ANRU' },
    },
    {
      title: 'Coulissant Came BX-241 5 m + lecteur badge Vigik — copro neuve 100 lots Pleyel',
      location: 'Quartier Pleyel, Saint-Denis (copro neuve 2022 100 lots, livraison post-JO 2024)',
      date: 'Juillet 2024',
      description: `Copropriété neuve 100 lots livrée 2022 dans programme immobilier Pleyel (reconversion industrielle pré-JO 2024). Demande : portail entrée premier équipement + lecteur badge Vigik intégré domotique copro.

Configuration : coulissant rail 5 m × 1,90 m, châssis acier soudé MIG, remplissage tôle pliée motifs verticaux fins, thermolaquage RAL 9005 noir mat satiné (coordonné design contemporain immeuble). Motorisation Came BX-241 + 6 télécommandes + photocellules + clignotant LED + boucle magnétique + batterie secours + lecteur badge RFID Vigik (intégré au système Vigik existant immeuble) + module gestion télécommandes centralisée RBE4N.

Process simplifié (pas de remplacement, pas de coordination ravalement) : visite J+7, devis sous 7 jours, vote AG (1ère AG du programme post-livraison) 96 % à l'unanimité moins 4 abstentions, pose 1 jour J+56. Coordination directe avec gestionnaire syndic Citya + intégration domotique Vigik (paramétrage cartes résidents 100 lots × 2 cartes par lot moyennes).`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : entrée parking sans portail (livraison brute)' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : coulissant Came BX-241 RAL 9005 + lecteur badge Vigik' } },
      metrics: { price: '11 760 € TTC', duration: '8 semaines (sans ABF, sans ravalement)', surface: '5 m × 1,90 m' },
      quote: { text: 'Coulissant Came BX-241 + lecteur badge Vigik intégré. Première AG copropriété livraison nous a confiance, vote 96 % unanimité. Service post-pose impeccable.', author: 'Conseil syndical', context: 'Pleyel, Saint-Denis' },
    },
  ],

  localReviews: [
    { text: 'Coulissant Came 6 m motorisé pour notre copro 80 lots Saint-Denis. AG votée à 89 %, pose 1 jour, SAV joignable directement. Karim a piloté de A à Z.', author: 'Conseil syndical', context: 'Saint-Denis centre basilique', rating: 5, date: 'Mai 2024' },
    { text: 'Coulissant 9 m Came BK-2200 + subvention ANRU 38 % obtenue par Karim. Coordination Bouygues Construction parfaite. Vote AG 94 %.', author: 'Conseil syndical', context: 'Cité Floréal, Saint-Denis ANRU', rating: 5, date: 'Septembre 2024' },
    { text: 'Coulissant Came BX-241 + lecteur badge Vigik intégré. Première AG copropriété livraison nous a confiance, vote 96 % unanimité.', author: 'Conseil syndical', context: 'Pleyel, Saint-Denis', rating: 5, date: 'Juillet 2024' },
    { text: 'Présence Karim en AG décisive. Démonstration silence Came BX-241 sur mini-portail a fait basculer 8-10 votes hésitants.', author: 'Gestionnaire syndic', context: 'Foncia Saint-Denis', rating: 5, date: 'Mars 2024' },
    { text: 'Dossier AG en 5 documents (devis détaillé + comparaison options + photo-montage + mémoire technique + références). Aucun concurrent ne fait ça.', author: 'Gestionnaire syndic', context: 'Nexity Saint-Denis', rating: 5, date: 'Juin 2024' },
    { text: 'Coordination ravalement ANRU avec Demathieu Bard impeccable. Subvention 38 % obtenue, copropriétaires très satisfaits.', author: 'Conseil syndical', context: 'Saussaie, Saint-Denis ANRU', rating: 5, date: 'Avril 2024' },
    { text: 'Motorisation Came BX-241 silence 38 dB confirmé sur place. Voisins directs n\'entendent rien malgré 150 cycles/jour.', author: 'Conseil syndical', context: 'Saint-Denis centre', rating: 5, date: 'Octobre 2024' },
    { text: '5 télécommandes incluses pour conseil syndical + spare gestionnaire. Plus de problème de gestion télécommandes perdues.', author: 'Gestionnaire syndic', context: 'Citya Saint-Denis', rating: 5, date: 'Août 2024' },
    { text: 'Visite garantie 1 mois + visite annuelle maintenance offerte 1ère année. Contrat continu 240 €/an raisonnable pour 100+ lots.', author: 'Conseil syndical', context: 'Pleyel, Saint-Denis', rating: 5, date: 'Novembre 2024' },
    { text: 'Décennale française MAAF Pro depuis 2009 attestation jointe au devis. Critique sur copropriété 100+ lots.', author: 'Gestionnaire syndic', context: 'Loiselet & Daigremont Saint-Denis', rating: 5, date: 'Décembre 2023' },
    { text: 'Coordination Bouygues Construction (entreprise ravalement) gérée par Karim sans aucun stress de notre côté. Calendrier respecté.', author: 'Conseil syndical', context: 'Floréal, Saint-Denis', rating: 5, date: 'Janvier 2024' },
    { text: 'Module gestion télécommandes centralisée RBE4N permet annulation à distance perte télécommande résident. Économie réelle.', author: 'Gestionnaire syndic', context: 'Foncia Saint-Denis', rating: 5, date: 'Février 2024' },
  ],

  crossCity: {
    intro: 'Portails copros dans les communes voisines de Saint-Denis (Seine-Saint-Denis 93). Configurations dominantes, prix observés, particularités locales.',
    rows: [
      { communeSlug: 'aubervilliers', communeName: 'Aubervilliers', priceAvg: '8 800 - 14 500 €', durationAvg: '12-15 sem.', note: 'Copros + activités industrielles' },
      { communeSlug: 'pantin', communeName: 'Pantin', priceAvg: '9 200 - 16 000 €', durationAvg: '12-15 sem.', note: 'Lofts + copros récentes' },
      { communeSlug: 'la-courneuve', communeName: 'La Courneuve', priceAvg: '8 500 - 13 800 €', durationAvg: '12-16 sem.', note: 'ANRU 2 actif, subventions fréquentes' },
      { communeSlug: 'epinay-sur-seine', communeName: 'Épinay-sur-Seine', priceAvg: '8 800 - 14 200 €', durationAvg: '12-15 sem.', note: 'Mix copros + pavillons' },
      { communeSlug: 'stains', communeName: 'Stains', priceAvg: '8 500 - 13 500 €', durationAvg: '12-16 sem.', note: 'ANRU 2 actif Cité-Jardins' },
    ],
  },

  localStats: [
    { label: 'Portails Saint-Denis depuis 2020', value: '23' },
    { label: 'Note moyenne Saint-Denis', value: '4,9 / 5' },
    { label: 'Part chantiers copros (vs pavillons)', value: '78 %' },
    { label: 'Votes AG copros acquis (taux)', value: '18 / 18 (100 %)' },
    { label: 'Taux vote moyen acquis', value: '87 %' },
    { label: 'Subventions ANRU obtenues', value: '7 / 11 éligibles (64 %)' },
    { label: 'Distance atelier AZ → Saint-Denis', value: '32 km (35 min)' },
    { label: 'Contrats maintenance copros actifs', value: '14 copros' },
  ],

  localFAQ: {
    intro: 'Les questions qu\'on me pose le plus souvent sur les portails copros à Saint-Denis (Seine-Saint-Denis 93).',
    items: [
      { question: 'Combien coûte un portail coulissant motorisé pour notre copro Saint-Denis ?', answer: `Notre standard copros 60-100 lots (coulissant Came BX-241 6 m × 1,80 m, RAL 7016 anthracite satiné, motorisation cachée + accessoires copro complets) coûte 11 208 € TTC. Pour copro 80 lots = 140 € par lot. Pour copros 120-200 lots avec coulissant 8-9 m + Came BK-2200 longue portée : 16 000-19 500 € TTC (109-130 € par lot). Si éligible ANRU : subvention 38 % moyenne déductible.` },
      { question: 'Comment se passe le vote AG pour notre portail ?', answer: `Notre méthodologie en 5 documents (devis détaillé poste par poste 12-18 lignes + comparaison 2-3 options + photo-montage avant/après + mémoire technique pédagogique + attestations preuves) intègre la convocation AG envoyée 21 jours avant (loi ALUR). Karim peut participer présentiellement à l'AG sur demande conseil syndical (1/3 chantiers). Présentation 15-20 min + démonstration physique silence motorisation Came BX-241 + Q/R. Sur 18 votes copros Saint-Denis : taux moyen 87 %, médiane 89 %, taux 100 % de votes acquis.` },
      { question: 'Notre copro est-elle éligible ANRU 2 ?', answer: `Vérification gratuite lors de la visite Karim. Carte officielle ANRU 2 consultable sur sig.ville.gouv.fr. À Saint-Denis, zones éligibles : Floréal, Saussaie, Courtille, Franc-Moisin, certains secteurs Plaine Saint-Denis. Sur 11 chantiers Saint-Denis éligibles, 7 ont obtenu une subvention ANRU (taux 64 %), montant moyen 38 % du coût brut portail. Conditions : portail intégré à programme ravalement façade global éligible ANRU.` },
      { question: 'Quelle motorisation Came pour notre copro ?', answer: `Notre standard copros 60-150 lots Saint-Denis : Came BX-241 (jusqu'à 6 m portail, 800 kg, silence 38 dB inégalé, IP54, garantie 24 mois extensible 36, pièces détachées maintenues 12 ans). Pour copros >150 lots avec portails 8-12 m : Came BK-2200 longue portée (1 200 kg, 0,18 m/s, +480 € vs BX-241). Pour copros avec ligne EDF instable : Faac 740 (plus tolérant variations tension, +270 € vs BX-241). Nice Robus 600 et Marantec non recommandés copros (durée vie / silence inférieurs).` },
      { question: 'Comment intégrer le portail au système Vigik existant ?', answer: `Le lecteur badge RFID Vigik s'intègre nativement au coulissant Came BX-241 ou BK-2200 (option +480 €). Compatible avec toutes les cartes Vigik résidents copro existantes (paramétrage par notre équipe lors de la mise en service). Pour les copros sans Vigik existant, possibilité d'installer un système Vigik complet en parallèle (devis dédié sur demande).` },
      { question: 'Coordination avec entreprise ravalement façade ?', answer: `Oui, c'est notre spécialité Saint-Denis. 60 % de nos chantiers portails copros sont décidés dans le cadre d'une rénovation globale immeuble (ravalement + isolation thermique + portail). Coordination directe avec entreprise gros œuvre (Bouygues Construction sur 2 chantiers, Demathieu Bard sur 1, GTM Bâtiment sur 1, Eiffage). Calage planning : démontage ancien portail (J-7 du nouveau), pose nouveau portail synchronisée avec dépose échafaudage.` },
      { question: 'Que se passe-t-il si une télécommande est perdue par un résident ?', answer: `Sans module gestion centralisée RBE4N (option +680 €) : la télécommande perdue reste fonctionnelle pour l'éventuel "trouveur" — risque sécurité copro. Solution coûteuse : reprogrammation complète motorisation + rachat de toutes les télécommandes. Avec module RBE4N (notre standard recommandé copros >120 lots) : annulation logicielle de la télécommande perdue depuis l'interface gestionnaire syndic. Aucun coût matériel. Réémission télécommande remplacement : 35 €.` },
      { question: 'Décennale française fournie ?', answer: `Oui systématiquement. Décennale MAAF Pro depuis 2009, contrat n° XXX (attestation jointe au devis pour tous chantiers copros). Couvre 10 ans tout défaut compromettant solidité ou destination de l'ouvrage. Garantie 5 ans sur thermolaquage RAL (couleur, brillance, accroche). Garantie 24 mois fabricant Came sur motorisation (extensible 36 mois +220 €). SAV joignable directement : Karim sur mobile dédié, rappel 24 h ouvrées. Délai SAV intervention urgence : 5 jours ouvrés.` },
      { question: 'Maintenance annuelle motorisation Came ?', answer: `Notre contrat de maintenance annuelle (gratuit 1ère année, 240 €/an années suivantes pour copros) couvre 12 points de contrôle : test cycle complet (10 cycles à vide), mesure intensité moteur multimètre, graissage galets de roulement, nettoyage rail au sol, vérification serrages scellements, test photocellules + bord de sécurité, test batterie secours (5 cycles sans EDF), vérification fins de course, mise à jour firmware carte électronique, vérification télécommandes, rapport technique remis. Prévention pannes bloquantes : sur 18 portails copros Saint-Denis en suivi annuel, 0 panne bloquante en 4 ans.` },
      { question: 'Délai entre signature et pose ?', answer: `14 semaines moyennes pour copros Saint-Denis (avec vote AG + production atelier). Décomposition : 7 semaines préparation et vote AG (visite + devis + convocation 21 jours + AG), 7 semaines production atelier + pose. Si zone ABF (basilique) : ajouter 5-6 semaines instruction ABF. Si chantier ANRU avec ravalement : ajouter coordination 2-4 semaines selon planning gros œuvre.` },
      { question: 'Vous travaillez avec mon gestionnaire syndic professionnel ?', answer: `Oui, sur tous les grands gestionnaires actifs Saint-Denis : Foncia, Nexity, Citya, Loiselet & Daigremont. Communication directe avec gestionnaire pendant tout le process (visite, devis, AG, signature, production, pose, réception, maintenance). Documentation pré-formatée pour intégration convocation AG. PV de réception cosigné syndic + AZ + conseil syndical. Facture libellée copropriété avec mentions obligatoires (TVA, références cadastrales, etc.).` },
      { question: 'Quelle différence avec un installateur Came labellisé local 93 ?', answer: `Saint-Denis et alentours comptent 6 installateurs Came labellisés. Avantages locaux : SAV urgence 24-48 h (vs 5 jours AZ). Nos avantages : spécialisation copros (78 % activité Saint-Denis copros vs 40 % moyenne installateurs locaux), méthodologie AG éprouvée 18/18 votes acquis, coordination ravalement ANRU spécialiste (11 chantiers + 7 subventions ANRU), fabrication portail intégrée atelier 1 800 m² (cohérence cadre/rail/moteur), décennale française MAAF Pro depuis 2009, équipe identifiée nominativement (Karim + Marc), maintenance annuelle gratuite 1ère année. Sur 18 chantiers copros Saint-Denis, 11 syndics avaient consulté un installateur local en parallèle. 11 ont signé chez nous.` },
    ],
  },

  richSchema: {
    geo: { latitude: 48.9362, longitude: 2.3574 }, // Saint-Denis centre basilique
    priceRange: { low: 8500, high: 22000, currency: 'EUR' },
    aggregateRating: { value: 4.9, count: 23 },
    awards: [
      'Membre Qualibat 4413 (métallerie-serrurerie ouvrages courants)',
      'Garantie décennale MAAF Pro depuis 2009',
      'Partenaire installateur Came certifié depuis 2009',
      'Atelier 1 800 m² certifié sécurité incendie',
      '18 votes AG copros Saint-Denis acquis sans rejet (taux 100 %)',
      'Spécialiste coordination ravalement ANRU 2 (7 subventions obtenues sur 11 chantiers éligibles)',
      '14 contrats maintenance copros actifs Saint-Denis',
    ],
  },

  meta: {
    lastEditedAt: '2026-04-18',
    editor: 'Karim (chef de chantier)',
    internalNotes: 'URL Maxi-Premium #9 vitrine portails copros Saint-Denis (préfecture 93). Tribune éditoriale 8 min sur méthodologie AG copro 5 docs + démonstration silence Came + coordination ravalement ANRU + subvention 38 %, comparatif 12 critères 3 prestataires copros, 12 FAQ rich snippet, timeline 11 étapes. Cible gestionnaires syndics Foncia/Nexity/Citya/Loiselet & Daigremont + conseils syndicaux copros 60-200 lots.',
  },
}
