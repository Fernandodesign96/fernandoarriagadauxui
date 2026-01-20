import React from 'react';

const KPISection = ({ currentLang = 'es' }) => {
    const content = {
        es: {
            title: "Impacto UX medido en KPIs clave",
            intro: "Los siguientes gráficos representan mejoras observadas tras la optimización UX/UI, la validación de hipótesis y el testeo de flujos críticos, con foco en conversión, estabilidad y experiencia de usuario.",
            funnel: {
                title: "Optimización del Funnel",
                caption: "Optimización de la continuidad del flujo reduciendo puntos de abandono críticos mediante navegación intuitiva.",
                labels: ["Original 62%", "Optimizado 93%"],
                value: "Mejora continua"
            },
            friction: {
                title: "Fricciones y Formularios",
                caption: "Reducción de carga cognitiva mediante la eliminación de campos innecesarios y feedback en tiempo real.",
                labels: ["Fricción inicial"],
                value: "97%"
            },
            stability: {
                title: "Estabilidad y Feedback",
                caption: "Mejora en la seguridad percibida gracias a un sistema de feedback constante y estabilidad técnica.",
                labels: ["Previo", "Validado"],
                value: "90%"
            },
            validation: {
                title: "Validación UX",
                caption: "Alineación exitosa entre diseño y desarrollo, validada mediante tests de usabilidad y performance.",
                labels: ["Performance"],
                value: "100% Aumento Performance"
            }
        },
        en: {
            title: "UX Impact Measured in Key KPIs",
            intro: "The following charts represent improvements observed after UX/UI optimization, hypothesis validation, and critical flow testing, focusing on conversion, stability, and user experience.",
            funnel: {
                title: "Funnel Optimization",
                caption: "Flow continuity optimization by reducing critical drop-off points through intuitive navigation.",
                labels: ["Original 62%", "Optimized 93%"],
                value: "Continuous impr."
            },
            friction: {
                title: "Frictions and Forms",
                caption: "Cognitive load reduction by eliminating unnecessary fields and implementing real-time feedback.",
                labels: ["Initial friction"],
                value: "97%"
            },
            stability: {
                title: "Stability and Feedback",
                caption: "Improved perceived security thanks to a constant feedback system and technical stability.",
                labels: ["Previous", "Validated"],
                value: "90%"
            },
            validation: {
                title: "UX Validation",
                caption: "Successful alignment between design and development, validated through usability and performance tests.",
                labels: ["Performance"],
                value: "100% Performance Increase"
            }
        }
    };

    const t = content[currentLang] || content.es;

    return (
        <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/40 rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 my-16 shadow-sm overflow-hidden transition-colors">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-5 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        {t.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* 1. Funnel Optimization - Bar design (Inspiration #4) */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.funnel.title}</h3>
                            <div className="h-40 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 flex flex-col justify-center gap-6 border border-neutral-100 dark:border-neutral-800/30">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[9px] uppercase font-bold text-neutral-400 italic font-mono">
                                        <span>{t.funnel.labels[0]}</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-neutral-400 dark:bg-neutral-600 w-[62%] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[9px] uppercase font-bold text-indigo-600 dark:text-indigo-400 italic font-mono">
                                        <span>{t.funnel.labels[1]}</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full bg-indigo-600 dark:bg-indigo-500 w-[93%] rounded-full shadow-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic">{t.funnel.caption}</p>
                    </div>

                    {/* 2. Frictions - Donut/Gauge design (Inspiration #3) */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.friction.title}</h3>
                            <div className="h-40 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 flex items-center justify-center border border-neutral-100 dark:border-neutral-800/30">
                                <div className="flex items-center gap-6">
                                    <div className="relative w-28 h-28 flex items-center justify-center">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="12" className="text-neutral-200 dark:text-neutral-800" strokeDasharray="264" strokeDashoffset="26.4" strokeLinecap="round" />
                                            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="264" strokeDashoffset={264 - (264 * 0.97) + 13} strokeLinecap="round" className="text-indigo-600 dark:text-indigo-500" />
                                        </svg>
                                        <div className="absolute flex flex-col items-center">
                                            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{t.friction.value}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-200/50 dark:border-indigo-800/50">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mt-2">Reducción</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic">{t.friction.caption}</p>
                    </div>

                    {/* 3. Stability - Area graph style (Inspiration #2) */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.stability.title}</h3>
                            <div className="h-40 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 relative overflow-hidden border border-neutral-100 dark:border-neutral-800/30">
                                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path d="M0,40 L100,4 L100,40 L0,40 Z" fill="currentColor" className="text-indigo-500/10 dark:text-indigo-400/5" />
                                    <path d="M0,40 L100,4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-indigo-600 dark:text-indigo-500" fill="none" />
                                </svg>
                                <div className="absolute top-4 right-6 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest">{t.stability.value}</div>
                                <div className="absolute bottom-4 inset-x-6 flex justify-between text-[8px] uppercase font-bold tracking-widest text-neutral-400">
                                    <span>{t.stability.labels[0]}</span>
                                    <span className="text-indigo-600 dark:text-indigo-400 font-black italic">{t.stability.labels[1]}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic">{t.stability.caption}</p>
                    </div>

                    {/* 4. UX Validation - Gauge/Speedometer style (Inspiration #5) */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.validation.title}</h3>
                            <div className="h-40 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 flex items-center justify-center border border-neutral-100 dark:border-neutral-800/30">
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" className="text-neutral-200 dark:text-neutral-800" />
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="264" strokeDashoffset="0" strokeLinecap="round" className="text-indigo-600 dark:text-indigo-500" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center text-center px-4">
                                        <span className="text-lg font-black text-indigo-600 dark:text-indigo-400 leading-tight">100%</span>
                                        <span className="text-[7px] font-black uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mt-1">{t.validation.labels[0]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic">{t.validation.caption}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KPISection;
