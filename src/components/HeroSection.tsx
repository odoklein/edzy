import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrustBadges } from './TrustBadges';
import { IconArrow } from './Icons';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#041D06]">
      {/* Background People Image - Absolute positioned */}
      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <img
          src="/ChatGPT Image Dec 24, 2025, 12_22_04 AM.png"
          alt="Happy customers using streaming services"
          className="w-full max-w-6xl h-[60%] object-cover object-top"
          fetchPriority="high"
          loading="eager"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)'
          }}
        />
      </div>

      {/* Text Content - Absolute positioned at top */}
      <div className="absolute inset-x-0 top-0 z-10 pt-28 md:pt-32 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
              <span className="text-[#8DE713]">✓</span>
              <span className="text-sm font-bold text-white/90">{t.hero.badge}</span>
            </div>

            {/* Headline - Qatar2022Arabic in Arabic */}
            <h1 className="heading-xl mb-6 text-white">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-body max-w-xl mx-auto mb-4 text-white/80">
              {t.hero.subheadline}
            </p>

            <p className="text-small max-w-lg mx-auto mb-10 text-white/60">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button onClick={scrollToProducts} className="btn-primary">
                <span>{t.hero.cta}</span>
                <IconArrow className={isRTL ? 'rotate-180' : ''} />
              </button>
              <button onClick={scrollToProducts} className="btn-secondary">
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Trust Badges */}
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  );
};
