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

    return (
        <div
            onClick={handleClick}
            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900/40 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:scale-[1.01]"
        >
            {/* Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                    src={getImagePath(project.coverImage)}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />

                {/* Category Pill (Top-Left) */}
                <div className="absolute top-5 left-5 z-10">
                    <span className="px-4 py-1.5 text-[11px] font-bold bg-slate-50/95 dark:bg-slate-900/90 backdrop-blur-md text-indigo-900 dark:text-indigo-100 rounded-full shadow-sm border border-white/50 dark:border-slate-700 tracking-wide">
                        {project.industry}
                    </span>
                </div>
            </div>

            {/* Content Block */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-2">
                        {project.subtitle}
                    </p>
                </div>

                <div className="mt-auto flex flex-col gap-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-[10px] font-bold tracking-tight text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-lg">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="w-full py-3 px-1 rounded-xl flex items-center justify-between group/cta">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {t.viewStudy}
                        </span>
                        <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
