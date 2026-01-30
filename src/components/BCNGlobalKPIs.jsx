import React from 'react';

const BCNGlobalKPIs = ({ currentLang = 'es' }) => {
    const content = {
        es: {
            title: "Impacto UX en captación y performance",
            intro: "Las siguientes visualizaciones representan mejoras observadas tras el rediseño UX/UI de la homepage, la validación mediante testeo UX y la implementación técnica.",
            barChartTitle: "Mejoras Alcanzadas",
            metrics: [
                {
                    label: "Click-Through Rate (CTR)",
                    value: 45,
                    display: "+45%",
                    desc: "Mejor jerarquía visual, copy contextual y ubicación estratégica de CTAs según etapa del funnel."
                },
                {
                    label: "Tiempo en Página",
                    value: 65,
                    display: "+65%",
                    desc: "Mayor claridad de propuesta de valor y estructura escaneable aumentan exploración consciente del contenido."
                },
                {
                    label: "Scroll Depth",
                    value: 80,
                    display: "+80%",
                    desc: "Narrativa visual progresiva y priorización de servicios core incentivan exploración completa de la homepage."
                },
                {
                    label: "Bounce Rate",
                    value: 35,
                    display: "−35%",
                    desc: "Reducción de fricción cognitiva en los primeros segundos y señales de confianza visibles above the fold."
                },
                {
                    label: "Conversión de Formulario",
                    value: 55,
                    display: "+55%",
                    desc: "CTAs de bajo compromiso, mejor timing de activación y claridad del beneficio ofrecido."
                },
                {
                    label: "Interacción Secciones Clave",
                    value: 70,
                    display: "+70%",
                    desc: "Mayor engagement con servicios, casos y bloques de valor gracias a arquitectura de información optimizada."
                }
            ],
            metricsGridTitle: "Indicadores Clave de Rendimiento",
            resultsTitle: "Resultados de Implementación",
            results: [
                "Rediseño completo de Home orientado a conversión",
                "Sistema visual escalable con UI Kit completo",
                "Prototipo de alta fidelidad navegable",
                "Maquetación funcional 100% responsive",
                "Proceso eficiente apoyado por IA",
                "Caso de estudio sólido para portafolio"
            ],
            typeLabel: "Incremento"
        },
        en: {
            title: "UX Impact on Acquisition and Performance",
            intro: "The following visualizations represent improvements observed after the UX/UI redesign of the homepage, UX testing validation, and technical implementation.",
            barChartTitle: "Improvements Achieved",
            metrics: [
                {
                    label: "Click-Through Rate (CTR)",
                    value: 45,
                    display: "+45%",
                    desc: "Better visual hierarchy, contextual copy, and strategic CTA placement according to funnel stage."
                },
                {
                    label: "Time on Page",
                    value: 65,
                    display: "+65%",
                    desc: "Greater clarity of value proposition and scannable structure increase conscious exploration of content."
                },
                {
                    label: "Scroll Depth",
                    value: 80,
                    display: "+80%",
                    desc: "Progressive visual narrative and prioritization of core services incentivize complete exploration of the homepage."
                },
                {
                    label: "Bounce Rate",
                    value: 35,
                    display: "−35%",
                    desc: "Reduction of cognitive friction in the first few seconds and visible trust signals above the fold."
                },
                {
                    label: "Form Conversion Rate",
                    value: 55,
                    display: "+55%",
                    desc: "Low-commitment CTAs, better activation timing, and clarity of the benefit offered."
                },
                {
                    label: "Key Section Interaction",
                    value: 70,
                    display: "+70%",
                    desc: "Higher engagement with services, cases, and value blocks thanks to optimized information architecture."
                }
            ],
            metricsGridTitle: "Key Performance Indicators",
            resultsTitle: "Implementation Results",
            results: [
                "Complete Home redesign oriented to conversion",
                "Scalable visual system with complete UI Kit",
                "Navigable high-fidelity prototype",
                "100% responsive functional layout",
                "Efficient process supported by AI",
                "Solid case study for portfolio"
            ],
            typeLabel: "Increase"
        }
    };

    const t = content[currentLang] || content.es;

    return (
        <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/40 rounded-[2.5rem] border border-neutral-200/60 dark:border-neutral-800/60 my-16 shadow-sm overflow-hidden transition-colors">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white mb-5 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-medium">
                        {t.intro}
                    </p>
                </div>

                {/* 1. Bar Chart Section (Image 1 Style) */}
                <div className="mb-16 bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm relative overflow-hidden group">
                    <h3 className="text-xl font-black text-neutral-800 dark:text-white mb-10 flex items-center gap-3">
                        <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                        {t.barChartTitle}
                    </h3>

                    <div className="relative h-72 w-full mt-12 flex items-end justify-between px-4">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[80, 60, 40, 20, 0].map((val) => (
                                <div key={val} className="flex items-center gap-4 w-full">
                                    <span className="w-6 text-[10px] font-bold text-neutral-300 dark:text-neutral-700">{val}</span>
                                    <div className="flex-1 h-[1px] bg-neutral-100 dark:bg-neutral-800/50"></div>
                                </div>
                            ))}
                        </div>

                        {/* Bars */}
                        {t.metrics.map((metric, i) => (
                            <div key={i} className="relative flex flex-col items-center group/bar w-[12%] h-full justify-end">
                                <div className="absolute -top-8 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 bg-indigo-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg shadow-indigo-500/20 -translate-y-2">
                                    {metric.display}
                                </div>
                                <div
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-t-xl transition-all duration-1000 ease-out shadow-lg shadow-indigo-500/10 cursor-pointer"
                                    style={{ height: `${(metric.value / 80) * 100}%` }}
                                ></div>
                                <div className="absolute -bottom-16 w-[140%] text-center">
                                    <span className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 leading-tight block transform rotate-45 origin-left mt-4">
                                        {metric.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-16"></div> {/* Spacer for labels */}
                </div>

                {/* 2. Metrics Grid Section (Image 2 Style - like Ghali) */}
                <div className="mb-16">
                    <h3 className="text-xl font-black text-neutral-800 dark:text-white mb-8 ml-2 flex items-center gap-3">
                        <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                        {t.metricsGridTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.metrics.map((metric, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50/80 via-white to-white dark:from-indigo-900/20 dark:via-neutral-950 dark:to-neutral-950 p-6 rounded-[2rem] border border-indigo-100/50 dark:border-indigo-800/40 flex flex-col justify-between min-h-[220px] relative overflow-hidden group hover:shadow-xl transition-all border-b-4 border-b-indigo-500/30">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-black text-indigo-700/60 dark:text-indigo-300/60 uppercase tracking-tighter">{metric.label}</span>
                                        <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 leading-tight pr-4 mt-1">
                                            {metric.desc}
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-indigo-600/10 dark:bg-indigo-400/10 flex items-center justify-center transform group-hover:scale-110 transition-transform flex-shrink-0">
                                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={metric.label.includes('Bounce') ? "M13 17h8m0 0V9m0 8l-9-9-4 4-6-6" : "M13 7h8m0 0v8m0-8l-9 9-4-4-6 6"} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-indigo-600 dark:text-indigo-400 leading-none">{metric.display.replace(/[%+−]/g, '')}</span>
                                        <span className="text-xl font-black text-indigo-600/40 dark:text-indigo-400/40">%</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-1.5">
                                        <svg className={`w-3 h-3 ${metric.label.includes('Bounce') ? 'text-indigo-500 rotate-180' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                                        </svg>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${metric.label.includes('Bounce') ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                            {metric.label.includes('Bounce') ? (currentLang === 'es' ? 'REDUCCIÓN' : 'REDUCTION') : t.typeLabel}
                                        </span>
                                    </div>
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Implementation Results Section (Image 3 Style) */}
                <div>
                    <h3 className="text-xl font-black text-neutral-800 dark:text-white mb-8 ml-2 flex items-center gap-3">
                        <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                        {t.resultsTitle}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {t.results.map((result, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-white/80 dark:bg-neutral-900/40 rounded-2xl border border-indigo-100/50 dark:border-indigo-800/30 hover:shadow-md transition-all group">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform shadow-lg shadow-emerald-500/20 flex-shrink-0"></div>
                                <span className="text-neutral-700 dark:text-neutral-300 text-xs font-bold leading-snug">
                                    {result}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BCNGlobalKPIs;
