import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="section-alt relative overflow-hidden">
            <div className="container-custom">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-small uppercase tracking-wider mb-3 text-yellow-600">{t.testimonials.label}</p>
                    <h2 className="heading-lg">{t.testimonials.title}</h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.testimonials.reviews.map((testimonial, index) => (
                        <div key={index} className="bg-[#FDF8F3] rounded-2xl p-8 relative">
                            {/* Quote mark */}
                            <div className="absolute -top-4 left-8 text-6xl text-yellow-300 font-serif">"</div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4 pt-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {testimonial.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.product}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">2,500+</p>
                        <p className="text-sm text-gray-500 mt-1">{t.testimonials.stats.clients}</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">15 min</p>
                        <p className="text-sm text-gray-500 mt-1">{t.testimonials.stats.delivery}</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">4.9/5</p>
                        <p className="text-sm text-gray-500 mt-1">{t.testimonials.stats.rating}</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">99%</p>
                        <p className="text-sm text-gray-500 mt-1">{t.testimonials.stats.satisfaction}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
