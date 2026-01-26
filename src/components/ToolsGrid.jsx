import { useLanguage } from '../context/LanguageContext'
import tools, { toolCategories } from '../data/tools'

const ToolsGrid = () => {
    const { currentLang } = useLanguage()
    const categories = toolCategories[currentLang]

    // Group tools by category
    const groupedTools = tools.reduce((acc, tool) => {
        if (!acc[tool.category]) {
            acc[tool.category] = []
        }
        acc[tool.category].push(tool)
        return acc
    }, {})

    // Define display order
    const categoryOrder = ['strategy', 'design', 'dev', 'ai']

    return (
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {categoryOrder.map((catKey) => {
                const categoryTools = groupedTools[catKey] || []
                if (categoryTools.length === 0) return null

                return (
                    <div key={catKey} className="space-y-6">
                        {/* Functional Cluster Title */}
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                                {categories[catKey]}
                            </h3>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-100 to-transparent dark:from-indigo-900/30"></div>
                        </div>

                        {/* Tools Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {categoryTools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className={`
                                        group relative overflow-hidden p-4 rounded-xl transition-all duration-300
                                        flex flex-col justify-between gap-3
                                        ${tool.isCore
                                            ? 'bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50 shadow-lg shadow-indigo-100/50 dark:shadow-none hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                                            : 'bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                                        }
                                        hover:-translate-y-1
                                    `}
                                >
                                    <div className="flex items-start justify-between">
                                        <span className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${tool.isCore ? 'scale-110' : 'opacity-80'}`}>
                                            {tool.icon}
                                        </span>
                                        <span className={`
                                            px-2 py-0.5 rounded-full text-[10px] uppercase font-black tracking-wider
                                            ${tool.isCore
                                                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300'
                                                : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                                            }
                                        `}>
                                            {tool.role}
                                        </span>
                                    </div>

                                    <span className={`
                                        font-bold text-sm
                                        ${tool.isCore ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'}
                                    `}>
                                        {tool.name}
                                    </span>

                                    {/* Subtle active glow for core items */}
                                    {tool.isCore && (
                                        <div className="absolute inset-0 border-2 border-indigo-500/0 group-hover:border-indigo-500/10 rounded-xl transition-colors duration-300 pointer-events-none"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToolsGrid
