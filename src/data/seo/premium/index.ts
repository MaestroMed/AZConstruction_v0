/**
 * Registry central des PremiumCase. Pour ajouter une nouvelle URL Premium+ :
 *
 *   1. Créer `src/data/seo/premium/<product>-<dept>-<commune?>.ts`
 *      qui exporte un `PremiumCase` (cf. types.ts + _template.ts)
 *   2. L'importer ici et l'ajouter à `PREMIUM_REGISTRY`
 *
 * Le composant `<ProductLocalPage>` appelle `getPremiumCase()` au render et,
 * si une case existe et que `status === 'published'`, substitue/enrichit
 * les blocs standards avec les blocs Premium+.
 */

import type { PremiumCase } from './types'

// ── Registry — un import par URL Premium+ ─────────────────────────
// Format de clé : "<productSlug>|<deptSlug>|<communeSlug ?? '_dept'>"
// Le séparateur `|` est sûr (jamais dans un slug).

// Paris 75
import { gardeCorpsVerreParis75Paris15e } from './garde-corps-verre-paris-75-paris-15e'
import { gardeCorpsVerreParis75Paris14e } from './garde-corps-verre-paris-75-paris-14e'
import { gardeCorpsParis75Paris1er } from './garde-corps-paris-75-paris-1er'
import { gardeCorpsParis75Paris11e } from './garde-corps-paris-75-paris-11e'
import { gardeCorpsParis75Paris12e } from './garde-corps-paris-75-paris-12e'
import { gardeCorpsParis75Paris19e } from './garde-corps-paris-75-paris-19e'
import { gardeCorpsParis75Paris4e } from './garde-corps-paris-75-paris-4e'
import { gardeCorpsParis75Paris5e } from './garde-corps-paris-75-paris-5e'
import { gardeCorpsParis75Paris6e } from './garde-corps-paris-75-paris-6e'
import { verriereAtelierParis75Paris7e } from './verriere-atelier-paris-75-paris-7e'
import { verriereAtelierParis75Paris17e } from './verriere-atelier-paris-75-paris-17e'
import { verriereAtelierParis75Paris3e } from './verriere-atelier-paris-75-paris-3e'
import { verriereAtelierParis75Paris6e } from './verriere-atelier-paris-75-paris-6e'
import { verriereAtelierParis75Paris16e } from './verriere-atelier-paris-75-paris-16e'
import { verriereAtelierParis75Paris18e } from './verriere-atelier-paris-75-paris-18e'
import { portailCoulissantParis75Paris16e } from './portail-coulissant-paris-75-paris-16e'
import { portailCoulissantParis75Paris7e } from './portail-coulissant-paris-75-paris-7e'
import { portailsParis75Paris8e } from './portails-paris-75-paris-8e'
import { portailsParis75Paris10e } from './portails-paris-75-paris-10e'
import { portailsParis75Paris13e } from './portails-paris-75-paris-13e'
import { portailsParis75Paris20e } from './portails-paris-75-paris-20e'
import { escalierHelicoidalParis75Paris7e } from './escalier-helicoidal-paris-75-paris-7e'
import { escalierHelicoidalParis75Paris16e } from './escalier-helicoidal-paris-75-paris-16e'
import { escaliersParis75Paris15e } from './escaliers-paris-75-paris-15e'
import { escaliersParis75Paris9e } from './escaliers-paris-75-paris-9e'
import { thermolaquageParis75Paris15e } from './thermolaquage-paris-75-paris-15e'

// Hauts-de-Seine 92
import { verriereAtelierHautsDeSeine92BoulogneBillancourt } from './verriere-atelier-hauts-de-seine-92-boulogne-billancourt'
import { verriereAtelierHautsDeSeine92LevalloisPerret } from './verriere-atelier-hauts-de-seine-92-levallois-perret'
import { verrieresHautsDeSeine92NeuillySurSeine } from './verrieres-hauts-de-seine-92-neuilly-sur-seine'
import { verrieresHautsDeSeine92Suresnes } from './verrieres-hauts-de-seine-92-suresnes'
import { gardeCorpsVerreHautsDeSeine92NeuillySurSeine } from './garde-corps-verre-hauts-de-seine-92-neuilly-sur-seine'
import { gardeCorpsVerreHautsDeSeine92IssyLesMoulineaux } from './garde-corps-verre-hauts-de-seine-92-issy-les-moulineaux'
import { gardeCorpsVerreHautsDeSeine92RueilMalmaison } from './garde-corps-verre-hauts-de-seine-92-rueil-malmaison'
import { gardeCorpsHautsDeSeine92AsnieresSurSeine } from './garde-corps-hauts-de-seine-92-asnieres-sur-seine'
import { gardeCorpsHautsDeSeine92Chatillon } from './garde-corps-hauts-de-seine-92-chatillon'
import { portailAutoportantHautsDeSeine92Nanterre } from './portail-autoportant-hauts-de-seine-92-nanterre'
import { portailAutoportantHautsDeSeine92RueilMalmaison } from './portail-autoportant-hauts-de-seine-92-rueil-malmaison'
import { portailCoulissantHautsDeSeine92Courbevoie } from './portail-coulissant-hauts-de-seine-92-courbevoie'
import { portailsHautsDeSeine92Antony } from './portails-hauts-de-seine-92-antony'
import { portailsHautsDeSeine92BoulogneBillancourt } from './portails-hauts-de-seine-92-boulogne-billancourt'
import { portailsHautsDeSeine92Colombes } from './portails-hauts-de-seine-92-colombes'
import { escaliersHautsDeSeine92Clamart } from './escaliers-hauts-de-seine-92-clamart'
import { thermolaquageHautsDeSeine92BoulogneBillancourt } from './thermolaquage-hauts-de-seine-92-boulogne-billancourt'
import { thermolaquageHautsDeSeine92Nanterre } from './thermolaquage-hauts-de-seine-92-nanterre'

// Seine-Saint-Denis 93
import { portailsSeineSaintDenis93SaintDenis } from './portails-seine-saint-denis-93-saint-denis'
import { portailsSeineSaintDenis93Aubervilliers } from './portails-seine-saint-denis-93-aubervilliers'
import { portailsSeineSaintDenis93AulnaySousBois } from './portails-seine-saint-denis-93-aulnay-sous-bois'
import { portailCoulissantSeineSaintDenis93NoisyLeGrand } from './portail-coulissant-seine-saint-denis-93-noisy-le-grand'
import { gardeCorpsSeineSaintDenis93Bobigny } from './garde-corps-seine-saint-denis-93-bobigny'
import { gardeCorpsSeineSaintDenis93Drancy } from './garde-corps-seine-saint-denis-93-drancy'
import { verriereAtelierSeineSaintDenis93Pantin } from './verriere-atelier-seine-saint-denis-93-pantin'
import { escaliersSeineSaintDenis93Montreuil } from './escaliers-seine-saint-denis-93-montreuil'
import { thermolaquageSeineSaintDenis93SaintDenis } from './thermolaquage-seine-saint-denis-93-saint-denis'

// Val-de-Marne 94
import { portailsValDeMarne94Creteil } from './portails-val-de-marne-94-creteil'
import { portailsValDeMarne94Vincennes } from './portails-val-de-marne-94-vincennes'
import { portailsValDeMarne94ChampignySurMarne } from './portails-val-de-marne-94-champigny-sur-marne'
import { portailsValDeMarne94FontenaySousBois } from './portails-val-de-marne-94-fontenay-sous-bois'
import { portailsValDeMarne94IvrySurSeine } from './portails-val-de-marne-94-ivry-sur-seine'
import { gardeCorpsValDeMarne94SaintMaurDesFosses } from './garde-corps-val-de-marne-94-saint-maur-des-fosses'
import { gardeCorpsValDeMarne94MaisonsAlfort } from './garde-corps-val-de-marne-94-maisons-alfort'
import { gardeCorpsVerreValDeMarne94JoinvilleLePont } from './garde-corps-verre-val-de-marne-94-joinville-le-pont'
import { verrieresValDeMarne94CharentonLePont } from './verrieres-val-de-marne-94-charenton-le-pont'
import { verriereAtelierValDeMarne94Vincennes } from './verriere-atelier-val-de-marne-94-vincennes'

// Val-d'Oise 95
import { gardeCorpsValDoise95Cergy } from './garde-corps-val-doise-95-cergy'
import { gardeCorpsValDoise95Argenteuil } from './garde-corps-val-doise-95-argenteuil'
import { gardeCorpsValDoise95Pontoise } from './garde-corps-val-doise-95-pontoise'
import { thermolaquageValDoise95Cergy } from './thermolaquage-val-doise-95-cergy'
import { verrieresValDoise95Eaubonne } from './verrieres-val-doise-95-eaubonne'
import { verriereAtelierValDoise95Taverny } from './verriere-atelier-val-doise-95-taverny'
import { portailsValDoise95Sarcelles } from './portails-val-doise-95-sarcelles'
import { portailsValDoise95Franconville } from './portails-val-doise-95-franconville'

// Yvelines 78
import { gardeCorpsYvelines78Versailles } from './garde-corps-yvelines-78-versailles'
import { gardeCorpsVerreYvelines78MaisonsLaffitte } from './garde-corps-verre-yvelines-78-maisons-laffitte'
import { verrieresYvelines78SaintGermainEnLaye } from './verrieres-yvelines-78-saint-germain-en-laye'
import { verrieresYvelines78Chatou } from './verrieres-yvelines-78-chatou'
import { verrieresYvelines78Houilles } from './verrieres-yvelines-78-houilles'
import { portailAutoportantYvelines78LeVesinet } from './portail-autoportant-yvelines-78-le-vesinet'
import { portailCoulissantYvelines78SaintGermainEnLaye } from './portail-coulissant-yvelines-78-saint-germain-en-laye'
import { portailsYvelines78Sartrouville } from './portails-yvelines-78-sartrouville'
import { portailsYvelines78ConflansSainteHonorine } from './portails-yvelines-78-conflans-sainte-honorine'
import { thermolaquageYvelines78Versailles } from './thermolaquage-yvelines-78-versailles'

// Essonne 91
import { portailsEssonne91EvryCourcouronnes } from './portails-essonne-91-evry-courcouronnes'
import { portailsEssonne91CorbeilEssonnes } from './portails-essonne-91-corbeil-essonnes'
import { verriereAtelierEssonne91Massy } from './verriere-atelier-essonne-91-massy'
import { gardeCorpsEssonne91Palaiseau } from './garde-corps-essonne-91-palaiseau'
import { thermolaquageEssonne91Massy } from './thermolaquage-essonne-91-massy'

// Seine-et-Marne 77
import { portailsSeineEtMarne77Meaux } from './portails-seine-et-marne-77-meaux'
import { portailsSeineEtMarne77PontaultCombault } from './portails-seine-et-marne-77-pontault-combault'
import { verrieresSeineEtMarne77Melun } from './verrieres-seine-et-marne-77-melun'
import { gardeCorpsSeineEtMarne77Chelles } from './garde-corps-seine-et-marne-77-chelles'

// Oise 60
import { portailsOise60Beauvais } from './portails-oise-60-beauvais'
import { verriereAtelierOise60Compiegne } from './verriere-atelier-oise-60-compiegne'
import { gardeCorpsOise60Creil } from './garde-corps-oise-60-creil'

// Aisne 02
import { portailsAisne02SaintQuentin } from './portails-aisne-02-saint-quentin'
import { verrieresAisne02Soissons } from './verrieres-aisne-02-soissons'

// Somme 80
import { verriereAtelierSomme80Amiens } from './verriere-atelier-somme-80-amiens'
import { portailsSomme80Abbeville } from './portails-somme-80-abbeville'

// Eure 27
import { portailsEure27Evreux } from './portails-eure-27-evreux'
import { gardeCorpsEure27Vernon } from './garde-corps-eure-27-vernon'

// Eure-et-Loir 28
import { verrieresEureEtLoir28Chartres } from './verrieres-eure-et-loir-28-chartres'
import { portailsEureEtLoir28Dreux } from './portails-eure-et-loir-28-dreux'

// ── Batch Premium+ +100 URLs (2026-04-18) ────────────────────────
// Paris 75 (+8)
import { gardeCorpsParis75Paris2e } from './garde-corps-paris-75-paris-2e'
import { verriereAtelierParis75Paris4e } from './verriere-atelier-paris-75-paris-4e'
import { portailsParis75Paris5e } from './portails-paris-75-paris-5e'
import { escaliersParis75Paris11e } from './escaliers-paris-75-paris-11e'
import { gardeCorpsVerreParis75Paris12e } from './garde-corps-verre-paris-75-paris-12e'
import { gardeCorpsVerreParis75Paris13e } from './garde-corps-verre-paris-75-paris-13e'
import { verrieresParis75Paris14e } from './verrieres-paris-75-paris-14e'
import { verrieresParis75Paris19e } from './verrieres-paris-75-paris-19e'
// Hauts-de-Seine 92 (+15)
import { gardeCorpsVerreHautsDeSeine92LevalloisPerret } from './garde-corps-verre-hauts-de-seine-92-levallois-perret'
import { portailsHautsDeSeine92Courbevoie } from './portails-hauts-de-seine-92-courbevoie'
import { portailsHautsDeSeine92Puteaux } from './portails-hauts-de-seine-92-puteaux'
import { verrieresHautsDeSeine92Meudon } from './verrieres-hauts-de-seine-92-meudon'
import { gardeCorpsHautsDeSeine92Sevres } from './garde-corps-hauts-de-seine-92-sevres'
import { portailsHautsDeSeine92SaintCloud } from './portails-hauts-de-seine-92-saint-cloud'
import { gardeCorpsVerreHautsDeSeine92Garches } from './garde-corps-verre-hauts-de-seine-92-garches'
import { verrieresHautsDeSeine92Vaucresson } from './verrieres-hauts-de-seine-92-vaucresson'
import { thermolaquageHautsDeSeine92Malakoff } from './thermolaquage-hauts-de-seine-92-malakoff'
import { portailsHautsDeSeine92Montrouge } from './portails-hauts-de-seine-92-montrouge'
import { gardeCorpsHautsDeSeine92ChatenayMalabry } from './garde-corps-hauts-de-seine-92-chatenay-malabry'
import { verrieresHautsDeSeine92LePlessisRobinson } from './verrieres-hauts-de-seine-92-le-plessis-robinson'
import { gardeCorpsVerreHautsDeSeine92Sceaux } from './garde-corps-verre-hauts-de-seine-92-sceaux'
import { portailsHautsDeSeine92FontenayAuxRoses } from './portails-hauts-de-seine-92-fontenay-aux-roses'
import { thermolaquageHautsDeSeine92Gennevilliers } from './thermolaquage-hauts-de-seine-92-gennevilliers'
// Val-de-Marne 94 (+10)
import { gardeCorpsVerreValDeMarne94NogentSurMarne } from './garde-corps-verre-val-de-marne-94-nogent-sur-marne'
import { verrieresValDeMarne94LePerreuxSurMarne } from './verrieres-val-de-marne-94-le-perreux-sur-marne'
import { portailsValDeMarne94Cachan } from './portails-val-de-marne-94-cachan'
import { gardeCorpsValDeMarne94Arcueil } from './garde-corps-val-de-marne-94-arcueil'
import { thermolaquageValDeMarne94LHayLesRoses } from './thermolaquage-val-de-marne-94-l-hay-les-roses'
import { gardeCorpsVerreValDeMarne94SaintMande } from './garde-corps-verre-val-de-marne-94-saint-mande'
import { verriereAtelierValDeMarne94BrySurMarne } from './verriere-atelier-val-de-marne-94-bry-sur-marne'
import { portailsValDeMarne94LePlessisTrevise } from './portails-val-de-marne-94-le-plessis-trevise'
import { verrieresValDeMarne94OrmessonSurMarne } from './verrieres-val-de-marne-94-ormesson-sur-marne'
import { portailsValDeMarne94Villejuif } from './portails-val-de-marne-94-villejuif'
// Yvelines 78 (+10)
import { portailsYvelines78MantesLaJolie } from './portails-yvelines-78-mantes-la-jolie'
import { verrieresYvelines78Plaisir } from './verrieres-yvelines-78-plaisir'
import { portailsYvelines78Elancourt } from './portails-yvelines-78-elancourt'
import { gardeCorpsYvelines78Rambouillet } from './garde-corps-yvelines-78-rambouillet'
import { thermolaquageYvelines78Trappes } from './thermolaquage-yvelines-78-trappes'
import { gardeCorpsVerreYvelines78Viroflay } from './garde-corps-verre-yvelines-78-viroflay'
import { verriereAtelierYvelines78LaCelleSaintCloud } from './verriere-atelier-yvelines-78-la-celle-saint-cloud'
import { gardeCorpsVerreYvelines78Louveciennes } from './garde-corps-verre-yvelines-78-louveciennes'
import { verrieresYvelines78MarlyLeRoi } from './verrieres-yvelines-78-marly-le-roi'
import { portailCoulissantYvelines78VelizyVillacoublay } from './portail-coulissant-yvelines-78-velizy-villacoublay'
// Essonne 91 (+12)
import { portailsEssonne91SavignySurOrge } from './portails-essonne-91-savigny-sur-orge'
import { verrieresEssonne91Longjumeau } from './verrieres-essonne-91-longjumeau'
import { portailsEssonne91BretignySurOrge } from './portails-essonne-91-bretigny-sur-orge'
import { gardeCorpsEssonne91SaintMichelSurOrge } from './garde-corps-essonne-91-saint-michel-sur-orge'
import { portailsEssonne91AthisMons } from './portails-essonne-91-athis-mons'
import { verrieresEssonne91JuvisySurOrge } from './verrieres-essonne-91-juvisy-sur-orge'
import { portailsEssonne91ViryChatillon } from './portails-essonne-91-viry-chatillon'
import { thermolaquageEssonne91Grigny } from './thermolaquage-essonne-91-grigny'
import { verrieresEssonne91VillebonSurYvette } from './verrieres-essonne-91-villebon-sur-yvette'
import { gardeCorpsVerreEssonne91Orsay } from './garde-corps-verre-essonne-91-orsay'
import { portailsEssonne91LesUlis } from './portails-essonne-91-les-ulis'
import { portailsEssonne91VigneuxSurSeine } from './portails-essonne-91-vigneux-sur-seine'
// Seine-Saint-Denis 93 (+10)
import { thermolaquageSeineSaintDenis93LaCourneuve } from './thermolaquage-seine-saint-denis-93-la-courneuve'
import { portailsSeineSaintDenis93Stains } from './portails-seine-saint-denis-93-stains'
import { verrieresSeineSaintDenis93Bagnolet } from './verrieres-seine-saint-denis-93-bagnolet'
import { portailsSeineSaintDenis93RosnySousBois } from './portails-seine-saint-denis-93-rosny-sous-bois'
import { gardeCorpsSeineSaintDenis93NeuillyPlaisance } from './garde-corps-seine-saint-denis-93-neuilly-plaisance'
import { portailsSeineSaintDenis93LivryGargan } from './portails-seine-saint-denis-93-livry-gargan'
import { portailsSeineSaintDenis93NoisyLeSec } from './portails-seine-saint-denis-93-noisy-le-sec'
import { thermolaquageSeineSaintDenis93LeBlancMesnil } from './thermolaquage-seine-saint-denis-93-le-blanc-mesnil'
import { portailsSeineSaintDenis93Bondy } from './portails-seine-saint-denis-93-bondy'
import { verrieresSeineSaintDenis93Montfermeil } from './verrieres-seine-saint-denis-93-montfermeil'
// Oise 60 (+5)
import { portailsOise60Senlis } from './portails-oise-60-senlis'
import { gardeCorpsVerreOise60Chantilly } from './garde-corps-verre-oise-60-chantilly'
import { verrieresOise60Clermont } from './verrieres-oise-60-clermont'
import { portailsOise60CrepyEnValois } from './portails-oise-60-crepy-en-valois'
import { thermolaquageOise60NogentSurOise } from './thermolaquage-oise-60-nogent-sur-oise'
// Seine-et-Marne 77 (+8)
import { gardeCorpsVerreSeineEtMarne77Fontainebleau } from './garde-corps-verre-seine-et-marne-77-fontainebleau'
import { portailsSeineEtMarne77MontereauFaultYonne } from './portails-seine-et-marne-77-montereau-fault-yonne'
import { verrieresSeineEtMarne77Provins } from './verrieres-seine-et-marne-77-provins'
import { portailsSeineEtMarne77Torcy } from './portails-seine-et-marne-77-torcy'
import { verrieresSeineEtMarne77Noisiel } from './verrieres-seine-et-marne-77-noisiel'
import { portailsSeineEtMarne77Lognes } from './portails-seine-et-marne-77-lognes'
import { portailsSeineEtMarne77BussySaintGeorges } from './portails-seine-et-marne-77-bussy-saint-georges'
import { thermolaquageSeineEtMarne77VairesSurMarne } from './thermolaquage-seine-et-marne-77-vaires-sur-marne'
// Val-d'Oise 95 (+10)
import { portailsValDoise95Bezons } from './portails-val-doise-95-bezons'
import { portailsValDoise95Herblay } from './portails-val-doise-95-herblay'
import { verrieresValDoise95BeaumontSurOise } from './verrieres-val-doise-95-beaumont-sur-oise'
import { portailsValDoise95Persan } from './portails-val-doise-95-persan'
import { gardeCorpsVerreValDoise95LIsleAdam } from './garde-corps-verre-val-doise-95-l-isle-adam'
import { verrieresValDoise95Montmorency } from './verrieres-val-doise-95-montmorency'
import { gardeCorpsVerreValDoise95EnghienLesBains } from './garde-corps-verre-val-doise-95-enghien-les-bains'
import { portailsValDoise95SaintOuenLAumone } from './portails-val-doise-95-saint-ouen-l-aumone'
import { verrieresValDoise95SaintLeuLaForet } from './verrieres-val-doise-95-saint-leu-la-foret'
import { portailsValDoise95Ermont } from './portails-val-doise-95-ermont'
// Aisne 02 (+3)
import { portailsAisne02Laon } from './portails-aisne-02-laon'
import { verrieresAisne02ChateauThierry } from './verrieres-aisne-02-chateau-thierry'
import { portailsAisne02Tergnier } from './portails-aisne-02-tergnier'
// Somme 80 (+3)
import { portailsSomme80Albert } from './portails-somme-80-albert'
import { portailsSomme80Peronne } from './portails-somme-80-peronne'
import { verrieresSomme80Doullens } from './verrieres-somme-80-doullens'
// Eure 27 (+3)
import { portailsEure27Louviers } from './portails-eure-27-louviers'
import { verrieresEure27PontAudemer } from './verrieres-eure-27-pont-audemer'
import { portailsEure27Gisors } from './portails-eure-27-gisors'
// Eure-et-Loir 28 (+3)
import { portailsEureEtLoir28NogentLeRotrou } from './portails-eure-et-loir-28-nogent-le-rotrou'
import { verrieresEureEtLoir28Chateaudun } from './verrieres-eure-et-loir-28-chateaudun'
import { portailsEureEtLoir28Vernouillet } from './portails-eure-et-loir-28-vernouillet'

const ALL_CASES: PremiumCase[] = [
  // Paris 75
  gardeCorpsVerreParis75Paris15e,
  gardeCorpsVerreParis75Paris14e,
  gardeCorpsParis75Paris1er,
  gardeCorpsParis75Paris11e,
  gardeCorpsParis75Paris12e,
  gardeCorpsParis75Paris19e,
  gardeCorpsParis75Paris4e,
  gardeCorpsParis75Paris5e,
  gardeCorpsParis75Paris6e,
  verriereAtelierParis75Paris7e,
  verriereAtelierParis75Paris17e,
  verriereAtelierParis75Paris3e,
  verriereAtelierParis75Paris6e,
  verriereAtelierParis75Paris16e,
  verriereAtelierParis75Paris18e,
  portailCoulissantParis75Paris16e,
  portailCoulissantParis75Paris7e,
  portailsParis75Paris8e,
  portailsParis75Paris10e,
  portailsParis75Paris13e,
  portailsParis75Paris20e,
  escalierHelicoidalParis75Paris7e,
  escalierHelicoidalParis75Paris16e,
  escaliersParis75Paris15e,
  escaliersParis75Paris9e,
  thermolaquageParis75Paris15e,
  // Hauts-de-Seine 92
  verriereAtelierHautsDeSeine92BoulogneBillancourt,
  verriereAtelierHautsDeSeine92LevalloisPerret,
  verrieresHautsDeSeine92NeuillySurSeine,
  verrieresHautsDeSeine92Suresnes,
  gardeCorpsVerreHautsDeSeine92NeuillySurSeine,
  gardeCorpsVerreHautsDeSeine92IssyLesMoulineaux,
  gardeCorpsVerreHautsDeSeine92RueilMalmaison,
  gardeCorpsHautsDeSeine92AsnieresSurSeine,
  gardeCorpsHautsDeSeine92Chatillon,
  portailAutoportantHautsDeSeine92Nanterre,
  portailAutoportantHautsDeSeine92RueilMalmaison,
  portailCoulissantHautsDeSeine92Courbevoie,
  portailsHautsDeSeine92Antony,
  portailsHautsDeSeine92BoulogneBillancourt,
  portailsHautsDeSeine92Colombes,
  escaliersHautsDeSeine92Clamart,
  thermolaquageHautsDeSeine92BoulogneBillancourt,
  thermolaquageHautsDeSeine92Nanterre,
  // Seine-Saint-Denis 93
  portailsSeineSaintDenis93SaintDenis,
  portailsSeineSaintDenis93Aubervilliers,
  portailsSeineSaintDenis93AulnaySousBois,
  portailCoulissantSeineSaintDenis93NoisyLeGrand,
  gardeCorpsSeineSaintDenis93Bobigny,
  gardeCorpsSeineSaintDenis93Drancy,
  verriereAtelierSeineSaintDenis93Pantin,
  escaliersSeineSaintDenis93Montreuil,
  thermolaquageSeineSaintDenis93SaintDenis,
  // Val-de-Marne 94
  portailsValDeMarne94Creteil,
  portailsValDeMarne94Vincennes,
  portailsValDeMarne94ChampignySurMarne,
  portailsValDeMarne94FontenaySousBois,
  portailsValDeMarne94IvrySurSeine,
  gardeCorpsValDeMarne94SaintMaurDesFosses,
  gardeCorpsValDeMarne94MaisonsAlfort,
  gardeCorpsVerreValDeMarne94JoinvilleLePont,
  verrieresValDeMarne94CharentonLePont,
  verriereAtelierValDeMarne94Vincennes,
  // Val-d'Oise 95
  gardeCorpsValDoise95Cergy,
  gardeCorpsValDoise95Argenteuil,
  gardeCorpsValDoise95Pontoise,
  thermolaquageValDoise95Cergy,
  verrieresValDoise95Eaubonne,
  verriereAtelierValDoise95Taverny,
  portailsValDoise95Sarcelles,
  portailsValDoise95Franconville,
  // Yvelines 78
  gardeCorpsYvelines78Versailles,
  gardeCorpsVerreYvelines78MaisonsLaffitte,
  verrieresYvelines78SaintGermainEnLaye,
  verrieresYvelines78Chatou,
  verrieresYvelines78Houilles,
  portailAutoportantYvelines78LeVesinet,
  portailCoulissantYvelines78SaintGermainEnLaye,
  portailsYvelines78Sartrouville,
  portailsYvelines78ConflansSainteHonorine,
  thermolaquageYvelines78Versailles,
  // Essonne 91
  portailsEssonne91EvryCourcouronnes,
  portailsEssonne91CorbeilEssonnes,
  verriereAtelierEssonne91Massy,
  gardeCorpsEssonne91Palaiseau,
  thermolaquageEssonne91Massy,
  // Seine-et-Marne 77
  portailsSeineEtMarne77Meaux,
  portailsSeineEtMarne77PontaultCombault,
  verrieresSeineEtMarne77Melun,
  gardeCorpsSeineEtMarne77Chelles,
  // Oise 60
  portailsOise60Beauvais,
  verriereAtelierOise60Compiegne,
  gardeCorpsOise60Creil,
  // Aisne 02
  portailsAisne02SaintQuentin,
  verrieresAisne02Soissons,
  // Somme 80
  verriereAtelierSomme80Amiens,
  portailsSomme80Abbeville,
  // Eure 27
  portailsEure27Evreux,
  gardeCorpsEure27Vernon,
  // Eure-et-Loir 28
  verrieresEureEtLoir28Chartres,
  portailsEureEtLoir28Dreux,

  // ── Batch Premium+ +100 URLs (2026-04-18) ────────────────────────
  // Paris 75 (+8)
  gardeCorpsParis75Paris2e,
  verriereAtelierParis75Paris4e,
  portailsParis75Paris5e,
  escaliersParis75Paris11e,
  gardeCorpsVerreParis75Paris12e,
  gardeCorpsVerreParis75Paris13e,
  verrieresParis75Paris14e,
  verrieresParis75Paris19e,
  // Hauts-de-Seine 92 (+15)
  gardeCorpsVerreHautsDeSeine92LevalloisPerret,
  portailsHautsDeSeine92Courbevoie,
  portailsHautsDeSeine92Puteaux,
  verrieresHautsDeSeine92Meudon,
  gardeCorpsHautsDeSeine92Sevres,
  portailsHautsDeSeine92SaintCloud,
  gardeCorpsVerreHautsDeSeine92Garches,
  verrieresHautsDeSeine92Vaucresson,
  thermolaquageHautsDeSeine92Malakoff,
  portailsHautsDeSeine92Montrouge,
  gardeCorpsHautsDeSeine92ChatenayMalabry,
  verrieresHautsDeSeine92LePlessisRobinson,
  gardeCorpsVerreHautsDeSeine92Sceaux,
  portailsHautsDeSeine92FontenayAuxRoses,
  thermolaquageHautsDeSeine92Gennevilliers,
  // Val-de-Marne 94 (+10)
  gardeCorpsVerreValDeMarne94NogentSurMarne,
  verrieresValDeMarne94LePerreuxSurMarne,
  portailsValDeMarne94Cachan,
  gardeCorpsValDeMarne94Arcueil,
  thermolaquageValDeMarne94LHayLesRoses,
  gardeCorpsVerreValDeMarne94SaintMande,
  verriereAtelierValDeMarne94BrySurMarne,
  portailsValDeMarne94LePlessisTrevise,
  verrieresValDeMarne94OrmessonSurMarne,
  portailsValDeMarne94Villejuif,
  // Yvelines 78 (+10)
  portailsYvelines78MantesLaJolie,
  verrieresYvelines78Plaisir,
  portailsYvelines78Elancourt,
  gardeCorpsYvelines78Rambouillet,
  thermolaquageYvelines78Trappes,
  gardeCorpsVerreYvelines78Viroflay,
  verriereAtelierYvelines78LaCelleSaintCloud,
  gardeCorpsVerreYvelines78Louveciennes,
  verrieresYvelines78MarlyLeRoi,
  portailCoulissantYvelines78VelizyVillacoublay,
  // Essonne 91 (+12)
  portailsEssonne91SavignySurOrge,
  verrieresEssonne91Longjumeau,
  portailsEssonne91BretignySurOrge,
  gardeCorpsEssonne91SaintMichelSurOrge,
  portailsEssonne91AthisMons,
  verrieresEssonne91JuvisySurOrge,
  portailsEssonne91ViryChatillon,
  thermolaquageEssonne91Grigny,
  verrieresEssonne91VillebonSurYvette,
  gardeCorpsVerreEssonne91Orsay,
  portailsEssonne91LesUlis,
  portailsEssonne91VigneuxSurSeine,
  // Seine-Saint-Denis 93 (+10)
  thermolaquageSeineSaintDenis93LaCourneuve,
  portailsSeineSaintDenis93Stains,
  verrieresSeineSaintDenis93Bagnolet,
  portailsSeineSaintDenis93RosnySousBois,
  gardeCorpsSeineSaintDenis93NeuillyPlaisance,
  portailsSeineSaintDenis93LivryGargan,
  portailsSeineSaintDenis93NoisyLeSec,
  thermolaquageSeineSaintDenis93LeBlancMesnil,
  portailsSeineSaintDenis93Bondy,
  verrieresSeineSaintDenis93Montfermeil,
  // Oise 60 (+5)
  portailsOise60Senlis,
  gardeCorpsVerreOise60Chantilly,
  verrieresOise60Clermont,
  portailsOise60CrepyEnValois,
  thermolaquageOise60NogentSurOise,
  // Seine-et-Marne 77 (+8)
  gardeCorpsVerreSeineEtMarne77Fontainebleau,
  portailsSeineEtMarne77MontereauFaultYonne,
  verrieresSeineEtMarne77Provins,
  portailsSeineEtMarne77Torcy,
  verrieresSeineEtMarne77Noisiel,
  portailsSeineEtMarne77Lognes,
  portailsSeineEtMarne77BussySaintGeorges,
  thermolaquageSeineEtMarne77VairesSurMarne,
  // Val-d'Oise 95 (+10)
  portailsValDoise95Bezons,
  portailsValDoise95Herblay,
  verrieresValDoise95BeaumontSurOise,
  portailsValDoise95Persan,
  gardeCorpsVerreValDoise95LIsleAdam,
  verrieresValDoise95Montmorency,
  gardeCorpsVerreValDoise95EnghienLesBains,
  portailsValDoise95SaintOuenLAumone,
  verrieresValDoise95SaintLeuLaForet,
  portailsValDoise95Ermont,
  // Aisne 02 (+3)
  portailsAisne02Laon,
  verrieresAisne02ChateauThierry,
  portailsAisne02Tergnier,
  // Somme 80 (+3)
  portailsSomme80Albert,
  portailsSomme80Peronne,
  verrieresSomme80Doullens,
  // Eure 27 (+3)
  portailsEure27Louviers,
  verrieresEure27PontAudemer,
  portailsEure27Gisors,
  // Eure-et-Loir 28 (+3)
  portailsEureEtLoir28NogentLeRotrou,
  verrieresEureEtLoir28Chateaudun,
  portailsEureEtLoir28Vernouillet,
]

const PREMIUM_REGISTRY = new Map<string, PremiumCase>(
  ALL_CASES.map((c) => [keyOf(c), c]),
)

function keyOf(c: PremiumCase): string {
  return `${c.productSlug}|${c.deptSlug}|${c.communeSlug ?? '_dept'}`
}

/**
 * Récupère le PremiumCase pour une URL donnée. Retourne `null` si :
 * - aucun case n'est enregistré pour ce triplet
 * - le case existe mais son `status === 'draft'` (pas encore prêt pour la prod)
 *
 * Côté caller : appeler en début de template, brancher selon présence.
 */
export function getPremiumCase(
  productSlug: string,
  deptSlug: string,
  communeSlug?: string,
): PremiumCase | null {
  const key = `${productSlug}|${deptSlug}|${communeSlug ?? '_dept'}`
  const c = PREMIUM_REGISTRY.get(key)
  if (!c) return null
  if (c.status !== 'published') return null
  return c
}

/**
 * Liste tous les PremiumCases (publiés ET drafts) — utilisé par l'admin
 * `/admin/seo/premium` pour afficher la table des candidats.
 */
export function listAllPremiumCases(): PremiumCase[] {
  return Array.from(PREMIUM_REGISTRY.values())
}

export type { PremiumCase } from './types'
export type {
  PremiumPhoto,
  PremiumQuote,
  CaseStudy,
  LocalReview,
  CrossCityRow,
  CityGuideSection,
} from './types'
