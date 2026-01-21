import React from 'react';

/**
 * SECTION 1: VISIÓN GENERAL (Horizontal Cards)
 */
export const FindiesOverview = ({ items }) => {
    if (!items) return null;
    return (
        <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
                {items.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">{item.label}</p>
                            <p className="text-sm font-bold text-neutral-900 dark:text-white">{item.val}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

/**
 * SECTION 3 & 8: SOLUTION & EXPERIENCE CARDS
 */
export const FindiesIconGrid = ({ items, columns = 3 }) => {
    if (!items) return null;
    return (
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
            {items.map((item, i) => (
                <div key={i} className="bg-white dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-xl font-bold">{i + 1}</span>
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

/**
 * SECTION 4: PROCESO 6 STEPS (Gradient Grid)
 */
export const FindiesProcess = ({ steps }) => {
    if (!steps) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
                <div key={i} className="relative group p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all overflow-hidden shadow-sm">
                    {/* Step Number with Gradient */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-indigo-50 dark:ring-indigo-900/20">
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">{step.title}</h3>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div>
                            <p className="text-[10px] uppercase font-black text-indigo-500 tracking-[0.2em] mb-1">Insight</p>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm font-bold leading-snug">{step.insight}</p>
                        </div>
                        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <p className="text-[10px] uppercase font-black text-emerald-500 tracking-[0.2em] mb-1">Decisión</p>
                            <p className="text-neutral-900 dark:text-neutral-100 text-sm font-black leading-snug italic">"{step.decision}"</p>
                        </div>
                    </div>

                    {/* Background Subtle Gradient */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
                </div>
            ))}
        </div>
    );
};

/**
 * SECTION 5: KPIs (Vertical Bars 0-80% + Circle Progress)
 */
export const FindiesKPIs = ({ data }) => {
    if (!data) return null;
    return (
        <div className="space-y-12">
            {/* Main Bar Chart */}
            <div className="bg-white dark:bg-neutral-900/50 p-8 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm relative overflow-hidden">
                <h3 className="text-lg font-black text-neutral-400 uppercase tracking-widest mb-12 text-center relative z-10">{data.chartTitle}</h3>

                <div className="relative h-[300px] flex items-end justify-around px-8 md:px-16 pb-2">
                    {/* Background Grid Lines (20% intervals) */}
                    <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none px-4 md:px-12">
                        {[0, 20, 40, 60, 80, 100].map((level) => (
                            <div
                                key={level}
                                className="absolute w-full border-t border-neutral-100 dark:border-neutral-800/50"
                                style={{ bottom: `${level}%` }}
                            >
                                <span className="absolute -left-10 md:-left-12 -translate-y-1/2 text-[10px] font-black text-neutral-400">
                                    {level}%
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Bars */}
                    {data.items.map((item, i) => (
                        <div key={i} className="relative group w-full flex flex-col items-center z-10">
                            {/* Bar Pillar */}
                            <div
                                className="w-12 md:w-20 bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-2xl shadow-lg relative transition-all duration-500 hover:brightness-110"
                                style={{ height: `${item.val}%` }}
                            >
                                {/* Percentage Label (Permanent) */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 dark:bg-neutral-800 text-white dark:text-indigo-400 text-xs font-black px-2 py-1 rounded shadow-lg border border-indigo-500/30">
                                    {item.val}%
                                </div>
                            </div>

                            {/* X-Axis Label */}
                            <span className="absolute -bottom-8 text-[11px] font-black uppercase tracking-tighter text-neutral-600 dark:text-neutral-400 text-center w-full">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Circle Progress Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {data.items.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col items-center gap-4 hover:border-indigo-200 transition-colors">
                        <div className="relative w-24 h-24">
                            {/* SVG Progress Circle */}
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    className="text-neutral-100 dark:text-neutral-800"
                                    strokeWidth="8"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="38" cx="48" cy="48"
                                />
                                <circle
                                    className="text-indigo-600 dark:text-indigo-500"
                                    strokeWidth="8"
                                    strokeDasharray={2 * Math.PI * 38}
                                    strokeDashoffset={2 * Math.PI * 38 * (1 - item.val / 100)}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="38" cx="48" cy="48"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-neutral-900 dark:text-white">
                                {item.val}%
                            </span>
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400 text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * SECTION 7: EVOLUTION (Cards)
 */
export const FindiesEvolution = ({ data }) => {
    if (!data) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800">
                <h3 className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-4">La Evolución</h3>
                <p className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white leading-tight mb-6">
                    {data.details}
                </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-700/10 to-transparent p-10 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/30 flex items-center">
                <p className="text-lg font-bold text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    "{data.visuals}"
                </p>
            </div>
        </div>
    );
};
/**
 * SECTION 9: PROTOTYPE QUALITIES (Horizontal Bar)
 */
export const FindiesQualities = ({ qualities }) => {
    if (!qualities) return null;
    return (
        <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {qualities.map((q, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2">
                        <span className="text-[10px] md:text-xs font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.2em]">
                            {q.label}
                        </span>
                        <span className="text-lg md:text-xl font-black text-neutral-900 dark:text-white leading-tight">
                            {q.val}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
