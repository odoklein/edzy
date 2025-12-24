import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { ProductRules } from '../components/ProductRules';
import { getProductIcon, IconCheck, IconCart } from '../components/Icons';
import { SEO } from '../components/SEO';
import { useAnalytics } from '../hooks/useAnalytics';

export const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { trackOrderStarted } = useAnalytics();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="section pt-32">
        <SEO title="Produit non trouvé" description="Le produit que vous recherchez n'existe pas." />
        <div className="container-custom text-center">
          <div className="card max-w-md mx-auto">
            <div className="text-5xl mb-4">🔍</div>
            <h1 className="heading-md mb-4">Produit non trouvé</h1>
            <Link to="/" className="btn-primary">Retour à l'accueil</Link>
          </div>
        </div>
      </div>
    );
  }

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': `https://edzy.dz/products/${product.id}.jpg`,
    'brand': {
      '@type': 'Brand',
      'name': 'Edzy'
    },
    'offers': {
      '@type': 'Offer',
      'url': `https://edzy.dz/product/${product.id}`,
      'priceCurrency': 'DZD',
      'price': product.price,
      'availability': 'https://schema.org/InStock',
      'priceValidUntil': '2026-12-31'
    }
  };

  const handleAddToCart = () => {
    trackOrderStarted(product.id, product.price * quantity);
    localStorage.setItem('edzy_cart', JSON.stringify({ product, quantity }));
    navigate('/checkout');
  };

  return (
    <div className="section pt-28">
      <SEO
        title={`${product.name} prix Algérie`}
        description={`Achetez votre abonnement ${product.name} en Algérie au meilleur prix (${product.price} DA). Livraison rapide par WhatsApp. Paiement BaridiMob & CCP.`}
        type="product"
        url={`/product/${product.id}`}
        schema={productSchema}
        language={language}
      />
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8 text-small">
          <Link to="/" className="hover:text-gray-900">{t.nav.home}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Product Info */}
          <div className="card text-center">
            {discountPercent > 0 && (
              <div className="inline-block badge-discount mb-4">-{discountPercent}% OFF</div>
            )}

            <div className="flex justify-center mb-6">
              {getProductIcon(product.id, 80)}
            </div>

            <h1 className="heading-lg mb-2">{product.name}</h1>
            <p className="text-small mb-6">{product.quality} • {product.duration}</p>
            <p className="text-body mb-8">{product.description}</p>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {['Paiement sécurisé', 'Livraison rapide', 'Garantie 30j'].map((text, i) => (
                <div key={i} className="text-center">
                  <IconCheck size={24} className="text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Purchase (Sticky on desktop) */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="card">
              <div className="flex justify-between items-baseline mb-8">
                <div>
                  <p className="text-small">Ancien prix</p>
                  <p className="text-xl text-gray-400 line-through">{product.originalPrice} DA</p>
                </div>
                <div className="text-right">
                  <p className="text-small">Prix final</p>
                  <p className="text-4xl font-bold text-gray-900">{product.price} <span className="text-lg font-normal text-gray-500">DA</span></p>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantité</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-900 transition-colors"
                  >−</button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-900 transition-colors"
                  >+</button>
                </div>
              </div>

              <button onClick={handleAddToCart} className="w-full btn-primary">
                <IconCart size={20} />
                <span>{t.products.addToCart}</span>
              </button>

              {/* Renewal info */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🔄 Renouvellement facile avant expiration
              </p>
            </div>

            {/* What happens after payment */}
            <div className="card bg-green-50 border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>📋</span>
                Après votre paiement
              </h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">1.</span>
                  <span>Nous vérifions votre paiement (5-15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">2.</span>
                  <span>Vous recevez vos accès par WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">3.</span>
                  <span>Support disponible 24/7 si besoin</span>
                </li>
              </ol>
            </div>

            {/* Features */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">{t.productPage.benefits}</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="feature-check">
                    <IconCheck size={18} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ProductRules rules={product.rules} />
          </div>
        </div>
      </div>
    </div>
  );
};
