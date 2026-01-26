import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

import {
    GoodMealOverview,
    GoodMealChallenge,
    GoodMealResponsibilities,
    GoodMealProcess,
    GoodMealFrictionData,
    GoodMealKPIs,
    GoodMealLearningQuote
} from '../components/GoodMealComponents'

const GoodMeal = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'goodmeal')

    if (!project) return null
    const sections = project.sections || {}

    // Translations for hardcoded text
    const t = {
        es: {
            contextProblem: 'Contexto & Problema',
            context: 'Contexto',
            problem: 'Problema',
            challenge: 'El Desafío',
            keyDecisions: 'Decisiones de Diseño Clave',
            learningTitle: 'Aprendizaje Clave',
            closingTitle: 'GoodMeal',
            closingSubtitle: 'Nutrición accesible mediante onboarding optimizado',
            ctaButton: 'Ver prototipo en Figma'
        },
        en: {
            contextProblem: 'Context & Problem',
            context: 'Context',
            problem: 'Problem',
            challenge: 'The Challenge',
            keyDecisions: 'Key Design Decisions',
            learningTitle: 'Key Learning',
            closingTitle: 'GoodMeal',
            closingSubtitle: 'Accessible nutrition through optimized onboarding',
            ctaButton: 'View prototype on Figma'
        }
    }[currentLang]

    return (
        <CaseStudyTemplate project={project}>
            {/* SECTION 1: VISIÓN GENERAL DEL PROYECTO */}
            <GoodMealOverview items={sections.overview?.items} />

            <div className="max-w-4xl mx-auto space-y-32 pb-24 px-4">

                {/* SECTION 2: CONTEXTO & PROBLEMA */}
                <section id="contexto">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {t.contextProblem}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-neutral-900/50 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-widest text-xs">
                                {t.context}
                            </p>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                                {project.context}
                            </p>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <p className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-4 uppercase tracking-widest text-xs">
                                {t.problem}
                            </p>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                                {project.problem}
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: EL DESAFÍO */}
                <section id="desafio">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {t.challenge}
                    </h2>
                    <GoodMealChallenge data={sections.challenge} />
                </section>

                {/* SECTION 4: ROL & RESPONSABILIDADES */}
                <section id="rol">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.responsibilities?.title}
                    </h2>
                    <GoodMealResponsibilities items={sections.responsibilities?.items} />
                </section>

                {/* SECTION 5: PROCESO DE DISEÑO */}
                <section id="proceso">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.process?.title}
                    </h2>
                    <GoodMealProcess steps={sections.process?.steps} />
                </section>

                {/* SECTION 6: DECISIONES DE DISEÑO CLAVE */}
                <section id="decisiones">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {t.keyDecisions}
                    </h2>
                    <div className="space-y-6">
                        {project.keyDecisions?.map((decision, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all group">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-2xl flex items-center justify-center font-black flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <p className="font-bold text-neutral-800 dark:text-neutral-200 leading-relaxed flex-1">
                                    {decision}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 7: DATOS CUALITATIVOS & VISUALIZACIÓN */}
                <section id="datos">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.frictionData?.title}
                    </h2>
                    <GoodMealFrictionData data={sections.frictionData} />
                </section>

                {/* SECTION 8: RESULTADOS & APRENDIZAJES */}
                <section id="resultados">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.kpis?.title}
                    </h2>
                    <GoodMealKPIs data={sections.kpis} />
                </section>

                {/* SECTION: RESULTADOS (Simple List) */}
                <section id="resultados-lista">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.results?.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sections.results?.items.map((res, i) => (
                            <div key={i} className="flex items-center gap-4 bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/50 group hover:bg-white dark:hover:bg-neutral-900 transition-all">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="font-bold text-neutral-800 dark:text-neutral-200">{res}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LEARNING QUOTE */}
                <section id="aprendizaje">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {t.learningTitle}
                    </h2>
                    <GoodMealLearningQuote quote={project.learnings} />
                </section>

                {/* SECTION 9: CIERRE VISUAL */}
                <section id="cierre" className="pb-20">
                    <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 p-12 md:p-16 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                {t.closingTitle}
                            </h3>
                            <p className="text-indigo-200 text-lg font-bold mb-8">
                                {t.closingSubtitle}
                            </p>

                            {project.links?.figma && (
                                <a
                                    href={project.links.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-lg hover:scale-105"
                                >
                                    {t.ctaButton}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </section>

            </div>
        </CaseStudyTemplate>
    )
}

export default GoodMeal
