import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BrandMarquee } from '../components/BrandMarquee';
import { HowItWorks } from '../components/HowItWorks';
import { ProductGrid } from '../components/ProductGrid';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Newsletter } from '../components/Newsletter';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { ChatWidget } from '../components/ChatWidget';

import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': t.faq.items.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Abonnements Premium en Algérie | Netflix, Spotify, YouTube"
        description="Achetez vos abonnements Netflix, Spotify, YouTube Premium en Algérie. Paiement sécurisé via BaridiMob et CCP. Livraison instantanée sans carte Visa."
        url="/"
        language={language}
        schema={faqSchema}
      />
      <HeroSection />
      <BrandMarquee />
      <HowItWorks />
      <ProductGrid />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <FloatingWhatsApp />
      <ChatWidget />
    </div>
  );
};
