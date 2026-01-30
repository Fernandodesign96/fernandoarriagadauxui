import React from 'react';

const GhaliKombuchaKPIs = ({ currentLang = 'es' }) => {
    const content = {
        es: {
            title: "Impacto UX medido en métricas clave de e-commerce",
            intro: "Las siguientes visualizaciones representan mejoras obtenidas tras investigación UX, validación con usuarios reales y optimización iterativa del flujo de descubrimiento y compra.",
            abTitle: "1️⃣ Resultados del A/B Testing",
            abTable: {
                headers: ["Métrica", "Versión Original", "Versión Optimizada", "Diferencia"],
                rows: [
                    ["Tasa de Conversión", "21%", "42%", "+100%"],
                    ["Tasa de CTR", "30%", "51%", "+70%"],
                    ["Tiempo Total del Flujo", "4:57 min (297 s)", "3:46 min (226 s)", "−71 s promedio"]
                ]
            },
            metricsGridTitle: "2️⃣ Indicadores Clave de Rendimiento (KPIs)",
            metricsGrid: [
                { label: "Conversión", value: "100", color: "indigo" },
                { label: "CTR (Descubrimiento & Filtros)", value: "70", color: "indigo" },
                { label: "Optimización de Flujo", value: "24", color: "indigo" },
                { label: "Rebote", value: "30", color: "indigo" }
            ],
            conversion: {
                title: "Conversión de Checkout",
                caption: "La simplificación del checkout y la reducción de campos duplicó la tasa de finalización del proceso de compra.",
                xAxis: "Versiones",
                yAxis: "% de conversión",
                labels: ["Original", "Optimizado"],
                values: [21, 42]
            },
            engagement: {
                title: "Permanencia y Engagement",
                caption: "El rediseño de la arquitectura de información y jerarquía visual aumentó significativamente la permanencia y exploración del catálogo.",
                labels: ["Original", "Optimizado"],
                values: [65, 100]
            }
        },
        en: {
            title: "UX Impact Measured in Key E-commerce Metrics",
            intro: "The following visualizations represent improvements obtained after UX research, real user validation, and iterative optimization of the discovery and purchase flow.",
            abTitle: "1️⃣ A/B Testing Results",
            abTable: {
                headers: ["Metric", "Original Version", "Optimized Version", "Difference"],
                rows: [
                    ["Conversion Rate", "21%", "42%", "+100%"],
                    ["CTR Rate", "30%", "51%", "+70%"],
                    ["Total Flow Time", "4:57 min (297 s)", "3:46 min (226 s)", "−71 s average"]
                ]
            },
            metricsGridTitle: "2️⃣ Key Performance Indicators (KPIs)",
            metricsGrid: [
                { label: "Conversion", value: "100", color: "indigo" },
                { label: "CTR (Discovery & Filters)", value: "70", color: "indigo" },
                { label: "Flow Optimization", value: "24", color: "indigo" },
                { label: "Bounce", value: "30", color: "indigo" }
            ],
            conversion: {
                title: "Checkout Conversion",
                caption: "Checkout simplification and field reduction doubled the purchase process completion rate.",
                xAxis: "Versions",
                yAxis: "% conversion",
                labels: ["Original", "Optimized"],
                values: [21, 42]
            },
            engagement: {
                title: "Stay and Engagement",
                caption: "Information architecture and visual hierarchy redesign significantly increased retention and catalog exploration.",
                labels: ["Original", "Optimized"],
                values: [65, 100]
            }
        }
    };

    const t = content[currentLang] || content.es;

    return (
        <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/40 rounded-[2.5rem] border border-neutral-200/60 dark:border-neutral-800/60 my-16 shadow-sm overflow-hidden transition-colors">
            <div className="max-w-5xl mx-auto px-6 md:px-10">

                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-5 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        {t.intro}
                    </p>
                </div>

                {/* 1. A/B Testing Table */}
                <div className="mb-16 bg-white dark:bg-neutral-950 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-neutral-50 dark:border-neutral-900">
                        <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{t.abTitle}</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#F8FAFC] dark:bg-neutral-900/50">
                                <tr>
                                    {t.abTable.headers.map((header, idx) => (
                                        <th key={header} className={`p-5 text-sm font-bold ${idx === 2 ? 'text-white bg-indigo-600 dark:bg-indigo-700' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-50 dark:divide-neutral-900">
                                {t.abTable.rows.map((row, i) => (
                                    <tr key={i} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                                        <td className="p-5 text-sm text-neutral-600 dark:text-neutral-400 font-medium">{row[0]}</td>
                                        <td className="p-5 text-sm text-neutral-600 dark:text-neutral-400">{row[1]}</td>
                                        <td className="p-5 text-sm text-white bg-indigo-600 dark:bg-indigo-700 font-bold shadow-sm">{row[2]}</td>
                                        <td className="p-5 text-sm text-emerald-500 dark:text-emerald-400 font-black italic font-mono">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Key Metrics Grid (Image 2 Style) */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-6 ml-2">{t.metricsGridTitle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {t.metricsGrid.map((metric, i) => (
                            <div key={i} className="bg-gradient-to-br from-indigo-50/80 via-white to-white dark:from-indigo-900/20 dark:via-neutral-950 dark:to-neutral-950 p-6 rounded-[1.5rem] border border-indigo-100 dark:border-indigo-800/40 flex flex-col justify-between min-h-[140px] relative overflow-hidden group hover:shadow-lg transition-all border-b-4 border-b-indigo-500">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-black text-indigo-700 dark:text-indigo-300 uppercase tracking-tighter">{metric.label}</span>
                                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/30">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {metric.label === "Rebote" || metric.label === "Bounce" || metric.label.includes("Flujo") || metric.label.includes("Flow") ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 17h8m0 0V9m0 8l-9-9-4 4-6-6" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
                                            )}
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 leading-none">{metric.value}</span>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-indigo-500 dark:text-indigo-400 font-black uppercase leading-none">
                                                {metric.label === "Rebote" || metric.label.includes("Flujo") ? "Reducción" :
                                                    metric.label === "Bounce" || metric.label.includes("Flow") ? "Reduction" : "Uplift"}
                                            </span>
                                            <span className="text-[14px] text-indigo-600 dark:text-indigo-400 font-bold">%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* 3. Conversion Chart */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col hover:shadow-md transition-all group">
                        <h3 className="text-xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-8">{t.conversion.title}</h3>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{t.conversion.labels[0]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{t.conversion.labels[1]}</span>
                            </div>
                        </div>

                        <div className="relative h-64 w-full px-6">
                            {/* Y-axis Labels & Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-neutral-300 pointer-events-none">
                                {[50, 40, 30, 20, 10, 0].map((val) => (
                                    <div key={val} className="flex items-center gap-4 w-full">
                                        <span className="w-4 text-right">{val}</span>
                                        <div className="flex-1 h-[1px] bg-neutral-100 dark:bg-neutral-800/50"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Bars Container */}
                            <div className="absolute inset-0 left-12 right-6 flex items-end justify-around pb-[1px]">
                                {/* Bar 1: Original */}
                                <div className="relative flex flex-col items-center w-full h-full max-w-[120px] justify-end">
                                    <div className="absolute font-bold text-[10px] text-neutral-500" style={{ bottom: `${(t.conversion.values[0] / 50) * 100 + 4}%` }}>
                                        {t.conversion.values[0]}%
                                    </div>
                                    <div
                                        className="w-full bg-neutral-300 dark:bg-neutral-600 rounded-t-2xl transition-all duration-700 ease-out shadow-sm"
                                        style={{ height: `${(t.conversion.values[0] / 50) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-500 uppercase whitespace-nowrap">{t.conversion.labels[0]}</span>
                                </div>

                                {/* Bar 2: Optimización */}
                                <div className="relative flex flex-col items-center w-full h-full max-w-[120px] justify-end">
                                    <div className="absolute font-black text-[10px] text-indigo-600 dark:text-indigo-400" style={{ bottom: `${(t.conversion.values[1] / 50) * 100 + 4}%` }}>
                                        {t.conversion.values[1]}%
                                    </div>
                                    <div
                                        className="w-full bg-indigo-600 dark:bg-indigo-50 rounded-t-2xl transition-all duration-1000 ease-out shadow-lg shadow-indigo-500/20"
                                        style={{ height: `${(t.conversion.values[1] / 50) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase whitespace-nowrap">{t.conversion.labels[1]}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic mt-14">{t.conversion.caption}</p>
                    </div>

                    {/* 4. Engagement Chart - Bar version */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col hover:shadow-md transition-all">
                        <h3 className="text-xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-8">{t.engagement.title}</h3>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{t.engagement.labels[0]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{t.engagement.labels[1]}</span>
                            </div>
                        </div>

                        <div className="relative h-64 w-full px-6">
                            {/* Y-axis Labels & Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-neutral-300 pointer-events-none">
                                {[100, 80, 60, 40, 20, 0].map((val) => (
                                    <div key={val} className="flex items-center gap-4 w-full">
                                        <span className="w-4 text-right">{val}</span>
                                        <div className="flex-1 h-[1px] bg-neutral-100 dark:bg-neutral-800/50"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Bars Container */}
                            <div className="absolute inset-0 left-12 right-6 flex items-end justify-around pb-[1px]">
                                {/* Bar 1: Original */}
                                <div className="relative flex flex-col items-center w-full h-full max-w-[120px] justify-end">
                                    <div className="absolute font-bold text-[10px] text-neutral-500" style={{ bottom: `${(t.engagement.values[0] / 100) * 100 + 4}%` }}>
                                        {t.engagement.values[0]}%
                                    </div>
                                    <div
                                        className="w-full bg-neutral-300 dark:bg-neutral-600 rounded-t-2xl transition-all duration-700 ease-out shadow-sm"
                                        style={{ height: `${(t.engagement.values[0] / 100) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-500 uppercase whitespace-nowrap">{t.engagement.labels[0]}</span>
                                </div>

                                {/* Bar 2: Optimización */}
                                <div className="relative flex flex-col items-center w-full h-full max-w-[120px] justify-end">
                                    <div className="absolute font-black text-[10px] text-indigo-600 dark:text-indigo-400" style={{ bottom: `${(t.engagement.values[1] / 100) * 100 + 4}%` }}>
                                        {t.engagement.values[1]}%
                                    </div>
                                    <div
                                        className="w-full bg-indigo-600 dark:bg-indigo-50 rounded-t-2xl transition-all duration-1000 ease-out shadow-lg shadow-indigo-500/20"
                                        style={{ height: `${(t.engagement.values[1] / 100) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase whitespace-nowrap">{t.engagement.labels[1]}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic mt-14">{t.engagement.caption}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GhaliKombuchaKPIs;
