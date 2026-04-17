import { Building2, Calendar, ShieldCheck, Map } from 'lucide-react'

const ITEMS = [
  { icon: Building2, value: '1 800 m²', label: "d'atelier à Bruyères-sur-Oise (95)" },
  { icon: Calendar, value: 'Depuis 2018', label: "soudures, finitions, poses internes" },
  { icon: ShieldCheck, value: 'Décennale', label: "attestation fournie avant chaque chantier" },
  { icon: Map, value: 'IDF + 60', label: "Île-de-France et sud Hauts-de-France" },
]

export function TrustStrip() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {ITEMS.map((it) => (
            <div key={it.value} className="flex items-center gap-3 py-5 px-4">
              <div className="w-9 h-9 rounded-xl bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                <it.icon className="w-4 h-4 text-blue-corporate" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-navy-dark truncate">{it.value}</p>
                <p className="text-[11px] text-gray-500 leading-tight">{it.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
