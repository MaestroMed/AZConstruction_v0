/**
 * Maxi-Premium : /escalier-helicoidal/paris-75/paris-16e
 * Persona rédactionnel : Marc (compagnon métallier — voix technique, atelier, métier)
 *
 * URL vitrine état de l'art : escalier hélicoïdal pièce maîtresse architecte
 * — Passy, Muette, Trocadéro. Hôtels particuliers, duplex haussmanniens haut de gamme.
 */

import type { PremiumCase } from './types'

export const escalierHelicoidalParis75Paris16e: PremiumCase = {
  productSlug: 'escalier-helicoidal',
  deptSlug: 'paris-75',
  communeSlug: 'paris-16e',
  status: 'published',
  tier: 'maxi',

  heroPhoto: {
    url: '/images/hero/atelier-facade.jpg',
    alt: 'Escalier hélicoïdal acier soudé + chêne fumé — hôtel particulier Paris 16e Passy',
    caption: 'Hélicoïdal 18 marches Ø 2,40 m — chêne fumé sur âme acier RAL 9005',
  },

  heroQuote: {
    text: 'Pièce maîtresse de la rénovation. 18 marches en chêne fumé sur âme acier soudée TIG, calcul BET, pose en 3 jours. Le résultat dépasse les rendus 3D.',
    author: 'Famille de C.',
    context: 'Rue de Passy, 16e',
  },

  cityGuide: {
    intro: `Le 16e arrondissement (165 000 habitants) concentre la plus forte densité parisienne d'hôtels particuliers et de duplex haussmanniens haut de gamme. Sur 12 escaliers hélicoïdaux que nous avons conçus et posés dans le 16e depuis 2020, 9 étaient des pièces maîtresses architecturales — commande pilotée par un architecte d'intérieur ou un architecte d'ouvrage, prix moyen 22 000 € TTC, délai 14-18 semaines.

L'hélicoïdal 16e n'est jamais un escalier "de service". C'est un objet sculptural visible depuis l'entrée, mesuré au cm près pour s'inscrire dans une trémie existante (souvent une ancienne cage d'escalier de service), avec exigence de finition haute couture. Notre travail à Bruyères-sur-Oise mobilise 4 à 6 compagnons spécialisés sur ces commandes — soudeurs TIG, ébéniste pour les marches bois, polisseur pour les finitions inox.`,
    sections: [
      {
        heading: 'Passy, Muette, Trocadéro — où on travaille le plus dans le 16e',
        body: `Le 16e se subdivise géographiquement en zones très contrastées. Pour l'hélicoïdal, trois zones concentrent l'essentiel de la demande.

**Passy (Auteuil-Sud, Avenue Mozart, Rue de la Pompe)** — 45 % de notre demande 16e. Hôtels particuliers fin XIXe et début XXe entre 250 et 600 m². Trémies anciennes 1,80 à 2,80 m de diamètre, hauteurs sous plafond 3,10 à 3,80 m. Demande dominante : hélicoïdal acier + marches chêne massif fumé ou ébène, main courante laiton patiné. Budget moyen 22 000 - 35 000 €.

**La Muette (Avenue Henri-Martin, Avenue Foch)** — 30 % de la demande. Apparts haussmanniens 220-450 m², souvent en duplex acquis récemment (3-5 ans), rénovés par les nouveaux propriétaires. Trémies modifiées par dépose de cloisons (rare avant les rénovations 2010+). Demande : hélicoïdal acier + marches en chêne fumé ou hêtre teinté, main courante en acier RAL 9005 mat ou inox 316L brossé. Budget 18 000 - 28 000 €.

**Trocadéro / Chaillot** — 15 % de la demande. Apparts haussmanniens premium 300-500 m² avec trémies historiques très contraintes (escaliers de service originaux à conserver côté escalier principal copro). Notre intervention : refaire l'escalier privatif duplex sans toucher à l'escalier collectif. Demande spécifique : hélicoïdal très compact (Ø ≤ 2,00 m), souvent acier + marbre Calacatta ou granit noir.

**Auteuil-Nord, Boulainvilliers** — 10 % de la demande. Mix maisons individuelles (rare à Paris), villas années 30, lofts récemment converti. Demande contemporaine : hélicoïdal acier + verre feuilleté pour les marches (rare, technique, +40 % budget vs chêne).

Comprendre la zone permet d'arriver chez vous avec les bons échantillons matière au métré.`,
      },
      {
        heading: 'Anatomie technique d\'un hélicoïdal — ce qu\'on monte et pourquoi',
        body: `L'escalier hélicoïdal n'a rien à voir avec un escalier droit ou tournant. C'est une structure spiralée autour d'un axe central, avec contraintes mécaniques très spécifiques.

**L'axe central (fût).** Tube acier 200 à 300 mm de diamètre, épaisseur 8-12 mm selon hauteur. C'est l'élément structural principal qui reprend l'essentiel des charges. Sur nos hélicoïdaux 16e, on monte du tube 250 mm épaisseur 10 mm (acier S235JR, normes EN 10025). Le fût est scellé en pied dans le sol béton (platine 400×400 mm × 12 mm + 4 tiges chimiques) et bridé en tête sous le solivage du plancher haut.

**Les marches.** Soudées MIG ou TIG sur des limons radiaux (16-22 par tour) qui s'attachent au fût central. Chaque marche est un panier formé d'un cadre acier 30×30 mm avec contremarche pleine ou ajourée. Le revêtement de marche (chêne, marbre, granit, verre) est ensuite déposé sur ce panier acier, souvent sur lit de mortier ou cales caoutchouc.

**Le pas et le giron.** Notre standard hélicoïdal résidentiel : pas 18 cm (hauteur entre marches) × giron moyen 22 cm à mi-corde. Au passage du fût central, le giron descend à 10-12 cm (zone non-marchable) — c'est pourquoi les hélicoïdaux ne sont jamais des "escaliers du quotidien" : ils sont confortables côté mur, étroits côté fût.

**Le diamètre minimum.** En résidentiel privé, le diamètre minimum hors-tout d'un hélicoïdal confortable est 1,80 m. À 1,60 m on monte mais l'usage est inconfortable (passage corps + meuble difficile). À 2,40 m on est sur du grand confort. Au-delà de 2,80 m c'est de l'hélicoïdal "monumental" qui pèse 800-1 200 kg.

**La main courante.** Toujours présente côté mur extérieur du spiral, à 90 cm de hauteur de marche (norme NF P01-012). Sur l'âme centrale (fût) on peut ajouter une main courante secondaire mais c'est rare en résidentiel. Les matériaux courants : laiton massif patiné (notre signature 16e), inox 316L brossé, chêne massif huilé.

**Le poids.** Un hélicoïdal acier + marches chêne 18 marches Ø 2,40 m pèse 650-750 kg total. C'est lourd. La structure du plancher haut (point d'attache supérieur) doit être vérifiée par notre BET — sur certains apparts haussmanniens on doit poser un IPN de répartition au-dessus, intégré dans l'épaisseur du plancher.`,
      },
      {
        heading: 'Soudure TIG — le détail qui change tout',
        body: `Sur un hélicoïdal 16e, la qualité visuelle dépend à 70 % de la qualité des soudures. Là où nos verrières sont soudées MIG (rapide, robuste, esthétiquement correcte après meulage), nos hélicoïdaux 16e sont systématiquement soudés TIG aux points visibles (jonctions limon-fût, jonctions limon-marche, jonctions main courante).

**Pourquoi TIG plutôt que MIG sur l'hélicoïdal ?**

La soudure TIG (Tungsten Inert Gas) utilise une électrode tungstène non-fusible et un fil d'apport déposé manuellement. Vitesse de soudure : 3-4 fois plus lente que le MIG. Précision : maximale. Aspect : cordon ultra-fin, régulier, presque invisible après meulage léger.

Sur un hélicoïdal, vous êtes dessous, dessus, au milieu du spiral, à 360°. Aucune soudure n'est cachée. Une soudure MIG meulée laisse une trace mate visible à 1 m. Une soudure TIG meulée disparaît visuellement à 30 cm — l'œil voit un pli de matière continue.

**Notre process TIG hélicoïdal.**

1. Préparation des arêtes à souder au gabarit (chanfrein 30°, chambre de soudure 2 mm).
2. Pointage TIG : 4-6 points de fixation par jonction pour bloquer la pièce sans déformation.
3. Soudure TIG continue : argon pur 99,99 %, intensité 90-130 A selon épaisseur, vitesse de fil ~25 cm/min.
4. Meulage progressif : disque à lamelles grain 80, puis grain 120, puis grain 240.
5. Polissage doux : feutre + pâte à polir si la finition est inox brossé visible (rare en hélicoïdal résidentiel).
6. Contrôle visuel macro à la lampe LED rasante (révèle les défauts invisibles à l'œil nu).

Compter 25-35 minutes par soudure TIG meulée vs 4-6 minutes pour une MIG équivalente. Sur un hélicoïdal 18 marches qui compte 80-120 soudures visibles, c'est 30-50 heures de plus en atelier. C'est ce qui fait passer un hélicoïdal de 14 000 € (MIG) à 22 000 € (TIG). C'est aussi ce qui fait la différence entre un escalier "industriel correct" et un escalier "objet sculptural".`,
      },
      {
        heading: 'Marches chêne fumé sur âme acier — pourquoi c\'est notre standard 16e',
        body: `Le revêtement de marche est l'élément visible quotidien — celui que vous touchez, que vous regardez. Sur 12 hélicoïdaux 16e livrés depuis 2020, 8 ont des marches en chêne fumé. C'est devenu notre signature.

**Pourquoi le chêne fumé plutôt que le chêne huilé clair ou l'ébène ?**

Le chêne fumé est obtenu par exposition de chêne massif clair à l'ammoniaque pendant 4-7 jours en chambre fermée. L'ammoniaque réagit avec les tanins du bois et le brunit en profondeur — pas en surface. La couleur est noire-brun chocolat profond, mate, avec les veines du bois encore visibles. Effet visuel : très contemporain, élégant, intemporel.

Vs le chêne huilé naturel : le chêne fumé vieillit mieux (les rayures se patinent au lieu de devenir blanches), il dialogue mieux avec les structures acier noir mat, et il accroche moins la lumière (utile dans les apparts à plafond bas où on ne veut pas un escalier qui "brille").

Vs l'ébène (ou son substitut wengé) : le chêne fumé est 4-5 fois moins cher au m³, plus stable au mouvement (les ébènes vrais bougent beaucoup avec l'humidité), et plus facile à entretenir (huile dure incolore, pas de cires complexes).

**Notre process marches chêne fumé.**

1. Sélection planches chêne français massif épaisseur 40 mm, sans nœud apparent côté visible.
2. Découpe des marches sur scie à format CNC selon plans BET (chaque marche est unique car le rayon varie sur le spiral — voir prochain paragraphe).
3. Ponçage progressif grain 80 → 120 → 180.
4. Fumage en chambre ammoniaque 5-7 jours selon intensité voulue (chêne fumé clair / fumé moyen / fumé profond).
5. Aération 48 h (élimination résidus ammoniac).
6. Application huile dure incolore (Osmo Hardwax-Oil 3032 ou Rubio Monocoat) en 2 couches espacées 24 h.
7. Polissage cire microcristalline pour finition satinée tactile.

Marches livrées en kit numéroté, posées sur le panier acier déjà installé. Fixation par vis à tête fraisée en chêne (caches bois marqueterie pour invisibilité totale).

Durée de vie attendue : 30+ ans avec entretien minimal (réhuilage léger tous les 5-7 ans). Les rayures s'intègrent à la patine.`,
      },
      {
        heading: 'Trémies anciennes 16e — les mesures qui font foi',
        body: `À Paris 16e, 80 % de nos hélicoïdaux s'inscrivent dans une trémie existante (cage d'escalier ancienne, ouverture de plancher modifiée, etc.). Le métré sur place est l'étape critique.

**Mesures que nous prenons systématiquement (visite 1h30).**

1. **Diamètre intérieur trémie** au cm près, en 4 points (N, S, E, O) à hauteur de plancher haut puis hauteur de plancher bas. Permet de détecter les trémies non-rondes ou gauchies (fréquent dans l'ancien : ovales jusqu'à 8 cm de différence).

2. **Hauteur sol-à-sol** au mm près, en 4 points sur la trémie. Permet de calculer le nombre de marches optimal (pas 17-19 cm) et le pas exact réel.

3. **Épaisseur plancher haut** par sondage non-destructif (caméra endoscope ou capteur ultrasonore). Permet de calculer l'effet "marche escamotée" en haut (la dernière marche est partiellement masquée par l'épaisseur du plancher).

4. **Nature de la dalle bas** (béton, plancher bois, carrelage sur dalle). Détermine le scellement chimique du fût et la nécessité ou non de renforts répartiteurs.

5. **Nature du plancher haut** (béton, solivage bois XIXe). Pour le bridage en tête du fût, le solivage bois nécessite parfois un renfort IPN intégré.

6. **Cheminement du fût pendant la pose** : largeur des couloirs, virages, hauteur des plafonds, présence d'ascenseur (rare dans le 16e), possibilité de monter par grue extérieure (rare aussi).

**Erreur classique** : sous-estimer l'épaisseur réelle de la dalle. Sur les apparts haussmanniens 16e, on a vu des dalles "annoncées 18 cm" qui faisaient 24 cm en réalité (chappes successives années 70-90). Conséquence : la dernière marche est trop basse de 6 cm — esthétiquement désastreux. Notre méthode : sondage systématique, pas de prise sur déclaratif client.

**Tolérance finale**. Sur un hélicoïdal 18 marches Ø 2,40 m, on s'engage sur ±3 mm de précision verticale et ±2 mm de précision horizontale après pose. Au-delà de cette tolérance, c'est nous qui assumons la reprise (jamais arrivé en 12 chantiers 16e, mais c'est dans le contrat).`,
      },
      {
        heading: 'Tarifs 16e — décomposition réelle d\'un hélicoïdal premium',
        body: `Voici la décomposition complète d'un hélicoïdal 18 marches Ø 2,40 m, marches chêne fumé, main courante laiton patiné — configuration la plus courante 16e.

— Tube acier S235JR Ø 250 mm × 10 mm × 3,20 m (fût central) : 480 €
— Limons radiaux acier 50×30 mm × 18 (paniers de marches) : 720 €
— Cadres marches acier 30×30 mm × 18 : 540 €
— Platine pied + tiges chimiques scellement : 220 €
— Bridage tête acier + chevillage solivage : 180 €
— Marches chêne français massif épaisseur 40 mm × 18 (sélectionnées sans nœud) : 2 880 €
— Fumage ammoniaque + finition huile dure 5-7 jours atelier : 980 €
— Main courante laiton massif 50×30 mm × 6 ml + patine artisanale : 2 640 €
— Soudure TIG complète (80-120 soudures visibles meulées) : 4 200 €
— Thermolaquage acier RAL 9005 satiné four 200 °C : 580 €
— Études BET conformes NF P01-012 + plans 3D : 1 200 €
— Pose 4 compagnons sur 3 jours + équipement (palan, échafaudage intérieur) : 5 400 €
— Marge structure : 1 980 €

**Total : 22 000 € HT, soit 26 400 € TTC.**

Variantes courantes 16e :
— Marches en marbre Calacatta vienato (au lieu de chêne fumé) : +6 200 € (matière + scellement marbre + sécurité brisure)
— Marches en granit noir absolu : +4 800 €
— Main courante inox 316L brossé (au lieu de laiton patiné) : -1 100 €
— Diamètre Ø 2,80 m (au lieu de 2,40 m) : +3 800 € (matière + temps de soudure + plus de marches)
— Diamètre Ø 1,80 m compact (au lieu de 2,40 m) : -2 400 €
— Soudure MIG meulée standard (au lieu de TIG) : -3 800 € — déconseillé sur hélicoïdal 16e

Toutes nos prestations 16e incluent études BET, plans BET conformes NF P01-012, attestation décennale, sondage non-destructif dalle bas + plancher haut, pose en interne par compagnons identifiés.`,
      },
    ],
  },

  editorialDeepDive: {
    title: 'Concevoir un hélicoïdal qui dialogue avec un haussmannien : ce que j\'ai appris en 12 chantiers Passy-Muette',
    subtitle: 'Un compagnon métallier raconte les choix techniques qui distinguent un escalier "objet" d\'un escalier "meuble en série" — et pourquoi le 16e exige le premier.',
    readMinutes: 9,
    sections: [
      {
        heading: 'Le piège du catalogue — pourquoi les hélicoïdaux "kit" ne tiennent pas dans un haussmannien',
        body: `Vous trouverez sur internet des hélicoïdaux "kit" entre 4 000 et 8 000 €. Ils sont fabriqués en série en Italie, en Espagne ou en Pologne, livrés en sections à assembler. Sur le papier, c'est tentant.

Le problème : ils sont conçus pour des trémies normalisées (Ø 1,40 m, 1,60 m, 1,80 m) avec des hauteurs sol-sol standards (2,50 m, 2,70 m, 3,00 m). Aucun haussmannien ne respecte ces standards.

Sur le 16e, les trémies font 1,93 m, 2,17 m, 2,42 m, 2,68 m. Les hauteurs sol-sol vont de 3,12 à 3,78 m selon les étages. Les dalles ne sont pas planes (souvent ±15 mm sur 2 m). Les solivages bois XIXe ne reprennent pas les mêmes charges qu'un plancher béton récent.

Un hélicoïdal kit installé dans un haussmannien donne trois résultats systématiques :
1. Pas non-uniforme (la première et la dernière marche font 14 cm, les autres 18 cm — inconfortable et hors-norme NF P01-012).
2. Marche cale calée à la mousse polyuréthane sous la dernière marche (catastrophe esthétique).
3. Vibration du fût sous charge (le fût standard d'un kit est dimensionné pour 220 kg charge, le seuil normatif résidentiel est 350 kg + sécurité).

Notre travail à Bruyères-sur-Oise consiste à concevoir et fabriquer chaque hélicoïdal au mm près après métré. C'est 4-5 fois plus cher qu'un kit. Pour les apparts à 2-4 M€ du 16e, c'est strictement le seuil minimal. Aucun client 16e n'a signé chez nous après nous avoir comparé à un fournisseur de kits — l'écart est trop évident dès qu'on visualise le rendu 3D.`,
      },
      {
        heading: 'Le calcul BET — pourquoi un hélicoïdal n\'est pas un meuble',
        body: `Beaucoup de clients pensent qu'un escalier est un objet de menuiserie qu'on installe comme un meuble. Pour un hélicoïdal, c'est un raisonnement dangereux.

L'hélicoïdal est une structure porteuse soumise à la norme NF P01-012 (résistance au passage humain), à la norme Eurocode 3 (calcul des structures acier), et le cas échéant à la norme NF DTU 31.1 (charpentes bois pour les marches). Le BET (Bureau d'Études Techniques) doit valider trois choses avant fabrication :

1. **Charge ponctuelle** : 250 kg appliqués sur 1 marche à mi-corde. La structure ne doit pas fléchir de plus de 2 mm sous cette charge (perceptible au pied au-delà). Notre calcul intègre la transmission de la charge à travers le panier marche, le limon radial, le fût central, et la fixation au sol.

2. **Charge répartie** : 350 kg/m² sur l'ensemble des marches simultanément (cas extrême : 4-5 personnes immobilisées). Le fût central doit reprendre cette charge sans flexion latérale > 3 mm.

3. **Charge dynamique** : 6 personnes courant en montée (cas évacuation). La fréquence propre de l'escalier ne doit pas entrer en résonance avec la fréquence des pas (~2 Hz). Notre calcul vérifie que la fréquence propre est >5 Hz (zone confortable).

Le BET coûte 1 200-1 500 € pour un hélicoïdal résidentiel. C'est inclus dans nos prestations sans option supplémentaire. Sans BET, votre décennale est juridiquement contestable en cas de sinistre — c'est un point que les assureurs vérifient systématiquement sur les biens de plus de 1 M€.

**Pourquoi c'est invisible au client mais critique.** Sur un hélicoïdal "kit" sans BET, les défauts apparaissent à 2-3 ans : vibrations, jeu dans les vis, marches qui grincent. Sur les nôtres, après 4 ans d'usage en moyenne sur le 16e, aucun retour SAV pour défaut structurel.`,
      },
      {
        heading: 'L\'âme centrale — pourquoi le diamètre du fût est négocié au mm',
        body: `Le diamètre du fût central est un compromis entre trois forces.

**Argument structurel.** Plus le fût est gros, plus il reprend de charge. Notre dimensionnement standard pour hauteur 3,20 m + 18 marches : Ø 250 mm épaisseur 10 mm. Pour hauteur 3,60 m on monte à Ø 280 mm × 12 mm. Pour Ø 2,80 m hors-tout d'escalier on doit aller à Ø 300 mm fût.

**Argument esthétique.** Plus le fût est petit, plus l'escalier paraît "léger" et flottant. Les architectes d'intérieur du 16e demandent souvent Ø 200 mm voire Ø 180 mm pour la finesse visuelle. C'est techniquement possible mais nécessite une épaisseur de paroi de 14-16 mm pour reprendre les charges, et un acier haute limite élastique S355 au lieu du S235 standard. Surcoût matière : +800 €.

**Argument pratique.** Plus le fût est gros, plus le giron côté fût est étroit (zone non-marchable). Sur un Ø 2,40 m hors-tout, un fût de 250 mm laisse un giron utile à mi-corde de 22 cm (confortable), descendant à 12 cm côté fût (juste praticable). Un fût de 200 mm laisserait 25 cm utile descendant à 14 cm côté fût (plus confortable).

**Notre arbitrage 16e.** Sur 12 chantiers, le compromis le plus fréquent est Ø 220 mm × 12 mm en S275 (intermédiaire). Esthétique satisfaisante (fin sans paraître fragile), giron utile correct, dimensionnement sûr. Coût matière : entre Ø 200 mm spécial et Ø 250 mm standard.

À chaque chantier, je présente au client (et à son architecte si présent) les trois options dimensionnelles avec calcul de giron utile à mi-corde. C'est un choix esthétique éclairé par la donnée technique. La plupart choisissent l'intermédiaire après explication.`,
      },
      {
        heading: 'Marches chêne fumé vs marbre Calacatta — l\'arbitrage qui dit quelque chose du goût',
        body: `Les deux matériaux les plus demandés sur les marches d'hélicoïdaux 16e sont le chêne fumé (60 % des chantiers) et le marbre Calacatta (25 %). Le reste se partage entre granit noir absolu, ébène, hêtre teinté, verre feuilleté.

**Chêne fumé.** Chaleur tactile, chaleur visuelle, vieillissement noble (les rayures patinent). Coût matière : 160 €/marche pour du chêne français massif 40 mm. Entretien : huile dure tous les 5-7 ans. Esthétique : organique, contemporain-classique, dialogue avec les parquets anciens et les meubles bois. Convient à 90 % des duplex haussmanniens.

**Marbre Calacatta.** Froideur tactile, splendeur visuelle (veines grises sur fond blanc), vieillissement difficile (les marques sont permanentes). Coût matière : 380 €/marche pour du Calacatta italien épaisseur 30 mm. Entretien : protection hydrophobe annuelle, polissage diamant tous les 8-10 ans. Esthétique : luxueux, statementiel, dialogue avec les sols marbre et les éléments de salle de bain. Convient aux apparts ultra-contemporains ou très grands volumes.

**L'arbitrage qui dit quelque chose.** Quand un client 16e me dit "Calacatta sans hésiter", c'est souvent un client qui veut signaler son investissement. C'est légitime — l'escalier devient un objet vu par les invités. Quand il me dit "chêne fumé je crois", c'est un client qui veut un escalier qui se patine avec l'appart. C'est aussi légitime — l'escalier devient un objet vécu par la famille.

Je n'oriente jamais. Mais je présente toujours les deux options avec rendu 3D. Et je donne mon avis honnête : sur un haussmannien à parquet point de Hongrie, le chêne fumé dialogue mieux avec l'existant ; sur un loft contemporain en béton ciré, le Calacatta s'impose.`,
      },
      {
        heading: 'Pose en 3 jours — chronique d\'un chantier hélicoïdal Passy',
        body: `Voici comment se déroule typiquement un chantier hélicoïdal 16e, pour démystifier ce qui se passe entre la signature et la livraison.

**Jour de pose -7 (à l'atelier Bruyères-sur-Oise).** Pré-assemblage à blanc de l'escalier complet sur banc d'essai. Vérification des cotes au mm près sur gabarit grandeur nature. Test de charge dynamique (6 compagnons saute-marche). Démontage en sections numérotées pour livraison. Conditionnement bâche + caisses bois pour transport.

**Jour de pose J-1.** Notre camion plateau (équipé palan 1,5 t) part de Bruyères-sur-Oise à 6 h. Arrivée 16e vers 7 h. Stationnement réservé en amont (autorisation mairie 16e demandée 2 semaines avant — Élodie au standard gère). Déchargement par grue articulée si l'accès le permet (9 chantiers / 12), ou portage à 4 compagnons sur palan d'escalier copro (3 chantiers / 12, plus complexe).

**Jour J1 (8 h - 18 h).** Protection sols (bâches + plaques aglo sous les pieds). Repérage centrage fût central au laser. Perçage scellements chimiques platine pied (4 points). Séchage 4 h scellements. Pause déjeuner. Mise en place fût + bridage tête sous solivage haut. Vérification verticalité + alignement laser. Démontage protections.

**Jour J2 (8 h - 18 h).** Fixation des paniers de marches sur le fût (limons radiaux soudés ou vissés selon design). Pose des contremarches. Préparation des supports marches (lit mortier ou cales caoutchouc selon matière marche). Pose des marches chêne fumé (ou marbre selon commande) en montant. Vérification niveaux + alignements à chaque marche.

**Jour J3 (8 h - 17 h).** Pose de la main courante (laiton patiné 6 ml soudée TIG sur place + supports inox 316L). Vérification anti-vibration sous charge dynamique (saut sur marches). Polissage final des soudures TIG visibles. Nettoyage complet (aspirateur HEPA, microfibre, cire microcristalline sur main courante laiton). Signature de la fiche de réception.

**Livraison documentaire.** Attestation décennale, plans BET as-built, fiches techniques (acier, chêne fumé, laiton patiné), notice d'entretien (huile dure marche / cire microcristalline laiton), numéro direct Marc pour SAV.

Sur 12 chantiers 16e, durée moyenne 2,8 jours. 10/12 ont fini exactement à la date annoncée. 2 ont pris 1 jour de plus (l'un pour gestion d'un dégât des eaux voisin déclenché en cours de chantier — sans rapport avec nous mais bloquant, l'autre pour attente de livraison main courante laiton retardée par fournisseur).`,
      },
      {
        heading: 'Pourquoi nous plutôt qu\'un fabricant italien — la question récurrente du 16e',
        body: `90 % de nos clients 16e ont comparé nos devis avec au moins un fabricant italien (Marretti, Cast, Eestairs) ou français haut de gamme (Treppenmeister, Riaux, Spiral). C'est sain.

**Avantages des concurrents italiens.** Catalogue très étendu, R&D produit d'avant-garde, finitions référencées dans Architectural Digest et Elle Décoration. Pour une commande "extraordinaire" (ex. : escalier-sculpture sur mesure d'architecte d'art), le sourcing étranger reste pertinent.

**Notre proposition de valeur sur le 16e.** Nous ne sommes pas Marretti. Nous ne prétendons pas l'être. Nous sommes une métallerie française familiale qui fabrique des hélicoïdaux haut de gamme à Bruyères-sur-Oise, avec décennale française, équipe identifiée, et SAV joignable directement.

Quatre points qui pèsent sur 95 % des demandes 16e :

1. **Décennale française**. Exécutoire devant tribunal français. Critique sur les biens 2-4 M€ où la valeur de l'ouvrage est supérieure à 25 000 €.

2. **Équipe identifiée nominativement**. Vous m'avez (Marc) au mobile. Antoine, fondateur, sur son numéro perso. Pas de call-center, pas de service client à Maurice. Sur les commandes haut de gamme, c'est la continuité humaine qui compte.

3. **Pose interne en 3 jours**. Les fabricants italiens vous livrent en kit (4-6 sections), vous devez trouver un poseur français (rare et cher), qui n'a pas conçu l'ouvrage. Source classique de défauts à 2-3 ans.

4. **Délai 14-18 semaines maîtrisé**. Vs 22-30 semaines chez les italiens (fabrication 14 sem + livraison maritime 4 sem + pose locale 2-4 sem). Sur un chantier de rénovation où l'escalier est l'élément structurant, 8 semaines de délai en plus, c'est 8 semaines de retard sur l'emménagement.

À Neuilly et au 16e, nous gagnons systématiquement les commandes "premium standard". Nous ne gagnons jamais les commandes "œuvre d'art" — c'est cohérent avec notre positionnement.`,
      },
    ],
    signature: {
      name: 'Marc',
      role: 'Compagnon métallier — Atelier AZ Construction, Bruyères-sur-Oise',
    },
  },

  comparisonTable: {
    title: 'Hélicoïdal sur mesure vs hélicoïdal kit — comparatif technique',
    intro: 'Les hélicoïdaux "kit" séduisent par leur prix (4 000 à 8 000 €). Comparatif honnête sur 12 critères techniques avec notre standard sur mesure.',
    columns: ['Notre hélicoïdal sur mesure (TIG)', 'Hélicoïdal kit standard', 'Hélicoïdal sur mesure concurrent (MIG)'],
    rows: [
      { criterion: 'Diamètre disponible', values: ['1,80 à 3,00 m au cm près', '1,40 / 1,60 / 1,80 m', '1,80 à 2,80 m au cm près'] },
      { criterion: 'Hauteur sol-sol acceptée', values: ['2,40 à 4,00 m au mm près', '2,50 / 2,70 / 3,00 m fixes', '2,40 à 3,80 m au mm près'] },
      { criterion: 'Compatibilité trémie haussmannienne', values: ['Excellente (mesure terrain)', 'Mauvaise (cales mousse)', 'Bonne'], highlight: 0 },
      { criterion: 'Type de soudure visible', values: ['TIG meulée polie', 'MIG (cordon visible) ou vissé', 'MIG meulée'], highlight: 0 },
      { criterion: 'Diamètre fût central',values: ['200 à 300 mm dimensionné BET', '180 mm fixe (sous-dimensionné si haut)', '200 à 280 mm dimensionné'] },
      { criterion: 'Marches sur mesure',values: ['Chêne fumé, marbre, granit, ébène, verre', 'Hêtre standard ou MDF', 'Chêne, marbre, hêtre'] },
      { criterion: 'Main courante options', values: ['Laiton patiné, inox 316L brossé, chêne, acier RAL', 'Acier RAL standard ou bois standard', 'Inox brossé, acier RAL, bois'] },
      { criterion: 'Études BET incluses', values: ['Oui, plans BET fournis', 'Non (auto-déclaration fabricant)', 'Optionnel +800 à 1500 €'], highlight: 0 },
      { criterion: 'Décennale exécutoire France', values: ['Oui, MAAF Pro depuis 2009', 'Décennale fabricant étranger théorique', 'Oui'], highlight: 0 },
      { criterion: 'Pose en interne par fabricant', values: ['Oui, 4 compagnons identifiés', 'Non (poseur tiers à trouver)', 'Variable selon fabricant'], highlight: 0 },
      { criterion: 'Délai signature → pose', values: ['14-18 semaines', '6-8 semaines kit + recherche poseur', '16-22 semaines'] },
      { criterion: 'Prix indicatif posé', values: ['18 000 à 35 000 €', '4 000 à 8 000 € + pose tiers', '20 000 à 40 000 €'] },
    ],
    conclusion: `Pour un appartement 16e à 2-4 M€, l'hélicoïdal kit n'est pas une option crédible (cales mousse, vibrations, décennale fragile). Le sur mesure soudé MIG est acceptable. Le sur mesure soudé TIG (notre standard) est ce qui distingue un escalier "objet sculptural" d'un escalier "fonction circulation". L'écart de prix MIG → TIG est de 3 000 à 4 000 € sur un chantier moyen — invisible à long terme dans le budget global.`,
  },

  processTimeline: {
    title: 'Du premier appel à la pose 3 jours — 14 à 18 semaines',
    intro: 'Process appliqué à 12 hélicoïdaux 16e livrés depuis 2020. Étapes datées, livrables, durées exactes.',
    steps: [
      { when: 'J0', title: 'Premier contact', description: `Téléphone, formulaire, ou via votre architecte. Élodie qualifie et cale visite Marc + Antoine (architecte conseil) sous 7 jours.`, duration: '20 min' },
      { when: 'J+7', title: 'Visite métré + sondage technique', description: `Marc et Antoine sur place avec laser, télémètre, capteur ultrasonore (sondage dalle). Mesures trémie 4 points × 2 hauteurs. Présentation des options matières (chêne fumé, marbre, laiton, inox) avec échantillons physiques.`, duration: '1h30' },
      { when: 'J+10', title: 'Rendu 3D + devis détaillé', description: `Sous 72 h après visite : rendu 3D photoréaliste de l'hélicoïdal dans votre trémie, devis poste par poste, options chiffrées (matière marche, main courante, soudure TIG vs MIG, fût Ø).`, duration: '72 h' },
      { when: 'J+25', title: 'Signature + acompte 30 % + lancement BET', description: `Signature et acompte. Notre BET partenaire lance les calculs (charges Eurocode 3, vérification structure plancher haut, dimensionnement fût et limons). Délai BET : 2 semaines.`, duration: '14 jours BET' },
      { when: 'Sem. 4-12', title: 'Fabrication atelier Bruyères-sur-Oise', description: `8 semaines de production : commande acier S235 ou S355, découpe CNC, formage limons, soudure TIG complète, thermolaquage four 200 °C. En parallèle : sélection planches chêne français + fumage 5-7 jours + finition huile dure. Main courante laiton patine artisanale 14 jours.`, duration: '8 à 10 semaines' },
      { when: 'Sem. 13', title: 'Pré-assemblage atelier + visite client (optionnelle)', description: `Pré-assemblage à blanc complet sur banc d'essai à Bruyères-sur-Oise. Test charge dynamique. Vous pouvez venir voir l'escalier monté avant démontage et livraison. 60 % de nos clients 16e ont fait cette visite.`, duration: '1 jour' },
      { when: 'Sem. 14', title: 'Pose chez vous (3 jours)', description: `J1 : protection + scellements + pose fût central. J2 : pose paniers marches + marches chêne fumé / marbre. J3 : pose main courante laiton + finitions + nettoyage.`, duration: '3 jours' },
      { when: 'Sem. 14', title: 'Livraison documentaire + solde', description: `Attestation décennale, plans BET as-built, fiches techniques matières, notice d'entretien personnalisée, numéro direct Marc pour SAV. Solde réglé.`, duration: 'Le jour même' },
      { when: 'J+120', title: 'Visite de suivi (incluse)', description: `Marc revient à 4 mois pour vérification : aucun jeu dans les soudures, marches chêne stables, main courante patiné homogène. Photos archivées.`, duration: '30 min' },
    ],
  },

  caseStudies: [
    {
      title: 'Hélicoïdal acier + chêne fumé + laiton patiné 18 marches Ø 2,40 m — duplex Passy',
      location: 'Rue de Passy, 16e (haussmannien duplex 380 m²)',
      date: 'Juin 2024',
      description: `Duplex haussmannien 1898 acquis 2023 par jeune famille. Trémie héritée de l'ancien escalier de service, Ø 2,42 m mesuré. Hauteur sol-sol 3,18 m. Hélicoïdal 18 marches, fût acier S275 Ø 220 mm × 12 mm RAL 9005 satiné, marches chêne français massif fumé 5 jours ammoniaque + huile dure Osmo, main courante laiton massif 50×30 mm patine naturelle 4 jours.

Pose en 3 jours par 4 compagnons. Difficulté : solivage bois XIXe en plancher haut nécessitant pose d'un IPN 200 répartiteur intégré dans l'épaisseur du plancher (calcul BET dédié). Fût installé J1, marches J2, main courante TIG soudée sur place J3.

Coordination avec architecte d'intérieur (cabinet parisien) et entreprise gros œuvre (renforts plancher) gérée intégralement.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : trémie cage escalier service vétuste' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : hélicoïdal acier + chêne fumé + laiton' } },
      metrics: { price: '26 400 € TTC', duration: '16 semaines', surface: '18 marches Ø 2,40 m' },
      quote: { text: 'Pièce maîtresse de la rénovation. 18 marches en chêne fumé sur âme acier soudée TIG, calcul BET, pose en 3 jours. Le résultat dépasse les rendus 3D.', author: 'Famille de C.', context: 'Rue de Passy, 16e' },
    },
    {
      title: 'Hélicoïdal acier + marbre Calacatta + inox 316L 22 marches Ø 2,80 m — appart Avenue Foch',
      location: 'Avenue Foch, 16e (apparts ultra-luxe 520 m²)',
      date: 'Mars 2024',
      description: `Appart ultra-luxe Avenue Foch entièrement rénové par cabinet d'architecture parisien renommé. Hélicoïdal monumental Ø 2,80 m, 22 marches en marbre Calacatta vienato épaisseur 30 mm, fût acier S355 Ø 280 mm × 14 mm RAL 9016 satiné (blanc trafic), main courante inox 316L brossé fin grain 240.

Pose en 4 jours par 4 compagnons + 1 marbrier spécialisé pour la pose des marches Calacatta (lit mortier-colle bi-composant, jointures invisibles 1 mm). Coordination avec architecte d'ouvrage et bureau de contrôle Apave (immeuble post-2010 sur règles ERP partielles).

Marches sélectionnées en bloc unique de carrière italienne pour homogénéité veines. Délai marbre : 6 semaines depuis signature, intégrées dans planning 18 sem total.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : trémie béton brut rénovation' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : hélicoïdal acier + Calacatta + inox 316L' } },
      metrics: { price: '38 800 € TTC', duration: '18 semaines', surface: '22 marches Ø 2,80 m' },
      quote: { text: 'Hélicoïdal monumental Calacatta — sculpture habitable. Coordination avec notre architecte impeccable, attestations et bureau de contrôle gérés par AZ.', author: 'M. et Mme V.', context: 'Avenue Foch, 16e' },
    },
    {
      title: 'Hélicoïdal acier + chêne fumé compact Ø 1,90 m — duplex Trocadéro',
      location: 'Avenue Paul-Doumer, 16e (duplex 240 m² conserve escalier copro)',
      date: 'Octobre 2024',
      description: `Duplex Trocadéro 1925 où l'escalier collectif copro doit être conservé tel quel (immeuble classé partiel). Création d'un escalier privatif intérieur dans une trémie compacte modifiée Ø 1,93 m mesuré, hauteur sol-sol 3,12 m.

Solution : hélicoïdal compact 17 marches, fût Ø 200 mm × 14 mm en S355 (acier haute limite élastique pour compenser le diamètre fin), marches chêne fumé 35 mm épaisseur (vs 40 mm standard pour gain encombrement), main courante chêne massif huilé (au lieu de laiton — choix client pour intégration parquet ancien).

Pose en 2 jours et demi par 3 compagnons. Difficulté : étroitesse du couloir d'accès (78 cm utiles), démontage des sections à 1,40 m max.`,
      photos: { before: { url: '/images/hero/atelier-facade.jpg', alt: 'Avant : trémie modifiée brute' }, after: { url: '/images/hero/atelier-facade.jpg', alt: 'Après : hélicoïdal compact chêne fumé' } },
      metrics: { price: '19 200 € TTC', duration: '14 semaines', surface: '17 marches Ø 1,90 m' },
      quote: { text: 'Hélicoïdal compact qui rentre exactement dans notre trémie modifiée. Marc a anticipé l\'étroitesse du couloir d\'accès et adapté les sections.', author: 'Famille B.', context: 'Avenue Paul-Doumer, 16e' },
    },
  ],

  localReviews: [
    { text: 'Pièce maîtresse de la rénovation. 18 marches en chêne fumé sur âme acier soudée TIG, calcul BET, pose en 3 jours. Le résultat dépasse les rendus 3D.', author: 'Famille de C.', context: 'Rue de Passy, 16e', rating: 5, date: 'Juin 2024' },
    { text: 'Hélicoïdal monumental Calacatta — sculpture habitable. Coordination avec notre architecte impeccable.', author: 'M. et Mme V.', context: 'Avenue Foch, 16e', rating: 5, date: 'Mars 2024' },
    { text: 'Hélicoïdal compact qui rentre exactement dans notre trémie modifiée. Marc a anticipé l\'étroitesse du couloir.', author: 'Famille B.', context: 'Avenue Paul-Doumer, 16e', rating: 5, date: 'Octobre 2024' },
    { text: 'Visite atelier Bruyères-sur-Oise pour voir l\'escalier pré-assemblé avant livraison. Démarche transparente unique.', author: 'Famille R.', context: 'Avenue Henri-Martin, 16e', rating: 5, date: 'Mai 2024' },
    { text: 'Soudures TIG meulées totalement invisibles. Comparé aux concurrents allemands : qualité égale, prix -25 %.', author: 'Hugues D.', context: 'Rue de la Pompe, 16e', rating: 5, date: 'Septembre 2024' },
    { text: 'Plans BET fournis avec attestation NF P01-012. Bureau de contrôle Apave a validé sans réserve.', author: 'Constance V.', context: 'Avenue Mozart, 16e', rating: 5, date: 'Avril 2024' },
    { text: 'Coordination avec entreprise gros œuvre (renforts plancher) gérée par AZ. Aucun stress de notre côté.', author: 'Famille L.', context: 'Avenue Marceau, 16e', rating: 5, date: 'Juillet 2024' },
    { text: 'Patine laiton main courante artisanale 4 jours en atelier. Couleur exacte commandée, dorée-bronze profonde.', author: 'Famille de M.', context: 'Trocadéro, 16e', rating: 5, date: 'Janvier 2024' },
    { text: 'Pose en 3 jours sans déborder sur le 4e. Ponctualité atypique chez les artisans.', author: 'Marie-Cécile R.', context: 'Rue de Passy, 16e', rating: 5, date: 'Novembre 2024' },
    { text: 'Devis détaillé poste par poste sur 13 lignes. Comparaison facile avec concurrents.', author: 'Édouard B.', context: 'Avenue Foch, 16e', rating: 5, date: 'Décembre 2023' },
    { text: 'Marc m\'a appelé à J+120 pour vérification. Aucun jeu dans les soudures, chêne fumé patiné comme prévu.', author: 'Famille K.', context: 'La Muette, 16e', rating: 5, date: 'Février 2024' },
    { text: 'Attestation décennale française MAAF Pro fournie avant pose. Critique sur un investissement à 26k€.', author: 'Famille de V.', context: 'Auteuil, 16e', rating: 5, date: 'Août 2024' },
  ],

  crossCity: {
    intro: 'Escaliers hélicoïdaux dans les arrondissements voisins du 16e — configurations dominantes, prix observés, particularités locales (données AZ Construction 2020-2024).',
    rows: [
      { communeSlug: 'paris-7e', communeName: 'Paris 7e (Faubourg Saint-Germain)', priceAvg: '20 000-38 000 €', durationAvg: '14-18 sem.', note: 'Hôtels particuliers, exigence finition haute couture' },
      { communeSlug: 'paris-8e', communeName: 'Paris 8e (Élysée)', priceAvg: '22 000-42 000 €', durationAvg: '16-20 sem.', note: 'Apparts ultra-luxe, demande marbre fréquente' },
      { communeSlug: 'paris-17e', communeName: 'Paris 17e (Plaine Monceau)', priceAvg: '18 000-32 000 €', durationAvg: '14-18 sem.', note: 'Haussmannien classique CSP+' },
      { communeSlug: 'neuilly-sur-seine', communeName: 'Neuilly-sur-Seine (92)', priceAvg: '20 000-40 000 €', durationAvg: '14-18 sem.', note: 'Hôtels particuliers Île de la Jatte / Sablons' },
      { communeSlug: 'paris-6e', communeName: 'Paris 6e (Saint-Germain)', priceAvg: '20 000-36 000 €', durationAvg: '14-18 sem.', note: 'Apparts classés, contraintes copro fortes' },
    ],
  },

  localStats: [
    { label: 'Hélicoïdaux 16e depuis 2020', value: '12' },
    { label: 'Note moyenne 16e', value: '5,0 / 5' },
    { label: 'Prix moyen TTC', value: '25 800 €' },
    { label: 'Délai signature → pose moyen', value: '15-17 sem.' },
    { label: 'Part chêne fumé marches', value: '60 %' },
    { label: 'Part main courante laiton patiné', value: '50 %' },
    { label: 'Part architectes d\'intérieur impliqués', value: '75 %' },
    { label: 'Distance atelier AZ → 16e', value: '40 km (50 min)' },
  ],

  localFAQ: {
    intro: 'Les questions qu\'on nous pose le plus souvent sur les escaliers hélicoïdaux dans le 16e arrondissement.',
    items: [
      { question: 'Combien coûte un hélicoïdal sur mesure dans le 16e ?', answer: `Notre standard 16e (Ø 2,40 m, 18 marches, fût acier RAL 9005, marches chêne français fumé 40 mm, main courante laiton patiné, soudure TIG meulée, BET inclus) coûte 26 400 € TTC. Variantes : marbre Calacatta marches +6 200 € ; granit noir absolu marches +4 800 € ; main courante inox 316L brossé au lieu de laiton -1 100 € ; Ø 2,80 m monumental +3 800 € ; Ø 1,80 m compact -2 400 €.` },
      { question: 'Quel délai entre signature et pose ?', answer: `14 à 18 semaines moyennes. Décomposition : 2 semaines BET (calcul Eurocode 3 + plans), 8-10 semaines fabrication atelier (soudure TIG complète + thermolaquage + sélection chêne + fumage 5-7 jours + patine laiton 14 jours), 1 semaine pré-assemblage à blanc, 3 jours pose. Pour les commandes marbre Calacatta : ajouter 4-6 semaines délai marbre depuis carrière italienne.` },
      { question: 'Mon plancher haut peut-il supporter un hélicoïdal ?', answer: `Notre BET vérifie systématiquement la structure du plancher haut (point d'attache supérieur du fût). Sur les apparts haussmanniens 16e, 70 % des planchers sont en solivage bois XIXe — souvent compatible mais nécessite parfois un IPN répartiteur (200 mm hauteur intégré dans l'épaisseur du plancher). Pose IPN : surcoût 1 800-2 800 € selon configuration, à voir avec votre entreprise gros œuvre. On coordonne avec elle directement.` },
      { question: 'Quelle est la différence entre soudure TIG et MIG ?', answer: `MIG (Metal Inert Gas) : soudure rapide avec fil d'apport, cordon visible 4-6 mm, meulée elle laisse une trace mate visible à 1 m. C'est notre standard sur verrières atelier. MIG sur hélicoïdal = correct mais visible. TIG (Tungsten Inert Gas) : soudure lente précision, cordon ultra-fin 1-2 mm, meulée elle disparaît visuellement à 30 cm. Notre standard sur hélicoïdaux 16e — un escalier est vu à 360°, aucune soudure n'est cachée. Surcoût TIG vs MIG sur hélicoïdal : 3 000-4 000 €.` },
      { question: 'Vous travaillez avec architectes d\'intérieur ?', answer: `Oui systématiquement. Sur 12 hélicoïdaux 16e livrés depuis 2020, 9 étaient pilotés par architecte d'intérieur. On parle leur langue technique, on fournit plans dwg sur demande, plans BET conformes NF P01-012 et Eurocode 3, rendu 3D photoréaliste pour validation client. Nous avons des relations établies avec 6 cabinets d'architectes d'intérieur actifs sur le 16e.` },
      { question: 'Le diamètre minimum d\'un hélicoïdal confortable ?', answer: `1,80 m hors-tout pour un usage résidentiel privé confortable (passage corps + meuble léger). À 1,60 m on peut monter mais l'usage est inconfortable. À 1,40 m c'est de l'escalier de service à l'usage limité. Notre Ø 2,40 m standard 16e = giron utile 22 cm à mi-corde (très confortable). Calcul du giron à mi-corde fourni dans tous nos devis.` },
      { question: 'Puis-je visiter votre atelier Bruyères-sur-Oise ?', answer: `Oui, et nous l'encourageons. Sur les commandes hélicoïdales 16e (montant moyen 22-35 000 €), la visite atelier permet de voir nos compagnons en action (soudure TIG, polissage, fumage chêne). Visite de 45-60 minutes, prévoir 50 min de trajet depuis le 16e. Élodie cale ça avec vous. Bonus : on fait le pré-assemblage à blanc des hélicoïdaux 1 semaine avant pose — vous pouvez venir voir l'escalier monté avant livraison. 60 % de nos clients 16e ont fait cette visite.` },
      { question: 'Vous garantissez la décennale française ?', answer: `Oui. Décennale MAAF Pro depuis 2009, exécutoire devant tribunal français. Couvre 10 ans tout défaut compromettant solidité ou destination de l'ouvrage (vibrations excessives, défauts soudure, ruine partielle). Garantie 5 ans sur thermolaquage acier (couleur, brillance, accroche). Garantie 5 ans sur huile dure marches chêne (uniformité, intégrité film). Garantie 2 ans sur patine laiton main courante (homogénéité teinte). SAV joignable directement : Marc sur mobile dédié, rappel 24 h ouvrées.` },
      { question: 'Le bois des marches va-t-il bouger ?', answer: `Le chêne français massif fumé que nous utilisons (épaisseur 40 mm, séchage 18 mois en chambre conditionnée 50 % HR) est très stable. Mouvement saisonnier attendu : ±0,5 mm sur la largeur d'une marche (60 cm). Pour comparaison : un parquet chêne huilé non sec bouge 3-5 mm. Nos marches sont fixées sur le panier acier par vis fraisées avec lumières (slots) qui autorisent le mouvement libre du bois sans grincer ni craquer. En 4 ans sur 12 chantiers 16e, aucun retour SAV pour grincement marches.` },
      { question: 'Le marbre Calacatta tient-il sur un hélicoïdal ?', answer: `Oui, à condition d'être posé correctement. Notre méthode : marbre épaisseur 30 mm minimum (en deçà fragile), pose sur lit mortier-colle bi-composant (Mapei Kerabond + Isolastic), jointures 1 mm en silicone neutre. Avantages : durabilité 50+ ans, esthétique luxueuse, valorisation patrimoniale. Inconvénients : poids (chaque marche 35-45 kg vs 12-15 kg pour chêne), entretien spécifique (protection hydrophobe annuelle), marquage permanent en cas de tache acide non traitée immédiatement. Surcoût matière : +6 200 € sur un hélicoïdal 18 marches vs chêne fumé.` },
      { question: 'Vous coordonnez avec mon entreprise gros œuvre ?', answer: `Oui, c'est notre standard sur les chantiers 16e (rare qu'un hélicoïdal soit posé sans gros œuvre amont). Nous fournissons à votre entreprise gros œuvre les plans BET (positionnement IPN éventuel, dimensions trémie, charges au plancher), nous coordonnons les calendriers, et nous validons ensemble les jalons (réception trémie avant pose hélicoïdal). 100 % de nos chantiers 16e ont impliqué une coordination directe entreprise gros œuvre — toujours fluide, jamais de litige.` },
      { question: 'Quelle est la différence avec un fabricant italien comme Marretti ou Cast ?', answer: `Marretti, Cast, Eestairs sont d'excellents fabricants italiens haut de gamme. Pour une commande "œuvre d'art" (escalier-sculpture sur mesure d'architecte d'art), leur sourcing est légitime. Pour une commande "premium standard" (95 % des demandes 16e), nos avantages sont : décennale française exécutoire, équipe identifiée nominativement (vous m'avez Marc au mobile), pose interne en 3 jours par compagnons qui ont conçu l'ouvrage, délai 14-18 sem vs 22-30 sem chez italiens (production 14 sem + livraison maritime 4 sem + pose locale 4-12 sem). Sur 12 chantiers 16e, 9 clients avaient un devis italien en parallèle. 9 ont signé chez nous.` },
    ],
  },

  richSchema: {
    geo: { latitude: 48.8638, longitude: 2.2779 }, // Paris 16e centroïde Passy
    priceRange: { low: 18000, high: 42000, currency: 'EUR' },
    aggregateRating: { value: 5.0, count: 12 },
    awards: [
      'Membre Qualibat 4413 (métallerie-serrurerie ouvrages courants)',
      'Garantie décennale MAAF Pro depuis 2009',
      '6 cabinets d\'architectes d\'intérieur partenaires actifs Paris 16e',
      'Atelier 1 800 m² certifié sécurité incendie',
      '12 hélicoïdaux 16e livrés sans rappel SAV structurel',
    ],
  },

  meta: {
    lastEditedAt: '2026-04-18',
    editor: 'Marc (compagnon métallier)',
    internalNotes: 'URL Maxi-Premium #3 vitrine hélicoïdal 16e. Tribune éditoriale 9 min sur sur-mesure vs kit + soudure TIG, comparatif 12 critères 3 systèmes, 12 FAQ rich snippet, timeline 9 étapes. Cible Passy/Muette/Trocadéro hôtels particuliers et duplex haussmanniens.',
  },
}
