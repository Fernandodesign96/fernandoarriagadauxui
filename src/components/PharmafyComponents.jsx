import React from 'react';

/**
 * Section 1: Project Overview Cards
 */
export const PharmafyOverview = ({ data }) => {
    if (!data) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16 px-4">
            {data.items.map((item, i) => (
                <div key={i} className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-center gap-4 group hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all">
                    <span className="text-3xl bg-indigo-50 dark:bg-indigo-900/20 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                        {item.icon}
                    </span>
                    <div>
                        <p className="text-[10px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{item.val}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

/**
 * Section 4: 6-Step Design Process Grid
 */
export const PharmafyProcess = ({ steps }) => {
    if (!steps) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
                <div key={i} className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 text-6xl font-black text-indigo-500/5 dark:text-indigo-400/5 select-none transition-all group-hover:scale-110">
                        {i + 1}
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40">
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">{step.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                            {step.description}
                        </p>

                        <div className="space-y-4 pt-4 border-t border-neutral-50 dark:border-neutral-800">
                            <div>
                                <p className="text-[10px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-tighter mb-1">Para qué sirvió</p>
                                <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{step.purpose}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-tighter mb-1">Qué decisión habilitó</p>
                                <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{step.decision}</p>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Progress Bar at bottom */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-500" style={{ width: `${((i + 1) / 6) * 100}%` }}></div>
                </div>
            ))}
        </div>
    );
};

/**
 * Section 6: Vertical Bar Chart + Percentage Cards
 */
export const PharmafyKPIs = ({ data }) => {
    if (!data) return null;

    return (
        <div className="space-y-12">
            {/* Vertical Bar Chart Container */}
            <div className="bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 select-none italic font-black text-indigo-600 text-4xl uppercase tracking-tighter">
                    {data.chartTitle}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-12 flex items-center gap-3">
                    <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
                    {data.chartTitle}
                </h3>

                <div className="relative h-64 w-full flex items-end justify-between gap-4 px-4 md:px-12 border-b-2 border-neutral-100 dark:border-neutral-800 pb-2">
                    {/* Y-Axis Labeling */}
                    <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] font-bold text-neutral-400 -ml-4 md:-ml-8">
                        <span>100%</span>
                        <span>80%</span>
                        <span>60%</span>
                        <span>40%</span>
                        <span>20%</span>
                        <span>0%</span>
                    </div>

                    {/* Chart Bars */}
                    {data.items.map((kpi, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                            {/* Bar Container to define height correctly */}
                            <div className="w-full max-w-[60px] flex items-end justify-center h-full">
                                <div
                                    className="w-full bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-xl transition-all duration-1000 ease-out relative shadow-lg shadow-indigo-100 dark:shadow-indigo-900/20 group-hover:scale-105 origin-bottom"
                                    style={{ height: `${kpi.val}%` }}
                                >
                                    {/* Value tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {kpi.val}%
                                    </div>
                                </div>
                            </div>
                            {/* X-Axis Label */}
                            <div className="absolute top-full mt-4 text-[10px] md:text-xs font-black text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-center">
                                {kpi.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sub-section: 4 Individual Cards with Circles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.items.map((kpi, i) => {
                    const isGreen = kpi.label === "Adopción" || kpi.label === "Recordatorios" || kpi.label === "Reminder Use" || kpi.label === "Adoption";
                    const hasIncrement = isGreen;

                    return (
                        <div key={i} className={`bg-white dark:bg-neutral-900 p-8 rounded-3xl border ${isGreen ? 'border-green-100 dark:border-green-900/30' : 'border-neutral-100 dark:border-neutral-800'} shadow-sm flex flex-col items-center gap-6 group hover:translate-y-[-4px] transition-all`}>
                            {/* Percentage Circle */}
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="48" cy="48" r="40"
                                        className="stroke-neutral-100 dark:stroke-neutral-800 fill-none"
                                        strokeWidth="8"
                                    />
                                    <circle
                                        cx="48" cy="48" r="40"
                                        className={`${isGreen ? 'stroke-green-500' : 'stroke-indigo-600'} fill-none transition-all duration-1000 ease-out`}
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 40}
                                        strokeDashoffset={2 * Math.PI * 40 * (1 - kpi.val / 100)}
                                    />
                                </svg>
                                <span className={`absolute text-xl font-black ${isGreen ? 'text-green-600 dark:text-green-400' : 'text-neutral-900 dark:text-white'}`}>
                                    {kpi.val}%
                                </span>
                            </div>
                            <div className="text-center">
                                <h4 className={`text-[11px] font-black uppercase tracking-widest ${isGreen ? 'text-green-600 dark:text-green-400' : 'text-indigo-600 dark:text-indigo-400'} mb-1`}>{kpi.label}</h4>
                                {hasIncrement && (
                                    <p className="text-[10px] font-black text-green-600 dark:text-green-400 flex items-center justify-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                        INCREMENTO
                                    </p>
                                )}
                                {!hasIncrement && (
                                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">KPI Optimizado</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * Section: Key Decisions (Dynamic Vertical Containers)
 */
export const PharmafyDecisions = ({ data }) => {
    if (!data) return null;
    return (
        <div className="space-y-6 max-w-3xl mx-auto">
            {data.items.map((item, i) => (
                <div
                    key={i}
                    className="group flex items-start gap-6 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-md transition-all duration-300"
                >
                    {/* Dynamic Indicator */}
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            0{i + 1}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-lg">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
