# 🎮 Stratégie Configurateur 3D - AZ Construction

## Contexte

Un prestataire a proposé un configurateur 3D à **250k€**. Cette analyse montre qu'il est possible d'obtenir un résultat comparable pour **10-12k€** en utilisant les bonnes technologies.

---

## 📊 Analyse du Marché

### Solutions SaaS Existantes (Pergolas/Métallerie)

| Solution | Prix/mois | Forces | Faiblesses |
|----------|-----------|--------|------------|
| **SaleSqueze** | $199-499 | Prêt à l'emploi, lead gen | Template fixe, peu personnalisable |
| **MyConfigurator** | ~$200-300 | Spécialisé pergola, AR, ombre | Coûteux à long terme |
| **VisionThree/ThreeBuild** | Sur devis | Très complet, pricing dynamique | Prix élevé |
| **Brustor Simulator** | Interne | Photo integration | Propriétaire |
| **PergolaPlanner** | £19-99 | Export glTF, abordable | Moins sophistiqué |

### Solutions Open Source / Low-Cost

| Technologie | Coût | Complexité | Adapté AZ |
|-------------|------|------------|-----------|
| **React Three Fiber** | Gratuit | Moyenne | ✅ Parfait |
| **@google/model-viewer** | Gratuit | Faible | ✅ AR facile |
| **Spline 3D** | $20/mois | Très faible | ✅ Prototypage rapide |
| **Three.js pur** | Gratuit | Élevée | ⚠️ Plus long |
| **Babylon.js** | Gratuit | Élevée | ⚠️ Overkill |

---

## 🎯 Recommandation : Stack Hybride

### Architecture Technique

```
┌────────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                 CONFIGURATEUR PAGE                        │  │
│  │  /configurateur/[family]                                  │  │
│  │                                                           │  │
│  │  ┌─────────────────────┐  ┌────────────────────────────┐ │  │
│  │  │                     │  │     PANNEAU CONFIG         │ │  │
│  │  │   3D VIEWER         │  │     (existant, à garder)   │ │  │
│  │  │                     │  │                            │ │  │
│  │  │  ┌───────────────┐  │  │  • Dimensions (sliders)    │ │  │
│  │  │  │ React Three   │  │  │  • Matériaux               │ │  │
│  │  │  │ Fiber Canvas  │  │  │  • Styles                  │ │  │
│  │  │  │               │  │  │  • Options                 │ │  │
│  │  │  │ Modèle GLB    │  │  │  • Couleurs RAL            │ │  │
│  │  │  │ paramétrique  │  │  │                            │ │  │
│  │  │  └───────────────┘  │  │  Prix temps réel ✓         │ │  │
│  │  │                     │  │                            │ │  │
│  │  │  [Orbit Controls]   │  └────────────────────────────┘ │  │
│  │  │  [Bouton AR]        │                                 │  │
│  │  └─────────────────────┘                                 │  │
│  │                                                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                        ASSETS 3D                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  📦 /public/models/                                            │
│  ├── portail-contemporain.glb                                  │
│  ├── portail-classique.glb                                     │
│  ├── pergola-bioclimatique.glb                                 │
│  ├── pergola-classique.glb                                     │
│  ├── garde-corps-verre.glb                                     │
│  ├── garde-corps-cables.glb                                    │
│  ├── escalier-droit.glb                                        │
│  └── escalier-helicoidal.glb                                   │
│                                                                │
│  Chaque modèle a des "slots" de matériaux pour :               │
│  • Changement de couleur instantané                            │
│  • Swap de textures (mat/brillant/satiné)                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Fonctionnalités par Phase

#### Phase 1 : MVP (Budget: 4000€, Délai: 3-4 semaines)
- [ ] Modèles 3D GLB pour 3 produits phares (portail, pergola, garde-corps)
- [ ] Intégration React Three Fiber basique
- [ ] Rotation 360° avec OrbitControls
- [ ] Changement couleur temps réel
- [ ] Zoom in/out

#### Phase 2 : Interactivité (Budget: 3000€, Délai: 2-3 semaines)
- [ ] Modification dimensions visuelles (scale du modèle)
- [ ] Switch entre styles (swap de modèle)
- [ ] Affichage options (motorisation visible, LED, etc.)
- [ ] Annotations hotspots

#### Phase 3 : AR & Export (Budget: 3000€, Délai: 2-3 semaines)
- [ ] Intégration @google/model-viewer pour AR
- [ ] Bouton "Voir chez moi" (iOS/Android)
- [ ] Export image de la configuration
- [ ] Export PDF récapitulatif

#### Phase 4 : Avancé (Budget: 2000€, Délai: optionnel)
- [ ] Simulation ombre (selon heure/orientation)
- [ ] Environnement photo (HDRI)
- [ ] Sauvegarde configuration client
- [ ] Partage configuration par lien

---

## 💰 Budget Détaillé

### Option A : Développement Interne/Freelance

| Poste | Coût estimé | Notes |
|-------|-------------|-------|
| **Modèles 3D** | 2500-4000€ | 6-8 modèles GLB optimisés web |
| **Dev React Three Fiber** | 4000-6000€ | 80-120h de développement |
| **AR Integration** | 1000-1500€ | Model-viewer assez simple |
| **Tests & Polish** | 1000-2000€ | Multi-device, optimisation |
| **TOTAL** | **8500-13500€** | |

### Option B : Hybrid SaaS + Custom

| Poste | Coût estimé | Notes |
|-------|-------------|-------|
| **SaleSqueze Essential** | $399/mois (4800€/an) | Config pergola prête |
| **Custom overlay** | 2000-3000€ | Intégration design AZ |
| **TOTAL Année 1** | **~7000-8000€** | |
| **TOTAL Année 2+** | **~5000€/an** | Récurrent |

### Comparaison ROI

```
Scénario : Vente d'une pergola à 12000€

Sans configurateur :
- Taux de conversion visite → devis : ~2%
- Taux devis → vente : ~30%
- CA potentiel sur 1000 visites : 72 000€

Avec configurateur 3D :
- Taux de conversion visite → devis : ~5% (+150%)
- Taux devis → vente : ~40% (engagement client supérieur)
- CA potentiel sur 1000 visites : 240 000€

Delta : +168 000€ de CA potentiel
Investissement : 10-12k€
ROI : Amorti dès le premier mois
```

---

## 🔧 Implémentation Technique

### Dépendances à ajouter

```bash
npm install @react-three/fiber @react-three/drei three
npm install @google/model-viewer
```

### Structure de fichiers proposée

```
src/
├── components/
│   └── configurator/
│       ├── Scene3D.tsx          # Canvas R3F principal
│       ├── ProductModel.tsx     # Chargeur de modèle GLB
│       ├── CameraControls.tsx   # OrbitControls wrapper
│       ├── ColorMaterial.tsx    # Gestion couleurs RAL
│       ├── ARButton.tsx         # Intégration model-viewer
│       ├── DimensionHelper.tsx  # Affichage cotes
│       └── index.ts
├── hooks/
│   └── useConfigurator.ts       # State management config
└── lib/
    └── models/
        └── modelRegistry.ts      # Mapping famille → modèles

public/
└── models/
    ├── portails/
    │   ├── contemporain.glb
    │   └── classique.glb
    ├── pergolas/
    │   ├── bioclimatique.glb
    │   └── classique.glb
    └── garde-corps/
        └── verre.glb
```

### Exemple de Code Base

```tsx
// components/configurator/Scene3D.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

interface Scene3DProps {
  modelPath: string;
  color: string;
  scale: [number, number, number];
}

function Model({ modelPath, color }: { modelPath: string; color: string }) {
  const { scene } = useGLTF(modelPath);
  
  // Appliquer la couleur à tous les meshes
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} />;
}

export function Scene3D({ modelPath, color, scale }: Scene3DProps) {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <Model modelPath={modelPath} color={color} />
        <Environment preset="city" />
      </Suspense>
      
      <OrbitControls 
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
```

---

## 📱 Intégration AR

### Avec @google/model-viewer

```tsx
// components/configurator/ARViewer.tsx
"use client";

import { useEffect } from "react";

interface ARViewerProps {
  modelSrc: string;
  iosSrc?: string;
  alt: string;
}

export function ARViewer({ modelSrc, iosSrc, alt }: ARViewerProps) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={modelSrc}
      ios-src={iosSrc}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      style={{ width: "100%", height: "400px" }}
    >
      <button 
        slot="ar-button"
        className="absolute bottom-4 right-4 bg-cyan-glow text-navy-dark px-4 py-2 rounded-lg font-semibold"
      >
        📱 Voir chez moi
      </button>
    </model-viewer>
  );
}
```

---

## 🎨 Création des Modèles 3D

### Où trouver des modélistes ?

| Plateforme | Budget/modèle | Délai | Qualité |
|------------|---------------|-------|---------|
| **Fiverr** | 100-300€ | 3-7 jours | Variable |
| **Upwork** | 200-500€ | 5-14 jours | Bonne |
| **3D Freelance FR** | 300-600€ | 7-14 jours | Excellente |
| **Studio spécialisé** | 500-1000€ | 14-21 jours | Premium |

### Cahier des charges modèles

Pour chaque modèle :
- Format: **GLB** (GLTF binaire)
- Polygones: **< 100k** (optimisé web)
- Textures: **PBR** (Metallic-Roughness workflow)
- Dimensions: **Échelle réelle** (1 unité = 1 mètre)
- Matériaux nommés: `material_main`, `material_glass`, `material_metal`
- Point de pivot: **Centre bas** du modèle

### Spécifications par produit

#### Portail
- Deux variantes : contemporain, classique
- Slots : cadre principal, barreaux, poignée
- Animation optionnelle : ouverture battant

#### Pergola
- Deux variantes : bioclimatique, classique
- Slots : structure, lames, poteaux
- Animation optionnelle : rotation lames

#### Garde-corps
- Trois variantes : verre, câbles, barreaux
- Slots : main courante, remplissage, fixations

---

## 🚀 Roadmap Suggérée

```
Semaine 1-2 : 
├── Brief modéliste 3D
├── Installation React Three Fiber
└── POC basique avec modèle test

Semaine 3-4 :
├── Réception premiers modèles
├── Intégration dans le configurateur existant
└── Changement couleur fonctionnel

Semaine 5-6 :
├── Contrôles caméra finalisés
├── Switch entre modèles/styles
└── Tests multi-navigateurs

Semaine 7-8 :
├── Intégration AR (model-viewer)
├── Export image/PDF
└── Optimisation performances

Semaine 9-10 :
├── Tests utilisateurs
├── Ajustements UX
└── Mise en production
```

---

## 📞 Prestataires Recommandés

### Modélisation 3D
- **CGTrader Freelance** : marketplace avec portfolio visible
- **Sketchfab Store** : modèles existants à adapter
- **Turbosquid** : bibliothèque de modèles

### Développement React Three Fiber
- Poster sur **Malt.fr** ou **Comet.co** (freelances FR)
- Budget : 400-600€/jour pour un dev senior

### Solution Clé-en-Main Alternative
- **SaleSqueze** : contact@salesqueze.com
- **MyConfigurator** : https://myconfigurator.com

---

## ✅ Checklist Avant Lancement

- [ ] Modèles 3D validés (poids < 5MB chacun)
- [ ] Test sur mobile (iOS Safari, Chrome Android)
- [ ] Test AR sur devices réels
- [ ] Fallback 2D si WebGL non supporté
- [ ] Analytics configurés (tracking clics, configs)
- [ ] Temps de chargement < 3s
- [ ] SEO meta tags pour la page configurateur

---

*Document créé le 17/12/2024 - AZ Construction*






