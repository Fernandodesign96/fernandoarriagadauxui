const ProcessStep = ({ number, title, description, icon }) => {
    // Progressive emphasis logic
    const isLast = number === "04";

    return (
        <div className={`relative p-6 pt-12 border rounded-lg transition-all duration-300 group ${isLast
                ? 'bg-primary-600 border-primary-500 shadow-xl scale-105 z-10'
                : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:border-primary-500'
            }`}>
            <div className={`absolute -top-4 left-6 text-xl font-bold w-12 h-12 flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform ${isLast ? 'bg-white text-primary-600' : 'bg-primary-600 text-white'
                }`}>
                {icon ? icon : number}
            </div>
            <h3 className={`text-xl font-bold mb-3 mt-2 ${isLast ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                {title}
            </h3>
            <p className={`leading-relaxed ${isLast ? 'text-primary-50' : 'text-neutral-600 dark:text-neutral-300'
                }`}>
                {description}
            </p>
        </div>
    )
}

export default ProcessStep
