import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconNetflix, IconSpotify, IconYoutube, IconCanva } from './Icons';

export const Footer: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'f', hoverBg: 'hover:bg-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'IG', hoverBg: 'hover:bg-pink-600' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: 'TT', hoverBg: 'hover:bg-gray-800' },
    { name: 'WhatsApp', url: 'https://wa.me/213555123456', icon: 'WA', hoverBg: 'hover:bg-green-600' },
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10 container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block text-3xl font-serif mb-4">
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
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold transition-all hover:text-white hover:scale-110 ${social.hoverBg}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{language === 'ar' ? 'منتجاتنا' : 'Nos Produits'}</h4>
            <ul className="space-y-3">
              {products.map((product, i) => (
                <li key={i}>
                  <Link
                    to={`/product/${product.name.toLowerCase()}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">{product.icon}</span>
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.support}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#help" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>❓</span> {t.footer.faq}
                </a>
              </li>
              <li>
                <a href="/#payment" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>💳</span> {t.footer.paymentMethods}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>📜</span> {language === 'ar' ? 'شروط الاستخدام' : 'Conditions d\'utilisation'}
                </a>
              </li>
              <li>
                <a href="/#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>🔒</span> {language === 'ar' ? 'سياسة الخصوصية' : 'Politique de confidentialité'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.contact}</h4>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="space-y-4">
                <a
                  href="mailto:contact@edzy.dz"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">📧</span>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm">contact@edzy.dz</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/213555123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">💬</span>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-sm">+213 555 123 456</p>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-1">{language === 'ar' ? 'ساعات العمل' : 'Horaires'}</p>
                <p className="text-sm text-gray-300">
                  {language === 'ar' ? '7 أيام / 7 • 9 صباحاً - 11 مساءً' : '7j/7 • 9h - 23h'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-8 border-y border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">{language === 'ar' ? 'طرق الدفع' : 'Paiement sécurisé'}</span>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>💳</span> BaridiMob
                </div>
                <div className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>🏛️</span> CCP
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">{language === 'ar' ? 'مضمون بـ' : 'Garanti par'}</span>
              <div className="flex items-center gap-2 text-green-400">
                <span>🛡️</span>
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
            <span>🇩🇿</span>
            <span>{language === 'ar' ? 'صنع في الجزائر بكل ❤️' : 'Fait en Algérie avec ❤️'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
