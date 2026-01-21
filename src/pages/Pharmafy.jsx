import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects';
import { PharmafyOverview, PharmafyProcess, PharmafyKPIs } from '../components/PharmafyComponents';

const Pharmafy = () => {
    const { currentLang } = useLanguage();
    const projects = projectsData[currentLang];
    const project = projects.find(p => p.slug === 'pharmafy');

    if (!project) return null;

    const sections = project.sections || {};

    return (
        <CaseStudyTemplate project={project}>
            {/* SECTION 1: VISIÓN GENERAL (CV) */}
            <PharmafyOverview data={sections.overview} />

            <div className="max-w-4xl mx-auto space-y-32 pb-24 px-4">

                {/* SECTION 2: CONTEXTO Y DESAFÍO (Actual) */}
                <section id="contexto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.challenge?.title}
                    </h2>
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600 pointer-events-none group-hover:scale-110 transition-transform">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                            {sections.challenge?.problem}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-medium">
                            {sections.challenge?.details}
                        </p>
                    </div>
                </section>

                {/* SECTION 4: PROCESO DE DISEÑO UX (Old) */}
                <section id="proceso">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.process?.title}
                    </h2>
                    <PharmafyProcess steps={sections.process?.steps} />
                </section>

                {/* SECTION 5: PROTOTIPO FINAL VALIDADO (Figma) */}
                <section id="prototipo">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.prototype?.title}
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-10 ml-12 italic">
                        {sections.prototype?.note}
                    </p>
                    <div className="space-y-8">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/30">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: 'Claridad Visual', val: 'Minimalista' },
                                    { label: 'Accesibilidad', val: 'WCAG 2.1 AA' },
                                    { label: 'Enfoque', val: 'Mobile First' },
                                    { label: 'Navegación', val: 'Intuitiva' }
                                ].map((badge, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-[10px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-widest">{badge.label}</p>
                                        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{badge.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: KPIs Y MÉTRICAS UX (Old) */}
                <section id="kpis">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.kpis?.title}
                    </h2>
                    <PharmafyKPIs data={sections.kpis} />
                </section>

                {/* SECTION 7: RESULTADOS E IMPACTO (Old + Actual) */}
                <section id="resultados">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.results?.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sections.results?.items.map((res, i) => (
                            <div key={i} className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-4 group hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all">
                                <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-150 transition-transform"></div>
                                <span className="font-bold text-neutral-800 dark:text-neutral-200">{res}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 8: APRENDIZAJES (Actual) */}
                <section id="aprendizajes" className="pb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-neutral-900 dark:text-white flex items-center">
                        <span className="w-8 h-1 bg-indigo-600 mr-4 rounded-full"></span>
                        {sections.conclusions?.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.conclusions?.items.map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <h4 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{item.title}</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </CaseStudyTemplate>
    );
};

export default Pharmafy;
