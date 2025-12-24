import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconCheck, IconLock } from './Icons';

interface TrustBadgesProps {
  className?: string;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ className }) => {
  const { t } = useLanguage();

  const badges = [
    { text: t.hero.trustBadges.payment, icon: <IconLock size={14} /> },
    { text: t.hero.trustBadges.delivery, icon: <span className="text-xs">⚡</span> },
    { text: t.hero.trustBadges.guarantee, icon: <IconCheck size={14} /> },
  ];

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className ?? ''}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full text-sm text-green-700"
        >
          <span className="text-green-600">{badge.icon}</span>
          <span className="font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};
