export interface TranslationProps {
  dictionary: {
    theme: {
      light: string
      dark: string
      toggle: string
    }
    home: {
      profile: {
        pictureAlt: string
        occupation: string
        location: string
        contactButton: string
        contactTooltip: string
      }
      about: {
        title: string
        content: string
        pictureAlt: string
      }
      skills: {
        title: string
        frontend: {
          title: string
        }
        backend: {
          title: string
        }
        databases: {
          title: string
        }
        devops: {
          title: string
        }
        tools: {
          title: string
        }
        mobile: {
          title: string
        }
        testing: {
          title: string
        }
        others: {
          title: string
        }
      }
      footer: {
        copyright: {
          text: string
        }
      }
    }
  }
}
