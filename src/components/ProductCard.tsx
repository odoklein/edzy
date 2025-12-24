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
    <Link to={`/product/${product.id}`} className="card block group relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Discount Badge */}
      {discountPercent > 0 && (
        <div className="absolute top-4 right-4">
          <span className="badge-discount">-{discountPercent}%</span>
        </div>
      )}

      {/* Product Icon */}
      <div className="flex justify-center mb-5">
        {getProductIcon(product.id, 56)}
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-center text-gray-900 mb-1 group-hover:text-gray-700">
        {product.name}
      </h3>

      {/* Quality */}
      <p className="text-small text-center mb-4">{product.quality}</p>

      {/* Description */}
      <p className="text-small text-center mb-5 min-h-[40px]">
        {product.description}
      </p>

      {/* Price */}
      <div className="text-center mb-5">
        <div className="text-xs text-gray-400 line-through mb-1">{product.originalPrice} DA</div>
        <div className="text-2xl font-bold text-gray-900">
          {product.price} <span className="text-sm font-normal text-gray-500">DA/{product.duration}</span>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full btn-primary text-sm">
        <span>{t.products.viewOffer}</span>
      </button>
    </Link>
  );
};
