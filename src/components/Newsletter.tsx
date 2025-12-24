import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Newsletter: React.FC = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[120px] -mr-300 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[100px] -ml-200 -mb-32"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-[48px] p-12 md:p-20 border border-white/10 shadow-2xl">
                    <div className="text-center">
                        <p className="text-[11px] font-black text-yellow-400 uppercase tracking-[4px] mb-6 italic opacity-80">
                            {t.newsletter.title.split(' ')[0]}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black italic tracking-tight mb-6 leading-tight">
                            {t.newsletter.title}
                        </h2>
                        <p className="text-slate-400 font-bold text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                            {t.newsletter.subtitle}
                        </p>

                        <form className={`flex flex-col sm:flex-row gap-4 max-w-xl mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    placeholder={t.newsletter.placeholder}
                                    className="w-full px-8 py-5 rounded-[22px] bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all"
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-12 py-5 bg-yellow-400 text-slate-900 rounded-[22px] font-black uppercase text-[11px] tracking-[2px] italic hover:bg-white transition-all shadow-xl shadow-yellow-400/20"
                            >
                                {t.newsletter.button}
                            </button>
                        </form>

                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-8 opacity-50 italic">
                            {t.newsletter.disclaimer}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

