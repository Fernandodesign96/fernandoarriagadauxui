import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { EspecieriaKPIs, EspecieriaABTable, EspecieriaMethodology } from '../components/EspecieriaComponents'

const GhaliKombucha = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'ghali-kombucha')

    const sections = project.sections || {};

    return (
        <CaseStudyTemplate project={project}>
            <div className="max-w-4xl mx-auto space-y-24">
                {/* SECTION 4: METODOLOGÍA UX */}
                <section id="metodologia">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.methodology?.title || "Metodología UX"}
                    </h2>
                    <EspecieriaMethodology steps={project.processSteps} />
                </section>

                {/* SECTION 5: A/B TESTING */}
                <section id="abtesting">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.abtesting?.title}
                    </h2>
                    <EspecieriaABTable data={sections.abtesting} />
                </section>

                {/* SECTION 6: KPIs VISUALES */}
                <section id="kpis">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.kpis?.title}
                    </h2>
                    <EspecieriaKPIs data={sections.kpis} />
                </section>

                {/* SECTION 8: CONCLUSIONES - Horizontal Cards with Bullet Points */}
                <section id="conclusiones" className="pb-20 max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.conclusions?.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.conclusions?.items?.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col items-start gap-4 min-h-[300px] hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all group">
                                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{item.title}</h4>
                                <ul className="space-y-3 text-left">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                                            <span className="text-[13px] font-bold text-neutral-700 dark:text-neutral-300 leading-tight">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </CaseStudyTemplate>
    )
}

export default GhaliKombucha
