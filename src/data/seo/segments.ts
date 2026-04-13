import type { SEOSegment, SEOProduct, Department, Commune } from './types'

export const segments: SEOSegment[] = [
  {
    slug: 'particuliers',
    name: 'Particuliers',
    nameWithPrep: 'pour les particuliers',
    description:
      'Propriétaires, rénovation, construction neuve, décoration intérieure et extérieure.',
    icon: 'Home',
    keywords: [
      'maison',
      'appartement',
      'rénovation',
      'décoration',
      'balcon',
      'terrasse',
      'jardin',
    ],
    metaTitleSuffix: ' | Particuliers',
    introParagraph: (product: SEOProduct, dept: Department, ville?: Commune) => {
      const loc = ville ? ville.name : dept.fullName
      return `Vous êtes un particulier et vous cherchez un fabricant ${product.nameWithArticle} sur mesure ${ville ? 'à' : 'en'} ${loc} ? AZ Construction accompagne les propriétaires dans leurs projets de rénovation et de construction neuve. Nos ${product.namePlural} sont fabriqués dans nos ateliers de Bruyères-sur-Oise et posés par nos équipes dans tout le département ${dept.fullName}.`
    },
  },
  {
    slug: 'professionnels',
    name: 'Professionnels',
    nameWithPrep: 'pour les professionnels',
    description:
      'Architectes, maîtres d\'œuvre, promoteurs immobiliers, entreprises du BTP.',
    icon: 'Building2',
    keywords: [
      'architecte',
      'promoteur',
      'maître d\'œuvre',
      'BTP',
      'chantier',
      'copropriété',
      'immeuble',
    ],
    metaTitleSuffix: ' | Professionnels',
    introParagraph: (product: SEOProduct, dept: Department, ville?: Commune) => {
      const loc = ville ? ville.name : dept.fullName
      return `Professionnel du bâtiment ${ville ? 'à' : 'en'} ${loc} ? AZ Construction est votre partenaire fabricant ${product.nameWithArticle} sur mesure. Nous collaborons avec les architectes, promoteurs et entreprises du BTP pour fournir des ${product.namePlural} conformes aux normes, dans les délais de chantier. Tarifs professionnels, plans techniques sur demande.`
    },
  },
  {
    slug: 'industriels',
    name: 'Industriels',
    nameWithPrep: 'pour les industriels',
    description:
      'Sites industriels, usines, entrepôts, collectivités, ERP.',
    icon: 'Factory',
    keywords: [
      'usine',
      'entrepôt',
      'industriel',
      'collectivité',
      'ERP',
      'sécurité',
      'norme',
    ],
    metaTitleSuffix: ' | Industriels',
    introParagraph: (product: SEOProduct, dept: Department, ville?: Commune) => {
      const loc = ville ? ville.name : dept.fullName
      return `Besoin ${product.nameWithArticle} pour votre site industriel ${ville ? 'à' : 'en'} ${loc} ? AZ Construction fabrique des ${product.namePlural} aux normes pour les environnements industriels : usines, entrepôts, plateformes logistiques, collectivités et ERP. Robustesse, conformité et délais maîtrisés.`
    },
  },
]

const bySlug = new Map(segments.map(s => [s.slug, s]))

export function getSegmentBySlug(slug: string): SEOSegment | undefined {
  return bySlug.get(slug)
}

export const segmentSlugs = segments.map(s => s.slug)
