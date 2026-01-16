import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CaseStudyTemplate = ({
    project,
    context,
    problem,
    role,
    responsibilities,
    processSteps,
    keyDecisions,
    results,
    learnings,
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
            backAll: '← Volver a todos los proyectos',
            top: 'Volver arriba ↑'
        },
        en: {
            backHome: 'Back to home',
            context: 'Context & Problem',
            role: 'Role & Responsibilities',
            process: 'Process',
            decisions: 'Key Decisions',
            results: 'Results & Impact',
            learnings: 'Key Learnings',
            backAll: '← Back to all projects',
            top: 'Back to top ↑'
        }
    }

    const t = labels[currentLang]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-200">
            {/* Hero Section */}
            <section className="bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
                <div className="container-custom py-16 md:py-24">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backHome}
                    </Link>

                    <div className="max-w-4xl">
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
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                            {project.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Cover Image */}
            {project.coverImage && (
                <section className="container-custom py-12 md:py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                            <img
                                src={project.coverImage}
                                alt={`${project.title} showcase`}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
            )}

            <div className="container-custom py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-20">
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
                    <section className="bg-neutral-50 dark:bg-neutral-800/50 p-8 md:p-10 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                            {t.role}
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 text-lg">{role}</p>
                            {responsibilities && responsibilities.length > 0 && (
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
                            )}
                        </div>
                    </section>

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
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                                {t.decisions}
                            </h2>
                            <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300">
                                {typeof keyDecisions === 'string' ? (
                                    <p className="leading-relaxed text-lg">{keyDecisions}</p>
                                ) : (
                                    <ul className="space-y-4">
                                        {keyDecisions.map((decision, index) => (
                                            <li key={index} className="flex gap-4">
                                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5"></span>
                                                <span className="leading-relaxed text-lg">{decision}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>
                    )}

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
