import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()
    const { currentLang } = useLanguage()
    const t = translations[currentLang].work

    const handleClick = () => {
        // Scroll to top when navigating
        window.scrollTo(0, 0)
        navigate(`/work/${project.slug}`)
    }

    // Helper to fix image paths for GitHub Pages
    const getImagePath = (path) => {
        if (!path) return ''
        const cleanPath = path.startsWith('/') ? path.slice(1) : path
        return `${import.meta.env.BASE_URL}${cleanPath}`
    }

    return (
        <div
            onClick={handleClick}
            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Image Container with Overlay */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                <img
                    src={getImagePath(project.coverImage)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 dark:group-hover:bg-neutral-900/20 transition-colors duration-300" />

                {/* Floating Tags (Industry/Year) - Keep these for context */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-neutral-900/90 backdrop-blur text-neutral-800 dark:text-neutral-200 rounded-full shadow-sm">
                        {project.industry}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                        {project.subtitle}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                    {/* Tags Area */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, index) => (
                            <span key={index} className="text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 4 && (
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 px-1 py-1">+{project.tags.length - 4}</span>
                        )}
                    </div>

                    {/* Full Width CTA */}
                    <div className="w-full py-3 px-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center justify-between group-hover:bg-neutral-100 dark:group-hover:bg-neutral-750 transition-colors">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {t.viewStudy}
                        </span>
                        <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
