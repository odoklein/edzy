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
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90"
        >
          <span className="text-[#8DE713]">{badge.icon}</span>
          <span className="font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};
