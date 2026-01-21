import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

import {
    FindiesOverview,
    FindiesIconGrid,
    FindiesProcess,
    FindiesKPIs,
    FindiesEvolution,
    FindiesQualities
} from '../components/FindiesComponents'

const Findies = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'findies')

    if (!project) return null
    const sections = project.sections || {}

    return (
        <CaseStudyTemplate project={project}>
            {/* --- OLD PORTFOLIO SECTIONS (1-6) --- */}

            {/* SECTION 1: VISIÓN GENERAL */}
            <FindiesOverview items={sections.overview?.items} />

            <div className="max-w-4xl mx-auto space-y-32 pb-24 px-4">

                {/* SECTION 2: CONTEXTO Y DESAFÍO */}
                <section id="contexto">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.challenge?.title}
                    </h2>
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600 pointer-events-none group-hover:scale-110 transition-transform">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                        </div>
                        <p className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
                            {sections.challenge?.problem}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-bold">
                            {sections.challenge?.details}
                        </p>
                    </div>
                </section>

                {/* SECTION 3: LA SOLUCIÓN */}
                <section id="solucion">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.solution?.title}
                    </h2>
                    <FindiesIconGrid items={sections.solution?.items} />
                </section>

                {/* SECTION 4: PROCESO DE DISEÑO UX */}
                <section id="proceso">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.process?.title}
                    </h2>
                    <FindiesProcess steps={sections.process?.steps} />
                </section>

                {/* SECTION 5: KPIs Y MÉTRICAS UX */}
                <section id="kpis">
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.kpis?.title}
                    </h2>
                    <FindiesKPIs data={sections.kpis} />
                </section>

                {/* SECTION 6: RESULTADOS E IMPACTO */}
                <section id="resultados">
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

                {/* --- ACTUAL PORTFOLIO SECTIONS (7-10) --- */}
                <div className="pt-16 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[10px] uppercase font-black tracking-[0.5em] text-indigo-400 mb-20 block text-center">Evolución Actual · 2024</span>

                    {/* SECTION 7: EVOLUCIÓN DEL PROYECTO */}
                    <section id="evolucion" className="mb-32">
                        <h2 className="text-2xl md:text-3xl font-black mb-12 text-neutral-900 dark:text-white flex items-center">
                            <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                            {sections.evolution?.title}
                        </h2>
                        <FindiesEvolution data={sections.evolution} />
                    </section>

                    {/* SECTION 8: DISEÑO VISUAL Y EXPERIENCIA */}
                    <section id="experiencia" className="mb-32">
                        <h2 className="text-2xl md:text-3xl font-black mb-12 text-neutral-900 dark:text-white flex items-center">
                            <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                            {sections.experience?.title}
                        </h2>
                        <FindiesIconGrid items={sections.experience?.items} />
                    </section>

                    {/* SECTION 10: APRENDIZAJES (Placed before prototype for flow) */}
                    <section id="conclusiones" className="mb-32">
                        <h2 className="text-2xl md:text-3xl font-black mb-12 text-neutral-900 dark:text-white flex items-center">
                            <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                            {sections.conclusions?.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {sections.conclusions?.items.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col gap-4 hover:shadow-md transition-all">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">{item.title}</h4>
                                    <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 9: PROTOTIPO FINAL VALIDADO */}
                    <section id="prototipo" className="pb-20">
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white flex items-center mb-2">
                                <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                                {sections.prototype?.title}
                            </h2>
                            <p className="text-neutral-500 font-bold ml-12 italic text-sm mb-12">{sections.prototype?.note}</p>
                            <FindiesQualities qualities={sections.prototype?.qualities} />
                        </div>
                    </section>

                </div>
            </div>
        </CaseStudyTemplate>
    )
}

export default Findies
