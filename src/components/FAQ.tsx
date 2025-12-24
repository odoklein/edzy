import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="help" className="section">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <p className="text-small uppercase tracking-wider mb-3 text-green-600">{t.faq.label}</p>
                        <h2 className="heading-lg">{t.faq.title}</h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {t.faq.items.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className={`w-full px-6 py-5 flex items-center justify-between text-${isRTL ? 'right' : 'left'}`}
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className={`px-6 pb-5 text-gray-600 leading-relaxed text-${isRTL ? 'right' : 'left'}`}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still have questions */}
                    <div className="mt-12 text-center p-8 bg-green-50 rounded-2xl">
                        <p className="text-lg font-semibold text-gray-900 mb-2">{t.faq.moreQuestions}</p>
                        <p className="text-gray-600 mb-4">{t.faq.teamAvailable}</p>
                        <a
                            href="https://wa.me/213555123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                        >
                            <span>💬</span>
                            <span>{t.faq.contactWhatsApp}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
