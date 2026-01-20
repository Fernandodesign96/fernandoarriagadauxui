import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'
import projectsData from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import ProcessStep from '../components/ProcessStep'
import ToolsGrid from '../components/ToolsGrid'

const Home = () => {
    const { currentLang } = useLanguage()
    const t = translations[currentLang]
    const projects = projectsData[currentLang]

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* HERO SECTION */}
            <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950 transition-colors duration-500">
                {/* Refined Background Decoration - Even more subtle on dark */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

                <div className="container-custom relative z-10 text-center mx-auto px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-300 text-[10px] font-black uppercase tracking-widest mb-10 backdrop-blur-sm border border-primary-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Available for new projects
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05] max-w-[900px] mx-auto">
                            {t.hero.title}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-10 w-full text-center font-medium leading-relaxed opacity-90 lg:whitespace-nowrap">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-5 justify-center">
                            <button
                                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1 active:scale-95"
                            >
                                {t.hero.cta.primary}
                            </button>
                            <button
                                onClick={scrollToContact}
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-primary-500/50 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                            >
                                {t.hero.cta.secondary}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELECTED WORK */}
            <Section id="work" background="white" className="relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            {t.work.title}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                            {t.work.intro}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>

            {/* PROCESS */}
            <Section id="process" className="bg-slate-50 dark:bg-slate-900/30">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        {t.process.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                        {t.process.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <ProcessStep
                        number="01"
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                        title={t.process.steps.research.title}
                        description={t.process.steps.research.description}
                    />
                    <ProcessStep
                        number="02"
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-6-6m0 0l6-6m-6 6h18" /></svg>}
                        title={t.process.steps.strategy.title}
                        description={t.process.steps.strategy.description}
                    />
                    <ProcessStep
                        number="03"
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
                        title={t.process.steps.design.title}
                        description={t.process.steps.design.description}
                    />
                    <ProcessStep
                        number="04"
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                        title={t.process.steps.testing.title}
                        description={t.process.steps.testing.description}
                    />
                </div>
            </Section>

            {/* TOOLS SECTION */}
            <Section id="tools" background="white">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        {t.tools.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {t.tools.intro}
                    </p>
                </div>

                <ToolsGrid />
            </Section>

            {/* ABOUT */}
            <Section id="about" className="bg-slate-50 dark:bg-slate-900/30">
                <div className="flex flex-col items-center text-center mb-12 max-w-4xl mx-auto">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl mb-10 border-[6px] border-white dark:border-slate-800 ring-4 ring-primary-500/20">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                            alt="Fernando Arriagada"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        {t.about.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-bold mb-12 leading-tight">
                        {t.about.intro}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
                        {Object.entries(t.about.sections).map(([key, section]) => (
                            <div key={key} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50" />
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                                            <span className="text-primary-500 mt-1 font-bold">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" background="white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.05] max-w-[800px] mx-auto">
                        {t.contact.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t.contact.intro}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {t.contact.audience.map((item, index) => (
                            <div key={index} className="px-8 py-5 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-10">
                        <a
                            href="mailto:fernandodesign96@gmail.com"
                            className="w-full sm:w-auto px-12 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center transform hover:-translate-y-2 active:scale-95"
                        >
                            <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t.contact.cta.email}
                        </a>

                        <div className="flex flex-wrap justify-center gap-10 font-black uppercase tracking-widest text-[11px]">
                            <a
                                href="https://www.linkedin.com/in/fernando-arriagada-castillo-a68283180/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-slate-400 hover:text-primary-600 transition-all flex items-center gap-3"
                            >
                                <svg className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1wIBM0SO7vQGvGgDtebRt3I_b-ZO1E5Gn/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-slate-400 hover:text-primary-600 transition-all flex items-center gap-3"
                            >
                                <svg className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {t.contact.cta.cv}
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Home
