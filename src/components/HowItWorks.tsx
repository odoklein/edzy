import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = t.howItWorks.steps;

  // Icons for each step
  const stepIcons = ['🎯', '💳', '📸', '✨'];

  return (
    <section className="section-alt">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-small uppercase tracking-wider mb-3">{t.howItWorks.label}</p>
          <h2 className="heading-lg">{t.howItWorks.title}</h2>
        </div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Dashed connecting line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number in Soft Circle */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  {/* Soft background circle */}
                  <div className="absolute inset-0 bg-yellow-50 rounded-full" />
                  {/* Step number + icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-2xl mb-1">{stepIcons[index]}</span>
                    <span className="text-sm font-bold text-gray-400">0{index + 1}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-small leading-relaxed max-w-[200px] mx-auto">{step.description}</p>

                {/* Vertical connecting line for mobile - skip last item */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 border-l-2 border-dashed border-gray-200 mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
