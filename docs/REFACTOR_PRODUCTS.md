# Megaswarm refactor — Produits / Familles / Sous-familles / Assets

## Objectif

Consolider 9 pages admin éparpillées + 3 endpoints upload + 3 types ProductFamily concurrents en UN SEUL hub cohérent, avec un data model propre.

## État actuel (le bordel)

- **ProductFamily.variants** stockés en JSON embarqué (pas de FK, pas d'ID stable)
- **heroImages** en table séparée `ProductFamilyImage`
- **heroVideoUrl** en scalar sur `ProductFamily`
- **Variants.heroVideoUrl** en JSON
- **9 pages admin** pour gérer tout ça, 3 endpoints upload
- **3 types TS** concurrents pour ProductFamily

## Target architecture

### Prisma schema (nouveau)

```prisma
model ProductFamily {
  id              String   @id @default(cuid())
  slug            String   @unique
  nom             String
  description     String?
  ordre           Int      @default(0)
  active          Boolean  @default(true)

  // Landing page content (inchangé)
  tagline         String?
  longDescription String?  @db.Text
  startingPrice   String?
  unit            String?  @default("pièce")
  features        String[]
  benefits        Json?
  specifications  Json?
  seoTitle        String?
  seoDescription  String?  @db.Text

  // Relations — NOUVEAU
  variants        ProductVariant[]
  assets          ProductFamilyAsset[]
  products        Product[]

  // LEGACY (gardé pour migration, supprimé en Phase 6)
  imageUrl        String?
  heroVideoUrl    String?
  heroImages      ProductFamilyImage[]   // legacy

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  @@map("product_families")
}

model ProductVariant {
  id            String   @id @default(cuid())
  familyId      String
  family        ProductFamily @relation(fields: [familyId], references: [id], onDelete: Cascade)

  slug          String
  name          String
  description   String?
  features      String[]
  startingPrice String?
  ordre         Int      @default(0)
  active        Boolean  @default(true)

  assets        ProductVariantAsset[]

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@unique([familyId, slug])
  @@map("product_variants")
}

model ProductFamilyAsset {
  id        String   @id @default(cuid())
  familyId  String
  family    ProductFamily @relation(fields: [familyId], references: [id], onDelete: Cascade)

  type      AssetType    // IMAGE | VIDEO
  role      AssetRole    // HERO | GALLERY | CARD | THUMBNAIL
  url       String
  alt       String?
  posterUrl String?      // pour vidéos (thumbnail)
  ordre     Int          @default(0)

  createdAt DateTime     @default(now())
  @@index([familyId, role, ordre])
  @@map("product_family_assets")
}

model ProductVariantAsset {
  id         String   @id @default(cuid())
  variantId  String
  variant    ProductVariant @relation(fields: [variantId], references: [id], onDelete: Cascade)

  type       AssetType
  role       AssetRole
  url        String
  alt        String?
  posterUrl  String?
  ordre      Int       @default(0)

  createdAt  DateTime  @default(now())
  @@index([variantId, role, ordre])
  @@map("product_variant_assets")
}

enum AssetType {
  IMAGE
  VIDEO
}

enum AssetRole {
  HERO        // Arrière-plan hero (image ou vidéo)
  GALLERY     // Image de galerie
  CARD        // Image principale de la card (thumbnail)
}
```

### Admin UI cible

```
/admin/produits/                           ← Hub familles (liste)
└── /[slug]                                ← Hub édition famille
    ├── Tab "Catalogue"                    ← nom, slug, ordre, active, SEO
    ├── Tab "Landing"                      ← tagline, descriptions, benefits, specs, features
    ├── Tab "Assets"                       ← hero video + images (type + role)
    └── Tab "Sous-familles"                ← liste variants + inline edit
        └── /[slug]/variants/[variantSlug] ← Édition variant + assets variant
```

### APIs cibles

```
GET    /api/families                       → liste
POST   /api/families                       → create family
GET    /api/families/[slug]                → détail (avec variants + assets)
PATCH  /api/families/[slug]                → update metadata
DELETE /api/families/[slug]
POST   /api/families/[slug]/variants       → create variant
PATCH  /api/families/[slug]/variants/[variantSlug]
DELETE /api/families/[slug]/variants/[variantSlug]
GET    /api/families/[slug]/assets
POST   /api/families/[slug]/assets         → add asset (image/video, role)
DELETE /api/families/[slug]/assets/[assetId]
PATCH  /api/families/[slug]/assets/[assetId] → reorder
GET    /api/families/[slug]/variants/[variantSlug]/assets
POST   /api/families/[slug]/variants/[variantSlug]/assets
DELETE /api/families/[slug]/variants/[variantSlug]/assets/[assetId]
```

## Migration path (sans casser le site)

1. **Schema change** : ajout des nouvelles tables + conservation des legacy fields/tables
2. **Data migration script** : lit legacy → écrit new tables
3. **Nouveaux endpoints** : exposent la nouvelle data
4. **Consumers publics** : lisent la nouvelle data (avec fallback old pendant transition)
5. **Admin hub** : nouveau UI pointe sur les nouveaux endpoints
6. **Cleanup** : redirects anciennes routes admin → nouveau hub
7. **Deprecation** (plus tard, pas ce PR) : drop les legacy fields/tables

## Work split (agents)

### Wave 1 (séquentiel, moi)
- Phase 1 : schema update + `prisma db push`
- Phase 2 : data migration script (idempotent)

### Wave 2 (parallèle, 4 agents)
- Agent A : APIs `/api/families/*`
- Agent B : Admin hub UI (tabs + variants editor)
- Agent C : Public consumers (useProductFamilyData hook + pages)
- Agent D : Asset upload unified component

### Wave 3 (séquentiel, moi)
- Integration + tests + redirects
- Cleanup legacy admin pages
- Commit + push + merge
