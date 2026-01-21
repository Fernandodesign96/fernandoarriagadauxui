import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CaseStudyTemplate = ({
    project,
    context = project.context,
    problem = project.problem,
    role = project.role,
    responsibilities = project.responsibilities,
    processSteps = project.processSteps,
    keyDecisions = project.keyDecisions,
    results = project.results,
    learnings = project.learnings,
    children,
    images = []
}) => {
    const navigate = useNavigate()
    const { currentLang } = useLanguage()

    // Simple label translations for the template
    const labels = {
        es: {
            backHome: 'Volver al inicio',
            context: 'Contexto & Problema',
            role: 'Rol & Responsabilidades',
            process: 'Proceso',
            decisions: 'Decisiones Clave',
            results: 'Resultados & Impacto',
            learnings: 'Aprendizajes',
            resources: 'Recursos & Prototipos',
            backAll: '← Volver a todos los proyectos',
            top: 'Volver arriba ↑',
            code: 'Repositorio & Código'
        },
        en: {
            backHome: 'Back to home',
            context: 'Context & Problem',
            role: 'Role & Responsibilities',
            process: 'Process',
            decisions: 'Key Decisions',
            results: 'Results & Impact',
            learnings: 'Key Learnings',
            resources: 'Resources & Prototypes',
            backAll: '← Back to all projects',
            top: 'Back to top ↑',
            code: 'Repository & Code'
        }
    }

    const t = labels[currentLang]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getLinkIcon = (type) => {
        switch (type) {
            case 'figma': return (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12C5.5 13.5188 6.73122 14.75 8.25 14.75H11V12H5.5Z" fill="#0ACF83" />
                    <path d="M5.5 6.5C5.5 7.6402 6.18525 8.62545 7.1518 9.0718C7.45895 9.21385 7.79943 9.25 8.25 9.25H11V6.5H8.25C6.73122 6.5 5.5 7.73122 5.5 9.25Z" fill="#F24E1E" />
                    <path d="M5.5 9.25C5.5 10.7688 6.73122 12 8.25 12H11V9.25H8.25C6.73122 9.25 5.5 8.01878 5.5 6.5Z" fill="#FF7262" />
                    <path d="M11 3.75C9.48122 3.75 8.25 4.98122 8.25 6.5C8.25 8.01878 9.48122 9.25 11 9.25V3.75Z" fill="#1ABCFE" />
                    <path d="M15.75 6.5C15.75 8.01878 14.5188 9.25 13 9.25H11V3.75H13C14.5188 3.75 15.75 4.98122 15.75 6.5Z" fill="#A259FF" />
                </svg>
            )
            case 'lovable': return (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
            default: return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            )
        }
    }

    const getLinkLabel = (key) => {
        const labels = {
            figma: 'Figma Prototype',
            lovable: 'Lovable AI Preview',
            desktop: 'Live Demo (Desktop)',
            tablet: 'Live Demo (Tablet)',
            mobile: 'Live Demo (Mobile)',
            github: 'GitHub Repository'
        }
        return labels[key] || 'View Resource'
    }

    const galleryGridClass = project.galleryCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-200">
            {/* Hero Section with Integrated Cover Image */}
            <section className="bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
                <div className="container-custom py-12 md:py-20 lg:py-24">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backHome}
                    </Link>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Column */}
                        <div className="flex-1 w-full">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-full">
                                    {project.industry}
                                </span>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">{project.year}</span>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">·</span>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">{project.type}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {project.subtitle}
                            </p>
                        </div>

                        {/* Image Column */}
                        {project.coverImage && (
                            <div className="flex-1 w-full max-w-2xl flex justify-center items-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.coverImage.startsWith('/') ? project.coverImage.slice(1) : project.coverImage}`}
                                    alt={`${project.title} showcase`}
                                    className={`h-auto rounded-xl shadow-lg object-cover ${project.coverImageClass ? project.coverImageClass : 'w-full'}`}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="container-custom py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Code Repository Section */}
                    {project.links?.github && (
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center">
                                <span className="w-8 h-1 bg-black dark:bg-white mr-4 rounded-full"></span>
                                {t.code}
                            </h2>

                            <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                                        {project.codeDetails || 'Front End Development'}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {currentLang === 'es' ? 'Explora el código fuente y la implementación técnica de este proyecto.' : 'Explore the source code and technical implementation of this project.'}
                                    </p>
                                </div>

                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md hover:shadow-lg shrink-0"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            </div>
                        </section>
                    )}

                    {/* Project Resources / Links */}
                    {project.links && Object.keys(project.links).length > 0 && (
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white flex items-center">
                                <span className="w-8 h-1 bg-green-500 mr-4 rounded-full"></span>
                                {t.resources}
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {Object.entries(project.links).map(([key, url]) => {
                                    if (key === 'github') return null; // Skip github here as it has its own section
                                    return (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group"
                                        >
                                            <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {getLinkIcon(key)}
                                            </span>
                                            <span className="font-semibold text-neutral-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400">
                                                {getLinkLabel(key)}
                                            </span>
                                            <svg className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )}

                    {/* Context & Problem */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white flex items-center">
                            <span className="w-8 h-1 bg-primary-600 mr-4 rounded-full"></span>
                            {t.context}
                        </h2>
                        <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300">
                            <p className="leading-relaxed mb-6 text-lg">{context}</p>
                            {problem && <p className="leading-relaxed text-lg">{problem}</p>}
                        </div>
                    </section>

                    {/* Role & Responsibilities */}
                    {(role || (responsibilities && responsibilities.length > 0) || project.sections?.responsibilities?.items) && (
                        <section className="bg-neutral-50 dark:bg-neutral-800/50 p-8 md:p-10 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                                {t.role}
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                {role && <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 text-lg">{role}</p>}

                                {project.sections?.responsibilities?.items ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                                        {project.sections.responsibilities.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/30 transition-all">
                                                {item.icon && <span className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-lg">{item.icon}</span>}
                                                <span className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    responsibilities && responsibilities.length > 0 && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {responsibilities.map((item, index) => (
                                                <li key={index} className="text-neutral-700 dark:text-neutral-300 flex items-start gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                                                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                )}
                            </div>
                        </section>
                    )}

                    {/* Process */}
                    {processSteps && processSteps.length > 0 && (
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white">
                                {t.process}
                            </h2>
                            <div className="space-y-10">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-primary-200 dark:border-neutral-800">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-neutral-950"></span>
                                        <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">{step.title}</h3>
                                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Key Decisions */}
                    {keyDecisions && (
                        <section id="key-decisions">
                            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                                <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                                {t.decisions}
                            </h2>
                            <div className="space-y-4 max-w-4xl">
                                {Array.isArray(keyDecisions) ? (
                                    keyDecisions.map((decision, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-4 bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <p className="leading-relaxed text-lg text-neutral-800 dark:text-neutral-200 font-medium">
                                                {decision}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                                        <p className="leading-relaxed text-lg text-neutral-800 dark:text-neutral-200 font-medium">{keyDecisions}</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Custom Content Slot (e.g., KPIs) */}
                    {children}

                    {/* Results & Metrics */}
                    {results && (
                        <section className="bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8 md:p-12 border border-primary-100 dark:border-primary-900/30">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary-900 dark:text-primary-50 flex items-center">
                                <span className="mr-3 text-3xl">🚀</span> {t.results}
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                {typeof results === 'string' ? (
                                    <p className="text-primary-900 dark:text-primary-100 leading-relaxed text-lg">{results}</p>
                                ) : (
                                    <div className="grid grid-cols-1 gap-6">
                                        {results.map((result, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-primary-100 dark:border-primary-900/30">
                                                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-neutral-800 dark:text-neutral-200 font-medium text-lg leading-relaxed">{result}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Learnings */}
                    {learnings && (
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                                {t.learnings}
                            </h2>
                            <div className="bg-white dark:bg-neutral-900 border-l-4 border-primary-500 p-6 md:p-8 rounded-r-lg shadow-sm">
                                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                                    "{learnings}"
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Gallery Section */}
                    {project.gallery && project.gallery.map((group, index) => (
                        <section key={index} className="pt-8 md:pt-12 border-t border-neutral-100 dark:border-neutral-800">
                            <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white flex items-center">
                                <span className="w-1.5 h-8 bg-primary-500 mr-4 rounded-full"></span>
                                {group.title}
                            </h3>
                            <div className={`grid grid-cols-1 ${galleryGridClass} gap-8 md:gap-8`}>
                                {group.images.map((img, imgIndex) => (
                                    <div key={imgIndex} className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${img.startsWith('/') ? img.slice(1) : img}`}
                                            alt={`${group.title} ${imgIndex + 1}`}
                                            className="w-full h-auto rounded-lg shadow-sm"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <section className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-200">
                <div className="container-custom py-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-base font-medium rounded-md text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all w-full sm:w-auto"
                        >
                            {t.backAll}
                        </Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {t.top}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudyTemplate
