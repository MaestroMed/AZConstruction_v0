import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Police moderne géométrique comme Apple SF Pro
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "AZ Construction | Métallerie sur mesure - Profilés Jansen",
    template: "%s | AZ Construction",
  },
  description:
    "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails, clôtures et grilles de ventilation. Profilés Jansen. 1800m² d'atelier, 10 ans d'expertise.",
  keywords: [
    "métallerie",
    "acier sur mesure",
    "garde-corps",
    "escalier métallique",
    "portes acier",
    "fenêtres acier",
    "portails",
    "clôtures",
    "grilles ventilation",
    "profilés Jansen",
    "construction métallique",
    "France",
    "Bruyères-sur-Oise",
    "Val d'Oise",
  ],
  authors: [{ name: "AZ Construction" }],
  creator: "AZ Construction",
  publisher: "AZ Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL || "https://zaconstruction.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AZ Construction | L'acier sur mesure, vite et bien.",
    description:
      "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres. Profilés Jansen. 1800m² d'atelier.",
    type: "website",
    locale: "fr_FR",
    siteName: "AZ Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AZ Construction - Métallerie sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZ Construction | Métallerie sur mesure",
    description: "Expert en métallerie sur mesure. Profilés Jansen. 1800m² d'atelier.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AZ Construction",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-navy-dark text-gray-900 dark:text-white">
        {children}
        <Toaster 
          position="top-right"
          richColors
          closeButton
          theme="system"
        />
        <Analytics />
      </body>
    </html>
  );
}
