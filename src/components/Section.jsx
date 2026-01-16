import React from 'react'

const Section = ({ id, className, children, background = 'white' }) => {
    const bgClasses = {
        white: 'bg-white dark:bg-neutral-950',
        gray: 'bg-neutral-50 dark:bg-neutral-900',
        dark: 'bg-neutral-900 dark:bg-neutral-950',
        primary: 'bg-primary-900 dark:bg-neutral-950'
    }

    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${bgClasses[background] || bgClasses.white} ${className || ''} transition-colors duration-200`}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    )
}

export default Section
