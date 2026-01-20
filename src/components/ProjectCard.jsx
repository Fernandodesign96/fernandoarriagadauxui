import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()
    const { currentLang } = useLanguage()
    const t = translations[currentLang].work

    const handleClick = () => {
        window.scrollTo(0, 0)
        navigate(`/work/${project.slug}`)
    }

    const getImagePath = (path) => {
        if (!path) return ''
        const cleanPath = path.startsWith('/') ? path.slice(1) : path
        return `${import.meta.env.BASE_URL}${cleanPath}`
    }

    // Helper for Sentence Case
    const toSentenceCase = (str) => {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    return (
        <div
            onClick={handleClick}
            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 dark:hover:border-primary-400/50 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 transform hover:-translate-y-2"
        >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                    src={getImagePath(project.coverImage)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 dark:group-hover:bg-primary-900/20 transition-colors duration-500" />

                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 text-[10px] font-black bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-xl shadow-lg border border-white/20 dark:border-slate-800/20 tracking-widest uppercase">
                        {project.industry}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-8 md:p-10">
                <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-semibold">
                        {toSentenceCase(project.subtitle)}
                    </p>
                </div>

                <div className="mt-auto flex flex-col gap-8">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-[10px] font-bold tracking-tight text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-lg">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="w-full py-4 px-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-between group-hover:bg-primary-600 group-hover:border-primary-500 transition-all duration-300">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-white">
                            {t.viewStudy}
                        </span>
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
