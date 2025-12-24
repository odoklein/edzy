import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Product } from '../data/products';
import { getProductIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="group relative bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Background Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Discount Badge */}
      {discountPercent > 0 && (
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
            -{discountPercent}%
          </span>
        </div>
      )}

      {/* Product Icon */}
      <div className="flex justify-center mb-8 relative">
        <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 group-hover:bg-white group-hover:border-yellow-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-slate-200/50">
          {getProductIcon(product.id, 64)}
        </div>
      </div>

      {/* Product Details */}
      <div className="text-center flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-black text-slate-900 italic tracking-tight group-hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[2px] mt-1">{product.quality}</p>
        </div>

        <p className="text-sm text-slate-500 font-bold leading-relaxed mb-8 flex-1">
          {product.description}
        </p>

        {/* Pricing Section */}
        <div className="bg-slate-50 rounded-[28px] p-6 border border-slate-100 mb-8 group-hover:bg-slate-900 group-hover:border-slate-800 transition-all duration-300">
          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Tarif Exceptionnel</div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-rose-500 font-bold line-through opacity-50 mb-1 group-hover:opacity-30">{product.originalPrice} DA</span>
            <div className="text-3xl font-black text-slate-900 italic tracking-tighter group-hover:text-white transition-colors">
              {product.price.toLocaleString()} <span className="text-xs font-black uppercase text-slate-400 group-hover:text-yellow-400">DA</span>
            </div>
            <div className="text-[10px] font-black text-slate-400 uppercase mt-1 group-hover:text-slate-500 transition-colors">Service pour {product.duration}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full bg-[#0F172A] text-white font-black py-4 rounded-[22px] transition-all group-hover:bg-yellow-400 group-hover:text-slate-900 shadow-xl shadow-slate-900/10 group-hover:shadow-yellow-400/30 uppercase text-[11px] tracking-[2px] italic">
          {t.products.viewOffer}
        </div>
      </div>
    </Link>
  );
};

