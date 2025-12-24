import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconCheck } from './Icons';

export const Comparison: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const comparisons = [
        { feature: 'Netflix Premium 4K', edzy: '2,500 DA', official: '4,500 DA', savings: '44%' },
        { feature: 'Spotify Family (6 pers)', edzy: '1,800 DA', official: '2,800 DA', savings: '36%' },
        { feature: 'YouTube Premium', edzy: '1,200 DA', official: '2,000 DA', savings: '40%' },
        { feature: 'Canva Pro Équipe', edzy: '3,000 DA', official: '5,000 DA', savings: '40%' },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <p className="text-[11px] font-black text-[#8DE713] uppercase tracking-[4px] mb-4 bg-[#8DE713]/10 inline-block px-4 py-1.5 rounded-full border border-[#8DE713]/20 italic">
                        {t.comparison.label}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight leading-tight">
                        {t.comparison.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Price Comparison Table */}
                    <div className="bg-white rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50">
                        <div className="grid grid-cols-4 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-widest italic">
                            <div className="px-6 py-6 col-span-1 border-r border-slate-800">{t.comparison.service}</div>
                            <div className="px-6 py-6 text-center bg-[#8DE713] text-[#041D06]">Edzy</div>
                            <div className="px-6 py-6 text-center border-l border-slate-800">{t.comparison.official}</div>
                            <div className="px-6 py-6 text-center border-l border-slate-800">Ratio</div>
                        </div>

                        {comparisons.map((row, index) => (
                            <div key={index} className="grid grid-cols-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                <div className="px-6 py-6 text-sm font-black text-slate-900 italic tracking-tight">{row.feature}</div>
                                <div className="px-6 py-6 text-center bg-[#8DE713]/5">
                                    <span className="text-lg font-black text-[#041D06] italic">{row.edzy}</span>
                                </div>
                                <div className="px-6 py-6 text-center text-slate-400 font-bold line-through opacity-50">{row.official}</div>
                                <div className="px-6 py-6 text-center flex items-center justify-center">
                                    <span className="inline-block px-4 py-1.5 bg-[#8DE713]/10 text-[#8DE713] text-[10px] font-black rounded-full uppercase tracking-tighter shadow-sm border border-[#8DE713]/20">
                                        ÉCO. {row.savings}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Prix indicatifs disclaimer */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                            <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest italic">* Données comparatives basées sur les tarifs officiels au 24/12/2025</p>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 italic tracking-tight mb-10 leading-snug">
                                {t.comparison.benefits.title}
                            </h3>

                            <div className="space-y-6 mb-12">
                                {t.comparison.benefits.items.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-[#8DE713] rounded-2xl flex items-center justify-center text-[#041D06] shadow-lg shadow-[#8DE713]/20 group-hover:scale-110 transition-transform">
                                            <IconCheck size={20} />
                                        </div>
                                        <span className="text-slate-700 font-bold text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-[#041D06] rounded-[40px] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8DE713] opacity-10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <p className="text-sm font-black text-[#8DE713] uppercase tracking-[3px] mb-3 italic">{t.comparison.cta.title}</p>
                            <p className="text-slate-400 text-lg font-bold mb-8 transition-colors group-hover:text-white leading-relaxed">{t.comparison.cta.subtitle}</p>

                            <a
                                href="#products"
                                className={`inline-flex items-center gap-3 bg-white text-[#041D06] px-10 py-5 rounded-[22px] font-black uppercase text-[11px] tracking-[2px] italic hover:bg-[#8DE713] transition-all shadow-xl shadow-black/50 hover:shadow-[#8DE713]/20`}
                            >
                                <span>{t.comparison.cta.button}</span>
                                <span className={`${isRTL ? 'rotate-180' : ''} group-hover:translate-x-1 transition-transform`}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

