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
                            <th key={i} className={`p-4 font-bold border-b border-neutral-200 dark:border-neutral-800 ${i === 0 ? 'text-neutral-900 dark:text-white' : i === 1 ? 'text-neutral-500 dark:text-neutral-400' : i === 2 ? 'text-neutral-500 dark:text-neutral-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                            <td className="p-4 text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800/50 font-medium">{row.label}</td>
                            <td className="p-4 text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800/50 font-mono text-sm">{row.a}</td>
                            <td className="p-4 text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800/50 font-mono text-sm">{row.b}</td>
                            <td className={`p-4 border-b border-neutral-100 dark:border-neutral-800/50 font-bold font-mono ${row.color}`}>{row.impact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// SECTION 6: Controlled Visual KPIs (Refactored for Ghali Kombucha)
export const EspecieriaKPIs = ({ data = {} }) => {
    return (
        <div className="space-y-16 my-16">

            {/* 1. Grid de KPIs (Capas/Cards con Círculos) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: data.conversionMetric1?.split(' ')[1] || 'Uplift', value: data.conversionMetric1?.split(' ')[0] || '+12.5%', sub: 'Conversión', icon: 'M13 7h8m0 0v8m0-8l-9 9-4-4-6 6' },
                    { label: data.retentionLabel?.split(' ')[1] || 'Uplift', value: data.retentionLabel?.split(' ')[0] || '+100%', sub: 'Permanencia', icon: 'M5 11l7-7 7 7M5 19l7-7 7 7' },
                    { label: 'Reducción', value: data.performanceImpact?.split(' ')[0] || '-14.3%', sub: 'Flujo', icon: 'M13 17h8m0 0V9m0 8l-9-9-4 4-6-6' },
                    { label: 'Excelente', value: '84/100', sub: 'Usabilidad', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
                ].map((kpi, idx) => (
                    <div key={idx} className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all">
                        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-neutral-50 dark:text-neutral-800" />
                                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="264" strokeDashoffset={idx === 1 ? 0 : 150} strokeLinecap="round" className="text-indigo-600 dark:text-indigo-400" />
                            </svg>
                            <div className="absolute flex items-center justify-center w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={kpi.icon} />
                                </svg>
                            </div>
                        </div>
                        <span className="text-2xl font-black text-neutral-900 dark:text-white leading-none">{kpi.value}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mt-1">{kpi.label}</span>
                        <span className="text-xs font-bold text-neutral-400 mt-2">{kpi.sub}</span>
                    </div>
                ))}
            </div>

            {/* 2. Gráficos Comparativos (Magenta vs Indigo) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Gráfico 1: Conversión */}
                <div className="bg-white dark:bg-neutral-950 p-8 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col">
                    <h4 className="text-lg font-bold mb-8 text-neutral-900 dark:text-white">Conversión de Checkout</h4>
                    <div className="relative flex h-48 w-full">
                        {/* Eje Y */}
                        <div className="flex flex-col justify-between h-full text-[8px] font-bold text-neutral-400 pr-2 border-r border-neutral-100 dark:border-neutral-800">
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                        </div>
                        {/* Área del Gráfico */}
                        <div className="flex-1 flex items-end justify-around px-2 relative h-full">
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-2 h-full">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-full border-t border-neutral-50 dark:border-neutral-900/50" />
                                ))}
                            </div>
                            {/* Barra A */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-[#E11D48] opacity-100 mb-1">24%</div>
                                <div className="w-full bg-[#E11D48] rounded-t-lg transition-all duration-700 shadow-sm hover:brightness-110" style={{ height: '24%' }}></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-400 uppercase text-center leading-none mt-2">VERSIÓN A<br />MAGENTA</span>
                                </div>
                            </div>
                            {/* Barra B */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-indigo-600 opacity-100 mb-1">27%</div>
                                <div className="w-full bg-indigo-600 rounded-t-lg transition-all duration-1000 shadow-lg shadow-indigo-500/20 hover:brightness-110" style={{ height: '27%' }}></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-900 dark:text-white uppercase italic underline text-center leading-none mt-2">VERSIÓN B<br />FINAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-12 text-[11px] text-neutral-500 italic leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">{data.footerText1}</p>
                </div>

                {/* Gráfico 2: Engagement */}
                <div className="bg-white dark:bg-neutral-950 p-8 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col">
                    <h4 className="text-lg font-bold mb-8 text-neutral-900 dark:text-white">Permanencia & Engagement</h4>
                    <div className="relative flex h-48 w-full">
                        {/* Eje Y */}
                        <div className="flex flex-col justify-between h-full text-[8px] font-bold text-neutral-400 pr-2 border-r border-neutral-100 dark:border-neutral-800">
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                        </div>
                        {/* Área del Gráfico */}
                        <div className="flex-1 flex items-end justify-around px-2 relative h-full">
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-2 h-full">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-full border-t border-neutral-50 dark:border-neutral-900/50" />
                                ))}
                            </div>
                            {/* Barra A */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-[#E11D48] opacity-100 mb-1">100%</div>
                                <div className="w-full bg-[#E11D48] rounded-t-lg opacity-60 h-full transition-all duration-700 hover:brightness-110"></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-400 uppercase text-center leading-none mt-2">VERSIÓN A<br />MAGENTA</span>
                                </div>
                            </div>
                            {/* Barra B */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-indigo-600 opacity-100 mb-1">100%</div>
                                <div className="w-full bg-indigo-600 rounded-t-lg h-full transition-all duration-1000 shadow-lg shadow-indigo-500/20 hover:brightness-110"></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-900 dark:text-white uppercase italic underline text-center leading-none mt-2">VERSIÓN B<br />FINAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-12 text-[11px] text-neutral-500 italic leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">{data.footerText2}</p>
                </div>

                {/* Gráfico 3: CTR */}
                <div className="bg-white dark:bg-neutral-950 p-8 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col">
                    <h4 className="text-lg font-bold mb-8 text-neutral-900 dark:text-white">Tasa de CTR</h4>
                    <div className="relative flex h-48 w-full">
                        {/* Eje Y */}
                        <div className="flex flex-col justify-between h-full text-[8px] font-bold text-neutral-400 pr-2 border-r border-neutral-100 dark:border-neutral-800">
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                        </div>
                        {/* Área del Gráfico */}
                        <div className="flex-1 flex items-end justify-around px-2 relative h-full">
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-2 h-full">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-full border-t border-neutral-50 dark:border-neutral-900/50" />
                                ))}
                            </div>
                            {/* Barra A */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-[#E11D48] opacity-100 mb-1">34%</div>
                                <div className="w-full bg-[#E11D48] rounded-t-lg transition-all duration-700 shadow-sm hover:brightness-110" style={{ height: '34%' }}></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-400 uppercase text-center leading-none mt-2">VERSIÓN A<br />MAGENTA</span>
                                </div>
                            </div>
                            {/* Barra B */}
                            <div className="flex flex-col items-center w-full max-w-[40px] relative z-10 group h-full justify-end">
                                <div className="absolute -top-6 text-[10px] font-black text-indigo-600 opacity-100 mb-1">46%</div>
                                <div className="w-full bg-indigo-600 rounded-t-lg transition-all duration-1000 shadow-lg shadow-indigo-500/20 hover:brightness-110" style={{ height: '46%' }}></div>
                                <div className="h-10 flex items-center justify-center">
                                    <span className="text-[7px] font-black text-neutral-900 dark:text-white uppercase italic underline text-center leading-none mt-2">VERSIÓN B<br />FINAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-12 text-[11px] text-neutral-500 italic leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">{data.footerText3}</p>
                </div>

            </div>
        </div>
    );
};
