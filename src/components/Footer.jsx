import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'

const Footer = () => {
    const { currentLang } = useLanguage()
    const t = translations[currentLang].footer

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 transition-colors duration-500">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Fernando Arriagada</h3>
                        <p className="text-slate-400 font-medium">
                            {t.role}
                        </p>
                    </div>

                    <div className="flex items-center gap-10">
                        <a href="https://www.linkedin.com/in/fernando-arriagada-castillo-a68283180/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 font-bold transition-all hover:-translate-y-1">
                            LinkedIn
                        </a>
                        <a href="mailto:fernandodesign96@gmail.com" className="text-slate-400 hover:text-primary-400 font-bold transition-all hover:-translate-y-1">
                            Email
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-10 text-center text-sm text-slate-600 font-medium">
                    <p>{t.rights}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
