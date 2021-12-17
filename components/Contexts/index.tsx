import React from 'react'
import { useStorage } from '../Hooks'

export const LanguageContext = React.createContext({
  userLanguage: 'en',
  userLanguageChange: (selected) => void 0,
})

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useStorage<string>(
    'local',
    'lang',
    'en'
  )

  return (
    <LanguageContext.Provider
      value={{
        userLanguage,
        userLanguageChange: (selected) => setUserLanguage(selected),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
