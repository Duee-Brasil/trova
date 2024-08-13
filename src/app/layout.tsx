import { PageFooter } from '@/components/PageFooter'
import { PageHeader } from '@/components/PageHeader'
import { ThemeModeScript } from 'flowbite-react'
import type { Metadata, Viewport } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lato',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: 'white',
}

export const metadata: Metadata = {
  description:
    'Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.',
  title: {
    default: 'Trova Brasil / Poesia Scolpita in Pietra',
    template: '%s | Trova Brasil / Poesia Scolpita in Pietra',
  },
  manifest: '/manifest.webmanifest',
  applicationName: 'Trova Brasil',
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/icons/icon16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon32.png', sizes: '32x23', type: 'image/png' },
      { url: '/icons/icon48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/icon72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icons/icon96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon114.png', sizes: '114x114', type: 'image/png' },
      { url: '/icons/icon128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/icon144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icons/icon150.png', sizes: '150x150', type: 'image/png' },
      { url: '/icons/icon192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon256.png', sizes: '256x256', type: 'image/png' },
      { url: '/icons/icon512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/touch-icon-iphone.png',
  },
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Leticia Godoy', url: 'https://github.com/letgodoy' }],
  creator: 'Duee Brasil',
  publisher: 'Leticia Godoy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trova - Poesia Scolpita in Pietra',
    description:
      'Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.',
    images: ['https://trovabrasil.com/icons/icon512.png'], // Must be an absolute URL
  },
  openGraph: {
    title: 'Trova - Poesia Scolpita in Pietra',
    description:
      'Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.',
    url: 'https://trovabrasil.com',
    siteName: 'Trova - Poesia Scolpita in Pietra',
    images: [
      {
        url: 'https://trovabrasil.com/icons/icon512.png', // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${lato.variable} ${montserrat.variable}`}>
      <head>
        <ThemeModeScript />
      </head>
      <body className={lato.className}>
        <div className="m-0 min-h-dvh max-w-screen p-0 overflow-x-hidden flex flex-col flex-wrap">
          <PageHeader />
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
