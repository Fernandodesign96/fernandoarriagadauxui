const ProcessStep = ({ number, title, description }) => {
    return (
        <div className="relative p-6 pt-12 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 hover:shadow-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 group">
            <div className="absolute -top-4 left-6 bg-primary-600 text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform">
                {number}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 mt-2">
                {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default ProcessStep
