import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { IconSparkle } from './Icons';

export const ProductGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-[#F8FAFC] relative">
      {/* Decorative */}
      <div className="absolute top-20 right-[5%] opacity-10 blur-sm">
        <IconSparkle size={120} className="text-[#8DE713]" />
      </div>
      <div className="absolute bottom-20 left-[5%] opacity-10 blur-sm">
        <IconSparkle size={80} className="text-[#8DE713]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[4px] mb-4 bg-slate-50 inline-block px-4 py-1.5 rounded-full italic border border-slate-100">
            {t.products.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight leading-tight">
            {t.products.title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-[24px] border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-[#8DE713]/10 rounded-full flex items-center justify-center text-[#8DE713]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
            </div>
            <p className="text-sm text-slate-600 font-bold">
              {t.products.helpText}{' '}
              <a href="https://wa.me/213555123456" className="text-[#041D06] hover:text-[#8DE713] transition-colors underline decoration-[#8DE713] decoration-2 underline-offset-4">
                {t.products.contactUs}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

