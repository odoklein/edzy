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

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
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
