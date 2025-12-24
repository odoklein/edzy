import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { IconCart } from './Icons';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.subscriptions, path: '/#products' },
    { label: t.nav.help, path: '/#help' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-900/5 border-b border-slate-100 py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0F172A] rounded-2xl flex items-center justify-center text-yellow-400 font-black italic scale-90 group-hover:scale-100 transition-transform">E</div>
            <span className="text-2xl font-black text-slate-900 italic tracking-tighter">Edzy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-[11px] font-black uppercase tracking-[2px] italic transition-all relative group ${location.pathname === item.path
                  ? 'text-slate-900'
                  : 'text-slate-400 hover:text-slate-900'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <LanguageToggle />

            <Link to="/checkout" className="flex items-center gap-3 bg-[#0F172A] text-white px-6 py-3 rounded-[18px] font-black uppercase text-[10px] tracking-[2px] italic hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg shadow-slate-900/10">
              <IconCart size={18} />
              <span className="hidden sm:inline">{t.nav.cart}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

