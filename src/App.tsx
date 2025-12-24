import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from './components/Footer';
import { Suspense, lazy } from 'react';

// Lazy loading pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductPage = lazy(() => import('./pages/ProductPage').then(m => ({ default: m.ProductPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })));

// Admin imports (lazy loading for performance)
const AdminLayout = lazy(() => import('./admin').then(m => ({ default: m.AdminLayout })));
const DashboardPage = lazy(() => import('./admin').then(m => ({ default: m.DashboardPage })));
const OrdersPage = lazy(() => import('./admin').then(m => ({ default: m.OrdersPage })));
const ProductsPage = lazy(() => import('./admin').then(m => ({ default: m.ProductsPage })));
const CustomersPage = lazy(() => import('./admin').then(m => ({ default: m.CustomersPage })));
const RevenuePage = lazy(() => import('./admin').then(m => ({ default: m.RevenuePage })));
const SettingsPage = lazy(() => import('./admin').then(m => ({ default: m.SettingsPage })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#041D06]">
    <div className="w-12 h-12 border-4 border-[#8DE713] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Analytics />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Admin Routes - No Header/Footer */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="customers" element={<CustomersPage />} />
                <Route path="revenue" element={<RevenuePage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>

              {/* Public Routes - With Header/Footer */}
              <Route
                path="/*"
                element={
                  <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
