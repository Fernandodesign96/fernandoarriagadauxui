import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'
import projectsData from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import ProcessStep from '../components/ProcessStep'
import ToolsGrid from '../components/ToolsGrid'
import Contact from '../components/Contact'

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

            {/* SELECTED WORK (PROJECTS) */}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>

            {/* ABOUT ME (Moved here) */}
            <Section
                id="about"
                background="none"
                className="py-20 md:py-28"
            >
                <div className="container-custom mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            {t.about.title}
                        </h2>
                        <p className="text-xl text-primary-600 dark:text-primary-400 font-bold">
                            {t.about.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        {/* Left Column: Profile, Interests & CTAs */}
                        <div className="flex flex-col gap-3">
                            {/* Profile Text Blocks */}
                            <div className="flex flex-col gap-2">
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                                    {t.about.profile.p1}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                                    {t.about.profile.p2}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                                    {t.about.profile.p3}
                                </p>
                            </div>

                            {/* Personal Attributes / Interests Grid */}
                            <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto lg:mx-0 w-full">
                                {[
                                    { key: 'research', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
                                    { key: 'innovation', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
                                    { key: 'technology', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> },
                                    { key: 'creativity', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> },
                                    { key: 'gamer', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 15a2 2 0 100 4 2 2 0 000-4zm0 0V8a2 2 0 012-2h8a2 2 0 012 2v7m-2 0a2 2 0 100 4 2 2 0 000-4zM9 13h6" /></svg> },
                                    { key: 'tennis', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><circle cx="12" cy="12" r="3" strokeWidth={1.5} /></svg> },
                                    { key: 'boxing', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10V6a3 3 0 013-3v0a3 3 0 013 3v4m-6 0h6m-6 0a3 3 0 00-3 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 00-3-3m-6 0v7" /></svg> },
                                    { key: 'chess', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6a2 2 0 100-4 2 2 0 000 4zm0 2c-2 0-3.5 1-3.5 3h7c0-2-1.5-3-3.5-3zM8 21h8m-7-3h6m-3-7v7" /></svg> } // Star/Crown shape
                                ].map((item) => (
                                    <div key={item.key} className="flex flex-col items-center justify-center gap-1 p-1.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 aspect-square text-center shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors group">
                                        <span className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors">
                                            {item.icon}
                                        </span>
                                        <span className="text-[8px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                                            {t.about.interests[item.key]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={scrollToContact}
                                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 active:scale-95 text-center"
                                >
                                    {t.about.cta.contact}
                                </button>
                                <a
                                    href="https://drive.google.com/file/d/1wIBM0SO7vQGvGgDtebRt3I_b-ZO1E5Gn/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                                >
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    {t.about.cta.cv}
                                </a>
                            </div>
                        </div>      {/* Right Column: Avatar & Info Cards */}
                        <div className="flex flex-col gap-3">
                            {/* Avatar Card */}
                            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm w-32 aspect-square relative overflow-hidden group">
                                <img
                                    src="assets/profile.jpg"
                                    alt="Foto de perfil de Fernando Arriagada"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {Object.entries(t.about.cards).map(([key, card]) => (
                                <div key={key} className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                                            {/* Icons based on key matching new requests or existing */}
                                            {key === 'experience' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                            {/* Workflow -> "style" in translations? t key is 'workflow'. Check map loop */}
                                            {key === 'workflow' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
                                            {key === 'value' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2 pl-2">
                                        {card.items.map((item, idx) => (
                                            <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* METHODOLOGY (PROCESS) */}
            <Section id="process" className="bg-white dark:bg-slate-950">
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

            {/* SKILLS (TOOLS, Renamed to match Nav logic, key in t is 'skills') */}
            <Section id="tools" className="bg-slate-50 dark:bg-slate-900/30">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        {t.skills.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {t.skills.subtitle}
                    </p>
                </div>

                <ToolsGrid />
            </Section>

            {/* CONTACT */}
            <Section
                id="contact"
                background="none"
                className="py-20 md:py-28"
            >
                <Contact />
            </Section>
        </div>
    )
}

export default Home
