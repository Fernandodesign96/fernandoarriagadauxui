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
        <>
            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-200">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 dark:bg-primary-900/10 -skew-x-12 transform origin-top translate-x-1/4 -z-0" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Available for new projects
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8 leading-tight">
                            {t.hero.title}
                        </h1>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10 text-lg text-neutral-600 dark:text-neutral-400">
                            {t.hero.subtitle.map((item, index) => (
                                <span key={index} className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                {t.hero.cta.primary}
                            </button>
                            <button
                                onClick={scrollToContact}
                                className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 rounded-lg font-semibold text-lg transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800"
                            >
                                {t.hero.cta.secondary}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELECTED WORK */}
            <Section id="work" background="white">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            {t.work.title}
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                            {t.work.intro}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>

            {/* PROCESS */}
            <Section id="process" background="gray">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t.process.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        {t.process.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProcessStep
                        number="01"
                        title={t.process.steps.research.title}
                        description={t.process.steps.research.description}
                    />
                    <ProcessStep
                        number="02"
                        title={t.process.steps.strategy.title}
                        description={t.process.steps.strategy.description}
                    />
                    <ProcessStep
                        number="03"
                        title={t.process.steps.design.title}
                        description={t.process.steps.design.description}
                    />
                    <ProcessStep
                        number="04"
                        title={t.process.steps.testing.title}
                        description={t.process.steps.testing.description}
                    />
                </div>
            </Section>

            {/* TOOLS SECTION (NEW) */}
            <Section id="tools" background="white">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t.tools.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        {t.tools.intro}
                    </p>
                </div>

                <ToolsGrid />
            </Section>

            {/* ABOUT */}
            <Section id="about" background="gray">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                                {t.about.title}
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                                {t.about.intro}
                            </p>

                            <ul className="space-y-4">
                                {t.about.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start text-neutral-700 dark:text-neutral-200">
                                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-64 lg:h-auto min-h-[300px]">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                                alt="Fernando Arriagada"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" background="white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                        {t.contact.title}
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-10">
                        {t.contact.intro}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                        {t.contact.audience.map((item, index) => (
                            <div key={index} className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-white dark:bg-neutral-700 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 shadow-sm border border-neutral-100 dark:border-neutral-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-neutral-800 dark:text-white font-medium">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                        <a
                            href="mailto:fernandodesign96@gmail.com"
                            className="w-full sm:w-auto px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t.contact.cta.email}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fernando-arriagada-castillo-a68283180/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg font-semibold text-base transition-all flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700"
                        >
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1wIBM0SO7vQGvGgDtebRt3I_b-ZO1E5Gn/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg font-semibold text-base transition-all flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            CV
                        </a>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Home
