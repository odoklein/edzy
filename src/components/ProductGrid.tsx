import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { IconSparkle } from './Icons';

export const ProductGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="section relative">
      {/* Decorative */}
      <div className="absolute top-20 right-[5%] opacity-20">
        <IconSparkle size={24} className="text-yellow-500" />
      </div>

      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-small uppercase tracking-wider mb-3">{t.products.label}</p>
          <h2 className="heading-lg">{t.products.title}</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-small">
            💬 {t.products.helpText}{' '}
            <a href="https://wa.me/213555123456" className="text-green-600 hover:underline font-medium">
              {t.products.contactUs}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
