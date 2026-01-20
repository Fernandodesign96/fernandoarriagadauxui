import React from 'react';

const GhaliKombuchaKPIs = ({ currentLang = 'es' }) => {
    const content = {
        es: {
            title: "Impacto UX medido en métricas clave de e-commerce",
            intro: "Las siguientes visualizaciones representan mejoras obtenidas tras investigación UX, validación con usuarios reales y optimización iterativa del flujo de descubrimiento y compra.",
            abTitle: "Resultados del A/B Testing",
            abTable: {
                headers: ["Métrica", "Versión A", "Versión B", "Diferencia"],
                rows: [
                    ["Tasa de Conversión", "40%", "45%", "+15%"],
                    ["Tasa de CTR", "100%", "100%", "0% (ambas cumplen)"],
                    ["Tiempo Total del Flujo", "1:44 - 3:26 min (Promedio: ~2:30 min)", "1:07 - 3:16 min (Promedio: ~1:40 min)", "-50 seg en promedio"]
                ]
            },
            metricsGridTitle: "Indicadores Clave de Rendimiento",
            metricsGrid: [
                { label: "Conversión", value: "25%", color: "emerald" },
                { label: "Permanencia", value: "50%", color: "emerald" },
                { label: "Optimización de Flujo", value: "40%", color: "emerald" },
                { label: "Rebote", value: "35%", color: "emerald" }
            ],
            conversion: {
                title: "Conversión de Checkout",
                caption: "Comparativa de optimización en la tasa de conversión entre versiones.",
                xAxis: "Versiones",
                yAxis: "% de conversión",
                labels: ["Original", "Optimización"],
                values: [1, 15]
            },
            engagement: {
                title: "Permanencia y Engagement",
                caption: "Aumento significativo en la duración de la sesión tras la optimización estructural.",
                labels: ["Original", "Versión Optimizada"],
                values: ["0%", "50%"]
            }
        },
        en: {
            title: "UX Impact Measured in Key E-commerce Metrics",
            intro: "The following visualizations represent improvements obtained after UX research, real user validation, and iterative optimization of the discovery and purchase flow.",
            abTitle: "A/B Testing Results",
            abTable: {
                headers: ["Metric", "Version A", "Version B", "Difference"],
                rows: [
                    ["Conversion Rate", "40%", "45%", "+15%"],
                    ["CTR Rate", "100%", "100%", "0% (both pass)"],
                    ["Total Flow Time", "1:44 - 3:26 min (Avg: ~2:30 min)", "1:07 - 3:16 min (Avg: ~1:40 min)", "-50 sec average"]
                ]
            },
            metricsGridTitle: "Key Performance Indicators",
            metricsGrid: [
                { label: "Conversion", value: "25%", color: "emerald" },
                { label: "Stay", value: "50%", color: "emerald" },
                { label: "Flow Optimization", value: "40%", color: "emerald" },
                { label: "Bounce", value: "35%", color: "emerald" }
            ],
            conversion: {
                title: "Checkout Conversion",
                caption: "Optimization comparison in conversion rate between versions.",
                xAxis: "Versions",
                yAxis: "% conversion",
                labels: ["Original", "Optimized"],
                values: [1, 15]
            },
            engagement: {
                title: "Stay and Engagement",
                caption: "Significant increase in session duration after structural optimization.",
                labels: ["Original", "Optimized Version"],
                values: ["0%", "50%"]
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
                                            {metric.label === "Rebote" || metric.label === "Bounce" ? (
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
                                                {metric.label === "Rebote" ? "Reducción" : metric.label === "Bounce" ? "Reduction" : "Uplift"}
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

                    {/* 3. Conversion Chart - Pixel Perfect (Matching Reference Image) */}
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
                                {[16, 14, 12, 10, 8, 6, 4, 2, 0].map((val) => (
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
                                    <div className="absolute font-bold text-[10px] text-neutral-500" style={{ bottom: `${(t.conversion.values[0] / 16) * 100 + 4}%` }}>
                                        {t.conversion.values[0].toFixed(1)}%
                                    </div>
                                    <div
                                        className="w-full bg-neutral-300 dark:bg-neutral-600 rounded-t-2xl transition-all duration-700 ease-out shadow-sm"
                                        style={{ height: `${(t.conversion.values[0] / 16) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-500 uppercase whitespace-nowrap">{t.conversion.labels[0]}</span>
                                </div>

                                {/* Bar 2: Optimización */}
                                <div className="relative flex flex-col items-center w-full h-full max-w-[120px] justify-end">
                                    <div className="absolute font-black text-[10px] text-indigo-600 dark:text-indigo-400" style={{ bottom: `${(t.conversion.values[1] / 16) * 100 + 4}%` }}>
                                        {t.conversion.values[1].toFixed(1)}%
                                    </div>
                                    <div
                                        className="w-full bg-indigo-600 dark:bg-indigo-500 rounded-t-2xl transition-all duration-1000 ease-out shadow-lg shadow-indigo-500/20"
                                        style={{ height: `${(t.conversion.values[1] / 16) * 100}%` }}
                                    ></div>
                                    <span className="absolute -bottom-8 text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase whitespace-nowrap">{t.conversion.labels[1]}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic mt-14">{t.conversion.caption}</p>
                    </div>

                    {/* 4. Engagement Chart - Refined with Two Lines */}
                    <div className="bg-white dark:bg-neutral-950 p-7 md:p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800/50 shadow-sm flex flex-col hover:shadow-md transition-all">
                        <h3 className="text-xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-8">{t.engagement.title}</h3>

                        {/* Legend */}
                        <div className="flex justify-end gap-6 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-[2px] bg-neutral-300"></div>
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">{t.engagement.labels[0]} (0%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-[2px] bg-indigo-500"></div>
                                <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest">{t.engagement.labels[1]} (50%)</span>
                            </div>
                        </div>

                        <div className="h-52 bg-indigo-500/5 dark:bg-indigo-900/5 rounded-[2rem] p-8 relative overflow-hidden border border-indigo-500/10 dark:border-indigo-800/20">
                            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                {/* Baseline (0%) */}
                                <line x1="0" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-neutral-300 dark:text-neutral-700" />

                                {/* Fill for optimized */}
                                <path d="M0,35 Q25,32 50,20 T100,5 L100,40 L0,40 Z" fill="currentColor" className="text-indigo-500/10 dark:text-indigo-400/5" />

                                {/* Optimized Line (50%) */}
                                <path
                                    d="M0,35 Q25,32 50,20 T100,5"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    className="text-indigo-500 dark:text-indigo-400 drop-shadow-md"
                                />
                            </svg>

                            <div className="absolute bottom-5 inset-x-8 flex justify-between text-[10px] uppercase font-black tracking-widest text-neutral-400">
                                <span>{t.engagement.labels[0]}</span>
                                <span className="text-indigo-600 dark:text-indigo-400">Optimizado +50%</span>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic mt-10">{t.engagement.caption}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GhaliKombuchaKPIs;
