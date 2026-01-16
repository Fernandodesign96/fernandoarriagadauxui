import { useLanguage } from '../context/LanguageContext'
import tools from '../data/tools'

const ToolsGrid = () => {
    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            {tools.map((tool) => (
                <div
                    key={tool.name}
                    className="group flex flex-row items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-400 dark:hover:border-primary-500 hover:scale-105 transition-all duration-200 shadow-sm"
                >
                    <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-200">
                        {tool.icon}
                    </span>
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 whitespace-nowrap">
                        {tool.name}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ToolsGrid
