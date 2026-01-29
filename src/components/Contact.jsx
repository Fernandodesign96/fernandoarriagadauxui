import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../data/translations'

const Contact = () => {
    const { currentLang } = useLanguage()
    const t = translations[currentLang].contact

    // Form State
    const [formStatus, setFormStatus] = useState('idle') // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('sending')

        const form = e.target
        const data = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xqeqovgj', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
                // Reset status after 5 seconds to allow sending another message if needed
                setTimeout(() => setFormStatus('idle'), 5000)
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            setFormStatus('error')
        }
    }

    return (
        <div className="container-custom mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                    {t.title}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column: Contact Info */}
                <div className="flex flex-col justify-center gap-8 h-full">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-indigo-500/30 pb-4 inline-block">
                            {t.infoTitle}
                        </h3>

                        <div className="space-y-6">
                            <a href="mailto:fernandodesign96@gmail.com" className="flex items-center gap-4 text-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                                <span className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors text-indigo-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                fernandodesign96@gmail.com
                            </a>

                            <div className="flex items-center gap-4 text-lg text-slate-600 dark:text-slate-300">
                                <span className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-indigo-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </span>
                                +56 9 7451 5195
                            </div>

                            <div className="flex items-center gap-4 text-lg text-slate-600 dark:text-slate-300">
                                <span className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-indigo-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                {t.location}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        {/* Collapsed visual links */}
                        <a href="https://www.linkedin.com/in/fernando-arriagada-castillo-a68283180/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                            <span className="w-6 flex justify-center"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></span>
                            {t.links.linkedin}
                        </a>
                        <a href="https://github.com/Start-game-over" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                            <span className="w-6 flex justify-center"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></span>
                            {t.links.github}
                        </a>
                        <a href="https://drive.google.com/file/d/1wIBM0SO7vQGvGgDtebRt3I_b-ZO1E5Gn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                            <span className="w-6 flex justify-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></span>
                            {t.links.cv}
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 h-full">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        {t.formTitle}
                    </h3>

                    {formStatus === 'success' ? (
                        <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">Message Sent!</p>
                            <p className="text-slate-600 dark:text-slate-400">{t.status.success}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                                    {t.labels.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                                    {t.labels.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                                    {t.labels.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Hello..."
                                ></textarea>
                            </div>

                            {formStatus === 'error' && (
                                <p className="text-red-500 text-sm font-bold text-center bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">
                                    {t.status.error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="mt-2 w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t.status.sending}
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                        {t.cta}
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact
