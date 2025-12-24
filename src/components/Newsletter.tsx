import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Newsletter: React.FC = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">
                        {t.newsletter.title}
                    </h2>
                    <p className="text-gray-400 mb-8">
                        {t.newsletter.subtitle}
                    </p>

                    <form className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                        <input
                            type="email"
                            placeholder={t.newsletter.placeholder}
                            className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                        >
                            {t.newsletter.button} {isRTL ? '←' : '→'}
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4">
                        {t.newsletter.disclaimer}
                    </p>
                </div>
            </div>
        </section>
    );
};
