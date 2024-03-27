# My personal website

![GitHub deployments](https://img.shields.io/github/deployments/thebinaryfelix/me/production)

This is my personal website, to display my profile and contact information, as well as testing new technologies.

## Running the project

1. Install [npm](https://www.npmjs.com/package/npm) locally on your machine
2. Install the dependencies

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

### Unit tests with Jest

Run all tests:

```bash
npm run test
```

Run all tests in watch mode:

```bash
npm run test:watch
```

### E2E tests with Playwright

Run with `UI mode` enabled:

```bash
npm run test:e2e
```

Run all tests in `CI mode`:

```bash
npm run test:e2e:ci
```

To see the tests results in your browser:

```bash
npm run report:e2e
```

## Features

### 🌎 Internationalization (i18n) Routing

Using native resources from Next.js the website is available in multiple languages!

Examples:

- To view the website in Portuguese, just visit `https://thebinaryfelix.vercel.app/pt`
- To view it in English, go to: `https://thebinaryfelix.vercel.app/en`

Supported languages:

- 🇺🇸 English: `/en`
- 🇧🇷 Portuguese: `/pt`
- 🇪🇸 Spanish: `/es`

Want to contribute by adding a new language? Follow the steps below:

1. Fork the repository
2. Go to `src/dictionaries`
3. Copy one of the JSON files and translate the values (by yourself or using ChatGPT)
4. Create a new file inside `src/dictionaries` using the base [UTS Locale Identifiers](https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers). i.e.: For Portuguese would just be `pt.json`, no need for `pt-BR` or `pt-PT`
5. Go to `src/i18n-config.ts` and add the new language to the `i18n.locales` array
6. Import the new file in `src/getDictionary.ts`
7. Update the `languages` array inside the LanguageSelector.tsx component to allow the new language to be selected by the user
8. Open a pull request with the new file

## 🤖 Technologies

### Package management

- [npm](https://www.npmjs.com/)

### Frameworks

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Testing

- Unit testing: [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)
- E2E testing: [Playwright](https://playwright.dev/)

### Monitoring

- Google Analytics with [@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
