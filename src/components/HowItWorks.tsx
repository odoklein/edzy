import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const StepIconSelectors = [
  // Step 1: Browse/Select
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  // Step 2: Pay
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
  // Step 3: Capture
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  // Step 4: Magic/Success
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
];

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const steps = t.howItWorks.steps;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-[11px] font-black text-yellow-600 uppercase tracking-[4px] mb-4 bg-yellow-50 inline-block px-4 py-1.5 rounded-full border border-yellow-100 italic">
            {t.howItWorks.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight leading-tight">
            {t.howItWorks.title}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-8 p-1">
                {/* Border Ring */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-dashed border-slate-100 group-hover:border-yellow-400 transition-all duration-500 group-hover:rotate-45"></div>

                {/* Background Blob */}
                <div className="relative w-28 h-28 bg-slate-50 rounded-[28px] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0F172A] group-hover:shadow-xl group-hover:shadow-slate-900/10">
                  {StepIconSelectors[index]({
                    className: "w-10 h-10 text-slate-400 group-hover:text-yellow-400 transition-colors duration-300"
                  })}

                  {/* Small Number Badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-100">
                    <span className="text-sm font-black text-slate-900 italic">0{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4">
                <h3 className="text-xl font-black text-slate-900 italic tracking-tight mb-3 group-hover:text-yellow-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Horizontal connection - Desktop and lg only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[20%] w-[10%] border-t-2 border-dashed border-slate-100" style={{ left: `${(index + 1) * 25 - 5}%` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

