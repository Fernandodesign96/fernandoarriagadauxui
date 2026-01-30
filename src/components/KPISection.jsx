import React from 'react';

const KPISection = ({ currentLang = 'es' }) => {
    const content = {
        es: {
            title: "Impacto UX medido en KPIs clave",
            intro: "Los siguientes gráficos representan mejoras observadas tras la optimización UX/UI, la validación de hipótesis y el testeo de flujos críticos, con foco en conversión, estabilidad y experiencia de usuario.",
            funnel: {
                title: "Continuidad del Funnel",
                caption: "Mejora atribuida a reducción de fricción, divulgación progresiva y feedback del sistema.",
                labels: ["Antes: ~62%", "Después: ~88%"],
                value: "88%"
            },
            friction: {
                title: "Formularios y Fricción",
                caption: "Menor carga cognitiva gracias a campos condicionales y mensajes claros.",
                labels: ["Reducción de errores"],
                value: "65%"
            },
            stability: {
                title: "Estabilidad y Feedback",
                caption: "Mejora cualitativa en seguridad percibida y control del proceso validada mediante pruebas.",
                labels: ["Previo", "Validado"],
                value: "Alta"
            },
            validation: {
                title: "Validación UX–Dev",
                caption: "Alta consistencia entre diseño y desarrollo, validada en prototipo funcional con foco en performance.",
                labels: ["Consistencia"],
                value: "Alta"
            }
        },
        en: {
            title: "UX Impact Measured in Key KPIs",
            intro: "The following charts represent improvements observed after UX/UI optimization, hypothesis validation, and critical flow testing, focusing on conversion, stability, and user experience.",
            funnel: {
                title: "Funnel Continuity",
                caption: "Improvement attributed to friction reduction, progressive disclosure, and system feedback.",
                labels: ["Before: ~62%", "After: ~88%"],
                value: "88%"
            },
            friction: {
                title: "Forms and Friction",
                caption: "Lower cognitive load thanks to conditional fields and clear messaging.",
                labels: ["Error reduction"],
                value: "65%"
            },
            stability: {
                title: "Stability and Feedback",
                caption: "Qualitative improvement in perceived security and process control validated through testing.",
                labels: ["Previous", "Validated"],
                value: "High"
            },
            validation: {
                title: "UX–Dev Validation",
                caption: "High consistency between design and development, validated in functional prototype focusing on performance.",
                labels: ["Consistency"],
                value: "High"
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

                    {/* 1. Funnel Continuity - Vertical Bar Chart */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.funnel.title}</h3>
                            <div className="h-60 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-100 dark:border-neutral-800/30 relative overflow-visible">
                                {/* Y-Axis Scale Labels */}
                                <div className="absolute left-4 top-8 bottom-20 flex flex-col justify-between text-[8px] font-bold text-neutral-400 font-mono">
                                    <span>100%</span>
                                    <span>50%</span>
                                    <span>0%</span>
                                </div>

                                {/* Plotting Area (with Axis lines) */}
                                <div className="absolute left-14 right-8 top-8 bottom-20 border-l border-b border-neutral-300 dark:border-neutral-700">
                                    <div className="flex items-end justify-around h-full w-full px-4">
                                        {/* Bar Original */}
                                        <div className="flex flex-col items-center relative w-12" style={{ height: '62%' }}>
                                            <div className="w-10 h-full bg-neutral-400 dark:bg-neutral-600 rounded-t-sm transition-all duration-700"></div>
                                            {/* Labels below the X-Axis */}
                                            <div className="absolute top-[calc(100%+12px)] flex flex-col items-center whitespace-nowrap">
                                                <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400">62%</span>
                                                <span className="text-[8px] uppercase font-bold text-neutral-400 tracking-tighter">Original</span>
                                            </div>
                                        </div>

                                        {/* Bar Optimized */}
                                        <div className="flex flex-col items-center relative w-12" style={{ height: '88%' }}>
                                            <div className="w-10 h-full bg-indigo-600 dark:bg-indigo-500 rounded-t-sm transition-all duration-1000 shadow-[0_-2px_8px_rgba(79,70,229,0.15)]"></div>
                                            {/* Labels below the X-Axis */}
                                            <div className="absolute top-[calc(100%+12px)] flex flex-col items-center whitespace-nowrap">
                                                <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400">88%</span>
                                                <span className="text-[8px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-tighter">Optimizado</span>
                                            </div>
                                        </div>
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
                                            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="264" strokeDashoffset={264 - (264 * 0.65) + 13} strokeLinecap="round" className="text-indigo-600 dark:text-indigo-500" />
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

                    {/* 3. Stability & Feedback - Icon Comparison */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.stability.title}</h3>
                            <div className="h-48 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 flex items-center justify-around border border-neutral-100 dark:border-neutral-800/30">
                                <div className="flex flex-col items-center gap-2 opacity-60">
                                    <div className="relative">
                                        <span className="text-3xl">😟</span>
                                        <svg className="w-4 h-4 text-red-500 absolute -right-2 -bottom-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                    <span className="text-[8px] uppercase font-bold text-neutral-400 tracking-tighter">Original</span>
                                </div>

                                <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-800"></div>

                                <div className="flex flex-col items-center gap-3 scale-125">
                                    <div className="relative">
                                        <span className="text-5xl drop-shadow-sm">😊</span>
                                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 absolute -right-3 -bottom-1 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </div>
                                    <span className="text-[8px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-widest">Optimizado</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic">{t.stability.caption}</p>
                    </div>

                    {/* 4. UX–Dev Validation - Checklist */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">{t.validation.title}</h3>
                            <div className="h-48 mb-6 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl p-6 flex flex-col justify-center gap-3 border border-neutral-100 dark:border-neutral-800/30">
                                {[
                                    { es: "Fidelidad UI", en: "UI Fidelity" },
                                    { es: "Performance aceptable", en: "Acceptable Performance" },
                                    { es: "Accesibilidad base", en: "Base Accessibility" },
                                    { es: "Responsive validado", en: "Validated Responsiveness" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group">
                                        <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 group-hover:scale-110 transition-transform">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                            {currentLang === 'es' ? item.es : item.en}
                                        </span>
                                    </div>
                                ))}
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
