import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Pikiran yang Dicatet',
  description:
    'Catatan kecil tentang hal-hal yang terlintas di pikiran: refleksi filosofis, kehidupan dalam, seni, dan ilmu.',
  openGraph: {
    title: 'Pikiran yang Dicatet',
    description:
      'Catatan kecil tentang hal-hal yang terlintas di pikiran.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <div className="curtain-above">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <Script src="/motion.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
