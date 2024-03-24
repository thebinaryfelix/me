import { useEffect, useState } from 'react'

// To avoid a bug related with backface-visibility on Firefox we have to bypass this CSS property
// Reference: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browsers

export const useBrowser = () => {
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const isFirefox =
      // @ts-ignore
      typeof InstallTrigger !== 'undefined' ||
      navigator?.userAgent?.includes('Firefox')
    setIsFirefox(isFirefox)
  }, [])

  return { isFirefox }
}
