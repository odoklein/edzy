import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="help" className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[4px] mb-4 bg-slate-50 inline-block px-4 py-1.5 rounded-full border border-slate-100 italic">
                            {t.faq.label}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight leading-tight">
                            {t.faq.title}
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {t.faq.items.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-[28px] border transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-slate-50 border-slate-200 shadow-lg shadow-slate-200/50' : 'bg-white border-slate-100 hover:border-[#8DE713]/50 hover:shadow-md'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className={`w-full px-8 py-6 flex items-center justify-between text-${isRTL ? 'right' : 'left'} group`}
                                >
                                    <span className={`text-lg font-black italic tracking-tight transition-colors ${openIndex === index ? 'text-[#041D06]' : 'text-slate-900 group-hover:text-slate-700'}`}>{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#8DE713] text-[#041D06] rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className={`px-8 pb-8 text-slate-600 font-bold leading-relaxed text-base'}`}>
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still have questions */}
                    <div className="mt-20 relative group">
                        <div className="absolute inset-0 bg-[#8DE713] rounded-[40px] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative bg-[#041D06] rounded-[40px] p-12 text-center border border-white/5 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8DE713] opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <h3 className="text-3xl font-black text-white italic tracking-tight mb-4">{t.faq.moreQuestions}</h3>
                            <p className="text-slate-400 font-bold text-lg mb-10 max-w-lg mx-auto leading-relaxed">{t.faq.teamAvailable}</p>

                            <a
                                href="https://wa.me/213555123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 bg-[#8DE713] text-[#041D06] px-10 py-5 rounded-[22px] font-black uppercase text-[11px] tracking-[2px] italic hover:bg-white transition-all shadow-xl shadow-[#8DE713]/20"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
                                <span>{t.faq.contactWhatsApp}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

