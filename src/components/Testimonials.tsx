import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconStar } from './Icons';

export const Testimonials: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[4px] mb-4 bg-emerald-50 inline-block px-4 py-1.5 rounded-full border border-emerald-100 italic">
                        {t.testimonials.label}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight leading-tight">
                        {t.testimonials.title}
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.testimonials.reviews.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
                            {/* Quote Decoration */}
                            <div className="absolute -top-10 -right-4 text-[160px] text-slate-50 font-black italic opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">"</div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <IconStar key={i} size={16} className="text-yellow-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-slate-600 font-bold leading-relaxed mb-8 text-lg relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 bg-[#0F172A] rounded-2xl flex items-center justify-center font-black text-yellow-400 text-xl italic shadow-lg shadow-slate-900/10 group-hover:scale-110 transition-transform">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 italic tracking-tight">{testimonial.name}</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{testimonial.location} • {testimonial.product}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Stats */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: '2,500+', label: t.testimonials.stats.clients, icon: 'Users' },
                        { value: '15 min', label: t.testimonials.stats.delivery, icon: 'Zap' },
                        { value: '4.9/5', label: t.testimonials.stats.rating, icon: 'Star' },
                        { value: '99%', label: t.testimonials.stats.satisfaction, icon: 'Smile' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/50 backdrop-blur-sm p-8 rounded-[32px] border border-white shadow-sm text-center group hover:bg-white transition-colors">
                            <p className="text-3xl md:text-4xl font-black text-slate-900 italic tracking-tighter mb-2 group-hover:text-yellow-600 transition-colors">{stat.value}</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

