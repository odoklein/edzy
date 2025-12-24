import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-white/10 hover:border-[#8DE713] transition-colors text-white"
      aria-label="Toggle language"
    >
      <span className="text-sm font-semibold text-white">
        {language === 'fr' ? '🇩🇿 AR' : '🇩🇿 FR'}
      </span>
    </button>
  );
};

