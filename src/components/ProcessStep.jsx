const ProcessStep = ({ number, title, description, icon }) => {
    // Progressive emphasis logic
    const getStepStyles = (num) => {
        // High Saturation Progression (85% -> 90% -> 95% -> 100%)
        // Base text color for all is now WHITE due to dark backgrounds
        const baseContent = {
            title: "text-white",
            text: "text-indigo-50/90",
            number: "text-white/20",
            line: "bg-indigo-400/30"
        };

        switch (num) {
            case "01": return {
                // ~85% Intensity
                container: "bg-indigo-600 dark:bg-indigo-900/40 border-indigo-500 dark:border-indigo-700/50",
                icon: "bg-white/10 text-white backdrop-blur-md shadow-inner",
                ...baseContent,
                number: "text-indigo-300/30",
                line: "bg-indigo-400/30"
            };
            case "02": return {
                // ~90% Intensity
                container: "bg-indigo-700 dark:bg-indigo-900/60 border-indigo-600 dark:border-indigo-700/50",
                icon: "bg-white/15 text-white backdrop-blur-md shadow-inner",
                ...baseContent,
                number: "text-indigo-300/30"
            };
            case "03": return {
                // ~95% Intensity
                container: "bg-indigo-800 dark:bg-indigo-900/80 border-indigo-700 dark:border-indigo-700/50",
                icon: "bg-white/20 text-white backdrop-blur-md shadow-inner",
                ...baseContent,
                number: "text-indigo-300/30"
            };
            case "04": return {
                // 100% Intensity (Gradient)
                container: "bg-gradient-to-br from-indigo-600 to-indigo-900 shadow-xl shadow-indigo-500/30 -translate-y-2",
                icon: "bg-white text-indigo-700 shadow-lg",
                title: "text-white",
                text: "text-indigo-100",
                number: "text-white/10",
                line: "bg-white/30"
            };
            default: return {};
        }
    };

    const styles = getStepStyles(number);
    const isLast = number === "04";

    return (
        <div className={`
            relative p-8 rounded-[2rem] transition-all duration-300 group flex flex-col h-full border
            ${styles.container}
            ${!isLast ? 'hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1' : 'hover:shadow-indigo-500/30'}
        `}>
            {/* Connecting line implication */}
            {!isLast && (
                <div className={`absolute top-1/2 -right-6 w-4 h-[2px] hidden lg:block ${styles.line}`} />
            )}

            {/* Header: Icon & Number */}
            <div className="flex justify-between items-start mb-6">
                <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300
                    ${styles.icon}
                    ${!isLast && 'group-hover:scale-110 shadow-sm'}
                `}>
                    {icon}
                </div>
                <span className={`
                    text-4xl font-black font-sans tracking-tighter
                    ${styles.number}
                `}>
                    {number}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <h3 className={`
                    text-xl font-bold mb-3 tracking-tight
                    ${styles.title}
                `}>
                    {title}
                </h3>
                <p className={`
                    text-sm leading-relaxed font-medium
                    ${styles.text}
                `}>
                    {description}
                </p>
            </div>

            {/* Subtle bottom indicator for progression */}
            <div className={`
                mt-6 h-1 w-12 rounded-full transition-all duration-500
                ${isLast ? 'bg-white/30 w-full' : 'bg-black/5 dark:bg-white/10 group-hover:w-full'}
            `} />
        </div>
    )
}

export default ProcessStep
