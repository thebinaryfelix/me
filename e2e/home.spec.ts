import { test, expect } from '@playwright/test'
import en from '../src/dictionaries/en.json'

const skills: string[] = Object.values(en.home.skills)
  .filter((value) => typeof value !== 'string')
  // @ts-ignore
  .map((value) => value.title)

test.describe('Text validation', () => {
  test('shows name and main titles', async ({ page }) => {
    await page.goto('/')
    const name = page.getByRole('heading', { name: /Mateus Felix/ })
    await expect(name).toBeVisible()
    const aboutMeTitle = page.getByRole('heading', { name: 'About me' })
    await expect(aboutMeTitle).toBeVisible()
    const skillsTitle = page.getByRole('heading', { name: 'Skills' })
    await expect(skillsTitle).toBeVisible()
  })

  test('shows skills', async ({ page }) => {
    await page.goto('/')

    const lastSkill = skills[skills.length - 1]
    await page.getByTestId(`skill-card-${lastSkill}`).scrollIntoViewIfNeeded()

    for (const skill of skills) {
      await expect(page.getByTestId(`skill-card-${skill}`)).toHaveClass(
        /opacity-100/
      )
    }
  })
})

test.describe('Actions validation', () => {
  test('toggles language', async ({ page }) => {
    await page.goto('/')

    const aboutMeEnglishHeading = page.getByRole('heading', {
      name: /About me/,
    })
    await expect(aboutMeEnglishHeading).toBeVisible()

    const languageButton = page.getByRole('button', { name: 'English' })
    await expect(languageButton).toBeVisible()
    await languageButton.click()

    const portugueseLanguageButton = page.getByLabel('Português')
    await expect(portugueseLanguageButton).toBeVisible()
    await portugueseLanguageButton.click()

    await page.waitForURL('**/pt')

    const aboutMePortugueseHeading = page.getByRole('heading', {
      name: /Quem sou eu/,
    })
    await expect(aboutMePortugueseHeading).toBeVisible()
  })
})
