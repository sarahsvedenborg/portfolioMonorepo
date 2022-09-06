const supportedLanguages = [
    { id: 'no', title: 'NOR', isDefault: true },
    { id: 'en', title: 'ENG' },
  ]

export const getGroups = () => {
    const languageGroups = supportedLanguages.map(lang => (
        {
            name: lang.id,
            title: lang.title,
        }
    ))
    languageGroups.push({name: 'common', title: 'COMMON'})
    return languageGroups
}
  

  export const localeDocument = (localeFields) => {
      return supportedLanguages.map(lang => (
          {
            name: lang.id,
            title: lang.title,
            type: 'object',
            group: lang.id,
            fields: [
                ...localeFields
            ]
        }
      ))
} 