import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState(() => {
        // Get from localStorage or default to Spanish
        return localStorage.getItem('preferred-language') || 'es'
    })

    useEffect(() => {
        localStorage.setItem('preferred-language', currentLang)
    }, [currentLang])

    const toggleLanguage = () => {
        setCurrentLang(prev => prev === 'es' ? 'en' : 'es')
    }

    return (
        <LanguageContext.Provider value={{ currentLang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
