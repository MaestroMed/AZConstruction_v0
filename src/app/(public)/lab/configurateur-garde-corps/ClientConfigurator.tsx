"use client"

import dynamic from 'next/dynamic'

const GardeCorpsConfigurator = dynamic(
  () => import('@/components/configurator-3d/GardeCorpsConfigurator'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-navy-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/50 text-sm">Chargement du configurateur 3D...</p>
        </div>
      </div>
    ),
  }
)

export default function ClientConfigurator() {
  return <GardeCorpsConfigurator />
}
