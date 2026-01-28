import React from 'react'

const Section = ({ id, className, children, background = 'white' }) => {
    const bgClasses = {
        white: 'bg-white dark:bg-slate-950',
        gray: 'bg-slate-50 dark:bg-slate-900',
        dark: 'bg-slate-900 dark:bg-slate-950',
        primary: 'bg-primary-900 dark:bg-slate-950',
        none: ''
    }

    const bgClass = background === 'none' ? '' : (bgClasses[background] || bgClasses.white)

    return (
        <section
            id={id}
            className={`py-10 md:py-14 ${bgClass} ${className || ''} transition-colors duration-500`}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    )
}

export default Section
