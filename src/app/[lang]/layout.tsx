import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/client'
import { Locale, i18n } from '../../i18n-config'
import { getDictionary } from '../../getDictionary'
import '../globals.css'

const mainFont = Inter({ subsets: ['latin'] })

export const generateStaticParams = async () =>
  i18n.locales.map((locale) => ({ lang: locale }))

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { lang: Locale }
}>) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${mainFont.className} bg-primary-light dark:bg-primary-dark h-screen`}
      >
        <ThemeProvider dictionary={dictionary}>{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId='G-7ZD3WKL9P0' />
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mateus Felix',
  description: 'Front-End Developer',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
    },
  },
  openGraph: {
    url: 'https://thebinaryfelix.vercel.app',
    siteName: 'Mateus Felix | Front-End Developer',
    images: 'https://thebinaryfelix.vercel.app/profile_img.webp',
  },
}

export default RootLayout
