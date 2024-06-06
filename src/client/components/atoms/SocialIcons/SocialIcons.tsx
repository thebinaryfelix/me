'use client'

import Link from 'next/link'
import Image from 'next/image'
import { sendGAEvent } from '@next/third-parties/google'

export const SocialIcons = () => {
  const handleClickIcon = (label: string) => {
    sendGAEvent('event', 'social_icon', {
      page: 'home',
      action: 'click',
      value: `social_icon_click:${label}`,
    })
  }

  return (
    <div className='flex gap-4 mt-4'>
      <Link
        href='https://github.com/thebinaryfelix'
        target='_blank'
        className='transition-all hover:translate-y-[-3px]'
        onClick={() => handleClickIcon('github')}
      >
        <Image
          width={30}
          height={30}
          alt='Github logo'
          src='/github150.webp'
          className='rounded-full border-solid border-2 border-gray-950 dark:border-transparent bg-black dark:bg-transparent'
        />
      </Link>

      <Link
        href='https://www.linkedin.com/in/mateusfelix/'
        target='_blank'
        className='transition-all hover:translate-y-[-3px]'
        onClick={() => handleClickIcon('linkedin')}
      >
        <Image
          width={30}
          height={30}
          alt='LinkedIn logo'
          src='/linkedin150.webp'
          className='rounded-md border-solid border-2 border-gray-950 dark:border-transparent bg-black dark:bg-transparent'
        />
      </Link>
    </div>
  )
}
