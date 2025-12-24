import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CheckoutPage } from './pages/CheckoutPage';

// Admin imports
import {
  AdminLayout,
  DashboardPage,
  OrdersPage,
  ProductsPage,
  CustomersPage,
  RevenuePage,
  SettingsPage,
} from './admin';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Analytics />
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
      </Router>
    </LanguageProvider>
  );
}

export default App;
