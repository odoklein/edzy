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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif text-gray-900">
            Edzy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            <Link to="/checkout" className="btn-primary text-sm py-2.5 px-5">
              <IconCart size={18} />
              <span className="hidden sm:inline">{t.nav.cart}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
