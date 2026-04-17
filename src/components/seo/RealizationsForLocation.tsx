import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { getCommunesByDepartment } from '@/data/seo/communes'
import type { Department, Commune } from '@/data/seo/types'

interface Props {
  dept: Department
  commune?: Commune
  productSlug?: string
}

type RealizationCard = {
  id: string
  titre: string
  ville: string | null
  dateRealisation: Date | null
  coverUrl: string | null
}

async function fetchRealizations(dept: Department, commune?: Commune): Promise<{
  rows: RealizationCard[]
  scope: 'commune' | 'dept' | 'recent'
}> {
  const select = {
    id: true,
    titre: true,
    ville: true,
    dateRealisation: true,
    images: { where: { isCover: true }, take: 1, select: { url: true } },
  }

  // 1. Commune match
  if (commune) {
    const rows = await prisma.realization.findMany({
      where: { ville: commune.name, published: true },
      take: 6,
      orderBy: { dateRealisation: 'desc' },
      select,
    })
    if (rows.length > 0) {
      return { rows: rows.map(toCard), scope: 'commune' }
    }
  }

  // 2. Dept communes match
  const deptCommunes = getCommunesByDepartment(dept.code).map((c) => c.name)
  if (deptCommunes.length > 0) {
    const rows = await prisma.realization.findMany({
      where: { ville: { in: deptCommunes }, published: true },
      take: 6,
      orderBy: { dateRealisation: 'desc' },
      select,
    })
    if (rows.length > 0) {
      return { rows: rows.map(toCard), scope: 'dept' }
    }
  }

  // 3. Fallback: 6 latest published
  const rows = await prisma.realization.findMany({
    where: { published: true },
    take: 6,
    orderBy: { dateRealisation: 'desc' },
    select,
  })
  return { rows: rows.map(toCard), scope: 'recent' }
}

function toCard(r: {
  id: string
  titre: string
  ville: string | null
  dateRealisation: Date | null
  images: { url: string }[]
}): RealizationCard {
  return {
    id: r.id,
    titre: r.titre,
    ville: r.ville,
    dateRealisation: r.dateRealisation,
    coverUrl: r.images[0]?.url ?? null,
  }
}

function formatDate(d: Date | null): string {
  if (!d) return ''
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(d)
}

export async function RealizationsForLocation({ dept, commune }: Props) {
  let result
  try {
    result = await fetchRealizations(dept, commune)
  } catch {
    return null
  }

  const { rows, scope } = result
  if (rows.length === 0) return null

  const title =
    scope === 'commune'
      ? `Récemment fabriqué et posé à ${commune!.name}`
      : scope === 'dept'
        ? `Nos derniers chantiers en ${dept.fullName}`
        : 'Quelques-unes de nos dernières réalisations'

  const subtitle =
    scope === 'recent'
      ? `Sortie d'atelier ces derniers mois — pour vous donner une idée du niveau de finition.`
      : `Quelques chantiers livrés ces derniers mois près de chez vous.`

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            Preuve par l'image
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-3">
            {title}
          </h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows.map((r) => (
            <Link
              key={r.id}
              href={`/realisations/${r.id}`}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-corporate/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                {r.coverUrl ? (
                  <Image
                    src={r.coverUrl}
                    alt={r.titre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm">
                    Pas d'image
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy-dark group-hover:text-blue-corporate transition-colors line-clamp-2 mb-2">
                  {r.titre}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  {r.ville && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {r.ville}
                    </span>
                  )}
                  {r.dateRealisation && <span>{formatDate(r.dateRealisation)}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-dark/5 text-navy-dark font-semibold rounded-xl hover:bg-navy-dark/10 transition-colors group"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
