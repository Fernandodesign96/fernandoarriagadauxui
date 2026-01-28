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
        setIsMobileMenuOpen(false)

        if (location.pathname !== '/') {
            navigate('/')
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
            className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/60 py-3 shadow-md shadow-slate-200/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo/Name */}
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group">
                    <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-1">
                        Fernando Arriagada
                    </h1>
                    <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none">
                        {translations[currentLang].footer.role}
                    </p>
                </Link>

                {/* Desktop Navigation & Actions */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8 mr-4 border-r border-slate-200 dark:border-slate-800 pr-8">
                        {[
                            { id: 'work', key: 'projects' },
                            { id: 'about', key: 'about' },
                            { id: 'process', key: 'process' },
                            { id: 'tools', key: 'skills' }
                        ].map(({ id, key }) => (
                            <button
                                key={key}
                                onClick={() => scrollToSection(id)}
                                className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-0.5 capitalize relative group/link"
                            >
                                {t[key]}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover/link:w-full" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-black px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all transform active:scale-95"
                        >
                            {currentLang === 'es' ? 'EN' : 'ES'}
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'light' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-sm font-black px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white transition-all shadow-lg hover:shadow-primary-600/20 hover:-translate-y-1 active:scale-95"
                    >
                        {t.contact}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-slate-600 dark:text-slate-400 p-2"
                    >
                        {theme === 'light' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-900 dark:text-white p-2 border border-slate-200 dark:border-slate-800 rounded-xl"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl flex flex-col gap-6 animate-fade-in rounded-b-3xl">
                    {[
                        { id: 'work', key: 'projects' },
                        { id: 'about', key: 'about' },
                        { id: 'process', key: 'process' },
                        { id: 'tools', key: 'skills' }
                    ].map(({ id, key }) => (
                        <button
                            key={key}
                            onClick={() => scrollToSection(id)}
                            className="text-left text-xl font-bold text-slate-800 dark:text-slate-200 py-3 border-b border-slate-100 dark:border-slate-900 capitalize flex justify-between items-center group"
                        >
                            {t[key]}
                            <svg className="w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-left text-2xl font-black text-primary-600 dark:text-primary-400 py-4"
                    >
                        {t.contact}
                    </button>

                    <div className="flex flex-col gap-4 pt-6 mt-4 border-t border-slate-100 dark:border-slate-900">
                        <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">Settings</span>
                        <button
                            onClick={toggleLanguage}
                            className="w-full text-center font-bold px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                        >
                            {currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
