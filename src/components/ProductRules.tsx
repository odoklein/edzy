import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProductRulesProps {
  rules: string[];
}

export const ProductRules: React.FC<ProductRulesProps> = ({ rules }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mt-8">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">⚠️</span>
        <h3 className="text-xl font-display font-bold text-amber-900">
          {t.productPage.rules}
        </h3>
      </div>
      <p className="text-amber-800 mb-4 font-medium">
        {t.productPage.rulesWarning}
      </p>
      <ul className="space-y-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start gap-2 text-amber-900">
            <span className="text-amber-600 font-bold mt-1">•</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

