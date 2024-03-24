'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const languages = [
  { code: 'en', name: 'en', flagCode: 'us' },
  { code: 'pt', name: 'pt-BR', flagCode: 'br' },
  { code: 'es', name: 'es', flagCode: 'es' },
]

export const LanguageSelector = () => {
  const router = useRouter()

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<HTMLButtonElement>(null)

  const currentLanguage =
    languages.find(({ code }) => code === pathname.replace('/', '')) ||
    languages[0]

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChangeLanguage = (langCode: string) => {
    setIsOpen(false)
    router.push(`/${langCode}`)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef?.current &&
      !dropdownRef?.current?.contains(event?.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          ref={dropdownRef}
          type='button'
          id='language-dropdown'
          onClick={handleToggleDropdown}
          className='flex justify-center items-center w-full rounded-md border border-gray-300 dark:border-slate-500 shadow-sm px-4 py-2 text-sm font-medium text-slate-800 dark:text-gray-400 hover:bg-slate-100 hover:dark:bg-slate-600 focus:outline-none'
        >
          <span className={`fi fi-${currentLanguage.flagCode} mr-1`} />
          {currentLanguage?.name}{' '}
        </button>
      </div>

      {isOpen && (
        <div
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          className='absolute right-0 z-10 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        >
          <div className='py-1' role='none'>
            {languages.map(({ code, name, flagCode }) => (
              <button
                key={code}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${code === currentLanguage.code ? 'font-bold' : ''}`}
                role='menuitem'
                onClick={() => handleChangeLanguage(code)}
              >
                <span className={`fi fi-${flagCode} mr-1`} />
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
