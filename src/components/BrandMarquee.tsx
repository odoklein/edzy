import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconNetflix, IconSpotify, IconYoutube, IconCanva } from './Icons';

const brands = [
    { icon: <IconNetflix size={40} />, name: 'Netflix' },
    { icon: <IconSpotify size={40} />, name: 'Spotify' },
    { icon: <IconYoutube size={40} />, name: 'YouTube' },
    { icon: <IconCanva size={40} />, name: 'Canva' },
];

export const BrandMarquee: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
            <div className="container-custom">
                <p className="text-center text-small uppercase tracking-wider mb-8">
                    {t.brands.title}
                </p>

                <div className="flex justify-center items-center gap-12 md:gap-20 flex-wrap">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200 cursor-pointer"
                        >
                            {brand.icon}
                            <span className="text-lg font-semibold text-gray-700 hidden md:inline">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
