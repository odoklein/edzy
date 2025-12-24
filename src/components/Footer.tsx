import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconNetflix, IconSpotify, IconYoutube, IconCanva, IconShield, IconLock } from './Icons';

// Social Media Icons
const IconFacebook: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconInstagram: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconTiktok: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const IconWhatsApp: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Utility Icons for Footer
const IconMail: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

const IconMessage: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

const IconHelp: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconCreditCard: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const IconFileText: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconClock: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: <IconFacebook size={18} />, hoverBg: 'hover:bg-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com', icon: <IconInstagram size={18} />, hoverBg: 'hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: <IconTiktok size={18} />, hoverBg: 'hover:bg-black' },
    { name: 'WhatsApp', url: 'https://wa.me/213555123456', icon: <IconWhatsApp size={18} />, hoverBg: 'hover:bg-green-600' },
  ];

  const products = [
    { icon: <IconNetflix size={24} />, name: 'Netflix' },
    { icon: <IconSpotify size={24} />, name: 'Spotify' },
    { icon: <IconYoutube size={24} />, name: 'YouTube' },
    { icon: <IconCanva size={24} />, name: 'Canva' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block text-3xl font-serif mb-4 hover:opacity-80 transition-opacity">
              <span className="text-yellow-400">E</span>dzy
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.aboutText}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all hover:text-white hover:scale-110 ${social.hoverBg}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">{language === 'ar' ? 'منتجاتنا' : 'Nos Produits'}</h4>
            <ul className="space-y-3">
              {products.map((product, i) => (
                <li key={i}>
                  <Link
                    to={`/product/${product.name.toLowerCase()}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">{product.icon}</span>
                    <span className="text-sm">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">{t.footer.support}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#help" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <span className="text-gray-500"><IconHelp size={18} /></span>
                  {t.footer.faq}
                </a>
              </li>
              <li>
                <a href="/#payment" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <span className="text-gray-500"><IconCreditCard size={18} /></span>
                  {t.footer.paymentMethods}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <span className="text-gray-500"><IconFileText size={18} /></span>
                  {language === 'ar' ? 'شروط الاستخدام' : 'Conditions d\'utilisation'}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <span className="text-gray-500"><IconLock size={18} /></span>
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Politique de confidentialité'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@edzy.dz"
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-500 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-all">
                    <IconMail size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm">contact@edzy.dz</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/213555123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-500 group-hover:text-green-400 group-hover:bg-green-400/10 transition-all">
                    <IconMessage size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-sm">+213 555 123 456</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 pt-2">
                <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-500">
                  <IconClock size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">{language === 'ar' ? 'ساعات العمل' : 'Horaires'}</p>
                  <p className="text-sm">{language === 'ar' ? '7 أيام / 7 • 9 صباحاً - 11 مساءً' : '7j/7 • 9h - 23h'}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-8 border-y border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">{language === 'ar' ? 'طرق الدفع' : 'Paiement sécurisé'}</span>
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm font-medium flex items-center gap-2 text-blue-400">
                  <IconCreditCard size={16} />
                  BaridiMob
                </div>
                <div className="px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-lg text-sm font-medium flex items-center gap-2 text-yellow-400">
                  <IconCreditCard size={16} />
                  CCP
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">{language === 'ar' ? 'مضمون بـ' : 'Garanti par'}</span>
              <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20">
                <IconShield size={18} />
                <span className="text-sm font-medium">{language === 'ar' ? 'ضمان 30 يوم' : 'Garantie 30 jours'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Edzy. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-lg">🇩🇿</span>
            <span>{language === 'ar' ? 'صنع في الجزائر بكل' : 'Fait en Algérie avec'}</span>
            <span className="text-red-500">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
