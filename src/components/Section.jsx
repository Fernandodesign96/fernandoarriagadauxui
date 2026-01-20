import React from 'react'

const Section = ({ id, className, children, background = 'white' }) => {
    const bgClasses = {
        white: 'bg-white dark:bg-slate-950',
        gray: 'bg-slate-50 dark:bg-slate-900',
        dark: 'bg-slate-900 dark:bg-slate-950',
        primary: 'bg-primary-900 dark:bg-slate-950'
    }

    return (
        <section
            id={id}
            className={`py-10 md:py-14 ${bgClasses[background] || bgClasses.white} ${className || ''} transition-colors duration-500`}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    )
}

export default Section
