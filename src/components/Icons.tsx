import React from 'react';

// Checkmark icon
export const IconCheck: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.15" />
        <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Arrow right
export const IconArrow: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Star decoration
export const IconStar: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
    </svg>
);

// Sparkle decoration
export const IconSparkle: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0l1 6 6 1-6 1-1 6-1-6-6-1 6-1z" />
    </svg>
);

// Lock/Security
export const IconLock: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Lightning/Fast
export const IconFast: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Shield/Guarantee
export const IconShield: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M10 2L3 5v4.5c0 4.5 3 8.5 7 9.5 4-1 7-5 7-9.5V5l-7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Cart
export const IconCart: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M5 5h12l-1.5 7H6.5L5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 5L4 2H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="16" r="1.5" fill="currentColor" />
        <circle cx="14.5" cy="16" r="1.5" fill="currentColor" />
    </svg>
);

// Upload
export const IconUpload: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 16V4m0 0l4 4m-4-4L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Product icons
export const IconNetflix: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#E50914" />
        <path d="M15 12h5l7 18V12h5v24h-5l-7-18v18h-5V12z" fill="white" />
    </svg>
);

export const IconSpotify: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#1DB954" />
        <path d="M16 19c5-1.5 11-1.5 16 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M17 24c4.5-1 9.5-1 14 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 29c4-0.8 8-0.8 12 0.8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

export const IconYoutube: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#FF0000" />
        <path d="M19 16v16l12-8-12-8z" fill="white" />
    </svg>
);

export const IconCanva: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#00C4CC" />
        <circle cx="24" cy="24" r="10" fill="white" />
        <circle cx="24" cy="24" r="5" fill="#00C4CC" />
    </svg>
);

export const getProductIcon = (productId: string, size = 48) => {
    const icons: Record<string, React.ReactNode> = {
        netflix: <IconNetflix size={size} />,
        spotify: <IconSpotify size={size} />,
        youtube: <IconYoutube size={size} />,
        canva: <IconCanva size={size} />,
    };
    return icons[productId] || <IconStar size={size} className="text-yellow-500" />;
};
