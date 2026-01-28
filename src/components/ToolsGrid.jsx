import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import tools from '../data/tools'
import translations from '../data/translations'

const ToolsGrid = () => {
    const { currentLang } = useLanguage()
    const t = translations[currentLang].skills
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = ['all', 'strategy', 'design', 'dev', 'ai']

    const filteredTools = activeFilter === 'all'
        ? tools
        : tools.filter(tool => tool.category === activeFilter)

    const getLevelBadgeStyle = (level) => {
        switch (level) {
            case 'master':
                return 'bg-indigo-600 text-white' // 100%
            case 'advanced':
                return 'bg-indigo-500 text-white' // ~80%
            case 'intermediate':
                return 'bg-indigo-400 text-white' // ~50-60% visually lighter
            default:
                return 'bg-slate-200 text-slate-800'
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 active:scale-95
                            ${activeFilter === filter
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 ring-2 ring-indigo-600 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm'
                            }
                        `}
                    >
                        {t.filters[filter]}
                    </button>
                ))}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredTools.map((tool, index) => (
                    <div
                        key={tool.name + index}
                        className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-36 group w-full"
                    >
                        <div className="flex justify-between items-start gap-4">
                            <span className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                                {tool.name}
                            </span>

                            {/* Category Badge - Equal hierarchy visual */}
                            <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {t.filters[tool.category].split(' ')[0]}
                            </span>
                        </div>

                        <div>
                            {/* Level Badge - Colored by expertise */}
                            <span className={`
                                inline-block px-3 py-1 rounded-md text-[11px] uppercase font-bold tracking-widest shadow-sm
                                ${getLevelBadgeStyle(tool.level)}
                            `}>
                                {t.levels[tool.level]}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToolsGrid
