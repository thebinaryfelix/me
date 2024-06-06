import Image from 'next/image'
import type { TranslationProps } from '@/types/translation'
import { SocialIcons } from '@/client'

export const Profile = ({ dictionary }: TranslationProps) => (
  <section id='profile'>
    <div className='pt-4 flex justify-center'>
      <Image
        priority
        width={128}
        height={128}
        alt={dictionary.home.profile.pictureAlt}
        src='/profile_img.webp'
        className='rounded-full'
      />
    </div>

    <div className='flex flex-col items-center'>
      <h1
        className='font-bold text-2xl mt-4 text-text-light dark:text-text-dark'
        aria-label='Mateus Felix'
      >
        Mateus Félix
      </h1>
      <p className='text-base text-secondary-light dark:text-secondary-dark'>
        {dictionary.home.profile.occupation}
      </p>
      <p className='text-base text-secondary-light dark:text-secondary-dark'>
        {dictionary.home.profile.location}
      </p>

      <SocialIcons />
    </div>
  </section>
)
