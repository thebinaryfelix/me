import { TranslationProps } from '@/types/translation'

export const Footer = ({ dictionary }: TranslationProps) => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='mt-10'>
      <p className='w-full flex justify-center text-primary-dark dark:text-primary-light'>
        © {year}. {dictionary.home.footer.copyright.text}
      </p>
    </footer>
  )
}
