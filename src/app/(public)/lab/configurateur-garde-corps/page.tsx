import type { Metadata } from 'next'
import ClientConfigurator from './ClientConfigurator'

export const metadata: Metadata = {
  title: 'Configurateur Garde-corps 3D',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ClientConfigurator />
}
