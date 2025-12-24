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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#041D06]/95 backdrop-blur-xl shadow-xl shadow-black/20 py-2 border-b border-white/5'
        : 'bg-[#041D06] py-4'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="group">
            <img src="/logofront.png" alt="Edzy" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-[11px] font-black uppercase tracking-[2px] italic transition-all relative group ${location.pathname === item.path
                  ? 'text-[#8DE713]'
                  : 'text-white/70 hover:text-white'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8DE713] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <LanguageToggle />

            <Link to="/checkout" className="flex items-center gap-3 bg-[#8DE713] text-[#041D06] px-6 py-3 rounded-[18px] font-black uppercase text-[10px] tracking-[2px] italic hover:bg-white transition-all shadow-lg shadow-black/10">
              <IconCart size={18} />
              <span className="hidden sm:inline">{t.nav.cart}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

