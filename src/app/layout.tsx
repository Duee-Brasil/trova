import { PageFooter } from '@/components/PageFooter'
import { PageHeader } from '@/components/PageHeader'
import { ThemeModeScript } from 'flowbite-react'
import type { Metadata, Viewport } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
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
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'marmores granitos e pedras',
    'mármore travertino',
    'piso de marmore',
    'revestimento externo',
    'revestimento de piso',
    'piso e revestimento',
    'piso pedra',
    'Piso Travertino',
    'Marmore Granito',
    'Loja de Pisos',
    'Loja de Revestimentos',
    'Revestimento Interno',
    'Loja de Pedras Naturais',
    'Trova Brasil',
    'Granito',
    'Travertino',
    'Natural',
    'Natureza',
    'Trova travertino',
    'Travertino Navona',
    'Navona',
    'Travertino Preço',
    'Preço Trova',
    'Trova Marmore',
    'Marmore Trova',
    'Trova Granito',
    'Granito Trova',
    'Projetos Trova',
    'Contato Trova',
    'Travertino Romano',
    'Romano',
    'Cerâmica Natural',
    'Vidraria Natural',
    'Vitrina Natural',
    'Concreto Natural',
    'Polimérico Natural',
  ],
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
  alternates: {
    canonical: 'https://trovabrasil.com',
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
        <meta
          name="copyright"
          content="©2024 Duee Brasil - https://github.com/letgodoy"
        />
        <meta name="url" content="https://trovabrasil.com" />
        <meta name="identifier-url" content="https://trovabrasil.com" />
        <meta
          name="facebook-domain-verification"
          content="za65m80ibiardiepk5vq60o4m8sw2l"
        />
        <link rel="canonical" href="https://trovabrasil.com/" />
        <script
          src="https://unpkg.com/swiper@8/swiper-bundle.min.js"
          type="text/javascript"
          async
        ></script>
        <link
          rel="dns-prefetch"
          href="https://gstatic.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="dns-prefetch"
          href="https://googleapis.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="dns-prefetch"
          href="googletagmanager.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="dns-prefetch"
          href="google-analytics.com"
          crossOrigin={'anonymous'}
        />
        <link rel="dns-prefetch" href="unpkg.com" crossOrigin={'anonymous'} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="preconnect"
          href="www.googletagmanager.com"
          crossOrigin={'anonymous'}
        />
        <link
          rel="preconnect"
          href="www.google-analytics.com"
          crossOrigin={'anonymous'}
        />
        <link rel="preconnect" href="unpkg.com" crossOrigin={'anonymous'} />
        <script type="application/ld+json">
          {`{
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Trova Brasil",
        url: "https://trovabrasil.com",
        address: "contato@trovabrasil.com",
        sameAs: [
          "https://facebook.com/trovabrasil",
          "https://instagram.com/trovatravertino",
          "https://br.pinterest.com/trovatravertino/_created/",
        ],
      }`}
        </script>
        <ThemeModeScript />
      </head>
      <body className={lato.className}>
        <GoogleTagManager gtmId="GTM-P2MGF7M" />
        <div className="m-0 min-h-dvh max-w-screen p-0 overflow-x-hidden flex flex-col flex-wrap">
          <PageHeader />
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
