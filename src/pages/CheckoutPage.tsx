import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CheckoutForm } from '../components/CheckoutForm';
import { Product } from '../data/products';
import { getProductIcon, IconCheck } from '../components/Icons';

interface CartItem {
  product: Product;
  quantity: number;
}

export const CheckoutPage: React.FC = () => {
  const { t } = useLanguage();
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem('edzy_cart');
    if (storedCart) setCartItem(JSON.parse(storedCart));
  }, []);

  if (!cartItem) {
    return (
      <div className="section pt-32">
        <div className="container-custom">
          <div className="card text-center py-16 max-w-md mx-auto">
            <div className="text-5xl mb-4">🛒</div>
            <h1 className="heading-md mb-3">Votre panier est vide</h1>
            <p className="text-small mb-6">Ajoutez des produits pour continuer</p>
            <Link to="/" className="btn-primary">Découvrir nos offres</Link>
          </div>
        </div>
      </div>
    );
  }

  const total = cartItem.product.price * cartItem.quantity;

  // Checkout steps for progress indicator
  const steps = [
    { label: 'Récapitulatif', completed: true },
    { label: 'Paiement', completed: false },
    { label: 'Confirmation', completed: false },
  ];

  return (
    <div className="section pt-28">
      <div className="container-custom">
        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-center max-w-md mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${step.completed
                        ? 'bg-green-500 text-white'
                        : index === 1
                          ? 'bg-yellow-400 text-gray-900 ring-4 ring-yellow-100'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                  >
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${index === 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8 text-small">
          <Link to="/" className="hover:text-gray-900">{t.nav.home}</Link>
          <span className="mx-2">→</span>
          <Link to={`/product/${cartItem.product.id}`} className="hover:text-gray-900">{cartItem.product.name}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-6">{t.checkout.orderSummary}</h2>

              <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-100">
                <div className="w-14 h-14 flex-shrink-0">
                  {getProductIcon(cartItem.product.id, 56)}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{cartItem.product.name}</h3>
                  <p className="text-small">{cartItem.product.quality}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-small">× {cartItem.quantity}</span>
                    <span className="font-medium">{cartItem.product.price} DA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-gray-500">Sous-total</span><span>{total} DA</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Frais</span><span className="text-green-600">Gratuit</span></div>
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t border-gray-100">
                <span className="font-medium">{t.checkout.total}</span>
                <span className="text-2xl font-bold">{total} DA</span>
              </div>

              <div className="mt-6 space-y-2">
                {['Livraison 30 min', 'Garantie 30 jours'].map((text, i) => (
                  <div key={i} className="feature-check text-sm">
                    <IconCheck size={16} className="text-green-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};
