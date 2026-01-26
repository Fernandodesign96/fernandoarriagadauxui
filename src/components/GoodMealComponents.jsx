import React from 'react';

/**
 * SECTION 1: VISIÓN GENERAL (Horizontal Cards)
 */
export const GoodMealOverview = ({ items }) => {
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
 * SECTION: EL DESAFÍO (Indigo Card with Icon)
 */
export const GoodMealChallenge = ({ data }) => {
    if (!data) return null;
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/30 dark:to-indigo-900/20 p-10 md:p-12 rounded-[2.5rem] border border-indigo-200 dark:border-indigo-900/40 shadow-sm">
            <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-indigo-600 dark:bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                    ⚠️
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">
                        {data.title}
                    </h3>
                    <p className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-3">
                        {data.problem}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {data.details}
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * SECTION: ROL Y RESPONSABILIDADES (Icon Grid)
 */
export const GoodMealResponsibilities = ({ items }) => {
    if (!items) return null;
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => (
                <div key={i} className="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all">
                    <div className="flex flex-col items-center text-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <p className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                            {item.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

/**
 * SECTION: PROCESO UX (5 PASOS - Numbered Grid)
 */
export const GoodMealProcess = ({ steps }) => {
    if (!steps) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
                <div key={i} className={`relative group p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all overflow-hidden shadow-sm ${i === steps.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
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
                            <p className="text-[10px] uppercase font-black text-pink-500 tracking-[0.2em] mb-1">Decisión</p>
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
 * SECTION: DATOS DE FRICCIÓN (Qualitative Bar Chart)
 */
export const GoodMealFrictionData = ({ data }) => {
    if (!data) return null;
    return (
        <div className="space-y-8">
            {/* Main Bar Chart */}
            <div className="bg-white dark:bg-neutral-900/50 p-8 md:p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm relative overflow-hidden">
                <div className="flex flex-col gap-2 mb-8">
                    <h3 className="text-lg font-black text-neutral-400 uppercase tracking-widest text-center">{data.chartTitle}</h3>
                    <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 text-center italic">{data.subtitle}</p>
                </div>

                <div className="relative h-[300px] flex items-end justify-around px-8 md:px-16 pb-2 mb-12">
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
                        <div key={i} className="relative group flex flex-col items-center z-10 w-full max-w-[120px] h-full justify-end">
                            {/* Bar Pillar - Solid color like reference image */}
                            <div
                                className="w-full bg-indigo-600 dark:bg-indigo-500 rounded-t-2xl shadow-lg relative transition-all duration-500 hover:brightness-110"
                                style={{ height: `${item.val}%` }}
                            >
                                {/* Percentage Label (Permanent) - Above bar */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 dark:bg-neutral-800 text-white dark:text-indigo-400 text-xs font-black px-2 py-1 rounded shadow-lg border border-indigo-500/30 whitespace-nowrap">
                                    {item.val}%
                                </div>
                            </div>

                            {/* X-Axis Label */}
                            <span className="absolute -bottom-8 text-[11px] font-black uppercase tracking-tight text-neutral-600 dark:text-neutral-400 text-center w-full">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Warning Note */}
                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 text-center italic">
                        ⚠️ {data.note}
                    </p>
                </div>
            </div>

            {/* Support Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {data.items.map((item, i) => (
                    <div key={i} className="bg-indigo-50/50 dark:bg-indigo-950/20 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 shadow-sm flex flex-col items-center gap-3">
                        <div className="relative w-20 h-20">
                            {/* SVG Progress Circle */}
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    className="text-indigo-100 dark:text-indigo-900/30"
                                    strokeWidth="6"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="34" cx="40" cy="40"
                                />
                                <circle
                                    className="text-indigo-600 dark:text-indigo-500"
                                    strokeWidth="6"
                                    strokeDasharray={2 * Math.PI * 34}
                                    strokeDashoffset={2 * Math.PI * 34 * (1 - item.val / 100)}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="34" cx="40" cy="40"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-black text-neutral-900 dark:text-white">
                                {item.val}%
                            </span>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-1">{item.label}</p>
                            <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * SECTION: KPIs CUALITATIVOS (Circle Progress)
 */
export const GoodMealKPIs = ({ data }) => {
    if (!data) return null;
    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-lg font-black text-neutral-400 uppercase tracking-widest mb-2">{data.chartTitle}</h3>
                <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 italic">{data.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {data.items.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col items-center gap-4 hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all">
                        <div className="relative w-28 h-28">
                            {/* SVG Progress Circle */}
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    className="text-neutral-100 dark:text-neutral-800"
                                    strokeWidth="8"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="50" cx="56" cy="56"
                                />
                                <circle
                                    className="text-indigo-600 dark:text-indigo-500"
                                    strokeWidth="8"
                                    strokeDasharray={2 * Math.PI * 50}
                                    strokeDashoffset={2 * Math.PI * 50 * (1 - item.val / 100)}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="50" cx="56" cy="56"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-neutral-900 dark:text-white">
                                {item.val}%
                            </span>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-1">{item.label}</p>
                            <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * SECTION: LEARNING QUOTE (Highlighted)
 */
export const GoodMealLearningQuote = ({ quote }) => {
    if (!quote) return null;
    return (
        <div className="bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-pink-950/20 dark:to-indigo-950/20 p-10 md:p-14 rounded-[2.5rem] border border-pink-200 dark:border-pink-900/30 shadow-sm">
            <div className="flex items-start gap-6">
                <div className="text-6xl text-pink-400 dark:text-pink-500 opacity-50">"</div>
                <div className="flex-1">
                    <p className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white leading-tight mb-4 italic">
                        {quote}
                    </p>
                    <p className="text-sm font-bold text-pink-600 dark:text-pink-400 uppercase tracking-widest">
                        — Aprendizaje Clave
                    </p>
                </div>
            </div>
        </div>
    );
};
