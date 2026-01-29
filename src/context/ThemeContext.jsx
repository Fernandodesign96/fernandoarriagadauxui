import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Get from localStorage or default to light
        return localStorage.getItem('preferred-theme') || 'light'
    })

    useEffect(() => {
        localStorage.setItem('preferred-theme', theme)

        const root = window.document.documentElement
        const body = window.document.body

        if (theme === 'dark') {
            root.classList.add('dark')
            body.classList.add('dark')
        } else {
            root.classList.remove('dark')
            body.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
