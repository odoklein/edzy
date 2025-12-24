import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors"
      aria-label="Toggle language"
    >
      <span className="text-sm font-semibold">
        {language === 'fr' ? '🇩🇿 AR' : '🇩🇿 FR'}
      </span>
    </button>
  );
};

