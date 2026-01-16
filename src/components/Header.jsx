import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import translations from '../data/translations'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { currentLang, toggleLanguage } = useLanguage()
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()
    const navigate = useNavigate()

    const t = translations[currentLang].nav

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        // Close mobile menu if open
        setIsMobileMenuOpen(false)

        if (location.pathname !== '/') {
            navigate('/')
            // Wait for navigation then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3'
                    : 'bg-white dark:bg-neutral-950 py-5'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo / Name */}
                    <Link to="/" className="group z-50 relative">
                        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            Fernando Arriagada
                        </h1>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 tracking-wide uppercase">
                            Senior UX/UI Designer
                        </p>
                    </Link>

                    {/* Desktop Navigation & Actions */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Nav Links */}
                        <div className="flex items-center gap-6 mr-4 border-r border-neutral-200 dark:border-neutral-800 pr-6">
                            {['work', 'process', 'tools', 'about'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors capitalize"
                                >
                                    {t[item]}
                                </button>
                            ))}
                        </div>

                        {/* Toggles */}
                        <div className="flex items-center gap-3">
                            {/* Lang Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="text-xs font-bold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                            >
                                {currentLang === 'es' ? 'EN' : 'ES'}
                            </button>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'light' ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Contact CTA */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-semibold px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-primary-600 dark:hover:bg-neutral-200 transition-all shadow-sm hover:shadow-md"
                        >
                            {t.contact}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-neutral-600 dark:text-neutral-400"
                        >
                            {theme === 'light' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-neutral-900 dark:text-white p-1"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 p-4 shadow-xl flex flex-col gap-4 animate-fade-in">
                        {['work', 'process', 'tools', 'about'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-left text-lg font-medium text-neutral-800 dark:text-neutral-200 py-2 border-b border-neutral-100 dark:border-neutral-900 capitalize"
                            >
                                {t[item]}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-left text-lg font-medium text-primary-600 dark:text-primary-400 py-2"
                        >
                            {t.contact}
                        </button>

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-neutral-500 dark:text-neutral-400 text-sm">Language</span>
                            <button
                                onClick={toggleLanguage}
                                className="text-sm font-bold px-3 py-1.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                            >
                                {currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
