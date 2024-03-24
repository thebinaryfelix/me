import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ToggleThemeButton } from '@/client/components'
import { TranslationProps } from '@/types/translation'

interface ThemeProviderProps {
  children: ReactNode
  dictionary: TranslationProps['dictionary']
}

export const ThemeProvider = ({ children, dictionary }: ThemeProviderProps) => (
  // @ts-ignore
  <NextThemeProvider attribute='class' defaultTheme='dark'>
    <main className='container m-auto py-4 px-6'>
      <div className='flex justify-end absolute top-4 right-4'>
        <ToggleThemeButton dictionary={dictionary} />
      </div>

      {children}
    </main>
  </NextThemeProvider>
)
