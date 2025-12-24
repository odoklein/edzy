import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconCheck } from './Icons';

export const Comparison: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const comparisons = [
        { feature: 'Netflix Premium 4K', edzy: '2,500 DA', official: '4,500 DA', savings: '44%' },
        { feature: 'Spotify Family (6 personnes)', edzy: '1,800 DA', official: '2,800 DA', savings: '36%' },
        { feature: 'YouTube Premium', edzy: '1,200 DA', official: '2,000 DA', savings: '40%' },
        { feature: 'Canva Pro Équipe', edzy: '3,000 DA', official: '5,000 DA', savings: '40%' },
    ];

    return (
        <section className="section-alt">
            <div className="container-custom">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-small uppercase tracking-wider mb-3 text-yellow-600">{t.comparison.label}</p>
                    <h2 className="heading-lg">{t.comparison.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Price Comparison Table */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-4 bg-gray-900 text-white text-sm font-medium">
                            <div className="px-4 py-4 col-span-1">{t.comparison.service}</div>
                            <div className="px-4 py-4 text-center bg-yellow-400 text-gray-900">Edzy</div>
                            <div className="px-4 py-4 text-center">{t.comparison.official}</div>
                            <div className="px-4 py-4 text-center">{t.comparison.savings}</div>
                        </div>

                        {comparisons.map((row, index) => (
                            <div key={index} className="grid grid-cols-4 border-b border-gray-100 last:border-0">
                                <div className="px-4 py-4 text-sm font-medium text-gray-900">{row.feature}</div>
                                <div className="px-4 py-4 text-center bg-yellow-50">
                                    <span className="font-bold text-gray-900">{row.edzy}</span>
                                </div>
                                <div className="px-4 py-4 text-center text-gray-400 line-through">{row.official}</div>
                                <div className="px-4 py-4 text-center">
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
                                        -{row.savings}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Prix indicatifs disclaimer */}
                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                            <p className="text-xs text-gray-400 text-center">* Prix indicatifs, susceptibles de changer. Dernière mise à jour : Décembre 2025</p>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-6">
                            {t.comparison.benefits.title}
                        </h3>

                        <div className="space-y-4 mb-8">
                            {t.comparison.benefits.items.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <IconCheck size={24} className="text-green-500" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gray-900 rounded-2xl p-6 text-white">
                            <p className="text-lg font-semibold mb-2">{t.comparison.cta.title}</p>
                            <p className="text-gray-400 text-sm mb-4">{t.comparison.cta.subtitle}</p>
                            <a
                                href="#products"
                                className={`inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors`}
                            >
                                <span>{t.comparison.cta.button}</span>
                                <span className={isRTL ? 'rotate-180' : ''}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
