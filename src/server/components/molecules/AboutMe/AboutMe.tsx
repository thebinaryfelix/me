import Image from 'next/image'
import { TranslationProps } from '@/types/translation'
import './AboutMe.css'

export const AboutMe = ({ dictionary }: TranslationProps) => (
  <section
    id='about-me'
    className='mt-9 grid gap-3 grid-cols-1 md:grid-cols-2 md:py-4 overflow-hidden'
  >
    <div className='transition-all transform translate-x-[-100%] opacity-0 animate-slide-in-ltr'>
      <h2 className='text-2xl mb-3 text-text-light dark:text-text-dark font-medium'>
        {dictionary.home.about.title}
      </h2>

      <p
        className='text-text-light dark:text-text-dark lg:text-lg'
        style={{ whiteSpace: 'pre-line' }}
      >
        {dictionary.home.about.content}
      </p>
    </div>

    <div className='flex justify-end'>
      <Image
        priority
        width={450}
        height={450}
        alt={dictionary.home.about.pictureAlt}
        src='/mateus_lecture.webp'
        className='rounded-lg hidden md:block transition-all transform translate-x-[100%] opacity-0 animate-slide-in-rtl'
      />
    </div>
  </section>
)
