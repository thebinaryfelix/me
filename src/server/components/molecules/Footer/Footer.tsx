import { TranslationProps } from '@/types/translation'
import Link from 'next/link'

export const Footer = ({ dictionary }: TranslationProps) => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='mt-10'>
      <p className='w-full flex justify-center text-primary-dark dark:text-primary-light'>
        © {year}. {dictionary.home.footer.copyright.text}
        <Link
          href='https://github.com/thebinaryfelix'
          target='_blank'
          className='ml-1 underline'
        >
          Mateus Felix
        </Link>
      </p>
    </footer>
  )
}
