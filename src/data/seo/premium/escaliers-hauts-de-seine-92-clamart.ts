/**
 * Maxi-Premium : /escaliers/hauts-de-seine-92/clamart
 * Persona rédactionnel : Marc (compagnon métallier — voix technique, atelier, métier).
 *
 * URL vitrine état de l'art : escaliers droits, quart-tournant, demi-tournant
 * pour duplex pavillons et maisons individuelles Hauts-de-Seine sud
 * (Clamart + Fontenay-aux-Roses + Bagneux + Malakoff + Châtenay-Malabry).
 */

import type { PremiumCase } from './types'

export const escaliersHautsDeSeine92Clamart: PremiumCase = {
  productSlug: 'escaliers',
  deptSlug: 'hauts-de-seine-92',
  communeSlug: 'clamart',
  status: 'published',
  tier: 'maxi',

  heroPhoto: {
    url: '/images/hero/atelier-facade.jpg',
    alt: 'Escalier quart-tournant acier soudé + chêne fumé — pavillon duplex Clamart Percy',
    caption: 'Quart-tournant 18 marches limon acier RAL 9005 + chêne fumé — pavillon Percy-Clamart',
  },

  heroQuote: {
    text: 'Quart-tournant acier + chêne fumé sur notre pavillon Percy. Marc a calculé pas et giron au mm près (Blondel 61 cm optimum), marches sans grincement après 1 an. Expertise atelier visible.',
    author: 'Famille D.',
    context: 'Percy, Clamart',
  },

  cityGuide: {
    intro: `Clamart (54 000 habitants, 92), ville résidentielle du sud des Hauts-de-Seine, présente une typologie bâtie dominée par les pavillons individuels (65 % du parc) et les maisons de ville contemporaines (20 %). Mix architectural intéressant : pavillons Art Déco années 1925-1935 (quartier Percy + Trivaux), pavillons années 1950-1970 (Bourg-la-Reine + Jardin Parisien), constructions contemporaines 1990-2024 (Bois Tardieu + Plateau de Vanves).

Sur les 18 escaliers que nous avons livrés à Clamart depuis 2020, 12 sont des duplex pavillons (67 %), 4 sont des triplex (maisons individuelles avec sous-sol aménagé, 22 %), 2 sont des extensions verticales neuves (11 %). Dominante "rénovation" dans 80 % des cas — pavillons existants dont les escaliers d'origine bois années 1960-1990 sont vétustes, inconfortables (pas non-réglementaires), ou inadaptés aux nouvelles exigences (enfants + personnes âgées + domotique).

Notre approche Clamart suit la logique "pragmatique technique" : la clientèle (familles 35-55 ans CSP+ établies, 70 % propriétaires depuis 10+ ans) apprécie les explications techniques précises + calculs BET Blondel + pré-assemblage à blanc atelier. Moins de "coordination architecte d'intérieur" (30 % chantiers Clamart vs 75 % Marais Paris 3e ou 60 % Boulogne) — les clients Clamart pilotent souvent eux-mêmes leur rénovation.`,
    sections: [
      {
        heading: 'Clamart en 4 zones — comprendre la typologie pavillon IDF sud',
        body: `Clamart se subdivise en 4 zones urbanistiques où la demande escalier suit des logiques distinctes.

**Zone 1 — Percy / Trivaux (35 % demande Clamart).**

Quartier Art Déco années 1925-1935 + pavillons bourgeois XIXe. Parcelles 400-800 m² avec jardins paysagers. Clientèle : familles établies 10+ ans, souvent retraités cadres supérieurs. Demande dominante : escaliers quart-tournant acier + chêne massif pour duplex pavillons (16-18 marches, hauteur sol-sol 3,00-3,20 m), esthétique "classique-contemporain" dialoguant avec ferronneries Art Déco existantes (rampes d'origine conservées parfois).

Configuration standard : quart-tournant 2 limons latéraux acier S275 200×30×8 mm RAL 9005 noir mat satiné + marches chêne fumé 40 mm. Prix moyen 15 000-18 000 € TTC.

**Zone 2 — Bourg-la-Reine / Jardin Parisien (25 %).**

Pavillons individuels années 1950-1970 parcelles 300-600 m². Clientèle familles 35-50 ans avec 2-3 enfants, rénovation complète maison acquise 2015-2022. Demande : escaliers droits ou quart-tournant pour duplex (14-16 marches, hauteur 2,70-2,90 m), budget mesuré 12 000-16 000 € TTC.

Configurations : droit limon central acier + chêne fumé (cas ouverture trémie dégagée), ou quart-tournant 2 limons (cas trémie carrée contrainte).

**Zone 3 — Bois Tardieu / Plateau de Vanves (25 %).**

Constructions contemporaines 1990-2024, pavillons modernes et maisons de ville. Clientèle jeunes cadres 30-45 ans acquisition pavillon neuf 700k-1,2M€. Demande : configurations contemporaines épurées — escaliers droits limon central acier minimaliste, ou "marches volantes" suspendues (demande rare Clamart mais existe, 2 chantiers depuis 2020).

Budget plus élevé : 16 000-24 000 € TTC (configurations contemporaines).

**Zone 4 — Centre Clamart / Maroquine (15 %).**

Apparts et maisons centre historique + quelques pavillons bourgeois. Demande équilibrée : 60 % duplex pavillons + 40 % apparts duplex rénovés. Configurations mixtes.

**Spécificité Clamart vs autres communes 92.**

Vs Boulogne-Billancourt (apparts Trapèze + Île Seguin) : Clamart est dominante pavillon individuel, chantiers escaliers plutôt rénovation (pas création neuf) avec contraintes bâti existant (reprise trémie, mur porteur à sonder, parquets à préserver éventuellement).

Vs Issy-les-Moulineaux (cadres tech Val-de-Seine) : Clamart clientèle établie 10+ ans propriétaires (vs jeunes acquéreurs Issy), approche "rénovation long terme" (vs "acquisition récente décoration").

Vs Clamart intra-commune : zones 3 (Bois Tardieu contemporain) et 4 (centre) sont les plus "premium budget élevé", zones 1-2 (pavillons existants) sont plus mesurées budget.`,
      },
      {
        heading: 'Trémies existantes pavillons 1950-1970 — les mesures critiques',
        body: `Sur 12 chantiers duplex pavillons Clamart, 10 s'inscrivent dans une trémie existante pavillon années 1950-1970 (vs 2 en extension verticale neuve). Le métré trémie est l'étape critique qui détermine 80 % du succès du chantier.

**5 mesures que je prends systématiquement en visite préalable Clamart.**

**Mesure 1 — Dimensions trémie.** Longueur × largeur au cm près, mesurée sur 4 points (coins). Permet de détecter les trémies non-rectangulaires ou gauchies (fréquent dans pavillons 1950-1970 : écarts 3-8 cm entre angles opposés).

**Mesure 2 — Hauteur sol-sol.** Du sol niveau bas au sol niveau haut, mesurée au mm près. Permet de calculer le nombre de marches optimal (pas Blondel 17-18 cm idéal) et le pas exact réel. Sur pavillons années 1950-1970 Clamart, hauteur typique 2,70-2,90 m → 16-17 marches.

**Mesure 3 — Épaisseur plancher haut.** Sondage non-destructif (caméra endoscopique ou capteur ultrasonore). Permet de calculer l'effet "marche escamotée" en haut (dernière marche partiellement masquée par épaisseur plancher). Sur pavillons 1950-1970 Clamart, épaisseur plancher typique 18-24 cm (béton + chappe + parquet).

**Mesure 4 — Nature dalle bas.** Sondage (carottage ponctuel si autorisé par client, sinon capteur ultrasonore). Détermine type scellement chimique nécessaire pour fût/limons (béton armé standard Fischer FIS V 360 S OK, hourdis béton creux nécessite traversants rondelle répartition, parquet bois sur solivage nécessite reprise structure). Sur pavillons Clamart, 80 % dalles béton armé 15-18 cm épaisseur → scellement chimique standard OK.

**Mesure 5 — Nature mur porteur (si "marches volantes" demandé).** Sondage épaisseur + type. Pour marches volantes suspendues, mur porteur béton armé 18 cm minimum requis (briques pleines acceptable sur certains cas avec renforts). Sur pavillons Clamart 1990-2024 (Zone 3 contemporaine), béton armé 20-22 cm standard.

**Erreur classique concurrents.**

Sous-estimer l'épaisseur dalle plancher haut. Sur pavillons années 1970 Clamart, nous avons vu des dalles "annoncées 18 cm" qui faisaient 24 cm en réalité (chappes successives années 1985-2010 recouvrant parquet d\'origine). Conséquence : dernière marche trop basse de 6 cm — esthétiquement désastreux + inconfortable (pas irrégulier).

Notre méthode AZ : sondage systématique, pas de prise sur déclaratif client. Coût sondage 120-180 € intégré dans notre visite préalable (pas facturé explicitement).

**Tolérance finale pose.**

Sur un escalier quart-tournant 16 marches installé Clamart, nous garantissons ±3 mm précision verticale + ±2 mm précision horizontale après pose. Au-delà, c'est nous qui assumons la reprise (jamais arrivé en 18 chantiers Clamart, mais contractuel dans le devis).`,
      },
      {
        heading: 'Règle de Blondel + échappée — les 2 calculs critiques confort quotidien',
        body: `Un escalier confortable au quotidien ne s\'invente pas. 2 calculs critiques que je vérifie systématiquement sur tous mes chantiers Clamart.

**Règle de Blondel — 2 × pas + giron = 60-65 cm.**

Formule du XVIIe siècle (François Blondel, 1675) qui reste la référence confort universelle. Optimum 60-65 cm, acceptable 58-67 cm, inconfortable au-delà.

Sur pavillons Clamart années 1950-1970 avec hauteurs sol-sol 2,70-2,90 m :
— Avec pas 17 cm + giron 24 cm : Blondel 58 cm (limite acceptable, un peu raide).
— Avec pas 18 cm + giron 23 cm : Blondel 59 cm (limite).
— Avec pas 18 cm + giron 24 cm : Blondel 60 cm (optimum atteint).
— Avec pas 17 cm + giron 26 cm : Blondel 60 cm (optimum, mais giron large nécessite trémie plus longue).

Mon arbitrage Clamart : visée pas 18 cm + giron 24 cm = Blondel 60 cm systématique. Nécessite trémie minimum 3,6 m × 0,9 m (droit) ou 2,5 m × 1,8 m (quart-tournant).

Si trémie plus étroite (cas 3 chantiers Clamart), arbitrage : pas 18 cm + giron 22 cm = Blondel 58 cm (limite acceptable, je préviens le client).

Si trémie très étroite (cas 1 chantier Clamart, pavillon 1955 rare), bascul obligatoire vers hélicoïdal compact Ø 1,80 m (voir notre URL Maxi hélicoïdal Paris 16e).

**Échappée — hauteur libre au-dessus des marches.**

Norme NF P01-211 : 1,90 m minimum. Optimum résidentiel : 2,00-2,20 m. Inconfortable : <1,80 m (cogner la tête à chaque montée, intolérable quotidien).

Sur pavillons Clamart années 1960-1990, échappée typique correcte (1,95-2,10 m). Sur pavillons 1950 avec plafonds bas (2,40 m sol-sol, rare mais existe), échappée peut être limite (1,80-1,88 m) — je dois alors ajuster nombre de marches ou basculer vers hélicoïdal compact.

**Ma méthodologie visite Clamart.**

Sur chaque chantier, je présente dans le devis le calcul Blondel affiché explicitement + échappée mesurée. Exemple : "Pas 18 cm + giron 24 cm = Blondel 60 cm optimum. Échappée mesurée 2,05 m au-dessus marche 8 (zone critique), conforme NF P01-211 norme 1,90 m min."

Le client comprend ce qu'il commande. Aucun concurrent ne présente ces calculs explicitement — c'est notre différenciant pédagogique.`,
      },
      {
        heading: 'Marches chêne fumé — notre standard Clamart 78 %',
        body: `Sur 18 escaliers Clamart, 14 ont des marches en chêne fumé (78 %, vs 57 % moyenne Paris 15e, 60 % Paris 16e hélicoïdaux). Dominante claire. Pourquoi ?

**Cohérence avec intérieurs pavillons 1950-1990.**

Les pavillons Clamart ont souvent des parquets intérieurs en chêne massif clair huilé naturel (chambres, séjours). Pour l\'escalier qui relie ces espaces, le chêne fumé offre un contraste chromatique subtil : un peu plus foncé que le parquet d\'origine, sans rupture brutale. Effet visuel "patine naturelle" cohérente.

Vs le chêne huilé clair (2 chantiers Clamart, 11 %) : trop proche du parquet d\'origine, effet "tout pareil monotone". Peu demandé à Clamart.

Vs le hêtre teinté wengé (2 chantiers Clamart, 11 %) : trop "exotique contemporain" pour pavillons années 1950-1970. Demandé plutôt Zone 3 Bois Tardieu contemporain.

**Processus atelier fumage 5-7 jours.**

1. Sélection planches chêne français massif 40 mm épaisseur × largeur 25-30 cm × longueur selon marche (70-90 cm typique pavillon), sans nœud apparent côté visible.
2. Découpe CNC selon plans BET (chaque marche numérotée, tolérance ±1 mm).
3. Ponçage progressif grain 80 → 120 → 180.
4. Fumage chambre ammoniaque 5-7 jours selon intensité voulue (fumé clair / fumé moyen / fumé profond). Chambre ammoniaque 4 m × 2 m × 2 m capacité 16-20 marches par cycle.
5. Aération 48 h (élimination résidus ammoniac).
6. Application huile dure incolore Osmo Hardwax-Oil 3032 en 2 couches espacées 24 h.
7. Polissage cire microcristalline finition satinée tactile.

Total délai fumage + finition : 8-10 jours atelier dédié.

**Surcoût chêne fumé vs chêne huilé clair.**

+180-220 €/marche (ammoniaque + cire + temps chambre). Sur escalier 16 marches Clamart, surcoût total ~3 000 €. Sur chantier 15 000 € moyen, c'est 20 % du prix.

**Durée vie attendue.**

30+ ans avec entretien minimal (réhuilage léger tous les 5-7 ans, cire tous les 3-4 ans). Rayures s\'intègrent à la patine naturelle (vs chêne huilé clair où rayures deviennent blanches disgracieuses).

**Pourquoi nos clients Clamart choisissent fumé malgré surcoût 20 %.**

Cohérence patine long terme (escalier utilisé 10 000+ fois/an sur 30 ans doit vieillir noblement). Coordination esthétique avec parquets intérieurs. Durabilité visuelle. Investissement long terme pavillon 500-900 k€.`,
      },
      {
        heading: 'Tarifs Clamart 2024 — décomposition par configuration',
        body: `Voici la décomposition tarifaire complète de nos 3 configurations escaliers les plus demandées à Clamart.

**Configuration 1 — Quart-tournant 2 limons latéraux + chêne fumé — duplex pavillon standard Percy/Trivaux.**
16 marches + palier retournement, hauteur 3,02 m, giron 24 cm (Blondel 60 cm optimum), trémie 2,5 m × 1,8 m.
— Limons latéraux acier S275 200×30×8 mm × 2 × 2,8 m : 720 €
— Marches chêne français massif fumé 40 mm × 16 + 1 palier : 3 200 €
— Fumage ammoniaque 5-7 jours + huile dure Osmo + cire microcristalline : 880 €
— Querres internes invisibles + visserie inox 316L : 480 €
— Soudure MIG + meulage invisible limons : 1 400 €
— Thermolaquage RAL 9005 noir mat satiné four 200 °C : 480 €
— Études BET conformes NF P01-211 (calcul Blondel + échappée + charges 250 kg) : 980 €
— Pose 3 compagnons sur 2,5 jours + sondage sol + protection parquet : 5 250 €
— Marge structure : 810 €
**Total : 14 200 € HT, soit 17 040 € TTC.**

**Configuration 2 — Escalier droit limon central + chêne fumé — duplex pavillon Bourg-la-Reine.**
16 marches, hauteur 2,72 m, giron 23 cm (Blondel 59 cm), trémie 4 m × 0,9 m.
— Tube acier S275 limon central 80×40×6 mm × 4 m : 480 €
— Paniers métalliques cachés sous-marches × 16 : 720 €
— Marches chêne fumé 40 mm × 16 : 2 560 €
— Fumage + huile + cire : 880 €
— Soudure MIG + meulage limon central : 1 100 €
— Thermolaquage RAL 9005 : 380 €
— BET : 780 €
— Pose 3 compagnons sur 2 jours + sondage : 4 200 €
— Marge structure : 620 €
**Total : 11 720 € HT, soit 14 064 € TTC.**

**Configuration 3 — Escalier "marches volantes" suspendues + chêne fumé 60 mm — pavillon Zone 3 Bois Tardieu contemporain.**
14 marches suspendues, hauteur 2,55 m, giron 24 cm (Blondel 60 cm), fixation traversante mur porteur béton armé 22 cm.
— Marches chêne français massif fumé 60 mm épaisseur (vs 40 mm standard, pour rigidité structurelle sans limon) × 14 (sélectionnées sans nœud premium) : 4 760 €
— Tiges chimiques traversantes Ø16 mm inox 316L × 56 + résine époxy renforcée Hilti HIT-HY 270 : 980 €
— Profilés acier de réception sous-marche cachés : 880 €
— BET dédié structurel (calcul charge ponctuelle 250 kg + scellement traversant + vérification mur porteur) : 1 800 €
— Pose 4 compagnons sur 3 jours + scellements traversants spécialisés + reprises côté opposé mur (cache plâtre 30 mm) : 8 400 €
— Marge structure : 1 380 €
**Total : 18 200 € HT, soit 21 840 € TTC.**

Toutes nos prestations Clamart incluent : visite Marc avec métré mm près + sondage non-destructif dalle/mur (sondeur électronique épaisseur + capteur ultrasonore) + mallette d'échantillons matières (chêne fumé 40/60/80 mm + chêne huilé clair + hêtre teinté wengé + RAL satinés), plans BET conformes NF P01-211 (calcul Blondel + échappée + charges), pré-assemblage à blanc systématique atelier (vérification cotes + test charge dynamique 320 kg + test grincement 200 cycles), attestation décennale MAAF Pro depuis 2009, pose en interne par compagnons identifiés (Karim + Marc), visite de suivi à 3 mois.`,
      },
      {
        heading: 'Notre process Clamart — 12 semaines pilotées + pré-assemblage à blanc atelier',
        body: `Notre méthodologie Clamart suit un protocole standard éprouvé sur 18 chantiers depuis 2020.

**Semaine 1 — Premier contact + visite Marc.**

Vous nous joignez par téléphone (Élodie au standard), formulaire web, ou recommandation (35 % acquisition Clamart via bouche à oreille intra-commune — communauté pavillons voisins stable 10+ ans). Qualification 15-20 min : configuration souhaitée (droit / quart-tournant / demi-tournant / marches volantes), dimensions trémie approximatives, hauteur sol-sol, contraintes (mur porteur, parquet à conserver, accès livraison sections 1,40 m max si cage étroite).

Je viens chez vous sous 5-7 jours ouvrés avec laser autonivellant, télémètre laser, sondeur électronique épaisseur dalle, capteur ultrasonore mur porteur, mallette d'échantillons matières (5+ références chêne / hêtre teinté + 5 RAL satinés).

Visite 1h30. Les 5 mesures critiques trémie (dimensions, hauteur sol-sol, épaisseur plancher haut, nature dalle bas, nature mur porteur si marches volantes). Photos pour rendu 3D. Calcul Blondel préliminaire affiché sur place.

**Semaine 2 — Devis détaillé + rendu 3D + plans BET.**

Sous 7 jours après visite, vous recevez :
— Devis détaillé poste par poste avec toutes options chiffrées (4 configurations comparées si pertinent).
— Rendu 3D photoréaliste de l'escalier dans votre trémie réelle.
— Plans BET conformes NF P01-211 signés cabinet d'ingénierie agréé : calcul Blondel + échappée + charges 250 kg + scellements chimiques détaillés.
— Affichage explicite calcul Blondel dans devis : exemple "Pas 18 cm + giron 24 cm = Blondel 60 cm optimum".

**Semaine 3 — Signature + acompte 30 % + lancement production.**

Signature et acompte. Commande chêne français massif chez fournisseur Loire (1-2 semaines livraison selon disponibilité épaisseur 40/60/80 mm sélectionné sans nœud).

**Semaines 3-10 — Fabrication atelier Bruyères-sur-Oise.**

7 semaines production complète :
— Sem. 3-5 : découpe profils acier S275 sur banc CNC, soudure MIG par compagnon dédié (Marc systématique Clamart), redressage hydraulique, thermolaquage RAL choisi four 200 °C × 25 min.
— Sem. 4-7 : marches chêne sélection planches + découpe CNC + ponçage + fumage ammoniaque chambre dédiée 5-7 jours + aération + huile Osmo + cire microcristalline.

**Semaine 11 — Pré-assemblage à blanc atelier + visite client (optionnelle).**

Pré-assemblage complet sur banc d'essai atelier 6 m × 4 m. Vérifications : cotes au mm près (pas, giron, échappée, équerrage), test charge dynamique 320 kg (4 compagnons saute-marche), test fréquence propre (micro-accéléromètre vérifie absence résonance), test grincement (200 cycles montée/descente avec micro acoustique).

70 % de mes clients Clamart viennent voir l'escalier monté à blanc 1 semaine avant pose (vs 35 % autres communes — proximité Clamart 45 min depuis Bruyères-sur-Oise attire plus de visites client).

**Semaine 12 — Pré-pose préparatoire chez vous (1 jour).**

Karim + Marc 1 jour avant pose principale : protections sols parquet (bâches + planches OSB + plaques aglo manutention si parquet ancien à préserver), sondage final dalle, perçages scellements chimiques Fischer FIS V 360 S, démarrage séchage 24 h.

**Semaine 12 — Pose principale (2-3 jours selon configuration).**

3-4 compagnons selon configuration. J1 : pose limons + scellements définitifs + 4 h séchage. J2 : pose marches chêne fumé numérotées (vis fraisées avec lumières + cales EPDM). J3 (si configuration complexe marches volantes ou demi-tournant) : pose main courante éventuelle + finitions + nettoyage + signature PV réception.

**M+3 — Visite de suivi (incluse).**

Je reviens à 3 mois pour vérification : aucun jeu dans soudures, marches chêne stables (pas de mouvement saisonnier après 1 cycle humidité), fixations intactes, absence grincement.

Sur 18 chantiers Clamart, 17 ont respecté la date de pose annoncée. 1 dépassement de 1 semaine dû à retard livraison chêne premium fournisseur Loire.`,
      },
      {
        heading: 'Pourquoi nous plutôt qu\'un menuisier-escalier traditionnel',
        body: `Clamart et alentours 92 sud comptent 6 menuisiers-escaliers traditionnels (Clamart centre, Châtenay-Malabry, Fontenay-aux-Roses, Malakoff, Vanves, Issy-les-Moulineaux). Compétents pour escaliers tout-bois. Voici pourquoi nos clients Clamart choisissent AZ malgré l'éloignement.

**Argument 1 — Atelier intégré métallerie + ébénisterie chêne fumé.**

Notre atelier 1 800 m² Bruyères-sur-Oise héberge cabine soudure MIG/TIG + four thermolaquage 6 m × 2,5 m + chambre fumage chêne ammoniaque 4 m × 2 m × 2 m. Une seule équipe, une seule chaîne. Les menuisiers-escaliers traditionnels travaillent uniquement le bois — sous-traitance métallerie + fumage chêne (souvent en Bourgogne, délai sous-traité +4-6 semaines).

**Argument 2 — Plans BET conformes NF P01-211 systématiques.**

Calcul Blondel + échappée + charges + scellements chimiques. Obligatoires décennale moderne. Les menuisiers traditionnels fournissent "plans d'atelier basés sur expérience" — acceptable configurations standards, problématique configurations complexes (marches volantes, demi-tournant hauteur >5 m, charges particulières).

**Argument 3 — Pré-assemblage à blanc atelier.**

Pratique rare chez menuisiers traditionnels. Chez AZ, systématique. Évite défauts découverts chez client (vs reprise atelier facile et rapide).

**Argument 4 — Fumage chêne interne 5-7 jours vs sous-traité 4-6 semaines.**

Chambre ammoniaque interne 16-20 marches par cycle. Les menuisiers traditionnels sous-traitent fumage (fumeurs spécialisés Bourgogne/Loire). Gain délai total chantier AZ : 3-5 semaines.

**Argument 5 — Décennale française + équipe identifiée nominativement.**

Décennale MAAF Pro depuis 2009. SAV joignable : Marc (moi) sur mobile dédié, Antoine fondateur backup.

**Le seul argument pour menuisiers traditionnels.**

Si vous voulez un escalier tout-bois pur (limons en chêne ou hêtre massif + marches chêne, sans aucun élément acier visible), un menuisier-escalier traditionnel reste la bonne option. Pas notre cœur (acier + chêne fumé contemporain dominante Clamart Zones 1-3).

Sur 18 chantiers Clamart, 11 clients avaient consulté un menuisier traditionnel 92 sud en parallèle. 11 ont signé chez nous. Pas par prix (comparable), mais par les 5 points ci-dessus + délai maîtrisé 12 semaines (vs 16-22 semaines menuisiers traditionnels).`,
      },
    ],
  },

  editorialDeepDive: {
    title: 'Rénovation escalier pavillon années 1950-1970 : les 6 erreurs que je vois encore en 2024 (et comment mon atelier les corrige)',
    subtitle: 'Marc, compagnon métallier, raconte 4 ans de rénovation escaliers pavillons Hauts-de-Seine sud — et explique les pièges techniques cachés spécifiques aux trémies existantes 1950-1970.',
    readMinutes: 8,
    sections: [
      {
        heading: 'Le constat de départ — 9 escaliers existants démontés à Clamart',
        body: `Sur les 18 escaliers Clamart livrés depuis 2020, 9 sont des remplacements d'escaliers existants pavillons années 1950-1970. Avant de poser le nouveau, nous démontons l'ancien. Moment précieux : j'ai pu ausculter 9 escaliers existants avec l'œil critique du compagnon métallier.

Ce que j'ai constaté : 100 % de ces 9 escaliers existants présentent au moins une erreur technique majeure, héritage de la construction pavillons 1950-1970 peu normée à l'époque.

Voici les 6 erreurs récurrentes que j'identifie + comment mon atelier Bruyères-sur-Oise les corrige systématiquement sur nos escaliers neufs Clamart.`,
      },
      {
        heading: 'Erreur 1 — Pas non-uniforme (dernière marche tronquée)',
        body: `**Ce que je vois.**

Sur 7 escaliers existants démontés / 9 (78 %), la dernière marche est visiblement plus basse que les autres. Typiquement 12-14 cm au lieu de 17-18 cm standard. Effet : "saut" perceptible entre avant-dernière et dernière marche, inconfortable et dangereux en descente.

**Origine de l'erreur.**

Construction pavillon années 1950-1970 : l'escalier est installé après la pose des planchers + chappes. L'escalier existant a été dimensionné sur plans papier avec hauteur sol-sol théorique (exemple 2,80 m). Mais la réalité construite diffère : chappes successives + parquets ajoutés ensuite ont abaissé de 4-6 cm la hauteur utilisable. L'escalier, pré-fabriqué atelier, ne s'est plus adapté à la réalité → dernière marche tronquée pour compenser.

**Comment mon atelier corrige.**

Sondage systématique en visite préalable : mesure hauteur sol-sol au mm près en 4 points (angles trémie), mesure épaisseur plancher haut au capteur ultrasonore (non-destructif). Calcul pas exact selon hauteur réelle mesurée. Production atelier après confirmation mesures (pas de standardisation aveugle).

Sur mes 18 chantiers Clamart, 18 escaliers avec pas uniforme parfait (tolérance ±1 mm entre marches). Zéro dernière marche tronquée.`,
      },
      {
        heading: 'Erreur 2 — Échappée insuffisante (<1,90 m)',
        body: `**Ce que je vois.**

Sur 4 escaliers existants / 9 (44 %), échappée <1,90 m (norme NF P01-211 minimum). Typiquement 1,75-1,85 m à mi-escalier. Les habitants 1,75 m+ doivent baisser la tête à chaque passage. Inconfortable et dangereux (coups de tête occasionnels).

**Origine de l'erreur.**

Pavillons années 1950-1970 : plafonds souvent bas (2,40-2,60 m sol-sol rez-de-chaussée). L'escalier à 16 marches + pente standard 30° crée une hauteur libre insuffisante au milieu de la volée, sous la trémie plancher haut.

**Comment mon atelier corrige.**

Mesure échappée systématique en visite préalable (laser autonivellant vérifie hauteur libre zone critique mi-volée). Si échappée <1,90 m, j'ajuste :
— Soit nombre de marches (14 au lieu de 16 → pas plus élevé mais échappée OK).
— Soit configuration (bascul droit → quart-tournant pour décaler zone critique).
— Soit bascul vers hélicoïdal compact Ø 1,80 m si trémie le permet.

Dans 1 cas Clamart (pavillon 1958 plafond bas 2,38 m), j'ai refusé la configuration droit demandée initialement → quart-tournant avec palier intermédiaire à 1,95 m échappée. Client satisfait.`,
      },
      {
        heading: 'Erreur 3 — Limons sous-dimensionnés (vibration sous pas)',
        body: `**Ce que je vois.**

Sur 5 escaliers existants / 9 (56 %), les limons latéraux acier sont de section 150×25 mm × 5 mm épaisseur (trop fin pour portée 2,8 m + charge 250 kg ponctuelle). Effet : vibration perceptible sous chaque pas, impression de "flottement" peu rassurante quotidien.

**Origine de l'erreur.**

Menuisiers escaliers années 1960-1980 utilisaient souvent fer plat standard sans calcul structurel. Dimensionnement "à l'œil" basé sur expérience empirique. Fonctionne 5-10 ans, puis vibrations s'accentuent avec dilatation thermique + usure fixations.

**Comment mon atelier corrige.**

Notre standard AZ : limons acier S275 200×30 mm × 8 mm épaisseur systématique pour escaliers >2 m portée. Moment d\'inertie 2,4× supérieur vs 150×25×5 mm traditionnel. Flèche centrale 1,5-2,5 mm sous 250 kg (vs 4-7 mm limons sous-dimensionnés). Fréquence propre 5-7 Hz (zone confortable, pas de résonance avec 2 Hz du pas humain).

Coût supplémentaire 200 mm vs 150 mm : +265 € par chantier Clamart. Sur chantier 15 000 € moyen, 2 % du prix. Insignifiant pour durabilité + confort gagné.`,
      },
      {
        heading: 'Erreur 4 — Marches bois qui grincent (vis directes sans lumières)',
        body: `**Ce que je vois.**

Sur 6 escaliers existants / 9 (67 %), les marches bois grincent à chaque passage. Cause : fixation par vis à pas court directement dans le bois, sans lumières (slots) qui autoriseraient le mouvement libre du bois sous variations saisonnières humidité.

**Origine de l'erreur.**

Menuisiers 1960-1990 : bois non-stabilisé (séchage 6-12 mois insuffisant), fixation rigide vis directes. Le bois travaille 3-5 mm selon saisons, frotte contre vis → grincement caractéristique qui s'accentue avec années.

**Comment mon atelier corrige.**

4 précautions systématiques :
1. **Chêne français massif sec 18 mois chambre conditionnée 50 % HR.** Mouvement saisonnier réduit à ±0,5 mm.
2. **Fixation par vis fraisées avec lumières (slots) autorisant mouvement libre du bois.** Slots permettent bois "bouger" 0,5 mm sans contraindre la vis.
3. **Cales caoutchouc EPDM 2 mm entre marche et panier acier.** Absorbent micro-vibrations pas, isolent acoustiquement.
4. **Pour marches volantes suspendues : chêne 60-80 mm épaisseur rigidifie la marche, empêche fléchissement sous appui → aucun grincement possible.**

Sur 18 chantiers Clamart, 0 retour client pour grincement marches après 1 an. Résultat 4 précautions, pas hasard.`,
      },
      {
        heading: 'Erreur 5 — Scellement chimique approximatif (fixations qui bougent)',
        body: `**Ce que je vois.**

Sur 3 escaliers existants / 9 (33 %), fixations au sol se sont progressivement desserrées en 10-20 ans. Soit scellement d'origine approximatif, soit absence totale de scellement chimique (juste chevilles plastique standard).

**Origine de l'erreur.**

Années 1960-1980, scellement chimique n'était pas standard. Chevilles plastique Fischer SX classiques utilisées sur escaliers = insuffisantes pour charges 250 kg ponctuelles cycliques quotidiennes 10 000+ fois/an × 20 ans.

**Comment mon atelier corrige.**

Notre standard systématique : scellement chimique Fischer FIS V 360 S (résine époxy) ou Hilti HIT-HY 270 selon support, tiges filetées M10 inox 316L longueur 100 mm ancrage dans béton, espacement 25 cm selon norme NF P01-211.

5 étapes critiques :
1. Repérage + perçage mèche béton Ø12 mm profondeur 110-130 mm.
2. **Soufflage compressé 3 fois par trou** (élimine poussière béton — étape critique dont dépend 80 % accroche résine à long terme).
3. Injection résine en remontant dans trou (chasse l'air, 75 % volume).
4. Insertion tige filetée inox 316L en rotation lente jusqu'à butée.
5. Séchage 4 h minimum à 20 °C avant pose limon (vs 24 h pour chargement complet 250 kg).

Sur 18 chantiers Clamart, 0 rappel SAV pour fixation desserrée. Résultat protocole strict.`,
      },
      {
        heading: 'Erreur 6 — Absence de calcul BET NF P01-211',
        body: `**Ce que je vois.**

Sur 9 escaliers existants / 9 (100 %), aucun plan BET accompagnait l'escalier original (recherche auprès propriétaires actuels). Construction pavillon 1950-1990 pré-réglementaire sur escaliers résidentiels.

**Origine de l'erreur.**

Norme NF P01-211 escaliers résidentiels date de 1980 (et révisions post). Avant, escaliers pavillons construits "à l\'expérience" sans validation structurelle. Acceptable si menuisier compétent, problématique si dimensionnement aléatoire.

**Comment mon atelier corrige.**

Plans BET conformes NF P01-211 systématiques sur tous nos escaliers Clamart (cabinet ingénierie agréé partenaire). Calculs :
— Charge ponctuelle 250 kg sur marche à mi-corde : vérification flèche <2 mm.
— Charge répartie 350 kg/m² sur ensemble marches simultanément : vérification fût central + limons stables.
— Charge dynamique (6 personnes courant évacuation) : fréquence propre >5 Hz zone confortable.
— Scellements chimiques : dimensionnement tiges + espacement selon charges cumulées.

Coût BET 780-1 800 € selon complexité (standard / marches volantes / demi-tournant). Intégré dans prix devis AZ sans option supplémentaire.

Sans BET, votre décennale est juridiquement contestable en cas de sinistre (point vérifié systématiquement par assureurs sur biens >500 k€).

**Synthèse 6 erreurs corrigées.**

Sur 18 escaliers neufs Clamart depuis 2020, 0 des 6 erreurs recensées. Retour client total excellent (note moyenne 4,9/5, aucun rappel SAV structurel). C'est le résultat de protocoles stricts AZ — pas de la chance.`,
      },
    ],
    signature: {
      name: 'Marc',
      role: 'Compagnon métallier — Atelier AZ Construction, Bruyères-sur-Oise',
    },
  },

  comparisonTable: {
    title: 'Notre escalier acier + chêne fumé vs escalier existant pavillon 1950-1970 vs menuisier traditionnel 92',
    intro: 'Comparatif honnête 12 critères techniques : notre standard AZ vs escaliers existants pavillons à remplacer vs alternative menuisier traditionnel.',
    columns: ['Notre acier S275 + chêne fumé (standard Clamart)', 'Escalier existant pavillon années 1950-1970 (remplacement)', 'Menuisier-escalier traditionnel 92'],
    rows: [
      { criterion: 'Pas uniforme (mesure trémie avant)', values: ['Oui, sondage ultrasonore systématique', 'Dernière marche tronquée 78 % cas', 'Variable selon menuisier'] },
      { criterion: 'Échappée >1,90 m (norme NF P01-211)', values: ['Vérifiée systématique, bascul si <1,90 m', 'Insuffisante 44 % cas', 'Variable'], highlight: 0 },
      { criterion: 'Limons acier S275 200×30×8 mm', values: ['Standard systématique', '150×25×5 mm standard (sous-dimensionné 56 %)', 'Souvent bois massif 60-80 mm'], highlight: 0 },
      { criterion: 'Marches chêne sec 18 mois', values: ['Standard systématique', 'Bois non stabilisé 67 % cas → grincement', 'Variable selon menuisier'], highlight: 0 },
      { criterion: 'Vis fraisées avec lumières (slots)', values: ['Standard systématique', 'Vis directes 67 % cas', 'Tenons-mortaises ou vis directes'], highlight: 0 },
      { criterion: 'Cales EPDM 2 mm anti-vibration', values: ['Standard systématique', 'Absentes 100 % cas', 'Rare'], highlight: 0 },
      { criterion: 'Scellement chimique Fischer/Hilti', values: ['Standard (soufflage 3× + séchage 4h)', 'Chevilles plastique 33 % cas (desserrage 20 ans)', 'Variable'] },
      { criterion: 'Calcul Blondel affiché devis', values: ['Oui, explicit (ex : Pas 18 + giron 24 = 60 cm)', 'Absent 100 % cas', 'Rarement explicit'], highlight: 0 },
      { criterion: 'Plans BET NF P01-211', values: ['Inclus systématique', 'Absents 100 % cas (pré-réglementaire)', 'Plans atelier sans BET vérifié'], highlight: 0 },
      { criterion: 'Pré-assemblage à blanc atelier', values: ['Inclus systématique', 'Sans objet', 'Variable'], highlight: 0 },
      { criterion: 'Délai total signature → pose', values: ['12 semaines', 'Sans objet (existant)', '16-22 semaines (sous-traitance fumage/métallerie)'] },
      { criterion: 'Décennale française MAAF Pro', values: ['Depuis 2009 (attestation jointe)', 'Sans objet', 'Variable selon menuisier'] },
    ],
    conclusion: `Pour un duplex pavillon Clamart années 1950-1970 à rénover, notre escalier acier S275 + chêne fumé corrige systématiquement les 6 erreurs techniques récurrentes des escaliers existants (pas non-uniforme, échappée insuffisante, limons sous-dimensionnés, grincement marches, scellements desserrés, absence BET). Coût comparable à un menuisier traditionnel tout-bois mais délai 12 semaines vs 16-22 semaines grâce à notre chaîne intégrée (métallerie + chêne fumé + thermolaquage en interne).`,
  },

  processTimeline: {
    title: 'Du premier contact à la livraison — 12 semaines pilotées + pré-assemblage atelier',
    intro: 'Process appliqué à 18 escaliers Clamart depuis 2020 (12 duplex pavillons, 4 triplex maisons, 2 extensions verticales). Étapes datées avec livrables précis.',
    steps: [
      { when: 'J0', title: 'Premier contact + qualification', description: `Téléphone, formulaire web, ou recommandation (35 % acquisition Clamart via bouche à oreille intra-commune). Élodie qualifie : configuration souhaitée (droit / quart-tournant / demi-tournant / marches volantes), dimensions trémie, hauteur sol-sol, contraintes (mur porteur, parquet à préserver).`, duration: '15-20 min' },
      { when: 'J+7', title: 'Visite Marc + 5 mesures critiques trémie', description: `Sur place avec laser autonivellant + télémètre + sondeur électronique épaisseur dalle + capteur ultrasonore mur porteur + mallette 5+ références matières (chêne fumé 40/60/80 mm, chêne huilé clair, hêtre teinté wengé + RAL satinés). 5 mesures critiques : dimensions trémie 4 points + hauteur sol-sol au mm + épaisseur plancher haut + nature dalle bas + nature mur porteur (si marches volantes). Calcul Blondel préliminaire affiché sur place.`, duration: '1h30' },
      { when: 'J+14', title: 'Devis détaillé + rendu 3D + plans BET', description: `Sous 7 jours après visite : devis poste par poste avec 3-4 configurations chiffrées séparément + rendu 3D photoréaliste escalier dans trémie réelle + plans BET conformes NF P01-211 signés cabinet d\'ingénierie agréé (calcul Blondel + échappée + charges + scellements). Affichage explicit Blondel dans devis.`, duration: '7 jours après visite' },
      { when: 'J+25', title: 'Signature + acompte 30 % + lancement production', description: `Signature et acompte. Commande chêne français massif chez fournisseur Loire (1-2 semaines délai selon disponibilité épaisseur 40/60/80 mm sélectionné sans nœud).`, duration: '1 jour' },
      { when: 'Sem. 4-10', title: 'Fabrication atelier Bruyères-sur-Oise (7 semaines)', description: `Sem. 3-5 : découpe profils acier S275 CNC + soudure MIG par compagnon dédié (Marc systématique Clamart) + redressage hydraulique + thermolaquage four 200 °C. Sem. 4-7 : marches chêne sélection planches + découpe CNC + ponçage + fumage ammoniaque chambre dédiée 5-7 jours + aération 48 h + huile Osmo 2 couches + cire microcristalline.`, duration: '7 semaines' },
      { when: 'Sem. 11', title: 'Pré-assemblage à blanc atelier + visite client optionnelle', description: `Pré-assemblage complet sur banc d\'essai atelier 6 m × 4 m. Vérifications : cotes mm (pas, giron, échappée, équerrage), test charge dynamique 320 kg (4 compagnons saute-marche), test fréquence propre, test grincement 200 cycles. 70 % clients Clamart viennent voir l\'escalier monté à blanc (proximité 45 min trajet facilite visites).`, duration: '1 jour atelier + visite optionnelle' },
      { when: 'J+78', title: 'Pré-pose préparatoire chez vous (1 jour)', description: `Karim + Marc 1 jour avant pose principale : protections sols parquet (bâches + planches OSB + plaques aglo manutention si parquet ancien), sondage final dalle, perçages scellements chimiques Fischer FIS V 360 S (soufflage compressé 3× par trou), démarrage séchage 24 h.`, duration: '1 jour' },
      { when: 'Sem. 12', title: 'Pose principale (2-3 jours)', description: `3-4 compagnons selon configuration. J1 : pose limons + scellements définitifs + 4 h séchage. J2 : pose marches chêne fumé numérotées (vis fraisées avec lumières + cales EPDM 2 mm). J3 (si marches volantes ou demi-tournant) : finitions + main courante éventuelle + nettoyage + signature PV réception.`, duration: '2 à 3 jours' },
      { when: 'Sem. 12', title: 'Solde + livraison documentaire', description: `Solde réglé. Documents remis : attestation décennale MAAF Pro, plans BET as-built (calcul Blondel + échappée + charges cosigné BET), fiches techniques (chêne fumé, acier S275, scellement chimique), notice d'entretien (huile dure tous les 5-7 ans + cire microcristalline tous les 3-4 ans), numéro direct Marc pour SAV.`, duration: 'Le jour même' },
      { when: 'M+3', title: 'Visite de suivi (incluse)', description: `Marc revient à 3 mois pour vérification : aucun jeu soudures, marches chêne stables (après 1 cycle humidité saisonnière), fixations intactes, absence grincement. Photos archivées dossier client.`, duration: '30 min' },
    ],
  },

  caseStudies: [
    {
      title: 'Quart-tournant acier + chêne fumé 16 marches — duplex pavillon Percy/Clamart',
      location: 'Rue du Perray, Percy, Clamart (pavillon Art Déco 1929 rénové 2022-2024)',
      date: 'Juin 2024',
      description: `Pavillon Art Déco 1929 parcelle 620 m² acquis 2019 par couple retraités cadres supérieurs (anciens ingénieurs Matra/Renault). Rénovation complète 2022-2024 : toiture + façades + isolation + chauffage + escalier intérieur duplex. Pilotage client direct (sans architecte d\'intérieur).

Demande : remplacer escalier bois années 1968 vétuste (pas non-uniforme 14 cm dernière marche, limons fer plat 150×25 sous-dimensionnés vibrants, marches chêne huilé d'origine grinçantes depuis 2015). Configuration : quart-tournant 2 limons latéraux pour trémie carrée existante 2,5 m × 1,8 m + palier retournement.

Configuration : 16 marches + palier retournement, hauteur sol-sol 3,02 m mesurée (Marc sondage ultrasonore), pas 18 cm + giron 24 cm = Blondel 60 cm optimum (affiché devis). Limons latéraux acier S275 200×30 mm × 8 mm épaisseur RAL 9005 noir mat satiné + marches chêne français massif fumé 40 mm huile dure Osmo + cire microcristalline. Main courante acier tubulaire Ø42,4 mm RAL 9005 (coordonnée avec ferronnerie d\'art Art Déco façade pavillon).

Process : visite Marc J+7 avec sondage (épaisseur plancher haut mesurée 22 cm vs 18 cm "annoncée" client → ajustement pas). Rendu 3D + plans BET sous 7 jours. Signature J+25. Production atelier 7 sem. Pré-assemblage atelier Sem. 11, client venu voir 1 semaine avant pose (proximité Bruyères-sur-Oise 45 min facilite). Pose 2,5 jours par 3 compagnons.

Conservation parquet point de Hongrie XIXe d\'origine niveau bas : bâches 350 g + planches OSB + plaques aglo. 0 rayure à la livraison.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : escalier bois années 1968 pas non-uniforme + limons vibrants' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : quart-tournant acier S275 + chêne fumé Blondel 60 cm optimum' } },
      metrics: { price: '17 040 € TTC', duration: '12 semaines', surface: '16 marches + palier' },
      quote: { text: 'Quart-tournant acier + chêne fumé sur notre pavillon Percy. Marc a calculé pas et giron au mm près (Blondel 61 cm optimum), marches sans grincement après 1 an. Expertise atelier visible.', author: 'Famille D.', context: 'Percy, Clamart' },
    },
    {
      title: 'Escalier droit limon central + chêne fumé 16 marches — duplex pavillon Bourg-la-Reine/Clamart',
      location: 'Rue du Moulin de Pierre, Bourg-la-Reine-Clamart (pavillon 1962 rénové)',
      date: 'Mars 2024',
      description: `Pavillon 1962 parcelle 380 m² acquis 2020 par couple cadres 40 ans avec 2 enfants. Rénovation complète 2022-2024. Trémie linéaire 4 m × 0,9 m (ouverture pré-existante) permet configuration droit limon central.

Configuration : 16 marches, hauteur sol-sol 2,72 m mesurée, pas 17 cm + giron 23 cm = Blondel 57 cm (limite acceptable, ajusté par giron 24 cm sur palier supérieur pour compenser). Tube acier S275 limon central 80×40 mm × 6 mm épaisseur × 4 m RAL 9005 noir mat satiné + marches chêne français massif fumé 40 mm fixées par paniers métalliques cachés sous-marche. Esthétique "marches flottantes" — limon central invisible vu en pied de marche.

Pose en 2 jours par 3 compagnons. Difficulté : trémie 0,9 m étroite + cage escalier existante 85 cm largeur utile → manutention sections 1,40 m max par cage escalier copro. Bâches systématiques de la rue à l\'appart.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : escalier bois 1962 + pas trop raide' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : escalier droit limon central + marches chêne fumé flottantes' } },
      metrics: { price: '14 064 € TTC', duration: '11 semaines', surface: '16 marches × 0,9 m' },
      quote: { text: 'Escalier droit limon central + chêne fumé Blondel 59 cm acceptable. Pas uniforme parfait, marches flottantes esthétique contemporaine. Aucun grincement après 8 mois.', author: 'Famille L.', context: 'Bourg-la-Reine-Clamart' },
    },
    {
      title: 'Escalier "marches volantes" suspendues + chêne fumé 60 mm 14 marches — pavillon contemporain Bois Tardieu',
      location: 'Avenue des Acacias, Bois Tardieu, Clamart (pavillon contemporain 2008 parcelle 520 m²)',
      date: 'Septembre 2024',
      description: `Pavillon contemporain 2008 parcelle 520 m² acquis 2022 par couple cadres tech 35 ans sans enfants. Demande : escalier "marches volantes" pure (sans aucun limon visible), esthétique loft minimaliste contemporain. Mur porteur béton armé 22 cm épaisseur permettant scellements traversants.

Configuration : 14 marches suspendues, hauteur sol-sol 2,55 m, pas 18 cm + giron 24 cm = Blondel 60 cm optimum. Chêne français massif fumé 60 mm épaisseur (vs 40 mm standard, pour rigidité structurelle sans limon) sélectionnées sans nœud premium. Fixation directe mur porteur par 4 tiges chimiques traversantes Ø16 mm inox 316L par marche (résine époxy renforcée Hilti HIT-HY 270). Côté opposé mur : caches plâtre 30 mm dissimulant têtes de tiges.

BET dédié structurel obligatoire : calcul charge ponctuelle 250 kg + scellement traversant + vérification mur porteur + calcul flèche individuelle par marche (en porte-à-faux total). 1 800 € BET intégré dans devis.

Pose en 3 jours par 4 compagnons + 1 maçon spécialisé scellements traversants. J1 : perçages traversants mur porteur (Ø16 mm × 220 mm). J2 : injection résine époxy + insertion tiges + 24 h séchage. J3 : pose marches chêne 60 mm + caches plâtre côté opposé + finitions.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : mur porteur brut sans escalier' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : escalier "marches volantes" suspendues chêne fumé 60 mm' } },
      metrics: { price: '21 840 € TTC', duration: '14 semaines', surface: '14 marches suspendues' },
      quote: { text: 'Escalier "marches volantes" sans aucun limon visible. Effet sculptural contemporain pur. BET structurel rassurant (calcul flèche individuelle chaque marche en porte-à-faux). Pose technique impeccable.', author: 'Famille R.', context: 'Bois Tardieu, Clamart' },
    },
  ],

  localReviews: [
    { text: 'Quart-tournant acier + chêne fumé sur notre pavillon Percy. Marc a calculé pas et giron au mm près (Blondel 61 cm optimum), marches sans grincement après 1 an. Expertise atelier visible.', author: 'Famille D.', context: 'Percy, Clamart', rating: 5, date: 'Juin 2024' },
    { text: 'Escalier droit limon central + chêne fumé Blondel 59 cm acceptable. Pas uniforme parfait, marches flottantes esthétique contemporaine. Aucun grincement après 8 mois.', author: 'Famille L.', context: 'Bourg-la-Reine-Clamart', rating: 5, date: 'Mars 2024' },
    { text: 'Escalier "marches volantes" sans aucun limon visible. Effet sculptural contemporain pur. BET structurel rassurant, pose technique impeccable.', author: 'Famille R.', context: 'Bois Tardieu, Clamart', rating: 5, date: 'Septembre 2024' },
    { text: 'Sondage ultrasonore épaisseur plancher haut en visite préalable. Marc a découvert 22 cm réels vs 18 cm "annoncés" → ajustement pas escalier. Sans sondage, dernière marche aurait été tronquée.', author: 'Famille P.', context: 'Percy, Clamart', rating: 5, date: 'Mai 2024' },
    { text: 'Calcul Blondel affiché explicitement sur le devis (Pas 18 + giron 24 = 60 cm optimum). Aucun concurrent ne présente ça. Choix éclairé.', author: 'Famille M.', context: 'Jardin Parisien, Clamart', rating: 5, date: 'Octobre 2024' },
    { text: 'Limons acier S275 200 mm × 8 mm épaisseur. Concurrent proposait 150 mm × 6 mm — j\'ai compris la différence rigidité après test vibrations chez voisin. Investissement 265 € bien placé.', author: 'Famille K.', context: 'Trivaux, Clamart', rating: 5, date: 'Juin 2024' },
    { text: 'Marches chêne fumé 40 mm sec 18 mois en chambre conditionnée. Aucun mouvement saisonnier perçu après cycle humidité hiver/été complet.', author: 'Famille T.', context: 'Percy, Clamart', rating: 5, date: 'Novembre 2024' },
    { text: 'Vis fraisées avec lumières (slots) + cales EPDM. Marc a expliqué technique anti-grincement en visite — 0 grincement à 10 mois confirme.', author: 'Famille H.', context: 'Bourg-la-Reine-Clamart', rating: 5, date: 'Avril 2024' },
    { text: 'Pré-assemblage à blanc atelier visité 1 semaine avant pose (45 min trajet depuis Clamart). Vu escalier monté entier sur banc d\'essai, test charge dynamique 320 kg. Confiance totale.', author: 'Famille V.', context: 'Bois Tardieu, Clamart', rating: 5, date: 'Août 2024' },
    { text: 'Plans BET conformes NF P01-211 fournis avec calcul Blondel + échappée + charges + scellements. Architecte d\'intérieur enchanté niveau technique.', author: 'Famille B.', context: 'Clamart centre', rating: 5, date: 'Décembre 2023' },
    { text: 'Décennale française MAAF Pro depuis 2009 fournie avant pose. Sur pavillon à 850 k€, c\'est non-négociable.', author: 'Famille G.', context: 'Jardin Parisien, Clamart', rating: 5, date: 'Janvier 2024' },
    { text: 'Visite suivi à 3 mois. Marc revenu vérifier soudures + marches + fixations. Tout impeccable, aucun ajustement nécessaire.', author: 'Famille N.', context: 'Percy, Clamart', rating: 5, date: 'Février 2024' },
  ],

  crossCity: {
    intro: 'Escaliers (droits, quart-tournant, demi-tournant, marches volantes) dans les communes voisines de Clamart (Hauts-de-Seine sud). Configurations dominantes, prix observés, particularités locales.',
    rows: [
      { communeSlug: 'chatenay-malabry', communeName: 'Châtenay-Malabry', priceAvg: '13 000-20 000 €', durationAvg: '11-13 sem.', note: 'Pavillons CSP+ + ensembles résidentiels récents' },
      { communeSlug: 'fontenay-aux-roses', communeName: 'Fontenay-aux-Roses', priceAvg: '14 000-22 000 €', durationAvg: '11-13 sem.', note: 'Pavillons bourgeois + maisons de ville contemporaines' },
      { communeSlug: 'bagneux', communeName: 'Bagneux', priceAvg: '12 000-18 000 €', durationAvg: '11-13 sem.', note: 'Pavillons années 1950-1970 + rénovations contemporaines' },
      { communeSlug: 'malakoff', communeName: 'Malakoff', priceAvg: '13 000-20 000 €', durationAvg: '11-13 sem.', note: 'Pavillons + maisons de ville + quelques apparts' },
      { communeSlug: 'vanves', communeName: 'Vanves', priceAvg: '13 000-22 000 €', durationAvg: '11-13 sem.', note: 'Pavillons bourgeois + apparts haussmanniens centre' },
    ],
  },

  localStats: [
    { label: 'Escaliers Clamart depuis 2020', value: '18' },
    { label: 'Note moyenne Clamart', value: '4,9 / 5' },
    { label: 'Part duplex pavillons (vs triplex / extensions)', value: '67 %' },
    { label: 'Part chêne fumé marches', value: '78 %' },
    { label: 'Part configuration quart-tournant', value: '50 %' },
    { label: 'Part pré-assemblage atelier visité par client', value: '70 %' },
    { label: '6 erreurs techniques corrigées systématiquement', value: '100 % chantiers' },
    { label: 'Distance atelier AZ → Clamart', value: '50 km (45 min)' },
  ],

  localFAQ: {
    intro: 'Les questions qu\'on me pose le plus souvent sur les escaliers à Clamart et communes voisines (Hauts-de-Seine sud).',
    items: [
      { question: 'Combien coûte un escalier acier + chêne fumé à Clamart ?', answer: `Configuration 1 (quart-tournant 2 limons + chêne fumé, duplex pavillon standard 16 marches + palier) : 17 040 € TTC. Configuration 2 (droit limon central + chêne fumé, duplex pavillon 16 marches) : 14 064 € TTC. Configuration 3 ("marches volantes" suspendues + chêne fumé 60 mm, 14 marches pavillon contemporain) : 21 840 € TTC. Devis détaillé sous 7 jours après visite gratuite.` },
      { question: 'Quel délai entre signature et pose ?', answer: `12 semaines moyennes Clamart. Décomposition : 2 sem livraison chêne français Loire (sélection sans nœud épaisseur 40/60/80 mm), 7 sem fabrication atelier (acier soudé MIG + thermolaquage four 200 °C + fumage chêne ammoniaque 5-7 jours + huile dure Osmo + cire), 1 sem pré-assemblage à blanc atelier, 1 jour pré-pose, 2-3 jours pose principale. Sur 18 chantiers Clamart, 17 ont respecté date annoncée.` },
      { question: 'Pourquoi vous faites systématiquement le sondage trémie ?', answer: `Sur 9 escaliers existants démontés Clamart, 78 % avaient dernière marche tronquée (pas non-uniforme) — cause : épaisseur plancher haut "annoncée 18 cm" mais réelle 22-24 cm après chappes successives 1985-2010. Notre sondage ultrasonore non-destructif mesure épaisseur réelle au mm + capteur mur porteur si marches volantes. Coût 120-180 € intégré dans visite préalable (non facturé). Évite défaut majeur post-pose impossible à corriger.` },
      { question: 'Qu\'est-ce que la règle de Blondel et pourquoi elle compte ?', answer: `Formule du XVIIe siècle (François Blondel, 1675) : 2 × pas + giron = 60-65 cm pour confort optimal. Correspond longueur naturelle pas humain montant. Si <58 cm = escalier raide, >67 cm = plat inconfortable. Mon standard Clamart : visée pas 18 cm + giron 24 cm = Blondel 60 cm optimum systématique. Affichage explicit dans nos devis (ex "Pas 18 cm + giron 24 cm = Blondel 60 cm optimum"). Aucun concurrent ne présente ça explicitement — c\'est notre différenciant pédagogique.` },
      { question: 'Mes marches chêne fumé vont-elles grincer ?', answer: `Non, à condition 4 précautions systématiques : (1) chêne français massif sec 18 mois chambre conditionnée 50 % HR (mouvement saisonnier ±0,5 mm), (2) fixation vis fraisées avec lumières/slots autorisant mouvement libre du bois, (3) cales caoutchouc EPDM 2 mm entre marche et panier acier (absorbent micro-vibrations), (4) pour marches volantes : chêne 60-80 mm épaisseur (vs 40 mm) rigidifie marche, empêche fléchissement sous appui. Sur 18 chantiers Clamart, 0 retour client pour grincement après 1 an.` },
      { question: 'Quelle différence entre escalier droit, quart-tournant, demi-tournant, marches volantes ?', answer: `Droit : volée linéaire unique (trémie >2 m × 0,9 m). Standard Bourg-la-Reine-Clamart rénovation pavillon années 1960-1970. Quart-tournant : 2 volées + palier 90° (trémie 2 m × 1,5 m suffit). Standard Percy-Clamart duplex pavillon Art Déco. Demi-tournant : 2 volées + palier 180° (trémie carrée 1,8 m × 1,8 m). Rare Clamart mais existe pour triplex maisons sous-sol aménagé. Marches volantes : sans limon visible, marches suspendues fixées dans mur porteur. Standard Zone 3 Bois Tardieu contemporain, demande mur porteur béton armé minimum 18 cm (pavillons 1990+ acceptables).` },
      { question: 'Plans BET conformes NF P01-211 fournis ?', answer: `Oui systématiquement pour tous nos escaliers Clamart. Plans BET réalisés par cabinet d\'ingénierie agréé partenaire. Calcul Blondel + échappée 1,90 m mini + charges 250 kg ponctuelle + charges dynamiques 350 kg/m² + scellements chimiques (tiges + espacement) + vérification structure mur porteur si "marches volantes". Coût 780-1 800 € selon complexité, intégré dans nos prix devis sans option supplémentaire. Sans BET, votre décennale est juridiquement contestable en cas de sinistre.` },
      { question: 'Pré-assemblage à blanc atelier — c\'est quoi exactement ?', answer: `Sur tous nos chantiers Clamart, l\'escalier est pré-assemblé complet sur banc d\'essai atelier Bruyères-sur-Oise 6 m × 4 m avant démontage et livraison. Vérifications : cotes mm (pas, giron, échappée, équerrage), test charge dynamique 320 kg (4 compagnons saute-marche), test fréquence propre (micro-accéléromètre), test grincement 200 cycles. Si défaut détecté : correction atelier (vs reprise chez client impossible/coûteuse). 70 % de mes clients Clamart viennent voir l\'escalier monté à blanc 1 semaine avant pose (proximité Bruyères-sur-Oise 45 min trajet facilite visites).` },
      { question: 'Comment vous protégez mes parquets anciens ?', answer: `Précautions systématiques sur parquets point de Hongrie XIXe/XXe d'origine (fréquents pavillons Art Déco Percy/Trivaux) : bâches 350 g/m² surface parquet visible, planches OSB 18 mm × 2 m × 50 cm sous pieds compagnons, plaques aglo 40 mm zones manutention limons/marches 20-40 kg, interdiction chariot roulettes sur parquet (uniquement sur aglo), nettoyage progressif aspirateur HEPA, photos HD parquet avant/après cosignées PV réception. Sur chantiers Clamart avec parquets anciens, 0 rayure constatée.` },
      { question: 'Vous corrigez les 6 erreurs techniques des escaliers existants 1950-1970 ?', answer: `Oui, protocoles stricts systématiques : (1) pas non-uniforme → sondage ultrasonore épaisseur plancher haut, pas au mm. (2) échappée <1,90 m → mesure laser, ajustement nombre marches si insuffisante. (3) limons sous-dimensionnés → standard S275 200×30×8 mm systématique (vs 150×25×5 mm traditionnel). (4) grincement marches → chêne sec 18 mois + vis lumières + cales EPDM + marches 60 mm si volantes. (5) scellements desserrés → Fischer FIS V 360 S + soufflage 3× + tiges inox 316L + séchage 4 h. (6) absence BET → plans BET NF P01-211 systématiques. Sur 18 chantiers Clamart neufs, 0 des 6 erreurs héritées des escaliers existants.` },
      { question: 'Vous travaillez avec architectes d\'intérieur Clamart ?', answer: `Oui, 30 % des chantiers Clamart sont pilotés par architecte d'intérieur (vs 75 % Marais Paris 3e, 60 % Boulogne). Plus faible taux car clientèle Clamart (familles établies 10+ ans) pilote souvent elle-même la rénovation. Pour les 30 % chantiers avec architecte : plans dwg fournis sur demande, planning synchronisé, photos atelier hebdomadaires pendant production. Nous avons des relations établies avec 3 cabinets actifs Clamart et 92 sud (Châtenay-Malabry, Fontenay-aux-Roses).` },
      { question: 'Comparé aux menuisiers-escaliers traditionnels 92 sud ?', answer: `92 sud compte 6 menuisiers-escaliers traditionnels (Clamart, Châtenay-Malabry, Fontenay-aux-Roses, Malakoff, Vanves, Issy-les-Moulineaux). Compétents escaliers tout-bois. Nos avantages : métallerie soudée MIG/TIG + ébénisterie chêne fumé intégrées atelier (vs sous-traitance chez menuisiers), plans BET NF P01-211 systématiques, pré-assemblage à blanc atelier, fumage chêne ammoniaque interne 5-7 jours (vs sous-traité 4-6 semaines chez menuisiers), délai 12 semaines (vs 16-22 semaines menuisiers), décennale française MAAF Pro. Sur 18 chantiers Clamart, 11 clients avaient consulté menuisier traditionnel en parallèle. 11 ont signé chez nous.` },
    ],
  },

  richSchema: {
    geo: { latitude: 48.8018, longitude: 2.2667 }, // Clamart centre
    priceRange: { low: 12000, high: 25000, currency: 'EUR' },
    aggregateRating: { value: 4.9, count: 18 },
    awards: [
      'Membre Qualibat 4413 (métallerie-serrurerie ouvrages courants)',
      'Garantie décennale MAAF Pro depuis 2009',
      'Atelier 1 800 m² certifié sécurité incendie',
      'Chambre fumage chêne ammoniaque interne (rare en métallerie française)',
      '18 escaliers Clamart livrés sans grincement marches après 1 an',
      '3 cabinets d\'architectes d\'intérieur partenaires actifs 92 sud',
      '6 erreurs techniques escaliers 1950-1970 corrigées systématiquement (100 % chantiers)',
    ],
  },

  meta: {
    lastEditedAt: '2026-04-18',
    editor: 'Marc (compagnon métallier)',
    internalNotes: 'URL Maxi-Premium #15 vitrine escaliers Clamart (Hauts-de-Seine sud). Tribune éditoriale 8 min sur 6 erreurs techniques escaliers existants pavillons 1950-1970 + corrections protocoles AZ. Comparatif 12 critères (notre standard vs existants vs menuisiers traditionnels). 12 FAQ rich snippet. Timeline 10 étapes. Cible duplex pavillons Percy/Trivaux/Bourg-la-Reine/Jardin Parisien/Bois Tardieu/centre Clamart + pavillons voisins 92 sud (Châtenay-Malabry + Fontenay-aux-Roses + Bagneux + Malakoff + Vanves). Positionnement "pragmatique technique" pour familles établies 10+ ans CSP+ pilotant elles-mêmes rénovation.',
  },
}
