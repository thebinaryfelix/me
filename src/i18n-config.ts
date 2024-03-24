export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt', 'es'],
}

export type Locale = (typeof i18n)['locales'][number]
