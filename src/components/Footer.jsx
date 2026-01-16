import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'

const Footer = () => {
    const { currentLang } = useLanguage()
    const t = translations[currentLang].footer

    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8 transition-colors duration-200">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Fernando Arriagada</h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            {t.role}
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                            Behance
                        </a>
                        <a href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                            Email
                        </a>
                    </div>
                </div>

                <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8 text-center text-sm text-neutral-400 dark:text-neutral-500">
                    <p>{t.rights}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
