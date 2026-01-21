import React from 'react';

// SECTION 4: UX Methodology (Agile UX Sprint)
export const EspecieriaMethodology = ({ steps = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {steps.map((step, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold mb-4 group-hover:scale-110 transition-transform">
                        {idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{step.description}</p>
                    <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border-l-4 border-indigo-500">
                        <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Insight: {step.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// SECTION 5: A/B Testing Table
export const EspecieriaABTable = ({ data = { headers: [], rows: [] } }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 my-10 bg-white dark:bg-neutral-950">
            <table className="w-full text-left border-collapse">
                <thead className="bg-neutral-50 dark:bg-neutral-900">
                    <tr>
                        {data.headers.map((header, i) => (
                            <th key={i} className={`p-4 font-bold border-b border-neutral-200 dark:border-neutral-800 ${i === 0 ? 'text-neutral-900 dark:text-white' : i === 1 ? 'text-neutral-500 dark:text-neutral-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                            <td className="p-4 text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800/50 font-medium">{row.label}</td>
                            <td className="p-4 text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800/50 font-mono text-sm">Baseline</td>
                            <td className={`p-4 border-b border-neutral-100 dark:border-neutral-800/50 font-bold font-mono ${row.color}`}>{row.b}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// SECTION 6: Controlled Visual KPIs
export const EspecieriaKPIs = ({ data = {} }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">

            {/* 1. KPIs de conversión y CTR (Barros Verticales) */}
            <div className="bg-white dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-8">{data.conversionTitle}</h3>

                    <div className="relative flex h-60 w-full pt-4">
                        {/* Eje Y */}
                        <div className="flex flex-col justify-between h-48 text-[10px] font-bold text-neutral-400 pr-2 border-r border-neutral-100 dark:border-neutral-800">
                            <span>40%</span>
                            <span>30%</span>
                            <span>20%</span>
                            <span>10%</span>
                            <span>0%</span>
                        </div>

                        {/* Contenedor de barras y Eje X */}
                        <div className="flex-1 relative">
                            {/* Líneas de cuadrícula (opcional para mejor visual) */}
                            <div className="absolute inset-0 flex flex-col justify-between h-48 pointer-events-none">
                                {[0, 1, 2, 3].map(i => (
                                    <div key={i} className="w-full border-t border-neutral-50 dark:border-neutral-900/50"></div>
                                ))}
                            </div>

                            <div className="flex items-end justify-around h-48 gap-4 px-4 relative z-10 border-b-2 border-neutral-200 dark:border-neutral-700">
                                {/* Barra Tasa Conversión */}
                                <div className="flex flex-col items-center flex-1 h-full justify-end group">
                                    <div
                                        className="w-full max-w-[40px] bg-indigo-500 rounded-t-lg relative transition-all duration-700 ease-out hover:bg-indigo-400 cursor-pointer"
                                        style={{ height: '70%' }} /* 28/40 = 70% */
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-indigo-600 dark:text-indigo-400">+28%</span>
                                    </div>
                                    <span className="absolute -bottom-10 text-[10px] uppercase font-bold text-neutral-400 text-center w-full">{data.conversionMetric1}</span>
                                </div>

                                {/* Barra CTR Botones */}
                                <div className="flex flex-col items-center flex-1 h-full justify-end group">
                                    <div
                                        className="w-full max-w-[40px] bg-indigo-600 rounded-t-lg relative transition-all duration-700 ease-out hover:bg-indigo-500 cursor-pointer"
                                        style={{ height: '87.5%' }} /* 35/40 = 87.5% */
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-indigo-600 dark:text-indigo-400">+35%</span>
                                    </div>
                                    <span className="absolute -bottom-10 text-[10px] uppercase font-bold text-neutral-400 text-center w-full">{data.conversionMetric2}</span>
                                </div>
                            </div>

                            {/* Leyenda Eje X (Indicador visual) */}
                            <div className="absolute -bottom-6 w-full text-center">
                                <span className="text-[10px] font-bold text-neutral-300 dark:text-neutral-600 uppercase tracking-[0.2em]">{data.growthLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-14 text-sm text-neutral-500 italic">{data.footerText1}</p>
            </div>

            {/* 2. Rebote y permanencia (Donut) */}
            <div className="bg-white dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-8">{data.bounceTitle}</h3>
                    <div className="flex items-center justify-center h-48 gap-8">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="10" className="text-neutral-100 dark:text-neutral-800" strokeDasharray="251" strokeDashoffset="0" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="251" strokeDashoffset={251 * (1 - 0.22)} strokeLinecap="round" className="text-indigo-600 dark:text-indigo-500" />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 leading-none">-22%</span>
                                <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest mt-1">{data.bounceLabel}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-2">{data.retentionLabel}</span>
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-sm text-neutral-500 italic">{data.footerText2}</p>
            </div>

            {/* 3. Usabilidad (Score card grande) */}
            <div className="bg-indigo-600 dark:bg-indigo-700 p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-white/80 mb-4">{data.usabilityTitle}</h3>
                <div className="text-7xl font-black text-white mb-2">84<span className="text-2xl text-white/60">/100</span></div>
                <div className="px-4 py-1 bg-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-4">{data.usabilityLevel}</div>
                <p className="text-indigo-100 text-sm max-w-[200px]">{data.usabilityText}</p>
            </div>

            {/* 4. Performance móvil (Barra comparativa) */}
            <div className="bg-white dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">{data.performanceTitle}</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                <span>{data.performanceMetric1}</span>
                                <span>100% (Base)</span>
                            </div>
                            <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <div className="h-full bg-neutral-300 dark:bg-neutral-600 w-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                                <span>{data.performanceMetric2}</span>
                                <span>{data.performanceImpact}</span>
                            </div>
                            <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-600 w-[60%] rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-neutral-500 italic">{data.footerText3}</p>
            </div>

        </div>
    );
};
